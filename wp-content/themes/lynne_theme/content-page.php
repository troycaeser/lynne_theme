<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package lynne_theme
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<!-- This is template default page! -->
	<!-- something like ABOUT US -->
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'lynne_theme' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	<footer class="entry-footer">
		<!-- <?php edit_post_link( __( 'Edit', 'lynne_theme' ), '<span class="edit-link">', '</span>' ); ?> -->
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
