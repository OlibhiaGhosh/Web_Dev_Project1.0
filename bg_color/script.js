buttons = document.querySelectorAll(".button");
body = document.querySelector("body");
console.log(buttons);
const removebg = (sourceElement) => {
    let sourceClasses = Array.from(sourceElement.classList);

sourceClasses.forEach(function(className) {
    if (className.startsWith('bg-')) { // check if class has any background color class
        body.classList.remove(className); // remove bg color from target element
    }
});

}
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click" , function(e){
        removebg(body); // remove bg color from target element
        body.classList.add(e.target.id);   //Add the required bg colour
    })
    
});