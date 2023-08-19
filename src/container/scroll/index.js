const scrollToTopButton =
  document.getElementById('scrollToTop')

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopButton.classList.remove('hide')
    scrollToTopButton.classList.add('show')
  } else {
    scrollToTopButton.classList.remove('show')
    scrollToTopButton.classList.add('hide')
  }
}

scrollToTopButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
