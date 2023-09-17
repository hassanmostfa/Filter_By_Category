import React , {useState} from 'react'

function Usestate(/*Props value (x,y,etc...)*/) {
   const [products , setProducts] = useState([
      {id : 1 , name :"product1"},
      {id : 2 , name :"product2"},
      {id : 3 , name :"product3"},
   ])

   const [value , setval] = useState("") ;
   const addOneItem = () =>{
      setProducts([ ...products , {id : 4 , name : "product4"}]) ;
   }
   return (
      <div>
      <input type='text' onChange={(e) => setval(e.target.value)} />
      {value}
      <button onClick={addOneItem}>Add Item</button>
      {products.map(product => <div>{product.name}</div>)}
      </div>
   )
}
export default Usestate;