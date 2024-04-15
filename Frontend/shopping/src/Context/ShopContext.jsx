/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

// Shop Context
export const ShopContext = createContext(null);

// Empty Cart(Key:ProductId,Value:Quantity)
const getEmptyCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

console.log(getEmptyCart, "Default Cart Value Shown")


// Shop Context Provider
const ShopContextProvider = (props) => {

    // Create UseState: Cart Functionality
    const [cartItems, setCartItems] = useState(getEmptyCart())

    console.log(cartItems, "Cart Items Data")

    // Add to Cart Functionality
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems, "Add to cart")
    }
    console.log(addToCart, "Add to Cart Value")

    // Remove the Cart Functionality
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    console.log(removeFromCart, "Remove From Cart Value")

    // Total Cart Amount Functionality
    // const totalAmountCart = () => {
    //     let amount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_product.find((product) => {
    //                 product.id === Number(item)
    //                 amount += itemInfo.new_price * cartItems[item]
    //             })
    //         }
            
    //     }
    //     return amount;
        
    // }

    const totalAmountCart = () => {
        let amount = 0;
        Object.keys(cartItems).forEach((item) => {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    amount += itemInfo.new_price * cartItems[item];
                }
            }
        });
        return amount;
    }

    console.log(totalAmountCart, "Total Amount Cart Value")

    // Cart Count shown in Navbar
    const cartCountValue = ()=>{
        let totalCartValue = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalCartValue+=cartItems[item]
            }
        }
        return totalCartValue
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, totalAmountCart, cartCountValue};

    console.log(contextValue, "All Products Data")

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;