webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Jump */ "./node_modules/react-reveal/Jump.js");
/* harmony import */ var react_reveal_Jump__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_section_4_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/section-4-web */ "./component/section-4-web.js");
/* harmony import */ var _component_section_4_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/section-4-mobile */ "./component/section-4-mobile.js");
/* harmony import */ var _component_section_3_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/section-3-web */ "./component/section-3-web.js");
/* harmony import */ var _component_section_3_mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/section-3-mobile */ "./component/section-3-mobile.js");
var _jsxFileName = "C:\\Users\\arisa\\Documents\\GitHub\\personal-page-v2\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import { Parallax } from 'react-parallax'









function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      jump = _useState[0],
      setJump = _useState[1];

  var assetPrefix = "";
  setTimeout(function () {
    setJump(jump + 1);
  }, 1500);
  var section3Content = [{
    img: "",
    title: "TEST 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "",
    buttonLogo: "",
    parallaxConfig: {
      y: [150, -150]
    }
  }, {
    img: "",
    title: "TEST 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "",
    buttonLogo: "",
    parallaxConfig: {
      y: [250, -250]
    }
  }];
  var section4Content = [{
    year: "2020",
    title: "LEFT SECTION",
    desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    url: "",
    img: ""
  }, {
    year: "2020",
    title: "LEFT SECTION 2",
    desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    url: "",
    img: ""
  }, {
    year: "2020",
    title: "LEFT SECTION 3",
    desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    url: "",
    img: ""
  }];
  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "background",
    style: {
      backgroundImage: "url(".concat(assetPrefix, "/bg/All.svg)")
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_6___default.a, {
    spy: jump,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    right: true,
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "hi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "Hi!"))), __jsx("div", {
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["0px", "125px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, "SCROLL")), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["0px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Polygon 2.svg"),
    className: "arrow-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  })), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["-25px", "75px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Polygon 3.svg"),
    className: "arrow-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Lorem ipsum dolor sit amet")), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "consectetur adipiscing elit")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    right: true,
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  })))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: [200, -50],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "gradientText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "SECTION 3")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(_component_section_3_web__WEBPACK_IMPORTED_MODULE_9__["default"], {
    content: section3Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }), __jsx(_component_section_3_mobile__WEBPACK_IMPORTED_MODULE_10__["default"], {
    content: section3Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "SECTION 4"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, __jsx(_component_section_4_mobile__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: section4Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }), __jsx(_component_section_4_web__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: section4Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "section5Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 18
    }
  })), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, "totam rem aperiam, eaque ipsa quae ab"), __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  })))))));
}

_s(Home, "FuDY7eJ9rfZS4uhLhkjvxuvSL3s=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJqdW1wIiwic2V0SnVtcCIsImFzc2V0UHJlZml4IiwicHJvY2VzcyIsInNldFRpbWVvdXQiLCJzZWN0aW9uM0NvbnRlbnQiLCJpbWciLCJ0aXRsZSIsImRlc2MiLCJ1cmwiLCJidXR0b25Mb2dvIiwicGFyYWxsYXhDb25maWciLCJ5Iiwic2VjdGlvbjRDb250ZW50IiwieWVhciIsImJhY2tncm91bmRJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLENBQUQsQ0FESDtBQUFBLE1BQ3RCQyxJQURzQjtBQUFBLE1BQ2hCQyxPQURnQjs7QUFFN0IsTUFBTUMsV0FBVyxHQUFHQyxFQUFwQjtBQUVBQyxZQUFVLENBQUMsWUFBTTtBQUNmSCxXQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxHQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUEsTUFBTUssZUFBZSxHQUFHLENBQ3RCO0FBQ0VDLE9BQUcsRUFBRSxFQURQO0FBRUVDLFNBQUssRUFBRSxRQUZUO0FBR0VDLFFBQUksRUFBRSw2SEFIUjtBQUlFQyxPQUFHLEVBQUUsRUFKUDtBQUtFQyxjQUFVLEVBQUUsRUFMZDtBQU1FQyxrQkFBYyxFQUFHO0FBQ2ZDLE9BQUMsRUFBRSxDQUFDLEdBQUQsRUFBTSxDQUFDLEdBQVA7QUFEWTtBQU5uQixHQURzQixFQVd0QjtBQUNFTixPQUFHLEVBQUUsRUFEUDtBQUVFQyxTQUFLLEVBQUUsUUFGVDtBQUdFQyxRQUFJLEVBQUUsNkhBSFI7QUFJRUMsT0FBRyxFQUFFLEVBSlA7QUFLRUMsY0FBVSxFQUFFLEVBTGQ7QUFNRUMsa0JB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QUFRLGFBQVMsRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FKRixDQURGLENBckVGLENBREYsQ0FERixDQURGO0FBMEZEOztHQW5KdUJmLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdjYTQwNTdhZjFmYmQwMDgxMTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBDYXJkIH0gZnJvbSAnYW50ZCdcclxuLy8gaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCdcclxuaW1wb3J0IHsgUGFyYWxsYXhQcm92aWRlciwgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJ1xyXG5pbXBvcnQgU2xpZGUgZnJvbSAncmVhY3QtcmV2ZWFsL1NsaWRlJ1xyXG5pbXBvcnQgSnVtcCBmcm9tICdyZWFjdC1yZXZlYWwvSnVtcCdcclxuaW1wb3J0IFNlY3Rpb240d2ViIGZyb20gJy4uL2NvbXBvbmVudC9zZWN0aW9uLTQtd2ViJ1xyXG5pbXBvcnQgU2VjdGlvbjRtb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50L3NlY3Rpb24tNC1tb2JpbGUnXHJcbmltcG9ydCBTZWN0aW9uM3dlYiBmcm9tICcuLi9jb21wb25lbnQvc2VjdGlvbi0zLXdlYidcclxuaW1wb3J0IFNlY3Rpb24zbW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudC9zZWN0aW9uLTMtbW9iaWxlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2p1bXAsIHNldEp1bXBdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBhc3NldFByZWZpeCA9IHByb2Nlc3MuZW52LkFTU0VUX1BSRUZJWFxyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNldEp1bXAoanVtcCArIDEpXHJcbiAgfSwgMTUwMCk7XHJcblxyXG4gIGNvbnN0IHNlY3Rpb24zQ29udGVudCA9IFtcclxuICAgIHtcclxuICAgICAgaW1nOiBcIlwiLFxyXG4gICAgICB0aXRsZTogXCJURVNUIDFcIixcclxuICAgICAgZGVzYzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBidXR0b25Mb2dvOiBcIlwiLFxyXG4gICAgICBwYXJhbGxheENvbmZpZyA6IHtcclxuICAgICAgICB5OiBbMTUwLCAtMTUwXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWc6IFwiXCIsXHJcbiAgICAgIHRpdGxlOiBcIlRFU1QgMlwiLFxyXG4gICAgICBkZXNjOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICAgIGJ1dHRvbkxvZ286IFwiXCIsXHJcbiAgICAgIHBhcmFsbGF4Q29uZmlnIDoge1xyXG4gICAgICAgIHk6IFsyNTAsIC0yNTBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcblxyXG4gIGNvbnN0IHNlY3Rpb240Q29udGVudCA9IFtcclxuICAgIHtcclxuICAgICAgeWVhcjogXCIyMDIwXCIsXHJcbiAgICAgIHRpdGxlOiBcIkxFRlQgU0VDVElPTlwiLFxyXG4gICAgICBkZXNjOiBcInQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBpbWc6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAyMFwiLFxyXG4gICAgICB0aXRsZTogXCJMRUZUIFNFQ1RJT04gMlwiLFxyXG4gICAgICBkZXNjOiBcInQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBpbWc6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAyMFwiLFxyXG4gICAgICB0aXRsZTogXCJMRUZUIFNFQ1RJT04gM1wiLFxyXG4gICAgICBkZXNjOiBcInQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBpbWc6IFwiXCJcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOmB1cmwoJHthc3NldFByZWZpeH0vYmcvQWxsLnN2ZylgfX0+XHJcbiAgICAgICAgPFBhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNlY3Rpb24xXCI+XHJcbiAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgPEp1bXAgc3B5PXtqdW1wfT5cclxuICAgICAgICAgICAgICAgIDxTbGlkZSByaWdodCBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdoaSc+SGkhPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgPC9KdW1wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsXCI+XHJcbiAgICAgICAgICAgICAgICA8UGFyYWxsYXggeT17W1wiMHB4XCIsIFwiMTI1cHhcIl19ID5cclxuICAgICAgICAgICAgICAgICAgPHA+U0NST0xMPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbXCIwcHhcIiwgXCI1MHB4XCJdfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL1BvbHlnb24gMi5zdmdgfSBjbGFzc05hbWU9XCJhcnJvdy0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICAgICAgICA8UGFyYWxsYXggeT17W1wiLTI1cHhcIiwgXCI3NXB4XCJdfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL1BvbHlnb24gMy5zdmdgfSBjbGFzc05hbWU9XCJhcnJvdy0yXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24yXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxGYWRlIGNhc2NhZGU+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcclxuICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxTbGlkZSByaWdodCBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nc2VjdGlvbjMnPlxyXG4gICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbMjAwLCAtNTBdfSA+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdncmFkaWVudFRleHQnPlNFQ1RJT04gMzwvaDI+XHJcbiAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb24zd2ViIGNvbnRlbnQ9e3NlY3Rpb24zQ29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uM21vYmlsZSBjb250ZW50PXtzZWN0aW9uM0NvbnRlbnR9Lz5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uNCc+XHJcbiAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5TRUNUSU9OIDQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb240bW9iaWxlIGNvbnRlbnQ9e3NlY3Rpb240Q29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb240d2ViIGNvbnRlbnQ9e3NlY3Rpb240Q29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3NlY3Rpb241Jz5cclxuICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICA8aDQ+ZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbSBhY2N1c2FudGl1bSBkb2xvcmVtcXVlIGxhdWRhbnRpdW08L2g0PlxyXG4gICAgICAgICAgICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwic2VjdGlvbjVCdXR0b25cIj48L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgPGg0PnRvdGFtIHJlbSBhcGVyaWFtLCBlYXF1ZSBpcHNhIHF1YWUgYWI8L2g0PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCcgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCcgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCcgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCcgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L1BhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXYgPlxyXG5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==