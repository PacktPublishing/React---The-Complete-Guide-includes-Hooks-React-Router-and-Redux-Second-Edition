import CartContext from "../store/shopping-cart-context.jsx";

export default function Cart() {

    return (
        <CartContext.Consumer>
            {(cartCtx) => {
                const totalPrice = cartCtx.items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                );
                const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

                return <div id="cart">
                    {cartCtx.items.length === 0 && <p>No items in cart!</p>}
                    {cartCtx.items.length > 0 && (
                        <ul id="cart-items">
                            {cartCtx.items.map((item) => {
                                const formattedPrice = `$${item.price.toFixed(2)}`;

                                return (
                                    <li key={item.id}>
                                        <div>
                                            <span>{item.name}</span>
                                            <span> ({formattedPrice})</span>
                                        </div>
                                        <div className="cart-item-actions">
                                            <button onClick={() => cartCtx.updateItemQuantity(item.id, -1)}>
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => cartCtx.updateItemQuantity(item.id, 1)}>
                                                +
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <p id="cart-total-price">
                        Cart Total: <strong>{formattedTotalPrice}</strong>
                    </p>
                </div>
            }}
        </CartContext.Consumer>
    );
}
