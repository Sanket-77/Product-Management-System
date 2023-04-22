import React, { Component } from 'react'
import axios from 'axios';

export class AddProduct extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        productName: null,
        description: null,
        color:null,
        price: null,
        status: null
      }
    }

    create() {
        console.log(this.state);

        axios.post('http://localhost:8080/saveProduct',this.state)
        .then(response => {console.log(response); alert("Product has Added")})
        .catch(error =>{console.log( "error",error);})
    }
    
  render() {
    return (
        <>
        <div className='section-1'>
        </div>
        <div className="container ">
        <div className='tag'>
          <h1>Add Product</h1>
        </div>
        <div className="Form">
          <input onChange={(event) => { this.setState({ productName: event.target.value }) }} placeholder="Enter Product Name" /> <br /><br />
          <input onChange={(event) => { this.setState({ description: event.target.value }) }} placeholder="Enter Description" /><br /><br />
          <input onChange={(event) => { this.setState({ color: event.target.value }) }} placeholder="Enter Color" /><br /><br />
          <input onChange={(event) => { this.setState({ price: event.target.value }) }} placeholder="Enter Price" /><br /><br />
          <input onChange={(event) => { this.setState({ status: event.target.value }) }} placeholder="Enter Status" /><br /><br />
          <button className='btn' onClick={() => { this.create() }}>Submit</button>
        </div>
        </div>
        </>
    )
  }
}

export default AddProduct
