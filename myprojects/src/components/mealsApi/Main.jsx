import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res);
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section>
      <img src={strMealThumb} alt={strMeal} />
      <div>
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </div>
    </section>
  ));

  return <>{itemsList}</>;
}
export default Main;
