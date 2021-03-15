function buildSpriteString(icons) {
  const symbols = Object.keys(icons)
    .map(icon => toSvgSymbol(icon, icons[icon]))
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols}</defs></svg>`;
}

function toSvgSymbol(name, contents) {
  return `<symbol id="${name}" viewBox="0 0 48 48">${
    contents
  }</symbol>`;
}

export default buildSpriteString;
