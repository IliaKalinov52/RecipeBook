import axios from 'axios';
import React from 'react';

const cardStyle = {
  width: '18rem',
  backgroundColor: '#e6e6fa',
  margin: '10px',
};

function MainForm({ recept, user }) {
  // const favoriteHandler = async () => {
  //   await axios.post('/api/favorite', { user_id: user.id, recept_id: recept.id });
  // };
  const addHandler = async (id) => {
    try {
      const response = await axios.post(`/api/favorite/${id}`);
      if (response.status === 200) {
        // Notify.success('Добавлено в избранное');
        // console.log(response, '=================>>>>>>>MainPage');
      }
    } catch (error) {
      console.log((error));
    }
  };

  return (
    <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card mb-3" />
      <div className="text-orange fw-bold fs-5">{recept.title}</div>
      <div className="card me-3 p-3 mb-2 text-emphasis-light" style={cardStyle}>
        <a href={`/recept/${recept.id}`} className="btn fs-4">
          <img src={recept.img} className="card-img-top" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
          <div className="card-body">
            <h5 className="card-title">{recept.title}</h5>
          </div>
        </a>
        <p>
          Время приготовления:
          {' '}
          {recept.time}
        </p>
      </div>
      <button type="button" onClick={() => addHandler(recept.id)} className="btn btn-warning">
        <i className="bi bi-heart">В избранное</i>
      </button>
    </div>
  );
}

export default MainForm;
