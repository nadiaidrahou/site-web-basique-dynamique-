// local storage is when you recharger your site the same parametre used
// check if there's local storage color option  
let mainColors= localStorage.getItem("list-colors");

if(mainColors !== null){
    // console.log("Local storage is not empty you can set on root");
    // console.log(localStorage.getItem("list-colors"))
document.documentElement.style.setProperty('--main-color', mainColors);
// check for active class

document.querySelectorAll(".list-colors li").forEach(element =>{

    element.classList.remove("active");
    //add element data color to color active = color storage data

    if (element.dataset.color === mainColors) {

        element.classList.add("active");
    }
}
);

}
let backgroundoption= true;
// variable to controle background interval
let backgroundinterval;


// check if there's local storage random background item

let backgroundlocalitem = localStorage.getItem("background_option");

// check if there's local storage random background is not empty

if (backgroundlocalitem !== null) {
    
    if(backgroundlocalitem === 'true'){
        backgroundoption= true;

    }else{
        backgroundoption= false;
    }

//remove all active from all span

document.querySelectorAll(".random-background span").forEach(element=>{
    element.classList.remove("active");
});

if(backgroundlocalitem === 'true'){
    document.querySelector(".random-background .yes").classList.add("active");
}else{
    document.querySelector(".random-background .no").classList.add("active");
};

}
//clic icon list
document.querySelector(".toggle-icon i").onclick=function () {

//the icon is rolate
    this.classList.toggle("fa-spin");

//open the setting box
    document.querySelector(".setting-box").classList.toggle("open");

};

// array list color switch colors

const colorsLi = document.querySelectorAll(".list-colors li");
// loop
colorsLi.forEach(li =>{

    li.addEventListener("click" , (e) => {

document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
// set color on local storage
localStorage.setItem("list-colors",e.target.dataset.color);
// remove active class color from all children

handleActive(e);

    });
});

// array random backroun yes no

const randombackEl = document.querySelectorAll(".random-background span");

// loop
randombackEl.forEach(span =>{

    span.addEventListener("click" , (e) => {

handleActive(e);

    if (e.target.dataset.background === 'yes') {

 backgroundoption = true;
 randomizeImg();
 localStorage.setItem("background_option", true);

    }else{
        backgroundoption = false;

        clearInterval(backgroundinterval);
        localStorage.setItem("background_option", false);
    }
    });
});

// select the first element 
let landingPage = document.querySelector('.landing-page');

// array images

let arrayImg = ["slid-two.webp","slid-tree.webp","slid-four.webp","slid-five.webp"];

//change image background url true false
//change image background url true false



// variable to controle background interval

function randomizeImg () {

if (backgroundoption === true){

    backgroundinterval=  setInterval(() =>{

let randomNumber= Math.floor(Math.random()*arrayImg.length);

landingPage.style.backgroundImage = 'url("imgs/'+arrayImg[randomNumber]+'")';

}, 1000);
}
}
randomizeImg();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
// Skills Offset Top
let skillsOffsetTop = ourSkills.offsetTop;
// Skills Outer Height
let skillsOuterHeight = ourSkills.offsetHeight;
// Window Height
let windowHeight = this.innerHeight;
// Window ScrollTop
let windowScrollTop = this.scrollY;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill .skill-box .skill-progress span");
    allSkills.forEach(skill => {
    skill.style.height = skill.dataset.progress; 
    });
 
}
    };

// popup image gallery

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
    // Create Overlay Element 
    let overlay = document.createElement("div");
    // Add Class To Overlay 
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body 
    document.body.appendChild(overlay);
     // Create The popupbox 
    let popupBox = document.createElement("div");
    // Create Heading alt
    if (img.alt !== null) {
        // Create Heading 
        let imgHeading = document.createElement("h3");
        // Create text For Heading
        let imgText = document.createTextNode(img.alt);
        // Append The Text To The Heading 
        imgHeading.appendChild(imgText);
        // Append The Heading To The Popup Box 
        popupBox.appendChild(imgHeading);
    }

    // Add Class To The Popup Box 
    popupBox.className = 'popup-box';
    // Create The Image 
    let popupImage = document.createElement("img");
    // Set Image Source 
    popupImage.src = img.src;
    // Add Image To Popup Box 
    popupBox.appendChild(popupImage);
    // Append The Popup Box To Body 
    document.body.appendChild(popupBox);
    // Create The Close Span
let closeButton = document.createElement("span");
// Create The Close Button Text
let closeButtonText = document.createTextNode("X");
// Append Text To Close Button 
closeButton.appendChild(closeButtonText);
// Add Class To Close Button 
closeButton.className = 'close-button';
// Add Close Button To The Popup Box 
popupBox.appendChild(closeButton);

   });
  });

    // Close Popup
document.addEventListener("click", function (e) {
    if (e.target.className == 'close-button') {
    // Remove The Current Popup
    e.target.parentNode.remove();
    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
    }
    });

    //select all bullets
    const allBullets =document.querySelectorAll(".nav-bullets .bullet");
    const alllinks =document.querySelectorAll(".links a");
    function scrollToSomewere(elements){
         elements.forEach(ele => {
        ele.addEventListener( "click", (e) => {
            e.preventDefault();
            
    document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:'smooth'

    });
    });
    });
    };
    scrollToSomewere(allBullets);
    scrollToSomewere(alllinks);

   let bulletsSpan = document.querySelectorAll(".bullets-option span");

   let bulletsContainer = document.querySelector(".nav-bullets");

   let bulletLocalItem = localStorage.getItem("bullets_option");
   if (bulletLocalItem !== null) {
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });
    if (bulletLocalItem === 'block') {
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active");
        
    }else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active");

    }
   }
   bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';
            localStorage.setItem("bullets_option",'block');

        } else {

            bulletsContainer.style.display = 'none';
            localStorage.setItem("bullets_option",'none');

        }
        handleActive(e);

    });

});

   //handle active function

   function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
   }

   //reset button

   document.querySelector(".reset-option").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("list-colors");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");
    window.location.reload();
   }
   //toggle menu

   let toggleBtn = document.querySelector(".toggle-menu");
   let tLinks = document.querySelector(".links");

   toggleBtn.onclick = function (e) {
    //stop propagation
    e.stopPropagation();

    //toggle class "menu-active" on button
    this.classList.toggle("menu-active");

    //toggle class "open" on links
    tLinks.classList.toggle("open");
   };

   //click anywere outside menu and toggle button
   document.addEventListener("click", (e) =>{

    if(e.target !== toggleBtn && e.target !== tLinks){

       if (tLinks.classList.contains("open")) {
         //toggle class "menu-active" on button
         toggleBtn.classList.toggle("menu-active");

        //toggle class "open" on links
        tLinks.classList.toggle("open");
        
       }}});

   tLinks.onclick = function (e) {
    e.stopPropagation();
    }