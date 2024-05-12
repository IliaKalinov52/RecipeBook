import React from 'react';

const cardStyle = {
  width: '18rem',
  backgroundColor: '#d3fcd5',
  margin: '10px',
};

export default function FavoriteForm({ item, deleteHandler }) {
  console.log('===========<<<<>>>>>==========', item);
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <a href={`/recept/${item.Recept.id}`} className="btn fs-4">
            <img src={item.Recept.img} className="img-fluid rounded-start" alt="..." />
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.Recept.title}</h5>
            <p className="card-text">{item.Recept.time}</p>

            <button onClick={() => deleteHandler(item.id)} type="button" className="btn btn-danger"> Delete </button>
          </div>
        </div>
      </div>
    </div>

  );
}
