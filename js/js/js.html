var autoLb = true;          //autoLb=trueไธบๅผ€ๅฏ่ชๅจ่ฝฎๆ’ญ
var autoLbtime = 3;         //autoLbtimeไธบ่ฝฎๆ’ญ้—ด้”ๆ—ถ้—ด๏ผๅ•ไฝ็ง’๏ผ
var touch = true;           //touch=trueไธบๅผ€ๅฏ่งฆๆ‘ธๆป‘ๅจ
var slideBt = true;         //slideBt=trueไธบๅผ€ๅฏๆปๅจๆ้’ฎ
var slideNub;               //่ฝฎๆ’ญๅพ็ๆ•ฐ้
var windowWidth = $(window).width();

//็ช—ๅฃๅคงๅฐๆ”นๅๆ—ถๆ”นๅ่ฝฎๆ’ญๅพๅฎฝ้ซ
$(window).resize(function() {
  if(windowWidth <= 800)
    $(".slide").height($(".slide").width() * 50 / 75);
  else
    $(".slide").height($(".slide").width() * 0.36);
});

$(function() {
  if(windowWidth <= 800)
    $(".slide").height($(".slide").width() * 50 / 75);
  else
    $(".slide").height($(".slide").width() * 0.36);
  slideNub = $(".slide .img").size();  //่ทๅ–่ฝฎๆ’ญๅพ็ๆ•ฐ้
  for(let i = 0; i < slideNub; i++) {
    $(".slide .img:eq(" + i + ")").attr("data-slide-imgId", i);
  }
  //ๆ นๆฎ่ฝฎๆ’ญๅพ็ๆ•ฐ้่ฎพๅฎๅพ็ไฝ็ฝฎๅฏนๅบ”็class
  if(slideNub === 1) {
    for(let i = 0; i < slideNub; i++) {
      $(".slide .img:eq(" + i + ")").addClass("img3");
    }
  }
  if(slideNub === 2) {
    for(let i = 0; i < slideNub; i++) {
      $(".slide .img:eq(" + i + ")").addClass("img" + (i + 3));
    }
  }
  if(slideNub === 3) {
    for(let i = 0; i < slideNub; i++) {
      $(".slide .img:eq(" + i + ")").addClass("img" + (i + 2));
    }
  }
  if(slideNub > 3 && slideNub < 6) {
    for(let i = 0; i < slideNub; i++) {
      $(".slide .img:eq(" + i + ")").addClass("img" + (i + 1));
    }
  }
  if(slideNub >= 6) {
    for(let i = 0; i < slideNub; i++) {
      if(i < 5) {
        $(".slide .img:eq(" + i + ")").addClass("img" + (i + 1));
      } else {
        $(".slide .img:eq(" + i + ")").addClass("img5");
      }
    }
  }
  //ๆ นๆฎ่ฝฎๆ’ญๅพ็ๆ•ฐ้่ฎพๅฎ่ฝฎๆ’ญๅพๆ้’ฎๆ•ฐ้
  if(slideBt) {
    for(let i = 1; i <= slideNub; i++) {
      $(".slide-bt").append("<span data-slide-bt='" + i + "' onclick='tz(" + i + ")'></span>");
    }
    let w = (slideNub - 1) * 18 + 34;
    $(".slide-bt").css("margin-left", "-" + w / 2 + "px");
  }
  //่ชๅจ่ฝฎๆ’ญ
  if(autoLb) {
    setInterval(function() {
      right();
    }, autoLbtime * 1000);
  }
  if(touch) {
    k_touch();
  }
  slideLi();
  imgClickFy();
});

//ๅณๆป‘ๅจ
function right() {
  var fy = new Array();
  for(let i = 0; i < slideNub; i++) {
    fy[i] = $(".slide .img[data-slide-imgId=" + i + "]").attr("class");
  }
  for(let i = 0; i < slideNub; i++) {
    if(i === 0) {
      $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[slideNub - 1]);
    } else {
      $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[i - 1]);
    }
  }
  imgClickFy();
  slideLi();
}

//ๅทฆๆป‘ๅจ
function left() {
  var fy = new Array();
  for(let i = 0; i < slideNub; i++) {
    fy[i] = $(".slide .img[data-slide-imgId=" + i + "]").attr("class");
  }
  for(let i = 0; i < slideNub; i++) {
    if(i === (slideNub - 1)) {
      $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[0]);
    } else {
      $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[i + 1]);
    }
  }
  imgClickFy();
  slideLi();
}

//่ฝฎๆ’ญๅพ็ๅทฆๅณๅพ็็นๅป็ฟป้กต
function imgClickFy() {
  $(".slide .img").removeAttr("onclick");
  $(".slide .img2").attr("onclick", "left()");
  $(".slide .img4").attr("onclick", "right()");
}

//ไฟฎๆ”นๅฝ“ๅๆ€ไธญ้—ดๅพ็ๅฏนๅบ”ๆ้’ฎ้€ไธญ็ถๆ€
function slideLi() {
  var slideList = parseInt($(".slide .img3").attr("data-slide-imgId")) + 1;
  $(".slide-bt span").removeClass("on");
  $(".slide-bt span[data-slide-bt=" + slideList + "]").addClass("on");
}

//่ฝฎๆ’ญๆ้’ฎ็นๅป็ฟป้กต
function tz(id) {
  var tzcs = id - (parseInt($(".slide .img3").attr("data-slide-imgId")) + 1);
  if(tzcs > 0) {
    for(let i = 0; i < tzcs; i++) {
      setTimeout(function() {
        right();
      }, 1);
    }
  }
  if(tzcs < 0) {
    tzcs = (-tzcs);
    for(let i = 0; i < tzcs; i++) {
      setTimeout(function() {
        left();
      }, 1);
    }
  }
  slideLi();
}

//่งฆๆ‘ธๆป‘ๅจๆจกๅ—
function k_touch() {
  var _start = 0, _end = 0, _content = document.getElementById("slide");
  if(_content != null) {
    _content.addEventListener("touchstart", touchStart, false);
    _content.addEventListener("touchmove", touchMove, false);
    _content.addEventListener("touchend", touchEnd, false);
  }


  function touchStart(event) {
    let touch = event.targetTouches[0];
    _start = touch.pageX;
  }

  function touchMove(event) {
    let touch = event.targetTouches[0];
    _end = (_start - touch.pageX);
  }

  function touchEnd(event) {
    if(_end < -100) {
      left();
      _end = 0;
    } else if(_end > 100) {
      right();
      _end = 0;
    }
  }
}
