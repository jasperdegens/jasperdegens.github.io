<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'jasper15_wp');

/** MySQL database username */
define('DB_USER', 'jasper15_wp');

/** MySQL database password */
define('DB_PASSWORD', '74cPd1tSxw');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'lzk1chp3tmozylwxqp2z1qr3jikojkf6ncqmgrr7whue7r1scveh7o6cqqeega6y');
define('SECURE_AUTH_KEY',  '5s6k2jrn9m3gkpbt365bb6o90snvwkqahpnxtr2oaxhr8n1dxjiiiyutfukfno9c');
define('LOGGED_IN_KEY',    'ervzbabyab22y5a6ji83x2c4z6rvurrhfb8m1q5rntoj77lqjs6abmasowpbrchs');
define('NONCE_KEY',        'eibfnfnq5bnd4lddp0ktg4ypzr15uselorivjciwil5rw8x6j7weu8rpcey2elqr');
define('AUTH_SALT',        'lpex0bcohe9pzxyyy3w8szbmalfrvbjwdchhvvrdv6khynt2hq7ijqbppiiqxgw0');
define('SECURE_AUTH_SALT', 'lrwoma2yksmhlgkajznuvdufvqi1fblecdhofimimm8ldonhe3dbut2cg8i7jpha');
define('LOGGED_IN_SALT',   'zg05kqf77uwcfudvnfwuxez752dsfmqu3ebinsaxoo52vyx6m8wwvhwpbs9xayzd');
define('NONCE_SALT',       'ddgux1keue15ece8q00yuyjdwqbhlrhehhyossq66oke60irpmxr1lpwigt0fp4z');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress.  A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define ('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
