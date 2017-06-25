var myImg = document.querySelector("img");
myImg.onclick = function(){
    var mySrc = myImg.getAttribute("src");
    if(mySrc === "images/firefox-logo-100690302-large.jpg")
        {
            myImg.setAttribute("src","images/firefox2.jpg");
        }
    else{
        myImg.setAttribute("src","images/firefox-logo-100690302-large.jpg")
    }
    
}

var myHeading = document.querySelector("h1");
function setUserName()
{
    var userName = prompt("Please enter you name");
    localStorage.setItem("userName",userName);
    myHeading.innerHTML = "Mozilla is cool, "+userName;
}

if(!localStorage.getItem("userName"))
    {
        setUserName();
    }
else{
    myHeading.innerHTML="Mozilla is cool, "+localStorage.getItem("userName")
}

document.querySelector("button").onclick = function(){
    setUserName();
}