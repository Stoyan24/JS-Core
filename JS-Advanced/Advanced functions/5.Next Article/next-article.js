function getArticleGenerator(articles) {
    return function () {
        if(articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articles.shift()}<p></p>`));
            $('#content').append(article);
        }
    }
}