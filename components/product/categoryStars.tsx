import Image from "next/image";
import { FC, useMemo } from "react";
import styles from '../../styles/categoryStars.module.scss'
import { IProduct } from "../../types/types";

interface CategoryStarsProps {
    product: IProduct
}

const CategoryStars:FC<CategoryStarsProps> = ({product}) => {
    const stars = useMemo(() => {
        return '1'.repeat(Math.round(product.rating.rate)).padEnd(5, '0').split('').map(item => {
            return +item ? '/star.png' : '/star-empty.png'
        })
    }, [])

    return (
        <>
            <div className={styles.categoryStars}>
                <p>{product.category}</p>
                <div className={styles.stars}>
                    {stars.map((star, i) => {
                        return <Image src={star} alt='star' width={14} height={14} key={i}/>
                    })}
                    <p> {product.rating.count} отзывов</p>
                </div>
            </div>
        </>
    )
}

export default CategoryStars