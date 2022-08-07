/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/component.js":
/*!****************************************!*\
  !*** ./src/js/components/component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

 //export default class Component extends Emitter {

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    //super();
    if (arguments.length === 2) {
      this.root = arguments.length <= 0 ? undefined : arguments[0];
      this.options = Object.assign({}, this._defaultOptions, arguments.length <= 1 ? undefined : arguments[1]);
    } else if (arguments.length === 1) {
      if (Component.isjQuery(arguments.length <= 0 ? undefined : arguments[0])) {
        this.root = arguments.length <= 0 ? undefined : arguments[0];
      } else {
        this.options = Object.assign({}, this._defaultOptions, arguments.length <= 0 ? undefined : arguments[0]);
      }
    }
  }

  _createClass(Component, [{
    key: "initialize",
    value: function initialize() {
      this._cacheNodes();

      this._bindEvents();

      this._ready();
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {}
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {}
  }, {
    key: "_ready",
    value: function _ready() {}
  }], [{
    key: "isjQuery",
    value: function isjQuery(object) {
      return object instanceof (jquery__WEBPACK_IMPORTED_MODULE_0___default());
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/js/components/lightbox.js":
/*!***************************************!*\
  !*** ./src/js/components/lightbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Lightbox)
/* harmony export */ });
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Lightbox = /*#__PURE__*/function (_Component) {
  _inherits(Lightbox, _Component);

  var _super = _createSuper(Lightbox);

  function Lightbox(root, options) {
    var _this;

    _classCallCheck(this, Lightbox);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Lightbox, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        defaults: {
          lang: 'ru',
          transitionEffect: 'slide',
          backFocus: false,
          buttons: ['close'],
          i18n: {
            ru: {
              CLOSE: 'Закрыть',
              NEXT: 'Дальше',
              PREV: 'Назад',
              ERROR: 'Не удается загрузить. <br/> Попробуйте позднее.',
              PLAY_START: 'Начать слайдшоу',
              PLAY_STOP: 'Остановить слайдшоу',
              FULL_SCREEN: 'На весь экран',
              THUMBS: 'Превью',
              DOWNLOAD: 'Скачать',
              SHARE: 'Поделиться',
              ZOOM: 'Увеличить'
            }
          }
        }
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Lightbox.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {
        link: $('.js-link-modal')
      };
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.nodes.link.on('click', function (event) {
        event.preventDefault();
        var $link = $(event.currentTarget);
        $.fancybox.open({
          src: $link.data('src'),
          type: 'inline',
          opts: {
            touch: false,
            autoFocus: false,
            closeExisting: true,
            animationEffect: false,
            beforeLoad: function beforeLoad(event) {
              event.current.$slide.addClass('fancybox-modal');
            }
          }
        });
      });
    }
  }, {
    key: "_ready",
    value: function _ready() {
      $.fancybox.defaults.i18n.ru = this.options.defaults.i18n.ru;
      $.fancybox.defaults.lang = this.options.defaults.lang;
      $.fancybox.defaults.buttons = this.options.defaults.buttons;
      $.fancybox.defaults.transitionEffect = this.options.defaults.transitionEffect;
      $.fancybox.defaults.backFocus = this.options.defaults.backFocus;
    }
  }]);

  return Lightbox;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/components/scrolltotop-btn.js":
/*!**********************************************!*\
  !*** ./src/js/components/scrolltotop-btn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollToTopBtn)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// кнопка наверх


var ScrollToTopBtn = /*#__PURE__*/function (_Component) {
  _inherits(ScrollToTopBtn, _Component);

  var _super = _createSuper(ScrollToTopBtn);

  function ScrollToTopBtn(root, options) {
    var _this;

    _classCallCheck(this, ScrollToTopBtn);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(ScrollToTopBtn, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(ScrollToTopBtn.prototype), "initialize", this).call(this);

      this.setToTopButton();
    }
  }, {
    key: "setToTopButton",
    value: function setToTopButton() {
      var $scrollTopBtn = $('<a rel="nofollow" href="#" id="scroll-top" class="scrolltotop-btn"><i></i></a>').appendTo('body');
      $scrollTopBtn.on('click', function () {
        $('html:not(:animated),body:not(:animated)').animate({
          scrollTop: 0
        }, 300);
        return false;
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
          $scrollTopBtn.addClass('top-btn-show');
        } else {
          $scrollTopBtn.removeClass('top-btn-show');
        }
      });

      if ($scrollTopBtn.hasClass('top-btn-show')) {
        $scrollTopBtn.removeClass('top-btn-show');
      }
    }
  }]);

  return ScrollToTopBtn;
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/js/components/component.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(root, options) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _super.call(this, root, options);

    _this.initialize();

    return _this;
  }

  _createClass(Slider, [{
    key: "_defaultOptions",
    get: function get() {
      return {
        rows: 0,
        counter: false,
        prevArrow: '<button class="slider-prev"><span class="icon-left"></span></button>',
        nextArrow: '<button class="slider-next"><span class="icon-right"></span></button>'
      };
    }
  }, {
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf(Slider.prototype), "initialize", this).call(this);
    }
  }, {
    key: "_cacheNodes",
    value: function _cacheNodes() {
      this.nodes = {};
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.root.on('init', this.addCounter);
      this.root.on('beforeChange', this.changeCounter);
      this.root.on('breakpoint', this.addCounter);
    }
  }, {
    key: "_ready",
    value: function _ready() {
      this.root.slick(this.options);
    }
  }, {
    key: "addCounter",
    value: function addCounter(event, slick) {
      if (slick.options.counter === true && slick.slideCount > slick.options.slidesToShow) {
        var $counter = $('<div class="slick-counter slick-cloned"><div class="slick-counter__inner">' + '<span class="slick-counter__current">' + (slick.currentSlide + 1) + '</span>' + '<span role="separator" class="slick-counter__divider"></span>' + '<span class="slick-counter__count">' + (slick.getDotCount() + 1) + '</span></div></div>');
        $counter.appendTo(slick.$slider);
      }
    }
  }, {
    key: "changeCounter",
    value: function changeCounter(event, slick, currentSlide, nextSlide) {
      slick.$slider.find('.slick-counter__current').html(Math.floor(nextSlide / slick.options.slidesToScroll) + 1);
    }
  }]);

  return Slider;
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider */ "./src/js/components/slider.js");
/* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lightbox */ "./src/js/components/lightbox.js");
/* harmony import */ var _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scrolltotop-btn */ "./src/js/components/scrolltotop-btn.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Application = /*#__PURE__*/function () {
  function Application() {
    _classCallCheck(this, Application);

    this.initCommon();
    this.initSliders();
    this.initMobileViewPortHeight();
  } // Инициализации


  _createClass(Application, [{
    key: "initCommon",
    value: function initCommon() {
      new _components_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"]();
      new _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__["default"](); // // Плавная прокрутка при переходе по якорю
      // const $root = $('html, body');
      // $('#main-menu a').click(function() {
      //     var href = $.attr(this, 'href');
      //     href = href.substring(1, href.length);
      //     //console.log(href);
      //     $root.animate({
      //         scrollTop: $(href).offset().top
      //     }, 1500, function () {
      //         window.location.hash = href;
      //     });
      //     return false;
      // });

      $('.header__logo').click(function () {
        $('.main-menu').addClass('main-menu--active');
      });
      $('.close').click(function () {
        $('.main-menu').removeClass('main-menu--active');
      });
      $('.footer__menu').click(function () {
        $('.main-menu').addClass('main-menu--active');
      }); // about-slider

      var item = document.querySelectorAll('.item');
      var next = document.querySelector('.next');
      var el_active;
      var current = document.querySelector('.current');
      var total = document.querySelector('.total');

      function navigate() {
        for (var i = 0, length = item.length; i < length; i++) {
          if (item[i].classList.contains('active')) {
            el_active = i;
            current.textContent = i + 1;
            break;
          }
        }

        item.forEach(function (tab) {
          tab.classList.remove('active');
        });

        if (el_active + 1 === item.length) {
          item[0].classList.add('active');
        } else {
          item[el_active + 1].classList.add('active');
        }
      }

      next.addEventListener('click', function () {
        navigate();
      });
      var all = item.length;
      total.append(all);
    } // Инициализация всех слайдеров

  }, {
    key: "initSliders",
    value: function initSliders() {
      // Slider in content
      var $sliderRoom = $('.slider-room');

      if ($sliderRoom.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_0__["default"]($sliderRoom, {
          counter: false,
          infinite: true,
          slidesToShow: 3,
          centerMode: true,
          adaptiveHeight: true,
          nextArrow: '<button class="next-btn"><span class="icon-next"></span></button>',
          prevArrow: '<button class="prev-btn"><span class="icon-prev"></span></button>',
          variableWidth: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }]
        });
      } // let $aboutSlider = $('.about-slider');
      // if ($aboutSlider.length !== 0) {
      //     new Slider($aboutSlider, {
      //         counter: false,
      //         infinite: true,
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         variableWidth: true,
      //         dots: false,
      //         arrows: false,
      //     })
      // }

    } // 100vh для мобильников

  }, {
    key: "initMobileViewPortHeight",
    value: function initMobileViewPortHeight() {
      // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

      /*
      Прмиер как использовать эту фичу в стилях
      .module {
          height: 100vh; //Use vh as a fallback for browsers that do not support Custom Properties
          height: calc(var(--vh, 1vh) * 100);
          margin: 0 auto;
          max-width: 30%;
      }
      */
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      var document_width = window.innerWidth; // We listen to the resize event (а ресайз в мобилках срабатывает и при скроле, когда исчезает строка ввода адреса в браузере)

      window.addEventListener('resize', function () {
        // We execute the same script as before
        if (document_width != window.innerWidth) {
          document_width = window.innerWidth;

          var _vh = window.innerHeight * 0.01;

          document.documentElement.style.setProperty('--vh', "".concat(_vh, "px"));
        }
      });
    }
  }]);

  return Application;
}(); // запуск приложения


$(function () {
  new Application();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhtml_start"] = self["webpackChunkhtml_start"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2xpZ2h0Ym94LmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGx0b3RvcC1idG4uanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEVtaXR0ZXIge1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIC8vc3VwZXIoKTtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IGFyZ3NbMF07XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1sxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudC5pc2pRdWVyeShhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpc2pRdWVyeShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIGpRdWVyeTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9jYWNoZU5vZGVzKCk7XG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5fcmVhZHkoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHt9XG5cbiAgICBfYmluZEV2ZW50cygpIHt9XG5cbiAgICBfcmVhZHkoKSB7fVxufSIsImltcG9ydCBcIkBmYW5jeWFwcHMvZmFuY3lib3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBsYW5nOiAncnUnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgICAgICAgICAgYmFja0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICdjbG9zZSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICAgICAgcnU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENMT1NFOiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgTkVYVDogJ9CU0LDQu9GM0YjQtScsXG4gICAgICAgICAgICAgICAgICAgICAgICBQUkVWOiAn0J3QsNC30LDQtCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJ9Cd0LUg0YPQtNCw0LXRgtGB0Y8g0LfQsNCz0YDRg9C30LjRgtGMLiA8YnIvPiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQtNC90LXQtS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgUExBWV9TVEFSVDogJ9Cd0LDRh9Cw0YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RPUDogJ9Ce0YHRgtCw0L3QvtCy0LjRgtGMINGB0LvQsNC50LTRiNC+0YMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRlVMTF9TQ1JFRU46ICfQndCwINCy0LXRgdGMINGN0LrRgNCw0L0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgVEhVTUJTOiAn0J/RgNC10LLRjNGOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPV05MT0FEOiAn0KHQutCw0YfQsNGC0YwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgU0hBUkU6ICfQn9C+0LTQtdC70LjRgtGM0YHRjycsXG4gICAgICAgICAgICAgICAgICAgICAgICBaT09NOiAn0KPQstC10LvQuNGH0LjRgtGMJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICAgICAgICBsaW5rOiAkKCcuanMtbGluay1tb2RhbCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMubGluay5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICAgICAgICAgIHNyYzogJGxpbmsuZGF0YSgnc3JjJyksXG4gICAgICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRXhpc3Rpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkVmZmVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUxvYWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKCdmYW5jeWJveC1tb2RhbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZWFkeSgpIHtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5pMThuLnJ1ID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmkxOG4ucnU7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMubGFuZyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5sYW5nO1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJ1dHRvbnMgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuYnV0dG9ucztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0ID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLnRyYW5zaXRpb25FZmZlY3Q7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuYmFja0ZvY3VzID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJhY2tGb2N1cztcbiAgICB9XG59IiwiLy8g0LrQvdC+0L/QutCwINC90LDQstC10YDRhVxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Ub3BCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5zZXRUb1RvcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNldFRvVG9wQnV0dG9uKCkge1xuXG4gICAgICAgIHZhciAkc2Nyb2xsVG9wQnRuID0gJCgnPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiI1wiIGlkPVwic2Nyb2xsLXRvcFwiIGNsYXNzPVwic2Nyb2xsdG90b3AtYnRuXCI+PGk+PC9pPjwvYT4nKS5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgICAgICRzY3JvbGxUb3BCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLGJvZHk6bm90KDphbmltYXRlZCknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwfSwgMzAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5hZGRDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvcEJ0bi5oYXNDbGFzcygndG9wLWJ0bi1zaG93JykpIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4ucmVtb3ZlQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcInNsaWNrLWNhcm91c2VsXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiAwLFxuICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge307XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5vbignaW5pdCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYmVmb3JlQ2hhbmdlJywgdGhpcy5jaGFuZ2VDb3VudGVyKTtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdicmVha3BvaW50JywgdGhpcy5hZGRDb3VudGVyKTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgIHRoaXMucm9vdC5zbGljayh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGFkZENvdW50ZXIoZXZlbnQsIHNsaWNrKSB7XG4gICAgICAgIGlmIChzbGljay5vcHRpb25zLmNvdW50ZXIgPT09IHRydWUgJiYgc2xpY2suc2xpZGVDb3VudCA+IHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBsZXQgJGNvdW50ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2xpY2stY291bnRlciBzbGljay1jbG9uZWRcIj48ZGl2IGNsYXNzPVwic2xpY2stY291bnRlcl9faW5uZXJcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbGljay1jb3VudGVyX19jdXJyZW50XCI+JyArIChzbGljay5jdXJyZW50U2xpZGUgKyAxKSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2RpdmlkZXJcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY291bnRcIj4nICsgKHNsaWNrLmdldERvdENvdW50KCkgKyAxKSArICc8L3NwYW4+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICRjb3VudGVyLmFwcGVuZFRvKHNsaWNrLiRzbGlkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQ291bnRlcihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgIHNsaWNrLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNvdW50ZXJfX2N1cnJlbnQnKS5odG1sKE1hdGguZmxvb3IobmV4dFNsaWRlIC8gc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKyAxKTtcbiAgICB9XG59IiwiaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvbGlnaHRib3hcIjtcbmltcG9ydCBTY3JvbGxUb1RvcEJ0biBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0blwiO1xuXG5jbGFzcyBBcHBsaWNhdGlvbiB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRDb21tb24oKTtcbiAgICAgICAgdGhpcy5pbml0U2xpZGVycygpO1xuICAgICAgICB0aGlzLmluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCgpO1xuICAgIH1cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgICBpbml0Q29tbW9uKCkge1xuXG4gICAgICAgIG5ldyBMaWdodGJveCgpO1xuXG4gICAgICAgIG5ldyBTY3JvbGxUb1RvcEJ0bigpO1xuXG4gICAgICAgIC8vIC8vINCf0LvQsNCy0L3QsNGPINC/0YDQvtC60YDRg9GC0LrQsCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQv9C+INGP0LrQvtGA0Y5cbiAgICAgICAgLy8gY29uc3QgJHJvb3QgPSAkKCdodG1sLCBib2R5Jyk7XG4gICAgICAgIC8vICQoJyNtYWluLW1lbnUgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgdmFyIGhyZWYgPSAkLmF0dHIodGhpcywgJ2hyZWYnKTtcbiAgICAgICAgLy8gICAgIGhyZWYgPSBocmVmLnN1YnN0cmluZygxLCBocmVmLmxlbmd0aCk7XG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGhyZWYpO1xuICAgICAgICAvLyAgICAgJHJvb3QuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcFxuICAgICAgICAvLyAgICAgfSwgMTUwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkKCcuaGVhZGVyX19sb2dvJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLm1haW4tbWVudScpLmFkZENsYXNzKCdtYWluLW1lbnUtLWFjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgICQoJy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5tYWluLW1lbnUnKS5yZW1vdmVDbGFzcygnbWFpbi1tZW51LS1hY3RpdmUnKVxuICAgICAgICB9KVxuICAgICAgICAkKCcuZm9vdGVyX19tZW51JykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLm1haW4tbWVudScpLmFkZENsYXNzKCdtYWluLW1lbnUtLWFjdGl2ZScpXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYWJvdXQtc2xpZGVyXG4gICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKTtcbiAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpO1xuICAgICAgICBsZXQgZWxfYWN0aXZlO1xuXG4gICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcbiAgICAgICAgbGV0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gbmF2aWdhdGUoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuZ3RoID0gaXRlbS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxfYWN0aXZlID0gaTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50LnRleHRDb250ZW50ID0gKGkgKyAxKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW0uZm9yRWFjaChmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoKGVsX2FjdGl2ZSArIDEpID09PSBpdGVtLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGl0ZW1bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW1bZWxfYWN0aXZlICsgMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmF2aWdhdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWxsID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIHRvdGFsLmFwcGVuZChhbGwpO1xuXG4gICAgfVxuXG5cbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQstGB0LXRhSDRgdC70LDQudC00LXRgNC+0LJcbiAgICBpbml0U2xpZGVycygpIHtcblxuICAgICAgICAvLyBTbGlkZXIgaW4gY29udGVudFxuICAgICAgICBsZXQgJHNsaWRlclJvb20gPSAkKCcuc2xpZGVyLXJvb20nKTtcbiAgICAgICAgaWYgKCRzbGlkZXJSb29tLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkc2xpZGVyUm9vbSwge1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cIm5leHQtYnRuXCI+PHNwYW4gY2xhc3M9XCJpY29uLW5leHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwicHJldi1idG5cIj48c3BhbiBjbGFzcz1cImljb24tcHJldlwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG5cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgJGFib3V0U2xpZGVyID0gJCgnLmFib3V0LXNsaWRlcicpO1xuICAgICAgICAvLyBpZiAoJGFib3V0U2xpZGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAvLyAgICAgbmV3IFNsaWRlcigkYWJvdXRTbGlkZXIsIHtcbiAgICAgICAgLy8gICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIC8vICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIC8vICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gfVxuICAgIH1cblxuXG4gICAgLy8gMTAwdmgg0LTQu9GPINC80L7QsdC40LvRjNC90LjQutC+0LJcbiAgICBpbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKSB7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgICAgICAvKlxuICAgICAgICDQn9GA0LzQuNC10YAg0LrQsNC6INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0YMg0YTQuNGH0YMg0LIg0YHRgtC40LvRj9GFXG4gICAgICAgIC5tb2R1bGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDsgLy9Vc2UgdmggYXMgYSBmYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllc1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICAvLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxuICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgICAvLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICBsZXQgZG9jdW1lbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnQgKNCwINGA0LXRgdCw0LnQtyDQsiDQvNC+0LHQuNC70LrQsNGFINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0Lgg0L/RgNC4INGB0LrRgNC+0LvQtSwg0LrQvtCz0LTQsCDQuNGB0YfQtdC30LDQtdGCINGB0YLRgNC+0LrQsCDQstCy0L7QtNCwINCw0LTRgNC10YHQsCDQsiDQsdGA0LDRg9C30LXRgNC1KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRfd2lkdGggIT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8g0LfQsNC/0YPRgdC6INC/0YDQuNC70L7QttC10L3QuNGPXG4kKCgpID0+IHtcbiAgICBuZXcgQXBwbGljYXRpb24oKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtodG1sX3N0YXJ0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsIkNvbXBvbmVudCIsImxlbmd0aCIsInJvb3QiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX2RlZmF1bHRPcHRpb25zIiwiaXNqUXVlcnkiLCJfY2FjaGVOb2RlcyIsIl9iaW5kRXZlbnRzIiwiX3JlYWR5Iiwib2JqZWN0IiwiTGlnaHRib3giLCJpbml0aWFsaXplIiwiZGVmYXVsdHMiLCJsYW5nIiwidHJhbnNpdGlvbkVmZmVjdCIsImJhY2tGb2N1cyIsImJ1dHRvbnMiLCJpMThuIiwicnUiLCJDTE9TRSIsIk5FWFQiLCJQUkVWIiwiRVJST1IiLCJQTEFZX1NUQVJUIiwiUExBWV9TVE9QIiwiRlVMTF9TQ1JFRU4iLCJUSFVNQlMiLCJET1dOTE9BRCIsIlNIQVJFIiwiWk9PTSIsIm5vZGVzIiwibGluayIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluayIsImN1cnJlbnRUYXJnZXQiLCJmYW5jeWJveCIsIm9wZW4iLCJzcmMiLCJkYXRhIiwidHlwZSIsIm9wdHMiLCJ0b3VjaCIsImF1dG9Gb2N1cyIsImNsb3NlRXhpc3RpbmciLCJhbmltYXRpb25FZmZlY3QiLCJiZWZvcmVMb2FkIiwiY3VycmVudCIsIiRzbGlkZSIsImFkZENsYXNzIiwiU2Nyb2xsVG9Ub3BCdG4iLCJzZXRUb1RvcEJ1dHRvbiIsIiRzY3JvbGxUb3BCdG4iLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGwiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiU2xpZGVyIiwicm93cyIsImNvdW50ZXIiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhZGRDb3VudGVyIiwiY2hhbmdlQ291bnRlciIsInNsaWNrIiwic2xpZGVDb3VudCIsInNsaWRlc1RvU2hvdyIsIiRjb3VudGVyIiwiY3VycmVudFNsaWRlIiwiZ2V0RG90Q291bnQiLCIkc2xpZGVyIiwibmV4dFNsaWRlIiwiZmluZCIsImh0bWwiLCJNYXRoIiwiZmxvb3IiLCJzbGlkZXNUb1Njcm9sbCIsIkFwcGxpY2F0aW9uIiwiaW5pdENvbW1vbiIsImluaXRTbGlkZXJzIiwiaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0IiwiY2xpY2siLCJpdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmV4dCIsInF1ZXJ5U2VsZWN0b3IiLCJlbF9hY3RpdmUiLCJ0b3RhbCIsIm5hdmlnYXRlIiwiaSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidGV4dENvbnRlbnQiLCJmb3JFYWNoIiwidGFiIiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsbCIsImFwcGVuZCIsIiRzbGlkZXJSb29tIiwiaW5maW5pdGUiLCJjZW50ZXJNb2RlIiwiYWRhcHRpdmVIZWlnaHQiLCJ2YXJpYWJsZVdpZHRoIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZoIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZG9jdW1lbnRfd2lkdGgiLCJpbm5lcldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==