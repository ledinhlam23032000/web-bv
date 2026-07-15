<?php
if (!defined('ABSPATH')) {
    exit;
}

define('HP_THEME_VERSION', '0.1.0');

add_action('after_setup_theme', 'hp_theme_setup');
add_action('wp_enqueue_scripts', 'hp_theme_enqueue_assets');
add_action('enqueue_block_editor_assets', 'hp_theme_enqueue_editor_assets');

function hp_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_editor_style('assets/css/theme.css');

    register_nav_menus([
        'primary' => 'Menu chính',
        'footer' => 'Menu chân trang',
    ]);
}

function hp_theme_enqueue_assets(): void
{
    wp_enqueue_style(
        'hp-theme-fonts',
        'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Noto+Serif:wght@500;600;700;800&display=swap',
        [],
        null
    );

    wp_enqueue_style(
        'hp-theme',
        get_stylesheet_directory_uri() . '/assets/css/theme.css',
        ['hp-theme-fonts'],
        HP_THEME_VERSION
    );

    wp_enqueue_script(
        'hp-theme',
        get_stylesheet_directory_uri() . '/assets/js/theme.js',
        [],
        HP_THEME_VERSION,
        true
    );
}

function hp_theme_enqueue_editor_assets(): void
{
    wp_enqueue_style(
        'hp-theme-editor',
        get_stylesheet_directory_uri() . '/assets/css/theme.css',
        [],
        HP_THEME_VERSION
    );
}

function hp_theme_option(string $key, string $fallback = ''): string
{
    $value = get_option($key);
    return is_string($value) && $value !== '' ? $value : $fallback;
}

function hp_theme_clean_phone(): string
{
    return preg_replace('/\s+/', '', hp_theme_option('hp_site_phone', '0987 126 688'));
}

function hp_theme_asset(string $path): string
{
    return get_stylesheet_directory_uri() . '/assets/' . ltrim($path, '/');
}

function hp_theme_department_links(): array
{
    $items = get_posts([
        'post_type' => 'hp_department',
        'posts_per_page' => 17,
        'orderby' => 'menu_order title',
        'order' => 'ASC',
    ]);

    return is_array($items) ? $items : [];
}
