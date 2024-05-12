"use client";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, onSnapshot, QuerySnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export default function Home() {
  const [items, setItems] = useState<any>([]);

  const [total, setTotal] = useState("0");

  const [newItem, setNewItem] = useState<any>({ name: "", price: "" });

  // add items
const addItem = async (e : any) => {
  e.preventDefault()
  if(newItem.name !== '' && newItem.price !== ''){
      await addDoc(collection(db, 'items'),{
        name: newItem.name.trim(),
        price : newItem.price
      })
      setNewItem({name: '', price : ''})
  }
}

  //read items
useEffect(() => {
  const q = query(collection(db, 'items'))
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    let itemArr: any = []

    QuerySnapshot.forEach((doc) => {
      itemArr.push({...doc.data(), id:doc.id})
    })
    setItems(itemArr)



    // total

    const calculate = () => {
      const totalPrice = itemArr.reduce((sum,item) => sum + parseFloat(item.price),0)
      setTotal(totalPrice)
    }
    calculate()
    return () => unsubscribe()
  })
},[])

  //delete items

  const deleteItem = async (id:any) => {
    deleteDoc(doc(db, 'items', id))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col">
        <h1 className="text-4xl text-center p-4">Expense Tracker</h1>
        <div className="bg-slate-800 p-4 rounded-lg">
          <form className="grid grid-cols-6 items-center text-black">
            <input
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              className="col-span-3 rounded-md p-2 border"
              type="text"
              placeholder="Enter Item"
            />
            <input
             value={newItem.price}
             onChange={(e) => setNewItem({...newItem, price: e.target.value})}
              className="col-span-2 border p-2 rounded-md mx-3"
              type="text"
              placeholder="Enter $"
            />
            <button
              type="submit"
              onClick={addItem}
              className="text-white bg-slate-950 hover:bg-slate-900 px-3 py-2 rounded-md text-xl"
            >
              +
            </button>
          </form>

          <ul>
            {items.map((item, i) => (
              <li
                className="flex items-center bg-slate-950 p-2 rounded-lg w-full my-4 justify-between"
                key={i}
              >
                <div className="flex justify-between w-full text-lg capitalize">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button onClick={() => deleteItem(item.id)} className="text-xl bg-red-700 mx-3 px-3 rounded-lg">
                  x
                </button>
              </li>
            ))}
          </ul>
          {
           items.length < 1? ('') : (
            <div className="flex justify-between p-4 mx-8 text-xl">
            <span>Total</span>
            <span>${total}</span>
          </div>
           )
          }
        </div>
      </div>
    </main>
  );
}
