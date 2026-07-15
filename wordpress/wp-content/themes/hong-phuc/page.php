<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>
    <article class="hp-container hp-page">
        <header class="hp-page__header">
            <p class="hp-eyebrow">Bệnh viện Đa khoa Hồng Phúc</p>
            <h1><?php the_title(); ?></h1>
        </header>
        <div class="hp-content">
            <?php the_content(); ?>
        </div>
    </article>
<?php endwhile; ?>

<?php get_footer(); ?>
