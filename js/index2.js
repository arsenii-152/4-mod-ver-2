let rightClick = document.querySelector('.arr')
let leftClick = document.querySelector('.arl')
let background = document.querySelector('.back')

let firstJump = anime ({
  targets: '.nextp',
  translateX: -400,
  translateY: -187,
  duration: 1,
  autoplay: false
})

rightClick.onclick = firstJump.play
document.querySelector('.arr').addEventListener('click', function() {
    background.style.background = "#3D019D"
});
