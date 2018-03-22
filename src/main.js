
window.Vue = require('vue');

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faComment from '@fortawesome/fontawesome-free-solid/faComment';
fontawesome.library.add(faHeart, faComment)

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);

if (document.querySelector('#instagram-feed')) {

    window.insta_feed = new Vue({
        el: '#instagram-feed',
        template: require('./template.html'),
        data: {
            settings: {},
            media: []
        },
        mounted() {
            this.settings = window.instagram_feed_settings;

            fetch('https://www.instagram.com/' + this.settings.username + '/?__a=1')
                .then((response) => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    response.json().then((data) => {
                        this.media = data.graphql.user.edge_owner_to_timeline_media.edges;
                    });
                })
                .catch(function (err) {
                    console.log('Fetch Error :-S', err);
                });
        }
    });

}

if (!!$.pjax && !window.eventSet) {

    window.eventSet = true;

    $(document).on('pjax:start', function () {
        if (insta_feed) {
            insta_feed.$destroy()
        }
        var elem = document.querySelector('#instagram-feed-js')
        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    });

    $(document).on('pjax:end', function () {
        setTimeout(() => {
            var body = document.querySelector('body');
            var script = document.createElement('script');
            script.src = window.instagram_feed_settings.path + '/dist/instagram-feed.js';
            script.id = 'instagram-feed-js';
            body.appendChild(script);
        }, 500);
    })

}





