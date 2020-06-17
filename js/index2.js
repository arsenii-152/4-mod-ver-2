let controller = new ScrollMagic.controller()
let ballOne = document.querySelector('.center-round2')
let ballTwo = document.querySelector('.center-round3')
let innerOne = document.querySelector('.inner-round2')
let innerTwo = document.querySelector('.innner-round3')
let firstStep = anime({
  targets: ballOne,
  scale: 1.5,
  background: AC79FF,
  duration: 1000,
  autoplay: false,
})
new ScrollMagic.scene ({
  triggerElement: ballOne,
  triggerHook: 'onEnter'
})
.addTo(controller)
.on('enter', function() {
  firstStep.play
})
