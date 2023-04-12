const movies = [
    'The Matrix 4',
    'The Batman',
    'Doctor Strange in the Multiverse of Madness',
    'Thor: Love and Thunder',
    'Black Panther 2',
    'Black Widow',
    'Jurassic World: Dominion',
    'Star Trek 4',
    'Ted',
    'Ted 2',
    'The Mummy'
]
let len=movies.length
const display=(movie)=>{
    let element=document.createElement("div")
    element.className="list-item"
    let elementButton=document.createElement("button")
    elementButton.innerText="Add to Favouritesfaghjk"
    let elementSpan=document.createElement("span")
    elementSpan.className="item"
    elementSpan.innerText=movie
    
    elementButton.addEventListener("click",add)
    element.appendChild(elementSpan)
    element.appendChild(elementButton)
    let parent=document.getElementById("movieList")
    parent.appendChild(element)
}
const del=(event)=>{
    let removed=event.target.parentNode.firstChild.innerText
    console.log(event.target.parentNode.firstChild)
    display(removed)
    event.target.parentNode.remove()
}
function add(event){console.log(event.target.parentNode)
let fav=event.target.parentNode.firstChild.innerText
event.target.parentNode.remove()
displayFavourites(fav)}
 
const displayFavourites=(favmovies)=>{
    let element=document.createElement("div")
    element.className="list-item"
    let elementSpan=document.createElement("span")
    elementSpan.className="item"
    elementSpan.innerText=favmovies
    let elementButton=document.createElement("button")
    elementButton.innerText="Remove from Favourites"
    elementButton.addEventListener("click",del)
    element.appendChild(elementSpan)
    element.appendChild(elementButton)
    let parent=document.getElementById("favList")
    parent.appendChild(element)
}
const favFilms= (favour)=>{
    for(let i=0;i<favour.length;i++){
        displayFavourites(favour[i])
    }
}
const film= ()=>{
    for(let i=0;i<len;i++){
        display(movies[i])
    }
}
film()