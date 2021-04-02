

function Pall(fns, limit) {
    const indexFns = fns.map((fn, index)=> [fn, index])

    return new Promise((resolve, reject)=>{
        let pengingTask = 0, ret = []

        function consume() {
            if(pengingTask < limit) {
                const [fn, index] = indexFns.shift()
                if(fn) {
                    pengingTask+=1
                    fn().then((res)=>{
                        console.log(indexFns)
                        pengingTask-=1
                        ret[index] = res
                        if(indexFns.length > 0) consume()
                        else resolve(ret)
                    })
                }
            }
        }

        for(let i =0 ;i<limit; i++) {
            consume()
        }
    })

}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const d = Date.now()

const timeOrder = (time, order) => {
    return timeout(time).then(() => {
        console.log(order, Date.now()-d)
        return order
    })
}


Pall([
    ()=>timeOrder(1000, 1),
    ()=>timeOrder(1500, 2),
    ()=>timeOrder(300, 3),
    ()=>timeOrder(500, 5),
    ()=>timeOrder(1000, 6),
    ()=>timeOrder(1000, 7),
], 2).then((ret)=>{
    console.log(ret)
})

// 1000 1
// 1300 3
// 1500 2
// 1800 5
// 2500 6
// 2800 7
