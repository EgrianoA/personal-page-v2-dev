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
/* harmony import */ var _component_section_3_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/section-3-web */ "./component/section-3-web.js");
/* harmony import */ var _component_section_3_mobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/section-3-mobile */ "./component/section-3-mobile.js");
/* harmony import */ var _component_section_4_web__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../component/section-4-web */ "./component/section-4-web.js");
/* harmony import */ var _component_section_4_mobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../component/section-4-mobile */ "./component/section-4-mobile.js");
var _jsxFileName = "C:\\Users\\ArstGreey\\Documents\\GitHub\\personal-page-v2-dev\\pages\\index.js",
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
    img: "Icon metro-stack.svg",
    title: "Software Engineer",
    // title: "TEST1",
    desc: "I'm A Software Engineer who focused on developing Web Applications \n      & Mobile Apps APIs. Using NodeJS for developing the Backend & ReactJs for the Frontend. And I'm also had experiences in\n      developing IoT projects",
    url: "https://github.com/EgrianoA",
    buttonLogo: "Icon awesome-github.svg",
    buttonPreText: 'For my Programming portfolios you can visit my Github.',
    buttonText: "EgrianoA",
    // buttonText: "TEST1",
    parallaxConfig: {
      y: [150, -150]
    }
  }, {
    img: "Group 315.svg",
    title: "Designer",
    // title: "TEST2",
    desc: "Some people ask. \"How can a programmer can do design?\", my answer is just \"Why not?\".\n       It quite interesting when you can push the potential of logical thinking from the left brain & creative thinking from the right brain.\n       So I like do the designing as part of my hobbies",
    url: "https://dribbble.com/ArisatouGri",
    buttonLogo: "Icon awesome-dribbble.svg",
    buttonPreText: 'Anyway you can check my design portfolios in my Dribbble.',
    buttonText: "ArisatouGri",
    // buttonText: "TEST2",
    parallaxConfig: {
      y: [250, -250]
    }
  }];
  var section4Content = [{
    year: "2019",
    title: "Conceptual Design of Car Parts Marketplace App",
    desc: "This is a conceptual design of an App to make a special marketplace for car enthusiast to help them to find the car parts they need easier.",
    url: "https://dribbble.com/shots/7166120-OtoShop-A-Car-Parts-Marketplace-App?utm_source=Clipboard_Shot&utm_campaign=ArisatouGri&utm_content=OtoShop%20-%20A%20Car%20Parts%20Marketplace%20App&utm_medium=Social_Share",
    img: "mockup-dribbble.jpg"
  }, {
    year: "2019",
    title: "Automated Nutrient Control for Hydroponic",
    desc: "An automated nutrient control system for NFT hydroponic using Fuzzy Logic. The device used was ESP8266 and Raspberry Pi. Using cloudMQTT for the cloud and ThingSpeak for the dashboard",
    url: "https://github.com/EgrianoA/Automated-Nutrient-Control-for-Hydroponic",
    img: ""
  }, {
    year: "2020",
    title: "LEFT SECTION 3",
    desc: "t enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    url: "",
    img: ""
  }];

  var redirect = function redirect(url) {
    window.open(url);
  };

  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_6___default.a, {
    spy: jump,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    right: true,
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "hi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "Hi!"))), __jsx("div", {
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["0px", "125px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 19
    }
  }, "SCROLL")), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["0px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Polygon 2.svg"),
    className: "arrow-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  })), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["-25px", "75px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Polygon 3.svg"),
    className: "arrow-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, "I'm Egriano Aristianto")), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "A Software Engineer (+ A Designer)")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    right: true,
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return redirect("https://www.linkedin.com/in/egrianoaristianto/");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-linkedin.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return redirect("https://github.com/EgrianoA");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-github.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return redirect("https://dribbble.com/ArisatouGri");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-dribbble.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  })))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: [50, -50],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "gradientText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, "What I do")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx(_component_section_3_web__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: section3Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }), __jsx(_component_section_3_mobile__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: section3Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, "Some of my works"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx(_component_section_4_mobile__WEBPACK_IMPORTED_MODULE_10__["default"], {
    content: section4Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }), __jsx(_component_section_4_web__WEBPACK_IMPORTED_MODULE_9__["default"], {
    content: section4Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, "Thank you for visiting my site!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, "For detailed information about me and my works you can contact me through"), __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "contactInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon material-email.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 27
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, "EgrianoA@gmail.com")), __jsx("div", {
    className: "linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-linkedin.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 27
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/egrianoaristianto/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }, "https://www.linkedin.com/in/egrianoaristianto/"))))), __jsx("div", {
    className: "finalWord",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, "Designed and coded with love by Egriano Aristianto"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, "2020 - All right reserved"))))))));
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJqdW1wIiwic2V0SnVtcCIsImFzc2V0UHJlZml4IiwicHJvY2VzcyIsInNldFRpbWVvdXQiLCJzZWN0aW9uM0NvbnRlbnQiLCJpbWciLCJ0aXRsZSIsImRlc2MiLCJ1cmwiLCJidXR0b25Mb2dvIiwiYnV0dG9uUHJlVGV4dCIsImJ1dHRvblRleHQiLCJwYXJhbGxheENvbmZpZyIsInkiLCJzZWN0aW9uNENvbnRlbnQiLCJ5ZWFyIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJvcGVuIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUU3QixNQUFNQyxXQUFXLEdBQUdDLEVBQXBCO0FBRUFDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZILFdBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELEdBRlMsRUFFUCxJQUZPLENBQVY7QUFJQSxNQUFNSyxlQUFlLEdBQUcsQ0FDdEI7QUFDRUMsT0FBRyxFQUFFLHNCQURQO0FBRUVDLFNBQUssRUFBRSxtQkFGVDtBQUdFO0FBQ0FDLFFBQUkscU9BSk47QUFPRUMsT0FBRyxFQUFFLDZCQVBQO0FBUUVDLGNBQVUsRUFBRSx5QkFSZDtBQVNFQyxpQkFBYSxFQUFFLHdEQVRqQjtBQVVFQyxjQUFVLEVBQUUsVUFWZDtBQVdFO0FBQ0FDLGtCQUFjLEVBQUU7QUFDZEMsT0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLENBQUMsR0FBUDtBQURXO0FBWmxCLEdBRHNCLEVBaUJ0QjtBQUNF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLFlBQUtiLFdBQUwsb0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxZQUFLQSxXQUFMLHNDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxRQUFJLEVBQUUsZ0RBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREFKRixDQVBGLENBREYsQ0FERixDQUpGLEVBc0JFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGLENBdEJGLENBREYsQ0FERixDQXRGRixDQURGLENBREYsQ0FERjtBQTZIRDs7R0F0TXVCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43MjIyNWRkY2I2YTU5ODg1OTVkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ2FudGQnXHJcbi8vIGltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnXHJcbmltcG9ydCB7IFBhcmFsbGF4UHJvdmlkZXIsIFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4J1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSdcclxuaW1wb3J0IFNsaWRlIGZyb20gJ3JlYWN0LXJldmVhbC9TbGlkZSdcclxuaW1wb3J0IEp1bXAgZnJvbSAncmVhY3QtcmV2ZWFsL0p1bXAnXHJcbmltcG9ydCBTZWN0aW9uM3dlYiBmcm9tICcuLi9jb21wb25lbnQvc2VjdGlvbi0zLXdlYidcclxuaW1wb3J0IFNlY3Rpb24zbW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudC9zZWN0aW9uLTMtbW9iaWxlJ1xyXG5pbXBvcnQgU2VjdGlvbjR3ZWIgZnJvbSAnLi4vY29tcG9uZW50L3NlY3Rpb24tNC13ZWInXHJcbmltcG9ydCBTZWN0aW9uNG1vYmlsZSBmcm9tICcuLi9jb21wb25lbnQvc2VjdGlvbi00LW1vYmlsZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtqdW1wLCBzZXRKdW1wXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgYXNzZXRQcmVmaXggPSBwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVhcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzZXRKdW1wKGp1bXAgKyAxKVxyXG4gIH0sIDE1MDApO1xyXG5cclxuICBjb25zdCBzZWN0aW9uM0NvbnRlbnQgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltZzogXCJJY29uIG1ldHJvLXN0YWNrLnN2Z1wiLFxyXG4gICAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgICAvLyB0aXRsZTogXCJURVNUMVwiLFxyXG4gICAgICBkZXNjOiBgSSdtIEEgU29mdHdhcmUgRW5naW5lZXIgd2hvIGZvY3VzZWQgb24gZGV2ZWxvcGluZyBXZWIgQXBwbGljYXRpb25zIFxyXG4gICAgICAmIE1vYmlsZSBBcHBzIEFQSXMuIFVzaW5nIE5vZGVKUyBmb3IgZGV2ZWxvcGluZyB0aGUgQmFja2VuZCAmIFJlYWN0SnMgZm9yIHRoZSBGcm9udGVuZC4gQW5kIEknbSBhbHNvIGhhZCBleHBlcmllbmNlcyBpblxyXG4gICAgICBkZXZlbG9waW5nIElvVCBwcm9qZWN0c2AsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRWdyaWFub0FcIixcclxuICAgICAgYnV0dG9uTG9nbzogXCJJY29uIGF3ZXNvbWUtZ2l0aHViLnN2Z1wiLFxyXG4gICAgICBidXR0b25QcmVUZXh0OiAnRm9yIG15IFByb2dyYW1taW5nIHBvcnRmb2xpb3MgeW91IGNhbiB2aXNpdCBteSBHaXRodWIuJyxcclxuICAgICAgYnV0dG9uVGV4dDogXCJFZ3JpYW5vQVwiLFxyXG4gICAgICAvLyBidXR0b25UZXh0OiBcIlRFU1QxXCIsXHJcbiAgICAgIHBhcmFsbGF4Q29uZmlnOiB7XHJcbiAgICAgICAgeTogWzE1MCwgLTE1MF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1nOiBcIkdyb3VwIDMxNS5zdmdcIixcclxuICAgICAgdGl0bGU6IFwiRGVzaWduZXJcIixcclxuICAgICAgLy8gdGl0bGU6IFwiVEVTVDJcIixcclxuICAgICAgZGVzYzogYFNvbWUgcGVvcGxlIGFzay4gXCJIb3cgY2FuIGEgcHJvZ3JhbW1lciBjYW4gZG8gZGVzaWduP1wiLCBteSBhbnN3ZXIgaXMganVzdCBcIldoeSBub3Q/XCIuXHJcbiAgICAgICBJdCBxdWl0ZSBpbnRlcmVzdGluZyB3aGVuIHlvdSBjYW4gcHVzaCB0aGUgcG90ZW50aWFsIG9mIGxvZ2ljYWwgdGhpbmtpbmcgZnJvbSB0aGUgbGVmdCBicmFpbiAmIGNyZWF0aXZlIHRoaW5raW5nIGZyb20gdGhlIHJpZ2h0IGJyYWluLlxyXG4gICAgICAgU28gSSBsaWtlIGRvIHRoZSBkZXNpZ25pbmcgYXMgcGFydCBvZiBteSBob2JiaWVzYCxcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL0FyaXNhdG91R3JpXCIsXHJcbiAgICAgIGJ1dHRvbkxvZ286IFwiSWNvbiBhd2Vzb21lLWRyaWJiYmxlLnN2Z1wiLFxyXG4gICAgICBidXR0b25QcmVUZXh0OiAnQW55d2F5IHlvdSBjYW4gY2hlY2sgbXkgZGVzaWduIHBvcnRmb2xpb3MgaW4gbXkgRHJpYmJibGUuJyxcclxuICAgICAgYnV0dG9uVGV4dDogXCJBcmlzYXRvdUdyaVwiLFxyXG4gICAgICAvLyBidXR0b25UZXh0OiBcIlRFU1QyXCIsXHJcbiAgICAgIHBhcmFsbGF4Q29uZmlnOiB7XHJcbiAgICAgICAgeTogWzI1MCwgLTI1MF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2VjdGlvbjRDb250ZW50ID0gW1xyXG4gICAge1xyXG4gICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgdGl0bGU6IFwiQ29uY2VwdHVhbCBEZXNpZ24gb2YgQ2FyIFBhcnRzIE1hcmtldHBsYWNlIEFwcFwiLFxyXG4gICAgICBkZXNjOiBcIlRoaXMgaXMgYSBjb25jZXB0dWFsIGRlc2lnbiBvZiBhbiBBcHAgdG8gbWFrZSBhIHNwZWNpYWwgbWFya2V0cGxhY2UgZm9yIGNhciBlbnRodXNpYXN0IHRvIGhlbHAgdGhlbSB0byBmaW5kIHRoZSBjYXIgcGFydHMgdGhleSBuZWVkIGVhc2llci5cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL3Nob3RzLzcxNjYxMjAtT3RvU2hvcC1BLUNhci1QYXJ0cy1NYXJrZXRwbGFjZS1BcHA/dXRtX3NvdXJjZT1DbGlwYm9hcmRfU2hvdCZ1dG1fY2FtcGFpZ249QXJpc2F0b3VHcmkmdXRtX2NvbnRlbnQ9T3RvU2hvcCUyMC0lMjBBJTIwQ2FyJTIwUGFydHMlMjBNYXJrZXRwbGFjZSUyMEFwcCZ1dG1fbWVkaXVtPVNvY2lhbF9TaGFyZVwiLFxyXG4gICAgICBpbWc6IFwibW9ja3VwLWRyaWJiYmxlLmpwZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgdGl0bGU6IFwiQXV0b21hdGVkIE51dHJpZW50IENvbnRyb2wgZm9yIEh5ZHJvcG9uaWNcIixcclxuICAgICAgZGVzYzogXCJBbiBhdXRvbWF0ZWQgbnV0cmllbnQgY29udHJvbCBzeXN0ZW0gZm9yIE5GVCBoeWRyb3BvbmljIHVzaW5nIEZ1enp5IExvZ2ljLiBUaGUgZGV2aWNlIHVzZWQgd2FzIEVTUDgyNjYgYW5kIFJhc3BiZXJyeSBQaS4gVXNpbmcgY2xvdWRNUVRUIGZvciB0aGUgY2xvdWQgYW5kIFRoaW5nU3BlYWsgZm9yIHRoZSBkYXNoYm9hcmRcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9FZ3JpYW5vQS9BdXRvbWF0ZWQtTnV0cmllbnQtQ29udHJvbC1mb3ItSHlkcm9wb25pY1wiLFxyXG4gICAgICBpbWc6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAyMFwiLFxyXG4gICAgICB0aXRsZTogXCJMRUZUIFNFQ1RJT04gM1wiLFxyXG4gICAgICBkZXNjOiBcInQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW1cIixcclxuICAgICAgdXJsOiBcIlwiLFxyXG4gICAgICBpbWc6IFwiXCJcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICBjb25zdCByZWRpcmVjdCA9ICh1cmwpID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKHVybClcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXNzZXRQcmVmaXh9L2JnL0FsbC5zdmcpYCB9fT5cclxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwic2VjdGlvbjFcIj5cclxuICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICA8SnVtcCBzcHk9e2p1bXB9PlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlIHJpZ2h0IGNhc2NhZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2hpJz5IaSE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICA8L0p1bXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbXCIwcHhcIiwgXCIxMjVweFwiXX0gPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TQ1JPTEw8L3A+XHJcbiAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICAgICAgPFBhcmFsbGF4IHk9e1tcIjBweFwiLCBcIjUwcHhcIl19ID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Fzc2V0UHJlZml4fS9hc3NldHMvUG9seWdvbiAyLnN2Z2B9IGNsYXNzTmFtZT1cImFycm93LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbXCItMjVweFwiLCBcIjc1cHhcIl19ID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Fzc2V0UHJlZml4fS9hc3NldHMvUG9seWdvbiAzLnN2Z2B9IGNsYXNzTmFtZT1cImFycm93LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjJcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgSSdtIEVncmlhbm8gQXJpc3RpYW50b1xyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgey8qIDxGYWRlIGNhc2NhZGU+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+ICovfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgQSBTb2Z0d2FyZSBFbmdpbmVlciAoKyBBIERlc2lnbmVyKVxyXG4gICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcclxuICAgICAgICAgICAgICA8L0ZhZGU+ICovfVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGUgcmlnaHQgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ3JpYW5vYXJpc3RpYW50by9cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIGF3ZXNvbWUtbGlua2VkaW4uc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcmVkaXJlY3QoXCJodHRwczovL2dpdGh1Yi5jb20vRWdyaWFub0FcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIGF3ZXNvbWUtZ2l0aHViLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vQXJpc2F0b3VHcmlcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIGF3ZXNvbWUtZHJpYmJibGUuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3NlY3Rpb24zJz5cclxuICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICA8UGFyYWxsYXggeT17WzUwLCAtNTBdfSA+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdncmFkaWVudFRleHQnPldoYXQgSSBkbzwvaDI+XHJcbiAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb24zd2ViIGNvbnRlbnQ9e3NlY3Rpb24zQ29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uM21vYmlsZSBjb250ZW50PXtzZWN0aW9uM0NvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjQnPlxyXG4gICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8aDM+U29tZSBvZiBteSB3b3JrczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8U2VjdGlvbjRtb2JpbGUgY29udGVudD17c2VjdGlvbjRDb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2VjdGlvbjR3ZWIgY29udGVudD17c2VjdGlvbjRDb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb241Jz5cclxuICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGg0PlRoYW5rIHlvdSBmb3IgdmlzaXRpbmcgbXkgc2l0ZSE8L2g0PlxyXG4gICAgICAgICAgICAgICAgey8qIDxhPjxidXR0b24gY2xhc3NOYW1lPVwic2VjdGlvbjVCdXR0b25cIj48L2J1dHRvbj48L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IG1lIGFuZCBteSB3b3JrcyB5b3UgY2FuIGNvbnRhY3QgbWUgdGhyb3VnaDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIG1hdGVyaWFsLWVtYWlsLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZ3JpYW5vQUBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua2VkaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL0ljb24gYXdlc29tZS1saW5rZWRpbi5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZWdyaWFub2FyaXN0aWFudG8vXCJ9Pmh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ3JpYW5vYXJpc3RpYW50by88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmluYWxXb3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkRlc2lnbmVkIGFuZCBjb2RlZCB3aXRoIGxvdmUgYnkgRWdyaWFubyBBcmlzdGlhbnRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4yMDIwIC0gQWxsIHJpZ2h0IHJlc2VydmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2ID5cclxuXHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=