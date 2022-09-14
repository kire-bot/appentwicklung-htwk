// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/sw.js')
//     .then((reg) => {
//       console.log('Service Worker registered', reg)
//     })
//     .catch((error) => {
//       console.log('Service Worker not registered', error)
//     })
// }

const openDrawerButton = document.querySelector('#open-drawer')
if (openDrawerButton) {
  openDrawerButton.onclick = function () {
    const drawer = document.querySelector('.drawer')
    drawer.show()
  }
}

const drawer = document.querySelector('.drawer')
if (drawer) {
  drawer.hide()
}

const goBackButton = document.querySelector('#go-back')
if (goBackButton) {
  goBackButton.onclick = () => {
    window.history.back()
  }
}

const newPostButton = document.querySelector('#new-post-button')
if (newPostButton) {
  newPostButton.onclick = () => {
    const newPostDialog = document.querySelector('#new-post-dialog')
    newPostDialog.show()
  }
}

const darkModeSwitch = document.querySelector('#toggle-dark-mode')
if (darkModeSwitch) {
  darkModeSwitch.addEventListener('sl-change', event => {
    const htmlElement = document.documentElement

    if (event.target.checked) {
      htmlElement.classList.add('dark-mode')
      localStorage.setItem('darkMode', 'true')
    } else {
      htmlElement.classList.remove('dark-mode')
      localStorage.setItem('darkMode', 'false')
    }
  })
}

if (JSON.parse(localStorage.getItem('darkMode'))) {
  const htmlElement = document.documentElement
  htmlElement.classList.add('dark-mode')
  if (darkModeSwitch) {
    darkModeSwitch.click()
  }
}