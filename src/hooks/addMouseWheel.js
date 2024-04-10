export default function (el, cb) {
  const box = typeof el === 'string' ? document.getElementById(el) : el
  addEvent(box, 'mousewheel', (ev) => {
    const down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0
    ev.preventDefault()
    cb(down)
  })
}

function addEvent(obj, xEvent, fn) {
  if (obj.attachEvent) {
    obj.attachEvent('on' + xEvent, fn)
  } else {
    obj.addEventListener(xEvent, fn, false)
  }
}
