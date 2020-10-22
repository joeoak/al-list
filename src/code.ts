import { drawList, loadFont } from './functions';

figma.showUI(__html__);

let selection = figma.currentPage.selection;
loadFont(selection[0]);

figma.on('selectionchange', () =>
{
  selection = figma.currentPage.selection;
  loadFont(selection[0]);
})

figma.ui.onmessage = msg =>
{
  if (msg.type === 'draw-list')
  {
    if (selection[0] && selection[0].type === 'TEXT' && selection.length === 1)
    {
      drawList(selection[0], msg.listStyle);
      figma.closePlugin();
    }
    else
    {
      figma.notify('Please select a single text layer');
    }
  }
};
