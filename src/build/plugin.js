/* src/build/plugin.js 0 */
!function(e){"use strict";var n=void 0!==n?n:"undefined"!=typeof window?window:this;const o={type:"SOLID",color:{r:1,g:0,b:0}};figma.showUI(__html__),figma.ui.onmessage=(e=>{"create-rectangles"===e.type&&"number"==typeof e.count&&function(e){const n=[];for(let t=0;t<e;t++){const e=figma.createRectangle();e.x=150*t,e.fills=[o],figma.currentPage.appendChild(e),n.push(e)}figma.currentPage.selection=n,figma.viewport.scrollAndZoomIntoView(n)}(e.count),figma.closePlugin()})}("undefined"!=typeof exports?exports:("undefined"!=typeof global?global:"undefined"!=typeof self?self:this)["src/plugin"]={});

//#sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BsdWdpbi50cyJdLCJuYW1lcyI6WyJyZWRQYWludCIsInR5cGUiLCJjb2xvciIsInIiLCJnIiwiYiIsImZpZ21hIiwic2hvd1VJIiwiX19odG1sX18iLCJ1aSIsIm9ubWVzc2FnZSIsIm1zZyIsImNvdW50Iiwibm9kZXMiLCJpIiwicmVjdCIsImNyZWF0ZVJlY3RhbmdsZSIsIngiLCJmaWxscyIsImN1cnJlbnRQYWdlIiwiYXBwZW5kQ2hpbGQiLCJwdXNoIiwic2VsZWN0aW9uIiwidmlld3BvcnQiLCJzY3JvbGxBbmRab29tSW50b1ZpZXciLCJjcmVhdGVSZWN0YW5nbGVzIiwiY2xvc2VQbHVnaW4iXSwibWFwcGluZ3MiOiI7b0ZBQUEsTUFBTUEsR0FBeUJDLEtBQU0sUUFBU0MsT0FBU0MsRUFBRyxFQUFHQyxFQUFHLEVBQUdDLEVBQUcsSUFldEVDLE1BQU1DLE9BQU9DLFVBRWJGLE1BQU1HLEdBQUdDLFVBQVlDLENBQUFBLElBQ0Ysc0JBQWJBLEVBQUlWLE1BQW9ELGlCQUFiVSxFQUFJQyxPQWhCckQsU0FBMEJBLEdBQ3hCLE1BQU1DLEtBQ04sSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUlGLEVBQU9FLElBQUssQ0FDOUIsTUFBTUMsRUFBT1QsTUFBTVUsa0JBQ25CRCxFQUFLRSxFQUFRLElBQUpILEVBQ1RDLEVBQUtHLE9BQVVsQixHQUNmTSxNQUFNYSxZQUFZQyxZQUFZTCxHQUM5QkYsRUFBTVEsS0FBS04sR0FFYlQsTUFBTWEsWUFBWUcsVUFBWVQsRUFDOUJQLE1BQU1pQixTQUFTQyxzQkFBc0JYLEdBT25DWSxDQUFpQmQsRUFBSUMsT0FFdkJOLE1BQU1vQiIsImZpbGUiOiJwbHVnaW4uanMiLCJzb3VyY2VSb290IjoiLi4ifQ==
