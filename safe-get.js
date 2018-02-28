const safeGet = (data, path) => {
  if (typeof path !== 'string') return void 0
  let tmp = data
  const arr = path.split('.')
  for (let index = 0, len = arr.length; index < len; index++) {
    tmp = tmp[arr[index]]
    if (!tmp) return void 0
  }
  return tmp
}

var data = { a: { b: { c: 'ScriptOJ' } } }
console.log(safeGet(data, 'a.b.c')) // => scriptoj
console.log(safeGet(data, 'a.b.c.d')) // => 返回 undefined
console.log(safeGet(data, 'a.b.c.d.e.f.g')) // => 返回 undefined
console.log(data)
console.log(
  safeGet(
    {
      q: {
        w: {
          e: {
            r: {
              t: {
                y: {
                  u: {
                    i: {
                      o: {
                        p: {
                          a: {
                            s: {
                              d: {
                                f: {
                                  g: {
                                    h: { j: { k: { l: { z: 'ScriptOJ' } } } },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    'q.w.e.r.t.y.u.i.o.p.a.s.d.f.g.h.k.l.z'
  )
)
