import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function QuoteBox() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function getNewQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setText(data.content);
        setAuthor(data.author);
        console.log(text + author);
      });
  }

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">{text}</p>
      <p id="author">{author}</p>
      <Button variant="primary" id="new-quote" onClick={getNewQuote}>
        New
      </Button>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        <img src="/public/twitter.png" style={{width:"19px"}}/>
      </a>
    </div>
  );
}

export default QuoteBox;
