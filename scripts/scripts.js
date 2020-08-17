/***********************************************************************
 * VARIABLES
 ***********************************************************************/

var page_slug = window.location.href.substring(window.location.href.lastIndexOf('/')+1, window.location.href.lastIndexOf('.html'));






/***********************************************************************
 * STARTUP ACTIONS
 ***********************************************************************/

/* Products Sidebar Highlighting */

$('#products-sidebar li').children('a').each(function(){
    var page = this.href.substring(this.href.lastIndexOf('/')+1, this.href.indexOf('.html'));

    if(page === page_slug) {
        $(this).parent('li').addClass('active');
    } else {
        $(this).parent('li').removeClass('active');
    }
});

$('#contact-sidebar li').children('a').each(function(){
    var page = this.href.substring(this.href.lastIndexOf('/')+1, this.href.indexOf('.html'));

    if(page === page_slug) {
        $(this).parent('li').addClass('active');
    } else {
        $(this).parent('li').removeClass('active');
    }
});






/***********************************************************************
 * EVENT LISTENERS
 ***********************************************************************/

$('.has-menu').on('mouseenter', function(e){
    toggle_sub_menu(this);
});

$('.has-menu').on('mouseleave', function(e){
    toggle_sub_menu(this);
});




/***********************************************************************
 * FUNCTIONS
***********************************************************************/

function el(id) {
    return document.getElementById(id);
}

function toggle_sub_menu(e){
    $(e).find('a').toggleClass('submenu');
    $(e).find('ul').slideToggle('fast');
    $('.has-menu').not(e).find('ul').hide('fast');
    $('.has-menu').not(e).find('a').removeClass('submenu');
    $('.search-form').hide();
    $('.search').removeClass('search-selected');
}