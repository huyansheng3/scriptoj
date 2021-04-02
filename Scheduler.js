


class Scheduler {

    taskList = []
    pendingTaskList = []
    limit = 2

    add(promiseCreator) {
        if(this.pendingTaskList.length < 2) {
            this.pendingTaskList.push(promiseCreator)
            this.consume(promiseCreator)

        } else {
            this.taskList.push(promiseCreator)
        }
          console.log(          this.pendingTaskList,this.taskList )
    }

      consume(promiseCreator) {
          if(promiseCreator) {
              promiseCreator().then(()=>{
                  this.pendingTaskList.shift()
                  const nextTask =  this.taskList.shift()
                  if(nextTask) {
                      this.pendingTaskList.push(nextTask)
                  }
                  this.consume(nextTask)
              })
          }
      }


  }

  const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
  })

  const scheduler = new Scheduler()

  const d = Date.now()
  const addTask = (time, order) => {
    scheduler.add(() => {
        return timeout(time).then(() => {
            console.log(order, Date.now()-d)
        })
    })
  }

  addTask(1000, '1')
  addTask(500, '2')
  addTask(300, '3')
  addTask(400, '4')
  // output: 2 3 1 4

  // 一开始，1、2两个任务进入队列
  // 500ms时，2完成，输出2，任务3进队
  // 800ms时，3完成，输出3，任务4进队
  // 1000ms时，1完成，输出1
  // 1200ms时，4完成，输出4
