(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "C:\\Users\\sures\\OneDrive\\Desktop\\Social Media\\components\\Post\\CreatePost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CreatePost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: error !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    onDismiss: () => setError(null),
    content: error,
    header: "Oops!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: user.profilePicUrl,
    circular: true,
    avatar: true,
    inline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.TextArea, {
    placeholder: "Whats Happening",
    name: "text",
    value: newPost.text,
    onChange: handleChange,
    rows: 4,
    width: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    value: newPost.location,
    name: "location",
    onChange: handleChange,
    label: "Add Location",
    icon: "map marker alternate",
    placeholder: "Want to add Location?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("input", {
    ref: inputRef,
    onChange: handleChange,
    name: "media",
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx("div", {
    onClick: () => inputRef.current.click(),
    style: addStyles(),
    onDrag: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, media === null ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "plus",
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: {
      height: "150px",
      width: "150px"
    },
    src: mediaPreview,
    alt: "PostImage",
    centered: true,
    size: "medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    circular: true,
    disabled: newPost.text === "" || loading,
    content: __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 20
      }
    }, "Post"),
    style: {
      backgroundColor: "#1DA1F2",
      color: "white"
    },
    icon: "send",
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreatePost);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/PlaceHolderGroup */ "./components/Layout/PlaceHolderGroup.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\sures\\OneDrive\\Desktop\\Social Media\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);













function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postsData || []);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: pageNumber,
    1: setPageNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__.default}/api/posts`, {
        headers: {
          Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_11___default().get("token")
        },
        params: {
          pageNumber
        }
      });
      if (res.data.length === 0) setHasMore(false);
      setPosts(prev => [...prev, ...res.data]);
      setPageNumber(prev => prev + 1);
    } catch (error) {
      alert("Error fetching Posts");
    }
  };

  if (posts.length === 0 || errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_7__.NoPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 50
    }
  });
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_8__.PostDeleteToastr, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9___default()), {
    hasMore: hasMore,
    next: fetchDataOnScroll,
    loader: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__.PlaceHolderPosts, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }),
    endMessage: __jsx(_components_Layout_PlaceHolderGroup__WEBPACK_IMPORTED_MODULE_10__.EndMessage, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }),
    dataLength: posts.length,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_4__.default, {
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })))));
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_6__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__.default}/api/posts`, {
      headers: {
        Authorization: token
      },
      params: {
        pageNumber: 1
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-infinite-scroll-component");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_baseUrl_js-utils_catchErrors_js","components_Layout_NoData_js-components_Layout_Toastr_js-components_Post_CardPost_js-utils_upl-d2318b"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1tb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQ3JlYXRlUG9zdCIsInVzZXIiLCJzZXRQb3N0cyIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwidXNlU3RhdGUiLCJ0ZXh0IiwibG9jYXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlucHV0UmVmIiwidXNlUmVmIiwiZXJyb3IiLCJzZXRFcnJvciIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJtZWRpYSIsInNldE1lZGlhIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3IiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsImZpbGVzIiwidGFyZ2V0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImN1cnNvciIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwaWNVcmwiLCJ1cGxvYWRQaWMiLCJzdWJtaXROZXdQb3N0IiwicHJvZmlsZVBpY1VybCIsImRpc3BsYXkiLCJjdXJyZW50IiwiY2xpY2siLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiSW5kZXgiLCJwb3N0c0RhdGEiLCJlcnJvckxvYWRpbmciLCJwb3N0cyIsInNob3dUb2FzdHIiLCJzZXRTaG93VG9hc3RyIiwiaGFzTW9yZSIsInNldEhhc01vcmUiLCJwYWdlTnVtYmVyIiwic2V0UGFnZU51bWJlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwidGl0bGUiLCJzcGxpdCIsInNldFRpbWVvdXQiLCJmZXRjaERhdGFPblNjcm9sbCIsInJlcyIsImF4aW9zIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29va2llIiwicGFyYW1zIiwiZGF0YSIsImxlbmd0aCIsImFsZXJ0IiwibWFwIiwicG9zdCIsIl9pZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInRva2VuIiwicGFyc2VDb29raWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0I7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQXBCLEVBQXdDO0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFRLEVBQUU7QUFBdEIsR0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkosK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTUssUUFBUSxHQUFHQyw2Q0FBTSxFQUF2QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQlIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQSxRQUFNO0FBQUEsT0FBQ1csS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JaLCtDQUFRLENBQUMsSUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDYSxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ2QsK0NBQVEsQ0FBQyxJQUFELENBQWhEOztBQUVBLFFBQU1lLFlBQVksR0FBR0MsQ0FBQyxJQUFJO0FBQ3hCLFVBQU07QUFBRUMsVUFBRjtBQUFRQyxXQUFSO0FBQWVDO0FBQWYsUUFBeUJILENBQUMsQ0FBQ0ksTUFBakM7O0FBRUEsUUFBSUgsSUFBSSxLQUFLLE9BQWIs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SUFGUjtBQUdFLFFBQUksRUFBRTlFLElBSFI7QUFJRSxZQUFRLEVBQUVDLFFBSlo7QUFLRSxpQkFBYSxFQUFFdUQsYUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBTkgsQ0FIRixDQUZGLENBREY7QUF5QkQ7O0FBRURMLEtBQUssQ0FBQzZCLGVBQU4sR0FBd0IsTUFBTUMsR0FBTixJQUFhO0FBQ25DLE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBWUMscURBQVksQ0FBQ0YsR0FBRCxDQUE5QjtBQUVBLFVBQU1kLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFXLEdBQUVDLG1EQUFRLFlBQXJCLEVBQWtDO0FBQ2xEQyxhQUFPLEVBQUU7QUFBRUMscUJBQWEsRUFBRVc7QUFBakIsT0FEeUM7QUFFbERULFlBQU0sRUFBRTtBQUFFZCxrQkFBVSxFQUFFO0FBQWQ7QUFGMEMsS0FBbEMsQ0FBbEI7QUFLQSxXQUFPO0FBQUVQLGVBQVMsRUFBRWUsR0FBRyxDQUFDTztBQUFqQixLQUFQO0FBQ0QsR0FURCxDQVNFLE9BQU8vRCxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQUUwQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVA7QUFDRDtBQUNGLENBYkQ7O0FBZUEsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7QUN4RkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uLy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVQb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xyXG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdQb3N0KHByZXYgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBsZXQgcGljVXJsO1xyXG5cclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgICBpZiAoIXBpY1VybCkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHN1Ym1pdE5ld1Bvc3QoXHJcbiAgICAgIG5ld1Bvc3QudGV4dCxcclxuICAgICAgbmV3UG9zdC5sb2NhdGlvbixcclxuICAgICAgcGljVXJsLFxyXG4gICAgICBzZXRQb3N0cyxcclxuICAgICAgc2V0TmV3UG9zdCxcclxuICAgICAgc2V0RXJyb3JcclxuICAgICk7XHJcblxyXG4gICAgc2V0TWVkaWEobnVsbCk7XHJcbiAgICBzZXRNZWRpYVByZXZpZXcobnVsbCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gZXJyb3I9e2Vycm9yICE9PSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBMb2NhdGlvblwiXHJcbiAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgc3R5bGU9e2FkZFN0eWxlcygpfVxyXG4gICAgICAgICAgb25EcmFnPXtlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyYWdMZWF2ZT17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJvcD17ZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7bWVkaWEgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgc2l6ZT1cImJpZ1wiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICBkaXNhYmxlZD17bmV3UG9zdC50ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmd9XHJcbiAgICAgICAgICBjb250ZW50PXs8c3Ryb25nPlBvc3Q8L3N0cm9uZz59XHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFEQTFGMlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XHJcbiAgICAgICAgICBpY29uPVwic2VuZFwiXHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVBvc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0XCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IHsgUG9zdERlbGV0ZVRvYXN0ciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ub2FzdHJcIjtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYWNlSG9sZGVyUG9zdHMsIEVuZE1lc3NhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvUGxhY2VIb2xkZXJHcm91cFwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlciwgcG9zdHNEYXRhLCBlcnJvckxvYWRpbmcgfSkge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUocG9zdHNEYXRhfHxbXSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNNb3JlLCBzZXRIYXNNb3JlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnRpdGxlID0gYFdlbGNvbWUsICR7dXNlci5uYW1lLnNwbGl0KFwiIFwiKVswXX1gO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNob3dUb2FzdHIgJiYgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93VG9hc3RyKGZhbHNlKSwgMzAwMCk7XHJcbiAgfSwgW3Nob3dUb2FzdHJdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhT25TY3JvbGwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXHJcbiAgICAgICAgcGFyYW1zOiB7IHBhZ2VOdW1iZXIgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPT09IDApIHNldEhhc01vcmUoZmFsc2UpO1xyXG5cclxuICAgICAgc2V0UG9zdHMocHJldiA9PiBbLi4ucHJldiwgLi4ucmVzLmRhdGFdKTtcclxuICAgICAgc2V0UGFnZU51bWJlcihwcmV2ID0+IHByZXYgKyAxKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZmV0Y2hpbmcgUG9zdHNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKHBvc3RzLmxlbmd0aCA9PT0gMCB8fCBlcnJvckxvYWRpbmcpIHJldHVybiA8Tm9Qb3N0cyAvPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93VG9hc3RyICYmIDxQb3N0RGVsZXRlVG9hc3RyIC8+fVxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcblxyXG4gICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgaGFzTW9yZT17aGFzTW9yZX1cclxuICAgICAgICAgIG5leHQ9e2ZldGNoRGF0YU9uU2Nyb2xsfVxyXG4gICAgICAgICAgbG9hZGVyPXs8UGxhY2VIb2xkZXJQb3N0cyAvPn1cclxuICAgICAgICAgIGVuZE1lc3NhZ2U9ezxFbmRNZXNzYWdlIC8+fVxyXG4gICAgICAgICAgZGF0YUxlbmd0aD17cG9zdHMubGVuZ3RofT5cclxuICAgICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgICBzZXRTaG93VG9hc3RyPXtzZXRTaG93VG9hc3RyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICBwYXJhbXM6IHsgcGFnZU51bWJlcjogMSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=