/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_OrderCard_OrderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/OrderCard/OrderCard */ \"./components/OrderCard/OrderCard.jsx\");\n/* harmony import */ var _styles_pages_Order_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Order.module.scss */ \"./styles/pages/Order.module.scss\");\n/* harmony import */ var _styles_pages_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Order_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/MelonnTest/melonn-app/pages/index.jsx\";\n\n\n\n // Petición en el servidor para obtener los shipping-methods\n\nvar __N_SSP = true;\nfunction index({\n  orders,\n  statusCode\n}) {\n  if (statusCode !== 200) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Error, {\n      statusCode: statusCode\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Sell Order List\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/orders/newOrder\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: \"button\",\n        children: \" New Order \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_pages_Order_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cards_container),\n      children: orders.map(order => {\n        const data = order.orderData; //   return <a>{id}</a>;\n\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_OrderCard_OrderCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          data: data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 24\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, this);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiaW5kZXgiLCJvcmRlcnMiLCJzdGF0dXNDb2RlIiwicyIsIm1hcCIsIm9yZGVyIiwiZGF0YSIsIm9yZGVyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7O0FBNEJlLFNBQVNBLEtBQVQsQ0FBZTtBQUFDQyxRQUFEO0FBQVNDO0FBQVQsQ0FBZixFQUFxQztBQUNoRCxNQUFJQSxVQUFVLEtBQUssR0FBbkIsRUFBd0I7QUFDcEIsd0JBQU8sOERBQUMsS0FBRDtBQUFPLGdCQUFVLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUNILHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLGtCQUFYO0FBQUEsNkJBQ0E7QUFBRyxpQkFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFLSTtBQUFLLGVBQVMsRUFBRUMsd0ZBQWhCO0FBQUEsZ0JBQ0NGLE1BQU0sQ0FBQ0csR0FBUCxDQUFZQyxLQUFELElBQVc7QUFDckIsY0FBTUMsSUFBSSxHQUFJRCxLQUFLLENBQUNFLFNBQXBCLENBRHFCLENBRXZCOztBQUNJLDRCQUFPLDhEQUFDLG9FQUFEO0FBQVcsY0FBSSxFQUFFRDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0gsT0FKQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgT3JkZXJDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL09yZGVyQ2FyZC9PcmRlckNhcmRcIlxuaW1wb3J0IGZldGNoQXBpIGZyb20gXCIuLi91dGlscy9mZXRjaEFwaVwiXG5pbXBvcnQgcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL09yZGVyLm1vZHVsZS5zY3NzXCJcblxuLy8gUGV0aWNpw7NuIGVuIGVsIHNlcnZpZG9yIHBhcmEgb2J0ZW5lciBsb3Mgc2hpcHBpbmctbWV0aG9kc1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcmRlcnNEYXRhID0gYXdhaXQgZmV0Y2hBcGkoXCJhcGkvb3JkZXJzXCIsXCJnZXRcIilcbiAgICBpZiAoIW9yZGVyc0RhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IG9yZGVyc0RhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKG9yZGVycylcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgb3JkZXJzLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjdHguc3RhdHVzQ29kZSA9IDUwMztcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgb3JkZXJzOiBbXSxcbiAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCh7b3JkZXJzLCBzdGF0dXNDb2RlfSkge1xuICAgIGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPjtcbiAgICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlNlbGwgT3JkZXIgTGlzdDwvaDE+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVycy9uZXdPcmRlclwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCI+IE5ldyBPcmRlciA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jYXJkc19jb250YWluZXJ9PlxuICAgICAgICAgICAge29yZGVycy5tYXAoKG9yZGVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgID0gb3JkZXIub3JkZXJEYXRhO1xuICAgICAgICAgICAgLy8gICByZXR1cm4gPGE+e2lkfTwvYT47XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxPcmRlckNhcmQgZGF0YT17ZGF0YX0gLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});