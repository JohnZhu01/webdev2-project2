export const initHeader = () => {
  const header = document.querySelector('.header')
  const bodyDom = document.querySelector('body')
  const languageHeader = document.querySelector('#header-language')
  const languageButton = document.querySelector('#header-language-btn')
  const languageMenu = document.querySelector('#header-language-menu')
  const navPanel = document.querySelector('.header-nav-panel')
  const navPanelContent = document.querySelector('.header-nav-panel-content')
  const navButton = document.querySelector('#header-nav-btn')
  const navCloseButton = document.querySelector('#header-nav-close-btn')

  if (
    !header ||
    !bodyDom ||
    !languageHeader ||
    !languageButton ||
    !languageMenu ||
    !navPanel ||
    !navPanelContent ||
    !navButton ||
    !navCloseButton
  )
    return

  function closeLanguageMenu() {
    languageButton.setAttribute('aria-expanded', 'false')
    languageMenu.classList.remove('is-language-open')
  }

  function closeMainMenu() {
    navCloseButton.hidden = true
    navPanel.hidden = true
    navButton.hidden = false
    languageButton.hidden = false
    bodyDom.classList.remove('is-menu-open')
  }

  function isTabletViewport() {
    return window.matchMedia('(min-width: 48rem) and (max-width: 63.9375rem)').matches
  }

  languageButton.addEventListener('click', e => {
    const isExpanded = languageButton.getAttribute('aria-expanded') === 'true'

    languageButton.setAttribute('aria-expanded', String(!isExpanded))
    languageMenu.classList.toggle('is-language-open', !isExpanded)
  })

  document.addEventListener('click', e => {
    if (isTabletViewport()) return

    const isHeaderClick = header.contains(e.target)
    const isMenuContentClick = navPanelContent.contains(e.target)

    if (isHeaderClick || isMenuContentClick) return

    closeLanguageMenu()
    closeMainMenu()
  })

  navButton.addEventListener('click', () => {
    navCloseButton.hidden = false
    navPanel.hidden = false
    navButton.hidden = true
    if (window.innerWidth < 1024) languageButton.hidden = true
    bodyDom.classList.add('is-menu-open')
  })

  navCloseButton.addEventListener('click', () => {
    closeMainMenu()
  })
}
