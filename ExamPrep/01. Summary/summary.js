function generateSummary(selector) {
    $(selector).on('click', function () {
        let summaryText = $('#content strong').text();
        createSummary(summaryText);
    });

    function createSummary(summaryText) {
        let summary = $('<dir>');
        summary.attr('id', 'summary');
        let title = $('<h2>').text('Summary');
        let p = $('<p>').text(summaryText);

        summary.append(title);
        summary.append(p);
        let parent = $('#content').parent();
        parent.append(summary);
    }
}