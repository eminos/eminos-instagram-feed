let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('src/main.scss', 'dist/instagram-feed.css')
    .js('src/main.js', 'dist/instagram-feed.js');