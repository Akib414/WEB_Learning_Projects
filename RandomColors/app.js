const btn = document.querySelector('button');
const bd = document.querySelector('body');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () =>
{
   const r = Math.floor(Math.random()*255);
   const g = Math.floor(Math.random()*255);
   const b = Math.floor(Math.random()*255);
   const bgColor = `rgb(${r},${g},${b})`;
//    bd.style.backgroundColor = rgb(r,g,b);
   bd.style.backgroundColor = bgColor;
   h1.innerText = bgColor ;

}
)