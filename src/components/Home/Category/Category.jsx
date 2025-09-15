import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Category.css"

function Category() {
  const [Category,setCategory] = useState([])
  const [loading,setloading] = useState(false)
useEffect(()=>{
    const fetchcategory = async() => {
        try{
            const respose = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            const data = await respose.json()
            setCategory(data.categories)
        }
        catch(error){
            console.log(error)
        }
        finally{
            setloading(true)
        }
        
    }
    fetchcategory()
},[])

if(!loading){
    return <h1>Loading..</h1>
}
  return (
    <>
   
    <h1 className='h1'>Our Menu</h1>
    

    <div className='categoryimgs'>
        {Category.map((cat) => (
            <Link key={cat.idCategory} to={`/categories/${cat.strCategory}`}>
            <div >
                <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            </div>
               <h3>{cat.strCategory}</h3>
            </Link>
            
        ))}
    </div>
    
    <img src = "https://foodily.vercel.app/assets/images/background/pattern-1.png"/>
    </>
  )
}

export default Category
