let controller = new ScrollMagic.Controller({vertical: false})
let stageOne = document.querySelector('.inner-round2')
let outerOne = document.querySelector('.center-round2')
let two = document.querySelector('.two')
let lineTwo = document.querySelector('.line2')
let body = document.querySelector('.back')
let text2 = document.getElementById('text2')
let subtext2 = document.getElementById('subtext2')


let oneFrame = anime({
  targets: stageOne,
  background: '#3D019D',
  opacity: 1,
  scale: 1.2,
  easing: 'linear',
  delay: 500,
  autoplay: false,
  duration: 300,
})
new ScrollMagic.Scene ({
  triggerElement: stageOne,
  triggerHook: 'onCenter'
})
let oneOuter = anime({
  targets: outerOne,
  background: '#AC79FF',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerOne,
  triggerHook: 'onCenter'
})
let line2 = anime({
  targets: lineTwo,
  background: '#AC79FF',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerOne,
  triggerHook: 'onCenter'
})
let phone2 = anime({
  targets: two,
  background: '#3D019D',
  easing: 'linear',
  delay: 0,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerOne,
  triggerHook: 'onCenter'
})
let font2 = anime({
  targets: body,
  background: '#3D019D',
  easing: 'linear',
  delay: 300,
  duration: 300,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerOne,
  triggerHook: 'onCenter'
})
let info2 = anime({
  targets: text2,
  color: '#AC79FF',
  easing: 'linear',
  delay: 500,
  duration: 500,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerOne,
  triggerHook: 'onCenter'
})
let subinfo2 = anime({
  targets: subtext2,
  color: '#AC79FF',
  easing: 'linear',
  delay: 500,
  duration: 500,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerOne,
  triggerHook: 'onCenter'
})

.addTo(controller)
.on('enter', ()=> {
  oneFrame.play()
  oneOuter.play()
  line2.play()
  phone2.play()
  font2.play()
  info2.play()
  subinfo2.play()
})



// 2 слайд
let controllerOne = new ScrollMagic.Controller({vertical: false})
let stageTwo = document.querySelector('.inner-round3')
let outerTwo = document.querySelector('.center-round3')
let three = document.querySelector('.three')
let lineThree = document.querySelector('.line3')
let text3 = document.getElementById('text3')
let subtext3 = document.getElementById('subtext3')

let twoFrame = anime({
  targets: stageTwo,
  background: '#9C1212',
  opacity: 1,
  scale: 1.2,
  easing: 'linear',
  delay: 500,
  autoplay: false,
  duration: 300,
})
new ScrollMagic.Scene ({
  triggerElement: stageTwo,
  triggerHook: 'onCenter'
})

let twoOuter = anime({
  targets: outerTwo,
  background: '#FF0000',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerTwo,
  triggerHook: 'onCenter'
})
let line3 = anime({
  targets: lineThree,
  background: '#FF0000',
  easing: 'linear',
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerTwo,
  triggerHook: 'onCenter'
})
let font3 = anime({
  targets: body,
  background: '#9C1212',
  easing: 'linear',
  delay: 300,
  duration: 300,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerTwo,
  triggerHook: 'onCenter'
})
let info3 = anime({
  targets: text3,
  color: '#FF0000',
  easing: 'linear',
  delay: 500,
  duration: 500,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerTwo,
  triggerHook: 'onCenter'
})
let subinfo3 = anime({
  targets: subtext3,
  color: '#FF0000',
  easing: 'linear',
  delay: 500,
  duration: 500,
  autoplay: false
})
new ScrollMagic.Scene ({
  triggerElement: outerTwo,
  triggerHook: 'onCenter'
})


.addTo(controllerOne)
.on('enter', ()=> {
  twoFrame.play()
  twoOuter.play()
  line3.play()
  font3.play()
  info3.play()
  subinfo3.play()
})
