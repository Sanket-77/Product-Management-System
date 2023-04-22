import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const columns = [
  { field: "productName", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "color", headerName: "Color", width: 200 },
  { field: "price", headerName: "Price", width: 250 },
  { field: "status", headerName: "Status", width: 200 },
  {
    field: "action",
    headerName: "Action",
    width: 250,
    renderCell: (params) => (
      <span>
        <button
          className="btn-U btn-c"
          onClick={() =>
            console.log(`Update Button clicked for row ${params.id}`)
          }
        >
          Update
        </button>
        <button
          className="btn-D btn-c"
          onClick={() =>
            console.log(`Delete Button clicked for row ${params.id}`)
          }
        >
          {" "}
          Delete
        </button>{" "}
      </span>
    ),
  },
];

function ProductData() {
  const [product, setProduct] = useState();

  const [filterdata, setfilterdata] = useState([]);

  const [query, setquery] = useState("");

  const naviate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:8080/product")
      .then((response) => {
        setProduct(response.data);
        setfilterdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handlesearch = (event) => {
    const getSearch = event.target.value;
    setquery(getSearch);
    //  console.log('getSearch',getSearch);

    if (getSearch.length > 0) {
      const searchdata = product.filter((item) => {
        item.productName.toLowerCase().includes(getSearch);
      });
      setProduct(searchdata);
    } else {
      setProduct(filterdata);
    }
  };

  return (
    <>
      <React.Fragment>
        <Container>
          <div className="row mt-3">
            <div className="col-md-12 mt-3 mb-3">
              <h3 className="mb-3">Search record Datatable in React Js</h3>
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  value={query}
                  className="form-control"
                  onChange={(e) => handlesearch(e)}
                  placeholder="Search..."
                />
              </div>
            </div>

            <div className="col-md-12">
              <table className="table" style={{ color: "#fff" }}>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1} </td>
                      <td>{item.productName}</td>
                      <td>{item.description}</td>
                      <td>{item.color}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </>
  );
}

export default ProductData;
