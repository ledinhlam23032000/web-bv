<?php
/**
 * Plugin Name: Hong Phuc Core
 * Description: Content model, Gutenberg blocks, and seed importer for Bệnh viện Đa khoa Hồng Phúc.
 * Version: 0.1.0
 * Author: Hong Phuc Digital Team
 * Text Domain: hong-phuc-core
 */

if (!defined('ABSPATH')) {
    exit;
}

define('HP_CORE_VERSION', '0.1.0');
define('HP_CORE_PATH', plugin_dir_path(__FILE__));
define('HP_CORE_URL', plugin_dir_url(__FILE__));

add_action('init', 'hp_core_register_content_types');
add_action('init', 'hp_core_register_blocks');
add_action('rest_api_init', 'hp_core_register_headless_routes');
add_action('template_redirect', 'hp_core_redirect_public_frontend_to_next', 1);
add_action('admin_menu', 'hp_core_register_importer_page');
add_filter('block_categories_all', 'hp_core_register_block_category', 10, 2);

function hp_core_register_content_types(): void
{
    hp_core_register_post_type('hp_department', 'Khoa', 'Các khoa', 'dashicons-building', 'chuyen-khoa');
    hp_core_register_post_type('hp_service', 'Dịch vụ', 'Dịch vụ', 'dashicons-heart', 'dich-vu');
    hp_core_register_post_type('hp_doctor', 'Bác sĩ', 'Bác sĩ', 'dashicons-id', 'bac-si');
    hp_core_register_post_type('hp_package', 'Gói khám', 'Gói khám', 'dashicons-clipboard', 'goi-kham');

    register_taxonomy('hp_department_group', ['hp_department'], [
        'labels' => [
            'name' => 'Khối chuyên môn',
            'singular_name' => 'Khối chuyên môn',
        ],
        'public' => true,
        'show_in_rest' => true,
        'hierarchical' => true,
        'rewrite' => ['slug' => 'khoi-chuyen-mon'],
    ]);

    register_taxonomy('hp_focus_area', ['hp_department', 'hp_service', 'post'], [
        'labels' => [
            'name' => 'Lĩnh vực chuyên sâu',
            'singular_name' => 'Lĩnh vực chuyên sâu',
        ],
        'public' => true,
        'show_in_rest' => true,
        'hierarchical' => false,
        'rewrite' => ['slug' => 'linh-vuc'],
    ]);
}

function hp_core_register_post_type(string $type, string $singular, string $plural, string $icon, string $slug): void
{
    register_post_type($type, [
        'labels' => [
            'name' => $plural,
            'singular_name' => $singular,
            'add_new_item' => 'Thêm ' . strtolower($singular),
            'edit_item' => 'Sửa ' . strtolower($singular),
            'new_item' => $singular . ' mới',
            'view_item' => 'Xem ' . strtolower($singular),
            'search_items' => 'Tìm ' . strtolower($plural),
        ],
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => $icon,
        'has_archive' => true,
        'rewrite' => ['slug' => $slug],
        'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields', 'revisions'],
    ]);
}

function hp_core_register_block_category(array $categories): array
{
    $categories[] = [
        'slug' => 'hong-phuc',
        'title' => 'Hồng Phúc',
        'icon' => null,
    ];

    return $categories;
}

function hp_core_register_blocks(): void
{
    wp_register_script(
        'hp-core-blocks',
        HP_CORE_URL . 'assets/js/blocks.js',
        ['wp-blocks', 'wp-block-editor', 'wp-components', 'wp-element', 'wp-i18n'],
        HP_CORE_VERSION,
        true
    );

    $blocks = [
        'hero' => 'hp_core_render_hero_block',
        'quick-actions' => 'hp_core_render_quick_actions_block',
        'trust-section' => 'hp_core_render_trust_section_block',
        'care-spaces' => 'hp_core_render_care_spaces_block',
        'quality-band' => 'hp_core_render_quality_band_block',
        'department-overview' => 'hp_core_render_department_overview_block',
        'department-showcase' => 'hp_core_render_department_showcase_block',
        'service-showcase' => 'hp_core_render_service_showcase_block',
        'packages-symptoms' => 'hp_core_render_packages_symptoms_block',
        'doctor-showcase' => 'hp_core_render_doctor_showcase_block',
        'article-showcase' => 'hp_core_render_article_showcase_block',
        'cta' => 'hp_core_render_cta_block',
    ];

    foreach ($blocks as $name => $callback) {
        register_block_type('hong-phuc/' . $name, [
            'api_version' => 2,
            'editor_script' => 'hp-core-blocks',
            'render_callback' => $callback,
        ]);
    }
}

function hp_core_asset_url(string $path): string
{
    $path = ltrim($path, '/');

    if (strpos($path, 'images/') === 0) {
        return get_stylesheet_directory_uri() . '/assets/' . $path;
    }

    return $path;
}

function hp_core_site_option(string $key, string $fallback = ''): string
{
    $value = get_option($key);
    return is_string($value) && $value !== '' ? $value : $fallback;
}

function hp_core_frontend_url(): string
{
    $url = getenv('HP_FRONTEND_URL');
    if (!is_string($url) || $url === '') {
        $url = (string) get_option('hp_frontend_url', 'http://localhost:9999');
    }

    return rtrim($url, '/');
}

function hp_core_redirect_public_frontend_to_next(): void
{
    if (is_admin() || wp_doing_ajax() || (defined('REST_REQUEST') && REST_REQUEST)) {
        return;
    }

    $request_uri = $_SERVER['REQUEST_URI'] ?? '/';
    $path = parse_url($request_uri, PHP_URL_PATH);
    $path = is_string($path) ? ltrim($path, '/') : '';

    $internal_prefixes = ['wp-admin', 'wp-login.php', 'wp-json', 'wp-content', 'wp-includes', 'xmlrpc.php'];
    foreach ($internal_prefixes as $prefix) {
        if ($path === $prefix || str_starts_with($path, $prefix . '/')) {
            return;
        }
    }

    $frontend_url = hp_core_frontend_url();
    if ($frontend_url === '') {
        return;
    }

    wp_safe_redirect($frontend_url . $request_uri, 302);
    exit;
}

function hp_core_register_headless_routes(): void
{
    register_rest_route('hong-phuc/v1', '/site', [
        'methods' => 'GET',
        'callback' => 'hp_core_rest_site',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('hong-phuc/v1', '/articles', [
        'methods' => 'GET',
        'callback' => 'hp_core_rest_articles',
        'permission_callback' => '__return_true',
    ]);
}

function hp_core_rest_site(): WP_REST_Response
{
    return rest_ensure_response([
        'name' => get_bloginfo('name'),
        'description' => get_bloginfo('description'),
        'phone' => hp_core_site_option('hp_site_phone', '0987 126 688'),
        'address' => hp_core_site_option('hp_site_address', 'Số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng'),
        'hours' => hp_core_site_option('hp_site_hours', '07:00 - 20:00, từ Thứ Hai đến Chủ nhật'),
        'email' => hp_core_site_option('hp_site_email', 'chamsoc@hongphuc.vn'),
        'updatedAt' => current_time('mysql'),
    ]);
}

function hp_core_rest_articles(WP_REST_Request $request): WP_REST_Response
{
    $per_page = (int) $request->get_param('per_page');
    if ($per_page < 1 || $per_page > 100) {
        $per_page = 100;
    }

    $posts = get_posts([
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => $per_page,
        'orderby' => ['menu_order' => 'ASC', 'date' => 'DESC'],
    ]);

    $articles = array_map('hp_core_rest_article_item', $posts);

    return rest_ensure_response([
        'items' => $articles,
        'total' => count($articles),
        'updatedAt' => current_time('mysql'),
    ]);
}

function hp_core_rest_article_item(WP_Post $post): array
{
    $content = hp_core_rest_render_content($post);
    $excerpt = $post->post_excerpt !== ''
        ? $post->post_excerpt
        : wp_trim_words(wp_strip_all_tags($content), 42, '...');
    $categories = get_the_category($post->ID);
    $category = $categories && isset($categories[0]) ? $categories[0]->name : 'Kiến thức';

    return [
        'id' => $post->ID,
        'slug' => $post->post_name,
        'title' => get_the_title($post),
        'summary' => wp_strip_all_tags($excerpt),
        'category' => $category,
        'readTime' => (string) get_post_meta($post->ID, '_hp_read_time', true),
        'specialtySlug' => (string) get_post_meta($post->ID, '_hp_department_slug', true),
        'focusArea' => (string) get_post_meta($post->ID, '_hp_focus_area', true),
        'contentHtml' => $content,
        'modified' => get_post_modified_time('c', true, $post),
        'link' => get_permalink($post),
    ];
}

function hp_core_rest_render_content(WP_Post $post): string
{
    $previous_post = $GLOBALS['post'] ?? null;
    $GLOBALS['post'] = $post;
    setup_postdata($post);

    $content = apply_filters('the_content', $post->post_content);

    wp_reset_postdata();
    if ($previous_post instanceof WP_Post) {
        $GLOBALS['post'] = $previous_post;
    } else {
        unset($GLOBALS['post']);
    }

    return is_string($content) ? $content : '';
}

function hp_core_render_hero_block(array $attributes): string
{
    $eyebrow = $attributes['eyebrow'] ?? 'Bệnh viện đa khoa quy mô lớn tại Hải Phòng';
    $title = $attributes['title'] ?? 'Bệnh viện Đa khoa Hồng Phúc';
    $description = $attributes['description'] ?? 'Chăm sóc toàn diện với nhiều chuyên khoa cùng phối hợp, từ thăm khám ban đầu đến điều trị và theo dõi lâu dài.';
    $primary_label = $attributes['primaryLabel'] ?? 'Đặt lịch khám';
    $primary_url = $attributes['primaryUrl'] ?? '/dat-lich';
    $secondary_label = $attributes['secondaryLabel'] ?? 'Tìm theo triệu chứng';
    $secondary_url = $attributes['secondaryUrl'] ?? '/tim-theo-trieu-chung';
    $image = hp_core_asset_url($attributes['image'] ?? '/images/hospital-lobby-premium.webp');

    ob_start();
    ?>
    <section class="hp-hero">
        <img class="hp-hero__image" src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($title); ?>" />
        <div class="hp-hero__overlay"></div>
        <div class="hp-container hp-hero__inner">
            <p class="hp-eyebrow hp-eyebrow--light"><?php echo esc_html($eyebrow); ?></p>
            <h1><?php echo esc_html($title); ?></h1>
            <p class="hp-hero__lead"><?php echo esc_html($description); ?></p>
            <div class="hp-actions">
                <a class="hp-button hp-button--gold" href="<?php echo esc_url($primary_url); ?>"><?php echo esc_html($primary_label); ?></a>
                <a class="hp-button hp-button--ghost-light" href="<?php echo esc_url($secondary_url); ?>"><?php echo esc_html($secondary_label); ?></a>
            </div>
            <div class="hp-hero__badges">
                <?php foreach (['Hỗ trợ khám trong ngày', 'Gói tầm soát gia đình', 'Tư vấn chọn chuyên khoa', 'Hỗ trợ người bệnh 07:00 - 20:00'] as $badge) : ?>
                    <span><i></i><?php echo esc_html($badge); ?></span>
                <?php endforeach; ?>
            </div>
            <div class="hp-hero__metrics">
                <div><strong>17</strong><span>khoa chuyên môn</span></div>
                <div><strong>120+</strong><span>bác sĩ, chuyên gia, điều dưỡng</span></div>
                <div><strong>24/7</strong><span>tiếp nhận cấp cứu</span></div>
            </div>
        </div>
        <div class="hp-hero__team-card">
            <img src="<?php echo esc_url(hp_core_asset_url('/images/doctor-team-premium.webp')); ?>" alt="Đội ngũ bác sĩ đa chuyên khoa" />
            <div>
                <span>Đội ngũ</span>
                <strong>120+ bác sĩ, chuyên gia, điều dưỡng</strong>
            </div>
        </div>
        <div class="hp-hero__today">
            <span>Hôm nay</span>
            <strong>07:00 - 20:00</strong>
            <em>Tiếp nhận khám trong ngày</em>
        </div>
    </section>
    <section class="hp-marquee" aria-label="Điểm nổi bật">
        <div class="hp-marquee__track">
            <?php
            $items = ['Đa khoa chuyên sâu', 'Cấp cứu 24/7', 'Hội chẩn liên chuyên khoa', 'Chẩn đoán hình ảnh', 'Khám sức khỏe doanh nghiệp', 'Đặt lịch có hướng dẫn', 'Thư viện kiến thức y khoa'];
            foreach (array_merge($items, $items) as $item) :
                ?>
                <span><i></i><?php echo esc_html($item); ?></span>
            <?php endforeach; ?>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_trust_section_block(): string
{
    $items = [
        ['Bác sĩ giàu kinh nghiệm', 'Thông tin về chuyên khoa, lĩnh vực chuyên sâu và lịch khám của từng bác sĩ được trình bày rõ ràng.'],
        ['Quy trình khám rõ ràng', 'Từ lúc tiếp nhận, làm xét nghiệm, hội chẩn đến theo dõi sau khám, người bệnh luôn biết bước tiếp theo của mình.'],
        ['Xét nghiệm và chẩn đoán hình ảnh', 'Kết quả xét nghiệm và chẩn đoán hình ảnh được phối hợp với thăm khám để bác sĩ đưa ra hướng xử trí phù hợp.'],
        ['Hỗ trợ chọn đúng nơi khám', 'Nếu chưa biết nên đến khoa nào, bạn có thể mô tả triệu chứng để được tư vấn trước khi đặt lịch.'],
    ];

    ob_start();
    ?>
    <section class="hp-section hp-trust">
        <div class="hp-container hp-trust__grid">
            <div class="hp-trust__image">
                <img src="<?php echo esc_url(hp_core_asset_url('/images/doctor-team-premium.webp')); ?>" alt="Đội ngũ bác sĩ Hồng Phúc" />
            </div>
            <div>
                <div class="hp-section-heading">
                    <p class="hp-eyebrow">Tại sao nên chọn Hồng Phúc?</p>
                    <h2>Sự an tâm bắt đầu từ chuyên môn vững và cách chăm sóc chu đáo.</h2>
                    <p>Tại Hồng Phúc, người bệnh được hướng dẫn rõ từ khi đặt lịch, gặp bác sĩ, thực hiện kiểm tra đến lúc nhận kết quả và theo dõi sau khám.</p>
                </div>
                <div class="hp-trust__items">
                    <?php foreach ($items as [$title, $text]) : ?>
                        <article>
                            <span>+</span>
                            <h3><?php echo esc_html($title); ?></h3>
                            <p><?php echo esc_html($text); ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_care_spaces_block(): string
{
    $scenes = [
        ['Tiếp đón', 'Sảnh tiếp đón và hướng dẫn', '/images/hero-lobby.webp', '/huong-dan-khach-hang'],
        ['Chuyên môn', 'Đội ngũ bác sĩ nhiều chuyên khoa', '/images/doctor-team-premium.webp', '/bac-si'],
        ['Cận lâm sàng', 'Chẩn đoán hình ảnh hiện đại', '/images/diagnostic-imaging-premium.webp', '/dich-vu/chan-doan-hinh-anh-theo-chi-dinh'],
        ['Nhi khoa', 'Không gian khám thân thiện cho trẻ', '/images/pediatrics-consultation-premium.webp', '/chuyen-khoa/nhi'],
        ['Hội chẩn', 'Hội chẩn cho trường hợp phức tạp', '/images/medical-council-premium.webp', '/hop-tac-quoc-te'],
    ];

    ob_start();
    ?>
    <section class="hp-section hp-section--soft hp-spaces">
        <div class="hp-container">
            <div class="hp-section-heading hp-section-heading--split">
                <div>
                    <p class="hp-eyebrow">Không gian chăm sóc</p>
                    <h2>Mỗi khu vực đều được tổ chức quanh sự an toàn và thoải mái của người bệnh.</h2>
                    <p>Từ sảnh tiếp đón, phòng khám, khu chẩn đoán hình ảnh đến không gian dành cho trẻ em, người bệnh luôn được hướng dẫn để buổi khám diễn ra thuận tiện hơn.</p>
                </div>
                <a class="hp-button hp-button--outline" href="/huong-dan-khach-hang">Xem quy trình đi khám</a>
            </div>
            <div class="hp-space-grid">
                <?php foreach ($scenes as $index => [$eyebrow, $title, $image, $href]) : ?>
                    <a class="hp-space-card hp-space-card--<?php echo esc_attr((string) $index); ?>" href="<?php echo esc_url($href); ?>">
                        <img src="<?php echo esc_url(hp_core_asset_url($image)); ?>" alt="<?php echo esc_attr($title); ?>" />
                        <span><?php echo esc_html($eyebrow); ?></span>
                        <strong><?php echo esc_html($title); ?></strong>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_quality_band_block(): string
{
    $items = [
        ['An toàn người bệnh', 'Quy trình bệnh viện đa khoa', 'Tiếp nhận rõ ràng, kiểm soát nhiễm khuẩn, an toàn phẫu thuật và theo dõi sau khám.'],
        ['Hợp tác khu vực', 'Hội chẩn và đào tạo', 'Hội chẩn cùng chuyên gia đối tác, cập nhật kỹ thuật và cải tiến cách theo dõi những trường hợp phức tạp.'],
        ['Kiến thức sức khỏe', '50 bài viết dễ hiểu', 'Tra cứu theo chuyên khoa, triệu chứng và những câu hỏi thường gặp trước khi đi khám.'],
    ];

    ob_start();
    ?>
    <section class="hp-quality-band">
        <div class="hp-container hp-quality-band__grid">
            <div>
                <p class="hp-eyebrow hp-eyebrow--light">Năng lực và chất lượng</p>
                <h2>Chất lượng được duy trì bằng quy trình rõ ràng và sự phối hợp giữa các khoa.</h2>
                <a class="hp-button hp-button--ghost-light" href="/hop-tac-quoc-te">Xem hợp tác chuyên môn</a>
            </div>
            <div class="hp-quality-band__cards">
                <?php foreach ($items as [$label, $title, $text]) : ?>
                    <article>
                        <span>+</span>
                        <em><?php echo esc_html($label); ?></em>
                        <h3><?php echo esc_html($title); ?></h3>
                        <p><?php echo esc_html($text); ?></p>
                    </article>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_department_overview_block(): string
{
    $featured = get_option('hp_featured_departments', []);
    if (!is_array($featured) || !$featured) {
        $featured = [
            ['title' => 'Khoa Nội', 'summary' => 'Khám Nội tổng quát và các lĩnh vực Nội Tim mạch, Nội Tiêu hóa, Nội Cơ xương khớp, Nội Hô hấp, Nội tiết và Nội Ung bướu.'],
            ['title' => 'Khoa Hồi sức cấp cứu', 'summary' => 'Tiếp nhận 24/7, phân loại mức độ khẩn cấp, xử trí ban đầu và phối hợp nhanh với khoa điều trị phù hợp.'],
            ['title' => 'Khoa Ngoại', 'summary' => 'Khám bệnh lý ngoại khoa, đánh giá trước mổ, điều trị phẫu thuật và theo dõi hồi phục sau can thiệp.'],
            ['title' => 'Khoa Sản', 'summary' => 'Khám phụ khoa, theo dõi thai kỳ, sàng lọc trước sinh, chăm sóc sinh nở và sức khỏe sinh sản.'],
        ];
    }

    ob_start();
    ?>
    <section class="hp-section hp-department-overview">
        <div class="hp-container hp-department-overview__grid">
            <div class="hp-department-overview__image">
                <img src="<?php echo esc_url(hp_core_asset_url('/images/hospital-exterior-premium.webp')); ?>" alt="Ngoại thất Bệnh viện Đa khoa Hồng Phúc" />
            </div>
            <div>
                <div class="hp-section-heading">
                    <p class="hp-eyebrow">17 khoa chuyên môn</p>
                    <h2>Mỗi khoa một nhiệm vụ rõ ràng, cùng phối hợp trong một kế hoạch chăm sóc.</h2>
                    <p>Từ Khoa Nội, Ngoại, Sản, Nhi đến Xét nghiệm, Chẩn đoán hình ảnh, Dược và Kiểm soát nhiễm khuẩn, các bước được kết nối để người bệnh không phải tự xoay xở giữa nhiều nơi.</p>
                </div>
                <div class="hp-featured-departments">
                    <?php foreach (array_slice($featured, 0, 6) as $item) : ?>
                        <article>
                            <h3><?php echo esc_html($item['title'] ?? 'Khoa chuyên môn'); ?></h3>
                            <p><?php echo esc_html($item['summary'] ?? ''); ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_quick_actions_block(): string
{
    $phone = hp_core_site_option('hp_site_phone', '0987 126 688');
    $actions = [
        ['title' => 'Gọi tổng đài', 'text' => 'Được hướng dẫn nhanh theo nhu cầu thăm khám.', 'href' => 'tel:' . preg_replace('/\s+/', '', $phone)],
        ['title' => 'Đặt lịch hẹn', 'text' => 'Chọn chuyên khoa, bác sĩ hoặc gói khám phù hợp.', 'href' => '/dat-lich'],
        ['title' => 'Tìm bác sĩ', 'text' => 'Tra cứu chuyên gia theo chuyên khoa và lịch khám.', 'href' => '/bac-si'],
        ['title' => 'Gói tầm soát', 'text' => 'Khám sức khỏe gia đình, doanh nghiệp và nhóm nguy cơ.', 'href' => '/goi-kham'],
    ];

    ob_start();
    ?>
    <section class="hp-container hp-quick-actions">
        <?php foreach ($actions as $action) : ?>
            <a class="hp-quick-action" href="<?php echo esc_url($action['href']); ?>">
                <span class="hp-quick-action__icon">+</span>
                <span>
                    <strong><?php echo esc_html($action['title']); ?></strong>
                    <em><?php echo esc_html($action['text']); ?></em>
                </span>
            </a>
        <?php endforeach; ?>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_department_showcase_block(array $attributes): string
{
    $title = $attributes['title'] ?? '17 khoa chuyên môn cùng phối hợp trong một hành trình chăm sóc.';
    $description = $attributes['description'] ?? 'Mỗi khoa có phạm vi rõ ràng, kết nối với xét nghiệm, chẩn đoán hình ảnh, dược và các bộ phận an toàn người bệnh.';
    $departments = new WP_Query([
        'post_type' => 'hp_department',
        'posts_per_page' => 8,
        'orderby' => 'menu_order title',
        'order' => 'ASC',
    ]);

    ob_start();
    ?>
    <section class="hp-section hp-section--soft">
        <div class="hp-container">
            <div class="hp-section-heading">
                <p class="hp-eyebrow">Hệ thống chuyên khoa</p>
                <h2><?php echo esc_html($title); ?></h2>
                <p><?php echo esc_html($description); ?></p>
            </div>
            <div class="hp-card-grid hp-card-grid--departments">
                <?php while ($departments->have_posts()) : $departments->the_post(); ?>
                    <a class="hp-card hp-card--media" href="<?php the_permalink(); ?>">
                        <?php hp_core_the_card_image(get_the_ID(), get_the_title()); ?>
                        <span class="hp-card__body">
                            <strong><?php the_title(); ?></strong>
                            <em><?php echo esc_html(get_the_excerpt()); ?></em>
                        </span>
                    </a>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_service_showcase_block(array $attributes): string
{
    $services = new WP_Query([
        'post_type' => 'hp_service',
        'posts_per_page' => 6,
        'orderby' => 'menu_order title',
        'order' => 'ASC',
    ]);

    ob_start();
    ?>
    <section class="hp-section">
        <div class="hp-container">
            <div class="hp-section-heading hp-section-heading--split">
                <div>
                    <p class="hp-eyebrow">Dịch vụ và chuyên khoa</p>
                    <h2>Tìm dịch vụ phù hợp với nhu cầu thăm khám.</h2>
                </div>
                <a class="hp-button hp-button--outline" href="/dich-vu">Xem tất cả dịch vụ</a>
            </div>
            <div class="hp-card-grid hp-card-grid--three">
                <?php while ($services->have_posts()) : $services->the_post(); ?>
                    <article class="hp-card">
                        <?php hp_core_the_card_image(get_the_ID(), get_the_title()); ?>
                        <div class="hp-card__body">
                            <p class="hp-mini-label">Dịch vụ</p>
                            <h3><?php the_title(); ?></h3>
                            <p><?php echo esc_html(get_the_excerpt()); ?></p>
                            <a href="<?php the_permalink(); ?>">Xem dịch vụ</a>
                        </div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
            <div class="hp-specialty-mini-grid">
                <?php
                $departments = get_posts([
                    'post_type' => 'hp_department',
                    'posts_per_page' => 8,
                    'orderby' => 'menu_order title',
                    'order' => 'ASC',
                ]);
                foreach ($departments as $department) :
                    ?>
                    <a href="<?php echo esc_url(get_permalink($department)); ?>">
                        <span>+</span>
                        <strong><?php echo esc_html(get_the_title($department)); ?></strong>
                        <em><?php echo esc_html(get_the_excerpt($department)); ?></em>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_packages_symptoms_block(): string
{
    $packages = new WP_Query([
        'post_type' => 'hp_package',
        'posts_per_page' => 3,
        'orderby' => 'menu_order title',
        'order' => 'ASC',
    ]);
    $symptoms = get_option('hp_symptom_groups', []);
    if (!is_array($symptoms) || !$symptoms) {
        $symptoms = [
            ['name' => 'Đau ngực, hồi hộp, khó thở', 'specialty' => 'Khoa Nội - Nội Tim mạch', 'service' => 'Điện tim, siêu âm tim và tầm soát nguy cơ tim mạch', 'href' => '/tim-theo-trieu-chung#noi-tim-mach'],
            ['name' => 'Theo dõi thai kỳ, khám phụ khoa', 'specialty' => 'Khoa Sản', 'service' => 'Khám phụ khoa, siêu âm và sàng lọc trước sinh', 'href' => '/tim-theo-trieu-chung#san'],
            ['name' => 'Sốt, ho, mệt ở trẻ', 'specialty' => 'Khoa Nhi', 'service' => 'Khám nhi, tư vấn dinh dưỡng và theo dõi phát triển', 'href' => '/tim-theo-trieu-chung#nhi'],
        ];
    }

    ob_start();
    ?>
    <section class="hp-section hp-package-symptoms">
        <div class="hp-container hp-package-symptoms__grid">
            <div>
                <div class="hp-section-heading">
                    <p class="hp-eyebrow">Gói khám sức khỏe</p>
                    <h2>Chủ động kiểm tra sức khỏe theo tuổi và nguy cơ.</h2>
                    <p>Bạn có thể chọn gói khám cá nhân, sức khỏe phụ nữ, tầm soát ung thư hoặc khám doanh nghiệp. Nhân viên bệnh viện sẽ tư vấn những hạng mục phù hợp trước khi đặt lịch.</p>
                </div>
                <div class="hp-package-list">
                    <?php while ($packages->have_posts()) : $packages->the_post(); ?>
                        <article>
                            <h3><?php the_title(); ?></h3>
                            <p><?php echo esc_html(get_the_excerpt()); ?></p>
                        </article>
                    <?php endwhile; wp_reset_postdata(); ?>
                </div>
            </div>
            <div class="hp-symptom-panel">
                <p>Tìm theo triệu chứng</p>
                <h3>Mô tả điều bạn đang gặp để được gợi ý chuyên khoa phù hợp.</h3>
                <div>
                    <?php foreach (array_slice($symptoms, 0, 6) as $symptom) : ?>
                        <a href="<?php echo esc_url($symptom['href'] ?? '/tim-theo-trieu-chung'); ?>">
                            <strong><?php echo esc_html($symptom['name'] ?? 'Triệu chứng'); ?></strong>
                            <span><?php echo esc_html(($symptom['specialty'] ?? '') . ' - ' . ($symptom['service'] ?? '')); ?></span>
                        </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_doctor_showcase_block(): string
{
    $doctors = new WP_Query([
        'post_type' => 'hp_doctor',
        'posts_per_page' => 4,
        'orderby' => 'menu_order title',
        'order' => 'ASC',
    ]);

    ob_start();
    ?>
    <section class="hp-section hp-section--soft">
        <div class="hp-container hp-doctor-band">
            <div class="hp-section-heading">
                <p class="hp-eyebrow">Đội ngũ chuyên gia</p>
                <h2>Tìm hiểu bác sĩ trước khi đặt lịch khám.</h2>
                <p>Xem lĩnh vực chuyên sâu, kinh nghiệm, lịch khám dự kiến và các dịch vụ liên quan của từng bác sĩ.</p>
                <a class="hp-button hp-button--primary" href="/bac-si">Xem toàn bộ bác sĩ</a>
            </div>
            <div class="hp-doctor-list">
                <?php while ($doctors->have_posts()) : $doctors->the_post(); ?>
                    <article class="hp-doctor-card">
                        <?php hp_core_the_card_image(get_the_ID(), get_the_title()); ?>
                        <div>
                            <p class="hp-mini-label"><?php echo esc_html(get_post_meta(get_the_ID(), '_hp_role', true)); ?></p>
                            <h3><?php the_title(); ?></h3>
                            <p><?php echo esc_html(get_the_excerpt()); ?></p>
                            <a href="<?php the_permalink(); ?>">Xem hồ sơ</a>
                        </div>
                    </article>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_article_showcase_block(): string
{
    $articles = new WP_Query([
        'post_type' => 'post',
        'posts_per_page' => 6,
        'orderby' => 'date',
        'order' => 'DESC',
    ]);

    ob_start();
    ?>
    <section class="hp-section">
        <div class="hp-container hp-article-band">
            <div class="hp-section-heading">
                <p class="hp-eyebrow">Thư viện kiến thức y khoa</p>
                <h2>Thông tin y khoa dễ hiểu cho người bệnh và gia đình.</h2>
                <p>Bài viết giúp nhận biết dấu hiệu cần lưu ý, hiểu mục đích xét nghiệm và chuẩn bị tốt hơn trước khi gặp bác sĩ.</p>
            </div>
            <div class="hp-article-list">
                <?php while ($articles->have_posts()) : $articles->the_post(); ?>
                    <a class="hp-article-row" href="<?php the_permalink(); ?>">
                        <?php $categories = get_the_category(); ?>
                        <span><?php echo esc_html($categories[0]->name ?? 'Kiến thức'); ?></span>
                        <strong><?php the_title(); ?></strong>
                        <em><?php echo esc_html(get_the_excerpt()); ?></em>
                    </a>
                <?php endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </section>
    <?php
    return ob_get_clean();
}

function hp_core_render_cta_block(array $attributes): string
{
    $title = $attributes['title'] ?? 'Chưa biết nên chọn chuyên khoa, bác sĩ hay gói khám?';
    $description = $attributes['description'] ?? 'Hãy để lại thông tin, bộ phận tiếp nhận sẽ hỗ trợ chọn điểm bắt đầu phù hợp.';
    $button = $attributes['buttonLabel'] ?? 'Đặt lịch khám';
    $url = $attributes['buttonUrl'] ?? '/dat-lich';

    return sprintf(
        '<section class="hp-cta"><div class="hp-container hp-cta__inner"><div><p class="hp-eyebrow hp-eyebrow--light">Bắt đầu đặt lịch khám</p><h2>%s</h2><p>%s</p></div><a class="hp-button hp-button--gold" href="%s">%s</a></div></section>',
        esc_html($title),
        esc_html($description),
        esc_url($url),
        esc_html($button)
    );
}

function hp_core_the_card_image(int $post_id, string $alt): void
{
    if (has_post_thumbnail($post_id)) {
        echo get_the_post_thumbnail($post_id, 'large', ['alt' => esc_attr($alt)]);
        return;
    }

    $image = get_post_meta($post_id, '_hp_image', true);
    if (is_string($image) && $image !== '') {
        printf('<img src="%s" alt="%s" loading="lazy" />', esc_url(hp_core_asset_url($image)), esc_attr($alt));
        return;
    }

    printf('<img src="%s" alt="%s" loading="lazy" />', esc_url(hp_core_asset_url('/images/hospital-lobby-premium.webp')), esc_attr($alt));
}

function hp_core_register_importer_page(): void
{
    add_management_page(
        'Nhập dữ liệu Hồng Phúc',
        'Hồng Phúc Importer',
        'manage_options',
        'hong-phuc-importer',
        'hp_core_render_importer_page'
    );
}

function hp_core_render_importer_page(): void
{
    if (!current_user_can('manage_options')) {
        return;
    }

    $result = null;
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['hp_import_seed'])) {
        check_admin_referer('hp_import_seed');
        $result = hp_core_import_seed();
    }

    ?>
    <div class="wrap">
        <h1>Nhập dữ liệu Bệnh viện Hồng Phúc</h1>
        <p>Công cụ này tạo hoặc cập nhật trang chủ, khoa, dịch vụ, bác sĩ, gói khám và 50 bài viết từ file seed của repo.</p>
        <?php if (is_array($result)) : ?>
            <div class="notice notice-success is-dismissible">
                <p>
                    Đã xử lý:
                    <?php echo esc_html($result['departments']); ?> khoa,
                    <?php echo esc_html($result['services']); ?> dịch vụ,
                    <?php echo esc_html($result['doctors']); ?> bác sĩ,
                    <?php echo esc_html($result['packages']); ?> gói khám,
                    <?php echo esc_html($result['articles']); ?> bài viết.
                </p>
            </div>
        <?php endif; ?>
        <form method="post">
            <?php wp_nonce_field('hp_import_seed'); ?>
            <p>
                <button type="submit" name="hp_import_seed" class="button button-primary button-hero">
                    Import / Update dữ liệu demo
                </button>
            </p>
        </form>
    </div>
    <?php
}

function hp_core_import_seed(): array
{
    $seed_path = HP_CORE_PATH . 'assets/data/seed.json';
    $seed = json_decode(file_get_contents($seed_path), true);

    if (!is_array($seed)) {
        return ['departments' => 0, 'services' => 0, 'doctors' => 0, 'packages' => 0, 'articles' => 0];
    }

    hp_core_cleanup_default_content();
    hp_core_update_site_options($seed['siteInfo'] ?? []);
    update_option('hp_featured_departments', $seed['featuredDepartments'] ?? []);
    update_option('hp_symptom_groups', $seed['symptomGroups'] ?? []);
    hp_core_seed_pages();

    $counts = [
        'departments' => 0,
        'services' => 0,
        'doctors' => 0,
        'packages' => 0,
        'articles' => 0,
    ];

    foreach (($seed['specialties'] ?? []) as $index => $department) {
        hp_core_upsert_post(
            'hp_department',
            $department['slug'],
            $department['name'],
            hp_core_department_content($department),
            $department['description'] ?? '',
            [
                '_hp_image' => $department['heroImage'] ?? '',
                '_hp_group' => $department['group'] ?? '',
                '_hp_focus_areas' => wp_json_encode($department['focusAreas'] ?? []),
            ],
            [
                'hp_department_group' => [$department['group'] ?? ''],
                'hp_focus_area' => $department['focusAreas'] ?? [],
            ],
            $index
        );
        $counts['departments']++;
    }

    foreach (($seed['medicalServices'] ?? []) as $index => $service) {
        hp_core_upsert_post(
            'hp_service',
            $service['slug'],
            $service['name'],
            hp_core_service_content($service),
            $service['summary'] ?? '',
            [
                '_hp_department_slug' => $service['specialtySlug'] ?? '',
                '_hp_focus_area' => $service['focusArea'] ?? '',
                '_hp_image' => hp_core_service_image($index),
            ],
            [
                'hp_focus_area' => [$service['focusArea'] ?? ''],
            ],
            $index
        );
        $counts['services']++;
    }

    foreach (($seed['doctorProfiles'] ?? []) as $index => $doctor) {
        hp_core_upsert_post(
            'hp_doctor',
            $doctor['slug'],
            $doctor['name'],
            hp_core_doctor_content($doctor),
            $doctor['focus'] ?? '',
            [
                '_hp_role' => $doctor['role'] ?? '',
                '_hp_schedule' => $doctor['schedule'] ?? '',
                '_hp_department_slug' => $doctor['specialtySlug'] ?? '',
                '_hp_image' => $doctor['image'] ?? '',
            ],
            [],
            $index
        );
        $counts['doctors']++;
    }

    foreach (($seed['packageOptions'] ?? []) as $index => $package) {
        $slug = sanitize_title($package['name']);
        hp_core_upsert_post(
            'hp_package',
            $slug,
            $package['name'],
            hp_core_package_content($package),
            $package['description'] ?? '',
            [],
            [],
            $index
        );
        $counts['packages']++;
    }

    foreach (($seed['articleCatalog'] ?? []) as $index => $article) {
        hp_core_upsert_article($article, $index);
        $counts['articles']++;
    }

    flush_rewrite_rules(false);
    return $counts;
}

function hp_core_cleanup_default_content(): void
{
    foreach ([['post', 'hello-world'], ['page', 'sample-page']] as [$type, $slug]) {
        $post = get_page_by_path($slug, OBJECT, $type);
        if ($post instanceof WP_Post) {
            wp_delete_post($post->ID, true);
        }
    }
}

function hp_core_update_site_options(array $site_info): void
{
    update_option('blogname', $site_info['name'] ?? 'Bệnh viện Đa khoa Hồng Phúc');
    update_option('blogdescription', $site_info['tagline'] ?? '');
    update_option('hp_site_short_name', $site_info['shortName'] ?? 'Hồng Phúc');
    update_option('hp_site_phone', $site_info['phone'] ?? '0987 126 688');
    update_option('hp_site_address', $site_info['address'] ?? 'Số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng');
    update_option('hp_site_hours', $site_info['hours'] ?? '07:00 - 20:00, từ Thứ Hai đến Chủ nhật');
    update_option('hp_site_email', $site_info['email'] ?? 'chamsoc@hongphuc.vn');
}

function hp_core_seed_pages(): void
{
    $pages = [
        'trang-chu' => ['Trang chủ', hp_core_homepage_blocks()],
        'chuyen-khoa' => ['Chuyên khoa', '<!-- wp:hong-phuc/department-showcase /-->'],
        'dich-vu' => ['Dịch vụ', '<!-- wp:hong-phuc/service-showcase /-->'],
        'bac-si' => ['Bác sĩ', '<!-- wp:hong-phuc/doctor-showcase /-->'],
        'kien-thuc' => ['Kiến thức', '<!-- wp:hong-phuc/article-showcase /-->'],
        'dat-lich' => ['Đặt lịch', '<!-- wp:hong-phuc/cta {"title":"Đặt lịch khám tại Bệnh viện Đa khoa Hồng Phúc","description":"Để lại thông tin, bộ phận chăm sóc khách hàng sẽ gọi lại để xác nhận thời gian và chuyên khoa phù hợp."} /-->'],
        'lien-he' => ['Liên hệ', '<!-- wp:hong-phuc/cta {"title":"Cần hỗ trợ nhanh?","description":"Gọi tổng đài hoặc gửi thông tin để được hướng dẫn trước khi đến bệnh viện.","buttonLabel":"Gọi tổng đài","buttonUrl":"tel:0987126688"} /-->'],
    ];

    $front_id = 0;
    foreach ($pages as $slug => [$title, $content]) {
        $page_id = hp_core_upsert_post('page', $slug, $title, $content, '', [], [], 0);
        if ($slug === 'trang-chu') {
            $front_id = $page_id;
        }
    }

    if ($front_id > 0) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $front_id);
    }
}

function hp_core_homepage_blocks(): string
{
    return implode("\n\n", [
        '<!-- wp:hong-phuc/hero /-->',
        '<!-- wp:hong-phuc/quick-actions /-->',
        '<!-- wp:hong-phuc/trust-section /-->',
        '<!-- wp:hong-phuc/care-spaces /-->',
        '<!-- wp:hong-phuc/quality-band /-->',
        '<!-- wp:hong-phuc/department-overview /-->',
        '<!-- wp:hong-phuc/service-showcase /-->',
        '<!-- wp:hong-phuc/packages-symptoms /-->',
        '<!-- wp:hong-phuc/doctor-showcase /-->',
        '<!-- wp:hong-phuc/article-showcase /-->',
        '<!-- wp:hong-phuc/cta /-->',
    ]);
}

function hp_core_upsert_post(string $post_type, string $slug, string $title, string $content, string $excerpt = '', array $meta = [], array $tax_input = [], int $menu_order = 0): int
{
    $existing = get_page_by_path($slug, OBJECT, $post_type);
    $post_data = [
        'post_type' => $post_type,
        'post_status' => 'publish',
        'post_name' => $slug,
        'post_title' => wp_strip_all_tags($title),
        'post_content' => $content,
        'post_excerpt' => $excerpt,
        'menu_order' => $menu_order,
    ];

    if ($existing instanceof WP_Post) {
        $post_data['ID'] = $existing->ID;
        $post_id = wp_update_post($post_data, true);
    } else {
        $post_id = wp_insert_post($post_data, true);
    }

    if (is_wp_error($post_id)) {
        return 0;
    }

    foreach ($meta as $key => $value) {
        update_post_meta($post_id, $key, $value);
    }

    foreach ($tax_input as $taxonomy => $terms) {
        $clean_terms = array_values(array_filter(array_map('strval', (array) $terms)));
        if ($clean_terms) {
            wp_set_object_terms($post_id, $clean_terms, $taxonomy, false);
        }
    }

    return (int) $post_id;
}

function hp_core_upsert_article(array $article, int $menu_order): int
{
    $detail = $article['detail'] ?? null;
    $title = $detail['title'] ?? $article['title'];
    $excerpt = $detail['excerpt'] ?? ($article['summary'] ?? '');
    $content = hp_core_article_content($article);
    $slug = $article['slug'];

    $post_id = hp_core_upsert_post('post', $slug, $title, $content, $excerpt, [
        '_hp_read_time' => $article['readTime'] ?? '',
        '_hp_department_slug' => $article['specialtySlug'] ?? '',
        '_hp_focus_area' => $article['focusArea'] ?? '',
    ], [
        'category' => [$article['category'] ?? 'Kiến thức'],
        'hp_focus_area' => [$article['focusArea'] ?? ''],
    ], $menu_order);

    return $post_id;
}

function hp_core_department_content(array $department): string
{
    return hp_core_blocks([
        ['paragraph', $department['overview'] ?? $department['description'] ?? ''],
        ['heading', 'Khi nào nên đến khoa này?'],
        ['list', $department['signs'] ?? []],
        ['heading', 'Lĩnh vực chuyên sâu'],
        ['list', $department['focusAreas'] ?? []],
    ]);
}

function hp_core_service_content(array $service): string
{
    return hp_core_blocks([
        ['paragraph', $service['summary'] ?? ''],
        ['heading', 'Phù hợp với'],
        ['list', $service['audience'] ?? []],
        ['heading', 'Quy trình thường gặp'],
        ['list', $service['process'] ?? []],
        ['heading', 'Cần chuẩn bị'],
        ['paragraph', $service['preparation'] ?? ''],
    ]);
}

function hp_core_doctor_content(array $doctor): string
{
    return hp_core_blocks([
        ['paragraph', $doctor['bio'] ?? $doctor['focus'] ?? ''],
        ['heading', 'Chuyên môn và kinh nghiệm'],
        ['list', $doctor['credentials'] ?? []],
        ['heading', 'Lịch khám dự kiến'],
        ['paragraph', $doctor['schedule'] ?? 'Liên hệ bệnh viện để được xác nhận lịch khám mới nhất.'],
    ]);
}

function hp_core_package_content(array $package): string
{
    return hp_core_blocks([
        ['paragraph', $package['description'] ?? ''],
        ['heading', 'Bao gồm'],
        ['list', $package['includes'] ?? []],
    ]);
}

function hp_core_article_content(array $article): string
{
    $detail = $article['detail'] ?? null;
    if (!is_array($detail)) {
        return hp_core_blocks([
            ['paragraph', $article['summary'] ?? ''],
        ]);
    }

    $blocks = [];
    foreach (($detail['intro'] ?? []) as $paragraph) {
        $blocks[] = ['paragraph', $paragraph];
    }

    foreach (($detail['sections'] ?? []) as $section) {
        if (!empty($section['heading'])) {
            $blocks[] = ['heading', $section['heading']];
        }
        foreach (($section['paragraphs'] ?? []) as $paragraph) {
            $blocks[] = ['paragraph', $paragraph];
        }
    }

    return hp_core_blocks($blocks);
}

function hp_core_blocks(array $items): string
{
    $html = '';
    foreach ($items as [$type, $value]) {
        if ($type === 'heading' && is_string($value) && $value !== '') {
            $html .= '<!-- wp:heading {"level":2} --><h2>' . esc_html($value) . '</h2><!-- /wp:heading -->' . "\n";
        }

        if ($type === 'paragraph' && is_string($value) && $value !== '') {
            $html .= '<!-- wp:paragraph --><p>' . esc_html($value) . '</p><!-- /wp:paragraph -->' . "\n";
        }

        if ($type === 'list' && is_array($value) && $value) {
            $html .= '<!-- wp:list --><ul>';
            foreach ($value as $item) {
                $html .= '<li>' . esc_html((string) $item) . '</li>';
            }
            $html .= '</ul><!-- /wp:list -->' . "\n";
        }
    }

    return $html;
}

function hp_core_service_image(int $index): string
{
    $images = [
        '/images/consultation-premium.webp',
        '/images/diagnostic-imaging-premium.webp',
        '/images/medical-council-premium.webp',
        '/images/pediatrics-consultation-premium.webp',
        '/images/facility.webp',
        '/images/bedside.webp',
    ];

    return $images[$index % count($images)];
}
