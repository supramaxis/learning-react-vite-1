import React, { useState } from 'react';
import axios from 'axios';

const TrimAudio = () => {
  const [inputFile, setInputFile] = useState('');
  const [outputFile, setOutputFile] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = event => {
    setInputFile(event.target.files[0]);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setMessage('Trimming audio...');

    const formData = new FormData();
    formData.append('inputFile', inputFile);
    formData.append('outputFile', outputFile);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);

    try {
      await axios.post('http://localhost:3000/trim-audio', formData);
      setMessage(`Trimmed audio saved to ${outputFile}`);
    } catch (error) {
      console.error(error);
      setMessage('Failed to trim audio');
    }
  };

  return (
    <div className='centeredDiv'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='inputFile'>Input File:</label>
          <input type='file' id='inputFile' onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor='outputFile'>Output File:</label>
          <input
            type='text'
            id='outputFile'
            value={outputFile}
            onChange={event => setOutputFile(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='startTime'>Start Time:</label>
          <input
            type='text'
            id='startTime'
            value={startTime}
            onChange={event => setStartTime(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='endTime'>End Time:</label>
          <input
            type='text'
            id='endTime'
            value={endTime}
            onChange={event => setEndTime(event.target.value)}
          />
        </div>
        <button type='submit'>Trim Audio</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default TrimAudio;

