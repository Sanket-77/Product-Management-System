import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'color', headerName: 'Color', width: 200 },
  { field: 'price', headerName: 'Price', width: 250 },
  { field: 'status', headerName: 'Status', width: 200 },
  {
    field: 'action',
    headerName: 'Action',
    width: 250,
    renderCell: (params) => (
      <span><button className='btn-U btn-c' onClick={() => console.log(`Update Button clicked for row ${params.id}`)}>Update</button>
      <button className='btn-D btn-c' onClick={() => console.log(`Delete Button clicked for row ${params.id}`)}> Delete</button> </span> )
  },
]

function Home() {

  const [product, setProduct] = useState();

  const [filterdata, setfilterdata] = useState([]);

  const [query, setquery] = useState([''])


  const naviate = useNavigate()

  const getData=()=>{
    axios.get('http://localhost:8080/product')
    .then(response =>{setProduct(response.data); setfilterdata(response.data);})
    .catch(error =>{console.log(error);})
  }
  useEffect(() => {
    getData()
  }, []);

  const handleSearch = (event) => {
    const getSearch = event.target.value;
    setquery(getSearch)
   console.log('getSearch',getSearch);

  if(getSearch.length>0){
    const searchdata = product.filter((item)=>{return item.productName && item.productName.toLowerCase().includes(getSearch)})
    setProduct(searchdata);
  }else{
    setProduct(filterdata);
  }
  }

  return (
    <>
    {/* {console.log("product data from state - ",product)} */}
    {console.log('filterdata',filterdata)}
    <div className='container-1'>
    <div className='App btn-1'>
      <input className='searchinput' type="text" placeholder='Search Product' value={query} onInput={() =>{handleSearch(window.event)}}/>
      <button className='btn-LP' onClick={getData}>List Of All Product</button>
      <button className='btn-AP' onClick={() =>{naviate('addproduct')}}>Add Product</button>
    </div>
    <div className='table'>
    {product && product.length > 0 ? (
          <div style={{ height:480, width: '100%' }}>
            <DataGrid
              rows={product}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </div>
        ) : (
          <div>No Data availabel</div>
        )}
    </div>
    </div>
    </>
  )
}

export default Home;


