import React from 'react';

function ReceptForm({ recept }) {
  console.log(recept);
  return (
    <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px' }}>
      <h1>{recept.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img style={{ width: '100%', height: 'auto' }} src={recept.img} alt="Recipe" />
        </div>
        <div className="col-md-6">
          <p>
            <strong>Время приготовления:</strong>
            {' '}
            {recept.time}
          </p>
          <p>
            <strong>Ингридиенты:</strong>
            {' '}
            {recept.ingredient}
          </p>
          <p>
            <strong>Приготовление:</strong>
            {' '}
            {recept.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReceptForm;
