const drawList = (selection, listStyle) =>
{
    const textArr = parseText(selection.characters);
    const selectionHeight = getLineHeight(selection);

    // parent frame
    let newList = figma.createFrame();
    Object.assign(newList,
    {
        counterAxisSizingMode: 'AUTO',
        fills: [],
        layoutMode: 'VERTICAL',
        name: 'ul',
        x: selection.x,
        y: selection.y,
    })

    for (let i = 0; i < textArr.length; i++)
    {
        // child frame
        let newFrame = figma.createFrame();
        Object.assign(newFrame,
        {
            counterAxisSizingMode: 'AUTO',
            fills: [],
            layoutAlign: 'MIN',
            layoutMode: 'HORIZONTAL',
            name: 'li',
        })

        // child bullet
        let newBullet = selection.clone();
        newBullet.resize(selectionHeight, selectionHeight);
        Object.assign(newBullet,
        {
            layoutAlign: 'MIN',
            paragraphIndent: 0,
            rotation: 0,
            textAlignHorizontal: 'CENTER',
            textAlignVertical: 'TOP',
            textAutoResize: 'NONE',
        })
        if (listStyle === 'bullet')
        {
            newBullet.characters = '•';
        }
        else if (listStyle === 'hyphen')
        {
            newBullet.characters = '-';
        }

        // child content
        let newText = selection.clone();
        newText.resize(selection.width, selectionHeight);
        Object.assign(newText,
        {
            characters: textArr[i],
            layoutAlign: 'MIN',
            paragraphIndent: 0,
            rotation: 0,
            textAlignHorizontal: 'LEFT',
            textAlignVertical: 'TOP',
            textAutoResize: 'HEIGHT',
        })

        // assemble
        newFrame.appendChild(newBullet);
        newFrame.appendChild(newText);
        newList.appendChild(newFrame);
    }

    selection.parent.appendChild(newList);
    selection.remove();
}

const getLineHeight = node =>
{
    let newText = node.clone();
    Object.assign(newText,
    {
        characters: '00',
        rotation: 0,
        textAutoResize: 'WIDTH_AND_HEIGHT',
    })
    let lineHeight = newText.height;
    newText.remove();
    return lineHeight;
}

const loadFont = async node =>
{
    if (node && node.type === 'TEXT')
    {
        for (let i = 0; i < node.characters.length; i++)
        {
            try
            {
                await figma.loadFontAsync(node.getRangeFontName(i, i + 1));
            }
            catch(err)
            {
                console.log(err);
            }
        }
    }
}

const parseText = str =>
{
    const newLineRegex = /^.*/gm;
    const arr = str.match(newLineRegex); // match new lines
    for (let i = 0; i < arr.length; i++)
    {
        const bulletRegex = /^[•-]?\s*/g;
        arr[i] = arr[i].replace(bulletRegex, ''); // replace bullets
    }
    return arr;
}

export { drawList, loadFont };
