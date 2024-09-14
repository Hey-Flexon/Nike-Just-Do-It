document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
       
        // Additional cart logic can go here.
    });
});


// Grab the top row element (1st line)
const topRow = document.querySelector('.top-row');

// Add an event listener to the window scroll
window.addEventListener('scroll', () => {
    // If the user scrolls down more than 50px, hide the top row
    if (window.scrollY > 50) {
        topRow.style.transform = 'translateY(-100%)';
    } else {
        // When the user scrolls up, show the top row again
        topRow.style.transform = 'translateY(0)';
    }
});



// slider products

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5, // Display 5 slides at a time
    spaceBetween: 30, // Add space between slides
    slidesPerGroup: 1, // Slide one slide at a time
    loop: true, // Enable continuous loop mode
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Allow pagination dots to be clickable
    },
    navigation: {
      nextEl: ".swiper-button-next", // Next button
      prevEl: ".swiper-button-prev", // Previous button
    },
  });


//   progress slidebar


{
var swiper = new Swiper(".swiper-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}

// button modify//
const btnL = document.getElementById('btn-l');
const btnR = document.getElementById('btn-r');

// Function to remove 'clicked' class from both buttons and add it to the clicked one
function handleClick(button) {
  btnL.classList.remove('clicked');
  btnR.classList.remove('clicked');
  button.classList.add('clicked');
}

btnL.addEventListener('click', function() {
  handleClick(this);
});

btnR.addEventListener('click', function() {
  handleClick(this);
});
