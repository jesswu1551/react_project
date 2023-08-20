import { useEffect, useState } from "react";

function ShopCart ({ cart, qtyChange, deleteItem, submitCart }) {
  const [total, setTotal] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
  const newTotal = cart.reduce((prev, curr) => {
    return prev + (curr.price * curr.qty);
  }, 0);
  setTotal(newTotal);
  }, [cart]);

  function handleQtyChange(e, id) {
    qtyChange(id, e.target.value);
  }

  function handleDeleteClick(id) {
    deleteItem(id);
  }

  function handleTextChange(e) {
    setDescription(e.target.value);
  }

  return (<>
  <table className="table">
    <thead>
      <tr>
        <th scope="col" width="50">操作</th>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col" width="90">數量</th>
        <th scope="col">單價</th>
        <th scope="col">小計</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map(item => (
          <tr key={item.id}>
              <td>
                <button type="button" className="btn btn-sm" onClick={() => { handleDeleteClick(item.id); }}>
                <i className="bi bi-trash"></i>
                </button>
              </td>
              <td>{item.name}</td>
              <td><small>{item.description}</small></td>
              <td>
                <select className="form-select" value={item.qty} onChange={(e) => { handleQtyChange(e, item.id); }}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td>{item.price}</td>
              <td>{item.price * item.qty}</td>
            </tr>
        ))
      }
    </tbody>
  </table>

  {
    cart.length === 0 ? (<div className="alert alert-primary text-center" role="alert">👈請選擇商品</div>) : (<div>
      <div className="text-end mb-3">
        <h5>總計: <span>${total}</span></h5>
        </div>
      <textarea className="form-control mb-3" rows="3" placeholder="備註" value={description} onChange={(e) => { handleTextChange(e); }}></textarea>
      <div className="text-end">
        <button className="btn btn-primary" onClick={() => { submitCart(description, total); } }>送出</button>
      </div>
    </div>)
  }
  </>)
}

export default ShopCart;