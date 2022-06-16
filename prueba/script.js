$("#lolcat").mousedown(function() {
    $(this).data("dragging", true);
});

$("#lolcat").mouseup(function() {
    $(this).data("dragging", false);
});

$("#lolcat").mousemove(function(e) {
    if (!$(this).data("dragging"))
        return;
    $(this).css("left", e.clientX - $(this).width()/2);
    $(this).css("top", e.clientY - $(this).height()/2);
});
