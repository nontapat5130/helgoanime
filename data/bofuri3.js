$(document).ready( function(){
	//colorbox
	var ua = checkAgent();
	if(ua == "smp" || ua == "tab"){
		var vw = $(window).width();

	}else if(ua == "pc"){

	}
	//hide BD
	//$(".global-navi > ul > li:eq(7)").hide("cs");
	//$(".footer-navi > ul > li:eq(7)").hide("cs");
	//non-link SPECIAL
	//$(".global-navi > ul > li:eq(9)").addClass("cs");
	//$(".footer-navi > ul > li:eq(9)").addClass("cs");

	pgTopBtnInit();
	smoothScrollInit();
	cb_self_init();
	spMenuInit();
	
	//ページラベル
	$('.atc-title span').children().andSelf().contents().each(function() {
	    if (this.nodeType == 3) {
	        $(this).replaceWith($(this).text().replace(/(\w)/g, "<span class='char'>$&</span>"));
	    }
	});

	//マウスフォロワー
	var
	follower = $(".mouse-follower"),
	fWidth = ($(window).width() / 1500) * 15 * 2, //フォロワーの大きさ
	mouseX = 0, //マウスのX座標
	mouseY = 0 //マウスのY座標
	crtClass = "";
	//マウス座標を取得
	$(document).on("mousemove", function(e) {
	    mouseX = e.pageX;
	    mouseY = e.pageY;
		//console.log("mx:"+mouseX+" my:"+mouseY);
		followerX = mouseX - (fWidth / 2);
		followerY = mouseY - (fWidth / 2);
		follower.css({"left":followerX ,"top":followerY });
		//console.log("fx:"+follower.css("left")+" fy:"+follower.css("top"));
	});
	$("a").on({
	  "mouseenter": function() {
		if($(this).hasClass('flw-no')){
			crtClass = "flw-no";
			follower.addClass(crtClass);
		}
		if($(this).hasClass('flw-1')){
			crtClass = "flw-1";
			follower.addClass(crtClass);
		}
		if($(this).hasClass('flw-2')){
			crtClass = "flw-2";
			follower.addClass(crtClass);
		}
		if($(this).hasClass('flw-3')){
			crtClass = "flw-3";
			follower.addClass(crtClass);
		}
		if($(this).hasClass('flw-4')){
			crtClass = "flw-4";
			follower.addClass(crtClass);
		}
	    follower.addClass("is-active");
		//console.log(crtClass);
	  },
	  "mouseleave": function() {
		if(crtClass.length){
			follower.removeClass(crtClass);
			crtClass = "";
		}
	    follower.removeClass("is-active");
		//console.log(crtClass);
	  }
	});
	// インビューアクション
	$('.inview.iv-ta').wrapInner( '<span></span>' );
	$('.inview.iv-img').wrapInner( '<span></span>' );
	initInview();
});
$(window).load(function() {
	//scrlMenu();
});
/* ◆inview ------------------------------ */
function initInview(){
	$('.inview').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		//console.log(isInView);
		if(isInView){
			$(this).addClass("inview-start");
		}
		else{
			//$(this).removeClass("inview-start");
		}
	});
}
/* ◆シンプルな画像パララクス ------------------------------ */
function pllxEyecatch(trg,container){
	var scrollPosi = 0;
	var jqvh = $(window).innerHeight();
	var vish = $(trg).height();
	var cnth = $(container).height();
	var cnty = $(container).offset().top;
	var lxx_st = cnty - jqvh;
	if( jqvh > cnty ){ lxx_st = 0; };
	var lxx_ed = cnty + cnth;
	var dy = vish - cnth;
	//console.log("jqvh:"+jqvh+"/vish:"+vish+"/cnth:"+cnth+"/cnty:"+cnty);

	$(window).scroll(function(){
		scrollPosi = $(document).scrollTop();
		if( scrollPosi >= lxx_st && scrollPosi < lxx_ed ){
			var vy = (lxx_st - scrollPosi)*(dy / (jqvh + cnth));
			//$(trg).css('top', -dy - vy );逆方向
			$(trg).css('top', 0 + vy );
		}
	});
}
/* ◆背景に合わせてメニュー色を変える ------------------------------ */
function scrlMenu(arg1,arg2,arg3,arg4,arg5,arg6){
	var scrollPosi = 0;
	var area1;
	var area2;
	var area3;
	var area4;
	var area5;
	var area6;
	//console.log("min:"+minScrollValue+"/max:"+maxScrollValue);
	$(window).on("scroll load", function () {
		scrollPosi = $(document).scrollTop();

		if( arg1 ){
		 area1 = $(arg1).height() + $(arg1).offset().top; //console.log("area="+area1+"/pos="+scrollPosi);
		 if( scrollPosi <= area1 ){ $('.global-navi .global-sub-navi li').eq(0).addClass("crt"); }else{ $('.global-navi .global-sub-navi li').eq(0).removeClass("crt");}
		}
		if( arg2 ){
		 area2 = $(arg2).height() + $(arg2).offset().top; //console.log("area="+area2+"/pos="+scrollPosi);
		 if( scrollPosi <= area2 && scrollPosi > area1 ){ $('.global-navi .global-sub-navi li').eq(1).addClass("crt"); }else{ $('.global-navi .global-sub-navi li').eq(1).removeClass("crt");}
		}
		if( arg3 ){
		 area3 = $(arg3).height() + $(arg3).offset().top; //console.log("area="+area3+"/pos="+scrollPosi);
		 if( scrollPosi <= area3 && scrollPosi > area2 ){ $('.global-navi .global-sub-navi li').eq(2).addClass("crt"); }else{ $('.global-navi .global-sub-navi li').eq(2).removeClass("crt");}
		}
	});
}
/* ◆ソーシャルブックマーク ------------------------------ */
function socShare(typ){
	var url="https://bofuri.jp/";
	var title="TVアニメ「痛いのは嫌なので防御力に極振りしたいと思います。」公式サイト";
	var hashtags="";//カンマ区切りで複数指定
	switch(typ){
		case "tw":
			window.open("http://twitter.com/intent/tweet?hashtags=" + hashtags+"&url="+url+"&text="+title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			break;
		case "fb":
			window.open("http://www.facebook.com/sharer.php?u="+url+"&amp;t="+title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			break;
		case "gp":
			window.open("https://plus.google.com/share?url="+url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
			break;
	}
}
/* ◆colorbox self ------------------------------ */
function cb_self_init(){
	$(".cb-self").click(function(){
		var imgsrc = $(this).attr("src");
		console.log(imgsrc);
		$.colorbox({href:imgsrc, maxWidth:"95%"});
	});
}

/* ◆アンカースクロール ------------------------------ */
function smoothScrollInit(){
     var scrollElm = (function() {
       if('scrollingElement' in document) {
         return document.scrollingElement;
       }
       if(navigator.userAgent.indexOf('WebKit') != -1) {
         return document.body;
       }
       return document.documentElement;
     })();
     
     $('a[href^="#"]').not('.noscroll').on('click', function() {
       var speed = 300;
       var easing = 'swing';
       var href= $(this).attr("href");
       $(scrollElm).animate({
         scrollTop: $(href == "#" ? 'html' : href).offset().top
       }, speed, easing);
       return false;
     });
}
/* ◆PAGETOPボタン ------------------------------ */
function pgTopBtnInit(){
    var topBtn = $('#PageTopBtn');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
}
/* ◆SPメニュー展開 ------------------------------ */
function spMenuInit(){
	$(".global-navi > ul > li a").on("click", function() {
		spMenuClose()
	});
}
function spMenuOpen(){
	$(".part-header").addClass("on");
	$(".part-header").removeClass("off");
}
function spMenuClose(){
	$(".part-header").addClass("off");
	$(".part-header").removeClass("on");
}


/* ◆縮尺計算 ------------------------------ */
function resizeScale(maxWidth){
	var windowWidth = Math.max( $(window).innerWidth(), window.innerWidth);
	//IE8以下対応
	if(jQuery.browser.msie && jQuery.browser.version<=8){
		windowWidth = $(window).innerWidth();
	}
	var scaleD = 1;
	if(windowWidth < maxWidth){
		//指定フレームサイズより画面が小さい場合
		scaleD=windowWidth / maxWidth;
	}
	return scaleD;
}

/* ◆機種判別 ------------------------------ */
function checkAgentVer(){
	var agent = navigator.userAgent;
	var os = "";
	var size="";
	var version=0;
	
	if(agent.search(/iPhone/) != -1){
		//iPhone
		os="iPhone";
		size="small";
		var versionStr = agent.substr(agent.indexOf('OS')+3, 3);
		version = Number(versionStr.substr(0,1));
		version = version + (Number(versionStr.substr(2,1)))*0.1;
	}else if(agent.search(/iPod/) != -1){
		//iPod
		os="iPod";
		size="small";
		var versionStr = agent.substr(agent.indexOf('OS')+3, 3);
		version = Number(versionStr.substr(0,1));
		version = version + (Number(versionStr.substr(2,1)))*0.1;
	}else if(agent.search(/iPad/) != -1){
		//iPad
		os="iPad";
		size="large";
		var versionStr = agent.substr(agent.indexOf('OS')+3, 3);
		version = Number(versionStr.substr(0,1));
		version = version + (Number(versionStr.substr(2,1)))*0.1;
	}else if(agent.search(/Android/) != -1 && agent.search(/Mobile/) != -1){
		//Android smart
		os="Android";
		size="small";
		var versionStr = agent.substr(agent.indexOf('Android')+8, 3);
		version = Number(versionStr.substr(0,1));
		version = version + (Number(versionStr.substr(2,1)))*0.1;
	}else if(agent.search(/Android/) != -1){
		//Android tablet
		os="Android";
		size="large";
		var versionStr = agent.substr(agent.indexOf('Android')+8, 3);
		version = Number(versionStr.substr(0,1));
		version = version + (Number(versionStr.substr(2,1)))*0.1;
	}else{
		//PCその他
		os="PC";
		size="large";
	}
	return {"os":os,"version":version,"size":size};
}

function checkAgent(){
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1 || agent.search(/iPod/) != -1){
		//iPhone or iPod
		return("smp");
	}else if(agent.search(/iPad/) != -1){
		//iPad
		return("tab");
	}else if(agent.search(/Android/) != -1 && agent.search(/mobile/) != -1){
		//Android tablet
		return("tab");
	}else if(agent.search(/Android/) != -1){
		//Android smartphone
		return("smp");
	}else{
		//PCその他
		return("pc");
	}
}
