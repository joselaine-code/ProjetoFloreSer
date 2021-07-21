import styles from '../../styles/components/btns/Btn.module.css'
import Link from "next/link"

function Btn ({color, text, target, fontColor, icon}){

    if (target.includes('https')){
        return(
            <div className={styles.btn}>
                    <a target="_blank" href={target}  style= {{backgroundColor: color, color: fontColor}}>{text} <i className={icon}></i></a>
            </div>
        )
    } else{
        return(
            <div className={styles.btn}>
                <Link href={target} >
                    <a style= {{backgroundColor: color, color: fontColor}}>{text} <i className={icon}></i></a>
                </Link>
            </div>
        )
    }
}

export default Btn