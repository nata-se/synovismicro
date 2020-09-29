// Synovis JavaScript Document
/* $.noConflict(); */


// $(document).ready(function(){
function handleDocumentLoaded() {
		var modalURL;
		var option;
		/* Home page search box in ie8*/
		var div = document.createElement("div");
		div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
		var isIeLessThan9 = (div.getElementsByTagName("i").length == 1);
		
		
		
		if($('#responsiveTabsDemo').length>0)
		{
			$('#responsiveTabsDemo').responsiveTabs({
				startCollapsed: 'accordion',
				collapsible: 'accordion',
				setHash: true
			});
		}
/*History page*/
if($(".featured-img").length > 0)
	{
		if($(window).width()+17 >1023)
		{
			$(".left-content").removeClass("show-desktop")
			$(".left-content").css('display', 'none');
			$(".right-content").css({"width":"100%","margin":"0"});
		}
	}
/* For PDF Link style */
		$(".pdfIcon").parent('a').css({"color":"#faaf2a","font-size":"14px", "line-height":"22px"});
		$(".pdfIcon").parent('a').hover(function(){
			$(this).css("color", "#61a6d7");
			}, function(){
			$(this).css("color", "#faaf2a");
		});

		/* home page to events view */
		

		/* var url = window.location.search;
			if(window.location.search.length > 0){
			var option = url.match(/option=(.*)/)[1];		
		} */
		
/* Sitemap remove extra space */
if($(".sitemap-content").length>0)
{
	$(".pre-container").addClass("sitemap-container");
}
		
				/*Scrolling Top*/
				 if($(window).width()+17 <700){
			$(document).on( 'click', '.tab', function(e) {
				e.preventDefault();
			
				$('body').animate({
					scrollTop: $(this).offset().top - 15
				}, {
					duration: 'slow' , 
					easing: 'swing'
				}); 
						}); 
						$(window).bind("mousewheel", function() {
    $("html, body").stop();
				});

			} 
			else {
				if($(window).width()+17 >=700){
				$(document).on( 'click', '.tab', function(e) {
					 $("html,body").stop();
				})
			}
			}
		/*Scrolling Top*/
		
		/*Video Section*/
			 
			 
			 $(".Play-video").click(function(){
				var video_id= $(this).attr("id");
				//alert(video_id);
				
				 playVideo(video_id);
				 
			 })
				 
					
		/*Video Section*/
		/*display message ifu any tab is not there */
		
		/* $(".tab").each(function () {
			var tabcheck=$(this).parent().attr("href");
					if(($(tabcheck).length==0)){
						$(this).parent().parent().remove();
						 $(".user-message").css("display","block"); 
				}
				
		}) */
			
			


		
		
		/**/
				
			
				/**/	
		setBlueLine();/* blue line after tabs */
		if($(window).width()+17 > 700) {
			if($('.section-text').length==0)
			{
				$('.section-image').css({"float":"none","padding-left":"0px"});
				
			}
		}
		/*LIGHTBOX POPUP*/
		$('.lightbox').click(function(){
										
			$("body").css("overflow","hidden");
			$(".images").css('display', 'block'); 
			$(".backdrop").css('display', 'block'); 
			
		$('.close').click(function(){
			
			$(".images").css('display', 'none');
			$("body").css("overflow","auto")	
			$(".backdrop").css('display', 'none')
			});
		});
				
		/*LIGHTBOX POPUP*/	
		
		/* 		Desclaimer popup Start */
		$('body').on('click', 'a.external_link', function(e) {
			//$('.external_link').click(function(e) {			
					$("body").css("overflow","hidden");
					$(".images").css('display', 'block'); 
					$(".backdrop").css('display', 'block');  
					
				 $('.close').click(function(){
					
					$(".images").css('display', 'none');
					$("body").css("overflow","auto")	
					$(".backdrop").css('display', 'none')
					}); 
				modalURL = $(this).attr('href');
				e.preventDefault();
			});
			$(".next-btn").click(function(e)
			{
				window.open(modalURL, '_blank');	
					$(".images").css('display', 'none');
					$("body").css("overflow","auto")	
					$(".backdrop").css('display', 'none')				
				
			});
			$('.cancel-btn').click(function(){
					
					$(".images").css('display', 'none');
					$("body").css("overflow","auto")	
					$(".backdrop").css('display', 'none')
			}); 
			
/* 		Desclaimer popup Start */
				
		/* Add find a rep box in tablets  */		
		if($(window).width() < 1023)
			{
				 $(".bottom-box").insertAfter(".tabsection");
			} else 
			{ 
				$('.right-content').find('.bottom-box').insertAfter('.left-items');
			} 	
			
		/*Removing space if logoimage is not there in products page*/
		if($(window).width()+17 > 700) {
			if($(".heading").length>0)
			{
				if($(".heading").find("img").length==0)
				{
					if($(".heading").find("h4").length>0)
					{
						$(".heading").find("h4").css("padding-left","0")
					}
				}
			}
		}
		if($(window).width()+17 < 700) {
			if($(".heading").length>0)
			{
				if($(".heading").find("img").length==0)
				{
					if($(".heading").find("h4").length>0)
					{
						$(".heading").find("h4").css("margin-top","0")
					}
				}
			}
		}
		
		 
		if($(window).width()+17 > 700) {
			if($(".section-text").length>0)
			{
				if($(".section-text").find("h5").length==0)
				{
					
						$(".section-text p").first().css("padding-top","0")
					
				}
			}
		}
		/*padding-top for image*/
				if($(window).width()+17 >=700 && $(window).width()+17 <1055){
		 var height= $(".section-text h5").outerHeight();
				 var padding=height+19;
				 $(".section-image").css("padding-top",padding);
				 } else {
					 $(".section-image").css("padding-top","");
				}
		/*padding-top for image*/
			/*columns
			
		if($(window).width()+17 > 700) {
				if($('.sitemap-content').length>0)
				{
					$('.sitemap-content').columnize();
					$('.sitemap').columnize({ width: 480});
					$('.sitemap-content').columnize({ columns: 1,lastNeverTallest: true, buildOnce:true});
				}
							 
			} else 
			{
				if($('.sitemap-content').length>0)
					{
						$('.sitemap-content').columnize();
						$('.sitemap').columnize({ width: 960})
						$('.sitemap-content').columnize({ columns: 0,lastNeverTallest: true, buildOnce:true});
					}
				}
			
			/*columns*/	
				
				
		/* Mobile menu */
		$('.mobile-menu').click(function(e){
		   e.preventDefault();
		   $(this).toggleClass('menu-open');
			$('#nav-toggle').slideToggle('fast');
			$('.expand ul').slideUp();
			$('.search-form').hide();
			 $('.search').removeClass("search-selected");
			 $('.header').toggleClass("fix-head");
			 $('.expand').removeClass("exp-btn");
			 if($(this).hasClass("menu-open"))
			 {
			$("body").css("overflow","hidden");
			 }
			 else
			 {
			 $("body").css("overflow","auto");
			 }
		});

		$('.nav-expand').click(function(e){
		  e.preventDefault();
			$(this).parent().toggleClass('exp-btn');
			$(this).parent().find('ul').slideToggle('fast');
 			$('.expand').not($(this).parent()).find('ul').hide('fast');
			$('.expand').not($(this).parent()).removeClass('exp-btn');
		});

	   
		/* Search */
		$('.search').click(function(e){ 
		
			e.stopPropagation();

		  $(this).toggleClass("search-selected");
		  $('.search-form').slideToggle('fast');
		  $(this).find('img').attr('src','images/search-hover.png');
		  $('#nav-toggle').hide();
		  $('.header').removeClass("fix-head");
		  $('.expand').find('ul').hide('fast');
		   $('.expand').removeClass('exp-btn');
			$('.has-menu').find('ul').hide('fast');
			$('.has-menu').find('a').removeClass('submenu');
		  $('.mobile-menu').removeClass('menu-open');
		  
		});

	 
		$('html').click(function(event) {  
		   if (!$(event.target).closest(".search-form").length) {
			 $('.search').removeClass('search-selected');
			 $('.search-form').hide();
		   }
		});
		
		/* Swapping menues*/
		//$(".swap_menu").insertAfter(".swap_to");
		$(".swap_menu").insertAfter(".swap_to_c");
		$(".swap_menu_abt").insertAfter(".swap_to");
		
	if($('.slider1').length>0){
			$('.slider1').slick({
				autoplay: true,
				autoplaySpeed: 11000,
			  dots: true,
			  infinite: true,
			  speed: 1100,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  responsive: [
				{
					breakpoint: 6024,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
					}
				},
				{
				  breakpoint: 6024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 6024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 6024,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
			});
		}
		var slicks = $('.slider1');
		$('.slick-next').on('click', function(){
		  // var thisSlider = $(this).closest('slick-initialized');		  
		  slicks.slick('slickNext');//jah
		  
		});
		
		
		
		/* Calender and tooltip Code */	
		
		var now;
		var end;
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		var multipleEvents = [];
		var eventTypes = ['All'];
		$('#calendar-type').append($("<option></option>").text(eventTypes[0]));
			if ($('#calendar,#calender-list').length >0){
			$('#calendar,#calender-list').fullCalendar({
				header: {
					left: 'year',
					center: 'prev title next',
					right: 'month'
				},
				events: function (start, end, timezone, callback) {
						
						var data = $.parseJSON($("#json-data").html());
							//console.log(data);
							var now = new Date();
							
							if (now.getMonth() == 11) {
								var current = new Date(now.getFullYear() + 1, 0, 1);
								var cur2 = now.getMonth();
							} else {
								var current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
								var cur2 = now.getMonth();
							}
							
							var events = [];
							if ( data != undefined && data.results.assets.length > 0 ) {							
								$('#calender-list').html('');							   	
							    var dayevents=[];
								var j =0;
								$.each(data.results.assets,function(i, entry) {
									var d = entry.metadata.EventStartDate;
									var event_month = moment(entry.metadata.EventStartDate).format('M');
									//console.log(event_month+' == '+cur2);
									var types = $('#calendar-type :selected').text();								
									if(types == entry.metadata.EventType && event_month > cur2){
										if($.inArray(entry.metadata.EventStartDate, dayevents) == -1){								
												dayevents.push(entry.metadata.EventStartDate);
											events.push({
											title: entry.metadata.EventName,
											start: entry.metadata.EventStartDate,
											end_d: entry.metadata.EventEndDate,
											type: entry.metadata.EventType,
											desc: entry.metadata.EventDesc,
											addr:entry.metadata.EventAddress,
											website: entry.metadata.EventURL,
											sitetype: entry.metadata.EventURLType											
											
											});	
										} 
										else
										{ multipleEvents.push(entry.metadata.EventStartDate);}
										if(entry.metadata.EventURLType=="External")
										{
										$('#calender-list').append('<div class="events-list-main"><div class="events-list"><div class="event-title">'+entry.metadata.EventName+'</div><div class="event-addr">'+moment(entry.metadata.EventStartDate).format('MMMM DD')+'-'+moment(entry.metadata.EventEndDate).format('DD')+' '+moment(entry.metadata.EventEndDate).format('YYYY')+'<br/>'+entry.metadata.EventAddress+'</div><div class="event-desc">'+entry.metadata.EventDesc+'</div><a href="'+entry.metadata.EventURL+'" target="_blank" class="event-website external_link">SEE EVENT WEBSITE<em class="icon-go"></em></a></div></div>');													
										} else {
										$('#calender-list').append('<div class="events-list-main"><div class="events-list"><div class="event-title">'+entry.metadata.EventName+'</div><div class="event-addr">'+moment(entry.metadata.EventStartDate).format('MMMM DD')+'-'+moment(entry.metadata.EventEndDate).format('DD')+' '+moment(entry.metadata.EventEndDate).format('YYYY')+'<br/>'+entry.metadata.EventAddress+'</div><div class="event-desc">'+entry.metadata.EventDesc+'</div><a href="'+entry.metadata.EventURL+'" target="_blank" class="event-website">SEE EVENT WEBSITE<em class="icon-go"></em></a></div></div>');													
										}
										}	
										else if( types == 'All' && event_month > cur2){ 	
											if($.inArray(entry.metadata.EventStartDate, dayevents) == -1){
											dayevents.push(entry.metadata.EventStartDate);
												events.push({
												title: entry.metadata.EventName,
												start: entry.metadata.EventStartDate,
												end_d:  entry.metadata.EventEndDate,
												type: entry.metadata.EventType,
												desc: entry.metadata.EventDesc,
												addr:entry.metadata.EventAddress,
												website: entry.metadata.EventURL,
												sitetype: entry.metadata.EventURLType	
												});
											//console.log(dayevents);
										} else{ multipleEvents.push(entry.metadata.EventStartDate); }
											if(entry.metadata.EventURLType=="External")
										{
										$('#calender-list').append('<div class="events-list-main"><div class="events-list"><div class="event-title">'+entry.metadata.EventName+'</div><div class="event-addr">'+moment(entry.metadata.EventStartDate).format('MMMM DD')+'-'+moment(entry.metadata.EventEndDate).format('DD')+' '+moment(entry.metadata.EventEndDate).format('YYYY')+'<br/>'+entry.metadata.EventAddress+'</div><div class="event-desc">'+entry.metadata.EventDesc+'</div><a href="'+entry.metadata.EventURL+'" target="_blank" class="event-website external_link">SEE EVENT WEBSITE<em class="icon-go"></em></a></div></div>');													
										}else{
										$('#calender-list').append('<div class="events-list-main"><div class="events-list"><div class="event-title">'+entry.metadata.EventName+'</div><div class="event-addr">'+moment(entry.metadata.EventStartDate).format('MMMM DD')+'-'+moment(entry.metadata.EventEndDate).format('DD')+' '+moment(entry.metadata.EventEndDate).format('YYYY')+'<br/>'+entry.metadata.EventAddress+'</div><div class="event-desc">'+entry.metadata.EventDesc+'</div><a href="'+entry.metadata.EventURL+'" target="_blank" class="event-website">SEE EVENT WEBSITE<em class="icon-go"></em></a></div></div>');													
										}
										}
										
										if($.inArray(entry.metadata.EventType, eventTypes) == -1){
											eventTypes.push(entry.metadata.EventType);
											
											$('#calendar-type').append($("<option></option>").text(eventTypes[j+1]));
											j++;
											//console.log(eventTypes[j]);
										}	
																			
								  });
								
							}callback(events);
								
					
				},
				
				
			   //restricting available dates to 3 or 6 moths in future
				viewRender: function(view,element) {
					var now = new Date(); 
					var end = new Date();
					var begin =  new Date ();
					//var cal_date =new Date(view.start);
					var json_months=parseInt($('#json-duration').html())-1;
					end.setMonth((now.getMonth()+1) + json_months); //Adjust as needed
					begin.setMonth(now.getMonth()+1); //Adjust as needed
					
					cal_date=($('#calendar').fullCalendar('getView')).title;
					var cal_date_string = moment(cal_date, 'MMM YYYY').format('M')+'/'+moment(cal_date, 'MMM,YYYY').format('YYYY');
					var cur_date_string = (now.getMonth()+1)+'/'+now.getFullYear();
					var end_date_string = end.getMonth()+'/'+end.getFullYear();
					var begin_date_string = begin.getMonth()+'/'+begin.getFullYear();
														
					if(cal_date_string == begin_date_string) { jQuery('.fc-prev-button').addClass("fc-state-disabled"); }
					else { jQuery('.fc-prev-button').removeClass("fc-state-disabled"); }
					
					if(end_date_string == cal_date_string) { jQuery('.fc-next-button').addClass("fc-state-disabled"); }
					else { jQuery('.fc-next-button').removeClass("fc-state-disabled"); } 		
					
				},				

				eventRender: function (event, element, view) {
							/* hide previous and next months dates form calender  */	
							var date = $('.fc-center strong').text();							
							var month_int = moment(date,'MMM YYYY').format('M');
							//console.log(month_int);
							if(moment(event.start).format('M') != month_int) 
							{ element.addClass('ui-helper-hidden'); }
							else
							{ element.removeClass('ui-helper-hidden'); }
							/* hide previous and next months dates form calender--end  */

							element.find('.fc-title').html(element.find('.fc-title').text());
							var somedate = moment(event.start).format('YYYY-MM-DD');								
							var types = $('#calendar-type :selected').text();
							//console.log('web:'+event.website);
							var new_description;
							if(event.sitetype=="External")
										{
											new_description = '<div class="event-one-desc arrow_box"><div class="events-list"><div class="event-title">'+event.title+'</div><div class="event-addr">'+moment(somedate).format('MMMM DD')+'-'+moment(event.end_d).format('DD')+' '+moment(event.end_d).format('YYYY')+'<br/>'+event.addr+'</div><div class="event-desc">'+event.desc+'</div><a href="'+event.website+'" target="_blank" class="event-website external_link">SEE EVENT WEBSITE<em class="icon-go"></em></a></div></div>';							
										}
										else
										{
											new_description = '<div class="event-one-desc arrow_box"><div class="events-list"><div class="event-title">'+event.title+'</div><div class="event-addr">'+moment(somedate).format('MMMM DD')+'-'+moment(event.end_d).format('DD')+' '+moment(event.end_d).format('YYYY')+'<br/>'+event.addr+'</div><div class="event-desc">'+event.desc+'</div><a href="'+event.website+'" target="_blank" class="event-website">SEE EVENT WEBSITE<em class="icon-go"></em></a></div></div>';							
										}
							
							element.append(new_description);
							element.append('<div id="fc-more-cell" data-time='+somedate+'><div><a class="fc-more" onClick="toList();">SEE MORE EVENTS &raquo;</a></div></div>');
							   
							$(".fc-day-grid-event").attr("data-time", somedate);
							//$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
							if($("#calendar-type :selected").text() == 'All'){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
										else if($("#calendar-type :selected").text() == event.type){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
							
							$('#calendar-type').change( function(){
							  $("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").removeClass('activeDay');		
									if($("#calendar-type :selected").text() == 'All'){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
									else if($("#calendar-type :selected").text() == event.type){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
									});
									
									$(window).resize(function(){
										
							$('#calendar-type').change( function(){
									if($("#calendar-type :selected").text() == event.type){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
									});
									if($("#calendar-type :selected").text() == 'All'){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
										if($("#calendar-type :selected").text() == event.type){
											$("td[data-date='"+moment(event.start).format('YYYY-MM-DD')+"']").addClass('activeDay');
											}
									});
									
						},
						eventAfterAllRender: function (view) {						
							$('#calendar').fullCalendar('clientEvents',function(event){
							
								var data = $.parseJSON($("#json-data").html());						
						
							if ( data != undefined && data.results.assets.length > 0 ) {
								var m =0;
								 $.each(data.results.assets,function(m, entry) {
									var types = $('#calendar-type :selected').text();
									var clickedDate = moment(entry.metadata.EventStartDate).format('YYYY-MM-DD');
										if($.inArray(entry.metadata.EventStartDate,multipleEvents) == -1){
												$("div[data-time='"+clickedDate+"']").hide();
											//console.log(multipleEvents);
										
										}																			
										});						
							}
							
							
						});												

$('.fc-content').each(function(){
											// Grab event data
							$(this).qtip({
								content: $(this).next().next('.event-one-desc'),
								position: {
									at: 'bottom center',
									my: 'top center',
									viewport: $(window)
					 
								},
					  
								hide:{
												  delay:500,
												  fixed:true
											  },
								 style: {
									
												border: {}, 
												//tip: true // Apply a tip at the default tooltip corner
												tip: { width: 21, height: 17 } 
									}
							   })  
						})	
						   
						},
						
				 editable: true,
				 height: 844,
				 eventLimit: 10 // for all non-agenda views
			});
			$('#calendar').show();	
			if($(window).width() < 699){
			if (!isIeLessThan9) {
				$('#calender-list').show();
				$('#calendar').hide();
				}
			$('#calendar-type').change( function(){
				$('#calender-list').fullCalendar('removeEventSource');
				$('#calender-list').fullCalendar( 'refetchEvents' );
				});			
			}
				if($(window).width() > 699){
				if (!isIeLessThan9) {
				if(option == 'list-view'){
			$('#calendar').hide();
			$('#calendar').fullCalendar('removeEventSource');
			//$('#calender-list').fullCalendar('removeEventSource');
			$('#calender-list').show();
			$('.' + option).addClass('active');	
			$('.cal-view').removeClass('active');	
			} else {
					$('#calender-list').hide();
					$('#calendar').show();
					}
					}
					$('#calendar-type').change( function(){	
					var selectedOption = $(this).find(":selected").text();
					 //console.log(selectedOption);
					$('#calendar').fullCalendar('removeEventSource');
					$('#calendar').fullCalendar( 'refetchEvents' );				
				});
			}
			$('.list-view').click(function(){	
			$(this).addClass('active');			
			$('.cal-view').removeClass('active');
			$('#calendar').hide();
				$('#calender-list').show();
				if (!isIeLessThan9) {
				//$('#calender-list').fullCalendar('removeEventSource');
				//$('#calender-list').fullCalendar( 'refetchEvents' );
				}
				
			});
			$('.cal-view').click(function(){
			$('#calendar').show();
			$('.fc-center,.fc-view-container').show();
			$('#calender-list').hide();
				$(this).addClass('active');
				$('.list-view').removeClass('active');
			$('#calendar').fullCalendar( 'gotoDate', now );
			$('#calendar').fullCalendar('removeEventSource');
					$('#calendar').fullCalendar( 'refetchEvents' );		
			
			
			});
		}			
/* Calander and tooltip ends */		

$(".cal-select").each(function(){
            $(this).wrap("<span class='select-wrapper'></span>");
            $(this).after("<span class='holder'>All</span>");
});
		 //$(".holder").text('All');
        $(".cal-select").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".holder").text(selectedOption);
			//$('.holder2').hide();
			 });

// Store the window width
var windowWidth = $(window).width();

$(window).resize(function(){
         
		// Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowWidth) {

            // Update the window width for next time
            windowWidth = $(window).width();

            // Do stuff here
         $('#nav-toggle').hide('fast');
		  var div = document.createElement("div");
		div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
		var isIeLessThan9 = (div.getElementsByTagName("i").length == 1);
		if (!isIeLessThan9) {
         $('.search-form').hide();
		 } 
         $('.header').removeClass("fix-head");
         $('.search').removeClass('search-selected');
         $('.expand').find('ul').hide('fast');
		 $('.expand').removeClass('exp-btn');
		  $('.mobile-menu').removeClass('menu-open');
		  $('.mobile-nav-main').removeClass('menu-open');
		  
		  
		  setBlueLine(); /* blue line after tabs */	
		  
		  /* Find a Rep*/
		  if($(window).width()+17 < 1055){
							 $(".bottom-box").insertAfter(".tabsection");
						} else { $('.right-content').find('.bottom-box').insertAfter('.left-items');}
						
						
			/*padding-top for image*/
				if($(window).width()+17 >=700 && $(window).width()+17 <1055){
				 var height= $(".section-text h5").outerHeight();
				 var padding=height+19;
				 $(".section-image").css("padding-top",padding);
				 } else {
					 $(".section-image").css("padding-top","");
				 }
				/*padding-top for image*/
				
				/*Scrolling Top*/
				 if($(window).width()+17 <700){
					$(document).on( 'click', '.tab', function(e) {
					e.preventDefault();
			
				$('body').animate({
						scrollTop: $(this).offset().top - 15
					}, {
					duration: 'slow' , 
						easing: 'swing'
					}); 
							}); 
						$(window).bind("mousewheel", function() {
    $("html, body").stop();
						});
				} 
				else 
				{
					if($(window).width()+17 >=700){
					$(document).on( 'click', '.tab', function(e) {
						  $("html,body").stop();
					})
					}
				}
			
				/*Scrolling Top*/
				
				/* Light box resize */				
					$('.lightbox').click(function(){
			$("body").css("overflow","hidden");
			$(".images").css('display', 'block'); 
			$(".backdrop").css('display', 'block'); 
			
		$('.close').click(function(){
			$(".images").css('display', 'none');
			$("body").css("overflow","auto")	
			$(".backdrop").css('display', 'none')
		});
		}); 
				/* Light box resize */	
				
		/*calander on resize */
			if (!isIeLessThan9) {
				if ($('#calendar,#calender-list').length >0){
					$('#calendar').fullCalendar( 'render' );
					$('#calendar').show();
				}
			if($(window).width() < 699){
				$('#calender-list').show();
				$('#calendar').hide();
				$('#calendar-type').change( function(){
					if ($('#calendar,#calender-list').length >0){
						$('#calender-list').fullCalendar('removeEventSource');
						$('#calender-list').fullCalendar( 'refetchEvents' );
					}
				});			
			}
				if($(window).width() > 699){
					if ($('#calendar,#calender-list').length >0){
						$('#calendar').fullCalendar( 'render' );
						$('#calendar').fullCalendar( 'refetchEvents' );							
						$('.cal-view').addClass("active");
						$('.list-view').removeClass("active");
						$('#calender-list').hide();
						$('#calendar').show();
					
					$('#calendar-type').change( function(){	
					$('#calender').fullCalendar('removeEventSource');
					$('#calendar').fullCalendar( 'refetchEvents' );	
						
				});
					$('.list-view').click(function(){
					$(this).addClass('active');			
			$('.cal-view').removeClass('active');
				$('#calendar').hide();
				$('#calender-list').show();
			});
			$('.cal-view').click(function(){
			$(this).addClass('active');			
			$('.list-view').removeClass('active');
			$('#calendar').fullCalendar( 'gotoDate', now )
			$('#calender').show();
			$('#calender-list').hide();
			});
			}
			}
			}
			/* calander on resize ends*/

        }

		// Do Nothing 
		
    });
	
/* product info start*/
$(".cal-select2").each(function(){
            $(this).wrap("<span class='select-wrapper'></span>");
            $(this).after("<span class='holder'>Please Select</span>");
			
        });
		 $('.cal-select2').next().find(".holder").text('Please Select');
        $(".cal-select2").change(function(){
            var selectedOption = $(this).find(":selected").text();
            $(this).next(".holder").text(selectedOption);
			//$('.holder2').hide();
        });
function customCheckbox(checkboxName){
        var checkBox = $('input[name="'+ checkboxName +'"]');
        $(checkBox).each(function(){
            $(this).wrap( "<span class='custom-checkbox'></span>" );
            if($(this).is(':checked')){
                $(this).parent().addClass("selected");
            }
        });
        $(checkBox).click(function(){
            $(this).parent().toggleClass("selected");
        });
    }
/* product info end*/

/* Find a Rep form */
$('.rep-not-found').hide();
//('.rep-zip input').prop('disabled', true);
$("#findarep").find(":selected").prop("selected", false);
$('.rep-zip,.or').hide();
$('#findarep').change( function(){
		var rep = $(this).find(":selected").text();
		//if(rep == "USA" || rep == "Please Select" ){
		if(rep == "US"){
			$('.rep-zip,.or').show();
			$('#prd_phn').val("");
			//$('.rep-zip input').prop('disabled', false);
		} else {
			$('.rep-zip,.or').hide();
			//$('.rep-zip input').prop('disabled', true);
		}
});	
$('.find-button').click(function(eve){
	eve.preventDefault();
	$('.address-details').hide();
	$('.rep-not-found').show();
	//window.location.replace("/html_mockups/sm/find_a_rep/find_a_rep_message.html")
});


 }
 
//  );


 ////////
/* blue line after tabs start */
 
function setBlueLine()
{
	var tabs_width=0;
	var tabsection_width=$(".tabsection").width();
	$('.tab-div li').each(function() {
	 tabs_width += $(this).outerWidth();
	});
	$(".bottom-line").css("width",((tabsection_width)-(tabs_width)));
}
/* calander*/
function toList(){
				$('.fc-center,.fc-view-container').hide();
				$('#calender-list').show();
				$('.cal-view').removeClass("active");
				$('.list-view').addClass("active");
				
			}

/*Videos for product page*/
function playVideo(local_video_id) {

    var object_code =
        '<iframe src="//players.brightcove.net/1992769035001/default_default/index.html?videoId=' + local_video_id + '" ' +
        'allowfullscreen ' +
        'webkitallowfullscreen ' +
        'mozallowfullscreen ' +
        'width="292" ' +
        'height="200"></iframe>';
    $("#" + local_video_id).parent().html(object_code);
    brightcove.createExperiences();

}
			 
//custom scripts for this player and functionality 
  var players = [];	// array to hold players
			 
	function onTemplateLoad (id) {
		// Add each player's id to the players array
		console.log(id + " loaded");
		players.push(id);
	}

	function onTemplateReady (event) {
		// Add a PLAY event handler to each player
		var player = brightcove.api.getExperience(event.target.experience.id);
		var videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
		// Wrap handler in anaonymous function
		videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, function(event) {onPlay(event);});
	}

	function onPlay(event) {
		var id = event.target.experience.id;
		console.log ("Player " + id + " playing");

		// Loop through the players array, and stop the others
		for (var i = 0; i < players.length; i++) {
			if (players[i] != id) {
				console.log ("Stopping player " + players[i]);
				var player = brightcove.api.getExperience(players[i]);
				var videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER); 
				videoPlayer.pause(true);
			}
		}
	}
//end custom scripts for this player and functionality













handleDocumentLoaded();