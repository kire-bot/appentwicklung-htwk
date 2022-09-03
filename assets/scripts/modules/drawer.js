export function initDrawerClick() {
  document.querySelector('#open-drawer').onclick = function () {
    const drawer = document.querySelector('.drawer')
    drawer.show()
  }
}