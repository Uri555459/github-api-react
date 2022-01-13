import React from "react";
import {Link} from "react-router-dom";

const Error404 = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Ошибка 404</h1>
        <p className="col-md-8 fs-4">Страница не найдена</p>
        <Link to='/' className='btn btn-link'>На главную</Link>
      </div>
    </div>
  );
};

export default Error404;
