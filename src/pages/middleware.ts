import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get("@myapp:access_token");

  if (!authCookie) {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
