/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/OrderCard/OrderCard.jsx":
/*!********************************************!*\
  !*** ./components/OrderCard/OrderCard.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _OrderCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderCard.module.scss */ \"./components/OrderCard/OrderCard.module.scss\");\n/* harmony import */ var _OrderCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_OrderCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/MelonnTest/melonn-app/components/OrderCard/OrderCard.jsx\";\n\n\n\n\nfunction OrderCard({\n  data,\n  id,\n  methods\n}) {\n  const method = methods.find(method => method.id == data.shippingMethod);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_OrderCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: `/orders/${id}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n            children: \" Sell Order Number: \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 11,\n            columnNumber: 14\n          }, this), data.externalOrderNumber]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Seller store: \", data.sellerStore]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Creation Date: \", data.creationDataTime]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Shipping method: \", method.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n_c = OrderCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckNhcmQvT3JkZXJDYXJkLmpzeD85MTA4Il0sIm5hbWVzIjpbIk9yZGVyQ2FyZCIsImRhdGEiLCJpZCIsIm1ldGhvZHMiLCJtZXRob2QiLCJmaW5kIiwic2hpcHBpbmdNZXRob2QiLCJzIiwiZXh0ZXJuYWxPcmRlck51bWJlciIsInNlbGxlclN0b3JlIiwiY3JlYXRpb25EYXRhVGltZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CO0FBQUNDLE1BQUQ7QUFBT0MsSUFBUDtBQUFXQztBQUFYLENBQW5CLEVBQXdDO0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxJQUFSLENBQWNELE1BQUQsSUFBVUEsTUFBTSxDQUFDRixFQUFQLElBQWFELElBQUksQ0FBQ0ssY0FBekMsQ0FBZjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxvRUFBaEI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxXQUFVTCxFQUFHLEVBQTFCO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFBLGtDQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILEVBQStCRCxJQUFJLENBQUNPLG1CQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHVDQUFrQlAsSUFBSSxDQUFDUSxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLHdDQUFtQlIsSUFBSSxDQUFDUyxnQkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBQSwwQ0FBcUJOLE1BQU0sQ0FBQ08sSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7S0FkUVgsUztBQWdCVCwrREFBZUEsU0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvT3JkZXJDYXJkL09yZGVyQ2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9PcmRlckNhcmQubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gT3JkZXJDYXJkKHtkYXRhICxpZCwgbWV0aG9kc30pIHtcbiAgY29uc3QgbWV0aG9kID0gbWV0aG9kcy5maW5kKChtZXRob2QpPT5tZXRob2QuaWQgPT0gZGF0YS5zaGlwcGluZ01ldGhvZClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXJkfT5cbiAgICAgIDxMaW5rIGhyZWY9e2Avb3JkZXJzLyR7aWR9YH0+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxwPjxiPiBTZWxsIE9yZGVyIE51bWJlcjogPC9iPntkYXRhLmV4dGVybmFsT3JkZXJOdW1iZXJ9PC9wPlxuICAgICAgICAgIDxwPlNlbGxlciBzdG9yZToge2RhdGEuc2VsbGVyU3RvcmV9PC9wPlxuICAgICAgICAgIDxwPkNyZWF0aW9uIERhdGU6IHtkYXRhLmNyZWF0aW9uRGF0YVRpbWV9PC9wPlxuICAgICAgICAgIDxwPlNoaXBwaW5nIG1ldGhvZDoge21ldGhvZC5uYW1lfTwvcD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/OrderCard/OrderCard.jsx\n");

/***/ })

});