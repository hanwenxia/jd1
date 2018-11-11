webpackJsonp([3],{

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e4b2456_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e4b2456"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e4b2456_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/product/footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e4b2456", Component.options)
  } else {
    hotAPI.reload("data-v-1e4b2456", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "footer" }, [
    _c("ul", { staticClass: "ovf" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("li", { staticClass: "icon_box lt", on: { click: _vm.goCart } }, [
        _c("i", { staticClass: "iconfont icon-tubiaozhizuomoban" }),
        _vm._v(
          "\n            " + _vm._s(this.$store.getters.num) + "\n            "
        ),
        _c("p", [_vm._v("购物车")])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "join_cart lt", on: { click: _vm.add } }, [
        _vm._v("\n            加入购物车\n        ")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "join_cart lt" }, [
        _vm._v("\n            立即秒杀\n        ")
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "icon_box lt" }, [
      _c("i", { staticClass: "iconfont icon-jingdong" }),
      _vm._v(" "),
      _c("p", [_vm._v("联系客服")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "icon_box lt" }, [
      _c("i", { staticClass: "iconfont icon-Dollar" }),
      _vm._v(" "),
      _c("p", [_vm._v("进店")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e4b2456", esExports)
  }
}

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("MyHeader", [
        _c("span", [_vm._v("商品")]),
        _vm._v(" "),
        _c("span", [_vm._v("评价")]),
        _vm._v(" "),
        _c("span", [_vm._v("详情")]),
        _vm._v(" "),
        _c("span", [_vm._v("推荐")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "banner" }, [
        _c("div", { staticClass: "img_box" }, [
          _c("img", { attrs: { src: _vm.obj.bannerSrc, alt: "" } })
        ]),
        _vm._v(" "),
        _c("h2", [_vm._v("商品ID是" + _vm._s(_vm.id))]),
        _vm._v(" "),
        _c("h2", [
          _vm._v("商品价格是" + _vm._s(_vm._f("money")(_vm.obj.price)))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "ad_box" },
          _vm._l(_vm.obj.adImg, function(i) {
            return _c("img", { attrs: { src: i, alt: "" } })
          })
        )
      ]),
      _vm._v(" "),
      _c("MyFooter", { on: { add: _vm.add } })
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
    require("vue-hot-reload-api")      .rerender("data-v-da7229f0", esExports)
  }
}

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da7229f0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-da7229f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da7229f0_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/product/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da7229f0", Component.options)
  } else {
    hotAPI.reload("data-v-da7229f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 55:
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

exports.default = {
    props: ['title'],
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    methods: {
        back: function back() {
            this.$router.back();
        }
    }
};

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7afc3b85_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(57)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7afc3b85"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7afc3b85_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_com_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/common/com_header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7afc3b85", Component.options)
  } else {
    hotAPI.reload("data-v-7afc3b85", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "com_header ovf" }, [
    _c(
      "div",
      { staticClass: "lt", on: { click: _vm.back } },
      [_c("Icon", { attrs: { type: "chevron-left" } })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "search_box lt" },
      [_vm.title ? _c("span", [_vm._v(_vm._s(_vm.title))]) : _vm._t("default")],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "rt" },
      [_c("Icon", { attrs: { type: "more" } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7afc3b85", esExports)
  }
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _com_header = __webpack_require__(56);

var _com_header2 = _interopRequireDefault(_com_header);

var _footer = __webpack_require__(141);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    data: function data() {
        return {
            id: this.$route.query.id,
            obj: {
                id: this.$route.query.id,
                bannerSrc: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20233/91/755762273/310559/39fd264e/5b168a17N1d2e63c9.jpg!q80.dpg.webp',
                adImg: ['https://img30.360buyimg.com/popWaterMark/jfs/t27619/48/1033981781/299860/f8c1f91b/5bc04e19Ne7492851.jpg!q70.dpg', 'https://img30.360buyimg.com/popWaterMark/jfs/t27619/48/1033981781/299860/f8c1f91b/5bc04e19Ne7492851.jpg!q70.dpg', 'https://img30.360buyimg.com/popWaterMark/jfs/t27619/48/1033981781/299860/f8c1f91b/5bc04e19Ne7492851.jpg!q70.dpg'],
                num: 1,
                isSelect: true,
                price: 100000
            }
        };
    },

    components: {
        MyHeader: _com_header2.default, MyFooter: _footer2.default
    },
    methods: {
        add: function add() {
            this.$store.dispatch('add', this.obj);
        }
    }
};

/***/ }),

/***/ 83:
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

exports.default = {
    methods: {
        add: function add() {
            this.$emit('add');
        },
        goCart: function goCart() {
            this.$router.push('/cart');
        }
    },
    computed: {}
};

/***/ })

});