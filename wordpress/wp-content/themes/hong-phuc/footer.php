    </main>

    <footer class="hp-footer">
        <div class="hp-container hp-footer__grid">
            <div>
                <div class="hp-footer__brand">
                    <span class="hp-logo__mark">H</span>
                    <span>
                        <em>Bệnh viện đa khoa</em>
                        <strong><?php echo esc_html(hp_theme_option('hp_site_short_name', 'Hồng Phúc')); ?></strong>
                    </span>
                </div>
                <p>Bệnh viện đa khoa tại Hải Phòng với 17 khoa chuyên môn, tăng cường hợp tác trong khu vực và đồng hành cùng người bệnh trong suốt quá trình chăm sóc.</p>
                <p><?php echo esc_html(hp_theme_option('hp_site_address', 'Số 5 Hồ Xuân Hương, Hồng Bàng, Hải Phòng')); ?></p>
                <p><?php echo esc_html(hp_theme_option('hp_site_phone', '0987 126 688')); ?> · <?php echo esc_html(hp_theme_option('hp_site_email', 'chamsoc@hongphuc.vn')); ?></p>
            </div>
            <div>
                <h2>Hệ thống y tế</h2>
                <a href="<?php echo esc_url(home_url('/chuyen-khoa')); ?>">Chuyên khoa</a>
                <a href="<?php echo esc_url(home_url('/bac-si')); ?>">Đội ngũ bác sĩ</a>
                <a href="<?php echo esc_url(home_url('/dich-vu')); ?>">Dịch vụ y tế</a>
                <a href="<?php echo esc_url(home_url('/goi-kham')); ?>">Gói khám</a>
            </div>
            <div>
                <h2>Hướng dẫn</h2>
                <a href="<?php echo esc_url(home_url('/dat-lich')); ?>">Đặt lịch khám</a>
                <a href="<?php echo esc_url(home_url('/kien-thuc')); ?>">Kiến thức sức khỏe</a>
                <a href="<?php echo esc_url(home_url('/lien-he')); ?>">Liên hệ</a>
            </div>
            <div class="hp-footer__support">
                <h2>Hỗ trợ nhanh</h2>
                <p>Đặt lịch, hỏi đường đi hoặc nhận hướng dẫn trước khi khám.</p>
                <a class="hp-button hp-button--gold" href="<?php echo esc_url(home_url('/dat-lich')); ?>">Đặt lịch khám</a>
            </div>
        </div>
        <div class="hp-footer__bottom">
            © <?php echo esc_html(date('Y')); ?> Bệnh viện Đa khoa Hồng Phúc. Nội dung sức khỏe chỉ có giá trị tham khảo và không thay thế chẩn đoán của bác sĩ.
        </div>
    </footer>

    <button class="hp-floating-booking" type="button" data-hp-booking-open aria-label="Mở đặt lịch nhanh">
        <span>+</span>
        <strong>Đặt lịch</strong>
    </button>

    <div class="hp-booking-modal" data-hp-booking-modal hidden>
        <button class="hp-booking-modal__shade" type="button" data-hp-booking-close aria-label="Đóng đặt lịch nhanh"></button>
        <section class="hp-booking-panel" role="dialog" aria-modal="true" aria-labelledby="hp-booking-title">
            <div class="hp-booking-panel__head">
                <button type="button" data-hp-booking-close aria-label="Đóng">×</button>
                <p>Đặt lịch nhanh</p>
                <h2 id="hp-booking-title">Để lại thông tin, bệnh viện sẽ gọi lại xác nhận.</h2>
            </div>
            <form class="hp-booking-form">
                <label>Họ và tên <input name="name" placeholder="Nguyễn Văn A"></label>
                <label>Số điện thoại <input name="phone" inputmode="tel" placeholder="09..."></label>
                <label>Nhu cầu khám
                    <select name="need">
                        <?php foreach (hp_theme_department_links() as $department) : ?>
                            <option><?php echo esc_html(get_the_title($department)); ?></option>
                        <?php endforeach; ?>
                        <option>Chưa rõ, cần được tư vấn</option>
                    </select>
                </label>
                <label>Thời gian ưu tiên
                    <select name="time">
                        <option>Sáng hôm nay</option>
                        <option>Chiều hôm nay</option>
                        <option>Ngày mai</option>
                        <option>Cuối tuần</option>
                    </select>
                </label>
                <button class="hp-button hp-button--primary" type="submit">Gửi yêu cầu đặt lịch</button>
                <p class="hp-booking-form__success" hidden>Yêu cầu đã được ghi nhận. Nhân viên bệnh viện sẽ liên hệ lại để xác nhận.</p>
            </form>
        </section>
    </div>
</div>
<?php wp_footer(); ?>
</body>
</html>
