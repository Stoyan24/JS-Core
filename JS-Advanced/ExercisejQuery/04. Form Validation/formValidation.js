function validate() {
    $('#submit').on('click', validateEntries);
    $('#company').on('change', showHideCompanyNumber);

    function validateEntries(event){
        event.preventDefault();
        let validFields = true;

        // List all the patterns together
        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        let passwordPattern = /^\w{5,15}$/g;
        let emailPattern = /\w*@\w*\.\w*/g;
        let companyPattern = /^[1-9][0-9]{3}$/g;

        if ($('#password').val() != $('#confirm-password').val() || !$('#password').val().match(passwordPattern) || !$('#confirm-password').val().match(passwordPattern)){
            validFields = false;
            $('#password').css('border', 'solid red');
            $('#confirm-password').css('border', 'solid red');
        }
        else {
            $('#password').css('border', 'none');
            $('#confirm-password').css('border', 'none');
        }

        // Check all the elements with their regex pattern
        inputCheck($('#username'), usernamePattern);
        inputCheck($('#email'), emailPattern);

        if ($('#company').is(":checked"))
            inputCheck($('#companyNumber'), companyPattern)


        if (validFields)
            $('#valid').css('display', 'inline');
        else
            $('#valid').css('display', 'none');

        function inputCheck(jQueryElement, regexPattern){
            if (!jQueryElement.val().match(regexPattern) || jQueryElement.val() == null){
                validFields = false;
                jQueryElement.css('border', 'solid red');
            }
            else
                jQueryElement.css('border', 'none');
        }
    }

    function showHideCompanyNumber(){
        if ($(this).is(":checked"))
            $('#companyInfo').css('display', 'inline');
        else
            $('#companyInfo').css('display', 'none');
    }
}