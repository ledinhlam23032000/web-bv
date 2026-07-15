<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>
    <article class="hp-container hp-single">
        <header class="hp-single__header">
            <p class="hp-eyebrow"><?php echo esc_html(get_post_type_object(get_post_type())->labels->singular_name ?? 'Bài viết'); ?></p>
            <h1><?php the_title(); ?></h1>
            <?php if (has_excerpt()) : ?>
                <p><?php echo esc_html(get_the_excerpt()); ?></p>
            <?php endif; ?>
        </header>
        <div class="hp-content">
            <?php the_content(); ?>
        </div>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>
