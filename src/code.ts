import { drawList } from './functions';

let selection = figma.currentPage.selection[0];

figma.showUI(__html__);

figma.ui.onmessage = msg =>
{
  if (msg.type === 'draw-list')
  {
    if (selection.type === 'TEXT')
    {
      drawList(selection, msg.listStyle);
    }
    else
    {
      console.log('Please select a text layer');
    }
  }

  figma.closePlugin();
};
