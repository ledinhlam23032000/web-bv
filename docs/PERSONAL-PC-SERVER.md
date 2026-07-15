# Chay web tren may tinh ca nhan lam may chu tam thoi

Tai lieu nay dung cho nhu cau:

- may tinh ca nhan cua ban la may chu tam thoi
- chap nhan may tat thi web dung
- muon gan ten mien that de nguoi khac mo vao duoc
- giao dien public la ban Next.js dep o cong `9999`
- WordPress chi dung de quan tri noi dung

## 1. Khoi dong may chu tam thoi

Cach nhanh nhat tren Windows:

- mo file [Chay-Hong-Phuc-Internet.bat](/C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Hong-Phuc-Internet.bat)

Script nay se:

- bat WordPress backend local
- build lai frontend production
- khoi dong Next.js o cong `9999` va bind ra mang noi bo
- hien cho ban link local va link LAN

Khi muon dung:

- mo file [Dung-Hong-Phuc-Internet.bat](/C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Dung-Hong-Phuc-Internet.bat)

## 1.1 Tao link xem thu mien phi tren internet

Neu ban muon gui link de nguoi khac mo xem ngay, cach nhanh nhat la:

- mo file [Chay-Link-Xem-Thu-Mien-Phi.bat](/C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Link-Xem-Thu-Mien-Phi.bat)

Script nay se:

- dam bao frontend local dang chay o cong `9999`
- chay Cloudflare Quick Tunnel
- hien URL public ngay trong cua so script de ban copy gui cho nguoi khac

Khi khong can nua:

- mo file [Dung-Link-Xem-Thu-Mien-Phi.bat](/C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Dung-Link-Xem-Thu-Mien-Phi.bat)

Luu y:

- day la link tam thoi, may tat la link dung
- Cloudflare la trai nghiem dep nhat vi mo link la vao web ngay
- khong dong cua so script neu ban muon link tiep tuc hoat dong

## 2. Ban dang public cai gi

Public cho nguoi benh:

- `http://localhost:9999/`

Quan tri noi dung:

- `http://localhost:10088/wp-admin/`

He thong hien tai da duoc chinh de:

- nguoi dung public chi thay frontend dep
- WordPress la backend/CMS
- neu ai mo truc tiep cong WordPress public, no se bi chuyen ve frontend dep

## 3. Co 2 cach dua len internet

### Cach A - De nhat: Cloudflare Tunnel

Phu hop khi:

- khong muon mo port router
- mang nha / mang cong ty thay doi IP
- muon len tam nhanh va on dinh hon

Can lam:

1. Mua ten mien.
2. Dua DNS sang Cloudflare.
3. Cai `cloudflared` tren may tinh nay.
4. Tao tunnel tro vao `http://localhost:9999`.
5. Tao DNS record:
   - `@` hoac `www` tro vao tunnel

Loi ich:

- khong can port forwarding
- khong can IP tinh
- SSL de lam hon

### Cach B - Tu mo mang nha / mang cong ty

Phu hop khi:

- ban kiem soat duoc modem/router
- chap nhan thao tac ky thuat hon

Can lam:

1. Xac dinh IP LAN cua may tinh dang chay web.
2. Mo port tren Windows Firewall cho `9999`.
3. Port forward tren router:
   - `80` hoac `443` vao may nay
   - neu chua co reverse proxy, tam thoi co the forward `9999`
4. Tao DNS record ten mien tro vao IP public cua mang.
5. Neu muon domain dep khong can `:9999`, dung them reverse proxy nhu Caddy hoac Nginx.

## 4. Cach minh khuyen dung tam thoi

Neu muc tieu la:

- dua cho 1 nhom nho benh vien xem
- khong muon vat va router
- muon nhanh

Thi nen di theo:

1. chay [Chay-Hong-Phuc-Internet.bat](/C:/Users/PC/Documents/Codex/2026-07-11/b-nh-vi-n-a-khoa/work/hong-phuc-site/Chay-Hong-Phuc-Internet.bat)
2. dung Cloudflare Tunnel
3. tro domain demo, vi du:
   - `demo.tenmiencuaban.vn`

## 5. Neu muon vao bang domain chinh

Kien truc nen dung:

- domain chinh: `https://tenmiencuaban.vn` -> frontend Next.js
- quan tri WordPress:
  - local only, hoac
  - `https://cms.tenmiencuaban.vn/wp-admin/`

Khong nen cho nguoi dung public di thang vao WordPress theme.

## 6. Dieu kien de web chay on tren may ca nhan

Ban can giu:

- may tinh luon mo
- internet on dinh
- khong sleep
- khong tat Docker neu dang can bai viet WordPress
- khong tat tien trinh Node o cong `9999`

Nen chinh trong Windows:

- tat che do sleep
- tat tu dong ngu man hinh neu can
- uu tien ket noi day mang neu co

## 7. Kiem tra nhanh sau khi public

Kiem tra cac muc sau:

- trang chu vao duoc
- trang `kien-thuc` vao duoc
- CSS khong bi mat
- logo, anh va font load day du
- `sitemap.xml` vao duoc
- form dat lich hien dung giao dien

## 8. Gioi han hien tai

Phuong an may tinh ca nhan lam may chu tam thoi co nhung gioi han:

- may tat la web tat
- mat dien la web dung
- doi IP mang co the lam domain loi neu ban khong dung tunnel
- khong phai phuong an ben vung cho public lau dai

## 9. Buoc tiep theo de len that

Khi ban san sang, minh khuyen:

1. Dung domain demo truoc.
2. Chay tunnel hoac port-forward.
3. Cho nhom noi bo xem 3-4 ngay.
4. Chot noi dung va anh that.
5. Moi dua len domain chinh.
