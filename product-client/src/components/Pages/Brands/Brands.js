import React from "react";

const Brands = () => {
  return (
    <div className="col-md-12 flex-column d-flex align-items-center">
    <form class="row g-3 col-md-6">
      <h3>Brand</h3>
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">
          Name
        </label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>

      <div class="col-12 m-3">
        <button type="submit" class="btn btn-success">
        <i class="bi bi-plus-square pe-2"></i>
          Add Brand
        </button>
      </div>
    </form>
    <div className="col-md-6">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Oppo</td>
           
            <td><button className="btn btn-danger btn-sm"><i class="bi bi-trash"></i> Delete</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td><button className="btn btn-danger btn-sm"> <i class="bi bi-trash"></i> Delete</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td><button className="btn btn-danger btn-sm"> <i class="bi bi-trash"></i> Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default Brands;
