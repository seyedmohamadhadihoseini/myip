import { NextRequest, NextResponse, userAgent } from "next/server";

export default function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const MyUserAgent = userAgent(request);
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('browser-name', MyUserAgent.browser.name||"");
    requestHeaders.set('browser-version', MyUserAgent.browser.version||"");
    requestHeaders.set('cpu-architecture', MyUserAgent.cpu.architecture||"");
    requestHeaders.set('device-vendor', MyUserAgent.device.vendor||"");
    requestHeaders.set('device-model', MyUserAgent.device.model||"");
    requestHeaders.set('device-type', MyUserAgent.device.type||"");
    requestHeaders.set('engine-name', MyUserAgent.engine.name||"");
    requestHeaders.set('engine-version', MyUserAgent.engine.version||"");
    requestHeaders.set('isBot', `${MyUserAgent.isBot}`);
    requestHeaders.set('os-name', `${MyUserAgent.os.name}`);
    requestHeaders.set('os-version', `${MyUserAgent.os.version}`);

    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
    //   console.log(MyUserAgent);
}