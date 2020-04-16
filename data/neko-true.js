"use strict";

(function () {

  // movieModal
  var $movieModal = $("#l-movie-modal");
  var $movieArea = $("#l-movie-modal__movie");
  var $movieModalClose = $(".js-movie-modal-close-item");

  var changeMovie = function changeMovie(videoId) {
    $movieArea.empty();
    var iframeEle = $("<iframe></iframe>", {
      src: "https://movie.trueid.net/embed/" + videoId + "?autoplay=1&rel=0",
      id: "l-movie-modal-iframe",
      allowfullscreen: "true",
      webkitallowfullscreen: "true",
      mozallowfullscreen: "true",
      allow: "autoplay; encrypted-media"
    });
    $movieArea.append(iframeEle);
  };

  var openMovieModal = function openMovieModal() {
    $movieModal.addClass("is-active");
  };

  var closeMovieModal = function closeMovieModal() {
    $movieModal.removeClass("is-active");
    setTimeout(function () {
      $movieArea.empty();
    }, 550);
  };

  // modal on
  $(".js-movie").on("click", function () {
    changeMovie($(this).data("videoId"));
    openMovieModal();
  });

  // modal off
  $movieModalClose.on("click", function () {
    closeMovieModal();
  });

  // commentModal
  var $commentModal = $("#l-comment-modal");
  var $commentMain = $(".l-comment-modal__main");
  var $commentRole = $("#l-comment-modal__role");
  var $commentName = $("#l-comment-modal__name");
  var $commentText = $("#l-comment-modal__text");
  var $commentModalClose = $(".js-comment-modal-close-item");

  var changeComment = function changeComment(_role, _name, _text) {
    $commentRole.empty();
    $commentName.empty();
    $commentText.empty();
    $commentRole.append(_role);
    $commentName.append(_name);
    $commentText.append(_text);
  };

  var openCommentModal = function openCommentModal() {
    $commentModal.addClass("is-active");
    setTimeout(function () {
      var _conH = $commentMain.innerHeight();
      var _winH = window.innerHeight;
      if (_conH > _winH) {
        $commentModal.addClass("is-scroll");
        $commentModal.scrollTop(0);
      }
    }, 10);
  };

  var closeCommentModal = function closeCommentModal() {
    $commentModal.removeClass("is-active");
    setTimeout(function () {
      $commentRole.empty();
      $commentName.empty();
      $commentText.empty();
      $commentModal.removeClass("is-scroll");
    }, 550);
  };

  // modal on
  $(".js-comment").on("click", function () {
    changeComment($(this).find(".js-comment__role").html(), $(this).find(".js-comment__name").html(), $(this).find(".js-comment__text").html());
    openCommentModal();
  });

  // modal off
  $commentModalClose.on("click", function () {
    closeCommentModal();
  });
})();
