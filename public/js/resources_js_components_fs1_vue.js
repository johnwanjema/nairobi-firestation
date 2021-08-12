"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_fs1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fs1.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fs1.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      currentPage: 1,
      perPage: 5,
      fields: ['#', 'location', 'discoveredBy', 'methodOfCalling', 'timeOfDiscovery', 'actions'],
      filter: null,
      filterOn: [],
      form: new Form({
        id: '',
        discoveredBy: '',
        methodOfCalling: '',
        time: ''
      }),
      editMode: false,
      totalRows: 1,
      fires: [],
      fire: {}
    };
  },
  methods: {
    openEditModal: function openEditModal(expense) {
      this.form.reset();
      $('#modal-default').modal('show');
      this.editMode = true;
      this.form.fill(expense);
    },
    addFs1: function addFs1(item) {
      router.push({
        name: "addFs1",
        params: {
          fire: item,
          fireId: item.id
        }
      });
    },
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    addFire: function addFire() {
      console.log('weqwe');
    },
    getFires: function getFires() {
      var _this = this;

      axios.get('/api/fires').then(function (_ref) {
        var data = _ref.data;
        // console.log(data);
        _this.fires = data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    this.getFires();
  }
});

/***/ }),

/***/ "./resources/js/components/fs1.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/fs1.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fs1_vue_vue_type_template_id_e55529ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fs1.vue?vue&type=template&id=e55529ee& */ "./resources/js/components/fs1.vue?vue&type=template&id=e55529ee&");
/* harmony import */ var _fs1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fs1.vue?vue&type=script&lang=js& */ "./resources/js/components/fs1.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _fs1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _fs1_vue_vue_type_template_id_e55529ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _fs1_vue_vue_type_template_id_e55529ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fs1.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fs1.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/fs1.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fs1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fs1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fs1.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fs1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/fs1.vue?vue&type=template&id=e55529ee&":
/*!************************************************************************!*\
  !*** ./resources/js/components/fs1.vue?vue&type=template&id=e55529ee& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fs1_vue_vue_type_template_id_e55529ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fs1_vue_vue_type_template_id_e55529ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fs1_vue_vue_type_template_id_e55529ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./fs1.vue?vue&type=template&id=e55529ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fs1.vue?vue&type=template&id=e55529ee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fs1.vue?vue&type=template&id=e55529ee&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fs1.vue?vue&type=template&id=e55529ee& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("FS1")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  {
                    staticClass: "dataTables_wrapper dt-bootstrap4",
                    attrs: { id: "example1_wrapper" }
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col-sm-12" },
                        [
                          _c("b-table", {
                            attrs: {
                              responsive: "",
                              striped: "",
                              hover: "",
                              "show-empty": "",
                              items: _vm.fires,
                              fields: _vm.fields,
                              "per-page": 0,
                              "current-page": _vm.currentPage,
                              filter: _vm.filter,
                              filterIncludedFields: _vm.filterOn
                            },
                            on: { filtered: _vm.onFiltered },
                            scopedSlots: _vm._u([
                              {
                                key: "cell(#)",
                                fn: function(row) {
                                  return [
                                    _c("p", [_vm._v(_vm._s(row.index + 1))])
                                  ]
                                }
                              },
                              {
                                key: "cell(amount)",
                                fn: function(row) {
                                  return [
                                    _c("p", [
                                      _vm._v(" $ " + _vm._s(row.item.amount))
                                    ])
                                  ]
                                }
                              },
                              {
                                key: "cell(actions)",
                                fn: function(row) {
                                  return [
                                    _c(
                                      "b-button",
                                      {
                                        staticClass: "btn btn-sm",
                                        attrs: { variant: "primary" },
                                        on: {
                                          click: function($event) {
                                            return _vm.addFs1(row.item)
                                          }
                                        }
                                      },
                                      [_vm._v(" Add FS1")]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "modal-lg" } }, [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addFire.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputEmail1" } }, [
                      _vm._v("Location " + _vm._s(_vm.fire) + " ")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fire.location,
                          expression: "fire.location"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        required: "",
                        type: "text",
                        id: "exampleInputEmail1",
                        placeholder: "Enter Location"
                      },
                      domProps: { value: _vm.fire.location },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.fire, "location", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v("DiscoveredBy")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.form.discoveredBy,
                          expression: "form.discoveredBy",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        required: "",
                        type: "text",
                        id: "exampleInputPassword1",
                        placeholder: "DiscoverdBy"
                      },
                      domProps: { value: _vm.form.discoveredBy },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "discoveredBy",
                            $event.target.value.trim()
                          )
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v("Method Of Calling")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.methodOfCalling,
                          expression: "form.methodOfCalling"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        required: "",
                        type: "text",
                        id: "exampleInputPassword1",
                        placeholder: "Method of Calling"
                      },
                      domProps: { value: _vm.form.methodOfCalling },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "methodOfCalling",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "exampleInputPassword1" } }, [
                      _vm._v("Time Of Discovery")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.form.time,
                          expression: "form.time",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        required: "",
                        type: "time",
                        id: "exampleInputPassword1",
                        placeholder: "Password"
                      },
                      domProps: { value: _vm.form.time },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "time", $event.target.value.trim())
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [
      _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("FS1")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Fires Occurence Book")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Large Modal")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer justify-content-between" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Add Fire")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);