import React from 'react';
import ReceptForm from '../ui/ReceptForm';

export default function ReceptPage({ recept }) {
  // console.log(recept);
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="row d-flex justify-content-center">
        <ReceptForm recept={recept} />
      </div>
    </div>
  );
}
