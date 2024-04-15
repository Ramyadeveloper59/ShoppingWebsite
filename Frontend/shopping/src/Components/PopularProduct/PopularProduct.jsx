import './PopularProduct.css'
import dataProduct from '../Assets/data'
import Item from '../Item/Item'

const PopularProduct = () => {
  return (
    <div className='popular'>
      <h1>WELL LIKED BY WOMEN</h1>
      <hr />
      <div className='popular-women-item text-justify text-[15px]'>
        {dataProduct.map((item, i) => {
          return <Item 
          key={i} 
          id={item.id} 
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default PopularProduct
