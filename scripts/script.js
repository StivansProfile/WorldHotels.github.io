// we use that as a state to determine whether the menu is shown or not
let isMenuShown = false;

// this function disables the entire html document
// when the hamburger menu is open
let blurDiv = document.createElement("div");
blurDiv.id = "blurDiv";
blurDiv.style.cssText = "position:absolute; top:0; right:0; width:" + screen.width + "px; height:" + screen.height + "px; background-color: #000000; opacity:0.5; filter:alpha(opacity=50)";
function disablePage(){
    // document.getElementById("body-wrapper-id").appendChild(blurDiv);
    document.getElementById("body-wrapper-id").style.overflow = "hidden";
}

function hideHamburgerMenu(){
    document.getElementById("hidden-menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    isMenuShown = false;

    if(!isMenuShown){
        document.getElementById("hamburger-menu-icon").onclick = function(){
            displayHamburgerMenu();
        }
        // re-desiables the page
        document.getElementById("body-wrapper-id").style.overflow = "auto";
    }
}

// we display the menu using this function
// from there we know that the menu is displayed
// when displayed we set the hamburger icon's onclick function to hide
// the menu on the next click
function displayHamburgerMenu(){
    document.getElementById("hidden-menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    isMenuShown = true;

    if(isMenuShown){
        document.getElementById("hamburger-menu-icon").onclick = function(){
            hideHamburgerMenu();
        }
        disablePage();
    }
}


// function to redirect to a specific section in the web page
function redirectToSection(location, e){

    let targetLocation = document.getElementById(location);

    targetLocation.scrollIntoView({
        behavior: 'smooth'
    })

    // we use these to prevent the browsers from processing
    // input data if there is any
    e.preventDefault();
    e.stopPropagation();
}

// set the navbar links to be able to redirect to a specific section
document.getElementById("faq-link").addEventListener("click", function(e){
    redirectToSection("faq-section", e);
})

// Back to top of the page button 
window.onscroll = function() {scrollFunction()};
let backToTopButton = document.getElementById("back-to-top-but")

// scroll function to determine if we should show the back to top button
function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};

// scroll back to the top function
function scrollBackToTop(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// -----------------------------
// Frequently asked questions toggle functionality

let q1 = {
    "isOpen":false
};
let q2 = {
    "isOpen":false
};
let q3 = {
    "isOpen":false
};

let questions = [q1,q2,q3];

function hideAnswer(question_num){
    if(question_num == 1){
        q1.isOpen = false
    }
    if(question_num == 2){
        q2.isOpen = false
    }
    if(question_num == 3){
        q3.isOpen = false
    }

    for(let i = 0; i < questions.length; i++){

        document.getElementById(`question-${question_num}-answer`).style.display = "none";
        document.getElementById(`question-${question_num}`).onclick = function(){
            showAnswer(question_num);
        }

    }
}

function showAnswer(question_num){

    if(question_num == 1){
        q1.isOpen = true
    }
    if(question_num == 2){
        q2.isOpen = true
    }
    if(question_num == 3){
        q3.isOpen = true
    }

    for(let i = 0; i <= questions.length; i++){
        if(questions[i].isOpen){
            document.getElementById(`question-${question_num}-answer`).style.display = "flex";  
            document.getElementById(`question-${question_num}`).onclick = function(){
                hideAnswer(question_num);
            }
        }
    }

}

document.getElementById("question-1").onclick = function(){
    showAnswer(1);
}

document.getElementById("question-2").onclick = function(){
    showAnswer(2);

}
document.getElementById("question-3").onclick = function(){
    showAnswer(3);
}

