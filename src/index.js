console.clear();

const films_list = document.getElementsByClassName("films-list")[0]
const buttons = document.querySelectorAll("button")
const tiers = document.getElementsByClassName("tier-content")

let imgSelected = []
let imgAdded = []
let filmsNumber = 14

//Create the images
const fragment = document.createDocumentFragment()
for (let i = 1; i <= filmsNumber; i++) {
    const img = document.createElement("img")
    if (i < 10) {
        img.setAttribute("src", `./img/film0${i}.jpg`)
    } else {
        img.setAttribute("src", `./img/film${i}.jpg`)
    }
    img.setAttribute("alt", `film0${i}`)
    img.classList.add("pointer")
    img.addEventListener('click', handleImg)
    fragment.appendChild(img)
}
films_list.appendChild(fragment)

//EventListener in buttons
buttons.forEach((button) => {
    button.addEventListener('click', handleButton)
})


//AddEventListener IMG
function handleImg(event) {
    const element = event.currentTarget
    if (element.className == "pointer click") {
        imgSelected.pop(element)
        element.classList.remove("click")
        message("DESELECTED", element.alt, `#fa7970`)
        return
    } else if (element.className == "pointer click added") {
        return
    }
    element.classList.add("click")
    imgSelected.push(element)
    message("SELECTED", element.alt, `#77bdfb`)
}

//AddEventListener BUTTON
function handleButton(event) {
    const tierRow = event.currentTarget.value
    
    if (imgSelected.length == 0) {return}

    for (let img of imgSelected) {
        const newItem = document.createElement("img");
        
        newItem.setAttribute("src", img.src)
        tiers[`${tierRow}`].appendChild(newItem)
        imgSelected = []
        img.classList.add("added")

        message("ADDED", img.alt, `#7ce38b`)
    }
}

//Print message in the console
function message(type, message, color='#e6edf3') {
    console.log(`%c[${type}] ${message}`, `color: ${color}`)
}