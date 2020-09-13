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
    title: "Automated Nutrient Control for Hydroponic",
    desc: "An automated nutrient control system for NFT hydroponic using Fuzzy Logic. The device used was ESP8266 and Raspberry Pi. Using cloudMQTT for the cloud and ThingSpeak for the dashboard",
    url: "https://github.com/EgrianoA/Automated-Nutrient-Control-for-Hydroponic",
    img: ""
  }, {
    year: "2019",
    title: "Conceptual Design of Car Parts Marketplace App",
    desc: "This is a conceptual design of an App to make a special marketplace for car enthusiast to help them to find the car parts they need easier.",
    url: "https://dribbble.com/shots/7166120-OtoShop-A-Car-Parts-Marketplace-App?utm_source=Clipboard_Shot&utm_campaign=ArisatouGri&utm_content=OtoShop%20-%20A%20Car%20Parts%20Marketplace%20App&utm_medium=Social_Share",
    img: "mockup-dribbble.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJqdW1wIiwic2V0SnVtcCIsImFzc2V0UHJlZml4IiwicHJvY2VzcyIsInNldFRpbWVvdXQiLCJzZWN0aW9uM0NvbnRlbnQiLCJpbWciLCJ0aXRsZSIsImRlc2MiLCJ1cmwiLCJidXR0b25Mb2dvIiwiYnV0dG9uUHJlVGV4dCIsImJ1dHRvblRleHQiLCJwYXJhbGxheENvbmZpZyIsInkiLCJzZWN0aW9uNENvbnRlbnQiLCJ5ZWFyIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJvcGVuIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUU3QixNQUFNQyxXQUFXLEdBQUdDLEVBQXBCO0FBRUFDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZILFdBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELEdBRlMsRUFFUCxJQUZPLENBQVY7QUFJQSxNQUFNSyxlQUFlLEdBQUcsQ0FDdEI7QUFDRUMsT0FBRyxFQUFFLHNCQURQO0FBRUVDLFNBQUssRUFBRSxtQkFGVDtBQUdFO0FBQ0FDLFFBQUkscU9BSk47QUFPRUMsT0FBRyxFQUFFLDZCQVBQO0FBUUVDLGNBQVUsRUFBRSx5QkFSZDtBQVNFQyxpQkFBYSxFQUFFLHdEQVRqQjtBQVVFQyxjQUFVLEVBQUUsVUFWZDtBQVdFO0FBQ0FDLGtCQUFjLEVBQUU7QUFDZEMsT0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLENBQUMsR0FBUDtBQURXO0FBWmxCLEdBRHNCLEVBaUJ0QjtBQUNF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLFlBQUtiLFdBQUwsb0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxZQUFLQSxXQUFMLHNDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxRQUFJLEVBQUUsZ0RBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREFKRixDQVBGLENBREYsQ0FERixDQUpGLEVBc0JFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZGLENBdEJGLENBREYsQ0FERixDQXRGRixDQURGLENBREYsQ0FERjtBQTZIRDs7R0F0TXVCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45MmUwM2UxM2I2MDA3NThhMWRiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ2FudGQnXHJcbi8vIGltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnXHJcbmltcG9ydCB7IFBhcmFsbGF4UHJvdmlkZXIsIFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4J1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSdcclxuaW1wb3J0IFNsaWRlIGZyb20gJ3JlYWN0LXJldmVhbC9TbGlkZSdcclxuaW1wb3J0IEp1bXAgZnJvbSAncmVhY3QtcmV2ZWFsL0p1bXAnXHJcbmltcG9ydCBTZWN0aW9uM3dlYiBmcm9tICcuLi9jb21wb25lbnQvc2VjdGlvbi0zLXdlYidcclxuaW1wb3J0IFNlY3Rpb24zbW9iaWxlIGZyb20gJy4uL2NvbXBvbmVudC9zZWN0aW9uLTMtbW9iaWxlJ1xyXG5pbXBvcnQgU2VjdGlvbjR3ZWIgZnJvbSAnLi4vY29tcG9uZW50L3NlY3Rpb24tNC13ZWInXHJcbmltcG9ydCBTZWN0aW9uNG1vYmlsZSBmcm9tICcuLi9jb21wb25lbnQvc2VjdGlvbi00LW1vYmlsZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtqdW1wLCBzZXRKdW1wXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgYXNzZXRQcmVmaXggPSBwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVhcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzZXRKdW1wKGp1bXAgKyAxKVxyXG4gIH0sIDE1MDApO1xyXG5cclxuICBjb25zdCBzZWN0aW9uM0NvbnRlbnQgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltZzogXCJJY29uIG1ldHJvLXN0YWNrLnN2Z1wiLFxyXG4gICAgICB0aXRsZTogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxyXG4gICAgICAvLyB0aXRsZTogXCJURVNUMVwiLFxyXG4gICAgICBkZXNjOiBgSSdtIEEgU29mdHdhcmUgRW5naW5lZXIgd2hvIGZvY3VzZWQgb24gZGV2ZWxvcGluZyBXZWIgQXBwbGljYXRpb25zIFxyXG4gICAgICAmIE1vYmlsZSBBcHBzIEFQSXMuIFVzaW5nIE5vZGVKUyBmb3IgZGV2ZWxvcGluZyB0aGUgQmFja2VuZCAmIFJlYWN0SnMgZm9yIHRoZSBGcm9udGVuZC4gQW5kIEknbSBhbHNvIGhhZCBleHBlcmllbmNlcyBpblxyXG4gICAgICBkZXZlbG9waW5nIElvVCBwcm9qZWN0c2AsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRWdyaWFub0FcIixcclxuICAgICAgYnV0dG9uTG9nbzogXCJJY29uIGF3ZXNvbWUtZ2l0aHViLnN2Z1wiLFxyXG4gICAgICBidXR0b25QcmVUZXh0OiAnRm9yIG15IFByb2dyYW1taW5nIHBvcnRmb2xpb3MgeW91IGNhbiB2aXNpdCBteSBHaXRodWIuJyxcclxuICAgICAgYnV0dG9uVGV4dDogXCJFZ3JpYW5vQVwiLFxyXG4gICAgICAvLyBidXR0b25UZXh0OiBcIlRFU1QxXCIsXHJcbiAgICAgIHBhcmFsbGF4Q29uZmlnOiB7XHJcbiAgICAgICAgeTogWzE1MCwgLTE1MF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1nOiBcIkdyb3VwIDMxNS5zdmdcIixcclxuICAgICAgdGl0bGU6IFwiRGVzaWduZXJcIixcclxuICAgICAgLy8gdGl0bGU6IFwiVEVTVDJcIixcclxuICAgICAgZGVzYzogYFNvbWUgcGVvcGxlIGFzay4gXCJIb3cgY2FuIGEgcHJvZ3JhbW1lciBjYW4gZG8gZGVzaWduP1wiLCBteSBhbnN3ZXIgaXMganVzdCBcIldoeSBub3Q/XCIuXHJcbiAgICAgICBJdCBxdWl0ZSBpbnRlcmVzdGluZyB3aGVuIHlvdSBjYW4gcHVzaCB0aGUgcG90ZW50aWFsIG9mIGxvZ2ljYWwgdGhpbmtpbmcgZnJvbSB0aGUgbGVmdCBicmFpbiAmIGNyZWF0aXZlIHRoaW5raW5nIGZyb20gdGhlIHJpZ2h0IGJyYWluLlxyXG4gICAgICAgU28gSSBsaWtlIGRvIHRoZSBkZXNpZ25pbmcgYXMgcGFydCBvZiBteSBob2JiaWVzYCxcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL0FyaXNhdG91R3JpXCIsXHJcbiAgICAgIGJ1dHRvbkxvZ286IFwiSWNvbiBhd2Vzb21lLWRyaWJiYmxlLnN2Z1wiLFxyXG4gICAgICBidXR0b25QcmVUZXh0OiAnQW55d2F5IHlvdSBjYW4gY2hlY2sgbXkgZGVzaWduIHBvcnRmb2xpb3MgaW4gbXkgRHJpYmJibGUuJyxcclxuICAgICAgYnV0dG9uVGV4dDogXCJBcmlzYXRvdUdyaVwiLFxyXG4gICAgICAvLyBidXR0b25UZXh0OiBcIlRFU1QyXCIsXHJcbiAgICAgIHBhcmFsbGF4Q29uZmlnOiB7XHJcbiAgICAgICAgeTogWzI1MCwgLTI1MF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgY29uc3Qgc2VjdGlvbjRDb250ZW50ID0gW1xyXG4gICAge1xyXG4gICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgdGl0bGU6IFwiQXV0b21hdGVkIE51dHJpZW50IENvbnRyb2wgZm9yIEh5ZHJvcG9uaWNcIixcclxuICAgICAgZGVzYzogXCJBbiBhdXRvbWF0ZWQgbnV0cmllbnQgY29udHJvbCBzeXN0ZW0gZm9yIE5GVCBoeWRyb3BvbmljIHVzaW5nIEZ1enp5IExvZ2ljLiBUaGUgZGV2aWNlIHVzZWQgd2FzIEVTUDgyNjYgYW5kIFJhc3BiZXJyeSBQaS4gVXNpbmcgY2xvdWRNUVRUIGZvciB0aGUgY2xvdWQgYW5kIFRoaW5nU3BlYWsgZm9yIHRoZSBkYXNoYm9hcmRcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9FZ3JpYW5vQS9BdXRvbWF0ZWQtTnV0cmllbnQtQ29udHJvbC1mb3ItSHlkcm9wb25pY1wiLFxyXG4gICAgICBpbWc6IFwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAxOVwiLFxyXG4gICAgICB0aXRsZTogXCJDb25jZXB0dWFsIERlc2lnbiBvZiBDYXIgUGFydHMgTWFya2V0cGxhY2UgQXBwXCIsXHJcbiAgICAgIGRlc2M6IFwiVGhpcyBpcyBhIGNvbmNlcHR1YWwgZGVzaWduIG9mIGFuIEFwcCB0byBtYWtlIGEgc3BlY2lhbCBtYXJrZXRwbGFjZSBmb3IgY2FyIGVudGh1c2lhc3QgdG8gaGVscCB0aGVtIHRvIGZpbmQgdGhlIGNhciBwYXJ0cyB0aGV5IG5lZWQgZWFzaWVyLlwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNzE2NjEyMC1PdG9TaG9wLUEtQ2FyLVBhcnRzLU1hcmtldHBsYWNlLUFwcD91dG1fc291cmNlPUNsaXBib2FyZF9TaG90JnV0bV9jYW1wYWlnbj1BcmlzYXRvdUdyaSZ1dG1fY29udGVudD1PdG9TaG9wJTIwLSUyMEElMjBDYXIlMjBQYXJ0cyUyME1hcmtldHBsYWNlJTIwQXBwJnV0bV9tZWRpdW09U29jaWFsX1NoYXJlXCIsXHJcbiAgICAgIGltZzogXCJtb2NrdXAtZHJpYmJibGUuanBnXCJcclxuICAgIH0sICBcclxuICAgIHtcclxuICAgICAgeWVhcjogXCIyMDIwXCIsXHJcbiAgICAgIHRpdGxlOiBcIkxFRlQgU0VDVElPTiAzXCIsXHJcbiAgICAgIGRlc2M6IFwidCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bVwiLFxyXG4gICAgICB1cmw6IFwiXCIsXHJcbiAgICAgIGltZzogXCJcIlxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIGNvbnN0IHJlZGlyZWN0ID0gKHVybCkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4odXJsKVxyXG4gIH1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthc3NldFByZWZpeH0vYmcvQWxsLnN2ZylgIH19PlxyXG4gICAgICAgIDxQYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJzZWN0aW9uMVwiPlxyXG4gICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgIDxKdW1wIHNweT17anVtcH0+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGUgcmlnaHQgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0naGknPkhpITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgICAgIDwvSnVtcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbFwiPlxyXG4gICAgICAgICAgICAgICAgPFBhcmFsbGF4IHk9e1tcIjBweFwiLCBcIjEyNXB4XCJdfSA+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlNDUk9MTDwvcD5cclxuICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XHJcbiAgICAgICAgICAgICAgICA8UGFyYWxsYXggeT17W1wiMHB4XCIsIFwiNTBweFwiXX0gPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9Qb2x5Z29uIDIuc3ZnYH0gY2xhc3NOYW1lPVwiYXJyb3ctMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICAgICAgPFBhcmFsbGF4IHk9e1tcIi0yNXB4XCIsIFwiNzVweFwiXX0gPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9Qb2x5Z29uIDMuc3ZnYH0gY2xhc3NOYW1lPVwiYXJyb3ctMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uMlwiPlxyXG5cclxuICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICBJJ20gRWdyaWFubyBBcmlzdGlhbnRvXHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICB7LyogPEZhZGUgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXRcclxuICAgICAgICAgICAgICAgIDwvRmFkZT4gKi99XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8RmFkZSBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICBBIFNvZnR3YXJlIEVuZ2luZWVyICgrIEEgRGVzaWduZXIpXHJcbiAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgey8qIDxGYWRlIGNhc2NhZGU+XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdFxyXG4gICAgICAgICAgICAgIDwvRmFkZT4gKi99XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxTbGlkZSByaWdodCBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Vncmlhbm9hcmlzdGlhbnRvL1wiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL0ljb24gYXdlc29tZS1saW5rZWRpbi5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImh0dHBzOi8vZ2l0aHViLmNvbS9FZ3JpYW5vQVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL0ljb24gYXdlc29tZS1naXRodWIuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcmVkaXJlY3QoXCJodHRwczovL2RyaWJiYmxlLmNvbS9BcmlzYXRvdUdyaVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL0ljb24gYXdlc29tZS1kcmliYmJsZS5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nc2VjdGlvbjMnPlxyXG4gICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbNTAsIC01MF19ID5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2dyYWRpZW50VGV4dCc+V2hhdCBJIGRvPC9oMj5cclxuICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XHJcbiAgICAgICAgICAgICAgICA8U2VjdGlvbjN3ZWIgY29udGVudD17c2VjdGlvbjNDb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb24zbW9iaWxlIGNvbnRlbnQ9e3NlY3Rpb24zQ29udGVudH0gLz5cclxuICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uNCc+XHJcbiAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgIDxoMz5Tb21lIG9mIG15IHdvcmtzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWN0aW9uNG1vYmlsZSBjb250ZW50PXtzZWN0aW9uNENvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWN0aW9uNHdlYiBjb250ZW50PXtzZWN0aW9uNENvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjUnPlxyXG4gICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+VGhhbmsgeW91IGZvciB2aXNpdGluZyBteSBzaXRlITwvaDQ+XHJcbiAgICAgICAgICAgICAgICB7LyogPGE+PGJ1dHRvbiBjbGFzc05hbWU9XCJzZWN0aW9uNUJ1dHRvblwiPjwvYnV0dG9uPjwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8cD5Gb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgbWUgYW5kIG15IHdvcmtzIHlvdSBjYW4gY29udGFjdCBtZSB0aHJvdWdoPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdEluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL0ljb24gbWF0ZXJpYWwtZW1haWwuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVncmlhbm9BQGdtYWlsLmNvbTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rZWRpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Fzc2V0UHJlZml4fS9hc3NldHMvSWNvbiBhd2Vzb21lLWxpbmtlZGluLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ3JpYW5vYXJpc3RpYW50by9cIn0+aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Vncmlhbm9hcmlzdGlhbnRvLzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5hbFdvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+RGVzaWduZWQgYW5kIGNvZGVkIHdpdGggbG92ZSBieSBFZ3JpYW5vIEFyaXN0aWFudG88L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjIwMjAgLSBBbGwgcmlnaHQgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L1BhcmFsbGF4UHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXYgPlxyXG5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==