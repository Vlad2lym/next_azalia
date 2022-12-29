import Image from "next/image";
import { FC } from "react";
import styles from '../styles/Advertising.module.scss'

interface AdvertisingProps {

}

const Advertising:FC<AdvertisingProps> = () => {
    return (
        <div className={styles.area}>
            <h1 className={styles.title}>Всё для комфортной работы</h1>
            <Image src={'/arrow.png'} alt='arrow' width={40} height={16}/>
            <div className={styles.banner1}>
                <Image src='/banner1.png' alt='banner' width={200} height={140}/>
                <div className={styles.banner1_info}>
                    <div className={styles.discount}>
                        <p>-25%</p>
                    </div>
                    <h2>на товары <br/>для кабинета</h2>
                </div>
            </div>
            <div className={styles.banner2}>
                <div>
                    <div className={styles.discount}>
                        <p>-10%</p>
                    </div>
                    <h2>на периферию <br/>для компьютера</h2>
                </div>
                <Image src='/banner2.png' alt='banner' width={200} height={140}/>
            </div>
        </div>
    )
}

export default Advertising