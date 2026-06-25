// Header Start
import { initHeader } from "./header.js";
initHeader();
// Header End

// Our Clients Start
import { initOurClients } from "./ourClients.js";
initOurClients();
// Our Clients End

// Client Testimonials Start

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

// Client Testimonials End