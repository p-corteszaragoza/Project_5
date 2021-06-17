function initAbout(){
    $('#about-me').hide();
    $('#about-salon').hide();
    $('#read-3').hide();
    $('#read-4').hide();

    $('#card-about-salon').height('33rem');
    $('#card-about-me').height('26rem');


    $("#send-message").on('click', function(){

        if($("#email").val() == "" || $("#msg").val() == "" ){ 
            $("#alert-box-msg").removeClass("hidden");
            $("#alert-box-msg").addClass("alert-danger");
            $("#alert-box-msg").text("Add the requiered information");
            setTimeout(function(){
                $("#alert-box-msg").addClass("hidden");
                $("#alert-box-msg").removeClass("alert-danger");

    
            }, 2000);
        }else{
           
            $("#alert-box-msg").removeClass("hidden");
            $("#alert-box-msg").text("The register was successful");
            setTimeout(function(){
                $("#alert-box-msg").addClass("hidden");
            }, 2000);
        }
    });

    $('#read-1').on('click', function(){
        $('#read-1').hide();
        $('#about-salon').show();
        $('#read-3').show();
        $('#card-about-salon').height('51rem');
    });

    $('#read-2').on('click', function(){
        $('#about-me').show();
        $('#read-2').hide();
        $('#read-4').show();
        $('#card-about-me').height('36rem');
    });

    $('#read-3').on('click', function(){
        $('#read-1').show();
        $('#about-salon').hide();
        $('#read-3').hide();
        $('#card-about-salon').height('33rem');
    });

    $('#read-4').on('click', function(){
        $('#read-2').show();
        $('#about-me').hide();
        $('#read-4').hide();
        $('#card-about-me').height('26rem');
    });
}

window.onload=initAbout;
