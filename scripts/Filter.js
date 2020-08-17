
       
        $(document).ready(function() {
       
         var pageName=$('#pagename').text();
          var duration=$('#json-duration').text();
       // alert(duration);
       // alert("pagename is"+pageName);
               $.ajax({
                    type: "post",
                    url: pageName,
                    data: "eventCategory=" +'All'+"&ShowCalendarDuration=" + duration,
                    success: function(msg){
                       $("#json-results").append($(msg).find('#json-data'));
                               
                    }
                });
           
 
        });

    /* find a sales rep */
	
		function URLRedirection() {
			
		var pageName=$('#pagename').val();
		//var country=document.getElementById("findarep").value;
		var country = $('#findarep').find(":selected").text();		
		var zipcode=document.getElementById("prd_phn").value;
		var zipcode_val=document.getElementById("prd_phn").value;
		var zipcode_length= zipcode_val.length;
				
		var div='<div class="address-details rep-not-found" id="error">'
		var content='<p>No Results Found</p>';
		var endDiv ='</div>';	
		var resultItemContainerDiv ='';
		resultItemContainerDiv+=div + content + endDiv;
		
		
		
		if(country =="US"){
		$.ajax({
		type: "post",
		url: pageName,
		data: "country=" +country+"&zipcode=" + zipcode,
		success: function(msg){
			
								
		$("#resultDiv").empty(); 	
		$("#resultDiv").append($(msg).find('#sample'));
		}
		});
		}
		else if(country !="US")
		{
		$.ajax({
		type: "post",
		url: pageName,
		data: "country=" +country+"&zipcode=" + zipcode,
		success: function(msg){
			
				
		$("#resultDiv").empty(); 	
		$("#resultDiv").append($(msg).find('#sample'));
		}
		});
		}
		else
		{
		$('#resultDiv').html(resultItemContainerDiv);
		
		}
		}
