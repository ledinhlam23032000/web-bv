import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

const DEFAULT_LOCAL_SECRET = "hong-phuc-local-revalidate";

export async function POST(request: Request) {
  const expectedSecret = process.env.HP_REVALIDATE_SECRET ?? DEFAULT_LOCAL_SECRET;
  const suppliedSecret = request.headers.get("x-hp-revalidate-secret") ?? "";

  if (!expectedSecret || suppliedSecret !== expectedSecret) {
    return NextResponse.json({ ok: false, message: "Sai mã xác thực." }, { status: 401 });
  }

  let path = "/";
  try {
    const body = (await request.json()) as { path?: unknown };
    if (typeof body.path === "string" && body.path.startsWith("/")) {
      path = body.path;
    }
  } catch {
    // A body is optional; clearing the whole site cache remains safe.
  }

  revalidateTag("hong-phuc-cms", "max");
  revalidateTag("hong-phuc-articles", "max");
  revalidatePath(path, path === "/" ? "layout" : "page");

  return NextResponse.json({ ok: true, path, revalidatedAt: new Date().toISOString() });
}
