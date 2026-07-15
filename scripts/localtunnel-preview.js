const fs = require("node:fs");
const path = require("node:path");
const localtunnel = require("localtunnel");

const repoRoot = path.resolve(__dirname, "..");
const logsDir = path.join(repoRoot, "logs");
const infoPath = path.join(logsDir, "localtunnel-preview.json");
const pidPath = path.join(logsDir, "localtunnel-preview.pid");

fs.mkdirSync(logsDir, { recursive: true });
fs.writeFileSync(pidPath, String(process.pid));

let tunnel;

async function main() {
  tunnel = await localtunnel({
    port: 9999,
    local_host: "127.0.0.1",
  });

  fs.writeFileSync(
    infoPath,
    JSON.stringify(
      {
        pid: process.pid,
        url: tunnel.url,
        createdAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  );

  process.stdout.write(`${tunnel.url}\n`);
}

async function shutdown() {
  try {
    if (tunnel) {
      await tunnel.close();
    }
  } catch {
    // Ignore tunnel close errors during shutdown.
  }

  try {
    fs.unlinkSync(pidPath);
  } catch {}

  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exit(1);
});
