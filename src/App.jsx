import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./catState";

export default function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log("cats", cats);

  return (
    <div className="App">
      <p>Cat species gallery</p>
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <p>{cat.name}</p>
            </div>
            <div className="column column-right">
              <p>{cat.energy_level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
