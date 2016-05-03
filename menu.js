function goto_link(target) {
	window.location = target;
}

function doc_ready() {
	$("table").delegate('td','mouseover mouseleave', function(e) {
		if (e.type == 'mouseover') {
			$("colgroup").eq($(this).index()).trigger("mouseover");
		} else {
			$("colgroup").eq($(this).index()).trigger("mouseleave");
		}
	});
}

$(document).ready(doc_ready);

function menu_over(menu)
{
	$("#" + menu + "-button").css("background-color", "#555");
	$("#" + menu + "-button").css("color", "#FFF");
	$("#" + menu + "-menu").css("visibility", "visible");
}

function menu_out(menu)
{
	$("#" + menu + "-button").css("background-color", "rgba(75, 75, 75, 0.5)");
	$("#" + menu + "-button").css("color", "#888888");
	$("#" + menu + "-menu").css("visibility", "hidden");
}