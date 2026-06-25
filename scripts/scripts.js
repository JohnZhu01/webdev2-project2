const testimonialSection = document.querySelector(".client-testimonials");

if (testimonialSection) {
  const testimonialCards = testimonialSection.querySelectorAll("article");
  const nextButton = testimonialSection.querySelector(".client-testimonials-next");
  let activeTestimonial = 0;

  if (nextButton && testimonialCards.length > 0) {
    testimonialCards[activeTestimonial].appendChild(nextButton);

    nextButton.addEventListener("click", () => {
      testimonialCards[activeTestimonial].classList.remove("is-active");
      activeTestimonial = (activeTestimonial + 1) % testimonialCards.length;
      testimonialCards[activeTestimonial].classList.add("is-active");
      testimonialCards[activeTestimonial].appendChild(nextButton);
    });
  }
}
