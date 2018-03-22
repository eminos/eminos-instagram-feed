<?php

class EminosInstagramFeed extends KokenPlugin
{
    public function __construct()
    {
        $this->register_hook('before_closing_head', 'add_head');
        $this->register_hook('before_closing_body', 'add_body');
    }

    public function add_head()
    {
        $data = (array) $this->data;
        $data['path'] = $this->get_path();

        echo '<link rel="stylesheet" href="' . $this->get_path() . '/dist/instagram-feed.css"/>';
        echo '<script>window.instagram_feed_settings = ' . json_encode($data) . ';</script>';
    }

    public function add_body()
    {
        echo '<script id="instagram-feed-js" src="' . $this->get_path() . '/dist/instagram-feed.js"></script>';
    }
}
