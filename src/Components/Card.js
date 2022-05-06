import React from "react";

const Card = ({ menuProducts }) => {
  return (
    <>
      <div className="container">
        {menuProducts.map((currentElem, index) => {
          return (
            <>
              <div className="card" key={currentElem.id}>
                <div className="card-header">
                  <div className="sNo">{index+1}</div>
                  <div className="type">{currentElem.type}</div>
                  <h3 className="title">{currentElem.title}</h3>
                  <div className="desc">{currentElem.desc}</div>
                  <div className="line">Read More</div>
                </div>
                <div className="card-body">
                  <div className="foodImage">
                    <img src={currentElem.img} alt="Rajma" />
                    <button className="buyNow">Order Now</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
