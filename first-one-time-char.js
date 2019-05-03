const str = 'google'

function firstOneTimeChar(str) {
  let i = 0,
    char,
    map = {},
    list = [],
    ret = '#'

  while (char = str[i]) {
    list.push(char)
    map[char] ? map[char] += 1 : map[char] = 1;
    i++
  }

  for (let i = 0; i < list.length; i++) {
    if (map[list[i]] === 1) {
      ret = list[i]
      break
    }
  }

  return ret
}

console.log(firstOneTimeChar(str));
