<?php
/**
 * Headless CMS control plane for the Next.js frontend.
 *
 * WordPress owns editable content. Next.js remains responsible for the visual
 * system and falls back to its bundled content only when this API is offline.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('rest_api_init', 'hp_cms_register_rest_routes');
add_action('admin_menu', 'hp_cms_register_admin_pages');
add_action('add_meta_boxes', 'hp_cms_register_meta_boxes');
add_action('save_post', 'hp_cms_save_meta_boxes');

function hp_cms_collection_labels(): array
{
    return [
        'navigation' => 'Menu chính',
        'quickActions' => 'Hành động nhanh',
        'qualityMetrics' => 'Các con số nổi bật',
        'featuredDepartments' => 'Khoa nổi bật',
        'internationalPrograms' => 'Chương trình hợp tác quốc tế',
        'technologyCapabilities' => 'Năng lực công nghệ',
        'featuredSpaces' => 'Không gian bệnh viện',
        'trustPillars' => 'Lý do tin chọn',
        'patientJourney' => 'Hành trình người bệnh',
        'patientStories' => 'Chia sẻ người bệnh',
        'faqItems' => 'Câu hỏi thường gặp',
        'symptomGroups' => 'Tìm theo triệu chứng',
        'searchSuggestions' => 'Từ khóa gợi ý tìm kiếm',
        'enterprisePrograms' => 'Khám sức khỏe doanh nghiệp',
        'aestheticServices' => 'Dịch vụ tạo hình thẩm mỹ',
        'guideTopics' => 'Hướng dẫn khách hàng',
        'footerGroups' => 'Menu chân trang',
    ];
}

function hp_cms_site_fields(): array
{
    return [
        'hp_site_short_name' => ['Tên ngắn', 'text'],
        'hp_site_description' => ['Mô tả bệnh viện', 'textarea'],
        'hp_site_phone' => ['Số tổng đài', 'text'],
        'hp_site_emergency' => ['Thông tin cấp cứu', 'text'],
        'hp_site_address' => ['Địa chỉ', 'text'],
        'hp_site_hours' => ['Giờ làm việc', 'text'],
        'hp_site_email' => ['Email', 'email'],
        'hp_site_logo' => ['Logo (URL hoặc đường dẫn ảnh)', 'text'],
        'hp_site_favicon' => ['Favicon (URL hoặc đường dẫn ảnh)', 'text'],
        'hp_frontend_url' => ['Địa chỉ website public', 'url'],
        'hp_revalidate_secret' => ['Mã đồng bộ frontend', 'text'],
        'hp_default_seo_title' => ['Tiêu đề SEO mặc định', 'text'],
        'hp_default_seo_description' => ['Mô tả SEO mặc định', 'textarea'],
        'hp_default_social_image' => ['Ảnh chia sẻ mạng xã hội', 'text'],
    ];
}

function hp_cms_seed_content(array $seed): void
{
    foreach (array_keys(hp_cms_collection_labels()) as $key) {
        if (array_key_exists($key, $seed)) {
            update_option('hp_cms_' . $key, $seed[$key], false);
        }
    }

    $site_info = is_array($seed['siteInfo'] ?? null) ? $seed['siteInfo'] : [];
    update_option('hp_site_description', $site_info['description'] ?? '', false);
    update_option('hp_site_emergency', $site_info['emergency'] ?? 'Cấp cứu 24/7', false);
    update_option('hp_cms_version', '1', false);
    update_option('hp_cms_updated_at', current_time('mysql'), false);
    if ((string) get_option('hp_revalidate_secret', '') === '') {
        update_option('hp_revalidate_secret', 'hong-phuc-local-revalidate', false);
    }
}

function hp_cms_seed_page_presentations(): void
{
    $presentations = [
        'chuyen-khoa' => ['Hệ thống chuyên khoa', '17 khoa chuyên môn cùng phối hợp trong một hành trình chăm sóc.', 'Tìm hiểu phạm vi chuyên môn, dịch vụ, bác sĩ và kiến thức sức khỏe của từng khoa.', '/images/doctor-team-premium.webp'],
        'dich-vu' => ['Dịch vụ y tế', 'Hiểu rõ dịch vụ trước khi đặt lịch khám.', 'Tìm hiểu dịch vụ phù hợp với ai, cần chuẩn bị gì, được thực hiện như thế nào và chuyên khoa nào phụ trách.', '/images/facility.webp'],
        'tim-bac-si' => ['Tra cứu bác sĩ', 'Chọn đúng bác sĩ cho nhu cầu thăm khám của bạn.', 'Mỗi hồ sơ được trình bày theo chuyên môn, thế mạnh lâm sàng, lịch khám và dịch vụ liên quan.', '/images/doctor-team-premium.webp'],
        'doi-ngu-bac-si' => ['Đội ngũ bác sĩ', 'Bác sĩ chuyên sâu từng lĩnh vực, phối hợp khi người bệnh cần nhiều chuyên khoa.', 'Xem lĩnh vực chuyên môn, kinh nghiệm, lịch khám và các dịch vụ liên quan của từng bác sĩ.', '/images/doctor-team-premium.webp'],
        'goi-kham' => ['Gói khám và chương trình chăm sóc', 'Chọn gói khám phù hợp với độ tuổi, sức khỏe và thời gian của bạn.', 'Người bệnh được tư vấn danh mục phù hợp trước khi đăng ký để tránh thực hiện những hạng mục chưa cần thiết.', '/images/consultation.webp'],
        'tim-theo-trieu-chung' => ['Bắt đầu từ điều người bệnh đang gặp', 'Mô tả triệu chứng để tìm nơi khám phù hợp.', 'Các gợi ý giúp bạn chọn điểm bắt đầu; chẩn đoán cuối cùng cần dựa trên thăm khám của bác sĩ.', '/images/consultation-premium.webp'],
        'hop-tac-quoc-te' => ['Hợp tác chuyên môn trong khu vực', 'Kết nối chuyên gia, đào tạo và chuyển giao kỹ thuật vì lợi ích người bệnh.', 'Hồng Phúc phát triển hội chẩn, đào tạo và chuyển giao kỹ thuật cùng các đối tác y tế trong khu vực.', '/images/medical-council-premium.webp'],
        'huong-dan-khach-hang' => ['Trước khi đến khám', 'Chuẩn bị đầy đủ để buổi khám diễn ra thuận tiện hơn.', 'Xem hướng dẫn về giấy tờ, thuốc đang dùng, kết quả cũ, bảo hiểm và chuẩn bị trước các dịch vụ.', '/images/hospital-lobby-premium.webp'],
        'kham-suc-khoe-doanh-nghiep' => ['Chăm sóc sức khỏe cho tổ chức', 'Chương trình khám phù hợp với từng nhóm nhân sự.', 'Hồng Phúc hỗ trợ xây dựng danh mục, sắp xếp lịch, trả kết quả và báo cáo sức khỏe tổng hợp.', '/images/medical-leadership.webp'],
        'tham-my' => ['Khoa Tạo hình thẩm mỹ', 'Đẹp hơn trong một môi trường y tế đặt an toàn lên trước.', 'Mỗi trường hợp được đánh giá sức khỏe, tư vấn phương án, gây mê và chăm sóc hậu phẫu rõ ràng.', '/images/consultation-premium.webp'],
        'dat-lich' => ['Đặt lịch khám', 'Chọn cách đặt lịch thuận tiện nhất với nhu cầu của bạn.', 'Người bệnh có thể đặt theo khoa, bác sĩ, triệu chứng hoặc gói khám và được xác nhận trước khi đến viện.', '/images/consultation.webp'],
        'lien-he' => ['Liên hệ', 'Liên hệ Hồng Phúc khi bạn cần đặt lịch hoặc hỗ trợ y tế.', 'Tìm nhanh số tổng đài, địa chỉ, giờ làm việc và hướng dẫn cần thiết trước khi đến bệnh viện.', '/images/building.webp'],
        'kien-thuc' => ['Kiến thức sức khỏe', 'Thông tin y khoa dễ hiểu cho người bệnh và gia đình.', 'Tra cứu bài viết theo chuyên khoa, triệu chứng, dịch vụ và nhu cầu chăm sóc sức khỏe.', '/images/medical-council-premium.webp'],
    ];

    foreach ($presentations as $slug => [$eyebrow, $title, $description, $image]) {
        $page = get_page_by_path($slug, OBJECT, 'page');
        if (!$page instanceof WP_Post) {
            continue;
        }
        $defaults = [
            '_hp_hero_eyebrow' => $eyebrow,
            '_hp_hero_title' => $title,
            '_hp_hero_description' => $description,
            '_hp_hero_image' => $image,
            '_hp_hero_primary_label' => 'Đặt lịch khám',
            '_hp_hero_primary_url' => '/dat-lich',
            '_hp_hero_secondary_label' => 'Liên hệ hỗ trợ',
            '_hp_hero_secondary_url' => '/lien-he',
        ];
        foreach ($defaults as $key => $value) {
            if ((string) get_post_meta($page->ID, $key, true) === '') {
                update_post_meta($page->ID, $key, $value);
            }
        }
    }
}

function hp_cms_register_rest_routes(): void
{
    register_rest_route('hong-phuc/v1', '/content', [
        'methods' => 'GET',
        'callback' => 'hp_cms_rest_content',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('hong-phuc/v1', '/page/(?P<slug>[a-z0-9-]+)', [
        'methods' => 'GET',
        'callback' => 'hp_cms_rest_page',
        'permission_callback' => '__return_true',
    ]);
}

function hp_cms_rest_content(): WP_REST_Response
{
    $content = [
        'version' => (string) get_option('hp_cms_version', '1'),
        'siteInfo' => hp_cms_get_site_info(),
        'specialties' => hp_cms_get_entities('hp_department'),
        'medicalServices' => hp_cms_get_entities('hp_service'),
        'doctorProfiles' => hp_cms_get_entities('hp_doctor'),
        'packageOptions' => hp_cms_get_entities('hp_package'),
        'pages' => hp_cms_get_pages(),
        'updatedAt' => (string) get_option('hp_cms_updated_at', current_time('mysql')),
    ];

    foreach (array_keys(hp_cms_collection_labels()) as $key) {
        $value = get_option('hp_cms_' . $key, []);
        $content[$key] = is_array($value) ? $value : [];
    }

    return rest_ensure_response($content);
}

function hp_cms_rest_page(WP_REST_Request $request)
{
    $slug = sanitize_title((string) $request->get_param('slug'));
    $page = get_page_by_path($slug, OBJECT, 'page');
    if (!$page instanceof WP_Post || $page->post_status !== 'publish') {
        return new WP_Error('hp_page_not_found', 'Không tìm thấy trang.', ['status' => 404]);
    }

    return rest_ensure_response(hp_cms_page_item($page));
}

function hp_cms_get_site_info(): array
{
    return [
        'name' => get_bloginfo('name'),
        'shortName' => hp_core_site_option('hp_site_short_name', 'Hồng Phúc'),
        'tagline' => get_bloginfo('description'),
        'description' => hp_core_site_option('hp_site_description', get_bloginfo('description')),
        'phone' => hp_core_site_option('hp_site_phone', '0987 126 688'),
        'address' => hp_core_site_option('hp_site_address', 'Số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng'),
        'hours' => hp_core_site_option('hp_site_hours', '07:00 - 20:00, từ Thứ Hai đến Chủ nhật'),
        'emergency' => hp_core_site_option('hp_site_emergency', 'Cấp cứu 24/7'),
        'email' => hp_core_site_option('hp_site_email', 'chamsoc@hongphuc.vn'),
        'logo' => hp_core_site_option('hp_site_logo'),
        'favicon' => hp_core_site_option('hp_site_favicon'),
        'frontendUrl' => hp_core_frontend_url(),
        'seo' => [
            'title' => hp_core_site_option('hp_default_seo_title', get_bloginfo('name')),
            'description' => hp_core_site_option('hp_default_seo_description', get_bloginfo('description')),
            'socialImage' => hp_core_site_option('hp_default_social_image'),
        ],
    ];
}

function hp_cms_get_entities(string $post_type): array
{
    $posts = get_posts([
        'post_type' => $post_type,
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'menu_order title',
        'order' => 'ASC',
    ]);

    return array_values(array_map(static function (WP_Post $post) use ($post_type): array {
        $payload = json_decode((string) get_post_meta($post->ID, '_hp_payload', true), true);
        $item = is_array($payload) ? $payload : [];
        $image = get_the_post_thumbnail_url($post, 'full');
        if (!is_string($image) || $image === '') {
            $image = (string) get_post_meta($post->ID, '_hp_image', true);
        }

        $item['slug'] = $post->post_name;
        $item['contentHtml'] = hp_core_rest_render_content($post);
        $item['modified'] = get_post_modified_time('c', true, $post);
        $item['menuOrder'] = (int) $post->menu_order;

        if ($post_type === 'hp_department') {
            $item['name'] = get_the_title($post);
            $item['description'] = $post->post_excerpt;
            $item['href'] = '/chuyen-khoa/' . $post->post_name;
            $item['heroImage'] = $image;
            $item['group'] = (string) get_post_meta($post->ID, '_hp_group', true);
            $item['overview'] = hp_cms_meta_or_payload($post->ID, '_hp_overview', $item, 'overview');
            $item['signs'] = hp_cms_lines_or_payload($post->ID, '_hp_signs', $item, 'signs');
            $item['focusAreas'] = hp_cms_focus_areas($post->ID, $item);
        } elseif ($post_type === 'hp_service') {
            $item['name'] = get_the_title($post);
            $item['summary'] = $post->post_excerpt;
            $item['href'] = '/dich-vu/' . $post->post_name;
            $item['image'] = $image;
            $item['specialtySlug'] = (string) get_post_meta($post->ID, '_hp_department_slug', true);
            $item['focusArea'] = (string) get_post_meta($post->ID, '_hp_focus_area', true);
            $item['audience'] = hp_cms_lines_or_payload($post->ID, '_hp_audience', $item, 'audience');
            $item['process'] = hp_cms_lines_or_payload($post->ID, '_hp_process', $item, 'process');
            $item['preparation'] = hp_cms_meta_or_payload($post->ID, '_hp_preparation', $item, 'preparation');
        } elseif ($post_type === 'hp_doctor') {
            $item['name'] = get_the_title($post);
            $item['role'] = (string) get_post_meta($post->ID, '_hp_role', true);
            $item['focus'] = $post->post_excerpt;
            $item['schedule'] = (string) get_post_meta($post->ID, '_hp_schedule', true);
            $item['specialtySlug'] = (string) get_post_meta($post->ID, '_hp_department_slug', true);
            $item['image'] = $image;
            $item['href'] = '/bac-si/' . $post->post_name;
            $item['bio'] = hp_cms_meta_or_payload($post->ID, '_hp_bio', $item, 'bio');
            $item['credentials'] = hp_cms_lines_or_payload($post->ID, '_hp_credentials', $item, 'credentials');
        } elseif ($post_type === 'hp_package') {
            $item['name'] = get_the_title($post);
            $item['description'] = $post->post_excerpt;
            $item['href'] = '/goi-kham#' . $post->post_name;
            $item['includes'] = hp_cms_lines_or_payload($post->ID, '_hp_includes', $item, 'includes');
        }

        return $item;
    }, $posts));
}

function hp_cms_meta_or_payload(int $post_id, string $meta_key, array $payload, string $payload_key): string
{
    $value = (string) get_post_meta($post_id, $meta_key, true);
    return $value !== '' ? $value : (string) ($payload[$payload_key] ?? '');
}

function hp_cms_lines_or_payload(int $post_id, string $meta_key, array $payload, string $payload_key): array
{
    $value = (string) get_post_meta($post_id, $meta_key, true);
    if ($value === '') {
        return is_array($payload[$payload_key] ?? null) ? array_values($payload[$payload_key]) : [];
    }

    return hp_cms_textarea_lines($value);
}

function hp_cms_focus_areas(int $post_id, array $payload): array
{
    $raw = (string) get_post_meta($post_id, '_hp_focus_areas', true);
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        return array_values($decoded);
    }

    return is_array($payload['focusAreas'] ?? null) ? array_values($payload['focusAreas']) : hp_cms_textarea_lines($raw);
}

function hp_cms_get_pages(): array
{
    $pages = get_pages([
        'post_status' => 'publish',
        'sort_column' => 'menu_order,post_title',
    ]);

    $items = [];
    foreach ($pages as $page) {
        $items[$page->post_name] = hp_cms_page_item($page);
    }
    return $items;
}

function hp_cms_page_item(WP_Post $page): array
{
    $blocks = array_values(array_filter(array_map(static function (array $block): ?array {
        $name = (string) ($block['blockName'] ?? '');
        if ($name === '') {
            return null;
        }
        return [
            'name' => $name,
            'attributes' => is_array($block['attrs'] ?? null) ? $block['attrs'] : [],
        ];
    }, parse_blocks($page->post_content))));

    return [
        'id' => $page->ID,
        'slug' => $page->post_name,
        'title' => get_the_title($page),
        'excerpt' => $page->post_excerpt,
        'contentHtml' => hp_core_rest_render_content($page),
        'blocks' => $blocks,
        'hero' => [
            'eyebrow' => (string) get_post_meta($page->ID, '_hp_hero_eyebrow', true),
            'title' => (string) get_post_meta($page->ID, '_hp_hero_title', true),
            'description' => (string) get_post_meta($page->ID, '_hp_hero_description', true),
            'image' => (string) get_post_meta($page->ID, '_hp_hero_image', true),
            'primaryLabel' => (string) get_post_meta($page->ID, '_hp_hero_primary_label', true),
            'primaryUrl' => (string) get_post_meta($page->ID, '_hp_hero_primary_url', true),
            'secondaryLabel' => (string) get_post_meta($page->ID, '_hp_hero_secondary_label', true),
            'secondaryUrl' => (string) get_post_meta($page->ID, '_hp_hero_secondary_url', true),
        ],
        'sections' => hp_cms_page_sections($page->ID),
        'menuOrder' => (int) $page->menu_order,
        'modified' => get_post_modified_time('c', true, $page),
        'seo' => [
            'title' => (string) get_post_meta($page->ID, '_hp_seo_title', true),
            'description' => (string) get_post_meta($page->ID, '_hp_seo_description', true),
            'socialImage' => (string) get_post_meta($page->ID, '_hp_social_image', true),
            'noIndex' => get_post_meta($page->ID, '_hp_noindex', true) === '1',
        ],
    ];
}

function hp_cms_register_admin_pages(): void
{
    add_menu_page(
        'Quản trị website Hồng Phúc',
        'Hồng Phúc CMS',
        'manage_options',
        'hong-phuc-cms',
        'hp_cms_render_admin_page',
        'dashicons-admin-site-alt3',
        3
    );
}

function hp_cms_render_admin_page(): void
{
    if (!current_user_can('manage_options')) {
        return;
    }

    $errors = [];
    $saved = false;
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['hp_cms_save'])) {
        check_admin_referer('hp_cms_save_settings');
        $saved = hp_cms_save_admin_settings($errors);
    }

    $api_url = rest_url('hong-phuc/v1/content');
    ?>
    <div class="wrap hp-cms-admin">
        <h1>Trung tâm quản trị website Hồng Phúc</h1>
        <p class="description">Nội dung lưu tại đây được website public sử dụng trực tiếp. Giao diện và hiệu ứng vẫn do frontend bảo vệ để tránh vỡ thiết kế.</p>

        <?php if ($saved) : ?>
            <div class="notice notice-success is-dismissible"><p>Đã lưu nội dung và làm mới phiên bản CMS.</p></div>
        <?php endif; ?>
        <?php foreach ($errors as $error) : ?>
            <div class="notice notice-error"><p><?php echo esc_html($error); ?></p></div>
        <?php endforeach; ?>

        <div class="hp-cms-links">
            <a class="button button-primary" href="<?php echo esc_url(admin_url('edit.php?post_type=hp_department')); ?>">Quản lý khoa</a>
            <a class="button" href="<?php echo esc_url(admin_url('edit.php?post_type=hp_service')); ?>">Dịch vụ</a>
            <a class="button" href="<?php echo esc_url(admin_url('edit.php?post_type=hp_doctor')); ?>">Bác sĩ</a>
            <a class="button" href="<?php echo esc_url(admin_url('edit.php?post_type=hp_package')); ?>">Gói khám</a>
            <a class="button" href="<?php echo esc_url(admin_url('edit.php')); ?>">Bài viết</a>
            <a class="button" href="<?php echo esc_url(admin_url('edit.php?post_type=page')); ?>">Các trang</a>
            <a class="button" href="<?php echo esc_url($api_url); ?>" target="_blank" rel="noreferrer">Kiểm tra API</a>
        </div>

        <form method="post">
            <?php wp_nonce_field('hp_cms_save_settings'); ?>
            <input type="hidden" name="hp_cms_save" value="1" />

            <div class="hp-cms-card">
                <h2>Thông tin chung và SEO mặc định</h2>
                <div class="hp-cms-grid">
                    <label><span>Tên đầy đủ</span><input type="text" name="blogname" value="<?php echo esc_attr(get_bloginfo('name')); ?>" /></label>
                    <label><span>Khẩu hiệu</span><input type="text" name="blogdescription" value="<?php echo esc_attr(get_bloginfo('description')); ?>" /></label>
                    <?php foreach (hp_cms_site_fields() as $key => [$label, $type]) : ?>
                        <label class="<?php echo $type === 'textarea' ? 'hp-cms-wide' : ''; ?>">
                            <span><?php echo esc_html($label); ?></span>
                            <?php if ($type === 'textarea') : ?>
                                <textarea name="<?php echo esc_attr($key); ?>" rows="4"><?php echo esc_textarea((string) get_option($key, '')); ?></textarea>
                            <?php else : ?>
                                <input type="<?php echo esc_attr($type); ?>" name="<?php echo esc_attr($key); ?>" value="<?php echo esc_attr((string) get_option($key, '')); ?>" />
                            <?php endif; ?>
                        </label>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="hp-cms-card">
                <h2>Nội dung các khối giao diện</h2>
                <p>Mỗi ô là một danh sách nội dung có cấu trúc. Có thể sửa chữ, đường dẫn, hình ảnh và thứ tự. Hệ thống sẽ từ chối lưu nếu cấu trúc JSON không hợp lệ.</p>
                <?php foreach (hp_cms_collection_labels() as $key => $label) : ?>
                    <?php $value = get_option('hp_cms_' . $key, []); ?>
                    <details class="hp-cms-collection">
                        <summary><?php echo esc_html($label); ?></summary>
                        <textarea name="hp_collection[<?php echo esc_attr($key); ?>]" rows="12" spellcheck="false"><?php echo esc_textarea(wp_json_encode($value, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)); ?></textarea>
                    </details>
                <?php endforeach; ?>
            </div>

            <p class="submit"><button class="button button-primary button-hero" type="submit">Lưu toàn bộ thay đổi</button></p>
        </form>
    </div>
    <style>
        .hp-cms-admin{max-width:1180px}.hp-cms-links{display:flex;gap:8px;flex-wrap:wrap;margin:20px 0}.hp-cms-card{background:#fff;border:1px solid #dcdcde;border-radius:8px;padding:22px;margin:18px 0}.hp-cms-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.hp-cms-grid label{display:flex;flex-direction:column;gap:7px}.hp-cms-grid label span{font-weight:600}.hp-cms-grid input,.hp-cms-grid textarea,.hp-cms-collection textarea{width:100%}.hp-cms-wide{grid-column:1/-1}.hp-cms-collection{border-top:1px solid #e7e7e7;padding:12px 0}.hp-cms-collection summary{cursor:pointer;font-weight:700;padding:5px 0}.hp-cms-collection textarea{margin-top:12px;font-family:Consolas,monospace;font-size:12px;line-height:1.55}@media(max-width:782px){.hp-cms-grid{grid-template-columns:1fr}.hp-cms-wide{grid-column:auto}}
    </style>
    <?php
}

function hp_cms_save_admin_settings(array &$errors): bool
{
    update_option('blogname', sanitize_text_field(wp_unslash($_POST['blogname'] ?? '')));
    update_option('blogdescription', sanitize_text_field(wp_unslash($_POST['blogdescription'] ?? '')));

    foreach (hp_cms_site_fields() as $key => [, $type]) {
        $raw = (string) wp_unslash($_POST[$key] ?? '');
        $value = $type === 'textarea' ? sanitize_textarea_field($raw) : sanitize_text_field($raw);
        if ($type === 'email') {
            $value = sanitize_email($raw);
        } elseif ($type === 'url') {
            $value = esc_url_raw($raw);
        }
        update_option($key, $value, false);
    }

    $collections = is_array($_POST['hp_collection'] ?? null) ? wp_unslash($_POST['hp_collection']) : [];
    $decoded_collections = [];
    foreach (hp_cms_collection_labels() as $key => $label) {
        $raw = (string) ($collections[$key] ?? '[]');
        $decoded = json_decode($raw, true);
        if (!is_array($decoded)) {
            $errors[] = sprintf('%s: JSON không hợp lệ, phần này chưa được lưu.', $label);
            continue;
        }
        $decoded_collections[$key] = $decoded;
    }

    if ($errors) {
        return false;
    }

    foreach ($decoded_collections as $key => $value) {
        update_option('hp_cms_' . $key, $value, false);
    }
    update_option('hp_cms_updated_at', current_time('mysql'), false);
    update_option('hp_cms_version', (string) (((int) get_option('hp_cms_version', 1)) + 1), false);
    hp_cms_notify_frontend('/');
    return true;
}

function hp_cms_register_meta_boxes(): void
{
    foreach (['hp_department', 'hp_service', 'hp_doctor', 'hp_package'] as $post_type) {
        add_meta_box('hp-cms-entity', 'Thông tin hiển thị trên website', 'hp_cms_render_entity_meta_box', $post_type, 'normal', 'high');
    }
    add_meta_box('hp-cms-page-seo', 'SEO và chia sẻ mạng xã hội', 'hp_cms_render_page_meta_box', 'page', 'normal', 'default');
}

function hp_cms_entity_fields(string $post_type): array
{
    $fields = [
        'hp_department' => [
            '_hp_group' => ['Khối chuyên môn', 'text'],
            '_hp_image' => ['Ảnh đại diện (URL hoặc đường dẫn)', 'text'],
            '_hp_overview' => ['Tổng quan khoa', 'textarea'],
            '_hp_signs' => ['Khi nào nên đến khoa (mỗi dòng một ý)', 'textarea'],
            '_hp_focus_areas' => ['Lĩnh vực chuyên sâu (mỗi dòng một ý)', 'textarea'],
        ],
        'hp_service' => [
            '_hp_department_slug' => ['Mã khoa phụ trách', 'text'],
            '_hp_focus_area' => ['Lĩnh vực chuyên sâu', 'text'],
            '_hp_image' => ['Ảnh đại diện (URL hoặc đường dẫn)', 'text'],
            '_hp_audience' => ['Phù hợp với (mỗi dòng một ý)', 'textarea'],
            '_hp_process' => ['Quy trình (mỗi dòng một bước)', 'textarea'],
            '_hp_preparation' => ['Cần chuẩn bị', 'textarea'],
        ],
        'hp_doctor' => [
            '_hp_role' => ['Chức danh', 'text'],
            '_hp_department_slug' => ['Mã khoa', 'text'],
            '_hp_schedule' => ['Lịch khám dự kiến', 'text'],
            '_hp_image' => ['Ảnh bác sĩ (URL hoặc đường dẫn)', 'text'],
            '_hp_bio' => ['Giới thiệu bác sĩ', 'textarea'],
            '_hp_credentials' => ['Chuyên môn và kinh nghiệm (mỗi dòng một ý)', 'textarea'],
        ],
        'hp_package' => [
            '_hp_includes' => ['Danh mục trong gói (mỗi dòng một ý)', 'textarea'],
        ],
    ];
    return $fields[$post_type] ?? [];
}

function hp_cms_render_entity_meta_box(WP_Post $post): void
{
    wp_nonce_field('hp_cms_save_entity', 'hp_cms_entity_nonce');
    echo '<p class="description">Tiêu đề, mô tả ngắn, nội dung chi tiết và ảnh đại diện được sửa bằng các ô chuẩn của WordPress. Các thông tin bổ sung nằm dưới đây.</p>';
    echo '<table class="form-table"><tbody>';
    foreach (hp_cms_entity_fields($post->post_type) as $key => [$label, $type]) {
        $value = (string) get_post_meta($post->ID, $key, true);
        if ($key === '_hp_focus_areas') {
            $decoded = json_decode($value, true);
            if (is_array($decoded)) {
                $value = implode("\n", $decoded);
            }
        }
        echo '<tr><th><label for="' . esc_attr($key) . '">' . esc_html($label) . '</label></th><td>';
        if ($type === 'textarea') {
            echo '<textarea class="large-text" rows="5" id="' . esc_attr($key) . '" name="hp_entity[' . esc_attr($key) . ']">' . esc_textarea($value) . '</textarea>';
        } else {
            echo '<input class="regular-text" type="text" id="' . esc_attr($key) . '" name="hp_entity[' . esc_attr($key) . ']" value="' . esc_attr($value) . '" />';
        }
        echo '</td></tr>';
    }
    echo '</tbody></table>';
}

function hp_cms_render_page_meta_box(WP_Post $post): void
{
    wp_nonce_field('hp_cms_save_page', 'hp_cms_page_nonce');
    echo '<h3>Nội dung đầu trang</h3>';
    $hero_fields = [
        '_hp_hero_eyebrow' => 'Nhãn nhỏ',
        '_hp_hero_title' => 'Tiêu đề lớn',
        '_hp_hero_description' => 'Mô tả',
        '_hp_hero_image' => 'Ảnh đầu trang (URL hoặc đường dẫn)',
        '_hp_hero_primary_label' => 'Nhãn nút chính',
        '_hp_hero_primary_url' => 'Đường dẫn nút chính',
        '_hp_hero_secondary_label' => 'Nhãn nút phụ',
        '_hp_hero_secondary_url' => 'Đường dẫn nút phụ',
    ];
    foreach ($hero_fields as $key => $label) {
        echo '<p><label style="display:block;font-weight:600;margin-bottom:6px" for="' . esc_attr($key) . '">' . esc_html($label) . '</label>';
        if ($key === '_hp_hero_description') {
            echo '<textarea class="large-text" rows="3" id="' . esc_attr($key) . '" name="hp_page_meta[' . esc_attr($key) . ']">' . esc_textarea((string) get_post_meta($post->ID, $key, true)) . '</textarea>';
        } else {
            echo '<input class="large-text" type="text" id="' . esc_attr($key) . '" name="hp_page_meta[' . esc_attr($key) . ']" value="' . esc_attr((string) get_post_meta($post->ID, $key, true)) . '" />';
        }
        echo '</p>';
    }
    echo '<hr><h3>SEO và chia sẻ</h3>';
    $fields = [
        '_hp_seo_title' => 'Tiêu đề SEO',
        '_hp_seo_description' => 'Mô tả SEO',
        '_hp_social_image' => 'Ảnh chia sẻ (URL hoặc đường dẫn)',
    ];
    foreach ($fields as $key => $label) {
        echo '<p><label style="display:block;font-weight:600;margin-bottom:6px" for="' . esc_attr($key) . '">' . esc_html($label) . '</label>';
        if ($key === '_hp_seo_description') {
            echo '<textarea class="large-text" rows="3" id="' . esc_attr($key) . '" name="hp_page_meta[' . esc_attr($key) . ']">' . esc_textarea((string) get_post_meta($post->ID, $key, true)) . '</textarea>';
        } else {
            echo '<input class="large-text" type="text" id="' . esc_attr($key) . '" name="hp_page_meta[' . esc_attr($key) . ']" value="' . esc_attr((string) get_post_meta($post->ID, $key, true)) . '" />';
        }
        echo '</p>';
    }
    echo '<label><input type="checkbox" name="hp_page_meta[_hp_noindex]" value="1" ' . checked(get_post_meta($post->ID, '_hp_noindex', true), '1', false) . ' /> Không cho công cụ tìm kiếm lập chỉ mục trang này</label>';
}

function hp_cms_save_meta_boxes(int $post_id): void
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    $post_type = get_post_type($post_id);
    if (in_array($post_type, ['hp_department', 'hp_service', 'hp_doctor', 'hp_package'], true)) {
        if (!isset($_POST['hp_cms_entity_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['hp_cms_entity_nonce'])), 'hp_cms_save_entity')) {
            return;
        }
        $values = is_array($_POST['hp_entity'] ?? null) ? wp_unslash($_POST['hp_entity']) : [];
        foreach (hp_cms_entity_fields((string) $post_type) as $key => [, $type]) {
            $value = (string) ($values[$key] ?? '');
            if ($key === '_hp_focus_areas') {
                $value = wp_json_encode(hp_cms_textarea_lines($value), JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
            } else {
                $value = $type === 'textarea' ? sanitize_textarea_field($value) : sanitize_text_field($value);
            }
            update_post_meta($post_id, $key, $value);
        }
    }

    if ($post_type === 'page') {
        if (!isset($_POST['hp_cms_page_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['hp_cms_page_nonce'])), 'hp_cms_save_page')) {
            return;
        }
        $values = is_array($_POST['hp_page_meta'] ?? null) ? wp_unslash($_POST['hp_page_meta']) : [];
        update_post_meta($post_id, '_hp_seo_title', sanitize_text_field((string) ($values['_hp_seo_title'] ?? '')));
        update_post_meta($post_id, '_hp_seo_description', sanitize_textarea_field((string) ($values['_hp_seo_description'] ?? '')));
        update_post_meta($post_id, '_hp_social_image', sanitize_text_field((string) ($values['_hp_social_image'] ?? '')));
        update_post_meta($post_id, '_hp_noindex', isset($values['_hp_noindex']) ? '1' : '0');
        foreach (['_hp_hero_eyebrow', '_hp_hero_title', '_hp_hero_description', '_hp_hero_image', '_hp_hero_primary_label', '_hp_hero_primary_url', '_hp_hero_secondary_label', '_hp_hero_secondary_url'] as $key) {
            $raw = (string) ($values[$key] ?? '');
            update_post_meta($post_id, $key, $key === '_hp_hero_description' ? sanitize_textarea_field($raw) : sanitize_text_field($raw));
        }
    }

    update_option('hp_cms_updated_at', current_time('mysql'), false);
    update_option('hp_cms_version', (string) (((int) get_option('hp_cms_version', 1)) + 1), false);
    hp_cms_notify_frontend(hp_cms_frontend_path_for_post($post_id));
}

function hp_cms_textarea_lines(string $value): array
{
    $lines = preg_split('/\r\n|\r|\n/', $value) ?: [];
    return array_values(array_filter(array_map('trim', $lines), static fn(string $line): bool => $line !== ''));
}

function hp_cms_page_sections(int $post_id): array
{
    $raw = (string) get_post_meta($post_id, '_hp_page_sections', true);
    $decoded = json_decode($raw, true);
    return is_array($decoded) ? $decoded : [];
}

function hp_cms_frontend_path_for_post(int $post_id): string
{
    $post = get_post($post_id);
    if (!$post instanceof WP_Post) {
        return '/';
    }
    $prefixes = [
        'hp_department' => '/chuyen-khoa/',
        'hp_service' => '/dich-vu/',
        'hp_doctor' => '/bac-si/',
        'post' => '/kien-thuc/',
    ];
    if ($post->post_type === 'page') {
        return $post->post_name === 'trang-chu' ? '/' : '/' . $post->post_name;
    }
    return isset($prefixes[$post->post_type]) ? $prefixes[$post->post_type] . $post->post_name : '/';
}

function hp_cms_notify_frontend(string $path = '/'): void
{
    if (defined('WP_CLI') && WP_CLI) {
        return;
    }
    $frontend = hp_core_frontend_url();
    $secret = getenv('HP_REVALIDATE_SECRET');
    if (!is_string($secret) || $secret === '') {
        $secret = (string) get_option('hp_revalidate_secret', 'hong-phuc-local-revalidate');
    }
    if ($frontend === '' || $secret === '') {
        return;
    }
    wp_remote_post($frontend . '/api/revalidate', [
        'timeout' => 2,
        'blocking' => false,
        'headers' => [
            'Content-Type' => 'application/json',
            'X-HP-Revalidate-Secret' => $secret,
        ],
        'body' => wp_json_encode(['path' => $path]),
    ]);
}
