let controller = new ScrollMagic.Controller({vertical: false})
let stageOne = document.querySelector('.nextp1')
let oneFrame = anime({
  targets: stageOne,
  translateX: '-10vw',
  easing: 'linear',
  autoplay: false
})
