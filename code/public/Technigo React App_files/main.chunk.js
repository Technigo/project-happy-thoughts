(this["webpackJsonptechnigo-react-starter"] = this["webpackJsonptechnigo-react-starter"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/urls */ "./src/utils/urls.js");
/* harmony import */ var components_styles_Global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/styles/Global */ "./src/components/styles/Global.js");
/* harmony import */ var components_AllMovies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AllMovies */ "./src/components/AllMovies.js");
/* harmony import */ var components_MovieDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/MovieDetails */ "./src/components/MovieDetails.js");
var _jsxFileName = "/Users/rawi/Desktop/Technigo/project-movies/code/src/App.js";

 //API URLS 

 //Styled components





const App = () => {
  const [allMovies, setAllMovies] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(_utils_urls__WEBPACK_IMPORTED_MODULE_2__["ALL_MOVIES_URL"]).then(res => res.json()).then(res => {
      setAllMovies(res.results);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_styles_Global__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AllMovies__WEBPACK_IMPORTED_MODULE_4__["default"], {
      allMovies: allMovies,
      setAllMovies: setAllMovies,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 36
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/movie/:movieId",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MovieDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 50
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AllMovies.js":
/*!*************************************!*\
  !*** ./src/components/AllMovies.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _styles_Containers_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Containers.styled */ "./src/components/styles/Containers.styled.js");
/* harmony import */ var _styles_Overlay_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Overlay.styled */ "./src/components/styles/Overlay.styled.js");
var _jsxFileName = "/Users/rawi/Desktop/Technigo/project-movies/code/src/components/AllMovies.js";

 //Styled components




const AllMovies = ({
  allMovies
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Containers_styled__WEBPACK_IMPORTED_MODULE_2__["AllMoviesFlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, allMovies.map(movie =>
  /*#__PURE__*/
  //Wrapping each movie card again with the same styled component (<AllMoviesFlexContainer>) for overlay effects
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Containers_styled__WEBPACK_IMPORTED_MODULE_2__["AllMoviesFlexContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    key: movie.id,
    to: `/movie/${movie.id}`,
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "movie-img",
    src: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    alt: "movie poster",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Overlay_styled__WEBPACK_IMPORTED_MODULE_3__["OverlayCard"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Overlay_styled__WEBPACK_IMPORTED_MODULE_3__["TextOverlay"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, movie.original_title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, "Release date : ", movie.release_date)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AllMovies);

/***/ }),

/***/ "./src/components/MovieDetails.js":
/*!****************************************!*\
  !*** ./src/components/MovieDetails.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/urls */ "./src/utils/urls.js");
/* harmony import */ var _styles_Containers_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Containers.styled */ "./src/components/styles/Containers.styled.js");
/* harmony import */ var _styles_Wrappers_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Wrappers.styled */ "./src/components/styles/Wrappers.styled.js");
/* harmony import */ var _styles_Buttons_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Buttons.styled */ "./src/components/styles/Buttons.styled.js");
var _jsxFileName = "/Users/rawi/Desktop/Technigo/project-movies/code/src/components/MovieDetails.js";

 //API URLS

 //Styled components





const MovieDetails = () => {
  const [details, setDetails] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    movieId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])(); //access parameters from the URL

  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(Object(_utils_urls__WEBPACK_IMPORTED_MODULE_2__["MOVIE_DETAILS_URL"])(movieId)).then(res => res.json()).then(data => setDetails(data));
  }, [movieId]);
  console.log(details.poster_path);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Containers_styled__WEBPACK_IMPORTED_MODULE_3__["DetailsContainer"], {
    url: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Wrappers_styled__WEBPACK_IMPORTED_MODULE_4__["DetailsWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Buttons_styled__WEBPACK_IMPORTED_MODULE_5__["BackButton"], {
    onClick: () => navigate(-1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    role: "button",
    alt: "left arrow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 50
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `https://image.tmdb.org/t/p/w342${details.poster_path}`,
    alt: details.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Wrappers_styled__WEBPACK_IMPORTED_MODULE_4__["DetailsTextWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, details.title), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 36
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/star.png",
    alt: "rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 42
    }
  }), details.vote_average), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, details.overview))));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieDetails);

/***/ }),

/***/ "./src/components/styles/Buttons.styled.js":
/*!*************************************************!*\
  !*** ./src/components/styles/Buttons.styled.js ***!
  \*************************************************/
/*! exports provided: BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return BackButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const BackButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
cursor: pointer;
margin: 20px;
transition: transform .2s;
top: 0;
left: 0;
position: absolute;

& > i {
    border: solid grey;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}

& :hover{
    transform: scale(1.2);
}

i:hover{
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}

`;

/***/ }),

/***/ "./src/components/styles/Containers.styled.js":
/*!****************************************************!*\
  !*** ./src/components/styles/Containers.styled.js ***!
  \****************************************************/
/*! exports provided: AllMoviesFlexContainer, DetailsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesFlexContainer", function() { return AllMoviesFlexContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsContainer", function() { return DetailsContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const AllMoviesFlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].article`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
`;
const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
width: 100vw;
position: relative;
background-position: 50% 50%;
top: 0;
left: 0;
background-image: ${props => props.url};

& > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}
`;

/***/ }),

/***/ "./src/components/styles/Global.js":
/*!*****************************************!*\
  !*** ./src/components/styles/Global.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: black;
  font-family: 'Roboto', sans-serif;
}

h2 {
  max-width: 342px;
}

a {
  text-decoration: none;
  color: white;
}

.movie-img {
  max-width: 360px;
  display: flex;
}

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./src/components/styles/Overlay.styled.js":
/*!*************************************************!*\
  !*** ./src/components/styles/Overlay.styled.js ***!
  \*************************************************/
/*! exports provided: OverlayCard, TextOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayCard", function() { return OverlayCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextOverlay", function() { return TextOverlay; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const OverlayCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
right: 0;
bottom: 0;
left: 0;
opacity: 0;
background-color: rgba(0, 0, 0, 0.6);

&:hover {
  opacity: 1;
  pointer: cursur;
}

`;
const TextOverlay = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
display: flex;
position: relative;
flex-direction: column;
padding: 20px;
margin-top: 300px;

`;

/***/ }),

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/rawi/Desktop/Technigo/project-movies/code/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 17
  }
}), document.getElementById('root'));

/***/ }),

/***/ "./src/utils/urls.js":
/*!***************************!*\
  !*** ./src/utils/urls.js ***!
  \***************************/
/*! exports provided: ALL_MOVIES_URL, MOVIE_DETAILS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_MOVIES_URL", function() { return ALL_MOVIES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_DETAILS_URL", function() { return MOVIE_DETAILS_URL; });
const ALL_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=3fdcefbf06dfb0b1182a757f09d29136&language=en-US&page=1";
const MOVIE_DETAILS_URL = movieId => `https://api.themoviedb.org/3/movie/${movieId}?api_key=3fdcefbf06dfb0b1182a757f09d29136&language=en-US&page=1&language=en-US`;

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/rawi/Desktop/Technigo/project-movies/code/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/rawi/Desktop/Technigo/project-movies/code/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/rawi/Desktop/Technigo/project-movies/code/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map