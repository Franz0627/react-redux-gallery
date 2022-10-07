import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [breedList, setBreedList] = useState([]);
  const [randomImage, setRandomImage] = useState([]);


  useEffect(() => {
      getDogBreeds();
  }, []);
  const getDogBreeds = async () => {
    await axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
      let breeds = [];
      Object.keys(response.data.message).map((key, index) => {
        breeds.push({
          breed: key,
          count: 0,
          likes: 0,
        });
      });
      let reqData = [];
      for (let i = 0; i < 24; i++) {
        let randomNum = Math.round(Math.random() * (10 - 1) + 1);
        axios.get(`https://dog.ceo/api/breed/${breeds[randomNum].breed}/images/random`).then((response) => {
          reqData.push(response.data);
        });
      }
      setBreedList(breeds);
      setRandomImage(reqData);
    });
  };

    return (
    <div>
      <h1 align="center">Dog Image Gallery App</h1>
      <div className="App">
        <div className="breedsContainer">
          {breedList.map((val, key) => {
            // if (key < 10) {
              return (
                <div key={key}>
                  <dl>
                    <dt>{val.breed}</dt>
                    <dd>Count: {val.count}</dd>
                    <dd>Likes: {val.likes}</dd>
                  </dl>
                </div>
              );
            // }
          })}
        </div>
        <div className="tableContainer">
          <table>
            <tbody>
              <tr >
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
              </tr>
              <tr >
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
              </tr>
              <tr >
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
              </tr>
              <tr >
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
              </tr>
              <tr >
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
              </tr>
              <tr >
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
                <td>Dog Image</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
