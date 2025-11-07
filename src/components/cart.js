import '../style/base.css';

function Cart({ cap, setcap, setquan }) {
  // no local duplicate "rem" state necessary — render directly from cap
  const handleRemove = (productId) => {
    // remove from shared cart state
    setcap(prev => prev.filter(i => i.id !== productId));

    // remove quantity entry used by the shop input
    setquan(prev => {
      const newQuant = { ...prev };
      delete newQuant[productId];
      return newQuant;
    });
  }

  const changequan = (productId, delta) => {
    setcap(prev => {
      const updated = prev
        .map(i => i.id === productId ? { ...i, quantity: Math.max(0, (i.quantity || 0) + delta) } : i)
        .filter(i => i.quantity > 0); // remove items whose quantity became 0
      return updated;
    });

    // keep the shop input quant in sync
    setquan(prev => {
      const newQuant = { ...prev };
      const current = newQuant[productId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        delete newQuant[productId];
      } else {
        newQuant[productId] = next;
      }
      return newQuant;
    });
  }

  return (
    <div className="cart">
      {cap && cap.length > 0 ? (
        cap.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-content">
              <div className="cart-item-title">{item.title}</div>
              <div className="cart-item-details">
                <div className="quantity-control-cart">
                  <button
                    className="quantity-btn"
                    onClick={() => changequan(item.id, -1)}
                  >
                    -
                  </button>
                  <div className="quantity-display">Qty: {item.quantity}</div>
                  <button
                    className="quantity-btn"
                    onClick={() => changequan(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="price">Price: ${item.price}</div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="cart-empty">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
