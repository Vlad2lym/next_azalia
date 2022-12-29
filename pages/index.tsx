import { NextPage } from 'next'
import Advertising from '../components/advertising'
import Product from '../components/product/product'
import styles from '../styles/Home.module.scss'
import { IProduct } from '../types/types'

interface HomeProps {
  store: IProduct[]
}

const Home:NextPage<HomeProps> = ({store}) => {
  return (
    <div className={styles.wrapper}>
      <Advertising/>
      {store.map(product => {
        return <Product key={product.id} product={product}/>
      })}
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('https://fakestoreapi.com/products/category/electronics')
  const store = await response.json()

  return {
    store
  }
}

export default Home;