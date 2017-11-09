$(document).ready(function(){
    //Hide all unnecessary parts
    $(':input[type="submit"]').prop('disabled', true);
    $('#emailMandatory').hide();
    $('#otherMediaChannel').hide();


    $('#firstName').change(function(){
        var textVal = $("#firstName").val();
        if (textVal === ""){
            $('#firstNameMandatory').show();
        }else{
            $('#firstNameMandatory').hide();
        }
        validateForm();
    });

    $('#lastName').change(function(){
        var textVal = $("#lastName").val();
        if (textVal === ""){
            $('#lastNameMandatory').show();
        }else{
            $('#lastNameMandatory').hide();
        }
        validateForm();
    });

    $('#email, #newsletter').change(function(){
        var email = $("#email").val();
        var checkbox = $('#newsletter').is(':checked');
        if (checkbox && email == 0){
            $('#emailMandatory').show();
        }else{
            $('#emailMandatory').hide();
        }
        validateForm();
    });

    $('#mediaChannelSelect').change(function(){
        var select = $('#mediaChannelSelect').val();
        if(select === 'Other'){
            $('#otherMediaChannel').show();
        }else{
            $('#otherMediaChannel').hide();
        }
        validateForm();
    });
});

function validateForm() {
    var isValid = true;
    $('.form-control:input[type="text"]').each(function() {
      if ( $(this).val() === '' ){
        $(':input[type="submit"]').prop('disabled', true);
        isValid = false;
        return false;
      }
    });
    if(isValid) {
        if($('#newsletter').is(':checked') &&  $("#email").val()!=0){
            $(':input[type="submit"]').prop('disabled', false);
        }else if(!$('#newsletter').is(':checked')){
            $(':input[type="submit"]').prop('disabled', false);
        }
    }
    return isValid;
  }