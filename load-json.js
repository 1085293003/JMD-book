$(document).ready(function(){
	$(document).bind('deviceready', function(){
		//Phonegap ready
		onDeviceReady();
	});

    
    var output = $('#test-get');
    if(window.localStorage.getItem("JMDJSONP") === null){
    
    
	

	$.ajax({
		url: 'http://jmdmahdi.ir/json.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 20000,
		success: function(data, status){
            window.localStorage.setItem("JMDJSONP", JSON.stringify(data));
  
             var json = JSON.parse(window.localStorage.getItem("JMDJSONP"));
        var tr;
        for (var i = 0; i < json.length; i++) {
           
            var landmark = '<form method="GET" enctype="multipart/form-data" action="" id="myForm-'+ json[i].id +'"><a>'+ json[i].post_title+'</a><input type="hidden" name="name" id="img_val" value="'+ json[i].url+'" /><input type="hidden" name="JMDSP" id="img_val" value="show" /><input type="hidden" name="text" id="img_val" value="'+ json[i].text+'" /><input type="hidden" name="image" id="img_val" value="'+ json[i].img+'" /><input type="submit" id="'+ json[i].id+'" value="Take Screenshot Of Div Below" /></form><script>$("#'+ json[i].id+'").click( function() { window.localStorage.setItem("lastname", "'+ json[i].id+'"); });</script>';
            output.append(landmark);
            
        }
			
            
		},
		error: function(){
		   output.text('در ارتباط با سرور مشکلی پیش اومد لطفا پس از برسی ارتباط خود با اینترنت دوباره امتحان کنید');
		}
	});}else{
        
        var json = JSON.parse(window.localStorage.getItem("JMDJSONP"));
        var tr;
        for (var i = 0; i < json.length; i++) {
           
            var landmark = '<form method="GET" enctype="multipart/form-data" action="" id="myForm-'+ json[i].id +'"><a>'+ json[i].post_title+'</a><input type="hidden" name="name" id="img_val" value="'+ json[i].url+'" /><input type="hidden" name="JMDSP" id="img_val" value="show" /><input type="hidden" name="text" id="img_val" value="'+ json[i].text+'" /><input type="hidden" name="image" id="img_val" value="'+ json[i].img+'" /><input type="submit" id="'+ json[i].id+'" value="Take Screenshot Of Div Below" /></form><script>$("#'+ json[i].id+'").click( function() { window.localStorage.setItem("lastname", "'+ json[i].id+'"); });</script>in yek id ksdhshd';
            output.append(landmark);
            
        }
    }
    
});
    