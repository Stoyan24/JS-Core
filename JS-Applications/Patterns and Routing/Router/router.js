$(() => {

    $(window).on('hashchange', loadContent);

    loadContent();

    function loadContent() {
        let hash = location.hash;
        if(hash === ''){
            hash = '#/home';
            location.hash = hash;
        }

        switch (hash) {
            case '#/home':
                $('#main').html('<h2>Home Page</h2>');
                break;
            case '#/about':
                $('#main').html('<h2>About Page</h2>');
                break;
            case '#/contact':
                $('#main').html('<h2>Contact Page</h2>');
                break;
        }
    }
});