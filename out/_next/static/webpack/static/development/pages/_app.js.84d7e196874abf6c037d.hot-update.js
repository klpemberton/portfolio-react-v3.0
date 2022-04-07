webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/SiteNavigationItem/SiteNavigationItem.js":
/*!*****************************************************************!*\
  !*** ./src/components/SiteNavigationItem/SiteNavigationItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteNavigationItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _navData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navData */ "./src/components/SiteNavigationItem/navData.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");

var _jsxFileName = "/Users/kpemberton/Documents/Projects/portfolio-react/src/components/SiteNavigationItem/SiteNavigationItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    left: 0;\n    width: 100%;\n    height: 6%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    height: 100%;\n    width: 4%;\n  \n    ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var navSlideDesktop = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{left:0%;}to{left:", ";transform:translateX(0%);}"], function (props) {
  return props.position;
});
var NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "SiteNavigationItem__NavListItem",
  componentId: "g5gqhv-0"
})(["position:absolute;display:flex;justify-content:center;align-items:center;z-index:11;background:", ";", " ", ""], function (props) {
  return props.backgroundColor;
}, Object(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["desktop"])(_templateObject(), function (props) {
  return props.position && "left: ".concat(props.position, ";");
}, function (props) {
  return props.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["animation:", " 0.4s linear;"], navSlideDesktop);
}), Object(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["mobile"])(_templateObject2(), function (props) {
  return props.position && "top: ".concat(props.position, ";");
}));
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "SiteNavigationItem__NavLink",
  componentId: "g5gqhv-1"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;color:white;"]);

var getPosition = function getPosition(linkRoute, activeRoute, mobile) {
  var linkRouteName = linkRoute === '_error' ? 'error' : linkRoute;
  var activeRouteName = activeRoute === '_error' ? 'error' : activeRoute;
  var screenSize = mobile ? 'mobile' : 'desktop';

  if (linkRouteName === 'error' && activeRouteName === 'error') {
    return mobile ? '0' : '96%';
  }

  if (linkRouteName === 'error' && activeRouteName !== 'error') {
    return null;
  }

  if (linkRouteName === activeRouteName) {
    return mobile ? '0' : '96%';
  }

  return _navData__WEBPACK_IMPORTED_MODULE_5__["NavData"][linkRouteName].activeRoute[activeRouteName].position[screenSize];
};

function SiteNavigationItem(_ref) {
  var activeRoute = _ref.activeRoute,
      isActive = _ref.isActive,
      route = _ref.route;

  var _useBreakpoint = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["useBreakpoint"])(),
      desktop = _useBreakpoint.desktop,
      mobile = _useBreakpoint.mobile;

  var linkRoute = route === '/' ? 'home' : route.substring(1);
  var currentRoute = activeRoute === '/' ? 'home' : activeRoute.substring(1);
  var isErrorPage = linkRoute === '_error' && currentRoute === '_error';

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]),
      colors = _useContext.colors;

  var position = getPosition(linkRoute, currentRoute, mobile);
  var iconSize = desktop ? 28 : 22;

  if (linkRoute === '_error' && !isErrorPage) {
    return null;
  }

  var getIcon = function getIcon(route) {
    switch (route) {
      case '/':
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaHome"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        });

      case '/about':
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUser"], {
          size: iconSize - 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        });

      case '/contact':
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaEnvelope"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        });

      case '/_error':
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaExclamationCircle"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        });

      case '/portfolio':
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaBriefcase"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        });

      default:
        return null;
    }
  };

  return __jsx(NavListItem, {
    backgroundColor: isErrorPage ? colors.error : colors[linkRoute],
    isActive: isActive,
    position: position,
    "data-desktop": desktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: route,
    href: route,
    as: route,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, getIcon(route))));
}
SiteNavigationItem.propTypes = {
  activeRoute: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  route: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/*! exports provided: GlobalStyles, globalBorderBox, globalReset, objectToMediaQuery, getDesktopMediaQuery, mobile, desktop, useBreakpoint, useMedia, Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalBorderBox", function() { return globalBorderBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalReset", function() { return globalReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectToMediaQuery", function() { return objectToMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDesktopMediaQuery", function() { return getDesktopMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile", function() { return mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktop", function() { return desktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBreakpoint", function() { return useBreakpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "/Users/kpemberton/Documents/Projects/portfolio-react/src/styles/theme.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  html {\n    box-sizing: border-box;\n  }\n  \n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n\n  body {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    margin: 0 0;\n    font-size: 17px;\n    line-height: 1.4;\n    font-family: ", ";\n  }\n  \n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: ", ";\n    font-weight: 900;\n    text-transform: uppercase\n  }\n\n  h1 {\n    font-size: 34px;\n    border-bottom: 3px solid black;\n  }\n\n  h2 {\n    font-size: 24px;\n    border-bottom: 2px solid black;\n  }\n\n  h3 {\n    font-size: 17px;\n  }\n\n  h4 {\n    font-size: 16px;\n  }\n\n  a {\n  }\n  \n  p {\n    font-size: 17px;\n  }\n\n  input,\n  textarea {\n    font: 18px/24px 'Montserrat';\n    border: none;\n    border-left: 5px solid ", ";\n    outline: none;\n    background: white;\n    color: black;\n\n    &:focus {\n      outline: none;\n      background: black;\n      color: white;\n      border: 5px solid ", ";\n    }\n  }\n\n  input {\n    width: 100%;\n    height: 55px;\n    padding: 10px;\n  }\n  \n  textarea {\n    display: block;\n    width: 100%;\n    height: 100px;\n    padding: 10px;\n    resize: vertical;\n\n    + span {\n      left: 0;\n      height: 100px;\n    }\n  }\n\n  button {\n    width: 50%;\n    margin: 0 auto;\n    padding: 10px;\n    background: ", ";\n    color: black;\n    border: 5px solid ", ";\n    font: 20px/24px ", ";\n    cursor: pointer;\n    transition: .3s all ease-in-out;\n\n    &:disabled {\n      opacity: .5;\n\n      &:hover {\n        background: black;\n\t\t\t\tcolor: white;\n        cursor: not-allowed;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var theme = {
  breakpoints: {
    desktop: {
      minWidth: 875
    },
    mobile: {
      maxWidth: 874
    }
  },
  colors: {
    contact: '#FF1493',
    about: '#00BFFF',
    portfolio: '#ffe900',
    home: '#836fff',
    error: 'red',
    success: '#22D900',
    midPurple: '#cbc2fd',
    lightPurple: '#ebe8f3'
  },
  fontStacks: {
    montserrat: "'Montserrat', 'helvetica-neue', 'arial', sans-serif"
  }
};
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["createGlobalStyle"])(_templateObject(), theme.fontStacks.montserrat, theme.fontStacks.montserrat, theme.colors.contact, theme.colors.contact, theme.colors.contact, theme.colors.contact, theme.fontStacks.montserrat); // Use a more modern inheritance-based box-sizing setting:
// https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

var globalBorderBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}"]);
var globalReset = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["html,body,h1,h2,h3,h4,h5,h6,p,ul,ol,li,form,fieldset,label{margin:0;padding:0;}"]);

function camelToHyphen(str) {
  return str.replace(/[A-Z]/g, function (m) {
    return '-' + m.toLowerCase();
  }).toLowerCase();
} // Simple cache for the expensive part of `objectToMediaQuery` below.


var mediaQueryCache = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_2___default.a();
function objectToMediaQuery(query) {
  if (typeof query === 'string' || !query) {
    return query;
  }

  var cacheKey = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(query);

  var string = mediaQueryCache.get(cacheKey);

  if (string == null) {
    string = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(query).map(function (name) {
      var feature = camelToHyphen(name);
      var value = query[name];

      if (typeof value === 'boolean') {
        return value ? feature : "not ".concat(feature);
      }

      if (typeof value === 'number' && /[height|width]$/.test(feature)) {
        value = "".concat(value, "px");
      }

      return "(".concat(feature, ": ").concat(value, ")");
    }).join(' and ');
    mediaQueryCache.set(cacheKey, string);
  }

  return string;
}
function getDesktopMediaQuery() {
  var _theme$breakpoints = theme.breakpoints,
      mobile = _theme$breakpoints.mobile,
      desktop = _theme$breakpoints.desktop;

  if (desktop) {
    return objectToMediaQuery(desktop);
  } // Invert the mobile media query with `not`.


  return "not all and ".concat(objectToMediaQuery(mobile));
}
/**
 * Media query template that renders only on mobile sizes.
 * Use like:
 *   ${mobile`color: black;`}
 */

function mobile() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["@media ", "{", ";}"], function (props) {
    return objectToMediaQuery(props.theme.breakpoints.mobile);
  }, styled_components__WEBPACK_IMPORTED_MODULE_6__["css"].apply(void 0, arguments));
}
/**
 * Media query template that renders only on desktop sizes.
 * Use like:
 *   ${desktop`color: black;`}
 */

function desktop() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["@media ", "{", ";}"], function (props) {
    return getDesktopMediaQuery(props.theme);
  }, styled_components__WEBPACK_IMPORTED_MODULE_6__["css"].apply(void 0, arguments));
}
function useBreakpoint(query) {
  var mobileQuery = theme.breakpoints.mobile || null;

  if (!mobileQuery) {
    throw new Error('You must define a `breakpoints.mobile` media query.');
  } // Defining a specific `desktop` breakpoint is optional; by default it will be
  // the inverse of `mobile`.


  var desktopQuery = theme.breakpoints.desktop || null;

  if (typeof query === 'string' && theme.breakpoints[query] != null) {
    query = theme.breakpoints[query];
  }

  var desktop = useMedia(desktopQuery, true);
  var mobile = useMedia(mobileQuery, !desktop);
  var matches = useMedia(query, false);
  return {
    mobile: mobile,
    desktop: desktop,
    matches: matches
  };
}
function useMedia(rawQuery) {
  var defaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(defaultState),
      state = _useState[0],
      setState = _useState[1];

  var query = objectToMediaQuery(rawQuery);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (query) {
      var mounted = true;
      var mql = window.matchMedia(query);

      var onChange = function onChange() {
        if (!mounted) {
          return;
        }

        setState(mql.matches);
      };

      mql.addListener(onChange);
      setState(mql.matches);
      return function () {
        mounted = false;
        mql.removeListener(onChange);
      };
    }
  }, [defaultState, query]);
  return query ? state : defaultState;
}
function Theme(_ref) {
  var children = _ref.children;
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, children);
}
Theme.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};

/***/ })

})
//# sourceMappingURL=_app.js.84d7e196874abf6c037d.hot-update.js.map