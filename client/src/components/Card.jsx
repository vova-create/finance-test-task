import style from './Card.module.css'
import {useState} from "react";

function Card(props) {
    const [change, setChange] = useState(true)

    return (
        <div className={style.cardWrapper}>
           <div className={style.card}>
               <div className={style.cardName}>
                   <span onClick={() => setChange(!change)}>{ change ? props.ticker : props.exchange}</span>
               </div>
               <div className={style.priceChange}>
                   <span>{props.price}</span>
                   <span>{props.change}</span>
                   <span className={props.changePercentage > 0  ? style.percentageUp : style.percentageDown}>{props.changePercentage}%</span>
               </div>
           </div>
        </div>
    )
}


export default Card