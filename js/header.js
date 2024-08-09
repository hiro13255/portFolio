var navPos = jQuery("#global-nav").offset().top;
var navHeight = jQuery("#global-nav").outerHeight();

jQuery(window).on("scroll", function () {
  if (jQuery(this).scrollTop() > navPos) {
    jQuery("#global-nav").addClass("m_fixed");
  } else {
    jQuery("#global-nav").removeClass("m_fixed");
  }
});

// スムーズスクロール
jQuery('a[href^="#"]').on("click", function () {
  var speed = 400;
  var href = jQuery(this).attr("href");
  var target = jQuery(href == "#" || href == "" ? "html" : href);
  var position = target.offset().top - navHeight;
  jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
