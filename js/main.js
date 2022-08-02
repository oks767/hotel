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
      });
    } // Инициализация всех слайдеров

  }, {
    key: "initSliders",
    value: function initSliders() {
      // Slider in content
      var $slider = $('.slider');

      if ($slider.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
          counter: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        });
      } // Carousel in content


      var $carousel = $('.carousel');

      if ($carousel.length !== 0) {
        new _components_slider__WEBPACK_IMPORTED_MODULE_0__["default"]($carousel, {
          counter: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="carousel-prev"><span class="icon-left"></span></button>',
          nextArrow: '<button class="carousel-next"><span class="icon-right"></span></button>',
          adaptiveHeight: true,
          responsive: [{
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          }]
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0lBQ3FCQztFQUVqQixxQkFBcUI7SUFBQTs7SUFDakI7SUFFQSxJQUFJLFVBQUtDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7TUFDbkIsS0FBS0MsSUFBTDtNQUNBLEtBQUtDLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLQyxlQUF2QixtREFBZjtJQUVILENBSkQsTUFJTyxJQUFJLFVBQUtMLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7TUFDMUIsSUFBSUQsU0FBUyxDQUFDTyxRQUFWLGtEQUFKLEVBQWlDO1FBQzdCLEtBQUtMLElBQUw7TUFDSCxDQUZELE1BRU87UUFDSCxLQUFLQyxPQUFMLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS0MsZUFBdkIsbURBQWY7TUFDSDtJQUNKO0VBQ0o7Ozs7V0FNRCxzQkFBYTtNQUNULEtBQUtFLFdBQUw7O01BQ0EsS0FBS0MsV0FBTDs7TUFDQSxLQUFLQyxNQUFMO0lBQ0g7OztXQUVELHVCQUFjLENBQUU7OztXQUVoQix1QkFBYyxDQUFFOzs7V0FFaEIsa0JBQVMsQ0FBRTs7O1dBZFgsa0JBQWdCQyxNQUFoQixFQUF3QjtNQUNwQixPQUFPQSxNQUFNLFlBQVlaLCtDQUF6QjtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTDtBQUNBOztJQUVxQmE7Ozs7O0VBNkJqQixrQkFBWVYsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7SUFBQTs7SUFBQTs7SUFDdkIsMEJBQU1ELElBQU4sRUFBWUMsT0FBWjs7SUFFQSxNQUFLVSxVQUFMOztJQUh1QjtFQUkxQjs7OztTQWhDRCxlQUFzQjtNQUNsQixPQUFPO1FBQ0hDLFFBQVEsRUFBRTtVQUNOQyxJQUFJLEVBQUUsSUFEQTtVQUVOQyxnQkFBZ0IsRUFBRSxPQUZaO1VBR05DLFNBQVMsRUFBRSxLQUhMO1VBSU5DLE9BQU8sRUFBRSxDQUNMLE9BREssQ0FKSDtVQU9OQyxJQUFJLEVBQUU7WUFDRkMsRUFBRSxFQUFFO2NBQ0FDLEtBQUssRUFBRSxTQURQO2NBRUFDLElBQUksRUFBRSxRQUZOO2NBR0FDLElBQUksRUFBRSxPQUhOO2NBSUFDLEtBQUssRUFBRSxpREFKUDtjQUtBQyxVQUFVLEVBQUUsaUJBTFo7Y0FNQUMsU0FBUyxFQUFFLHFCQU5YO2NBT0FDLFdBQVcsRUFBRSxlQVBiO2NBUUFDLE1BQU0sRUFBRSxRQVJSO2NBU0FDLFFBQVEsRUFBRSxTQVRWO2NBVUFDLEtBQUssRUFBRSxZQVZQO2NBV0FDLElBQUksRUFBRTtZQVhOO1VBREY7UUFQQTtNQURQLENBQVA7SUF5Qkg7OztXQVFELHNCQUFhO01BQ1Q7SUFDSDs7O1dBRUQsdUJBQWM7TUFDVixLQUFLQyxLQUFMLEdBQWE7UUFDVEMsSUFBSSxFQUFFQyxDQUFDLENBQUMsZ0JBQUQ7TUFERSxDQUFiO0lBR0g7OztXQUVELHVCQUFjO01BQ1YsS0FBS0YsS0FBTCxDQUFXQyxJQUFYLENBQWdCRSxFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFBQyxLQUFLLEVBQUk7UUFDakNBLEtBQUssQ0FBQ0MsY0FBTjtRQUVBLElBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFDRSxLQUFLLENBQUNHLGFBQVAsQ0FBYjtRQUVBTCxDQUFDLENBQUNNLFFBQUYsQ0FBV0MsSUFBWCxDQUFnQjtVQUNaQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ssSUFBTixDQUFXLEtBQVgsQ0FETztVQUVaQyxJQUFJLEVBQUUsUUFGTTtVQUdaQyxJQUFJLEVBQUU7WUFDRkMsS0FBSyxFQUFFLEtBREw7WUFFRkMsU0FBUyxFQUFFLEtBRlQ7WUFHRkMsYUFBYSxFQUFFLElBSGI7WUFJRkMsZUFBZSxFQUFFLEtBSmY7WUFLRkMsVUFBVSxFQUFFLG9CQUFBZCxLQUFLLEVBQUk7Y0FDakJBLEtBQUssQ0FBQ2UsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxRQUFyQixDQUE4QixnQkFBOUI7WUFDSDtVQVBDO1FBSE0sQ0FBaEI7TUFhSCxDQWxCRDtJQW1CSDs7O1dBRUQsa0JBQVM7TUFDTG5CLENBQUMsQ0FBQ00sUUFBRixDQUFXMUIsUUFBWCxDQUFvQkssSUFBcEIsQ0FBeUJDLEVBQXpCLEdBQThCLEtBQUtqQixPQUFMLENBQWFXLFFBQWIsQ0FBc0JLLElBQXRCLENBQTJCQyxFQUF6RDtNQUNBYyxDQUFDLENBQUNNLFFBQUYsQ0FBVzFCLFFBQVgsQ0FBb0JDLElBQXBCLEdBQTJCLEtBQUtaLE9BQUwsQ0FBYVcsUUFBYixDQUFzQkMsSUFBakQ7TUFDQW1CLENBQUMsQ0FBQ00sUUFBRixDQUFXMUIsUUFBWCxDQUFvQkksT0FBcEIsR0FBOEIsS0FBS2YsT0FBTCxDQUFhVyxRQUFiLENBQXNCSSxPQUFwRDtNQUNBZ0IsQ0FBQyxDQUFDTSxRQUFGLENBQVcxQixRQUFYLENBQW9CRSxnQkFBcEIsR0FBdUMsS0FBS2IsT0FBTCxDQUFhVyxRQUFiLENBQXNCRSxnQkFBN0Q7TUFDQWtCLENBQUMsQ0FBQ00sUUFBRixDQUFXMUIsUUFBWCxDQUFvQkcsU0FBcEIsR0FBZ0MsS0FBS2QsT0FBTCxDQUFhVyxRQUFiLENBQXNCRyxTQUF0RDtJQUNIOzs7O0VBekVpQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h0QztBQUNBOztJQUVxQnNEOzs7OztFQUVqQix3QkFBWXBELElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0lBQUE7O0lBQUE7O0lBQ3ZCLDBCQUFNRCxJQUFOLEVBQVlDLE9BQVo7O0lBQ0EsTUFBS1UsVUFBTDs7SUFGdUI7RUFHMUI7Ozs7V0FFRCxzQkFBYTtNQUNUOztNQUNBLEtBQUswQyxjQUFMO0lBQ0g7OztXQUVELDBCQUFpQjtNQUViLElBQUlDLGFBQWEsR0FBR3RCLENBQUMsQ0FBQyxnRkFBRCxDQUFELENBQW9GdUIsUUFBcEYsQ0FBNkYsTUFBN0YsQ0FBcEI7TUFFQUQsYUFBYSxDQUFDckIsRUFBZCxDQUFpQixPQUFqQixFQUEwQixZQUFXO1FBQ2pDRCxDQUFDLENBQUMseUNBQUQsQ0FBRCxDQUE2Q3dCLE9BQTdDLENBQXFEO1VBQUVDLFNBQVMsRUFBRTtRQUFiLENBQXJELEVBQXNFLEdBQXRFO1FBQ0EsT0FBTyxLQUFQO01BQ0gsQ0FIRDtNQUtBekIsQ0FBQyxDQUFDMEIsTUFBRCxDQUFELENBQVVDLE1BQVYsQ0FBaUIsWUFBVztRQUM1QixJQUFJM0IsQ0FBQyxDQUFDMEIsTUFBRCxDQUFELENBQVVELFNBQVYsS0FBd0IsR0FBNUIsRUFBaUM7VUFDN0JILGFBQWEsQ0FBQ0gsUUFBZCxDQUF1QixjQUF2QjtRQUNILENBRkQsTUFFTztVQUNIRyxhQUFhLENBQUNNLFdBQWQsQ0FBMEIsY0FBMUI7UUFDSDtNQUNBLENBTkQ7O01BUUEsSUFBSU4sYUFBYSxDQUFDTyxRQUFkLENBQXVCLGNBQXZCLENBQUosRUFBNEM7UUFDeENQLGFBQWEsQ0FBQ00sV0FBZCxDQUEwQixjQUExQjtNQUNIO0lBQ0o7Ozs7RUFoQ3VDOUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNINUM7QUFDQTs7SUFFcUJnRTs7Ozs7RUFVakIsZ0JBQVk5RCxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtJQUFBOztJQUFBOztJQUN2QiwwQkFBTUQsSUFBTixFQUFZQyxPQUFaOztJQUVBLE1BQUtVLFVBQUw7O0lBSHVCO0VBSTFCOzs7O1NBYkQsZUFBc0I7TUFDbEIsT0FBTztRQUNIb0QsSUFBSSxFQUFFLENBREg7UUFFSEMsT0FBTyxFQUFFLEtBRk47UUFHSEMsU0FBUyxFQUFFLHNFQUhSO1FBSUhDLFNBQVMsRUFBRTtNQUpSLENBQVA7SUFNSDs7O1dBUUQsc0JBQWE7TUFDVDtJQUNIOzs7V0FFRCx1QkFBYztNQUNWLEtBQUtwQyxLQUFMLEdBQWEsRUFBYjtJQUNIOzs7V0FFRCx1QkFBYztNQUNWLEtBQUs5QixJQUFMLENBQVVpQyxFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLa0MsVUFBMUI7TUFDQSxLQUFLbkUsSUFBTCxDQUFVaUMsRUFBVixDQUFhLGNBQWIsRUFBNkIsS0FBS21DLGFBQWxDO01BQ0EsS0FBS3BFLElBQUwsQ0FBVWlDLEVBQVYsQ0FBYSxZQUFiLEVBQTJCLEtBQUtrQyxVQUFoQztJQUNIOzs7V0FFRCxrQkFBUztNQUNMLEtBQUtuRSxJQUFMLENBQVVxRSxLQUFWLENBQWdCLEtBQUtwRSxPQUFyQjtJQUNIOzs7V0FFRCxvQkFBV2lDLEtBQVgsRUFBa0JtQyxLQUFsQixFQUF5QjtNQUNyQixJQUFJQSxLQUFLLENBQUNwRSxPQUFOLENBQWMrRCxPQUFkLEtBQTBCLElBQTFCLElBQWtDSyxLQUFLLENBQUNDLFVBQU4sR0FBbUJELEtBQUssQ0FBQ3BFLE9BQU4sQ0FBY3NFLFlBQXZFLEVBQXFGO1FBQ2pGLElBQUlDLFFBQVEsR0FBR3hDLENBQUMsQ0FBQywrRUFDYix1Q0FEYSxJQUM4QnFDLEtBQUssQ0FBQ0ksWUFBTixHQUFxQixDQURuRCxJQUN3RCxTQUR4RCxHQUViLCtEQUZhLEdBR2IscUNBSGEsSUFHNEJKLEtBQUssQ0FBQ0ssV0FBTixLQUFzQixDQUhsRCxJQUd1RCxxQkFIeEQsQ0FBaEI7UUFLQUYsUUFBUSxDQUFDakIsUUFBVCxDQUFrQmMsS0FBSyxDQUFDTSxPQUF4QjtNQUNIO0lBQ0o7OztXQUVELHVCQUFjekMsS0FBZCxFQUFxQm1DLEtBQXJCLEVBQTRCSSxZQUE1QixFQUEwQ0csU0FBMUMsRUFBcUQ7TUFDakRQLEtBQUssQ0FBQ00sT0FBTixDQUFjRSxJQUFkLENBQW1CLHlCQUFuQixFQUE4Q0MsSUFBOUMsQ0FBbURDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixTQUFTLEdBQUdQLEtBQUssQ0FBQ3BFLE9BQU4sQ0FBY2dGLGNBQXJDLElBQXVELENBQTFHO0lBQ0g7Ozs7RUEvQytCbkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHBDO0FBQ0E7QUFDQTs7SUFFTW9GO0VBR0YsdUJBQWM7SUFBQTs7SUFDVixLQUFLQyxVQUFMO0lBQ0EsS0FBS0MsV0FBTDtJQUNBLEtBQUtDLHdCQUFMO0VBQ0gsRUFHRDs7Ozs7V0FDQSxzQkFBYTtNQUVULElBQUkzRSw0REFBSjtNQUVBLElBQUkwQyxtRUFBSixHQUpTLENBTVQ7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUFwQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1Cc0QsS0FBbkIsQ0FBeUIsWUFBWTtRQUNqQ3RELENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JtQixRQUFoQixDQUF5QixtQkFBekI7TUFDSCxDQUZEO01BR0FuQixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlzRCxLQUFaLENBQWtCLFlBQVc7UUFDekJ0RCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCNEIsV0FBaEIsQ0FBNEIsbUJBQTVCO01BQ0gsQ0FGRDtNQUdBNUIsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnNELEtBQW5CLENBQXlCLFlBQVk7UUFDakN0RCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCbUIsUUFBaEIsQ0FBeUIsbUJBQXpCO01BQ0gsQ0FGRDtJQUlILEVBR0Q7Ozs7V0FDQSx1QkFBYztNQUVWO01BQ0EsSUFBSXdCLE9BQU8sR0FBRzNDLENBQUMsQ0FBQyxTQUFELENBQWY7O01BQ0EsSUFBSTJDLE9BQU8sQ0FBQzVFLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7UUFDdEIsSUFBSStELDBEQUFKLENBQVdhLE9BQVgsRUFBb0I7VUFDaEJYLE9BQU8sRUFBRSxLQURPO1VBRWhCdUIsUUFBUSxFQUFFLElBRk07VUFHaEJoQixZQUFZLEVBQUUsQ0FIRTtVQUloQlUsY0FBYyxFQUFFLENBSkE7VUFLaEJPLGNBQWMsRUFBRTtRQUxBLENBQXBCO01BUUgsQ0FiUyxDQWVWOzs7TUFDQSxJQUFJQyxTQUFTLEdBQUd6RCxDQUFDLENBQUMsV0FBRCxDQUFqQjs7TUFDQSxJQUFJeUQsU0FBUyxDQUFDMUYsTUFBVixLQUFxQixDQUF6QixFQUE0QjtRQUN4QixJQUFJK0QsMERBQUosQ0FBVzJCLFNBQVgsRUFBc0I7VUFDbEJ6QixPQUFPLEVBQUUsS0FEUztVQUVsQnVCLFFBQVEsRUFBRSxJQUZRO1VBR2xCaEIsWUFBWSxFQUFFLENBSEk7VUFJbEJVLGNBQWMsRUFBRSxDQUpFO1VBS2xCUyxNQUFNLEVBQUUsSUFMVTtVQU1sQnpCLFNBQVMsRUFBRSx3RUFOTztVQU9sQkMsU0FBUyxFQUFFLHlFQVBPO1VBUWxCc0IsY0FBYyxFQUFFLElBUkU7VUFVbEJHLFVBQVUsRUFBRSxDQUVSO1lBQ0lDLFVBQVUsRUFBRSxHQURoQjtZQUVJQyxRQUFRLEVBQUU7Y0FDTnRCLFlBQVksRUFBRSxDQURSO2NBRU5tQixNQUFNLEVBQUU7WUFGRjtVQUZkLENBRlE7UUFWTSxDQUF0QjtNQXFCSDtJQUVKLEVBR0Q7Ozs7V0FDQSxvQ0FBMkI7TUFFdkI7O01BQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BRVE7TUFDQSxJQUFJSSxFQUFFLEdBQUdwQyxNQUFNLENBQUNxQyxXQUFQLEdBQXFCLElBQTlCLENBZHVCLENBZXZCOztNQUNBQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxNQUEzQyxZQUFzREwsRUFBdEQ7TUFDQSxJQUFJTSxjQUFjLEdBQUcxQyxNQUFNLENBQUMyQyxVQUE1QixDQWpCdUIsQ0FrQnZCOztNQUNBM0MsTUFBTSxDQUFDNEMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtRQUNwQztRQUNBLElBQUlGLGNBQWMsSUFBSTFDLE1BQU0sQ0FBQzJDLFVBQTdCLEVBQXlDO1VBQ3JDRCxjQUFjLEdBQUcxQyxNQUFNLENBQUMyQyxVQUF4Qjs7VUFDQSxJQUFJUCxHQUFFLEdBQUdwQyxNQUFNLENBQUNxQyxXQUFQLEdBQXFCLElBQTlCOztVQUNBQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxXQUEvQixDQUEyQyxNQUEzQyxZQUFzREwsR0FBdEQ7UUFDSDtNQUNKLENBUEQ7SUFRSDs7OztLQUtMOzs7QUFDQTlELENBQUMsQ0FBQyxZQUFNO0VBQ0osSUFBSWtELFdBQUo7QUFDSCxDQUZBLENBQUQ7Ozs7OztVQy9IQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL2xpZ2h0Ym94LmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9zY3JvbGx0b3RvcC1idG4uanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuXG4vL2V4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEVtaXR0ZXIge1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIC8vc3VwZXIoKTtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IGFyZ3NbMF07XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1sxXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgaWYgKENvbXBvbmVudC5pc2pRdWVyeShhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IGFyZ3NbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2RlZmF1bHRPcHRpb25zLCBhcmdzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpc2pRdWVyeShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIGpRdWVyeTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLl9jYWNoZU5vZGVzKCk7XG4gICAgICAgIHRoaXMuX2JpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5fcmVhZHkoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHt9XG5cbiAgICBfYmluZEV2ZW50cygpIHt9XG5cbiAgICBfcmVhZHkoKSB7fVxufSIsImltcG9ydCBcIkBmYW5jeWFwcHMvZmFuY3lib3hcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBsYW5nOiAncnUnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FZmZlY3Q6ICdzbGlkZScsXG4gICAgICAgICAgICAgICAgYmFja0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICdjbG9zZSdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgICAgICAgICAgcnU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENMT1NFOiAn0JfQsNC60YDRi9GC0YwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgTkVYVDogJ9CU0LDQu9GM0YjQtScsXG4gICAgICAgICAgICAgICAgICAgICAgICBQUkVWOiAn0J3QsNC30LDQtCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBFUlJPUjogJ9Cd0LUg0YPQtNCw0LXRgtGB0Y8g0LfQsNCz0YDRg9C30LjRgtGMLiA8YnIvPiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQv9C+0LfQtNC90LXQtS4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgUExBWV9TVEFSVDogJ9Cd0LDRh9Cw0YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RPUDogJ9Ce0YHRgtCw0L3QvtCy0LjRgtGMINGB0LvQsNC50LTRiNC+0YMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRlVMTF9TQ1JFRU46ICfQndCwINCy0LXRgdGMINGN0LrRgNCw0L0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgVEhVTUJTOiAn0J/RgNC10LLRjNGOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIERPV05MT0FEOiAn0KHQutCw0YfQsNGC0YwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgU0hBUkU6ICfQn9C+0LTQtdC70LjRgtGM0YHRjycsXG4gICAgICAgICAgICAgICAgICAgICAgICBaT09NOiAn0KPQstC10LvQuNGH0LjRgtGMJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Iocm9vdCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihyb290LCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSB7XG4gICAgICAgICAgICBsaW5rOiAkKCcuanMtbGluay1tb2RhbCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubm9kZXMubGluay5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oe1xuICAgICAgICAgICAgICAgIHNyYzogJGxpbmsuZGF0YSgnc3JjJyksXG4gICAgICAgICAgICAgICAgdHlwZTogJ2lubGluZScsXG4gICAgICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRXhpc3Rpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkVmZmVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUxvYWQ6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKCdmYW5jeWJveC1tb2RhbCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZWFkeSgpIHtcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5pMThuLnJ1ID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmkxOG4ucnU7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMubGFuZyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5sYW5nO1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJ1dHRvbnMgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMuYnV0dG9ucztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0ID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLnRyYW5zaXRpb25FZmZlY3Q7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuYmFja0ZvY3VzID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJhY2tGb2N1cztcbiAgICB9XG59IiwiLy8g0LrQvdC+0L/QutCwINC90LDQstC10YDRhVxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Ub3BCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5zZXRUb1RvcEJ1dHRvbigpO1xuICAgIH1cblxuICAgIHNldFRvVG9wQnV0dG9uKCkge1xuXG4gICAgICAgIHZhciAkc2Nyb2xsVG9wQnRuID0gJCgnPGEgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiI1wiIGlkPVwic2Nyb2xsLXRvcFwiIGNsYXNzPVwic2Nyb2xsdG90b3AtYnRuXCI+PGk+PC9pPjwvYT4nKS5hcHBlbmRUbygnYm9keScpO1xuXG4gICAgICAgICRzY3JvbGxUb3BCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCdodG1sOm5vdCg6YW5pbWF0ZWQpLGJvZHk6bm90KDphbmltYXRlZCknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwfSwgMzAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5hZGRDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvcEJ0bi5oYXNDbGFzcygndG9wLWJ0bi1zaG93JykpIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4ucmVtb3ZlQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBcInNsaWNrLWNhcm91c2VsXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldCBfZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb3dzOiAwLFxuICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyLXByZXZcIj48c3BhbiBjbGFzcz1cImljb24tbGVmdFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1uZXh0XCI+PHNwYW4gY2xhc3M9XCJpY29uLXJpZ2h0XCI+PC9zcGFuPjwvYnV0dG9uPidcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge307XG4gICAgfVxuXG4gICAgX2JpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMucm9vdC5vbignaW5pdCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYmVmb3JlQ2hhbmdlJywgdGhpcy5jaGFuZ2VDb3VudGVyKTtcbiAgICAgICAgdGhpcy5yb290Lm9uKCdicmVha3BvaW50JywgdGhpcy5hZGRDb3VudGVyKTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgIHRoaXMucm9vdC5zbGljayh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIGFkZENvdW50ZXIoZXZlbnQsIHNsaWNrKSB7XG4gICAgICAgIGlmIChzbGljay5vcHRpb25zLmNvdW50ZXIgPT09IHRydWUgJiYgc2xpY2suc2xpZGVDb3VudCA+IHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBsZXQgJGNvdW50ZXIgPSAkKCc8ZGl2IGNsYXNzPVwic2xpY2stY291bnRlciBzbGljay1jbG9uZWRcIj48ZGl2IGNsYXNzPVwic2xpY2stY291bnRlcl9faW5uZXJcIj4nICtcbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJzbGljay1jb3VudGVyX19jdXJyZW50XCI+JyArIChzbGljay5jdXJyZW50U2xpZGUgKyAxKSArICc8L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2RpdmlkZXJcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY291bnRcIj4nICsgKHNsaWNrLmdldERvdENvdW50KCkgKyAxKSArICc8L3NwYW4+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgICRjb3VudGVyLmFwcGVuZFRvKHNsaWNrLiRzbGlkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQ291bnRlcihldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICAgIHNsaWNrLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNvdW50ZXJfX2N1cnJlbnQnKS5odG1sKE1hdGguZmxvb3IobmV4dFNsaWRlIC8gc2xpY2sub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKyAxKTtcbiAgICB9XG59IiwiaW1wb3J0IFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xuaW1wb3J0IExpZ2h0Ym94IGZyb20gXCIuL2NvbXBvbmVudHMvbGlnaHRib3hcIjtcbmltcG9ydCBTY3JvbGxUb1RvcEJ0biBmcm9tIFwiLi9jb21wb25lbnRzL3Njcm9sbHRvdG9wLWJ0blwiO1xuXG5jbGFzcyBBcHBsaWNhdGlvbiB7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmluaXRDb21tb24oKTtcbiAgICAgICAgdGhpcy5pbml0U2xpZGVycygpO1xuICAgICAgICB0aGlzLmluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCgpO1xuICAgIH1cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40LhcbiAgICBpbml0Q29tbW9uKCkge1xuXG4gICAgICAgIG5ldyBMaWdodGJveCgpO1xuXG4gICAgICAgIG5ldyBTY3JvbGxUb1RvcEJ0bigpO1xuXG4gICAgICAgIC8vIC8vINCf0LvQsNCy0L3QsNGPINC/0YDQvtC60YDRg9GC0LrQsCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQv9C+INGP0LrQvtGA0Y5cbiAgICAgICAgLy8gY29uc3QgJHJvb3QgPSAkKCdodG1sLCBib2R5Jyk7XG4gICAgICAgIC8vICQoJyNtYWluLW1lbnUgYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAgICAgdmFyIGhyZWYgPSAkLmF0dHIodGhpcywgJ2hyZWYnKTtcbiAgICAgICAgLy8gICAgIGhyZWYgPSBocmVmLnN1YnN0cmluZygxLCBocmVmLmxlbmd0aCk7XG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGhyZWYpO1xuICAgICAgICAvLyAgICAgJHJvb3QuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgc2Nyb2xsVG9wOiAkKGhyZWYpLm9mZnNldCgpLnRvcFxuICAgICAgICAvLyAgICAgfSwgMTUwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaHJlZjtcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAkKCcuaGVhZGVyX19sb2dvJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLm1haW4tbWVudScpLmFkZENsYXNzKCdtYWluLW1lbnUtLWFjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgICQoJy5jbG9zZScpLmNsaWNrKGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgJCgnLm1haW4tbWVudScpLnJlbW92ZUNsYXNzKCdtYWluLW1lbnUtLWFjdGl2ZScpXG4gICAgICAgIH0pXG4gICAgICAgICQoJy5mb290ZXJfX21lbnUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcubWFpbi1tZW51JykuYWRkQ2xhc3MoJ21haW4tbWVudS0tYWN0aXZlJylcbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LLRgdC10YUg0YHQu9Cw0LnQtNC10YDQvtCyXG4gICAgaW5pdFNsaWRlcnMoKSB7XG5cbiAgICAgICAgLy8gU2xpZGVyIGluIGNvbnRlbnRcbiAgICAgICAgbGV0ICRzbGlkZXIgPSAkKCcuc2xpZGVyJyk7XG4gICAgICAgIGlmICgkc2xpZGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkc2xpZGVyLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhcm91c2VsIGluIGNvbnRlbnRcbiAgICAgICAgbGV0ICRjYXJvdXNlbCA9ICQoJy5jYXJvdXNlbCcpO1xuICAgICAgICBpZiAoJGNhcm91c2VsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbmV3IFNsaWRlcigkY2Fyb3VzZWwsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvLyAxMDB2aCDQtNC70Y8g0LzQvtCx0LjQu9GM0L3QuNC60L7QslxuICAgIGluaXRNb2JpbGVWaWV3UG9ydEhlaWdodCgpIHtcblxuICAgICAgICAvLyBodHRwczovL2Nzcy10cmlja3MuY29tL3RoZS10cmljay10by12aWV3cG9ydC11bml0cy1vbi1tb2JpbGUvXG4gICAgICAgIC8qXG4gICAgICAgINCf0YDQvNC40LXRgCDQutCw0Log0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGN0YLRgyDRhNC40YfRgyDQsiDRgdGC0LjQu9GP0YVcbiAgICAgICAgLm1vZHVsZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoOyAvL1VzZSB2aCBhcyBhIGZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEN1c3RvbSBQcm9wZXJ0aWVzXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdmgsIDF2aCkgKiAxMDApO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YCk7XG4gICAgICAgIGxldCBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAvLyBXZSBsaXN0ZW4gdG8gdGhlIHJlc2l6ZSBldmVudCAo0LAg0YDQtdGB0LDQudC3INCyINC80L7QsdC40LvQutCw0YUg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDQuCDQv9GA0Lgg0YHQutGA0L7Qu9C1LCDQutC+0LPQtNCwINC40YHRh9C10LfQsNC10YIg0YHRgtGA0L7QutCwINCy0LLQvtC00LAg0LDQtNGA0LXRgdCwINCyINCx0YDQsNGD0LfQtdGA0LUpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBXZSBleGVjdXRlIHRoZSBzYW1lIHNjcmlwdCBhcyBiZWZvcmVcbiAgICAgICAgICAgIGlmIChkb2N1bWVudF93aWR0aCAhPSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50X3dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuXG4vLyDQt9Cw0L/Rg9GB0Log0L/RgNC40LvQvtC20LXQvdC40Y9cbiQoKCkgPT4ge1xuICAgIG5ldyBBcHBsaWNhdGlvbigpO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5raHRtbF9zdGFydFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy9tYWluLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsialF1ZXJ5IiwiQ29tcG9uZW50IiwibGVuZ3RoIiwicm9vdCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJfZGVmYXVsdE9wdGlvbnMiLCJpc2pRdWVyeSIsIl9jYWNoZU5vZGVzIiwiX2JpbmRFdmVudHMiLCJfcmVhZHkiLCJvYmplY3QiLCJMaWdodGJveCIsImluaXRpYWxpemUiLCJkZWZhdWx0cyIsImxhbmciLCJ0cmFuc2l0aW9uRWZmZWN0IiwiYmFja0ZvY3VzIiwiYnV0dG9ucyIsImkxOG4iLCJydSIsIkNMT1NFIiwiTkVYVCIsIlBSRVYiLCJFUlJPUiIsIlBMQVlfU1RBUlQiLCJQTEFZX1NUT1AiLCJGVUxMX1NDUkVFTiIsIlRIVU1CUyIsIkRPV05MT0FEIiwiU0hBUkUiLCJaT09NIiwibm9kZXMiLCJsaW5rIiwiJCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRsaW5rIiwiY3VycmVudFRhcmdldCIsImZhbmN5Ym94Iiwib3BlbiIsInNyYyIsImRhdGEiLCJ0eXBlIiwib3B0cyIsInRvdWNoIiwiYXV0b0ZvY3VzIiwiY2xvc2VFeGlzdGluZyIsImFuaW1hdGlvbkVmZmVjdCIsImJlZm9yZUxvYWQiLCJjdXJyZW50IiwiJHNsaWRlIiwiYWRkQ2xhc3MiLCJTY3JvbGxUb1RvcEJ0biIsInNldFRvVG9wQnV0dG9uIiwiJHNjcm9sbFRvcEJ0biIsImFwcGVuZFRvIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJTbGlkZXIiLCJyb3dzIiwiY291bnRlciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImFkZENvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwic2xpY2siLCJzbGlkZUNvdW50Iiwic2xpZGVzVG9TaG93IiwiJGNvdW50ZXIiLCJjdXJyZW50U2xpZGUiLCJnZXREb3RDb3VudCIsIiRzbGlkZXIiLCJuZXh0U2xpZGUiLCJmaW5kIiwiaHRtbCIsIk1hdGgiLCJmbG9vciIsInNsaWRlc1RvU2Nyb2xsIiwiQXBwbGljYXRpb24iLCJpbml0Q29tbW9uIiwiaW5pdFNsaWRlcnMiLCJpbml0TW9iaWxlVmlld1BvcnRIZWlnaHQiLCJjbGljayIsImluZmluaXRlIiwiYWRhcHRpdmVIZWlnaHQiLCIkY2Fyb3VzZWwiLCJhcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidmgiLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImRvY3VtZW50X3dpZHRoIiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9