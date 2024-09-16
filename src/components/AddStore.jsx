import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"


const AddStore = () => {
  const [storeName, setStoreName] = useState('');
  const [storeEmail, setStoreEmail] = useState('');
  const [storeAddress, setStoreAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStore = {
      storeName,
      storeEmail,
      storeAddress,
    };

    console.log('Store Added:', newStore);

    // Clear form fields after submit
    setStoreName('');
    setStoreEmail('');
    setStoreAddress('');
  };

  return (
    <div className="mt-5">
      <h2>Add Store</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="store-name" className="form-label">Store Name</label>
          <input
            type="text"
            className="form-control"
            id="store-name"
            placeholder="Enter Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="store-email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="store-email"
            placeholder="Enter Store Email"
            value={storeEmail}
            onChange={(e) => setStoreEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="store-address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="store-address"
            placeholder="Enter Store Address"
            value={storeAddress}
            onChange={(e) => setStoreAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Store</button>
      </form>
    </div>
  );
};

export default AddStore;
