import React from "react";
import { Link } from "react-router-dom";

export default function NavigationCompo() {
  return (
    <>
      <div class="Nav-1">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
            <Link class="navbar-brand" href="#">
              ProductPlan
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="/"
                    class="nav-link active navL"
                    aria-current="page"
                    href="#"
                  >
                    All Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="addproduct"
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Add Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="editproduct"
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
