import React from "react";
import "./Card.css";
import styled from "styled-components";

function Card({ store, addProductHandler }) {
  const enebled = store.map((el) => el.quantity < 0);

  //   const disabled = enebled > 0;

  console.log(store);
  return (
    <div className="Main-card">
      {store.map((el) => {
        return (
          <div key={el.id} className="card">
            <Images src={el.img} />
            <Heading>{el.name}</Heading>
            <Price>{el.staticPrice} $</Price>
            {el.quantity > 1 ? null : (
              <button
                className="button"
                onClick={() => addProductHandler(el.id)}
                disabled={el.quantity > 0}
              >
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Card;

const Images = styled.img`
  width: 150px;
  border-radius: 10px;
  margin-top: 20px;
`;
const Price = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Heading = styled.h3`
  color: #fff;
`;
