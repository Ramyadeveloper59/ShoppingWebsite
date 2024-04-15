import '../RelatedProducts/RelatedProducts.css'
import related_products from '../Assets/data_related'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div>
      <div className="related-products">
        <h1>𝕽𝖊𝖑𝖆𝖙𝖊𝖉 𝕻𝖗𝖔𝖉𝖚𝖈𝖙𝖘</h1>
        <hr />
        <div className="related-products-item">
            {related_products.map((item,i)=>{return(
                    <Item 
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}/>
            )})}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
