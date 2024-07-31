"use server";
import { headers } from "next/headers";
export default async function GetIpDetail() {
    const headersList = headers();
    let ip = headersList.get("x-forwarded-for")?.split(":").pop();
    // console.log(`ip is ${ip}`);
    const os = `${headersList.get("os-name")} ${headersList.get("os-version")}`;

    // headersList.forEach((val, key) => {
    //     console.log(`${key}:${val}`);
    // })
    // ip = "37.27.30.5";
    // ip = "195.136.22.33"
    // ip = "46.17.46.213";
    const ip_api = await fetch(`http://ip-api.com/json/${ip}`);
    const { country, city, lat, lon, timezone, isp } = JSON.parse(await ip_api.text());

    return { ip, country, city, lat, lon, timezone, isp, os };
}
export async function GetUserAgent() {
    const headersList = headers();
    const userAgent = {
        os: {
            name: headersList.get("os-name"),
            version: headersList.get("os-version")
        }, browser: {
            name: headersList.get("browser-name"),
            version: headersList.get("browser-version")
        },
        cpu: {
            architecture: headersList.get("cpu-architecture")
        },
        device: {
            vendor: headersList.get("device-vendor"),
            model: headersList.get("device-model"),
            type: headersList.get("device-type"),
        },
        engine: {
            name: headersList.get("engine-name"),
            version: headersList.get("engine-version"),
        },
        isBot: headersList.get("isBot") == "true"
    };

    return userAgent;
}