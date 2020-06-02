let rightClick = document.querySelector('.arr')
let background = document.querySelector('.back')

let fix = anime ({
  targets: '.nextp',
  translateY: -188,
  duration: 1,
  autoplay: true
})

rightClick.onclick = firstJump.play
document.querySelector('.arr').addEventListener('click', function() {
    background.style.background = "#3D019D"
});
