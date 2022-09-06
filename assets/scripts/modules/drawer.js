export function initDrawerClick() {
  const openDrawerButton = document.querySelector('#open-drawer')
  if (openDrawerButton) {
    openDrawerButton.onclick = function () {
      const drawer = document.querySelector('.drawer')
      drawer.show()
    }
  }
}