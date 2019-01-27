<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.artargus.in.ua/insurancePlugin
 * @since             1.0.0
 * @package           Hotcarsusa
 *
 * @wordpress-plugin
 * Plugin Name:       HotcarsUsa
 * Plugin URI:        https://www.artargus.in.ua/insurancePlugin
 * Description:       Це калькулятор розрахунку вартості покупки і доставки авто зі США
 * Version:           1.0.0
 * Author:            Yaroslaw Livchak
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       Hotcarsusa
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 */
define( 'HOTCARSUSA_VERSION', '1.0.0' );


require plugin_dir_path( __FILE__ ) . 'includes/class-HOTCARSUSA.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function HOTCARSUSA_main_run() {

	$HOTCARSUSA_plugin = new HOTCARSUSA_main();
	$HOTCARSUSA_plugin->HOTCARSUSA_run();

}

if (!is_admin()) {
	HOTCARSUSA_main_run();	
}