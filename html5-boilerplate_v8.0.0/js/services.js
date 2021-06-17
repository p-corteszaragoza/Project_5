function initService(){
    $('#nails-service').hide();
    $('#shower-service').hide();
    $('#full-service').hide();

    $('#hair').on('click', function(){
        $('#hair-service').show();
        $('#nails-service').hide();
        $('#shower-service').hide();
        $('#full-service').hide();
    });

    $('#nails').on('click', function(){
        $('#hair-service').hide();
        $('#nails-service').show();
        $('#shower-service').hide();
        $('#full-service').hide();
    });

    $('#shower').on('click', function(){
        $('#hair-service').hide();
        $('#nails-service').hide();
        $('#shower-service').show();
        $('#full-service').hide();
    });

    $('#full').on('click', function(){
        $('#hair-service').hide();
        $('#nails-service').hide();
        $('#shower-service').hide();
        $('#full-service').show();
    });

}

window.onload=initService;
