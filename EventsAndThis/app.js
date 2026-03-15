
const makeRandomColor = () => {
        const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const applyColor = (e) => {
    e.target.style.backgroundColor = makeRandomColor();
    e.target.style.color = makeRandomColor();

}

const btns = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');
for(let btn of btns){
    btn.addEventListener('click',applyColor) ;  
}
for(let h of h1s){
    h.addEventListener('click',applyColor) ;  
}
