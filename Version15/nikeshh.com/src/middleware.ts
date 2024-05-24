import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";
 
const isProtectedRoute = createRouteMatcher([
  '/store/cart'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  const url = req.nextUrl;
  if (url.pathname === '/home') {
    return NextResponse.redirect(new URL(`/`, req.url))
  }
});
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};