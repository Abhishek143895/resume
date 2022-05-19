// -------------------------------------------------------------Approach-1(smooth scroll)--------------------------------------------------------------------------------------

// var navMenuAnchorTags = document.querySelectorAll(".horizontal-list a");                       //This is for fetching all the anchors. 
// // console.log(navMenuAnchorTags);
// for(var i=0; i < navMenuAnchorTags.length; i++){                                      //This is for printing nav items separatly.
//     navMenuAnchorTags[i].addEventListener("click",function(event){
//         event.preventDefault();                                                        //This will lead to stop moving of screen on clicking on nav items.
//         var targetSectionId = this.textContent.trim().toLowerCase();                  //prints - home/portfolio after each clicking
//         var targetSection = document.getElementById(targetSectionId);             //This is for getting  a perticular nav-item section where it should be goes.
//         // console.log(targetSection);                                                  //In line 8 there is something wrong.
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();          //for getting exact location of clicked nav-item, then this will take to that section.
//             if(targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,100);
//         },50);   
//     });
// }

//-------------------------------------------------------------Approach-2(smooth scroll)--------------------------------------------------------------------------------------

var navMenuAnchorTags = document.querySelectorAll(".horizontal-list a");                       //This is for fetching all the anchors. 
var interval;
for(var i=0; i < navMenuAnchorTags.length; i++){                                      //This is for printing nav items separatly.
    navMenuAnchorTags[i].addEventListener("click",function(event){
        event.preventDefault();                                                        //This will lead to stop moving of screen on clicking on nav items.
        var targetSectionId = this.textContent.trim().toLowerCase();                  //prints - home/portfolio after each clicking
        var targetSection = document.getElementById(targetSectionId);             //This is for getting  a perticular nav-item section where it should be goes.                                              //In line 8 there is something wrong.
        // interval = setInterval(scrollVertically, 20, targetSection);         //This is 1st method
        interval = setInterval(function(){                                   //This is 2nd method.
            scrollVertically(targetSection);
        },50);
            
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();            //for getting exact location of clicked nav-item, then this will take to that section.
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,100);
}

// ----------------------------------------------------skill animation------------------------------------------------------


var progessBar = document.querySelectorAll(".skill-progress > div");            //This is inner colored skill boxes.
var skillsDisplay = document.querySelector(".skills-display");              //This is big skill box.
window.addEventListener("scroll",checkScroll);                          //function-3 call
var animationDone = false;


function initialiseBars(){                                     //function-1----------------------------------------
    for(let bar of progessBar){
        bar.style.width = 0; + "%";
    }
}
initialiseBars();



function fillBars(){                                        //function-2-----------------------------------------------------
    for(let bar of progessBar){
        let targetWidth = bar.getAttribute("data-bar-width");
        let currentWidth = 0;
        let intervall = setInterval(function(){
            if(currentWidth> targetWidth){                      //Mtlb ki jb color bdna(currentWidth) shuru ho to ek perticular point(targetSection) ke bad ruk jae 
            clearInterval(intervall);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + "%";                         //Mainly isi ki wajah se color fill ho rahe hai.
    },3);
}
}

function checkScroll(){                                                             //function-3--------------------------------------------------
    var coordinates = skillsDisplay.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){                    //Mtlb ki scroll karne par jaise hi skill section ki top se height total visible height(viewport height) se kam hogi vaise hi next condition impliment ho jaegi.
        animationDone = true;
        console.log("visible")
        fillBars();
    }
    else if(coordinates.top > window.innerHeight){                               //skill section ki top se height total visible height(viewport height) se jada hogi vaise hi next condition impliment ho jaegi.
        animationDone = false;
        initialiseBars();
    }
}
