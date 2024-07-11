import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";
import {UserProgressContextProvider} from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
    return (
        <CartContextProvider>
            <UserProgressContextProvider>
                <Header/>
                <Meals/>
                <Cart/>
                <Checkout/>
            </UserProgressContextProvider>
        </CartContextProvider>
    );
}

export default App;
