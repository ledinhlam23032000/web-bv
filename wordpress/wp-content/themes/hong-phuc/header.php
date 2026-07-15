<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="hp-site">
    <header class="hp-site-header">
        <div class="hp-topbar">
            <div class="hp-container hp-topbar__inner">
                <div class="hp-topbar__meta">
                    <span><?php echo esc_html(hp_theme_option('hp_site_address', 'Số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng')); ?></span>
                    <span><?php echo esc_html(hp_theme_option('hp_site_hours', '07:00 - 20:00, từ Thứ Hai đến Chủ nhật')); ?></span>
                </div>
                <div class="hp-topbar__links">
                    <a href="<?php echo esc_url(home_url('/bac-si')); ?>">Tìm bác sĩ</a>
                    <a href="<?php echo esc_url(home_url('/lien-he')); ?>">Chăm sóc khách hàng</a>
                </div>
            </div>
        </div>

        <div class="hp-container hp-mainbar">
            <a class="hp-logo" href="<?php echo esc_url(home_url('/')); ?>">
                <span class="hp-logo__mark">H</span>
                <span>
                    <em>Bệnh viện đa khoa</em>
                    <strong><?php echo esc_html(hp_theme_option('hp_site_short_name', 'Hồng Phúc')); ?></strong>
                </span>
            </a>

            <nav class="hp-primary-nav" aria-label="Menu chính">
                <?php
                wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => false,
                    'fallback_cb' => 'hp_theme_default_menu',
                    'items_wrap' => '%3$s',
                ]);
                ?>
            </nav>

            <div class="hp-header-search" aria-label="Tìm kiếm">
                <span>⌕</span>
                <em>Tìm kiếm khoa, bác sĩ, bài viết...</em>
            </div>

            <div class="hp-header-actions">
                <a class="hp-phone" href="tel:<?php echo esc_attr(hp_theme_clean_phone()); ?>">
                    <?php echo esc_html(hp_theme_option('hp_site_phone', '0987 126 688')); ?>
                </a>
                <a class="hp-button hp-button--primary" href="<?php echo esc_url(home_url('/dat-lich')); ?>">Đặt lịch</a>
            </div>
        </div>

        <div class="hp-container hp-department-strip">
            <strong>17 khoa chuyên môn</strong>
            <?php foreach (hp_theme_department_links() as $department) : ?>
                <a href="<?php echo esc_url(get_permalink($department)); ?>"><?php echo esc_html(get_the_title($department)); ?></a>
            <?php endforeach; ?>
        </div>
    </header>

    <main class="hp-main">
<?php
function hp_theme_default_menu(): void
{
    $links = [
        ['Trang chủ', '/'],
        ['Chuyên khoa', '/chuyen-khoa'],
        ['Bác sĩ', '/bac-si'],
        ['Dịch vụ', '/dich-vu'],
        ['Bài viết', '/kien-thuc'],
        ['Hợp tác', '/hop-tac-quoc-te'],
    ];

    foreach ($links as [$label, $path]) {
        printf('<a href="%s">%s</a>', esc_url(home_url($path)), esc_html($label));
    }
}
