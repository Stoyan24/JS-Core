function search() {
    let pattern = $('#searchText').val();
    let matched = $(`ul#towns li:contains(${pattern})`);
    matched.css('font-weight', 'bold');
    let length =  matched.length;
    $(`ul#towns li:not(:contains(${pattern}))`).css('font-weight', '');
    $('#result').text(`${length} matches found.`)
}