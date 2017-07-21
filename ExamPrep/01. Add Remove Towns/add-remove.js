function addRemoveTowns() {
    let addButton = $('#btnAdd');
    let deleteButton = $('#btnDelete');

    deleteButton.on('click', function () {
        $('#towns').find(':selected').remove();
    });

    addButton.on('click', function () {
        let text = $('#newItem').val();

        if (text !== '') {
            let option = $('<option>').text(text);
            $('#towns').append(option);
        }

        $('#newItem').val(null);


    })
}