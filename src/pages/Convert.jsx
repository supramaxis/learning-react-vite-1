import React, { useState, useEffect } from 'react';

function Convert() {
  const [audioUrl, setAudioUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error during upload');
        }
      })
      .then(data => {
        setAudioUrl(data.audioUrl);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className='centeredDiv'>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {audioUrl ? (
        <audio controls src={audioUrl} />
      ) : (
        <p>No audio file uploaded</p>
      )}
    </div>
  );
}

export default Convert;

