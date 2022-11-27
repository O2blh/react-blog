function inMobile() {
  document.getElementsByTagName('html')[0].style.fontSize = `${document.documentElement.clientWidth / 450}px`
  if (document.getElementsByTagName('html')[0].clientWidth > 1240) {
    document.body.style.overflowX = 'hidden'
    document.body.style.overflowY = 'overlay'
    document.body.style.width = '100%'
  }
}
document.addEventListener('DOMContentLoaded', () => {
  inMobile()
})
window.onresize = inMobile
