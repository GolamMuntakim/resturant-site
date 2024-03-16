
import { useState } from 'react'
import './App.css'
import Banner from './Banner'
import Items from './Items'
import Nav from './Nav'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import Footer from './Footer'

function App() {
  const [cart,setCart] = useState([])
  const [count,setCount]=useState(0)
  const [newcount,setNewcount]=useState(0)
  const [cc,setCc] = useState([])
  const [preparationTime,setPreparationtime]=useState(0)
  const [calories,setCalories]=useState(0)

 const handleWantToCook=(p)=>{
  const exist = cart.find(item=>item.recipe_id === p.recipe_id)
  if(!exist){
    setCart([...cart,p])
    setCount(p=>p+1)
    return toast.success("a recipe is added");
  }else{
    return toast.warn("this item is already added");
  }
}

const handleDelete = (id,item) => {
  const newCart = cart.filter(item=>item.recipe_id!=id)
  setCart(newCart)
  setCount(p=>p-1)
  setNewcount(p=>p+1)
  setCc([...cc,item])
  setPreparationtime(p=>p+(item.preparing_time))
  setCalories(p=>p+(item.calories))
 toast.success("added to currently cooking")
  
}
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <div>
     <div className='grid  lg:grid-cols-12 ml-8 mr-8 mt-8 '>
     <div className='col-span-8 '>
       <Items   handleWantToCook={handleWantToCook}></Items>
       </div>
       <div className='col-span-4 drop-shadow-2xl bg-base-100 pt-8 w-[300px] lg:w-[420px]'>
        <h1 className='text-3xl font-bold text-center'>Want to cook :{count} </h1>
        <br></br>
        <hr />
        <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
{
  cart.map((item,idx)=>( 
   
    <tbody key={item.recipe_id}>
      <tr className="bg-base-200">
        <th>{idx+1}</th>
        <td>{item.recipe_name}</td>
        <td>{item.preparing_time} minutes</td>
        <td>{item.calories} calories</td>
        <td><button  onClick={()=>handleDelete(item.recipe_id,item)} className='btn btn-success rounded-full p-1 pt-1'>Preparing</button></td>
      </tr>
    </tbody>
       
  ))
}
  </table>
  <br />
<hr />
<div >
    <h2 className='text-xl lg:text-3xl font-bold text-center'>Currently Cooking:{newcount}</h2>
    <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
   {
    cc.map((items,idx)=>(
      <tbody key={items.recipe_id}>
      <tr className="bg-base-200">
        <th>{idx+1}</th>
        <td>{items.recipe_name}</td>
        <td>{items.preparing_time} minutes</td>
        <td>{items.calories} calories</td>
        
      </tr>
    </tbody>
    ))
   }
    </table>
</div>
<br />
<hr />
<div>
<table className="table">
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td>Total  Time:{preparationTime}</td>
        <td>Total Calories:{calories}</td>
      </tr>
    </tbody>
    </table>
</div>

</div>
</div>
    </div>
     <ToastContainer />
     </div>
     <Footer></Footer>
    </>
  )
}

export default App
