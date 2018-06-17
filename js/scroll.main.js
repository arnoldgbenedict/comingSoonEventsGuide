$(function() {


	$.scrollify({
		section:".panel",
		//sectionName:false,
		scrollSpeed:1500,
        easing: "easeOutExpo",
        setHeights: false,
        scrollbars:false,
		before:function(i) {
            
            if(i===0){
                $('.arrow-up').css("display","none");
                $('.contentLink').css("display","none");
            }
            else{
                $('.arrow-up').css("display","block");
                 $('.contentLink').css("display","block");
            }
            if(i===66){
                $('.arrow').css("display","none");
            }
            else{
                $('.arrow').css("display","block");
            }

			if(i===31 || i===32 || i===40 || i===51 || i===52 ||i===63 || i===64) {
				$('.arrow, .arrow-up').css("border-color","black");
			}
            else{
                $('.arrow, .arrow-up').css("border-color","white");
            }

		}
	});

	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.next();
	});
    $(".scroll-up,.scroll-btn").click(function(e) {
		e.preventDefault();

		$.scrollify.previous();
	});

});
