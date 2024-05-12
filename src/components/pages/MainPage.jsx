import React, { useState } from 'react';
// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MainForm from '../ui/MainForm';

export default function MainPage({ recepts, user }) {
  const [sortedByTime, setSortedByTime] = useState(false);

  const handleSortByTime = () => {
    setSortedByTime(!sortedByTime);
  };
  const sortedRecepts = sortedByTime ? [...recepts].sort((a, b) => a.time.split(' ')[0] - b.time.split(' ')[0]) : [...recepts].sort((a, b) => b.time.split(' ')[0] - a.time.split(' ')[0]);
  // console.log(user, recepts, '=========================>>>>>>>');
  // console.log(sortedRecepts);

 

  return (
    <>
      <button type="button" onClick={handleSortByTime} className="btn btn-info">Сортировка по времени</button>
      <div className="d-flex flex-column justify-content-center">
        <div className="row d-flex justify-content-center">
          {sortedRecepts?.map((el) => <MainForm key={el.id} recept={el} user={user} />)}
        </div>
      </div>
    </>
  );
}
