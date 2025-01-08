const cards = document.querySelectorAll('.team-testimonial-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

function showCard(index) {
  // Hide all cards
  cards.forEach((card) => card.classList.remove('active'));
  // Show the card at the specified index
  cards[index].classList.add('active');
}

// Event listeners for navigation arrows
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to last card if at the beginning
  showCard(currentIndex);
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length; // Loop to first card if at the end
  showCard(currentIndex);
});

// Initialize the first card
showCard(currentIndex);

const viewImgBtn = document.getElementById('view-btn')
viewImgBtn.onclick = function () {
  // Navigate to another page
  window.location.href = "./college.html";
};

document.getElementById("menuIcon").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeOverlay").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});

