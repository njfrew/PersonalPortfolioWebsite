function setImage() {
    $("#imageContent").append("<img src=\"IMG_8657.JPG\" alt=\"Glimpse of Heaven\" class=\"imageHolder\" style=\"width: 45%;\">");
}

function landscapes() {
    $("#imageContent").html("<p>Loading...</p>");
    $.getJSON("http://ec2-18-222-217-226.us-east-2.compute.amazonaws.com/landscapes.json", function(data) {
        var picArray = data.landscapes;
        $("#imageContent").html("<div class=\"imageWrapper\">");
        for(var i = 0; i < picArray.length; i++){
            $("#imageContent").append("<img src=\"" + picArray[i].lsFile + "\" alt=\"" + picArray[i].lsAlt + "\" class=\"imageHolder\">");
        }
        $("#imageContent").append("</div>");  
    });
}

function portraits() {
    $("#imageContent").html("<p>Loading...</p>");
    $.getJSON("http://ec2-18-222-217-226.us-east-2.compute.amazonaws.com/portraits.json", function(data) {
        var picArray = data.portraits;
        $("#imageContent").html("<div class=\"imageWrapper\">");
        for(var i = 0; i < picArray.length; i++){
            $("#imageContent").append("<img src=\"" + picArray[i].ptFile + "\" alt=\"" + picArray[i].ptAlt + "\" class=\"imageHolder\" style=\"width: 30%;\">");
        }
        $("#imageContent").append("</div>");  
    });
}

function misc() {
    $("#imageContent").html("<p>Loading...</p>");
    $.getJSON("http://ec2-18-222-217-226.us-east-2.compute.amazonaws.com/misc.json", function(data) {
        var picArray = data.misc;
        $("#imageContent").html("<div class=\"imageWrapper\">");
        for(var i = 0; i < picArray.length; i++){
            $("#imageContent").append("<img src=\"" + picArray[i].miFile + "\" alt=\"" + picArray[i].miAlt + "\" class=\"imageHolder\">");
        }
        $("#imageContent").append("</div>");  
    });
}

var serviceName;

function serviceDrag() {
     $(document).ready(function() {
        $(".serviceWrapper").draggable();
                
        $("#serviceDropper").droppable({
                    
            drop: function(event, ui) {
                console.dir(event);
                console.dir(ui);
                        
                var service = ui.draggable;
                serviceName = service.prop("id");
                
                        
            }
                    
        });
    });
}

function doSubmit() {
    var formObj = document.getElementById("myForm");
            
    formObj.action = "servicePHP.php?serviceName=" + encodeURIComponent(serviceName);
    formObj.submit();
}

function login() {
	$(function(){
        $('#login').click(function(){
            $.post('process.php', {
                action: 'login',
                username: $("#username").val(),
                password: $("#password").val()
            }, function(data) {
                $('#stage').html(data);
            });
        });
		
		$('#logout').click(function(){
			$.post('process.php', { action: 'logout' }, function(data){
				$('#stage').html(data);
			});
		});
		$('#get').click(function(){
			$.post('process.php', { action: 'get'}, function(data){
				$('#stage').html(data);
			});
		});
	});
}
