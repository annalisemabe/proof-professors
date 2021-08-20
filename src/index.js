import "./css/main.css";

// mobile dropdown behavior
const menuBtnEl = document.getElementById('menu-btn')
const menuEl = document.getElementById('menu')

menuBtnEl.onclick = () => menuEl.classList.toggle('nav-mobile')

// Hero image animation
const target = document.querySelector('.intersection-obv');
const observer = new IntersectionObserver(entries => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      if (entry.target && entry.target.childNodes) {
        entry.target.childNodes.forEach((child, i) => {
          if (child.classList && child.classList.contains('animated-text')) {
            child.classList.add('visible')
            child.style.transitionDelay = `${i*.08}s`
          }
        })
      }
    } else {
      if (entry.target && entry.target.childNodes) {
        entry.target.childNodes.forEach((child, i) => {
          if (child.classList && child.classList.contains('animated-text')) {
            child.classList.remove('visible')
          }
        })
      }
    }
  })
}, { threshold: .5 })
observer.observe(target)


// Canvas animation
const random = (min, max) => Math.floor(Math.random() * max) + min
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const circles = [];
const h = canvas.parentElement.offsetHeight
const w = canvas.parentElement.offsetWidth - 550

canvas.height = h
canvas.width = w

function Circle(radius, speed, width, xPos, yPos) {
  this.radius = radius
  this.speed = speed
  this.width = width
  this.xPos = xPos
  this.yPos = yPos
  this.opacity = 0.05 + Math.random() * 0.5
  this.counter = 0

  const signHelper = Math.floor(Math.random() * 2)

  if (signHelper == 1) {
    this.sign = -1
  } else {
    this.sign = 1
  }
}

Circle.prototype.update = function() {

  this.counter += this.sign * this.speed

  ctx.beginPath()
  ctx.arc(
    this.xPos + Math.cos(this.counter / 100) * this.radius,
    this.yPos + Math.sin(this.counter / 100) * this.radius,
    this.width,
    0,
    Math.PI * 2,
    false
  )
  ctx.closePath()
  ctx.fillStyle = 'rgba(185, 211, 238,' + this.opacity + ')'
  ctx.fill()
};

function drawCircles() {
  for (var i = 0; i < 15; i++) {
    const randomX = random(0, w - 100)
    const randomY = random(0, h)
    const speed = 0.2 + Math.random()
    const size = 5 + Math.random() * 75
    const circle = new Circle(100, speed, size, randomX, randomY)

    circles.push(circle)
  }
  draw()
}
drawCircles()

function draw() {
  ctx.clearRect(0, 0, w, h)

  for (let i = 0; i < circles.length; i++) {
    circles[i].update()
  }

  requestAnimationFrame(draw);
}