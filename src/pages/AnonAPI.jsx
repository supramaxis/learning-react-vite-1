import React, { useEffect } from "react";
import { useState } from "react";

export const AnonAPI = () => {
  // const handleFileUpload = e => {
  //   const data = new FormData();
  //   data.append("file", e.target.files[0]);

  //   const url = "https://anonfiles.p.rapidapi.com/upload";

  //   const options = {
  //     method: "POST",
  //     url: "https://anonfiles.p.rapidapi.com/upload",
  //     headers: {
  //       "X-RapidAPI-Key": "d142d25536msh51f91ab66b1d7d8p15dcebjsn2adfd505df48",
  //       "X-RapidAPI-Host": "anonfiles.p.rapidapi.com",
  //       ...data.getHeaders()
  //     },
  //     data: data
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [result, setResult] = useState();
  const [resultName, setResultName] = useState();

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const data = new FormData();

    data.append("file", selectedFile);

    const url =
      "https://http-cors-proxy.p.rapidapi.com/https://api.anonfiles.com/upload";

    const options = {
      method: "POST",
      headers: {
        origin: "https://api.anonfiles.com/",
        "x-requested-with": "https://api.anonfiles.com/",
        "X-RapidAPI-Key": "fbb6f3aec1msha308e3de6332285p153764jsn3835199ee6b6",
        "X-RapidAPI-Host": "http-cors-proxy.p.rapidapi.com"
      },
      body: data
    };

    fetch(url, options)
      .then(response => response.json())
      .then(res => {
        console.log(res.data.file.url.short);
        // console.log(res.data.file.metadata);
        setResultName(res.data.file.metadata);
        setResult(res.data.file);
      })
      .catch(error => console.log("error", error));
  };

  const meta = () => {
    const mta = Object.values(result);
    console.log(mta);
  };

  const employee = {
    id: 1,
    name: "Bob",
    salary: 123
  };

  console.log(resultName);

  return (
    <>
      <div>
        <input type="file" name="file" onChange={changeHandler} />
        {isFilePicked ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{""}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}

        <button onClick={handleSubmission}>Submit</button>
      </div>
      {result ? (
        <>
          <div className="flex items-center justify-center">
            <p>File Name: {resultName.name}</p>
          </div>
          <div className="flex items-center justify-center">
            <a href={result.url.short}>Link: {result.url.short}</a>
          </div>
        </>
      ) : (
        <p>no result</p>
      )}
    </>
  );
};
