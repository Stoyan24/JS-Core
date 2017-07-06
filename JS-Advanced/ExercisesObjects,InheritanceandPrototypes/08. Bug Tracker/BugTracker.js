function solve() {
    let storage = [];
    // let sortedMap;
    let initialId = 0;

    let result = {
        report: function (author, description, reproducible, severity) {
            storage.push({
                ID: initialId,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            });
            initialId++;
            print (result.selector)
        },
        setStatus: function (id, status) {
            for (let obj of storage){
                if (obj.ID == id){
                    obj.status = status
                }
            }
            print (result.selector)
        },
        remove: function (id) {
            let targetIndex = 0;
            for (let i = 0;i < storage.length;i++){
                if (storage[i].ID == id){
                    targetIndex = i;
                    break
                }
            }
            storage.splice(targetIndex, 1);
            print (result.selector)
        },
        sort: function (method) {
            if (method == 'author'){
                storage.sort((a,b) => {
                    return a[method].localeCompare(b[method])
                })
            } else {
                storage.sort((a,b) => {
                    return a[method] - b[method]
                })
            }
            print (result.selector)
        },
        output: (selector) => {
            result.selector = selector
        },
        selector:'',
    }

    function print (selector){
        let container = $(selector);
        container.empty();
        for (let i=0;i<storage.length;i++){
            let report = $('<div>');
            report.attr('id', `report_${storage[i].ID}`);
            report.addClass('report');
            let descrDiv = $('<div class="body">');
            let descr = $('<p>').text(`${storage[i].description}`);
            descrDiv.append(descr);
            let titleDiv = $(`<div class="title">`);
            let spanAuthor = $(`<span class="author">`).text(`Submitted by: ${storage[i].author}`);
            let spanStatus = $(`<span class="status">`).text(`${storage[i].status} | ${storage[i].severity}`);
            titleDiv.append(spanAuthor).append(spanStatus);
            report.append(descrDiv).append(titleDiv);
            container.append(report)
        }
    }
    return result
}