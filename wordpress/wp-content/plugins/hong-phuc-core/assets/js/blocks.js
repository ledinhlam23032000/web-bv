(function (wp) {
  const { registerBlockType } = wp.blocks;
  const { InspectorControls, useBlockProps } = wp.blockEditor;
  const { PanelBody, TextControl, TextareaControl } = wp.components;
  const { createElement: h, Fragment } = wp.element;
  const { __ } = wp.i18n;

  function field(label, value, onChange, multiline) {
    const Component = multiline ? TextareaControl : TextControl;
    return h(Component, { label, value, onChange });
  }

  function preview(title, description) {
    return h(
      "div",
      useBlockProps({ className: "hp-editor-card" }),
      h("strong", null, title),
      h("span", null, description),
    );
  }

  registerBlockType("hong-phuc/hero", {
    title: __("Hồng Phúc - Hero", "hong-phuc-core"),
    icon: "cover-image",
    category: "hong-phuc",
    attributes: {
      eyebrow: { type: "string", default: "Bệnh viện đa khoa quy mô lớn tại Hải Phòng" },
      title: { type: "string", default: "Bệnh viện Đa khoa Hồng Phúc" },
      description: {
        type: "string",
        default:
          "Chăm sóc toàn diện với nhiều chuyên khoa cùng phối hợp, từ thăm khám ban đầu đến điều trị và theo dõi lâu dài.",
      },
      primaryLabel: { type: "string", default: "Đặt lịch khám" },
      primaryUrl: { type: "string", default: "/dat-lich" },
      secondaryLabel: { type: "string", default: "Tìm theo triệu chứng" },
      secondaryUrl: { type: "string", default: "/tim-theo-trieu-chung" },
      image: { type: "string", default: "/images/hospital-lobby-premium.webp" },
    },
    edit: function (props) {
      const a = props.attributes;
      const set = (key) => (value) => props.setAttributes({ [key]: value });

      return h(
        Fragment,
        null,
        h(
          InspectorControls,
          null,
          h(
            PanelBody,
            { title: "Nội dung Hero", initialOpen: true },
            field("Nhãn nhỏ", a.eyebrow, set("eyebrow")),
            field("Tiêu đề", a.title, set("title")),
            field("Mô tả", a.description, set("description"), true),
            field("Nút chính", a.primaryLabel, set("primaryLabel")),
            field("Link nút chính", a.primaryUrl, set("primaryUrl")),
            field("Nút phụ", a.secondaryLabel, set("secondaryLabel")),
            field("Link nút phụ", a.secondaryUrl, set("secondaryUrl")),
            field("Ảnh nền", a.image, set("image")),
          ),
        ),
        preview("Hero Hồng Phúc", a.title),
      );
    },
    save: function () {
      return null;
    },
  });

  [
    ["quick-actions", "Hồng Phúc - Hành động nhanh", "Gọi tổng đài, đặt lịch, tìm bác sĩ, gói khám."],
    ["trust-section", "Hồng Phúc - Lý do tin chọn", "Khối ảnh lớn và bốn lý do chọn bệnh viện."],
    ["care-spaces", "Hồng Phúc - Không gian chăm sóc", "Mosaic ảnh sảnh, bác sĩ, chẩn đoán hình ảnh và nhi khoa."],
    ["quality-band", "Hồng Phúc - Năng lực chất lượng", "Band nền xanh với các tiêu chí chất lượng."],
    ["department-overview", "Hồng Phúc - Tổng quan 17 khoa", "Ảnh bệnh viện và các khoa nổi bật."],
    ["department-showcase", "Hồng Phúc - Danh sách khoa", "Hiển thị các khoa đã nhập trong WordPress."],
    ["service-showcase", "Hồng Phúc - Dịch vụ nổi bật", "Hiển thị dịch vụ y tế nổi bật."],
    ["packages-symptoms", "Hồng Phúc - Gói khám và triệu chứng", "Gói khám sức khỏe kết hợp gợi ý theo triệu chứng."],
    ["doctor-showcase", "Hồng Phúc - Bác sĩ", "Hiển thị nhóm bác sĩ nổi bật."],
    ["article-showcase", "Hồng Phúc - Bài viết", "Hiển thị các bài viết sức khỏe mới nhất."],
  ].forEach(function (item) {
    registerBlockType("hong-phuc/" + item[0], {
      title: item[1],
      icon: "layout",
      category: "hong-phuc",
      edit: function () {
        return preview(item[1], item[2]);
      },
      save: function () {
        return null;
      },
    });
  });

  registerBlockType("hong-phuc/cta", {
    title: __("Hồng Phúc - CTA", "hong-phuc-core"),
    icon: "megaphone",
    category: "hong-phuc",
    attributes: {
      title: { type: "string", default: "Chưa biết nên chọn chuyên khoa, bác sĩ hay gói khám?" },
      description: {
        type: "string",
        default: "Hãy để lại thông tin, bộ phận tiếp nhận sẽ hỗ trợ chọn điểm bắt đầu phù hợp.",
      },
      buttonLabel: { type: "string", default: "Đặt lịch khám" },
      buttonUrl: { type: "string", default: "/dat-lich" },
    },
    edit: function (props) {
      const a = props.attributes;
      const set = (key) => (value) => props.setAttributes({ [key]: value });

      return h(
        Fragment,
        null,
        h(
          InspectorControls,
          null,
          h(
            PanelBody,
            { title: "Nội dung CTA", initialOpen: true },
            field("Tiêu đề", a.title, set("title")),
            field("Mô tả", a.description, set("description"), true),
            field("Nhãn nút", a.buttonLabel, set("buttonLabel")),
            field("Link nút", a.buttonUrl, set("buttonUrl")),
          ),
        ),
        preview("CTA Hồng Phúc", a.title),
      );
    },
    save: function () {
      return null;
    },
  });
})(window.wp);
