<?php
/**
 * Template Name: Template Contact
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
$container = get_theme_mod( 'understrap_container_type' );

if ( is_front_page() ) {
	get_template_part( 'global-templates/hero' );
}
?>

<div class="page-header-holder">
	<div class="container">
		<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header><!-- .entry-header -->
	</div>
</div>

<div class="wrapper template-contact-us" id="full-width-page-wrapper">

	<div class="<?php echo esc_attr( $container ); ?>" id="content">

		<div class="row">

			<div class="col-lg-6">
				<main class="site-main" id="main" role="main">
					<?php
					while ( have_posts() ) {
						the_post();
						get_template_part( 'loop-templates/content', 'page' );

						// If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) {
							comments_template();
						}
					}
					?>
				</main><!-- #main -->
			</div><!-- col-lg-7 -->
        
            <div class="offset-lg-1 col-lg-5">
                <div class="iframe-holder">
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.780062995684!2d115.68757661519675!3d-33.35069528080262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a31e25ce15611a5%3A0x20a718bbc5a77031!2zMTUgWW9va3NvbiBSZCwgUGljdG9uIFdBIDYyMjksINCQ0LLRgdGC0YDQsNC70LjRjw!5e0!3m2!1sru!2sru!4v1619115264325!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405691.57240383344!2d-122.3212843181106!3d37.40247298383319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sru!4v1619114752552!5m2!1sen!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110002.70466401005!2d-97.88690237845852!3d30.50450668510608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d17be7d99d5%3A0x763da186bf1539ff!2sCedar%20Park%2C%20TX%2C%20USA!5e0!3m2!1sen!2sru!4v1619115502187!5m2!1sen!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div>

		</div><!-- .row end -->
	</div><!-- #content -->
</div><!-- #full-width-page-wrapper -->
<?php
get_footer();
?>
