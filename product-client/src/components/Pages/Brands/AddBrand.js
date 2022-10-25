import React from "react";

const AddBrand = () => {
  return (
    <div className="col-md-12 d-flex justify-content-center mt-3">
      <form class="row g-3 col-md-8">
        <h3>Add Brand</h3>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
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

export default AddBrand;
