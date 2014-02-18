<?php
/**
 * Footer section template.
 * @package WordPress
 * @subpackage Iconic_One
 * @since Iconic One 1.0
 */
?>
	
	<footer id="colophon" role="contentinfo">
		<div class="site-info">
		<div class="footercopy"><?php echo get_theme_mod( 'textarea_copy', 'custom footer text left' ); ?></div>
		<div class="footercredit"><?php echo get_theme_mod( 'custom_text_right', 'custom footer text right' ); ?></div>
		</div><!-- .site-info -->
		</footer><!-- #colophon -->
		<!-- edited out
			<div class="site-wordpress">
				Copyright 2013
				</div>
				<div class="clear"></div> -->
</div><!-- #main .wrapper -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>