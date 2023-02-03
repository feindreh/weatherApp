export function makeC(kelvin) {
  return kelvin - 273.15;
}

export function divID(id) {
  const div = document.createElement('div');
  div.id = id;
  return div;
}

export function divClass(cla) {
  const div = document.createElement('div');
  div.className = cla;
  return div;
}

export function clearInput(inputNode) {
  inputNode.value = '';
}

export function deleteChildren(parentNode) {
  console.log('delete Children', parentNode);
}
