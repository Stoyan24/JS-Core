function attachEvents() {
    $('a.button').click(clicked);

    function clicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
        $(this).click(op);
        function op() {
            $(this).removeClass('selected');
        }
    }
}