// import { useState } from "react";

function MenuList ({ addCart }) {
  const data = [
    {
      "id": 1,
      "name": "珍珠奶茶",
      "description": "香濃奶茶搭配QQ珍珠",
      "price": 50
    },
    {
      "id": 2,
      "name": "冬瓜檸檬",
      "description": "清新冬瓜配上新鮮檸檬",
      "price": 45
    },
    {
      "id": 3,
      "name": "翡翠檸檬",
      "description": "綠茶與檸檬的完美結合",
      "price": 55
    },
    {
      "id": 4,
      "name": "四季春茶",
      "description": "香醇四季春茶，回甘無比",
      "price": 45
    },
    {
      "id": 5,
      "name": "阿薩姆奶茶",
      "description": "阿薩姆紅茶搭配香醇鮮奶",
      "price": 50
    },
    {
      "id": 6,
      "name": "檸檬冰茶",
      "description": "檸檬與冰茶的清新組合",
      "price": 45
    },
    {
      "id": 7,
      "name": "芒果綠茶",
      "description": "芒果與綠茶的獨特風味",
      "price": 55
    },
    {
      "id": 8,
      "name": "抹茶拿鐵",
      "description": "抹茶與鮮奶的絕配",
      "price": 60
    }
  ]

  return (<div className="list-group">
    {
      data.map(item => (<a href="#" key={item.id} className="list-group-item list-group-item-action"
                           onClick={() => {addCart(item)}}>
                          <div className="d-flex w-100 justify-content-between align-items-center">
                            <div>
                              <h5 className="mb-1">{item.name}</h5>
                              <p className="mb-1 text-muted">{item.description}</p>
                            </div>
                            <h4>${item.price}</h4>
                          </div>
                        </a>))
    }
  </div>)
}

export default MenuList;