import { FC } from "react";
import styles from '../../styles/basketBtn.module.scss'

interface BasketBtnProps {
    basket: boolean,
    setBasket: Function,
    decrement: Function,
    increment: Function,
    counter: number
}

const BasketBtn:FC<BasketBtnProps> = ({basket, setBasket, decrement, increment, counter}) => {
    return(
        <>
            {basket ? 
                <div className={styles.basket} onClick={() => setBasket(false)}>
                    <p>В корзине</p>
                </div>
            :
                <div className={styles.addBasket}>
                    <div className={styles.addBasketBtn} onClick={() => setBasket(true)}>
                        <p>В корзину</p>
                    </div>
                    <div className={styles.addBasketNumberProd}>
                        <p className={styles.minus} onClick={() => decrement()}>—</p>
                        <p>{counter}</p>
                        <p className={styles.plus} onClick={() => increment()}>+</p>
                    </div>
                </div>
            }
        </>
    )
}

export default BasketBtn