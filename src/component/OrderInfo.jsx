function OrderInfo ({ orderInfo }) {
  const { order = [], description = "", total = 0 } = orderInfo;

  return (<div className="order-section">
    {
      order.length > 0 ? (<div className="card">
        <div className="card-body">
          <div className="card-title">
            <h5>📜訂單</h5>
            <table className="table">
              <thead>
                <tr>
                  <th>品項</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                {
                  order.map(orderItem => (<tr key={orderItem.id}>
                      <td>{orderItem.name}</td>
                      <td>{orderItem.qty}</td>
                      <td>{orderItem.price * orderItem.qty}</td>
                    </tr>))
                }
              </tbody>
            </table>
            <div>
              <p>備註</p>
              <textarea className="form-control mb-3" rows="2" value={description ? description : "無"} disabled></textarea>

            </div>
            <div className="text-end">
              <h5>總計: ${total}</h5>
            </div>
          </div>
        </div>

      </div>) : (<div className="alert alert-secondary text-center" role="alert">尚未建立訂單</div>)
    }


  </div>)
}

export default OrderInfo;