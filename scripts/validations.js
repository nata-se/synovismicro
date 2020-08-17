 $(document).ready(function(){
 //alert($(location).attr('href'));
 //console.log(//alert($(location).attr('href')));
		//var pageUrl = $(location).attr('href');
	//if(pageUrl.indexOf('success') >= 0 || pageUrl.indexOf('failure') >= 0){
		var returnMessage=window.location.href;
		if($("#cnt-us").length>0 || $("#productInfo").length>0)
		{
		if(returnMessage.indexOf('&')>0)
		{
			 returnMessage=(window.location.href.split("?")[1]).substr(0,window.location.href.split("?")[1].indexOf("&"));
		}
		else
		{
			returnMessage=window.location.href.split("?")[1];
		}
				
		if (returnMessage == "success=true"){
			if($("#productInfo").length>0)
			{
				/*Product info Success message */
				$('#productInfo').hide();
				$('.header-section > p').hide();
				$('.success-prodinfo').css('display','block'); 
			}
			if($("#cnt-us").length>0)
			{
				/*Contact Us Success message */
				$('#cnt-us').hide();
				$('.communicators,.header-section p').hide();
				 $('.success-contact-us').css('display','block');
			 }
		}
		//else if (pageUrl.indexOf('failure') >= 0){
		else if (returnMessage == "failure=true"){
			if($("#productInfo").length>0)
			{
			/*Product info failure message */
				$('#productInfo').hide();
				$('.header-section > p').hide();
				$('.failure-prodinfo').css('display','block'); 
			}
			if($("#cnt-us").length>0)
			{
				/*Contact Us failure message */
				$('#cnt-us').hide();
				$('.communicators,.header-section p').hide();
				 $('.failure-contact-us').css('display','block');
			 }
		}
		
		else 
		return false;
	}
 });
 function validateEmail(id)
    {
        var email_regex = /^[a-z0-9A-Z_]+([-._][a-z0-9A-Z]+)*@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)*)+\.+[a-zA-Z]{2,4}$/;
        if(!email_regex.test($("#"+id).val()))
        {
            var div = $("#"+id).next("span");
            var label = div.parent().find("label");
            div.text("Please enter a valid email address").css('visibility','visible');
            $("#"+id).addClass('placeholderColor');
            return false;
        }
        else{
            var div = $("#"+id).next("span");
            var label = div.parent().find("label");
            div.css('visibility','hidden');
            $("#glypcn"+id).remove();
            $("#"+id).removeClass("placeholderColor");
                return true;
        }

    }
function validateText(id)
    {
			$("#"+id).val($("#"+id).val());
			if($("#"+id).val()==null || $("#"+id).val()=="" || $("#"+id).val()==$("#"+id).attr("placeholder") || (($.trim($("#"+id).val())).length)==0)
			{
				
				   var div = $("#"+id).next("span");
					 var label = div.parent().find("label").text();
					 div.text("Please enter a valid "+label+"").css('visibility','visible');
					 $("#"+id).addClass("placeholderColor");
					return false;
					
			}
			else{
				var div = $("#"+id).next("span");
				var label = div.parent().find("label");
				div.css('visibility','hidden');
				$("#"+id).removeClass("placeholderColor");
				return true;
			}
		

    }

	function validatePhone(id){	
		var regexzip = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
		var  zip = $("#"+id).val();
		var div = $("#"+id).next("span");
		var label = div.parent().find("label").text();
		if(zip!=""){
			if((!regexzip.test(zip)) || zip.length < 10)
			{
			$("#"+id).addClass("placeholderColor");
			div.text("Please enter a valid "+label).css('visibility','visible');
            return false;    
			}
           else
		
			 {
			 
				if($("#"+id).hasClass("placeholderColor")){
				div.css('visibility','hidden');
				$("#"+id).removeClass("placeholderColor");
				}
				 return true;       
			 }   
		}
		else
		return true; 
				
	}
	
   /* function validatePhone(id,key)
    {
	        var phoneId = $("#"+id).val();
                                var phoneNumb;
                                if(phoneId != undefined)
        {
                                    phoneNumb = parseInt(phoneId.replace(/[( )-]/g,''));
                                }

		var div = $("#"+id).next("span");
        var label = div.parent().find("label").text();
		var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

		//if($("#"+id).val() ==""  && (!filter.test(phoneId)) || $("#"+id).val()==$("#"+id).attr("placeholder"))
		 if(!isNaN(phoneNumb) && $("#"+id).val() !="" && phoneNumb.toString().length ==10 || $("#"+id).val()==$("#"+id).attr("placeholder")) {												
								$("#"+id).removeClass("placeholderColor");
							div.text("Please enter a valid "+label+" number").css('visibility','hidden');
				
                        return true;       
			}          
			else if($("#"+id).val() =="" || phoneNumb.toString().length < 10){
				
				$("#"+id).addClass("placeholderColor");
				div.text("Please enter a valid "+label+" number").css('visibility','visible');
				 return false;       
			}                               
			 else{

			   if(phoneNumb.toString().length == 10 && (key ==8 || key == 127))
				{
								$("#"+id).addClass("placeholderColor");
				}
				if($("#"+id).hasClass("placeholderColor")){
					$("#"+id).removeClass("placeholderColor");
					div.text("Please enter a valid "+label+" number").css('visibility','hidden');
				}
           
				return true;
        } 
    
    } */
	
	function validationZip(id,key){
		var regexzip = /^\d{5}(?:[-\s]\d{4})?$/;
		var  zip = $("#"+id).val();
		var div = $("#"+id).next("span");
		var label = div.parent().find("label").text();
		if(zip==""){
			$("#"+id).addClass("placeholderColor");
			div.text("Please enter a valid "+label).css('visibility','visible');
            return false;           
        }   else
			 {
			  if(zip.length == 10 && (key ==8 || key == 127))
				{
					$("#"+id).addClass("placeholderColor");
					div.text("Please enter a valid "+label+" number").css('visibility','visible');
				}
				if($("#"+id).hasClass("placeholderColor")){
				div.css('visibility','hidden');
				$("#"+id).removeClass("placeholderColor");
				}
				 return true;       
			 }    							
	}
  //$(".prdinfo-btn").click(function(e){
 function prodFormSubmit(e) 
{ 	
         var valid = validations();
       if(valid){
	   
			var pardotURL = '';
                pardotURL =  document.getElementById('pardot_location').value; 
				//console.log("pardotURL"+pardotURL);
					   ////alert("pardotURL"+pardotURL);                       
				$("#productInfo").attr("action",pardotURL);
	   
			 var redirect_url = location.protocol + "//" + location.host;
			 //console.log(redirect_url);
			$("#success_location").val(redirect_url+"/lsds/sm/contact_us/product_info_request.page?success=true");
			$("#error_location").val(redirect_url+"/lsds/sm/contact_us/product_info_request.page?failure=true");
            
			/*$('#productInfo').submit(function (e) {
				e.preventDefault();				
			 $('#productInfo').hide();
			$('.header-section > p').hide();
			 $('.success-prodinfo').css('display','block'); 
			
			 
            });*/
         }else{
             e.preventDefault();
           // location.href ="/contact/index.html";
         }
    }
	function validations(){
		validateEmail("prd_email");
        validateText("prd_fname");
        validateText("prd_lname");
		validationZip("prd_zip");
		validatePhone("prd_phn");
		$('.placeholderColor:first').focus();
        if(!validateEmail("prd_email")){
            return false;
        }
        if(! validateText("prd_zip")){
            return false;
        }    
        if(!validateText("prd_fname"))
        {
            return false;
        }
		if(!validateText("prd_lname"))
        {
            return false;
        }
		if(!validatePhone("prd_phn"))
        {
            return false;
        }
         return true;
	}

$(document).on("change keyup focus","#productInfo .txt_field",function(event) { 
			if($(this).attr("required")!= undefined)
			{
				validateText($(this).attr("id"));	
			}
		   
	   });
		$(document).on("change keyup focus","#productInfo #prd_email",function(event) {    
		   
		   if($(this).attr("required")!= undefined)
			{
				 validateEmail($(this).attr("id"));
			}
		  
	   });
	   $('#phone, #cnt-phn').keypress(function(evt){
	   
			 var key=evt.keyCode;
   var allowed='1234567890 :;,.?!�$%^&*()_+-*{}@~<>&"\'';

    return allowed.indexOf(String.fromCharCode(key)) !=-1 ;
		});
	   $(document).on("change keyup focus","#productInfo #phone",function(event) {    	   		  
				 validatePhone($(this).attr("id"));	  
				
	   });
	$(document).on("change keyup focus","#productInfo #prd_email",function(event) {    
		   
		   if($(this).attr("required")!= undefined)
			{
				 validateEmail($(this).attr("id"));
			}
		  
	   });   

      $(document).on("keyup","#productInfo #prd_zip",function(e) {
			if($(this).attr("required")!= undefined)
			{
				 validationZip($(this).attr("id"));
			}
	  
				//validateNumber($(this).attr("id"));
		/* 	 var key = e.charCode || e.keyCode || 0;
            $phone = $(this);
               
            // Auto-format- do not expose the mask as the user begins to type
            if (key !== 8 && key !== 9) {
			if ($phone.val().indexOf("(") == -1){
                $phone.val("("+$phone.val());
				}
                if ($phone.val().length === 4) {
                    $phone.val($phone.val() + ')');
                }
                if ($phone.val().length === 5) {
                    $phone.val($phone.val() + ' ');
                }			
                if ($phone.val().length === 9) {
                    $phone.val($phone.val() + '-');
                }
            } 
validatePhone($phone.attr('id'),key);
            // Allow numeric (and tab, backspace, delete) keys only
            return (key == 8 || 
                    key == 9 ||
                    key == 46 ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));	
	  	   */	   
	   });
	   
	   

function isIE () {
		  var myNav = navigator.userAgent.toLowerCase();
		  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
		}
if(isIE() == 8 || isIE() == 9){ 
			$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
			}).blur();
		}
		
//$('#sub_btn').on('click',function (e){
//$('body').on('click', '.contact-prdinfo-btn', function(e){
        function formSubmit(e){
        var valid = validationContact_us();
        
         if(valid){
				var pardotURL = '';
                pardotURL =  document.getElementById('pardot_location').value; 
				//console.log("pardotURL"+pardotURL);
					   ////alert("pardotURL"+pardotURL);                       
								$("#cnt-us").attr("action",pardotURL);
		 
			var redirect_url = location.protocol + "//" + location.host;
			$("#success_location").val(redirect_url+"/lsds/sm/contact_us/contact_us.page?success=true");
			$("#error_location").val(redirect_url+"/lsds/sm/contact_us/contact_us.page?failure=true");
           
		   /*  $('#cnt-us').submit(function (e) {
				e.preventDefault();		
			$('#cnt-us').hide();
			$('.communicators,.header-section p').hide();
			 $('.success-contact-us').css('display','block'); 
			 
			 
            });*/
         }else{
             e.preventDefault();
           // location.href ="/contact/index.html";
         }
         
         
    }; 
	
function validationContact_us(){
        validateText("cnt-fname");
        validateText("cnt-lname");
        validateEmail("cnt-email");
        validateText("cnt-field");
		validatePhone("cnt-phn");
		$('.placeholderColor:first').focus();
        if(! validateText("cnt-fname")){
			
            return false;
        }
        if(!validateText("cnt-lname"))
        {
            return false;
        }
        if(!validateEmail("cnt-email"))
        {
            return false;
        }
       
          if(!validateText("cnt-field"))
         {
           return false;
        }
		if(!validatePhone("cnt-phn"))
        {
            return false;
        }
         return true;
       
    }
	$(document).on("change keyup focus","#cnt-us input[type=text],#cnt-us textarea",function(event) { 
			if($(this).attr("required")!= undefined)
			{
				validateText($(this).attr("id"));	
			}
		   
	   });
		$(document).on("change keyup focus","#cnt-us #cnt-email",function(event) {    
		   
		   if($(this).attr("required")!= undefined)
			{
				 validateEmail($(this).attr("id"));
			}
		  
	   });
	   $(document).on("keyup","#cnt-us #cnt-phn",function(e) { 
				validatePhone($(this).attr("id"));
			 
	   });