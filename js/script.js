$(".panel-collapse").on("show.bs.collapse", function () {
  $(this).siblings(".panel-heading").addClass("active");
});

$(".panel-collapse").on("hide.bs.collapse", function () {
  $(this).siblings(".panel-heading").removeClass("active");
});

$(document).on("click", ".panel-heading span.clickable", function (e) {
  var $this = $(this);
  if (!$this.hasClass("panel-collapsed")) {
    $this.parents(".panel").find(".panel-body").slideUp();
    $this.addClass("panel-collapsed");
    $this.find("i").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
  } else {
    $this.parents(".panel").find(".panel-body").slideDown();
    $this.removeClass("panel-collapsed");
    $this.find("i").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
  }
});

$(".collapse").collapse();
