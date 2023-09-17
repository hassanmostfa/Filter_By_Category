import React, { useState } from 'react'
import Categories from './CategoriesDB'
const Category = () => {

   const [data , setData] = useState(Categories) ;
   const filterResult = (CatItem) =>{
      const result = Categories.filter((ele => {
         return ele.category === CatItem ;
      }))
      setData(result);
   }
   return (
      <React.Fragment>
         <div className='container'>
            <div className='row'>
               <div className='col'>
                  <h1 className='title'>Filter By Category</h1>
               </div>
            </div>
            <div className='row'>
               <div className='col'>
                  <button className='btn' onClick={() => setData(Categories)}>All</button>
                  <button className='btn' onClick={() => filterResult("Men")}>Men</button>
                  <button className='btn' onClick={() => filterResult("Women")}>Women</button>
                  <button className='btn' onClick={() => filterResult("Kids")}>Kids</button>
                  <button className='btn' onClick={() => filterResult("Animy")}>Animy</button>
               </div>
               <div className='col'>
                  <div className='cards'>
                  {data.map(values => {
                     return (
                        <div className='card' key={values.id}>
                        <div className='card-header'>
                           <img src={values.image} alt = {values.title}/>
                        </div>
                        <div className='card-body'>
                           <h2 className='product-title'>{values.title}</h2>
                           <span className='price'>${values.price}</span>
                        </div>
                     </div>
                     )
                  })}
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Category
