
import style from "./style.module.css";

export default function CardDetail({ title, ico, text }: { title: string, ico: any, text: string }) {


    return <div className={style.main}>
        <div className={style.inner}>
            <h2>{title}:</h2>
            <div>
                {ico}
                <span>{text}</span>
            </div>
        </div>
    </div>
}