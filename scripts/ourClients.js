export const initOurClients = () => {
  const carouselDom = document.querySelector('#clients-carousel')
  const carouselTrackDom = document.querySelector('#clients-carousel-track')

  if (!carouselDom || !carouselTrackDom) return

  const carouselItemsDom = [...carouselTrackDom.children]
  carouselItemsDom.forEach(el => {
    const clonedCarouselItem = el.cloneNode(true)
    clonedCarouselItem.setAttribute('aria-hidden', 'true')
    carouselTrackDom.appendChild(clonedCarouselItem)
  })

  let pressed = false
  let paused = false
  let dragStartX
  let dragStartLeft = 0
  let currentLeft = 0
  const loopWidth = carouselTrackDom.children[carouselItemsDom.length].offsetLeft
  const speed = 0.5

  const boundCarouselTrackDom = () => {
    if (currentLeft > 0) {
      currentLeft = -loopWidth
    }

    if (currentLeft <= -loopWidth) {
      currentLeft = 0
    }

    carouselTrackDom.style.transform = `translateX(${currentLeft}px)`
  }

  const animate = () => {
    if (!paused && !pressed) {
      currentLeft -= speed
      boundCarouselTrackDom()
    }

    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
    requestAnimationFrame(animate)
  }

  const pausedCarousel = () => {
    paused = true
  }

  const enableCarousel = () => {
    if (pressed) return
    paused = false
  }

  const startDrag = e => {
    pressed = true
    paused = true
    dragStartX = e.clientX
    dragStartLeft = currentLeft
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture
    carouselDom.setPointerCapture(e.pointerId)
  }

  const stopDrag = e => {
    if (!pressed) return

    pressed = false
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
    paused = carouselDom.matches(':hover')

    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/hasPointerCapture
    if (carouselDom.hasPointerCapture(e.pointerId)) {
      carouselDom.releasePointerCapture(e.pointerId)
    }
  }

  const drag = e => {
    if (!pressed) return

    e.preventDefault()
    currentLeft = dragStartLeft + e.clientX - dragStartX
    boundCarouselTrackDom()
  }

  carouselDom.addEventListener('mouseenter', pausedCarousel)
  carouselDom.addEventListener('mouseleave', enableCarousel)

  // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element#pointer_events
  carouselDom.addEventListener('pointerdown', startDrag)
  carouselDom.addEventListener('pointermove', drag)
  carouselDom.addEventListener('pointerup', stopDrag)
  carouselDom.addEventListener('pointercancel', stopDrag)

  // Prevent native image dragging from interfering with carousel dragging
  carouselDom.addEventListener('dragstart', e => {
    e.preventDefault()
  })

  animate()
}
