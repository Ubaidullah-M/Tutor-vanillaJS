// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScrollAnimation() {
  const benefitSections = document.querySelectorAll(".animate-section");

  benefitSections.forEach((sect) => {
    const benefitCards = sect.querySelector(".benefit-cards");
    if (isInViewport(benefitCards)) {
      sect.classList.add("animate-cards");
    } else {
      sect.classList.remove("animate-cards");
    }
  });
}

handleScrollAnimation();

// Event listener for scroll
window.addEventListener("scroll", handleScrollAnimation);
