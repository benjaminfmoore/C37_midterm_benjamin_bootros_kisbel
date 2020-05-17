import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const SearchForm = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  // function validateForm() {
  //   return artist.length > 0 && title.length > 0;
  // }

  const handleSubmit = (event) => {
    console.log(artist, title);
    event.preventDefault();
    fetch(`/api/lyrics?artist=${artist}&title=${title}`)
      .then((data) => {
        return data.json();
      })
      .then((res = {}) => {
        const parsedLyrics = (res.lyrics || '').split('\n');

        setLyrics(parsedLyrics);
      });
  };

  // const LyricLines = () => {
  //   const lyricsOnScreen = { lyrics };
  //   let newLyricsOnScreen = lyricsOnScreen.replace('\n', '\\n');
  // };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Control
            id="artistSearch"
            size="lg"
            type="text"
            placeholder="Seaching artist"
            defaultValue={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </Form.Row>
        <Form.Row>
          <Form.Control
            id="songSearch"
            size="lg"
            type="text"
            placeholder="searching title"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Row>
        <button type="submit">Submit</button>
      </Form>
      {/* {apiData && apiData.map((recipe) => <div>{recipe.strMeal}</div>)} */}

      {/* {lyrics ? <p>{LyricLines}</p> : <p>Search for lyrics already</p>} */}
      {/* {lyrics ? {lyrics.lyrics} : <p>Search for Lyrics</p>} */}
      {lyrics ? (
        <div>
          {lyrics.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ) : (
        <p>Search for lyrics already</p>
      )}
    </>
  );
};

export default SearchForm;
