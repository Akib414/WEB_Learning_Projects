const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector('#list');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const catId = input.value;
    console.log(input.value);
    const newli = document.createElement('li');
    newli.innerText = catId;
    console.log(newli);
    list.append(newli);
    input.value = null;
     

})
