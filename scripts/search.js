var globalSearchParam = 's';
var globalSearchDomainParam = 'c';
var banzSearchParam = 'search';
var isResultExist = false;
var queryText = '';
var rowLimit = 0;
var rowCount = 0;
var startRecord = 1;
var currentPage = '1';	
var showresults=0;

//console.log("inside search js");



function loadSearchPage(txtfield){				
                var txtfieldvalue = '';
                txtfieldvalue =  document.getElementById(txtfield).value; 
				//console.log("txtfieldvalue"+txtfieldvalue);
                if(txtfieldvalue.length > 0 && txtfieldvalue != 'Search'){
					var search_url = $(".headerSearch .searchUrl").val();
					//console.log("search_url"+search_url);
					var search_query_url = search_url + banzSearchParam +"="+txtfieldvalue;					
					$(".headerSearch").attr("action",search_url);
                }
                else
                {
                    ////alert('Please enter a search criteria'); 
					return false;
                }				
}
//completed
function loadBodyResults(){           
                //console.log("inside loadbody results");
				var getSearchText = document.getElementById('search-body');
                var txtfieldvalue =  getSearchText.value;	
                //console.log("query string"+txtfieldvalue);		
                if(txtfieldvalue.length > 0 && txtfieldvalue != 'Search'){     
					txtfieldvalue = txtfieldvalue.replace(/[@#()$&]/gi, ' ');	
					if(txtfieldvalue !=""){				
					   var searchReplacedString=txtfieldvalue.replace(/\+/gi," "); 
					   var newURL= window.location.href.match(/^[^\#\?]+/)[0] + '?q='+searchReplacedString;
					   newURL = encodeURI(newURL);
					   window.location.href = newURL;
				   }else{
					//alert('Please enter a search criteria');
				   }
                }
                else
                {
                   //alert('Please enter a search criteria');
                }
}
//Completed
function loadResults(txtValue){   
				//console.log("loadResults");		
                var suggestionlist='';
                var totalRows = 0;
                var currentPage = '1';
                queryText = txtValue;
				//console.log("queryText");
				var searchReplacedString=queryText.replace(/%20/gi," ").replace(/\+/gi, " "); 
				//console.log("searchReplacedString"+searchReplacedString);
				document.getElementById('search-body').value= searchReplacedString;

				document.getElementById('formsearch').value=searchReplacedString;

		
    if(queryText!=null && txtValue != 'Search' && $.trim(queryText).length >0){
        $.when( doSearch('1') ).done(function( result ) {                  
        }); 

                }
                else
                {
                                //alert('Please enter search criteria');
                                return false;
                }
}    

function doSearch(searchQueryText, strtRcd ){
				//console.log("doSearch1");
                queryText = searchQueryText;
                doSearch(strtRcd);
}

//Need to work on the div
function doSearch(strtRcd){	
//console.log("dosearch2");

            isResultExist = false;			
            $('#suggestionResultDiv').html("");
            
            if(queryText==null || $.trim(queryText).length ==0){
                return false;
            }

            
            $('#mainBody').hide();
		
            var tempResultItem ='<div class="resultItem">' ;
            var titleDiv = '<div id="title">';          
            var descDiv = '<div id="desc"> ';

            var anchorStart = '<a href="';
            var anchorEnd = '"></a>';
            var endDiv = '</div>';
			var c=document.getElementById('searchServerURL').value;
			var urlValue=document.getElementById('searchJSURL').value;
			var url='';
            var resultItem = '';

            var title = '';
            var desc = '';
            var summary = '';
            var author = '';
            var fileExtension = '';
            var fileType = '';
            var size = '';
            var iconMap = { pptx: "icpptx.png",
                            ppt: "icpptx.png",
                            pdf: "icpdf.png",
                            docx: "icdocx.png",
                            doc: "icdocx.png",
                            xlsx: "icxlsx.png",
                            xls: "icxlsx.png" 
                        };
          
            return $.ajax({
                    type: "POST",
					url: urlValue,
                    data: {
                        's' : queryText ,
                        'StartRow' : eval(eval(strtRcd)-1),
                        'c' : c                 
                    },
                    cache: false,
                    dataType: "html"

             }).done(function(response) { 

                 
                  if(response!=""){

					var firstRecord = "found";
                      
                      var xmlDoc = $.parseXML( response );

					  
                      var xml = $( xmlDoc );


					
                      rowLimit = 0;
                    
                     $(xml).find("element").attr("type","SP.KeyValue").each(function () {
                              var key = $(this).find('Key').text();
                                if(key == 'RowLimit'){
                                    rowLimit = eval($(this).find('Value').text());                                  
                                }                             
                          });
                      
                     $(xml).find('PrimaryQueryResult').each(function(){

                          totalRows = eval($(this).find("TotalRows").text()) ;	
							//console.log("totalRows"+totalRows);
                          rowCount = eval($(this).find("RowCount").text() );
						  	//console.log("rowCount"+rowCount);
                          var currentIndex=startRecord;
						  //console.log("currentIndex"+currentIndex);
						  var lastrecordcount=currentIndex+rowCount;
						  var lastrecord=eval(lastrecordcount)-1;
						 // console.log("lastrecord"+lastrecord);
                        
                        
                      $(this).find("element").attr("type","SimpleDataRow").each(function () {
                          
                        $(this).find('Cells').each(function(){

                            $(this).find('element').attr('type','KeyValue').each(function(){
                                var key = $(this).find('Key').text();
                                var value = $(this).find('Value').text();

                                    if(key=='Title'){
                                        title = value;
                                        
                                    }
                                    else if(key=='Url'){
                                        url = value;
                                            
                                    }else if(key=='HitHighlightedSummary'){
                                        summary = value;
                                    }
                                    else if(key=='Author'){
                                        author = value;
                                    }
                                    else if(key=='FileExtension'){
                                        fileExtension = value;
                                    }
                                    else if(key=='FileType'){
                                        fileType = value;
                                    }
                                    else if(key=='Size'){
                                        size = value;
                                    }
                                       
                            });



                           // // var icon = '';
                           // // var img = '';
                            // if(fileType in iconMap){
                                // icon = $.map( iconMap, function( value, key ) {



                                    // if(key == fileType){
                                        // return value ;
                                    // }

                                    

                                // }); 
                               // // img = '<img  src="/baxapps/images/'+icon+'"  style="display: inline;" />&nbsp;'; 

                            // }	
							


							
							
							var temp='';
							var fileName = url.split("/")[url.split("/").length-1];
						if(fileName.indexOf(".page") != -1 || fileName.indexOf(".pdf") != -1 || fileName.indexOf(".html") != -1 ){	
							//temp = titleDiv + img +'<a href="'+url+'" class="bax_resultstitle">'+title + '</a>'+ endDiv;


							temp = titleDiv + '<a href="'+url+'">'+title + '</a>'+ endDiv;
						}	                           
						temp += descDiv + summary + endDiv;







											
						//Add the Loading Div here
					
					
			

			
							//Add the Index Div here

                            var resultItemContainerDiv ='';
							if(firstRecord == "found")
							{
							 resultItemContainerDiv='<div class="results-box" >';
							 firstRecord="not found";
							}
							else if(currentIndex == lastrecord)
							{
							 //console.log("last record found");
							 resultItemContainerDiv='<div class="results-box ofter-first"  id="search-last" >';
							}
							else
							{
								resultItemContainerDiv='<div class="results-box ofter-first" >';
							}
							
                          //  var indexDiv = '<div id="indexDiv" class="floatLeft">';
                          //  indexDiv+=eval(currentIndex) + endDiv;
                            resultItemContainerDiv+=tempResultItem + temp + endDiv;
                            resultItem += resultItemContainerDiv + endDiv;
                            currentIndex++;
                              
                        });
                        
                         isResultExist = true;
                      });

                     });
                      
                     if(isResultExist){
                          $('#suggestionResultDiv').html("");
							 if(eval(totalRows)==0){	
								
								var noRsts = "<div class='resultItem'>";
								noRsts = noRsts+"<b>Your search returned no results. Try broadening your search criteria</b>"
								noRsts =noRsts+"</div>"
								$('.seachResultdiv').html(resultItem+noRsts);
							  }else{
								$('.seachResultdiv').html(resultItem);
							  } 
                         // $('#mainBody').show();
						  
						
                          if(eval(totalRows)==0){
							  document.getElementById('noOFRecs').value='0';
                              showNoResultFound();  
                          }else{
						   document.getElementById('noOFRecs').value=eval(totalRows);
                             doPaginate(totalRows);
                          }

						
                         
                            return isResultExist;
                     }else{
                         $('#suggestionResultDiv').html("");


                         $('.result-message').hide();
                         
                         return isResultExist ;
                     }


                  
                  }else{
                     //alert("Error in response.Please try again later.");
                     $('#suggestionResultDiv').html("");


                     $('.result-message').hide();
					 
                    return  isResultExist ;
                  }
                }).fail(function() { 
                   //alert("The search has failed.Please contact the System Administrator."); 

				 
                   
                });

                
    }

function doPaginate(totalNoOfRecords){
    //console.log("do paginate");

document.getElementById('noOFRecs').value=totalNoOfRecords;



    var totalPageToDisplay = 5;
    var recordsPerPage = '10';
    var totalNoOfPages = 0;
    var prevText = 'Prev';
    var nextText = 'Next';
    
    if(eval(totalNoOfRecords) > eval(recordsPerPage)){
        totalNoOfPages = Math.floor(eval(totalNoOfRecords)/eval(recordsPerPage));
        if(eval(eval(totalNoOfRecords)%eval(recordsPerPage))> 0){
            
            totalNoOfPages = eval(eval(totalNoOfPages)+1);
        }       
    }else{
		if(eval(showresults)==0){
			showresults=1;
            showResultInfo();
         }
        //return showResultInfo ();
    }
    
    var loopStartIndex = 1;
    var loopLastIndex = 1;
    
    if(eval(totalNoOfPages) > 5){
        if(eval(currentPage)<=5){
            loopLastIndex = eval(eval(currentPage)+1);
        }else{
            loopLastIndex = eval(eval(currentPage)+1);
            loopStartIndex = eval(eval(loopLastIndex)-eval(totalPageToDisplay));
        }
    }else{
        loopStartIndex = 1;
        loopLastIndex = totalNoOfPages ;
        
    }
    var temp = '';
    var prevNodeDsabled = '<span class="prev li-space">&#171;&nbsp;PREV</span>';
    var prevNodeEnabled = '<a href="#" id="prevPage"  class="prev li-space">&#171;&nbsp;PREV</a>';
    var nextNodeDsabled = '<span class="prev li-space">NEXT&nbsp;&#187;</span>';
    var nextNodeEnabled = '<a href="#" id="nextPage"  class="next li-space">NEXT&nbsp;&#187;</a>';
    
    for(var i=loopStartIndex; i<= loopLastIndex; i++){
        if(eval(i)==eval(currentPage)){
            temp += '<span class="current li-space">'+i+'</span>';
        }else{
            temp += '<a href="#" class="pageIndex li-space" value="'+i+'">'+i+'</a>';
        }
        if(eval(i)== eval(totalNoOfPages)){
            break;
        }

    }
    if(eval(totalNoOfPages) > 1){
        if(eval(currentPage) == 1){
            temp = prevNodeDsabled + temp + nextNodeEnabled ;
        }else if(eval(currentPage) == eval(totalNoOfPages)){
            temp = prevNodeEnabled + temp + nextNodeDsabled ;
       }else {
            temp = prevNodeEnabled + temp + nextNodeEnabled ;
        }
        
    }
    $('.pagination').html(temp);

        $('#prevPage').click(function(){  
			//console.log("prev page");
            currentPage = eval(eval(currentPage)-1) ;
            startRecord = eval(eval(rowLimit) * (eval(currentPage)-1)+1);	
			//console.log("startRecord"+startRecord);	
            doSearch(startRecord);			
        });


        $('#nextPage').click(function(){    
			//console.log("nextPage");
            currentPage = eval(eval(currentPage)+1) ;
            startRecord = eval(eval(rowLimit) * (eval(currentPage)-1)+1);	
			//console.log("startRecord"+startRecord);			
            doSearch(startRecord);			
        });

        
    
        $('.pageIndex').click(function(){	
		    //console.log("second link");    
            var page = $(this).attr('value');
            startRecord = eval(eval(rowLimit) * (eval(page)-1)+1);
			//console.log("startRecord"+startRecord);
            currentPage = page ;            
            doSearch(startRecord);            
        });
        
		if(eval(showresults)==0){
			showresults=1;
            showResultInfo();
         }
      
}


//completed
function showResultInfo(){
   // console.log("showResultInfo");


        $('.result-message').show();
		$(".result-message").append('<p>There are &nbsp;</p><p id="totalRecord">'+eval(totalRows)+'</p><p>&nbsp; results for &nbsp;</p>'); 
		$(".result-message").append('<p id="queryText">'+queryText+'</p>'); 
           
      








}
//completed
function showNoResultFound(){
    //console.log("showNoResultFound");
    $('.result-message').show();


	
	$(".result-message").append('<p>There are &nbsp;</p><p id="totalRecord">No</p><p>&nbsp; results for &nbsp;</p>'); 
	$(".result-message").append('<p id="queryText">'+queryText+'</p>'); 
}

function getUrlParams() {
     //console.log("getUrlParams");
                url = window.location.href;
if(url.indexOf("?q=") > -1) 
{
    var params = {};
    url.substring(1).replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (str, key, value) {
        params[key] = value;
         });
    //return params;
                var search = params["q"].replace(/%20/gi," ").replace(/\+/gi, " ");
			 
                if(search  && search .length > 0) {
                    setTimeout(function() {
                        loadResults(search);
                    }, 500)
                }                    
          }                      
                                
}


function checkenterBodyEvent(event) 
{ 
    //console.log("checkenterBodyEvent");
   if (event.keyCode == 13){
        loadBodyResults();
                }
} 

function checkenterHeaderEvent(event) 
{ 
    //console.log("checkenterHeaderEvent");
   if (event.keyCode == 13){
        //loadSearchPage('searchHeader');
		$("form.headerSearch btn").click();
                }
}