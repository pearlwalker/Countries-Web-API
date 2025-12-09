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

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("{\r\n\r\nconst handleResponse = async (res, hasBody) => {\r\n    const content = document.getElementById('content');\r\n    switch (res.status) {\r\n        case 200:\r\n            content.innerHTML = `<b>Success</b>`;\r\n            break;\r\n        case 201:\r\n            content.innerHTML = `<b>Created</b>`;\r\n            break;\r\n        case 204:\r\n            content.innerHTML = `<b>Updated</b>`;\r\n            break;\r\n        case 400:\r\n            content.innerHTML = `<b>Bad Request</b>`;\r\n            break;\r\n        case 404:\r\n            content.innerHTML = `<b>Not Found</b>`;\r\n            break;\r\n        default:\r\n            content.innerHTML = `<p>Status code not implemented by client</p>`;\r\n            break;\r\n    };\r\n};\r\nconst submitGetEvery = async (form, method, options) => {\r\n    console.log(form, method);\r\n};\r\n\r\nconst submitGetCountry = async (form, method, options) => {\r\n    console.log(form, method);\r\n};\r\n\r\nconst submitGetTimezones = async (form, method, options) => {\r\n    console.log(form, method);\r\n};\r\n\r\nconst submitGetSun = async (form, method, options) => {\r\n    console.log(form, method);\r\n};\r\n\r\nconst submitRenameTZ = async (form, method, options) => {\r\n    console.log(form, method);\r\n};\r\n\r\nconst submitCreateTZ = async (form, method, options) => {\r\n    console.log(form, method);\r\n};\r\nconst sendFetch = async (form, method, url = undefined) => {\r\n    let hasBody = true;\r\n    if (!url) {\r\n        url = form.getAttribute('actions');\r\n    };\r\n    const options = {\r\n        method: method,\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    };\r\n\r\n    if (method === 'POST' || method === 'post') {\r\n\r\n    };\r\n\r\n    if (method === 'HEAD' || method === 'head') {\r\n\r\n    } else {\r\n\r\n    };\r\n};\r\n\r\nconst createCollapsibles = () => {\r\n    const collapsibles = document.querySelectorAll('.collapsible');\r\n    const requestForm = document.querySelectorAll('.requestForm');\r\n    collapsibles.forEach((button, index) => {\r\n        button.addEventListener('click', () => {\r\n            console.log(`Clicked ${button} at ${index}`)\r\n            const content = requestForm[index];\r\n            console.log(`${content}`);\r\n            requestForm.forEach((form) => {\r\n                if (form !== content) {\r\n                    form.style.display = 'none';\r\n                };\r\n            });\r\n            if (content.style.display === 'none') {\r\n                content.style.display = 'block';\r\n            } else {\r\n                content.style.display = 'none';\r\n            };\r\n        });\r\n    });\r\n};\r\n\r\nconst init = () => {\r\n    createCollapsibles();\r\n    const getEveryForm = document.querySelector('#getEvery');\r\n    const getCountryForm = document.querySelector('#getCountry');\r\n    const getTimezonesForm = document.querySelector('#getTimezones');\r\n    const getSunForm = document.querySelector('#getSun');\r\n    const renameForm = document.querySelector('#renameTZ');\r\n    const createForm = document.querySelector('#createTZ');\r\n    const formData = [\r\n        {\r\n            form: getEveryForm,\r\n            handler: submitGetEvery,\r\n        },\r\n        {\r\n            form: getCountryForm,\r\n            handler: submitGetCountry,\r\n        },\r\n        {\r\n            form: getTimezonesForm,\r\n            handler: submitGetTimezones,\r\n        },\r\n        {\r\n            form: getSunForm,\r\n            handler: submitGetSun,\r\n        },\r\n        {\r\n            form: renameForm,\r\n            handler: submitRenameTZ,\r\n        },\r\n        {\r\n            form: createForm,\r\n            handler: submitCreateTZ,\r\n        },\r\n    ];\r\n\r\n    formData.forEach((item) => {\r\n        const submitCallback = (e) => {\r\n            const method = item.form.querySelector('.methodSelect')?.value ?? item.form.getAttribute('method') ?? null;\r\n            e.preventDefault();\r\n            item.handler(item.form, method);\r\n            return false;\r\n        };\r\n        item.form.addEventListener('submit', submitCallback);\r\n    });\r\n};\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://430-project-1/./client/client.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;