import MyIpHeader from "./header";
import GetIpDetail from "./ip"
import MyIpMain from "./main";
import style from "./style.module.css";

export default async function Home() {
  const { ip, country, city, lat, lon, timezone, isp,os } = await GetIpDetail()




  return <div className={style.main}>
    <MyIpHeader ip={ip} country={country} city={city} />
    <MyIpMain ip={ip} city={city} country={country} isp={isp} lat={lat} lon={lon} timezone={timezone} os={os||""}/>
  </div>
}