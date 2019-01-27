<?php
/**
 * Register Shortcodes for the plugin
 *
 * @link       https://www.artargus.in.ua/insurancePlugin
 * @since      1.0.0
 *
 * @package    HOTCARSUSA
 * @subpackage HOTCARSUSA/public
 */

	function HOTCARSUSA_shortcode($attr) {
		
		ob_start();
		$sljar_param = $attr['page'];
        include plugin_dir_path( __FILE__ ) . 'partials/HOTCARSUSA-public-display.php';

        return ob_get_clean();
	}

	add_shortcode('HOTCARSUSA_box', 'HOTCARSUSA_shortcode');
?>