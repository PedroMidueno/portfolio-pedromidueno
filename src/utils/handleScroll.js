const handleScrollToShowGoTopButton = () => {
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
      document.querySelector('#scroll-top-button').classList.add('show')
    } else {
      document.querySelector('#scroll-top-button').classList.remove('show')
    }
  }
}

export const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export const handleScroll = () => {
  handleScrollToShowGoTopButton()
}
