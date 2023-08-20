import "./App.css";
import { BiCoffeeTogo } from "react-icons/bi";
import reviews from "./data";
import { useState } from "react";
import Reviews from "./Reviews";
function App() {
  const [index, setIndex] = useState(0);
  const data = reviews[index];

  const nextReview = () => {
    setIndex((prev) => {
      const next = prev + 1;
      // console.log(reviews.length);
      if (next > reviews.length - 1) return 0;
      return next;
    });
  };
  const prevReview = () => {
    setIndex((pre) => {
      const next = pre - 1;
      if (next < 0) return reviews.length - 1;
      return next;
    });
  };

  const random = () => {
    const rIndex = Math.ceil(Math.random() * reviews.length - 1);
    setIndex(rIndex);
  };

  return (
    <main>
      <Reviews
        data={data}
        nextReview={nextReview}
        prevReview={prevReview}
        random={random}
      />
    </main>
  );
}

export default App;
