<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'westcoast' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '1234' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hfMoWJ3oVwg|/oZ8rIBXA_a~]Pp9OmG(@3`PKH^.{FO2j.UERChZ&aLeEOy,k3OO' );
define( 'SECURE_AUTH_KEY',  '*`+Abw<4[b4igxKx(J7r{2,&:L`eYAxAzsU#scUS`~*X~=m}ud6q3i9_+D(>Ui|p' );
define( 'LOGGED_IN_KEY',    'S83R}Bt1n-I?&/GZ>>ABP{+:_j)*;`,qk-_g%goG>Xc;$J:j0un+wI9z^i0/)xac' );
define( 'NONCE_KEY',        '|{Bi1 6?m^-L&%wlGkJ-.!CWg8~TKwJaD>!cH%`V=#K`j1O^T~-Q>I< op3Tb-rU' );
define( 'AUTH_SALT',        'Gr`<IN^q`jF yBOr3D?Ar%q|_@]}yvgsgD=HYDw`1mr+3/zl6^#QW.Z,R2GwdG-q' );
define( 'SECURE_AUTH_SALT', '7Hb3,uSY}pZ~$!P[p#[wcX{6|H7*kSciD6cx@%.G,Yw4%Gomt4O|0H@;h1|VsQyu' );
define( 'LOGGED_IN_SALT',   'KPk^[)%4T9,bRnBE(vk1ZkO}P5561BjL$3zKfm9%WtGY@C7,8p?6~rH&W[yqLHo9' );
define( 'NONCE_SALT',       'pB>Etp=0ab4t&M}K/leH*}b`>z+fRd>JpLb[zDsPv8APd:Zz=d>EE[^:@a,iDt!0' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
