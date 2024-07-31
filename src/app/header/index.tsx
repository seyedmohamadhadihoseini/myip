
import { findFlagUrlByCountryName } from "country-flags-svg";
import Image from "next/image";
import style from "./style.module.css";


export default function MyIpHeader({ ip, country, city }: { ip: string, country: string, city: string }) {

    const countryFlagLink = findFlagUrlByCountryName(country);
    return <div className={style.main}>
        <div >
            <Image src={countryFlagLink} width={200} height={100} alt={country} />
            <h1 style={{marginTop:"10px"}}>IP: <strong>{ip}</strong></h1>
            
        </div>
        <div>
            <span>{city}</span>/ <span>{country}</span>
        </div>
    </div>
}