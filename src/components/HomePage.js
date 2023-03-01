import React, { useCallback, useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchByCategory } from '../Redux/actions/products';
import './Products.css';
import SubCategories from './SubCategories';



export const HomePage = () => {
  const [electronics, setElectronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [mensClothing, setMensClothing] = useState([])
    const [womensClothing, setWomensClothing] = useState([])

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories?.categories)
  const items = useSelector(state => state.categories?.categoryDetails)
  
  
  useEffect(() => {
    dispatch(fetchCategories())
  },[])

  useEffect(() => {
    categories && categories?.map(category => {
            if(category === 'electronics'){
              dispatch(fetchByCategory(category))
              setElectronics(items)
            console.log('electronics:',electronics)
            }
            else if(category === 'jewelery'){
              dispatch(fetchByCategory(category))
            setJewelery(items)
            console.log('jewelery:',jewelery)
        }
            else if(category === 'men\'s clothing'){
              dispatch(fetchByCategory(category))
            setMensClothing(items)
            console.log('mens:',mensClothing)
        }
            else if(category === 'women\'s clothing'){
              dispatch(fetchByCategory(category))
            setWomensClothing(items)
            console.log('womens:',womensClothing)
        }
        else return;
    })
  },[categories])

   

 return (
    <div>
     {categories?.map((category,i) => {
        return (
          <section key={i} className='section-card'>
           <div className='section-card img'>
            <div style={{backgroundColor:'white',textAlign:'center',fontSize:'15px',fontWeight:'400'}}>
        <h2>Best of {category}</h2>
        <Button variant="primary">View All</Button>
        </div>
           </div>hello
           {/* <SubCategories count = {i} category={category} /> */}
        </section>
        )
      })}
        </div>
    )
}