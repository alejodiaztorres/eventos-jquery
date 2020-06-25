$(document).on('turbolinks:load', function() {
    $('#select-box').change(function() {
        $('.options').hide();
        switch ($(this).val()) {

            case '1':
                $('#option-1').show();
                break;

            case '2':
                $('#option-2').show();
                break;

            case '3':
                $('#option-3').show();
                break;
        }
    })
})