import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  fiction: [
    { name: "The Alchemist", rating: "4.7/5", author: "by Paulo Coelho" },
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      author: "by Amish Tripathi"
    },
    {
      name: "Harry Potter and the Chamber of Secrets",
      rating: "4.43/5",
      author: "by J.K. Rowling, Mary GrandPré"
    },
    {
      name: "2 States: The Story of My Marriage",
      rating: "3.43/5",
      author: "by Chetan Bhagat"
    },
    {
      name:
        "The Water Phoenix: A Memoir of Childhood Abuse, Healing and Forgiveness",
      rating: "3.5/5",
      author: "by Rituparna Chatterjee"
    }
  ],
  business: [
    {
      name: "Dhirubhai Ambani: Against All Odds",
      rating: "4.2/5",
      author: " by Krishnamurthy"
    },
    {
      name: "Never Split the Difference",
      rating: "3.5/5",
      author: " by Christopher Voss and Tahl Raz"
    },
    {
      name: "Dream with your open eyes",
      rating: "3.9/5",
      author: "by Ronnie Screwvala"
    },
    {
      name: "Loonshots",
      rating: "4.6/5",
      author: "by Safi Bahcall"
    }
  ],
  biography: [
    {
      name: "Wings of Fire",
      rating: "4.8/5",
      author: "by Arun Tiwari and Dr. A. P. J. Abdul Kalam"
    },
    {
      name: "An Autobiography: The story of My Experiments with Truth",
      rating: "4.3/5",
      author: "by Mahatma Gandhi"
    },
    {
      name: "Mind Master: Winning Lessons from a Champion's Life",
      rating: "4.4/5",
      author: "by Susan Ninan and Viswanathan Anand"
    },
    {
      name: "Playing It My Way",
      rating: "4/5",
      author: "by Boria Majumdar and Sachin Tendulkar"
    }
  ],
  javascript: [
    {
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      rating: "4/5",
      author: "by Marijn Haverbeke"
    },
    { name: "You Don't Know JS", rating: "4.9/5", author: "by Kyle Simpson" },
    {
      name: "JavaScript: The Good Parts",
      rating: "4.4",
      author: "Douglas Crockford"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <header>
        <h1 style={{ color: "whitesmoke" }}>
          {" "}
          📚 <u style={{ color: "greenyellow" }}>Goodbooks</u> 📚
        </h1>
      </header>

      <p style={{ fontSize: "larger" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid #141414",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", padding: "0.5rem" }}>
                {" "}
                🕮 {book.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.5rem" }}>
                {" "}
                ⭐ {book.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller", padding: "0.5rem" }}>
                {" "}
                ✍ {book.author}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer
        style={{
          textAlign: "center",
          // margin:"1rem",
          borderTopRightRadius: "1rem",
          padding: "2rem",
          backgroundColor: "greenyellow"
        }}
      >
        <div>
          <h2 style={{ color: "#141414" }}>Connect with me!</h2>
          <a
            style={{
              padding: "0.5rem",
              backgroundColor: "#141414",
              color: "greenyellow",
              borderRadius: "1rem",
              textDecoration: "none"
            }}
            href="https://github.com/yogesh1006"
          >
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
