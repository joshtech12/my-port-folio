/*  const element = document.getElementById('animation')

let counter = 0;
 
const animate = () => {
    counter += 1;
    element.style.top = counter + 'px';

    if(counter < 450) {
        requestAnimationFrame(animate);
    }

}

animate();
 */

 const hideText = () => {
    let button = document.getElementById('myButton')
    button.innerHTML = "";
}

const demo = () => {
    let myText = document.getElementById('text')

    if(myText.style.display === "none"){
        myText.style.display = "block"
    } else{
        myText.style.display = "none"
    }
};


/* 
const demo = document.querySelector('#onclick').addEventListener('click', () =>{
    demo.style.display = "none"

})

 */