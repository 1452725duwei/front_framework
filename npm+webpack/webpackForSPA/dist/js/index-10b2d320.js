webpackJsonp([8,7],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {

	// reference css
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bootstrapcss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(1);



	var pageDatas = {
	    params: {}, // params
	    defaultRoute: 'home' // default Route
	};

	function initMenu() {
	    /// <summary>
	    /// init menu
	    /// </summary>

	    var modName = window.location.href.split('#')[1];

	    modName = modName || pageDatas.defaultRoute;


	    $("ul[class=sub-menu] li a").each(function (e) {
	        if ('#' + modName === $(this).attr('href')) {
	            $(this).addClass("active");
	            $(this).parent().parent().show(300);
	        }
	    })

	    loadHtml(modName);
	}

	function bindMenu() {
	    /// <summary>
	    /// bind menu
	    /// </summary>

	    $(document).on('click', '.sidebar .nav .has-sub', function (e) {
	        e.stopPropagation();

	        $(this).children(".sub-menu").toggle(300);
	    })


	    $("ul[class=sub-menu] li a").on('click', function (e) {
	        e.stopPropagation();

	        if ($(this).hasClass("active")) { return false; }

	        $("ul[class=sub-menu] li a").removeClass("active");
	        $(this).addClass("active");

	        var modName = $(this).attr('href');
	        modName = modName.split('#')[1];

	        loadHtml(modName);
	    });

	}

	function loadHtml(modName) {
	    /// <summary>
	    /// load html
	    /// </summary>
	    /// <param name="modName" type="type">modName</param>

	    pageDatas.params = null;



	    var htmlPath = './html/'+modName+'.html';
	    var jsPath = './'+modName;

	    $.get(htmlPath, [], function (html) {
	        $("#container").html(html);
	        loadJs(jsPath);
	    });
	}


	function loadJs(jsPath) {
	    /// <summary>
	    /// load js mod
	    /// </summary>
	    /// <param name="jsPath" type="type">js path</param>

	    var currentMod;
	    if (jsPath === './home') {
	        __webpack_require__.e/* nsure */(6, function (require) {
	            currentMod = __webpack_require__(2);
	            currentMod.init();
	        });
	    }
	    else if (jsPath === './hrm') {
	        __webpack_require__.e/* nsure */(5, function (require) {
	            currentMod = __webpack_require__(3);
	            currentMod.init(pageDatas.params);
	        });
	    }
	    else if (jsPath === './menu1') {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            currentMod = __webpack_require__(4);
	            currentMod.init(pageDatas.params);
	        });
	    }
	    else if (jsPath === './menu2') {
	        __webpack_require__.e/* nsure */(3, function (require) {
	            currentMod = __webpack_require__(5);
	            currentMod.init(pageDatas.params);
	        });
	    } 
	    else if (jsPath === './menu3') {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            currentMod = __webpack_require__(6);
	            currentMod.init(pageDatas.params);
	        });
	    }
	    else if (jsPath === './menu5') {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            currentMod = __webpack_require__(7);
	            currentMod.init(pageDatas.params);
	        });
	    }
	    else if (jsPath === './menu6') {
	        __webpack_require__.e/* nsure */(0, function (require) {
	            currentMod = __webpack_require__(8);
	            currentMod.init(pageDatas.params);
	        });
	    }
	    else {
	        if (true) {
	            console.log('no request mod');
	        }
	    }
	}

	function initialize() {
	    initMenu();

	    bindMenu(); 
	}

	$(function () {
	    initialize();
	})


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);