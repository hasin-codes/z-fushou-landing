import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware(async () => {})

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpg|jpeg|png|gif|svg|ttf|woff2?|ico)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
}
