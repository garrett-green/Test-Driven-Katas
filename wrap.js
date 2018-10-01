const wrap = (line, maxLen) => {
  let finalStr = '';
  if(line.length <= maxLen)  {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;

  if(indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else  {
    split = maxLen;
    offset = 0;
  }

  return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);
};


module.exports = wrap;
