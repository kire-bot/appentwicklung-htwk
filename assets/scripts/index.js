const openDrawerButton = document.querySelector('#open-drawer')
if (openDrawerButton) {
  openDrawerButton.onclick = function () {
    const drawer = document.querySelector('.drawer')
    drawer.show()
  }
}

const goBackButton = document.querySelector('#go-back')
if (goBackButton) {
  goBackButton.onclick = () => {
    window.history.back()
  }
}