<?php
/*
Plugin Name:  Simple Darkmode
Plugin URI:   https://aya.sanusi.id
Description:  Super simple darkmode
Version:      20190116
Author:       Yuriko Aya
Author URI:   https://aya.sanusi.id
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
*/

add_action('get_header','add_darkness');

function add_darkness() {
    // add the css
    wp_enqueue_style('simple_darkmode_style', plugins_url( 'css/darkness_style.css', __FILE__ ));
    wp_enqueue_style('fontawesome', 'https://use.fontawesome.com/releases/v5.6.3/css/all.css');
    wp_enqueue_script('simple_darkmode_script', plugins_url( 'js/darkmode.js', __FILE__ ));
}

add_action('get_footer', 'check_the_darkness',100);
function check_the_darkness() {
    ?>
    <script>
        check_darkness_status();
    </script>
    <?php
}

add_action('the_content','switches');
function switches($content) {
    //make sure it was single post page
    if(is_single()){
       $toggle_button = '
        <center class="switches">
        <i class="fas fa-sun fa-lg"></i>
        <label class="switch">
        <input id="darktoggle" type="checkbox" autocomplete="off" onclick="choose_the_way()">
        <span class="slider round"></span>
        </label>
        <i class="far fa-moon fa-lg"></i>
        </center>';
        return $toggle_button.$content;
    } else {
        return $content;
    }
}