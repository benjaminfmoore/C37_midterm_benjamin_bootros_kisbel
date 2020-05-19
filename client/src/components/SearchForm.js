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
        console.log(res);
        const parsedLyrics = (res.lyrics || '').split('\n');
        if (parsedLyrics.length > 1) {
          setLyrics(parsedLyrics);
        } else {
          setLyrics(['Sorry, no matches found!']);
        }
      });
  };

  // const LyricLines = () => {
  //   const lyricsOnScreen = { lyrics };
  //   let newLyricsOnScreen = lyricsOnScreen.replace('\n', '\\n');
  // };

  return (
    <>
      <Form className="searchForm" onSubmit={handleSubmit} style={{display: 'flex'}}>

  <div>
        <Form.Row>
          <Form.Control
            id="artistSearch"
            size="lg"
            type="text"
            placeholder="enter artist name... "
            defaultValue={artist}
            onChange={(e) => setArtist(e.target.value)}
            autoComplete="off"
            autoFocus 
          />
        </Form.Row>

        <Form.Row>
          <Form.Control
            id="songSearch"
            size="lg"
            type="text"
            placeholder="enter song title..."
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
          />
        </Form.Row>
        </div>

        {/* <div id="break"><br></br></div> */}
        <button type="submit" className="btn btn-light">Submit</button>
      </Form>

      {lyrics &&
        <div id="lyrics" className="p-5 shadow-lg">
          {lyrics.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchForm;
