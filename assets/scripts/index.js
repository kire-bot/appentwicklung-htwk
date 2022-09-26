'use strict'

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

const openPostDialogButton = document.querySelector('#open-post-dialog')
if (openPostDialogButton) {
  openPostDialogButton.onclick = () => {
    const postDialog = document.querySelector('#post-dialog')
    postDialog.show()
  }
}

const closePostDialogButton = document.querySelector('#close-post-dialog')
if (closePostDialogButton) {
  closePostDialogButton.onclick = () => {
    const postDialog = document.querySelector('#post-dialog')
    postDialog.hide()
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