import React from "react";

const AddProduct = () => {
  return (
    <div className="col-md-12 d-flex justify-content-center mt-3">
      <form class="row g-3 col-md-8">
        <h3>Add Product</h3>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Category
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="inputState" class="form-label">
            Brand
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Code
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">
            Image
          </label>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-success">
           Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
