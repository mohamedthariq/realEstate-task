$(document).ready(function() {
    $(document).off("click", ".dropdownCont");
    $(document).on("click", ".dropdownCont", function(event) {
        event.stopImmediatePropagation();
        $(".dropdownCont").removeClass("active");
        if ($(this).find("ul").is(":visible")) {
            $(this).find("ul").slideUp(300);
            $(".dropdownCont").removeClass("active");
        } else {
            $(".dropdownCont").find("ul").hide();
            $(this).find("ul").slideDown(300);
            $(this).addClass("active");
        }
    });

    $(document).off("click", ".dropdownCont ul li");
    $(document).on("click", ".dropdownCont ul li", function(event) {
        console.log();
        event.stopImmediatePropagation();
        $(this).parent().siblings(".selectInput").html($(this).html());
        $(this).parent().siblings(".selectInput").css({
            'opacity': '1'
        });
        $(this).parent().slideUp(300);
        $(".dropdownCont").removeClass("active");
    });
    //close dropdown when clicked outside
    $(document).on("click", function(event) {
        var $trigger = $(".dropdownCont");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".dropdownCont").find("ul").slideUp(300);
            $(".dropdownCont").removeClass("active");
        }
    });

    //case insensitive while search 
    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
            .indexOf(m[3].toUpperCase()) >= 0;
    };

    //search function
    $('.searchButton').click(function() {
        $('.grid-item').css({
            'display': 'flex',
            'flex-wrap': 'wrap'
        });
        var filter = $(".searchbox-input").val(); // get the value of the input, which we filter on
        console.log(filter);
        $('.grid-item').find(".locationTag span:not(:contains(" + filter + "))").parents('.grid-item').css('display', 'none'); //hide the remaining card
    });

    //grid-view
    $('#grid-view').click(function() {
        $('.card-group, .card-item, .card-list, .cardview-detail, .hd-tag, .card-content, cardview-detail, .building-detail, .station-detail').removeClass("enable");
        $("#card-view, #map-view").removeClass("active");
        $(".grid, .locationMaps, .bodyContainer").removeClass("mapEnable");
        $("#grid-view").addClass("active");
    });

    //card-viewmapEnable
    $('#card-view').click(function() {
        $('.card-group, .card-item, .card-list, .cardview-detail, .hd-tag, .card-content, cardview-detail, .building-detail, .station-detail').addClass("enable");
        $("#grid-view, #map-view").removeClass("active");
        $(".grid, .locationMaps, .bodyContainer").removeClass("mapEnable");
        $("#card-view").addClass("active");
    });

    //map-view
    $('#map-view').click(function() {
        $('.card-group, .card-item, .card-list, .cardview-detail, .hd-tag, .card-content, cardview-detail, .building-detail, .station-detail').addClass("enable");
        $("#grid-view, #card-view").removeClass("active");
        $("#map-view").addClass("active");
        $(".grid, .locationMaps, .bodyContainer").addClass("mapEnable");
    });


});