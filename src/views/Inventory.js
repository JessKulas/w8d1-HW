import FeaturedCar from "../components/FeaturedCar";
import Inventory from "../components/Inventory";
import { useState } from "react"

function Cars() {
    const [cars, setsCars] = useState([
        {
                "id": 1,
                "make": "Toyota",
                "model": "RAV4",
                "info": {
                    "year": 2022,
                    "miles": 5,
                    "price": 31900
                }
            },
            {
                "id": 2,
                "make": "Jeep",
                "model": "Wrangler",
                "info": {
                    "year": 2010,
                    "miles": 150000,
                    "price": 27000,
                }
            },
            {
                "id": 3,
                "make": "Ford",
                "model": "Mustang",
                "info": {
                    "year": 2017,
                    "miles": 75000,
                    "price": 30000,
                }
            },
            {
                "id": 4,
                "make": "Nissan",
                "model": "Altima",
                "info": {
                    "year": 2013,
                    "miles": 130000,
                    "price": 10000,
                }
            }
          ])
       

    const [featuredCar, setFeaturedCar] = useState(cars[0])

    return (
        <div className="App">
        <header className="App-header">
            <h2>Features Car</h2>
            <FeaturedCar car={featuredCar} />
            <hr />
            { cars.map((car) => <FeaturedCar clickHandler={setFeaturedCar} key={car.id} car={car} />) }
        </header>
        </div>
    );
}
      
    export default Cars;