export function initHeader() {
  const header = document.querySelector('.header')
  const bodyDom = document.querySelector('body')
  const languageHeader = document.querySelector('.header-language')
  const languageButton = document.querySelector('#header-language-btn')
  const languageMenu = document.querySelector('#header-language-menu')
  const menuMenuHeader = document.querySelector('.header-menu-menu')
  const menuMenuHeaderWrapper = document.querySelector('.header-menu-menu-wrapper')
  const menuButton = document.querySelector('#header-menu-btn')
  const menuCloseButton = document.querySelector('#header-menu-close-btn')

  if (
    !header ||
    !bodyDom ||
    !languageHeader ||
    !languageButton ||
    !languageMenu ||
    !menuMenuHeader ||
    !menuMenuHeaderWrapper ||
    !menuButton ||
    !menuCloseButton
  )
    return

  function closeLanguageMenu() {
    languageButton.setAttribute('aria-expanded', 'false')
    languageMenu.classList.remove('is-open')
  }

  function closeMainMenu() {
    menuCloseButton.hidden = true
    menuMenuHeader.hidden = true
    menuButton.hidden = false
    languageButton.hidden = false
    bodyDom.classList.remove('is-menu-open')
  }

  function isTabletViewport() {
    return window.matchMedia('(min-width: 48rem) and (max-width: 63.9375rem)').matches
  }

  languageButton.addEventListener('click', e => {
    const isExpanded = languageButton.getAttribute('aria-expanded') === 'true'

    languageButton.setAttribute('aria-expanded', String(!isExpanded))
    languageMenu.classList.toggle('is-open', !isExpanded)
  })

  document.addEventListener('click', e => {
    if (isTabletViewport()) return

    const isHeaderClick = header.contains(e.target) && !menuMenuHeader.contains(e.target)
    const isMenuContentClick = menuMenuHeaderWrapper.contains(e.target)

    if (isHeaderClick || isMenuContentClick) return

    closeLanguageMenu()
    closeMainMenu()
  })

  menuButton.addEventListener('click', () => {
    menuCloseButton.hidden = false
    menuMenuHeader.hidden = false
    menuButton.hidden = true
    languageButton.hidden = true
    bodyDom.classList.add('is-menu-open')
  })

  menuCloseButton.addEventListener('click', () => {
    closeMainMenu()
  })
}
