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
    title: "Greenhouse Monitor System Using MiFlora",
    desc: "Creating a monitor dashboard for greenhouse using MiFlora as sensing device and ESP32 as microcontroller. This system using cloudMQTT for the cloud and Node-Red for the dashboard",
    url: "https://github.com/EgrianoA/Greenhouse-Monitor-Using-MiFlora",
    img: "scheme.jpg"
  }, {
    year: "2019",
    title: "Conceptual Design of Car Parts Marketplace App",
    desc: "This is a conceptual design of an App to make a special marketplace for car enthusiast to help them to find the car parts they need easier.",
    url: "https://dribbble.com/shots/7166120-OtoShop-A-Car-Parts-Marketplace-App?utm_source=Clipboard_Shot&utm_campaign=ArisatouGri&utm_content=OtoShop%20-%20A%20Car%20Parts%20Marketplace%20App&utm_medium=Social_Share",
    img: "mockup-dribbble.jpg"
  }];

  var redirect = function redirect(url) {
    window.open(url);
  };

  return __jsx("div", {
    className: "homepage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["ParallaxProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(react_reveal_Jump__WEBPACK_IMPORTED_MODULE_6___default.a, {
    spy: jump,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    right: true,
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "hi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "Hi!"))), __jsx("div", {
    className: "scroll",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["0px", "125px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, "SCROLL")), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["0px", "50px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Polygon 2.svg"),
    className: "arrow-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  })), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: ["-25px", "75px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Polygon 3.svg"),
    className: "arrow-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, "I'm Egriano Aristianto")), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "A Software Engineer (+ A Designer)")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, __jsx(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {
    right: true,
    cascade: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return redirect("https://www.linkedin.com/in/egrianoaristianto/");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-linkedin.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return redirect("https://github.com/EgrianoA");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-github.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx("a", {
    onClick: function onClick() {
      return redirect("https://dribbble.com/ArisatouGri");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-dribbble.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  })))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "section3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_3__["Parallax"], {
    y: [50, -50],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "gradientText",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, "What I do")), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: 16,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx(_component_section_3_web__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: section3Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 17
    }
  }), __jsx(_component_section_3_mobile__WEBPACK_IMPORTED_MODULE_8__["default"], {
    content: section3Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, "Some of my works"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_component_section_4_mobile__WEBPACK_IMPORTED_MODULE_10__["default"], {
    content: section4Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }), __jsx(_component_section_4_web__WEBPACK_IMPORTED_MODULE_9__["default"], {
    content: section4Content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "section5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("center", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, "Thank you for visiting my site!"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, "For detailed information about me and my works you can contact me through"), __jsx("div", {
    className: "icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "contactInfo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon material-email.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 27
    }
  })), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }, "EgrianoA@gmail.com")), __jsx("div", {
    className: "linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 23
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "".concat(assetPrefix, "/assets/Icon awesome-linkedin.svg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 27
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/egrianoaristianto/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }, "https://www.linkedin.com/in/egrianoaristianto/"))))), __jsx("div", {
    className: "finalWord",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }, "Designed and coded with love by Egriano Aristianto"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJqdW1wIiwic2V0SnVtcCIsImFzc2V0UHJlZml4IiwicHJvY2VzcyIsInNldFRpbWVvdXQiLCJzZWN0aW9uM0NvbnRlbnQiLCJpbWciLCJ0aXRsZSIsImRlc2MiLCJ1cmwiLCJidXR0b25Mb2dvIiwiYnV0dG9uUHJlVGV4dCIsImJ1dHRvblRleHQiLCJwYXJhbGxheENvbmZpZyIsInkiLCJzZWN0aW9uNENvbnRlbnQiLCJ5ZWFyIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJvcGVuIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsQ0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUU3QixNQUFNQyxXQUFXLEdBQUdDLEVBQXBCO0FBRUFDLFlBQVUsQ0FBQyxZQUFNO0FBQ2ZILFdBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELEdBRlMsRUFFUCxJQUZPLENBQVY7QUFJQSxNQUFNSyxlQUFlLEdBQUcsQ0FDdEI7QUFDRUMsT0FBRyxFQUFFLHNCQURQO0FBRUVDLFNBQUssRUFBRSxtQkFGVDtBQUdFO0FBQ0FDLFFBQUkscU9BSk47QUFPRUMsT0FBRyxFQUFFLDZCQVBQO0FBUUVDLGNBQVUsRUFBRSx5QkFSZDtBQVNFQyxpQkFBYSxFQUFFLHdEQVRqQjtBQVVFQyxjQUFVLEVBQUUsVUFWZDtBQVdFO0FBQ0FDLGtCQUFjLEVBQUU7QUFDZEMsT0FBQyxFQUFFLENBQUMsR0FBRCxFQUFNLENBQUMsR0FBUDtBQURXO0FBWmxCLEdBRHNCLEVBaUJ0QjtBQUNF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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxZQUFLYixXQUFMLG9DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsWUFBS0EsV0FBTCxzQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUcsUUFBSSxFQUFFLGdEQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBSkYsQ0FQRixDQURGLENBREYsQ0FKRixFQXNCRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBEQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixDQXRCRixDQURGLENBREYsQ0F0RkYsQ0FERixDQURGLENBREY7QUE2SEQ7O0dBdk11QkosSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWJmYjI3M2Y3YzIyMWM1NDIxYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUm93LCBDb2wsIENhcmQgfSBmcm9tICdhbnRkJ1xyXG4vLyBpbXBvcnQgeyBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4J1xyXG5pbXBvcnQgeyBQYXJhbGxheFByb3ZpZGVyLCBQYXJhbGxheCB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wYXJhbGxheCdcclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnXHJcbmltcG9ydCBTbGlkZSBmcm9tICdyZWFjdC1yZXZlYWwvU2xpZGUnXHJcbmltcG9ydCBKdW1wIGZyb20gJ3JlYWN0LXJldmVhbC9KdW1wJ1xyXG5pbXBvcnQgU2VjdGlvbjN3ZWIgZnJvbSAnLi4vY29tcG9uZW50L3NlY3Rpb24tMy13ZWInXHJcbmltcG9ydCBTZWN0aW9uM21vYmlsZSBmcm9tICcuLi9jb21wb25lbnQvc2VjdGlvbi0zLW1vYmlsZSdcclxuaW1wb3J0IFNlY3Rpb240d2ViIGZyb20gJy4uL2NvbXBvbmVudC9zZWN0aW9uLTQtd2ViJ1xyXG5pbXBvcnQgU2VjdGlvbjRtb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50L3NlY3Rpb24tNC1tb2JpbGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbanVtcCwgc2V0SnVtcF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IGFzc2V0UHJlZml4ID0gcHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYXHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2V0SnVtcChqdW1wICsgMSlcclxuICB9LCAxNTAwKTtcclxuXHJcbiAgY29uc3Qgc2VjdGlvbjNDb250ZW50ID0gW1xyXG4gICAge1xyXG4gICAgICBpbWc6IFwiSWNvbiBtZXRyby1zdGFjay5zdmdcIixcclxuICAgICAgdGl0bGU6IFwiU29mdHdhcmUgRW5naW5lZXJcIixcclxuICAgICAgLy8gdGl0bGU6IFwiVEVTVDFcIixcclxuICAgICAgZGVzYzogYEknbSBBIFNvZnR3YXJlIEVuZ2luZWVyIHdobyBmb2N1c2VkIG9uIGRldmVsb3BpbmcgV2ViIEFwcGxpY2F0aW9ucyBcclxuICAgICAgJiBNb2JpbGUgQXBwcyBBUElzLiBVc2luZyBOb2RlSlMgZm9yIGRldmVsb3BpbmcgdGhlIEJhY2tlbmQgJiBSZWFjdEpzIGZvciB0aGUgRnJvbnRlbmQuIEFuZCBJJ20gYWxzbyBoYWQgZXhwZXJpZW5jZXMgaW5cclxuICAgICAgZGV2ZWxvcGluZyBJb1QgcHJvamVjdHNgLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Vncmlhbm9BXCIsXHJcbiAgICAgIGJ1dHRvbkxvZ286IFwiSWNvbiBhd2Vzb21lLWdpdGh1Yi5zdmdcIixcclxuICAgICAgYnV0dG9uUHJlVGV4dDogJ0ZvciBteSBQcm9ncmFtbWluZyBwb3J0Zm9saW9zIHlvdSBjYW4gdmlzaXQgbXkgR2l0aHViLicsXHJcbiAgICAgIGJ1dHRvblRleHQ6IFwiRWdyaWFub0FcIixcclxuICAgICAgLy8gYnV0dG9uVGV4dDogXCJURVNUMVwiLFxyXG4gICAgICBwYXJhbGxheENvbmZpZzoge1xyXG4gICAgICAgIHk6IFsxNTAsIC0xNTBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltZzogXCJHcm91cCAzMTUuc3ZnXCIsXHJcbiAgICAgIHRpdGxlOiBcIkRlc2lnbmVyXCIsXHJcbiAgICAgIC8vIHRpdGxlOiBcIlRFU1QyXCIsXHJcbiAgICAgIGRlc2M6IGBTb21lIHBlb3BsZSBhc2suIFwiSG93IGNhbiBhIHByb2dyYW1tZXIgY2FuIGRvIGRlc2lnbj9cIiwgbXkgYW5zd2VyIGlzIGp1c3QgXCJXaHkgbm90P1wiLlxyXG4gICAgICAgSXQgcXVpdGUgaW50ZXJlc3Rpbmcgd2hlbiB5b3UgY2FuIHB1c2ggdGhlIHBvdGVudGlhbCBvZiBsb2dpY2FsIHRoaW5raW5nIGZyb20gdGhlIGxlZnQgYnJhaW4gJiBjcmVhdGl2ZSB0aGlua2luZyBmcm9tIHRoZSByaWdodCBicmFpbi5cclxuICAgICAgIFNvIEkgbGlrZSBkbyB0aGUgZGVzaWduaW5nIGFzIHBhcnQgb2YgbXkgaG9iYmllc2AsXHJcbiAgICAgIHVybDogXCJodHRwczovL2RyaWJiYmxlLmNvbS9BcmlzYXRvdUdyaVwiLFxyXG4gICAgICBidXR0b25Mb2dvOiBcIkljb24gYXdlc29tZS1kcmliYmJsZS5zdmdcIixcclxuICAgICAgYnV0dG9uUHJlVGV4dDogJ0FueXdheSB5b3UgY2FuIGNoZWNrIG15IGRlc2lnbiBwb3J0Zm9saW9zIGluIG15IERyaWJiYmxlLicsXHJcbiAgICAgIGJ1dHRvblRleHQ6IFwiQXJpc2F0b3VHcmlcIixcclxuICAgICAgLy8gYnV0dG9uVGV4dDogXCJURVNUMlwiLFxyXG4gICAgICBwYXJhbGxheENvbmZpZzoge1xyXG4gICAgICAgIHk6IFsyNTAsIC0yNTBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcblxyXG4gIGNvbnN0IHNlY3Rpb240Q29udGVudCA9IFtcclxuICAgIHtcclxuICAgICAgeWVhcjogXCIyMDE5XCIsXHJcbiAgICAgIHRpdGxlOiBcIkF1dG9tYXRlZCBOdXRyaWVudCBDb250cm9sIGZvciBIeWRyb3BvbmljXCIsXHJcbiAgICAgIGRlc2M6IFwiQW4gYXV0b21hdGVkIG51dHJpZW50IGNvbnRyb2wgc3lzdGVtIGZvciBORlQgaHlkcm9wb25pYyB1c2luZyBGdXp6eSBMb2dpYy4gVGhlIGRldmljZSB1c2VkIHdhcyBFU1A4MjY2IGFuZCBSYXNwYmVycnkgUGkuIFVzaW5nIGNsb3VkTVFUVCBmb3IgdGhlIGNsb3VkIGFuZCBUaGluZ1NwZWFrIGZvciB0aGUgZGFzaGJvYXJkXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRWdyaWFub0EvQXV0b21hdGVkLU51dHJpZW50LUNvbnRyb2wtZm9yLUh5ZHJvcG9uaWNcIixcclxuICAgICAgaW1nOiBcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgdGl0bGU6IFwiR3JlZW5ob3VzZSBNb25pdG9yIFN5c3RlbSBVc2luZyBNaUZsb3JhXCIsXHJcbiAgICAgIGRlc2M6IFwiQ3JlYXRpbmcgYSBtb25pdG9yIGRhc2hib2FyZCBmb3IgZ3JlZW5ob3VzZSB1c2luZyBNaUZsb3JhIGFzIHNlbnNpbmcgZGV2aWNlIGFuZCBFU1AzMiBhcyBtaWNyb2NvbnRyb2xsZXIuIFRoaXMgc3lzdGVtIHVzaW5nIGNsb3VkTVFUVCBmb3IgdGhlIGNsb3VkIGFuZCBOb2RlLVJlZCBmb3IgdGhlIGRhc2hib2FyZFwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Vncmlhbm9BL0dyZWVuaG91c2UtTW9uaXRvci1Vc2luZy1NaUZsb3JhXCIsXHJcbiAgICAgIGltZzogXCJzY2hlbWUuanBnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHllYXI6IFwiMjAxOVwiLFxyXG4gICAgICB0aXRsZTogXCJDb25jZXB0dWFsIERlc2lnbiBvZiBDYXIgUGFydHMgTWFya2V0cGxhY2UgQXBwXCIsXHJcbiAgICAgIGRlc2M6IFwiVGhpcyBpcyBhIGNvbmNlcHR1YWwgZGVzaWduIG9mIGFuIEFwcCB0byBtYWtlIGEgc3BlY2lhbCBtYXJrZXRwbGFjZSBmb3IgY2FyIGVudGh1c2lhc3QgdG8gaGVscCB0aGVtIHRvIGZpbmQgdGhlIGNhciBwYXJ0cyB0aGV5IG5lZWQgZWFzaWVyLlwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNzE2NjEyMC1PdG9TaG9wLUEtQ2FyLVBhcnRzLU1hcmtldHBsYWNlLUFwcD91dG1fc291cmNlPUNsaXBib2FyZF9TaG90JnV0bV9jYW1wYWlnbj1BcmlzYXRvdUdyaSZ1dG1fY29udGVudD1PdG9TaG9wJTIwLSUyMEElMjBDYXIlMjBQYXJ0cyUyME1hcmtldHBsYWNlJTIwQXBwJnV0bV9tZWRpdW09U29jaWFsX1NoYXJlXCIsXHJcbiAgICAgIGltZzogXCJtb2NrdXAtZHJpYmJibGUuanBnXCJcclxuICAgIH0gIFxyXG4gICAgXHJcbiAgXVxyXG5cclxuICBjb25zdCByZWRpcmVjdCA9ICh1cmwpID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKHVybClcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZXBhZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXNzZXRQcmVmaXh9L2JnL0FsbC5zdmcpYCB9fT5cclxuICAgICAgICA8UGFyYWxsYXhQcm92aWRlcj5cclxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwic2VjdGlvbjFcIj5cclxuICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICA8SnVtcCBzcHk9e2p1bXB9PlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlIHJpZ2h0IGNhc2NhZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2hpJz5IaSE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICA8L0p1bXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGxcIj5cclxuICAgICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbXCIwcHhcIiwgXCIxMjVweFwiXX0gPlxyXG4gICAgICAgICAgICAgICAgICA8cD5TQ1JPTEw8L3A+XHJcbiAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxyXG4gICAgICAgICAgICAgICAgPFBhcmFsbGF4IHk9e1tcIjBweFwiLCBcIjUwcHhcIl19ID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Fzc2V0UHJlZml4fS9hc3NldHMvUG9seWdvbiAyLnN2Z2B9IGNsYXNzTmFtZT1cImFycm93LTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICAgIDxQYXJhbGxheCB5PXtbXCItMjVweFwiLCBcIjc1cHhcIl19ID5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Fzc2V0UHJlZml4fS9hc3NldHMvUG9seWdvbiAzLnN2Z2B9IGNsYXNzTmFtZT1cImFycm93LTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbjJcIj5cclxuXHJcbiAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgSSdtIEVncmlhbm8gQXJpc3RpYW50b1xyXG4gICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgey8qIDxGYWRlIGNhc2NhZGU+XHJcbiAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0XHJcbiAgICAgICAgICAgICAgICA8L0ZhZGU+ICovfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPEZhZGUgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgQSBTb2Z0d2FyZSBFbmdpbmVlciAoKyBBIERlc2lnbmVyKVxyXG4gICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIHsvKiA8RmFkZSBjYXNjYWRlPlxyXG4gICAgICAgICAgICAgICAgICBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcclxuICAgICAgICAgICAgICA8L0ZhZGU+ICovfVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGUgcmlnaHQgY2FzY2FkZT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3VuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ3JpYW5vYXJpc3RpYW50by9cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIGF3ZXNvbWUtbGlua2VkaW4uc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcmVkaXJlY3QoXCJodHRwczovL2dpdGh1Yi5jb20vRWdyaWFub0FcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIGF3ZXNvbWUtZ2l0aHViLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vQXJpc2F0b3VHcmlcIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIGF3ZXNvbWUtZHJpYmJibGUuc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlPlxyXG4gICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9J3NlY3Rpb24zJz5cclxuICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICA8UGFyYWxsYXggeT17WzUwLCAtNTBdfSA+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdncmFkaWVudFRleHQnPldoYXQgSSBkbzwvaDI+XHJcbiAgICAgICAgICAgICAgPC9QYXJhbGxheD5cclxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgPFNlY3Rpb24zd2ViIGNvbnRlbnQ9e3NlY3Rpb24zQ29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDxTZWN0aW9uM21vYmlsZSBjb250ZW50PXtzZWN0aW9uM0NvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbjQnPlxyXG4gICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8aDM+U29tZSBvZiBteSB3b3JrczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8U2VjdGlvbjRtb2JpbGUgY29udGVudD17c2VjdGlvbjRDb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2VjdGlvbjR3ZWIgY29udGVudD17c2VjdGlvbjRDb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8Um93ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb241Jz5cclxuICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgPGg0PlRoYW5rIHlvdSBmb3IgdmlzaXRpbmcgbXkgc2l0ZSE8L2g0PlxyXG4gICAgICAgICAgICAgICAgey8qIDxhPjxidXR0b24gY2xhc3NOYW1lPVwic2VjdGlvbjVCdXR0b25cIj48L2J1dHRvbj48L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPHA+Rm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIGFib3V0IG1lIGFuZCBteSB3b3JrcyB5b3UgY2FuIGNvbnRhY3QgbWUgdGhyb3VnaDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7YXNzZXRQcmVmaXh9L2Fzc2V0cy9JY29uIG1hdGVyaWFsLWVtYWlsLnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FZ3JpYW5vQUBnbWFpbC5jb208L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua2VkaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHthc3NldFByZWZpeH0vYXNzZXRzL0ljb24gYXdlc29tZS1saW5rZWRpbi5zdmdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZWdyaWFub2FyaXN0aWFudG8vXCJ9Pmh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9lZ3JpYW5vYXJpc3RpYW50by88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmluYWxXb3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkRlc2lnbmVkIGFuZCBjb2RlZCB3aXRoIGxvdmUgYnkgRWdyaWFubyBBcmlzdGlhbnRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD4yMDIwIC0gQWxsIHJpZ2h0IHJlc2VydmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9QYXJhbGxheFByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2ID5cclxuXHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=