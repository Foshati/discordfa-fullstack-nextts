import { betterFetch } from "@better-fetch/fetch";
import { NextResponse, type NextRequest } from "next/server";
import { Session } from "./app/(auth)/_lib/auth";

const authRoutes = ["/sign-in", "/sign-up"];
const passwordRoutes = ["/reset-password", "/forgot-password"];
const adminRoutes = ["/admin"];
const userRoutes = ["/dashboard"];
const publicRoutes = ["/api/uploadthing"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isPasswordRoute = passwordRoutes.includes(pathName);
  const isAdminRoute = adminRoutes.includes(pathName);
  const isUserRoute = userRoutes.includes(pathName);
  const isPublicRoute = publicRoutes.some(route => pathName.startsWith(route));

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: process.env.BETTER_AUTH_URL,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  if (!session) {
    if (isAuthRoute || isPasswordRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (isAuthRoute || isPasswordRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isAdminRoute && session.user.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isUserRoute && session.user.role !== "USER") {
    return NextResponse.redirect(new URL("/", request.url));
  }


  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|.*\\.png$).*)",
    "/api/uploadthing/:path*"
  ],
};