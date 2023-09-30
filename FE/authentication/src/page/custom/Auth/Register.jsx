import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux-store/authActions";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({}); // State để lưu các thông báo lỗi
  const auth = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra tính hợp lệ và hiển thị thông báo lỗi nếu cần
    const validationErrors = {};

    if (!user.username) {
      validationErrors.username = "Vui lòng nhập tên đăng nhập";
    }

    if (!user.password) {
      validationErrors.password = "Vui lòng nhập mật khẩu";
    }

    if (!user.email) {
      validationErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      validationErrors.email = "Email không hợp lệ";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(registerUser(user));
        navigate("/uploadimage");
    }
  };

  return (
    <div className="register d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <h4 className="pt-3 pb-3 text-center">Đăng ký</h4>
              <div className="card-body">
                <form method="post" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Tên đăng nhập
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                    />
                    {errors.username && (
                      <p className="text-danger">{errors.username}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email}</p>
                    )}
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Đăng Ký
                    </button>
                    <p className="pt-2">
                      Bạn đã có tài khoản ? <Link to="/"> Đăng nhập</Link>
                    </p>
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
export default Register;
