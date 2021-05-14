// 输入：grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1
// 示例 2：

// 输入：grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] 的值为 '0' 或 '1'


function get(obj, arr) {
    return arr.reduce((prev, curr)=>{
        if(prev){
            return prev[curr]
        } else {
            return undefined
        }
    }, obj)
}

function isIsland(i, j, grid, m, n) {
    if(grid[i][j] === "0")  {
        return false
    } else if(grid[i][j] === "1") {

        const top = get(grid, [i, j-1]) === "0" || get(grid, [i, j-1]) === undefined
        const bottom = get(grid, [i, j+1]) === "0" || get(grid, [i, j-1]) === undefined
        const left = get(grid, [i-1, j])=== "0" || get(grid, [i, j-1]) === undefined
        const right = get(grid, [i+1, j])  === "0" || get(grid, [i, j-1]) === undefined

        if(top && bottom && left && right) {
            return true
        } else {
            return false
        }

    }
}

function islandCount(grid) {
    let m = grid.length, n = grid[0].length

    let count = 0

    for(let i=0; i<m; i++) {
        for(let j = 0; j<n; j++) {
            if(isIsland(i, j, grid, m, n)) {
                count+=1
            }
        }
    }

    return count
}


const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
// 输出：1
// 示例 2：

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(islandCount(grid1))

//   console.log(islandCount(grid2))
