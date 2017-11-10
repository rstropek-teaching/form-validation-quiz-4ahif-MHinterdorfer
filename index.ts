$(document).ready(function(){
    $(':input[type="submit"]').prop('disabled', true);
    $('#emailMandatory').hide();
    $('#otherMediaChannel').hide();
    var valid = true;

    $(document).change(function(){
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $("#email").val();
        var newsletterCheck = $('#newsletter').is(':checked');
        var mediaChannelSelect = $('#mediaChannelSelect').val();

        if (firstName === ""){
            $('#firstNameMandatory').show();
            valid = false;
        }else{
            $('#firstNameMandatory').hide();
            valid = true;
        }

        if (lastName === ""){
            $('#lastNameMandatory').show();
            valid = false;
        }else{
            $('#lastNameMandatory').hide();
            valid = true;
        }

        if (newsletterCheck && email === ''){
            $('#emailMandatory').show();
            valid = false;
        }else{
            $('#emailMandatory').hide();
        }

        if(mediaChannelSelect === 'Other'){
            $('#otherMediaChannel').show();
            if($('#otherMediaChannel').val() === ''){
                valid = false;
            } 
        }else{
            $('#otherMediaChannel').hide();
        }

        
        if(valid){
            $(':input[type="submit"]').prop('disabled', false);
        }else{
            $(':input[type="submit"]').prop('disabled', true);
        }
    });
});