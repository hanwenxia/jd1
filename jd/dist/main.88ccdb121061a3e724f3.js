webpackJsonp([9],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    data: function data() {
        return {};
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},

    methods: {}
};

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _iview = __webpack_require__(5);

var _iview2 = _interopRequireDefault(_iview);

var _vueRouter = __webpack_require__(6);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _router = __webpack_require__(19);

var _router2 = _interopRequireDefault(_router);

var _vuex = __webpack_require__(7);

var _vuex2 = _interopRequireDefault(_vuex);

var _util = __webpack_require__(20);

var _util2 = _interopRequireDefault(_util);

var _app = __webpack_require__(39);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_vuex2.default);

_vue2.default.use(_iview2.default);

// 路由配置
var RouterConfig = {
    mode: 'history',
    linkActiveClass: 'current',
    routes: _router2.default
};
var router = new _vueRouter2.default(RouterConfig);

router.beforeEach(function (to, from, next) {
    _iview2.default.LoadingBar.start();
    _util2.default.title(to.meta.title);
    next();
});

router.afterEach(function () {
    _iview2.default.LoadingBar.finish();
    window.scrollTo(0, 0);
});

var store = new _vuex2.default.Store({
    state: {
        goods: []
    },
    getters: {
        num: function num(state) {
            var list = state.goods;
            var n = 0;
            list.forEach(function (item) {
                n += item.num * 1;
            });
            return n;
        }
    },
    mutations: {
        add: function add(state, obj) {
            if (state.goods.indexOf(obj) != -1) {
                obj.num++;
            } else {
                state.goods.push(obj);
            }
        },
        remove: function remove(state, obj) {
            state.goods = state.goods.filter(function (item) {
                return item != obj;
            });
        }
    },
    actions: {
        add: function add(_ref, obj) {
            var commit = _ref.commit;

            commit('add', obj);
        },
        remove: function remove(_ref2, obj) {
            var commit = _ref2.commit;

            commit('remove', obj);
        }
    }
});

_vue2.default.filter('money', function (value) {
    return (value / 100).toFixed(2);
});

new _vue2.default({
    el: '#app',
    router: router,
    store: store,
    render: function render(h) {
        return h(_app2.default);
    }
});

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    redirect: '/home',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(45)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    children: [{
        path: '/home',
        meta: {
            title: '首页'
        },
        component: function component(res) {
            return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(46)]; ((res).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/list',
        meta: {
            title: '分类'
        },
        component: function component(res) {
            return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(47)]; ((res).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/shopping',
        meta: {
            title: '拼购'
        },
        component: function component(res) {
            return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(48)]; ((res).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/mine',
        meta: {
            title: '我的'
        },
        component: function component(resolve) {
            return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(49)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }]
}, {
    path: '/login',
    component: function component(resolve) {
        return __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(50)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/cart',
    component: function component(res) {
        return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51)]; ((res).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/search',
    component: function component(res) {
        return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(52)]; ((res).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}, {
    path: '/product',
    component: function component(res) {
        return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(53)]; ((res).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    }
}];
exports.default = routers;

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _env = __webpack_require__(38);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var util = {};
util.title = function (title) {
    title = title ? title : '京东';
    window.document.title = title;
};

var ajaxUrl = _env2.default === 'development' ? 'http://127.0.0.1:8888' : _env2.default === 'production' ? 'https://www.url.com' : 'https://debug.url.com';

util.ajax = _axios2.default.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

exports.default = util;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "production";

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue__ = __webpack_require__(40);
var disposed = false
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef48958_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/app.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ef48958", Component.options)
  } else {
    hotAPI.reload("data-v-5ef48958", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ef48958", esExports)
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[16]);