import { chromium } from "playwright";

const wordpressUrl = (process.env.WORDPRESS_API_URL ?? "http://localhost:10088").replace(/\/+$/, "");
const username = process.env.WORDPRESS_QA_USER ?? "admin";
const password = process.env.WORDPRESS_QA_PASSWORD ?? "HongPhuc@2026";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });

try {
  await page.goto(`${wordpressUrl}/wp-login.php`, { waitUntil: "domcontentloaded" });
  await page.locator("#user_login").fill(username);
  await page.locator("#user_pass").fill(password);
  await Promise.all([
    page.waitForURL(/wp-admin/),
    page.locator("#wp-submit").click(),
  ]);

  await page.goto(`${wordpressUrl}/wp-admin/admin.php?page=hong-phuc-cms`, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: "Trung tâm quản trị website Hồng Phúc" }).waitFor();
  await page.getByText("Thông tin chung và SEO mặc định").waitFor();
  await page.screenshot({ path: "docs/screenshots/wordpress-cms-control-pass.png", fullPage: true });

  await page.goto(`${wordpressUrl}/wp-admin/edit.php?post_type=hp_department`, { waitUntil: "networkidle" });
  await page.getByRole("heading", { name: /Các khoa/ }).waitFor();

  process.stdout.write("WordPress CMS QA passed: control center and department manager are available.\n");
} finally {
  await browser.close();
}
