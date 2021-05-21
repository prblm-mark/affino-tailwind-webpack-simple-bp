/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n // Dark Mode\n\nfunction setMode() {\n  if (localStorage.theme === 'dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {\n    document.documentElement.classList.add('dark');\n  } else {\n    document.documentElement.classList.remove('dark');\n  }\n}\n\nfunction switchMode(e) {\n  e.stopPropagation();\n  var mode = e.currentTarget;\n\n  if (mode.dataset.mode === 'light') {\n    mode.dataset.mode = 'dark';\n    localStorage.theme = 'dark';\n    setMode();\n  } else {\n    mode.dataset.mode = 'light';\n    localStorage.theme = 'light';\n    setMode();\n  }\n} // Set Breadcrumb\n\n\nfunction setBreadcrumbSection() {\n  var breadcrumb = document.querySelector('#breadcrumb');\n  var section = document.body.dataset.section;\n\n  if (!section) {\n    breadcrumb.previousElementSibling.classList.add('hidden');\n  }\n\n  breadcrumb.textContent = section;\n} // Expand/collapse accordions\n\n\nfunction expandTest(e) {\n  var section = e.target.closest('div').parentElement;\n  var panels = Array.from(section.children);\n  var sectionStatus = section.getAttribute('x-data');\n\n  if (sectionStatus === '{ expanded: false }') {\n    panels.forEach(function (panel) {\n      if (panel.hasAttribute('x-data')) {\n        panel.setAttribute('x-data', '{ selected: true }');\n      }\n    });\n    section.setAttribute('x-data', '{ expanded: true }');\n  } else {\n    panels.forEach(function (panel) {\n      if (panel.hasAttribute('x-data')) {\n        panel.setAttribute('x-data', '{ selected: false }');\n      }\n    });\n    section.setAttribute('x-data', '{ expanded: false }');\n  }\n} // TODO: BREAK OUT IN TO SMALLER FUNCTIONS\n// CREATE FUNCTION FOR INTERCATION(CLICK) RESIZE FOR MORE BUTTONS\n// LIMIT RESIZE CALLS\n\n\nfunction expandResize() {\n  var allPanels = document.querySelectorAll('[x-ref=\"panel\"]');\n  allPanels.forEach(function (panel) {\n    var panelStatus = panel.parentElement.getAttribute('x-data');\n\n    if (panelStatus === '{ selected: true }') {\n      panel.style.setProperty('max-height', \"\".concat(panel.scrollHeight, \"px\"));\n    }\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  // Set theme mode to localStorage\n  if (!localStorage.theme) {\n    localStorage.setItem('theme', 'light');\n  } // Set theme mode to document\n\n\n  setMode(); // Get mode toggle and add\n\n  var modeToggle = document.querySelector('#mode');\n  modeToggle.addEventListener('click', switchMode); // Set breadcrumb name\n\n  setBreadcrumbSection(); // Expand/collapse all\n\n  var accordions = document.querySelectorAll('.accordion');\n  accordions.forEach(function (accordion) {\n    accordion.addEventListener('click', function (e) {\n      return expandTest(e);\n    });\n  }); // Resize panels based on inner interactions\n\n  var moreBtns = document.querySelectorAll('.more');\n  moreBtns.forEach(function (moreBtn) {\n    moreBtn.addEventListener('click', function (e) {\n      return setTimeout(function () {\n        expandResize();\n      }, 100);\n    });\n  });\n});\nwindow.addEventListener('resize', function (event) {\n  expandResize();\n});\n\n//# sourceURL=webpack://tailwind-webpack-simple/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tailwind-webpack-simple/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;