import { useState } from "react";
function ProductForm() {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `name: ${name}, price: ${price}, image: ${imageURL}, description: ${description}`
    );
  };
  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(eventName) => {
              setName(eventName.target.value);
            }}
            value={name}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(eventImageURL) => {
              setImageURL(eventImageURL.target.value);
            }}
            value={imageURL}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(eventPrice) => {
              setPrice(eventPrice.target.value);
            }}
            value={price}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(eventDescription) => {
              setDescription(eventDescription.target.value);
            }}
            value={description}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
