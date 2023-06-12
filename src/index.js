

const films_list = document.getElementsByClassName("films-list")[0]
const buttons = document.querySelectorAll("button")
const tiers = document.getElementsByClassName("tier-content")

let imgSelected = []
let imgAdded = []

const fragment = document.createDocumentFragment()
for (let i = 1; i <= 6; i++) {
    const img = document.createElement("img")
    img.setAttribute("src", `./img/film0${i}.jpg`)
    img.setAttribute("alt", `film0${i}`)
    img.classList.add("pointer")
    img.addEventListener('click', handleEvent)
    fragment.appendChild(img)
}
films_list.appendChild(fragment)

buttons.forEach((button) => {
    button.addEventListener('click', handleButton)
})


function handleEvent(event) {
    const element = event.currentTarget
    if (element.className == "pointer click") {
        imgSelected.pop(element)
        element.classList.remove("click")
        message("DESELECTED", element.alt)
        return
    } else if (element.className == "pointer click added") {
        return
    }
    element.classList.add("click")
    imgSelected.push(element)
    message("SELECTED", element.alt)
}

function handleButton(event) {
    const tierRow = event.currentTarget.title
    if (imgSelected.length == 0) {return}
    for (let img of imgSelected) {
        const newItem = document.createElement("img");
        newItem.setAttribute("src", img.src)
        tiers[`${tierRow}`].appendChild(newItem)
        imgSelected = []
        img.classList.add("added")
    }
}

function message(type, message, info='---') {
    console.log(`[ ${type} ] ${message}`)
    console.log(info)
}