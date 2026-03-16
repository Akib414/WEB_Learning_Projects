const btn = document.querySelector('#changeColor');
const dv = document.querySelector('#container');

btn.addEventListener('click' , (e) => {
    dv.style.backgroundColor = makeRandomColor();
    e.stopPropagation();
})

dv.addEventListener('click' ,function(){
   dv.classList.toggle('hide');
})
const makeRandomColor= () =>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return (`rgb(${r},${g},${b})`);
}
