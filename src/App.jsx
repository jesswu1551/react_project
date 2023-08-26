import { useState } from "react";
import MenuList from "./component/MenuList";
import OrderInfo from "./component/OrderInfo";
import ShopCart from "./component/ShopCart";

function App() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});

  function addCart(item) {
    const itemIdx = cart.findIndex(cartItem => cartItem.id === item.id);
    if (itemIdx >= 0) {
      const newList = cart.map(cartItem => {
        return (cartItem.id === item.id) ? { ...cartItem, qty: cartItem.qty + 1 } : {...cartItem };
      });
      setCart(newList);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }

  function qtyChange(id, value) {
    const newList = cart.map(cartItem => {
      return (cartItem.id === id) ? { ...cartItem, qty: Number(value) } : { ...cartItem };
    });
    setCart(newList);
  }

  function deleteItem(id) {
    const newList = cart.filter(cartItem => cartItem.id !== id);
    setCart(newList);
  }

  function submitCart(description, total) {
    setOrder({ order: [...cart], description: description, total: total });
    setCart([]);
    alert("訂單已送出！");
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <MenuList addCart={addCart} />
          </div>
          <div className="col-md-8">
            <ShopCart cart={cart} qtyChange={qtyChange} deleteItem={deleteItem} submitCart={submitCart} />
          </div>
        </div>
        <hr/>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <OrderInfo orderInfo={order} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
