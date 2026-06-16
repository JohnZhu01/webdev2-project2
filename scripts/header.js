export function initHeader() {
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
}
