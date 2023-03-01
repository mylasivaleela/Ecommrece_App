import React, { useEffect, useMemo, useState } from "react";
import { Carousel} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchByCategory } from "../Redux/actions/products";

const SubCategories = ({category,count}) => {
    const [electronics, setElectronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [mensClothing, setMensClothing] = useState([])
    const [womensClothing, setWomensClothing] = useState([])

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories?.categoryDetails)
    const items = useSelector(state => state.categories?.categoryDetails)
    
    useEffect(() => {
        dispatch(fetchByCategory(category))
            if(category === 'electronics'){
            setElectronics(items)
            console.log('electronics:',electronics)
            }
            else if(category === 'jewelery'){
            //    dispatch(fetchByCategory(category))
            setJewelery(items)
            console.log('jewelery:',jewelery)
        }
            else if(category === 'men\'s clothing'){
            //    dispatch(fetchByCategory(category))
            setMensClothing(items)
            console.log('mens:',mensClothing)
        }
            else if(category === 'women\'s clothing'){
            //    dispatch(fetchByCategory(category))
            setWomensClothing(items)
            console.log('womens:',womensClothing)
        }
        else return;
    },[items])

    return (
        <>hi
        </>
//         <Carousel style={{display: 'inline'}}>
//             {items?.map((item,i) => {
//                 return (
//                     <Carousel.Item key={i}>
//                     <img
//                       className="section-card"
//                       src={item.image}
//                       alt="First slide"
//                     />
//                     <Carousel.Caption>
//                       <h3>{item.title}</h3>
//                       <p>{item.price}</p>
//                     </Carousel.Caption>
//                     </Carousel.Item>
//                 )
//             } )}
       
// </Carousel> 
    )
}

export default SubCategories;