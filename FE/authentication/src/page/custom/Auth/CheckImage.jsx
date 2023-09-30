import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../../../redux-store/authActions";
import { useNavigate } from "react-router-dom";

function UploadImg() {
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(auth.successUserId);
    // dispatch(getImage(auth.successUserId));
  });

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       const formData = new FormData();
//       selectedFiles.forEach((file, index) => {
//         formData.append("Images", file); // Sử dụng "Image" làm tên trường
//       });
//       const userId = auth.successUserId;
//       formData.append("userId", userId);
//       dispatch(Photo(formData));
//       navigate("/relationship");
//     }
//   };

  return (
    <div className="upload-img d-flex justify-content-center align-items-center">
      <div className="border p-5">
        <label htmlFor="upload" className="btn btn-light me-3">
          Tải ảnh lên
        </label>
        <input
          type="file"
          id="upload"
          className="d-none"
          multiple
        />
        {/* <button className="btn btn-primary" onClick={handleUpload}>
          Tải lên
        </button> */}

        <div className="image-previews">
          <label htmlFor="check">
            <img src="" alt="" />
          </label>
          <input type="checkbox" name="" id="check" value={1} />
          {/* {imagePreviews.map((preview, index) => (
            <div className="position-relative" key={index}>
              <img
                src={preview}
                alt={`Preview ${index}`}
                className="preview-image"
              />
              <button
                className="circle position-absolute"
                onClick={() => handleRemoveImage(index)}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </button>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default UploadImg;
