webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/section-3-mobile.js":
/*!***************************************!*\
  !*** ./component/section-3-mobile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "./node_modules/react-scroll-parallax/cjs/index.js");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\arisa\\Documents\\GitHub\\personal-page-v2\\component\\section-3-mobile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var section3mobile = function section3mobile(props) {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 24,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "section3mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: ["300px", "0px"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "section3Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "slider-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, props.content.map(function (content) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "section3Icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 41
      }
    }), __jsx("h4", {
      className: "section3Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 41
      }
    }, content.title), __jsx("p", {
      className: "section3Desc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 41
      }
    }, content.desc), __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 41
      }
    }, __jsx("button", {
      className: "section3Button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 44
      }
    })));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (section3mobile);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvc2VjdGlvbi0zLW1vYmlsZS5qcyJdLCJuYW1lcyI6WyJzZWN0aW9uM21vYmlsZSIsInByb3BzIiwiY29udGVudCIsIm1hcCIsInRpdGxlIiwiZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDOUIsU0FDSSxNQUFDLHdDQUFEO0FBQUssUUFBSSxFQUFFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQVUsS0FBQyxFQUFFLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUNJLFFBQUksRUFBRSxJQURWO0FBRUksWUFBUSxFQUFFLElBRmQ7QUFHSSxTQUFLLEVBQUUsR0FIWDtBQUlJLGdCQUFZLEVBQUUsQ0FKbEI7QUFLSSxrQkFBYyxFQUFFLENBTHBCO0FBTUksWUFBUSxNQU5aO0FBT0ksYUFBUyxFQUFDLGVBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFLQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFBRCxPQUFPLEVBQUk7QUFDMUIsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFHSTtBQUFJLGVBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBK0JBLE9BQU8sQ0FBQ0UsS0FBdkMsQ0FISixFQUlJO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRixPQUFPLENBQUNHLElBRGIsQ0FKSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRztBQUFRLGVBQVMsRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFILENBUEosQ0FESjtBQVdILEdBWkEsQ0FSTCxDQURKLENBREosQ0FESixDQURKLENBREo7QUFnQ0gsQ0FqQ0Q7O0FBbUNlTCw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDA2MzIzNWIzMjM3OTNjZmZmZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3Qtc2Nyb2xsLXBhcmFsbGF4J1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5jb25zdCBzZWN0aW9uM21vYmlsZSA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uM21vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBhcmFsbGF4IHk9e1tcIjMwMHB4XCIsIFwiMHB4XCJdfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uM0NhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1tb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jb250ZW50Lm1hcChjb250ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uM0ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNlY3Rpb24zVGl0bGVcIj57Y29udGVudC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbjNEZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQuZGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxidXR0b24gY2xhc3NOYW1lPVwic2VjdGlvbjNCdXR0b25cIj48L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlciA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1BhcmFsbGF4ID5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2wgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWN0aW9uM21vYmlsZTsiXSwic291cmNlUm9vdCI6IiJ9