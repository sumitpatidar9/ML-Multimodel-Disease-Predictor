import "./Tumor.css";

import React, { useState } from "react";
import axios from "axios";

const Tumor = () => {


  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);



  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    setLoading(true); 

    try {
      const response = await axios.post(
        "http://localhost:5000/tumor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      setResult(response.data); // Set result
    } 
    
    catch (error) {
      console.error("Error uploading the image:", error);
      setResult("Error occurred"); // Set result on error
    } 
    
    finally {
      setLoading(false); // Stop loading
    }
  };


  return (
    <>
      <div className="main-container-tumor-1">
        <div className="main-container-tumor-1-overlay">
          <div className="text-container">
            <div className="text-container-heading">Diagnose Brain Tumor</div>
            <div className="text-container-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleFileChange}
                className="form-container-input"
              />
              <button type="submit" className="form-container-submit">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>



      <div className="main-container-tumor-2">
        <div className="main-container-tumor-2-overlay1">

              <div className="image-preview-div">
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="image-preview"
                />
              </div>

        </div>



        <div className="main-container-tumor-2-overlay2">

          {loading ? (
            <div className="tumor-loading">Loading......</div>
          ) : (
            <div className="tumor-results">
              {result ? result : "No results available"}
            </div>
          )}
        </div>
      </div>



    </>
  );
};

export { Tumor };
