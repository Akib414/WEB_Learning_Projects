
const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q:searchTerm , genre:'comedy'}}
    const resp = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    extractImages(resp.data);
    form.elements.query.value = null;

})

const extractImages = (shows) => {
    for(let answers of shows){

        if(answers.show.image){
       const img = document.createElement('img');
       img.src = answers.show.image.medium ;
       document.body.append(img);
        }
    }
}