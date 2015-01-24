$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
		});

$('.collapse').collapse()

$('#myCollapsible').collapse({
  toggle: false
})

$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})