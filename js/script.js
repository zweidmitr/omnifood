////////////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

////////////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault()
    const href = link.getAttribute('href')
    console.log(href)

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  })
})
