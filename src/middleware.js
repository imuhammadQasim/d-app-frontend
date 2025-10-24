import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ignoredExtensions = new Set([
  "svg",
  "png",
  "jpg",
  "jpeg",
  "gif",
  "css",
  "js",
]);

export async function middleware(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get(process.env.NEXT_PUBLIC_CRM_TOKEN_COOKIE);
  const { pathname } = request.nextUrl;

  const fileExtension = pathname.split(".").pop().toLowerCase();

  if (ignoredExtensions.has(fileExtension)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!login|sign-up|forgot-password|verify-email|kyc-verification|kyc-verification-pending_next/static|_next/image|favicon.ico).*)",
  ],
};
