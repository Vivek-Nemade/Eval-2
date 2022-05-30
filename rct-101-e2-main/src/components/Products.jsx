import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from 'axios'


    

import { Flex,Grid } from "@chakra-ui/react";
import AddProduct from "./AddProduct";
import Product from "./Product";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  //  Flex = () => <div />;
  //  Grid = () => <div />;
  const [page,setPage]=useState(1)
  const[alldata, setAllData] =useState([])
  const [limit, setLimit] = useState(3)
  

  // useEffect(()=> {
  //   const getData= async ()=>{
  //     let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
  //     console.log(r.data)
  //     setAllData([...r.data])
      
  //   }
  //   getData()

  // },[page,limit])

  
  useEffect(()=> {
    axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((r)=>{
      setAllData([...r.data])
    })
     
      
    },[page,limit])

  return (
    <Flex >
      {/*  AddProduct */} < AddProduct/>
      
      <Grid marginTop={150} templateColumns='repeat(3,1fr)' gap={6}>{alldata.map(e=><Product item={e}/>)}</Grid>
        {/* {
          alldata.map((elem)=>(
            <div>
              <div id={elem.id} >
                <img src="elem.imageSrc" alt="pop" />
                <p>{elem.category}</p>
                <p>{elem.gender}</p>
                <p>{elem.title}</p>

              </div>
              </div>
          ))}  */}
       
         <Pagination setPage={setPage} setLimit={setLimit}/>
    </Flex>
  );
};

export default Products;
