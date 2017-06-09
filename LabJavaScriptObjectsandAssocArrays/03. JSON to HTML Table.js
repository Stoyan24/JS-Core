function doHtml(input) {
    let a = JSON.parse(input);

    let html = '<table>\n';
    html += '   <tr>';

    for (let key of Object.keys(a[0])) {
        html += `<th>${htmlEsca(key)}</th>`
    }
    html += '</tr>\n';

    for (let value of a) {
        html += '   <tr>';
        Object.keys(value).forEach(k => html += `<td>${htmlEsca(String(value[k]))}</td>`);
        html +='</tr>\n';
    }

    html += '</table>';
    console.log(html);

    function htmlEsca(text) {

        let arrHtml = {'&' : '&amp;',  '<':'&lt;', '>':'&gt;', '"':'&quot;', "'": '&#39;'};
        return text.replace(/[&<>\"\']/g, ch => arrHtml[ch]);
    }
}
