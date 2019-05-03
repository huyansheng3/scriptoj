const a = [1, 3, 4, 5, 7],
  b = [2, 3, 5, 8, 9]

function intersect(a, b) {
  let pointerA = 0,
    pointerB = 0,
    lenA = a.length,
    lenB = b.length,
    ret = []


  while (pointerA < lenA && pointerB < lenB) {
    if (a[pointerA] < b[pointerB]) pointerA++
    else if (a[pointerA] > b[pointerB]) pointerB++
    else {
      ret.push(a[pointerA]);
      pointerA++
      pointerB++
    }
  }

  return ret
}


function union(a, b) {
  let pointerA = 0,
    pointerB = 0,
    lenA = a.length,
    lenB = b.length,
    ret = []


  while (pointerA < lenA || pointerB < lenB) {
    if (pointerA === lenA) {
      ret.push(...b.slice(pointerB, b.length))
      return ret
    }

    if (pointerB === lenB) {
      ret.push(...a.slice(pointerA, a.length))
      return ret
    }

    if (a[pointerA] < b[pointerB]) {
      ret.push(a[pointerA]);
      pointerA++
    } else if (b[pointerB] < a[pointerA]) {
      ret.push(b[pointerB]);
      pointerB++
    } else {
      ret.push(a[pointerA]);
      pointerA++
      pointerB++
    }
  }

  return ret
}

console.log(union(a, b));
