$(document).ready(function() {
    // set action on button click
    $('input[type=button]').click(function() {
        update();
        // empty input field value once button is clicked
        $('#inputform').val(" ");
    });

    function update() {
        // update the text in random value element
        $('.randomValue').html($('#inputform').val());
    }
});
