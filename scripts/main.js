const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/Chrome.jpeg"){
        myImage.setAttribute("src", "images/Safari.png");
    }
    else{
        myImage.setAttribute("src", "images/Chrome.jpeg");
    }

}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h4");

function setUserName() {
    const myName = prompt("Please enter your name:");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my website ${myName}!`;
}
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my website ${storedName}!`;
  }
  myButton.onclick = () => {
    setUserName();
  };