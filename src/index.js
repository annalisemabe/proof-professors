import "./css/main.css";

// page-specific JS
import './js/behavior/services'
import './js/behavior/testimonials'
import './js/behavior/home'

// General JS:

// Mobile dropdown behavior
const menuBtnEl = document.getElementById('menu-btn')
const menuEl = document.getElementById('menu')

menuBtnEl.onclick = () => menuEl.classList.toggle('nav-mobile')

// Nav active classes
const navLinkEls = document.querySelectorAll('#menu a')
const origin = window.location.origin
const path = window.location.pathname;

[...navLinkEls].forEach(node => {
  const linkPath = node.href.replace(origin, '') + '/'

  if (linkPath === path || linkPath === '//' && path === '/') {
    node.classList.add('active')
  }
})

// Hero image animations
const observeTarget = document.querySelector('.intersection-obv');
if (observeTarget) {
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
  
  observer.observe(observeTarget)
}
