import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/chuyen-khoa/tim-mach", destination: "/chuyen-khoa/noi#noi-tim-mach", permanent: true },
      { source: "/chuyen-khoa/ung-buou", destination: "/chuyen-khoa/noi#noi-ung-buou", permanent: true },
      { source: "/chuyen-khoa/tieu-hoa-gan-mat", destination: "/chuyen-khoa/noi#noi-tieu-hoa-gan-mat", permanent: true },
      { source: "/chuyen-khoa/noi-tong-quat", destination: "/chuyen-khoa/noi", permanent: true },
      { source: "/chuyen-khoa/co-xuong-khop", destination: "/chuyen-khoa/noi#noi-co-xuong-khop", permanent: true },
      { source: "/chuyen-khoa/san-phu-khoa", destination: "/chuyen-khoa/san", permanent: true },
      { source: "/chuyen-khoa/nhi-khoa", destination: "/chuyen-khoa/nhi", permanent: true },
      { source: "/chuyen-khoa/cap-cuu-hoi-suc", destination: "/chuyen-khoa/hoi-suc-cap-cuu", permanent: true },
      { source: "/chuyen-khoa/phau-thuat-tao-hinh", destination: "/chuyen-khoa/tao-hinh-tham-my", permanent: true },
    ];
  },
};

export default nextConfig;
