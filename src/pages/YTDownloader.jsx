import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function App() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setUrl(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        `http://localhost:4000/download`,
        { url: url },
        { responseType: 'blob' }
      )
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]), {
          type: 'audio/mpeg'
        });
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'audio.mp3');
        document.body.appendChild(link);
        link.click();
        setMessage('Archivo descargado correctamente');
        setTimeout(() => {
          setMessage('');
        }, 10000);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <h1 className='title-container'>YouTube Downloader</h1>
      <Container>
        <form onSubmit={handleSubmit}>
          <div className='centeredDiv'>
            <label className='label'>
              Enter YouTube URL:
              <input
                type='text'
                value={url}
                onChange={handleChange}
                className='form__input'
              />
            </label>
          </div>
          <button type='submit' className='btn'>
            Download
          </button>
          {message && <p className='centeredP'>{message}</p>}
        </form>
      </Container>
    </>
  );
}

export default App;

