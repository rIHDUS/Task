import React, { useEffect } from 'react';
import $ from 'jquery';
import "datatables.net-dt"; // Correct import for DataTables

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"


const ListStores = () => {
  useEffect(() => {
    $('#store-table').DataTable();
  }, []);

  return (
    <div id="list-stores" className="mt-5">
      <h2>Store Management</h2>
      <table className="table table-striped" id="store-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {/* Example stores */}
          <tr>
            <td>Store One</td>
            <td>store1@example.com</td>
            <td>Boston</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td>Store Two</td>
            <td>store2@example.com</td>
            <td>San Diego</td>
            <td>3.8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListStores;
