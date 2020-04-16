$(function() {
  $('#download-bg').click(function() {
    $('#download-bg').hide();
  });

  $('#download-info').click(function(e) {
    e.stopPropagation();
  });

  $('.login-user .down').click(function() {
    $('#login-user-wrap').show();
  });
  $(document).click(function(e) {
    var target = $(e.target);
    if(!target.is($('.login-user .down'))) {
      $('#login-user-wrap').hide();
    }
  });

  $('#language').click(function() {
    $('#login-user-wrap').hide();
    $('#language-wrap').show();
  });

  $("#page-content").click(function() {
    $('#language-wrap').hide();
  });

  $(".top").click(function() {
    $('#language-wrap').hide();
  });

  $('#language').click(function(e) {
    e.stopPropagation();
  });

  $(".language-change").click(function() {
    $('#language-wrap').hide();
  });

  $("#search").click(function() {
    $('#search-form').show();
  });

  $('.language-list').click(function(e) {
    e.stopPropagation();
  });

  $(".search-button").click(function() {
    $('#search-form').submit();
  });
  $(".search-close").click(function(e) {
    $('#search-form').hide();
    e.stopPropagation();
  });

  $("#top-menu-icon").click(function() {
    $('.top-menu-bg').show();
  });

  $("#top-menu-close-bg").click(function() {
    $('.top-menu-bg').hide();
  });

  $("#top-menu-contact").click(function() {
    $('.top-menu-bg').hide();
  });
  $('.custom-checkbox').click(function() {
    if($(this).hasClass('checked')) {
      $(this).removeClass('checked');
      $(this).find("input[type='checkbox']").prop('checked', false);
    } else {
      $(this).addClass('checked');
      $(this).find("input[type='checkbox']").prop('checked', true);
    }
  });

  $("#language-wrap .language-item").click(function() {
    var link = $(this).attr("data-link");
    var cookie_name = "MANGATOON_WEBSITE_LANGUAGE";
    var language_code = $(this).attr("data-language-code");
    setCookie(cookie_name, language_code, 365);
    window.location.href = link;
  })

  var setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  var getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if(c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  $("#id-novel-competition").hover(function() { // ้ผ ๆ ็งปๅจไบไปถ
    $(".novel-competition-wrapper").show();
  },function() {
    $(".novel-competition-wrapper").hide();
  });

});

function htmlEncode(html) {
  return $("<div>").text(html).html();
};

function htmlDecode(encodedHtml) {
  return $("<div>").html(encodedHtml).text();
};


/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-webpalpha-webpanimation-setclasses !*/
!function(A,n,e){function a(A,n){return typeof A===n}function o(){var A,n,e,o,i,t,r;for(var f in l)if(l.hasOwnProperty(f)){if(A=[],n=l[f],n.name&&(A.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(e=0;e<n.options.aliases.length;e++)A.push(n.options.aliases[e].toLowerCase());for(o=a(n.fn,"function")?n.fn():n.fn,i=0;i<A.length;i++)t=A[i],r=t.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),s.push((o?"":"no-")+r.join("-"))}}function i(A){var n=c.className,e=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+e+"no-js(\\s|$)");n=n.replace(a,"$1"+e+"js$2")}Modernizr._config.enableClasses&&(n+=" "+e+A.join(" "+e),u?c.className.baseVal=n:c.className=n)}function t(A,n){if("object"==typeof A)for(var e in A)f(A,e)&&t(e,A[e]);else{A=A.toLowerCase();var a=A.split("."),o=Modernizr[a[0]];if(2==a.length&&(o=o[a[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==a.length?Modernizr[a[0]]=n:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=n),i([(n&&0!=n?"":"no-")+a.join("-")]),Modernizr._trigger(A,n)}return Modernizr}var s=[],l=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,n){var e=this;setTimeout(function(){n(e[A])},0)},addTest:function(A,n,e){l.push({name:A,fn:n,options:e})},addAsyncTest:function(A){l.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=r,Modernizr=new Modernizr;var f,c=n.documentElement,u="svg"===c.nodeName.toLowerCase();!function(){var A={}.hasOwnProperty;f=a(A,"undefined")||a(A.call,"undefined")?function(A,n){return n in A&&a(A.constructor.prototype[n],"undefined")}:function(n,e){return A.call(n,e)}}(),r._l={},r.on=function(A,n){this._l[A]||(this._l[A]=[]),this._l[A].push(n),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},r._trigger=function(A,n){if(this._l[A]){var e=this._l[A];setTimeout(function(){var A,a;for(A=0;A<e.length;A++)(a=e[A])(n)},0),delete this._l[A]}},Modernizr._q.push(function(){r.addTest=t}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){t("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){t("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),Modernizr.addAsyncTest(function(){function A(A,n,e){function a(n){var a=n&&"load"===n.type?1==o.width:!1,i="webp"===A;t(A,i&&a?new Boolean(a):a),e&&e(n)}var o=new Image;o.onerror=a,o.onload=a,o.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],e=n.shift();A(e.name,e.uri,function(e){if(e&&"load"===e.type)for(var a=0;a<n.length;a++)A(n[a].name,n[a].uri)})}),Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){t("webpanimation",!1,{aliases:["webp-animation"]})},A.onload=function(){t("webpanimation",1==A.width,{aliases:["webp-animation"]})},A.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),o(),i(s),delete r.addTest,delete r.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();A.Modernizr=Modernizr}(window,document);
