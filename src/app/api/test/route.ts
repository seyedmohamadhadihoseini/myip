"use server";

import { NextRequest, userAgent } from "next/server";

export async function GET(request: NextRequest) {
    const url = request.nextUrl;
    const MyUserAgent = userAgent(request);
    return Response.json(MyUserAgent);
}