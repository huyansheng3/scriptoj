// requestAnimationFrame 尽量在16ms 内渲染

var start = null
var element = document.getElementById('SomeElementYouWantToAnimate')
element.style.position = 'absolute'

function step(timestamp) {
  if (!start) start = timestamp
  var progress = timestamp - start
  element.style.left = Math.min(progress / 10, 200) + 'px'
  if (progress < 2000) {
    window.requestAnimationFrame(step)
  }
}

window.requestAnimationFrame(step)

function raf(callback) {}
