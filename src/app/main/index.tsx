import { GetUserAgent } from "../ip";
import CardDetail from "./card";
import style from "./style.module.css";
export default async function MyIpMain({ ip, country, city, lat, lon, timezone, isp, os }
    : { ip: string, country: string, city: string, lat: number, lon: number, timezone: any, isp: string, os: string }) {

    const userAgent = await GetUserAgent();
    
    const data1: { title: string, ico: any, text: string }[] = [
        { title: "isp", ico: "", text: isp },
        { title: "timezone", ico: "", text: timezone },
        { title: "os", ico: "", text: (userAgent.os.name||"") + "  "+(userAgent.os.version||"")},
        { title: "browser", ico: "", text: userAgent.browser.name },
        { title: "cpu", ico: "", text: userAgent.cpu.architecture||"unknown" },
        { title: "engine", ico: "", text: userAgent.engine.name||"unknown" },
        { title: "engine version", ico: "", text: userAgent.engine.version||"unknown" },
        { title: "isBot", ico: "", text: `${userAgent.isBot}` },
    ]
    const data2: { title: string, ico: any, text: string }[] = [
        { title: "latitude", ico: "", text: lat.toString() },
        { title: "longitude", ico: "", text: lon.toString() },
        { title: "ip", ico: "", text: ip },
        { title: "country", ico: "", text: country },
        { title: "city", ico: "", text: city },
        
        { title: "device model", ico: "", text: userAgent.device.model||"" },
        { title: "device vendor", ico: "", text: userAgent.device.vendor||"" },
        { title: "device type", ico: "", text: userAgent.device.type||"" },
    ]
    const displayData1 = data1.map(d => <CardDetail key={d.title} title={d.title} ico={d.ico} text={d.text} />)
    const displayData2 = data2.map(d => <CardDetail key={d.title} title={d.title} ico={d.ico} text={d.text} />)

    return <div className={style.main}>
        <div>
            {displayData1}
        </div>
        <div>
            {displayData2}
        </div>
    </div>

}