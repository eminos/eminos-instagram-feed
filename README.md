# Instagram Feed - Koken plugin

A [Koken](http://koken.me) plugin to display an Instagram feed in a grid layout wherever you'd like on your Koken website.

![screenshot](https://i.imgur.com/HCb4AGl.jpg)

## How to install

### Prerequisites

You will need a Koken installation up and running.

The plugin should work with all Koken templates, including the ones that use pjax.

### Installing

1. `cd your-koken-website/storage/plugins`

2. `git clone https://github.com/eminos/eminos-instagram-feed.git` or download ZIP and extract to the directory in step 1.

3. Enable and Setup the plugin in your Koken admin.

4. Add this tag wherever you want the grid to display:

`<div id="instagram-feed"></div>`

Use the "Insert custom code" if you're adding it to a Koken page.

Feel free to change the styling with custom CSS in Koken.

## Development

* Follow the instruction above to clone the repository into the plugins directory.

* `npm install` to pull in the dependencies.

* `npm run dev` to build for development.

* `npm run prod` to build for production.


## Built With

* [Vue.js](https://vuejs.org/)
* [CSS Grid Layout](https://caniuse.com/#feat=css-grid) (!)
* [fetch()](https://caniuse.com/#feat=fetch) (!)
* [Font Awesome](https://fontawesome.com/)

## Contributing

Please feel free to contribute to the code.

## Authors

* **Emin Jasarevic** - *Initial work* - [Soonce](https://www.soonce.com/en)

## License

This project is licensed under the MIT License.

## Acknowledgments

* Inspired by [wilsonlewis/koken-instagram-feed](https://github.com/wilsonlewis/koken-instagram-feed). The main difference between the plugins is that this one pulls in the Instagram feed with ajax when the page has loaded, instead of on the server side.

<br>
<a href="https://www.browserstack.com"><img src="https://user-images.githubusercontent.com/1682784/55908676-6068f480-5bda-11e9-8172-db7063dd8fb4.png" height="50"></a> <br>
Using <a href="https://www.browserstack.com">BrowserStack</a> for live and automated browser testing.
