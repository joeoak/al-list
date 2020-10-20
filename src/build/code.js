/* src/build/code.js 0 */
(function(exports){

'use strict';

var VERSION = "0", DEBUG = false;
var global=void 0!==global?global:"undefined"!=typeof window?window:this;function _stackTrace(cons){const x={stack:""};if(Error.captureStackTrace){Error.captureStackTrace(x,cons);const p=x.stack.indexOf("\n");if(-1!=p)return x.stack.substr(p+1)}return x.stack}function _parseStackFrame(sf){let m=/^\s*at\s+([^\s]+)\s+\((?:.+\/(src\/[^\:]+)|([^\:]+))\:(\d+)\:(\d+)\)$/.exec(sf);return m?{func:m[1],file:m[2]||m[3],line:parseInt(m[4]),col:parseInt(m[5])}:null}function panic(msg){if(console.error.apply(console,["panic:",msg].concat(Array.prototype.slice.call(arguments,1))),"undefined"==typeof process){let e=new Error(msg);throw e.name="Panic",e}console.error(_stackTrace(panic)),process.exit(2)}function print(){console.log.apply(console,Array.prototype.slice.call(arguments))}const dlog=()=>{};function assert(){}function repr(obj){try{return JSON.stringify(obj,null,2)}catch(_){return String(obj)}}


const drawList = async (selection, listStyle) => {
    await figma.loadFontAsync(selection.fontName);
    let newList = figma.createFrame();
    Object.assign(newList, {
        counterAxisSizingMode: 'AUTO',
        fills: [],
        itemSpacing: selection.paragraphSpacing,
        layoutMode: 'VERTICAL',
        name: 'ul',
        x: selection.x,
        y: selection.y,
    });
    const textArr = parseText(selection.characters);
    for (let i = 0; i < textArr.length; i++) {
        let newFrame = figma.createFrame();
        Object.assign(newFrame, {
            counterAxisSizingMode: 'AUTO',
            fills: [],
            layoutMode: 'HORIZONTAL',
            name: 'li',
        });
        let newBullet = selection.clone();
        Object.assign(newBullet, {
            textAlignHorizontal: 'CENTER',
            textAlignVertical: 'TOP',
            textAutoResize: 'HEIGHT',
        });
        if (listStyle === 'bullet') {
            newBullet.characters = '•';
        }
        else if (listStyle === 'hyphen') {
            newBullet.characters = '-';
        }
        newBullet.resize(selection.lineHeight.value, selection.lineHeight.value);
        let newText = selection.clone();
        Object.assign(newText, {
            characters: textArr[i],
            textAlignHorizontal: 'LEFT',
            textAlignVertical: 'TOP',
            textAutoResize: 'HEIGHT',
        });
        newText.resize(selection.width - selection.lineHeight.value, selection.lineHeight.value);
        newFrame.appendChild(newBullet);
        newFrame.appendChild(newText);
        newList.appendChild(newFrame);
    }
    figma.currentPage.appendChild(newList);
    selection.remove();
};
const parseText = (str) => {
    let arr = str.split(/\n/g);
    return arr;
};

let selection = figma.currentPage.selection[0];
figma.showUI(__html__);
figma.ui.onmessage = msg => {
    if (msg.type === 'draw-list') {
        if (selection.type === 'TEXT') {
            drawList(selection, msg.listStyle);
        }
        else {
            console.log('Please select a text layer');
        }
    }
    figma.closePlugin();
};
})(typeof exports != "undefined" ? exports : (typeof global != "undefined" ? global : typeof self != "undefined" ? self : this)["src/code"] = {});


//#sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLlVzZXJzLmpvZW9hay5maWdtYS1wbHVnaW5zLmFsLWxpc3Quc3JjLmJ1aWxkLmNvZGUuanMubWFwIiwic291cmNlcyI6WyIuLi9mdW5jdGlvbnMudHMiLCIuLi9jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sUUFBUSxHQUFHLE9BQU8sU0FBUyxFQUFFLFNBQVM7SUFFeEMsTUFBTSxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUU5QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQ3JCO1FBQ0kscUJBQXFCLEVBQUUsTUFBTTtRQUM3QixLQUFLLEVBQUUsRUFBRTtRQUNULFdBQVcsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO1FBQ3ZDLFVBQVUsRUFBRSxVQUFVO1FBQ3RCLElBQUksRUFBRSxJQUFJO1FBQ1YsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2pCLENBQUMsQ0FBQTtJQUVGLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZDO1FBQ0ksSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUN0QjtZQUNJLHFCQUFxQixFQUFFLE1BQU07WUFDN0IsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQUUsWUFBWTtZQUN4QixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQTtRQUVGLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFDdkI7WUFDSSxtQkFBbUIsRUFBRSxRQUFRO1lBQzdCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsY0FBYyxFQUFFLFFBQVE7U0FDM0IsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxTQUFTLEtBQUssUUFBUSxFQUMxQjtZQUNJLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQzlCO2FBQ0ksSUFBSSxTQUFTLEtBQUssUUFBUSxFQUMvQjtZQUNJLFNBQVMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQzlCO1FBQ0QsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpFLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFDckI7WUFDSSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixtQkFBbUIsRUFBRSxNQUFNO1lBQzNCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsY0FBYyxFQUFFLFFBQVE7U0FDM0IsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHekYsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdkIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHO0lBRWxCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDOztBQ3BFRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUvQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXZCLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEdBQUc7SUFFdEIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFDNUI7UUFDRSxJQUFJLFNBQVMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUM3QjtZQUNFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO2FBRUQ7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDM0M7S0FDRjtJQUVELEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUM7Ozs7Iiwic291cmNlUm9vdCI6Ii4uIn0=
