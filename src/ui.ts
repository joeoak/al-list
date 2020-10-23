let choices = document.getElementsByName('list-style-choice');
const choice1 = document.getElementById('list-style-choice-1') as HTMLInputElement;
const choice2 = document.getElementById('list-style-choice-2') as HTMLInputElement;
const preview = document.getElementById('preview') as HTMLElement;
const convert = document.getElementById('convert') as HTMLElement;

convert.addEventListener('click', () =>
{
  let listStyle;

  if (choice1.checked)
  {
    listStyle = choice1.value;
  }
  else if (choice2.checked)
  {
    listStyle = choice2.value;
  }
  
  parent.postMessage({ pluginMessage: { type: 'draw-list', listStyle } }, '*');
});

choices.forEach(choice =>
{
  (choice as HTMLInputElement).addEventListener('click', () =>
  {
    if (choice1.checked)
    {
      preview.innerHTML =
      `<ul>
        <li>• Alexis</li>
        <li>• David</li>
        <li>• Johnny</li>
        <li>• Moira</li>
      </ul>`
    }
    else if (choice2.checked)
    {
      preview.innerHTML =
      `<ul>
        <li>- Alexis</li>
        <li>- David</li>
        <li>- Johnny</li>
        <li>- Moira</li>
      </ul>`
    }
  })
});
