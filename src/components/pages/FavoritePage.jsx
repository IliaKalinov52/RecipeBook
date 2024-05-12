import React, { useState } from 'react';

import FavoriteForm from '../ui/FavoriteForm';

export default function FavoritePage({ favorites }) {
  const [items, setItems] = useState(favorites || []);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/favorite/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setItems((prev) => prev.filter((el) => el.id !== id));
    }
  };
  // console.log(recept '!!!!!!!!!!!=====>>>>');
  return (
    <div>
      <h1>Любимые рецепты:</h1>
      {items
        ? (
          <div style={{
            display: 'flex', marginLeft: '30px', gap: '30px', flexWrap: 'wrap', justifyContent: 'flex-start',
          }}
          >
            {items?.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex', marginBottom: '50px',
                }}
              >
                <FavoriteForm item={item} deleteHandler={deleteHandler}  />
              </div>
            ))}

          </div>
        )
        : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h5 style={{ margin: '50px 50px 50px 50px' }}>Ваша корзина пуста</h5>
          </div>
        )}
    </div>
  );
}
