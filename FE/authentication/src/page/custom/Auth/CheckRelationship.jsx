import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { relationshipUser } from "../../../redux-store/authActions";

function Relationship() {
  const [relationship, setrRelationship] = useState([]);
  const [newRelationship, setNewRelationship] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setNewRelationship(event.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newRelationship.trim() !== "") {
      setrRelationship([...relationship, newRelationship]);
      setNewRelationship("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedRelationship = [...relationship];
    updatedRelationship.splice(index, 1);
    setrRelationship(updatedRelationship);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    relationship.forEach((relationships, index) => {
      formData.append("relationships", relationships);
    });
    formData.append("userId", auth.successUserId);
    dispatch(relationshipUser(formData))
    // console.log(relationship);
  };
  return (
    <div className="relationship d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <h4 className="pt-3 pb-3 text-center">
                Thiết lập mối quan hệ mới
              </h4>
              <div className="card-body">
                <ul className="list-group">
                  {relationship.map((relationship, index) => (
                    <li
                      key={index}
                      className="d-flex justify-content-between m-2"
                    >
                      {relationship}{" "}
                      <button
                        onClick={() => handleDeleteTask(index)}
                        className="bg-transparent border-0"
                      >
                        <i className="fa-regular fa-circle-xmark"></i>
                      </button>
                    </li>
                  ))}
                </ul>
                <form className="mt-4">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Thêm mối quan hệ mới"
                      className="form-control"
                      value={newRelationship}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="text-center mt-3 d-flex justify-content-center gap-3">
                    <button onClick={handleAddTask} className="btn btn-light">
                      Thêm mối quan hệ
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn btn-primary"
                    >
                      Tạo mối quan hệ mới
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Relationship;
