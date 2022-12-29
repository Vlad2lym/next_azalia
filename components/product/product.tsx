import Image from "next/image";
import { FC, useState } from "react";
import { IProduct } from "../../types/types";
import styles from '../../styles/Product.module.scss'
import ImageProduct from "./imageProduct";
import CategoryStars from "./categoryStars";
import BasketBtn from "./basketBtn";

interface ProductProps {
    product: IProduct
}

const Product:FC<ProductProps> = ({product}) => {
    const [counterProducts, setCounterProducts] = useState(1)
    const [basket, setBasket] = useState(false)
    const [favorites, setFavorites] = useState(false)
    
    let favoritesImage = '/favoritesInactive.png'
    if (favorites) {
        favoritesImage = '/favoritesActive.png'
    }

    const addFavorites = () => {
        setFavorites(!favorites)
    }
    const decrement = () => {
        if (counterProducts === 1) {return}
        setCounterProducts(prev => --prev)
    }

    return (
        <div className={styles.product}>
            <ImageProduct product={product}/>
            <CategoryStars product={product}/>
            <h3 className={styles.title}>{product.title}</h3>
            <div className={styles.price}>
                <h2>{Math.round(product.price * 70)} &#8381; </h2><p>/шт.</p>
            </div>
            <div className={styles.basketFavorites}>
                <BasketBtn 
                    basket={basket}
                    counter={counterProducts}
                    decrement={decrement}
                    increment={() => setCounterProducts(prev => ++prev)}
                    setBasket={setBasket}
                />
                <Image src={favoritesImage} alt='favorites' width={40} height={40} onClick={() => addFavorites()}/>
            </div>
        </div>
    )
}

export default Product