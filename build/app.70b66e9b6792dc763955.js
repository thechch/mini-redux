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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addTodo = exports.addTodo = function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload: payload
  };
};

var deleteTodo = exports.deleteTodo = function deleteTodo(payload) {
  return {
    type: 'REMOVE_TODO',
    payload: payload
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var connect = function connect(mapStateToProps, mapDispatchToAction) {
    (function (WrappedComponent) {
        return function (_React$Component) {
            _inherits(_class, _React$Component);

            function _class() {
                _classCallCheck(this, _class);

                return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            _createClass(_class, [{
                key: "render",
                value: function render() {
                    return React.createElement(WrappedComponent, _extends({}, this.props, mapStateToProps(store.getState(), this.props), mapDispatchToAction(store.dispatch, this.props)));
                }
            }]);

            return _class;
        }(React.Component);
    });
};

exports.default = connect;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var nextId = 0;
var todo = function todo() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: nextId++,
                text: action.payload.text
            };
        case 'REMOVE_TODO':
            return state.filter(function (item) {
                return item.id != action.payload.id;
            });
    }
};

var todosReducer = function todosReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TODO':
            return [].concat(_toConsumableArray(state), [todo({}, action)]);
        case 'REMOVE_TODO':
            return todo(state, action);
        default:
            return state;
    }
};

exports.default = todosReducer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var createStore = function createStore(reducer, initialState) {
    var currentReducer = reducer;
    var currentState = initialState;
    var listener = function listener() {};

    return {
        getState: function getState() {
            return currentState;
        },
        dispatch: function dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener();
            return action;
        },
        subscribe: function subscribe(newListener) {
            listener = newListener;
        }
    };
};

exports.default = createStore;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

var _connect = __webpack_require__(1);

var _connect2 = _interopRequireDefault(_connect);

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(0);

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
//# sourceMappingURL=app.70b66e9b6792dc763955.js.map