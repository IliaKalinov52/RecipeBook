import axios from 'axios';
import React from 'react';

export default function Navbar({ user }) {
  const logoutHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/api/auth/logout');
      if (response.status === 200) window.location = '/';
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // const handleSearch = async (e) => {
  //   const searchText = e.target.value;
  //   console.log('Search Text:', searchText);

  //   // Пример отправки запроса на сервер для поиска рецептов
  //   try {
  //     const response = await axios.get(`/api/search?query=${searchText}`);
  //     console.log('Search Results:', response.data);
  //     // Далее можно обработать результаты поиска
  //   } catch (error) {
  //     console.error('Error searching recipes:', error);
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {!user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/auth/signup">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/auth/login">Login</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="/main">Recepts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/favorite">Favorite</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" onClick={logoutHandler}>Logout</a>
                </li>
                {/* <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
