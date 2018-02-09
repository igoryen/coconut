$( document ).ready( function(){
	console.log("ready");

	'use strict'

	$('[data-toggle="offcanvas"]').on('click', function () {
		// console.log( "hop" );
		$('.offcanvas-collapse').toggleClass('open')
	})



	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {

		// console.log("click")

		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		}
		var $subMenu = $(this).next(".dropdown-menu");

		$subMenu.toggleClass('show');

		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
			$('.dropdown-submenu .show').removeClass("show");
		});

		return false;
	});



	$('.dropdown-toggle').click(function() {

        var dropdownList = $('.dropdown-menu');
        
        var dropdownOffset = $(this).offset();

        var offsetLeft = dropdownOffset.left;
        
        var dropdownWidth = dropdownList.width();
        var docWidth = $(window).width();
                
        var subDropdown = $('.dropdown-menu').eq(1);
        var subDropdownWidth = subDropdown.width();
        
        var isDropdownVisible = (offsetLeft + dropdownWidth <= docWidth);
        var isSubDropdownVisible = (offsetLeft + dropdownWidth + subDropdownWidth <= docWidth);
        
        if (!isDropdownVisible || !isSubDropdownVisible) {
            $('.dropdown-menu').addClass('pull-left');
        } else {
            $('.dropdown-menu').removeClass('pull-left');
        }
    });

});





