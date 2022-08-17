

var allImag = document.querySelectorAll(".img-fluid") // 4bh el Array
var myBlackBox = document.querySelector(".blackBox");
var myDesignBox = document.querySelector(".designBox");
var myClose = document.getElementById("close");
var myNext = document.getElementById("next");
var myPrev = document.getElementById("prev");


// convert NodeList ---> array
allImag = Array.from( allImag  ) // Array
var currentIndex = 0; // Global


// add Event l kol el swr
for(var i=0 ; i< allImag.length ;i++)
{
    allImag[i].addEventListener("click" , showBalckBoxfun)
}

// --------show Black Box ---------------
function showBalckBoxfun(e)
{
    var targetImag = e.target; // el img Elli dost 3liha

    currentIndex =   allImag.indexOf(targetImag) // Array
    console.log(currentIndex)

    myDesignBox.style.backgroundImage = "url("+targetImag.src+")"

    myBlackBox.classList.replace("hide" , "show");
}



// ---------------Close --------------------//
myClose.addEventListener("click" , hideBlackBoxfun)
function hideBlackBoxfun()
{
    myBlackBox.classList.replace("show" , "hide")
}

// --------------- for next image --------------//
myNext.addEventListener("click" , getnextImag)
function getnextImag()
{
    currentIndex++;

    if(currentIndex >= allImag.length)
    {
        currentIndex = 0;
    }

    var nextImgSrc = allImag[currentIndex].src ;

    myDesignBox.style.backgroundImage = "url("+nextImgSrc+")";

}


myPrev.addEventListener("click" , getPrevImage)

function getPrevImage()
{
    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex = allImag.length -1
    }

    var prevImgSrc = allImag[currentIndex].src ;

    myDesignBox.style.backgroundImage = "url("+prevImgSrc+")";

}


document.addEventListener("keydown" , handelKeyboard)


function handelKeyboard(e)
{
    if(e.keyCode == 39)// right
    {
        getnextImag();
    }
    else if(e.keyCode == 37) // left
    {
        getPrevImage();
    }
    else if(e.keyCode == 27) // esc
    {
        hideBlackBoxfun();
    }
}

myBlackBox.addEventListener("click" , test)

function test(e)
{
    if(  e.target == myBlackBox  )
    {
        myBlackBox.classList.replace("show" , "hide")
    }
}


