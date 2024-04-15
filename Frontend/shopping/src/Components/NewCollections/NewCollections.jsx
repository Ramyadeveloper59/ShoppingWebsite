import "../NewCollections/NewCollections.css"
import new_collection_product from '../Assets/new_collections'
import Item from "../Item/Item"


const NewCollections = () => {
    return (
        <div>
            <div className="new-collections-product">
                <h1>ℕ𝓔𝔀 ℂ𝕆𝕃𝕃𝔼ℂ𝕋𝕀𝕆ℕ</h1>
                <hr />
                <div className="collections">
                    {new_collection_product.map((item, i) => {
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                })}
                </div>
            </div>
        </div>
    )
}

export default NewCollections
