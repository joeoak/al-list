const drawList = async (selection, listStyle) =>
{
    await figma.loadFontAsync(selection.fontName);

    let newList = figma.createFrame();
    Object.assign(newList,
    {
        counterAxisSizingMode: 'AUTO',
        fills: [],
        itemSpacing: selection.paragraphSpacing,
        layoutMode: 'VERTICAL',
        name: 'ul',
        x: selection.x,
        y: selection.y,
    })

    const textArr = parseText(selection.characters);

    for (let i = 0; i < textArr.length; i++)
    {
        let newFrame = figma.createFrame();
        Object.assign(newFrame,
        {
            counterAxisSizingMode: 'AUTO',
            fills: [],
            layoutMode: 'HORIZONTAL',
            name: 'li',
        })

        let newBullet = selection.clone();
        Object.assign(newBullet,
        {
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
        newBullet.resize(selection.lineHeight.value, selection.lineHeight.value);

        let newText = selection.clone();
        Object.assign(newText,
        {
            characters: textArr[i],
            textAlignHorizontal: 'LEFT',
            textAlignVertical: 'TOP',
            textAutoResize: 'HEIGHT',
        })
        newText.resize(selection.width - selection.lineHeight.value, selection.lineHeight.value);

        // assemble
        newFrame.appendChild(newBullet);
        newFrame.appendChild(newText);
        newList.appendChild(newFrame);
    }

    figma.currentPage.appendChild(newList);
    selection.remove();
}

const parseText = (str) =>
{
    let arr = str.split(/\n/g);
    return arr;
}

export { drawList };