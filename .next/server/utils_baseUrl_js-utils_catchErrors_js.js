exports.id = "utils_baseUrl_js-utils_catchErrors_js";
exports.ids = ["utils_baseUrl_js-utils_catchErrors_js"];
exports.modules = {

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xcc3VyZXNcXE9uZURyaXZlXFxEZXNrdG9wXFxTb2NpYWwgTWVkaWFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwiY2F0Y2hFcnJvcnMiLCJlcnJvciIsImVycm9yTXNnIiwicmVzcG9uc2UiLCJkYXRhIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNQyxXQUFXLEdBQUdDLEtBQUssSUFBSTtBQUMzQixNQUFJQyxRQUFKOztBQUVBLE1BQUlELEtBQUssQ0FBQ0UsUUFBVixFQUFvQjtBQUNsQjtBQUVBRCxZQUFRLEdBQUdELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxJQUExQjtBQUVBQyxXQUFPLENBQUNKLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJRCxLQUFLLENBQUNLLE9BQVYsRUFBbUI7QUFDeEI7QUFDQUosWUFBUSxHQUFHRCxLQUFLLENBQUNLLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ0osS0FBUixDQUFjQyxRQUFkO0FBQ0QsR0FMTSxNQUtBO0FBQ0w7QUFDQUEsWUFBUSxHQUFHRCxLQUFLLENBQUNNLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ0osS0FBUixDQUFjQyxRQUFkO0FBQ0Q7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELENBckJEOztBQXVCQSwrREFBZUYsV0FBZixFOzs7Ozs7Ozs7O0FDdkJBLGUiLCJmaWxlIjoidXRpbHNfYmFzZVVybF9qcy11dGlsc19jYXRjaEVycm9yc19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IGVycm9yID0+IHtcclxuICBsZXQgZXJyb3JNc2c7XHJcblxyXG4gIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgLy8gSWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIHRoZSBzZXJ2ZXIgbm90IHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGUgaW4gdGhlIHJhbmdlIG9mIDJ4eFxyXG5cclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcclxuICAgIC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCBubyByZXNwb25zZSB3YXMgcmVjZXZpZWQgZnJvbSBzZXJ2ZXJcclxuICAgIGVycm9yTXNnID0gZXJyb3IucmVxdWVzdDtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gaWYgc29tZXRoaW5nIGVsc2UgaGFwcGVuZWQgd2hpbGUgbWFraW5nIHRoZSByZXF1ZXN0XHJcbiAgICBlcnJvck1zZyA9IGVycm9yLm1lc3NhZ2U7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9