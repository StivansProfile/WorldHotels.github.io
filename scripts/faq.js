// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // Adjust the threshold as needed for smaller screens
  const threshold = 50; // 50px threshold for visibility

  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= (windowHeight + threshold) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + threshold
  );
}

// Function to handle scroll event
function handleScroll() {
  const targetDiv = document.getElementById('target-div-1');
  const targetDiv2 = document.getElementById('target-div-2');
  if (isInViewport(targetDiv)) {
    // The target div is in the viewport
    console.log('Target div is in view');
    document.getElementById("room2").style.animation = "slide-in 1s ease-in-out forwards"
    // Perform actions here when the div is in view
  }

  if (isInViewport(targetDiv2)) {
    // The target div is in the viewport
    console.log('Target div is in view');
    document.getElementById("room3").style.animation = "slide-in 1s ease-in-out forwards"
    // Perform actions here when the div is in view
  }

  
  else {
    // The target div is out of the viewport
    console.log('Target div is out of view');
    // Perform other actions here when the div is out of view
  }
}


window.addEventListener('scroll', handleScroll);