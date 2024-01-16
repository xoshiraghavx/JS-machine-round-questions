const container = document.querySelector('.conatiner');
function loadImages(numImages=15){
    let i=0;
    while(i<numImages){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response=>response.json())
        .then(data=>{
            const img = document.createElement('img');
            img.src = `${data.message}`
            container.appendChild(img)
        })
        i++;
    }
}
loadImages();

window.addEventListener('scroll', function(){
    if(this.window.scrollY+this.window.innerHeight>=this.document.documentElement.scrollHeight){
        loadImages()
    }
})

















