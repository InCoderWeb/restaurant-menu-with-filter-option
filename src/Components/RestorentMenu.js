import React, { useState } from "react";
import Card from "./Card";
import { API } from "./API";
import "./../asset/css/main.css";

const uniqueList = [
  ...new Set(
    API.map((currElem) => {
      return currElem.type;
    })
  ),
  "All",
];

console.log(uniqueList);

const RestorentMenu = () => {
  let [menuProducts, setMenuProducts] = useState(API);
  let [activeTab, setactiveTab] = useState("");

  const filterProducts = (type) => {
    let updatedProducts = API.filter((currentElem) => {
      return currentElem.type === type;
    });
    setMenuProducts(updatedProducts);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="menu">
          <ul>
            {uniqueList.map(list => {
              return (
                <>
                  <li
                    onClick={() => list != 'All' ? filterProducts(list) : setMenuProducts(API)}
                    className={activeTab}>
                    {list}
                  </li>
                </>
              )
            })}
          </ul>
        </div>
        <Card menuProducts={menuProducts} />
      </div>
    </>
  );
};

export default RestorentMenu;
