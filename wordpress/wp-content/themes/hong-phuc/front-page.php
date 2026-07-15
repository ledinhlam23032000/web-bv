<?php get_header(); ?>

<?php
if (have_posts()) :
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
else :
    echo do_blocks('<!-- wp:hong-phuc/hero /--><!-- wp:hong-phuc/quick-actions /--><!-- wp:hong-phuc/department-showcase /--><!-- wp:hong-phuc/service-showcase /--><!-- wp:hong-phuc/doctor-showcase /--><!-- wp:hong-phuc/article-showcase /--><!-- wp:hong-phuc/cta /-->');
endif;
?>

<?php get_footer(); ?>
