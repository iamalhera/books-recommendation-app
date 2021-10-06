import React, { useState } from "react";
import "./styles.css";

const bookDB = {
  Discovering_Yourself: [
    { name: "Quiet",
      rating: "4/5",
      description: "The Power of Introverts in a World That Can't Stop Talking" },
    { name: "Man's Search For Meaning",
      rating: "3.5/5",
      description: "It is the possibility of finding meaning in life regardless of circumstances." },
    { name: "The Art of Thinking",
      rating: "4/5",
      description: "It is a full compendium of the psychological biases that once helped us survive but now only hinder us from living our best life." }
  ],

  Money_And_Investing: [
    { name: "Think and Grow Rich",
      rating: "5/5",
      description: "It is the combined wisdom from more than 500 of America's most successful individuals." },
    { name: "The Little Book of Common Sense Investing",
      rating: "3/5",
      description: "The books core message is buy low cost index funds and hold them forever." },
    { name: "The Psychology of Money",
      rating: "3.5/5",
      description: "It is a book about investing, personal finance and business decisions." }
  ],
  Psychological_Thrillers: [
    { name: "Before I Go To Sleep",
      rating: "4/5",
      description: "The novel is a psychological thriller about a woman suffering from anterograde amnesia." },
    { name: "The Silent Patient",
      rating: "3/5",
      description: "The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband" },
    { name: "7 Khoon Maaf",
      rating: "3.5/5",
      description: "7 Khoon Maaf tells the story of an Anglo-Indian woman, Susanna Anna-Marie Johannes who murders all her husbands." }
  ]
};

export default function App() {
  const [chosenGenre, setGenre] = useState("Discovering_Yourself");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation App 📚</h1>
      <h3>Hello! checkout my favourite books</h3>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ width: "50%", margin: "auto" }}>
        <ul>
          {bookDB[chosenGenre].map((book) => (
            <li key={book.name}>
              <div style={{fontSize: "larger", fontWeight:"bold"}}> Title: {book.name} </div>
              <div> Rating: {book.rating} </div>
              <div> Description: {book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
