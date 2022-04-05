webpackHotUpdate("main",{

/***/ "./src/components/styles/Wrappers.styled.js":
/*!**************************************************!*\
  !*** ./src/components/styles/Wrappers.styled.js ***!
  \**************************************************/
/*! exports provided: DetailsWrapper, DetailsTextWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsWrapper", function() { return DetailsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsTextWrapper", function() { return DetailsTextWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const DetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
position: relative;
padding: 50px;

& > img {
    box-shadow: 0px 4px 3px rgba(0,0,0,0.1),
               0px 8px 13px rgba(0,0,0,0.1),
               0px 18px 23px rgba(0,0,0,0.1)
}

 @media (min-width: 375px) {
  & > img {
    width: 40%;
  }
}

@media (min-width: 667px) {
    & > img {
      width: 40%;
    }
  }
  
  @media (min-width: 1024px) {
    & > img{
      width: 30%;
    }
  }
`;
const DetailsTextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
position: relative;


& img {
  width: 15px;
  margin-right: 5px;
}

& > h2, & > p, & > span {
  color: white;
}

`;

/***/ })

})
//# sourceMappingURL=main.c016b630c8296b9158b1.hot-update.js.map