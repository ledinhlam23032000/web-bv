<?php get_header(); ?>

<section class="hp-container hp-archive">
    <header class="hp-page__header">
        <p class="hp-eyebrow">Bệnh viện Đa khoa Hồng Phúc</p>
        <h1><?php the_archive_title(); ?></h1>
        <?php the_archive_description('<p>', '</p>'); ?>
    </header>

    <div class="hp-card-grid hp-card-grid--three">
        <?php while (have_posts()) : the_post(); ?>
            <article class="hp-card">
                <?php if (function_exists('hp_core_the_card_image')) {
                    hp_core_the_card_image(get_the_ID(), get_the_title());
                } elseif (has_post_thumbnail()) {
                    the_post_thumbnail('large');
                } ?>
                <div class="hp-card__body">
                    <h2><?php the_title(); ?></h2>
                    <p><?php echo esc_html(get_the_excerpt()); ?></p>
                    <a href="<?php the_permalink(); ?>">Xem chi tiết</a>
                </div>
            </article>
        <?php endwhile; ?>
    </div>

    <div class="hp-pagination">
        <?php the_posts_pagination(); ?>
    </div>
</section>

<?php get_footer(); ?>
