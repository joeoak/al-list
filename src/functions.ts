const drawList = (selection, listStyle) =>
{
    const textArr = parseText(selection.characters);
    const selectionHeight = getLineHeight(selection);

    let newList = figma.createFrame(); // parent frame
    Object.assign(newList,
    {
        counterAxisSizingMode: 'FIXED',
        constraints: selection.constraints,
        fills: [],
        itemSpacing: selection.paragraphSpacing,
        layoutMode: 'VERTICAL',
        name: 'ul',
        x: selection.x,
        y: selection.y,
    })
    newList.resize(selection.width + selectionHeight, selection.height);

    for (let i = 0; i < textArr.length; i++)
    {
        let newFrame = figma.createFrame(); // child frame
        Object.assign(newFrame,
        {
            counterAxisSizingMode: 'AUTO',
            fills: [],
            layoutAlign: 'MIN',
            layoutMode: 'HORIZONTAL',
            name: 'li',
        })

        let newBullet = selection.clone(); // child bullet
        Object.assign(newBullet,
        {
            layoutAlign: 'MIN',
            rotation: 0,
            textAlignHorizontal: 'CENTER',
            textAlignVertical: 'TOP',
            textAutoResize: 'HEIGHT',
        })
        if (listStyle === 'bullet')
        {
            newBullet.characters = '•';
        }
        else if (listStyle === 'hyphen')
        {
            newBullet.characters = '-';
        }
        newBullet.resize(selectionHeight, selectionHeight);

        let newText = selection.clone(); // child content
        Object.assign(newText,
        {
            characters: textArr[i],
            layoutAlign: 'MIN',
            rotation: 0,
            textAlignHorizontal: 'LEFT',
            textAlignVertical: 'TOP',
            textAutoResize: 'HEIGHT',
        })
        newText.resize(selection.width, selectionHeight);

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
    const arr = str.split(/\n/g); // split by line break

    // remove any existing • or -
    for (let i = 0; i < arr.length; i++)
    {
        const firstChar = arr[i].charAt(0);

        if (firstChar === '•' || firstChar === '-')
        {
            let isSpace = true;
            let j = 1;

            while (isSpace === true)
            {
                (arr[i][j] === ' ') ? j++ : isSpace = false;
            }

            arr[i] = arr[i].slice(j, arr[i].length);
        }
    }

    return arr;
}

export { drawList, loadFont };
