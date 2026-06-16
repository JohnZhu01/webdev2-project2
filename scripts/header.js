export function initHeader() {
  const bodyDom = document.querySelector('body')
  const languageHeader = document.querySelector('.header-language')
  const languageButton = document.querySelector('#header-language-btn')
  const languageMenu = document.querySelector('#header-language-menu')

  if (!languageHeader || !languageButton || !languageMenu) return

  languageButton.addEventListener('click', e => {
    const isExpanded = languageButton.getAttribute('aria-expanded') === 'true'

    languageButton.setAttribute('aria-expanded', String(!isExpanded))
    languageMenu.classList.toggle('is-open', !isExpanded)
  })

  document.addEventListener('click', e => {
    if (languageHeader.contains(e.target)) return

    languageButton.setAttribute('aria-expanded', 'false')
    languageMenu.classList.remove('is-open')
  })

  const menuMenuHeader = document.querySelector('.header-menu-menu')
  const menuButton = document.querySelector('#header-menu-btn')
  const menuCloseButton = document.querySelector('#header-menu-close-btn')

  menuButton.addEventListener('click', () => {
    menuCloseButton.hidden = false
    menuMenuHeader.hidden = false
    menuButton.hidden = true
    languageButton.hidden = true
    bodyDom.classList.add('is-menu-open')
  })

  menuCloseButton.addEventListener('click', () => {
    menuCloseButton.hidden = true
    menuMenuHeader.hidden = true
    menuButton.hidden = false
    languageButton.hidden = false
    bodyDom.classList.remove('is-menu-open')
  })
}
