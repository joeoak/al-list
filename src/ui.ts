function id<T>(obj: T): Exclude<T, null|undefined>
{
  if (obj === undefined || obj === null)
  {
    throw new Error("null value")
  }
  return obj as any as Exclude<T, null|undefined>
}

id(document.getElementById('convert')).addEventListener('click', () =>
{
  const select = id(document.getElementById('list-style-select') as HTMLInputElement);
  const listStyle = select.value;
  parent.postMessage({ pluginMessage: { type: 'draw-list', listStyle } }, '*');
})