/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nconst films_list = document.getElementsByClassName(\"films-list\")[0]\nconst buttons = document.querySelectorAll(\"button\")\nconst tiers = document.getElementsByClassName(\"tier-content\")\n\nlet imgSelected = []\nlet imgAdded = []\nlet filmsNumber = 9\n\nconst fragment = document.createDocumentFragment()\nfor (let i = 1; i <= filmsNumber; i++) {\n    const img = document.createElement(\"img\")\n    img.setAttribute(\"src\", `./img/film0${i}.jpg`)\n    img.setAttribute(\"alt\", `film0${i}`)\n    img.classList.add(\"pointer\")\n    img.addEventListener('click', handleEvent)\n    fragment.appendChild(img)\n}\nfilms_list.appendChild(fragment)\n\nbuttons.forEach((button) => {\n    button.addEventListener('click', handleButton)\n})\n\n\nfunction handleEvent(event) {\n    const element = event.currentTarget\n    if (element.className == \"pointer click\") {\n        imgSelected.pop(element)\n        element.classList.remove(\"click\")\n        message(\"DESELECTED\", element.alt)\n        return\n    } else if (element.className == \"pointer click added\") {\n        return\n    }\n    element.classList.add(\"click\")\n    imgSelected.push(element)\n    message(\"SELECTED\", element.alt)\n}\n\nfunction handleButton(event) {\n    const tierRow = event.currentTarget.title\n    if (imgSelected.length == 0) {return}\n    for (let img of imgSelected) {\n        const newItem = document.createElement(\"img\");\n        newItem.setAttribute(\"src\", img.src)\n        tiers[`${tierRow}`].appendChild(newItem)\n        imgSelected = []\n        img.classList.add(\"added\")\n    }\n}\n\nfunction message(type, message, info='---') {\n    console.log(`[ ${type} ] ${message}`)\n    console.log(info)\n}\n\n//# sourceURL=webpack://tierlist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;