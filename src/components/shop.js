import '../style/base.css'
import { useEffect, useState } from "react";

export default function Shop({cap, setcap, quant, setquan}){
    const [img, setimg] = useState([])
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        function fetchPr(){
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => setimg(data));
        }   
        fetchPr()
    }, [])

    const hanldequan = (imgId, value) => {
        setquan((prev) => ({
            ...prev, 
            [imgId]: Math.max(1, parseInt(value) || 1) 
        }))
    }

    const handleCart = (imgs) => {
        const quantity = quant[imgs.id] || 1
        if(quantity < 1) return;
        setcap(prev => {
            const exist = prev.find(item => item.id === imgs.id)
            if(exist){
                return prev.map(item => (
                    (item.id === imgs.id) ? {...item, quantity: item.quantity + quantity - 1} : item 
                ))
            }
            else{
                return [...prev, {
                    ...imgs,
                    quantity: quantity
                }]
            }
        })
        setquan(p => ({...p, [imgs.id]: 1}))
    }

    return(
        <div className="shop-container">
            <button 
                className="cart-toggle-btn"
                onClick={() => setShowCart(!showCart)}
            >
                {showCart ? 'Show Products' : `Cart Items: (${cap.length})`}
            </button>
            
            {/* Uncomment and use when you have Cart component toggle */}
            {/* {showCart ? (
                <Cart cap={cap} />
            ) : ( */}
                <div className="products-grid">
                    {img && img.map((i) => (
                        <div key={i.id} className="product-card">
                            <h1>{i.title}</h1>
                            <img src={i.image} alt={i.title} />
                            <p>{i.description}</p>
                            <div className="quantity-control">
                                <span>Quantity:</span>
                                <input 
                                    type="number" 
                                    value={quant[i.id] || 1} 
                                    onChange={(e) => hanldequan(i.id, e.target.value)}
                                    min="1"
                                />
                            </div>
                            <button 
                                className="add-to-cart-btn"
                                onClick={() => handleCart(i)}
                            >
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
        </div>
    )
}