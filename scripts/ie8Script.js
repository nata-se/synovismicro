function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
if (isIE () == 8) {
 // IE8 code
} else {
 // Other versions IE or not IE
 (function(){
  var newscript = document.createElement('script');
     newscript.type = 'text/javascript';
     newscript.async = true;
     newscript.src = '/lsds/baxapps/sm/scripts/jquery-2.1.0.min.js';
	var currentDiv = document.getElementsByTagName('script')[0]; 
    document.head.insertBefore(newscript, currentDiv.nextSibling); 
  //(document.getElementsByTagName('script')[0]).appendChild(newscript);
})(); 
}
