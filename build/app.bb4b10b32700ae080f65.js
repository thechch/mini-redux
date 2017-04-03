/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./store/store\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _store2 = _interopRequireDefault(_store);

var _connect = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./connect/connect\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _connect2 = _interopRequireDefault(_connect);

var _index = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./reducers/index\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./actions/index\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Test store
store.subscribe(function () {
    return console.log(store.getState());
});
store.dispatch({ payload: { text: "Do smth" } });

var id = store.getState()[0].id;
store.dispatch();

var store = (0, _store2.default)(_index2.default);

var AddTodo = function AddTodo(_ref) {
    var todos = _ref.todos;
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        todos: state.todos
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: function onTodoClick(todoId) {
            dispatch((0, _index3.deleteTodo)({ payload: { id: todoId } }));
        }
    };
};
AddTodo = (0, _connect2.default)(mapStateToProps, mapDispatchToProps)(AddTodo);

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(AddTodo, null)
), document.getElementById('app'));

/***/ })
/******/ ]);
//# sourceMappingURL=app.bb4b10b32700ae080f65.js.map