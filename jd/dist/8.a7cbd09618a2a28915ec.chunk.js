webpackJsonp([8],{

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a83bd3b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(84);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a83bd3b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a83bd3b0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a83bd3b0", Component.options)
  } else {
    hotAPI.reload("data-v-a83bd3b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 58:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  methods: {
    handleStart: function handleStart() {
      this.$Modal.info({
        title: "Bravo",
        content: "Now, enjoy the convenience of iView."
      });
    }
  }
};

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "index" },
    [
      _c("router-view"),
      _vm._v(" "),
      _c(
        "Row",
        {
          staticClass: "router_box",
          attrs: { type: "flex", justify: "space-between" }
        },
        [
          _c(
            "Col",
            { staticClass: "tab", attrs: { span: "4" } },
            [
              _c(
                "router-link",
                { attrs: { to: "/home" } },
                [
                  _c("Icon", {
                    attrs: { type: "ios-home-outline", size: "22" }
                  }),
                  _vm._v(" "),
                  _c("div", [_vm._v("首页")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "tab", attrs: { span: "4" } },
            [
              _c(
                "router-link",
                { attrs: { to: "/list" } },
                [
                  _c("Icon", {
                    attrs: { type: "ios-list-outline", size: "20" }
                  }),
                  _vm._v(" "),
                  _c("div", [_vm._v("分类")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "tab", attrs: { span: "4" } },
            [
              _c(
                "router-link",
                { attrs: { to: "/shopping" } },
                [
                  _c("Icon", { attrs: { type: "bag", size: "20" } }),
                  _vm._v(" "),
                  _c("div", [_vm._v("拼购")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "tab", attrs: { span: "4" } },
            [
              _c(
                "router-link",
                { attrs: { to: "/cart" } },
                [
                  _c("Icon", {
                    attrs: { type: "ios-cart-outline", size: "20" }
                  }),
                  _vm._v(
                    "\n                " +
                      _vm._s(this.$store.getters.num) +
                      "\n                "
                  ),
                  _c("div", [_vm._v("购物车")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Col",
            { staticClass: "tab", attrs: { span: "4" } },
            [
              _c(
                "router-link",
                { attrs: { to: "/mine" } },
                [
                  _c("Icon", {
                    staticClass: "iconfont icon-user",
                    attrs: { type: "none", size: "20" }
                  }),
                  _vm._v(" "),
                  _c("div", [_vm._v("我的")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a83bd3b0", esExports)
  }
}

/***/ })

});