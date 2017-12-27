/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/**
 * jquery.baraja.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	// global
	var Modernizr = window.Modernizr;

	jQuery.fn.reverse = [].reverse;

	$.Baraja = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	// the options
	$.Baraja.defaults = {
		// if we want to specify a selector that triggers the next() function. example: '#baraja-nav-next'
		nextEl : '',
		// if we want to specify a selector that triggers the previous() function
		prevEl : '',
		// default transition speed
		speed : 300,
		// default transition easing
		easing : 'ease-in-out'
	};

	$.Baraja.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Baraja.defaults, options );

			var transEndEventNames = {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition' : 'transitionend',
				'OTransition' : 'oTransitionEnd',
				'msTransition' : 'MSTransitionEnd',
				'transition' : 'transitionend'
			};
			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ];

			this._setDefaultFanSettings();

			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			if( this.itemsCount === 0 ) {
				return false;
			}
			// support for CSS Transitions
			this.supportTransitions = Modernizr.csstransitions;
			// opened/closed deck
			this.closed = true;
			// lowest value for the z-index given to the items
			this.itemZIndexMin = 1000;
			// sets the item's z-index value
			this._setStack();
			// initialize some events
			this._initEvents();

		},
		_setDefaultFanSettings : function() {

			this.fanSettings = {
				// speed for opening/closing
				speed : 500,
				// easing for opening/closing
				easing : 'ease-out',
				// difference/range of possible angles that the items will have
				// example: with range:90 and center:false the first item
				// will have 0deg and the last one 90deg;
				// if center:true, then the first one will have 45deg
				// and the last one -45deg; in both cases the difference is 90deg
				range : 90,
				// this defines the position of the first item 
				// (to the right, to the left)
				// and its angle (clockwise / counterclockwise)
				direction : 'right',
				// transform origin:
				// you can also pass a minX and maxX, meaning the left value 
				// will vary between minX and maxX 
				origin : { x : 25, y : 100 },
				// additional translation of each item
				translation : 0,
				// if the cards should be centered after the transform 
				// is applied
				center : true,
				// add a random factor to the final transform
				scatter : false
			};

		},
		_validateDefaultFanSettings : function( settings ) {

			if( !settings.origin ) {
				settings.origin = this.fanSettings.origin;
			}
			else {
				settings.origin.x = settings.origin.x || this.fanSettings.origin.x;
				settings.origin.y = settings.origin.y || this.fanSettings.origin.y;
			}
			settings.speed = settings.speed || this.fanSettings.speed;
			settings.easing = settings.easing || this.fanSettings.easing;
			settings.direction = settings.direction || this.fanSettings.direction;
			settings.range = settings.range || this.fanSettings.range;
			settings.translation = settings.translation || this.fanSettings.translation;
			if( settings.center == undefined ) {
				settings.center = this.fanSettings.center
			}
			if( settings.scatter == undefined ) {
				settings.scatter = this.fanSettings.scatter
			}
			
			this.direction = settings.direction;

			return settings;

		},
		_setStack : function( $items ) {

			var self = this;
			$items = $items || this.$items;

			$items.each( function( i ) {

				$( this ).css( 'z-index', self.itemZIndexMin + self.itemsCount - 1 - i );

			} );

		},
		_updateStack : function( $el, dir ) {

			var currZIndex = Number( $el.css( 'z-index' ) ),
				newZIndex = dir === 'next' ? this.itemZIndexMin - 1 : this.itemZIndexMin + this.itemsCount,
				extra = dir === 'next' ? '+=1' : '-=1';
			
			$el.css( 'z-index', newZIndex );

			this.$items.filter( function() {

				var zIdx = Number( $( this ).css( 'z-index' ) ),
					cond = dir === 'next' ? zIdx < currZIndex : zIdx > currZIndex
				
				return cond;

			} ).css( 'z-index', extra );

		},
		_initEvents : function() {

			var self = this;

			if( this.options.nextEl !== '' ) {

				$( this.options.nextEl ).on( 'click.baraja', function() {

					self._navigate( 'next' );
					return false;

				} );

			}

			if( this.options.prevEl !== '' ) {

				$( this.options.prevEl ).on( 'click.baraja', function() {

					self._navigate( 'prev' );
					return false;

				} );

			}

			this.$el.on( 'click.baraja', 'li', function() {

				if( !self.isAnimating ) {

					self._move2front( $( this ) );

				}

			} );

		},
		_resetTransition : function( $el ) {

			$el.css( {
				'-webkit-transition' : 'none',
				'-moz-transition' : 'none',
				'-ms-transition' : 'none',
				'-o-transition' : 'none',
				'transition' : 'none'
			} );

		},
		_setOrigin : function( $el, x, y ) {

			$el.css( 'transform-origin' , x + '% ' + y + '%' );

		},
		_setTransition : function( $el, prop, speed, easing, delay ) {

			if( !this.supportTransitions ) {
				return false;
			}
			if( !prop ) {
				prop = 'all';
			}
			if( !speed ) {
				speed = this.options.speed;
			}
			if( !easing ) {
				easing = this.options.easing;
			}
			if( !delay ) {
				delay = 0;
			}

			var styleCSS = '';
			
			prop === 'transform' ?
				styleCSS = {
					'-webkit-transition' : '-webkit-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'-moz-transition' : '-moz-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'-ms-transition' : '-ms-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'-o-transition' : '-o-transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'transition' : 'transform ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
				} :
				styleCSS = {
					'-webkit-transition' : prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'-moz-transition' : prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'-ms-transition' : prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'-o-transition' : prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms',
					'transition' : prop + ' ' + speed + 'ms ' + easing + ' ' + delay + 'ms'
				}

			$el.css( styleCSS );

		},
		_applyTransition : function( $el, styleCSS, fncomplete, force ) {

			if( this.supportTransitions ) {

				if( fncomplete ) {

					$el.on( this.transEndEventName, fncomplete );

					if( force ) {
						fncomplete.call();
					}

				}

				setTimeout( function() { $el.css( styleCSS ); }, 25 );

			}
			else {

				$el.css( styleCSS );

				if( fncomplete ) {

					fncomplete.call();
					
				}

			}

		},
		_navigate : function( dir ) {

			this.closed = false;

			var self = this, 
				extra = 15,
				cond = dir === 'next' ? self.itemZIndexMin + self.itemsCount - 1 : self.itemZIndexMin,
				$item = this.$items.filter( function() {
					
					return Number( $( this ).css( 'z-index' ) ) === cond;

				} ),
				translation = dir === 'next' ? $item.outerWidth( true ) + extra : $item.outerWidth( true ) * -1 - extra,
				rotation = dir === 'next' ? 5 : 5 * -1;
				
			this._setTransition( $item, 'transform', this.options.speed, this.options.easing );

			this._applyTransition( $item, { transform : 'translate(' + translation + 'px) rotate(' + rotation + 'deg)' }, function() {

				$item.off( self.transEndEventName );
				self._updateStack( $item, dir );

				self._applyTransition( $item, { transform : 'translate(0px) rotate(0deg)' }, function() {
					
					$item.off( self.transEndEventName );
					self.isAnimating = false;
					self.closed = true;

				} );

			} );

		},
		_move2front : function( $item ) {

			this.isAnimating = true;

			var self = this,
				isTop = Number( $item.css( 'z-index' ) ) === this.itemZIndexMin + this.itemsCount - 1,
				callback = isTop ? function() { self.isAnimating = false; } : function() { return false; },
				$item = isTop ? null : $item;

			// if it's the one with higher z-index, just close the baraja
			if( !this.closed ) {

				this._close( callback, $item );

			}
			else {

				this._fan();

			}

			if( isTop ) {
				return false;
			}

			this._resetTransition( $item );
			this._setOrigin( $item, 50, 50 );

			$item.css( {
				opacity : 0,
				transform : 'scale(2) translate(100px) rotate(20deg)'
			} );

			this._updateStack( $item, 'prev' );

			setTimeout( function() {

				self._setTransition( $item, 'all', self.options.speed, 'ease-in' );
				self._applyTransition( $item, { transform : 'none', opacity : 1 }, function() {

					$item.off( self.transEndEventName );
					self.isAnimating = false;

				} );

			}, this.options.speed / 2 );

		},
		_close : function( callback, $item ) {

			var self = this,
				$items = self.$items,
				force = this.closed ? true : false;

			if( $item ) {
				$items = $items.not( $item );
			}

			this._applyTransition( $items, { transform : 'none' }, function() {
				
				self.closed = true;
				$items.off( self.transEndEventName );
				self._resetTransition( $items );
				setTimeout(function() {
					
					self._setOrigin( $items, 50, 50 );
					
					if( callback ) {
						callback.call();
					}

				}, 25);

			}, force );

		},
		_fan : function( settings ) {

			var self = this;

			this.closed = false;

			settings = this._validateDefaultFanSettings( settings || {} );
			
			// set transform origins
			// if minX and maxX are passed:
			if( settings.origin.minX && settings.origin.maxX ) {

				var max = settings.origin.maxX, min = settings.origin.minX,
					stepOrigin = ( max - min ) / this.itemsCount;

				this.$items.each( function( i ) {

					var $el = $( this ),
						pos = self.itemsCount - 1 - ( Number( $el.css( 'z-index' ) ) - self.itemZIndexMin ),
						originX = pos * ( max - min + stepOrigin ) / self.itemsCount + min;

					if( settings.direction === 'left' ) {
								
						originX = max + min - originX;

					}

					self._setOrigin( $( this ), originX, settings.origin.y );

				} );
			
			}
			else {

				this._setOrigin( this.$items, settings.origin.x , settings.origin.y );

			}

			this._setTransition( this.$items, 'transform', settings.speed, settings.easing );

			var stepAngle = settings.range / ( this.itemsCount - 1 ),
				stepTranslation = settings.translation / ( this.itemsCount - 1 ),
				cnt = 0;
			
			this.$items.each( function( i ) {

				var $el = $( this ),
					pos = self.itemsCount - 1 - ( Number( $el.css( 'z-index' ) ) - self.itemZIndexMin ),
					val = settings.center ? settings.range / 2 : settings.range,
					angle = val - stepAngle * pos,
					position = stepTranslation * ( self.itemsCount - pos - 1 );

				if( settings.direction === 'left' ) {
					
					angle *= -1;
					position *= -1;

				}

				if( settings.scatter ) {
					
					var extraAngle = Math.floor( Math.random() * stepAngle ),
						extraPosition = Math.floor( Math.random() * stepTranslation ) ;
					
					// not for the first item..
					if( pos !== self.itemsCount - 1 ) {

						angle = settings.direction === 'left' ? angle + extraAngle : angle - extraAngle;
						position = settings.direction === 'left' ? position - extraPosition : position + extraPosition;

					}

				}

				// save..
				$el.data( { translation : position, rotation : angle } );

				self._applyTransition( $el, { transform : 'translate(' + position + 'px) rotate(' + angle + 'deg)' }, function() {

					++cnt;
					$el.off( self.transEndEventName );
					
					if( cnt === self.itemsCount - 1 ) {
						self.isAnimating = false;
					}

				} );

			} );

		},
		// adds new elements to the deck
		_add : function( $elems ) {

			var self = this, 
				newElemsCount = $elems.length, cnt = 0;

			$elems.css( 'opacity', 0 ).appendTo( this.$el );

			// reset
			this.$items = this.$el.children( 'li' );
			this.itemsCount = this.$items.length;
			
			// set z-indexes
			this._setStack( $elems );
			
			// animate new items
			$elems.css( 'transform', 'scale(1.8) translate(200px) rotate(15deg)' ).reverse().each( function( i ) {

				var $el = $( this );

				self._setTransition( $el, 'all', 500, 'ease-out', i * 200 );
				self._applyTransition( $el, { transform : 'none', opacity : 1 }, function() {

					++cnt;
					
					$el.off( self.transEndEventName );
					self._resetTransition( $el );

					if( cnt === newElemsCount ) {
						self.isAnimating = false;
					}

				} );

			} );

		},
		_allowAction : function() {

			return this.itemsCount > 1;

		},
		_prepare : function( callback ) {

			var self = this;
			
			if( !this.closed ) {

				this._close( function() {

					callback.call();

				} );

			}
			else {

				callback.call();

			}

		},
		_dispatch : function( action, args ) {

			var self = this;

			if( ( ( action === this._fan || action === this._navigate ) && !this._allowAction() ) || this.isAnimating ) {
				return false;
			}

			this.isAnimating = true;
			
			this._prepare( function() {

				action.call( self, args );

			} );

		},
		// public method: closes the deck
		close : function( settings ) {

			if( this.isAnimating ) {
				return false;
			}
			this._close();

		},
		// public method: shows next item
		next : function() {

			this._dispatch( this._navigate, 'next' );

		},
		// public method: shows previous item
		previous : function() {

			this._dispatch( this._navigate, 'prev' );

		},
		// public method: opens the deck
		fan : function( settings ) {

			this._dispatch( this._fan, settings );

		},
		// public method: adds new elements
		add : function ( $elems ) {

			this._dispatch( this._add, $elems );

		},
		update: function(el, dir){
			var self = this;
			var currZIndex = Number(el.css('z-index')),
			stack = this.$items,
			setZindex = 1002;
			var item = $(stack).filter(function(){
				return Number($(this).css('z-index')) === setZindex;
			})
			self._setTransition( item, 'transform', this.options.speed, this.options.easing );
			self._applyTransition( item, { transform : 'translate(650px) rotate(5deg)' }, function() {
			 	item.off( self.transEndEventName );
				self._applyTransition( item, { transform : 'translate(0px) rotate(0deg)' }, function() {
					
					item.off( self.transEndEventName );
					self.isAnimating = false;
					self.closed = true;
				} );
				item.css('z-index', currZIndex);
				el.css('z-index', setZindex); 	
			 })
		}
	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.baraja = function( options ) {

		var instance = $.data( this, 'baraja' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on baraja prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for baraja instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'baraja', new $.Baraja( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );