import React, { useState } from 'react';
import Axios from 'axios';

function PostForm() {
  const url = ""; // Replace this with your actual API endpoint URL
  const [data, setData] = useState({
    productId: "",
    launchContextKey: "",
    items: "",
    contentItemAttributes: ""
  });

  function handle(e) {
    const { id, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function redirectURL(path: string,
    params: { [key: string]: string },
    method = 'post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const property in params) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = property;
      hiddenField.value = params[property];
  
      form.appendChild(hiddenField);
    }
  
    document.body.appendChild(form);
    form.submit();
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    redirectURL(url, {
        productId: data.productId,
        launchContextKey: data.launchContextKey,
        items: data.items,
        contentItemAttributes: data.contentItemAttributes
        }
    )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ fontFamily: 'Arial', textAlign: 'center', maxWidth: '400px', margin: '0 auto', paddingTop: '20px' }}
      >
        <h1>Content UI Simulation</h1>
        <br />
        {/* Your input fields here */}
        <input
          onChange={(e) => handle(e)}
          id="productId"
          placeholder="Product ID"
          type="text"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          onChange={(e) => handle(e)}
          id="launchContextKey"
          placeholder="Launch Context Key"
          type="text"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          onChange={(e) => handle(e)}
          id="items"
          placeholder="Items"
          type="text"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          onChange={(e) => handle(e)}
          id="contentItemAttributes"
          placeholder="Content Item Attributes"
          type="text"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <br />
        <button
          type="submit"
          style={{
            background: '#4CAF50',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostForm;
