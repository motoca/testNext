webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/wesley/Documents/projetos/estudo/next/testNext/pages/index.js\";\n\n\n\n\n\nfunction Tempo() {\n  var dynamicDate = new Date();\n  var dynamicDateString = dynamicDate.toGMTString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n      children: \"Data:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this), \" \", dynamicDateString, \" (din\\xE2mico)\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Tempo;\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: Tempo()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"\".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingMd, \" \").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.padding1px),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingLg,\n        children: \"Blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,\n        children: allPostsData.map(function (_ref2) {\n          var id = _ref2.id,\n              date = _ref2.date,\n              title = _ref2.title;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listItem,\n            children: [title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 15\n            }, _this), id, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), date]\n          }, id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n} // import { useState } from 'react';\n// import Head from 'next/head'\n// import Link from 'next/link'\n// function CapsLock(props) {\n//     const textoInserido = props.children;\n//     const textoEmCapslock = textoInserido.toUpperCase();\n//     return <div>{textoEmCapslock}</div>\n// }\n// function Contador() {\n//     const [contador, setContador] = useState(1);\n//     function adicionarContador(){\n//         setContador(contador + 1);\n//     }\n//     return (\n//         <div>\n//             <div><h2>Contador : {contador}</h2></div>\n//             <button onClick={adicionarContador}>Adicionar</button>\n//         </div>\n//     )\n// }\n// export default function Home() {\n//   return (\n//     <div className=\"container\">\n//       <Head>\n//         <title>Create Next App</title>\n//         <link rel=\"icon\" href=\"/favicon.ico\" />\n//       </Head>\n//       <main>\n//         <h1 className=\"title\">\n//           Welcome to <a href=\"https://nextjs.org\">Next.js!</a>\n//         </h1>\n//         <p className=\"description\">\n//           Get started by editing <code>pages/index.js</code>\n//         </p>\n//         <div>\n//             <h1 className=\"title\">\n//                 Read{' '}\n//                 <Link href=\"/posts/first-post\">\n//                     <a>this page!</a>\n//                 </Link>\n//             </h1>\n//         </div>\n//         <div className=\"grid\">\n//           <a href=\"https://nextjs.org/docs\" className=\"card\">\n//             <h3>Documentation &rarr;</h3>\n//             <p>Find in-depth information about Next.js features and API.</p>\n//           </a>\n//           <a href=\"https://nextjs.org/learn\" className=\"card\">\n//             <h3>Learn &rarr;</h3>\n//             <p>Learn about Next.js in an interactive course with quizzes!</p>\n//           </a>\n//           <a\n//             href=\"https://github.com/vercel/next.js/tree/master/examples\"\n//             className=\"card\"\n//           >\n//             <h3>Examples &rarr;</h3>\n//             <p>Discover and deploy boilerplate example Next.js projects.</p>\n//           </a>\n//           <a\n//             href=\"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//             className=\"card\"\n//           >\n//             <h3>Deploy &rarr;</h3>\n//             <p>\n//               Instantly deploy your Next.js site to a public URL with Vercel.\n//             </p>\n//           </a>\n//           <a\n//             href=\"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//             className=\"card\"\n//           >\n//             <h3>Contador &rarr;</h3>\n//             <p>\n//                 <CapsLock>\"Instantly deploy\"</CapsLock>\n//                 <Contador />\n//             </p>\n//           </a>\n//         </div>\n//       </main>\n//       <footer>\n//         <a\n//           href=\"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\"\n//           target=\"_blank\"\n//           rel=\"noopener noreferrer\"\n//         >\n//           Powered by{' '}\n//           <img src=\"/vercel.svg\" alt=\"Vercel Logo\" className=\"logo\" />\n//         </a>\n//       </footer>\n//       <style jsx>{`\n//         .container {\n//           min-height: 100vh;\n//           padding: 0 0.5rem;\n//           display: flex;\n//           flex-direction: column;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         main {\n//           padding: 5rem 0;\n//           flex: 1;\n//           display: flex;\n//           flex-direction: column;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         footer {\n//           width: 100%;\n//           height: 100px;\n//           border-top: 1px solid #eaeaea;\n//           display: flex;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         footer img {\n//           margin-left: 0.5rem;\n//         }\n//         footer a {\n//           display: flex;\n//           justify-content: center;\n//           align-items: center;\n//         }\n//         a {\n//           color: inherit;\n//           text-decoration: none;\n//         }\n//         .title a {\n//           color: #0070f3;\n//           text-decoration: none;\n//         }\n//         .title a:hover,\n//         .title a:focus,\n//         .title a:active {\n//           text-decoration: underline;\n//         }\n//         .title {\n//           margin: 0;\n//           line-height: 1.15;\n//           font-size: 4rem;\n//         }\n//         .title,\n//         .description {\n//           text-align: center;\n//         }\n//         .description {\n//           line-height: 1.5;\n//           font-size: 1.5rem;\n//         }\n//         code {\n//           background: #fafafa;\n//           border-radius: 5px;\n//           padding: 0.75rem;\n//           font-size: 1.1rem;\n//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,\n//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;\n//         }\n//         .grid {\n//           display: flex;\n//           align-items: center;\n//           justify-content: center;\n//           flex-wrap: wrap;\n//           max-width: 800px;\n//           margin-top: 3rem;\n//         }\n//         .card {\n//           margin: 1rem;\n//           flex-basis: 45%;\n//           padding: 1.5rem;\n//           text-align: left;\n//           color: inherit;\n//           text-decoration: none;\n//           border: 1px solid #eaeaea;\n//           border-radius: 10px;\n//           transition: color 0.15s ease, border-color 0.15s ease;\n//         }\n//         .card:hover,\n//         .card:focus,\n//         .card:active {\n//           color: #0070f3;\n//           border-color: #0070f3;\n//         }\n//         .card h3 {\n//           margin: 0 0 1rem 0;\n//           font-size: 1.5rem;\n//         }\n//         .card p {\n//           margin: 0;\n//           font-size: 1.25rem;\n//           line-height: 1.5;\n//         }\n//         .logo {\n//           height: 1em;\n//         }\n//         @media (max-width: 600px) {\n//           .grid {\n//             width: 100%;\n//             flex-direction: column;\n//           }\n//         }\n//       `}</style>\n//       <style jsx global>{`\n//         html,\n//         body {\n//           padding: 0;\n//           margin: 0;\n//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,\n//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,\n//             sans-serif;\n//         }\n//         * {\n//           box-sizing: border-box;\n//         }\n//       `}</style>\n//     </div>\n//   )\n// }\n\n_c2 = Home;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Tempo\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJUZW1wbyIsImR5bmFtaWNEYXRlIiwiRGF0ZSIsImR5bmFtaWNEYXRlU3RyaW5nIiwidG9HTVRTdHJpbmciLCJIb21lIiwiYWxsUG9zdHNEYXRhIiwidXRpbFN0eWxlcyIsImhlYWRpbmdNZCIsInBhZGRpbmcxcHgiLCJoZWFkaW5nTGciLCJsaXN0IiwibWFwIiwiaWQiLCJkYXRlIiwidGl0bGUiLCJsaXN0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFhQSxTQUFTQSxLQUFULEdBQWtCO0FBQ2hCLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEVBQXBCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdGLFdBQVcsQ0FBQ0csV0FBWixFQUExQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixPQUNnQkQsaUJBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBVFFILEs7O0FBV00sU0FBU0ssSUFBVCxPQUFnQztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFDN0Msc0JBQ0UscUVBQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQSw0QkFJRTtBQUFBLGdCQUFNTixLQUFLO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBTUU7QUFBUyxlQUFTLFlBQUtPLCtEQUFVLENBQUNDLFNBQWhCLGNBQTZCRCwrREFBVSxDQUFDRSxVQUF4QyxDQUFsQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUYsK0RBQVUsQ0FBQ0csU0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUksaUJBQVMsRUFBRUgsK0RBQVUsQ0FBQ0ksSUFBMUI7QUFBQSxrQkFDR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCO0FBQUEsY0FBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsY0FBT0MsSUFBUCxTQUFPQSxJQUFQO0FBQUEsY0FBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsOEJBQ2hCO0FBQUkscUJBQVMsRUFBRVIsK0RBQVUsQ0FBQ1MsUUFBMUI7QUFBQSx1QkFDR0QsS0FESCxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFHR0YsRUFISCxlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsRUFLR0MsSUFMSDtBQUFBLGFBQXlDRCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBLFNBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BbFF3QlIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5cbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uL2xpYi9wb3N0cydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gVGVtcG8gKCkge1xuICBjb25zdCBkeW5hbWljRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGR5bmFtaWNEYXRlU3RyaW5nID0gZHluYW1pY0RhdGUudG9HTVRTdHJpbmcoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Yj5EYXRhOjwvYj4ge2R5bmFtaWNEYXRlU3RyaW5nfSAoZGluw6JtaWNvKVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhbGxQb3N0c0RhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIHsvKiBLZWVwIHRoZSBleGlzdGluZyBjb2RlIGhlcmUgKi99XG5cbiAgICAgIHsvKiBBZGQgdGhpcyA8c2VjdGlvbj4gdGFnIGJlbG93IHRoZSBleGlzdGluZyA8c2VjdGlvbj4gdGFnICovfVxuICAgICAgPGRpdj57VGVtcG8oKX08L2Rpdj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5CbG9nPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtpZH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtkYXRlfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuLy8gZnVuY3Rpb24gQ2Fwc0xvY2socHJvcHMpIHtcbi8vICAgICBjb25zdCB0ZXh0b0luc2VyaWRvID0gcHJvcHMuY2hpbGRyZW47XG4vLyAgICAgY29uc3QgdGV4dG9FbUNhcHNsb2NrID0gdGV4dG9JbnNlcmlkby50b1VwcGVyQ2FzZSgpO1xuLy8gICAgIHJldHVybiA8ZGl2Pnt0ZXh0b0VtQ2Fwc2xvY2t9PC9kaXY+XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIENvbnRhZG9yKCkge1xuLy8gICAgIGNvbnN0IFtjb250YWRvciwgc2V0Q29udGFkb3JdID0gdXNlU3RhdGUoMSk7XG5cbi8vICAgICBmdW5jdGlvbiBhZGljaW9uYXJDb250YWRvcigpe1xuLy8gICAgICAgICBzZXRDb250YWRvcihjb250YWRvciArIDEpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8ZGl2PjxoMj5Db250YWRvciA6IHtjb250YWRvcn08L2gyPjwvZGl2PlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGljaW9uYXJDb250YWRvcn0+QWRpY2lvbmFyPC9idXR0b24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuLy8gICAgICAgPEhlYWQ+XG4vLyAgICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuLy8gICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4vLyAgICAgICA8L0hlYWQ+XG5cbi8vICAgICAgIDxtYWluPlxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbi8vICAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIj5OZXh0LmpzITwvYT5cbi8vICAgICAgICAgPC9oMT5cblxuLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuLy8gICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcgPGNvZGU+cGFnZXMvaW5kZXguanM8L2NvZGU+XG4vLyAgICAgICAgIDwvcD5cblxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XG4vLyAgICAgICAgICAgICAgICAgUmVhZHsnICd9XG4vLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0cy9maXJzdC1wb3N0XCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxhPnRoaXMgcGFnZSE8L2E+XG4vLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxuLy8gICAgICAgICAgICAgPC9oMT5cbi8vICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4vLyAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuLy8gICAgICAgICAgICAgPGgzPkRvY3VtZW50YXRpb24gJnJhcnI7PC9oMz5cbi8vICAgICAgICAgICAgIDxwPkZpbmQgaW4tZGVwdGggaW5mb3JtYXRpb24gYWJvdXQgTmV4dC5qcyBmZWF0dXJlcyBhbmQgQVBJLjwvcD5cbi8vICAgICAgICAgICA8L2E+XG5cbi8vICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuLy8gICAgICAgICAgICAgPGgzPkxlYXJuICZyYXJyOzwvaDM+XG4vLyAgICAgICAgICAgICA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPlxuLy8gICAgICAgICAgIDwvYT5cblxuLy8gICAgICAgICAgIDxhXG4vLyAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzXCJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxoMz5FeGFtcGxlcyAmcmFycjs8L2gzPlxuLy8gICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuLy8gICAgICAgICAgIDwvYT5cblxuLy8gICAgICAgICAgIDxhXG4vLyAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL2ltcG9ydD9maWx0ZXI9bmV4dC5qcyZ1dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkXCJcbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8aDM+RGVwbG95ICZyYXJyOzwvaDM+XG4vLyAgICAgICAgICAgICA8cD5cbi8vICAgICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHB1YmxpYyBVUkwgd2l0aCBWZXJjZWwuXG4vLyAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgPC9hPlxuXG4vLyAgICAgICAgICAgPGFcbi8vICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vaW1wb3J0P2ZpbHRlcj1uZXh0LmpzJnV0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxoMz5Db250YWRvciAmcmFycjs8L2gzPlxuLy8gICAgICAgICAgICAgPHA+XG4vLyAgICAgICAgICAgICAgICAgPENhcHNMb2NrPlwiSW5zdGFudGx5IGRlcGxveVwiPC9DYXBzTG9jaz5cbi8vICAgICAgICAgICAgICAgICA8Q29udGFkb3IgLz5cbi8vICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICA8L2E+XG5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L21haW4+XG5cbi8vICAgICAgIDxmb290ZXI+XG4vLyAgICAgICAgIDxhXG4vLyAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4vLyAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbi8vICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuLy8gICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIiAvPlxuLy8gICAgICAgICA8L2E+XG4vLyAgICAgICA8L2Zvb3Rlcj5cblxuLy8gICAgICAgPHN0eWxlIGpzeD57YFxuLy8gICAgICAgICAuY29udGFpbmVyIHtcbi8vICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbi8vICAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBtYWluIHtcbi8vICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4vLyAgICAgICAgICAgZmxleDogMTtcbi8vICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBmb290ZXIge1xuLy8gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4vLyAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4vLyAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGZvb3RlciBpbWcge1xuLy8gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZm9vdGVyIGEge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBhIHtcbi8vICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbi8vICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnRpdGxlIGEge1xuLy8gICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAudGl0bGUgYTpob3Zlcixcbi8vICAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4vLyAgICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4vLyAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnRpdGxlIHtcbi8vICAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4vLyAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC50aXRsZSxcbi8vICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbi8vICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGNvZGUge1xuLy8gICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4vLyAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4vLyAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4vLyAgICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4vLyAgICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmdyaWQge1xuLy8gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4vLyAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5jYXJkIHtcbi8vICAgICAgICAgICBtYXJnaW46IDFyZW07XG4vLyAgICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuLy8gICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuLy8gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuLy8gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmNhcmQ6aG92ZXIsXG4vLyAgICAgICAgIC5jYXJkOmZvY3VzLFxuLy8gICAgICAgICAuY2FyZDphY3RpdmUge1xuLy8gICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuLy8gICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuY2FyZCBoMyB7XG4vLyAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuLy8gICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5jYXJkIHAge1xuLy8gICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4vLyAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAubG9nbyB7XG4vLyAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4vLyAgICAgICAgICAgLmdyaWQge1xuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgYH08L3N0eWxlPlxuXG4vLyAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuLy8gICAgICAgICBodG1sLFxuLy8gICAgICAgICBib2R5IHtcbi8vICAgICAgICAgICBwYWRkaW5nOiAwO1xuLy8gICAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuLy8gICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbi8vICAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgKiB7XG4vLyAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgYH08L3N0eWxlPlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})