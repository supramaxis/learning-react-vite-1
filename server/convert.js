const express = require('express');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const multer = require('multer');
const fs = require('fs');
const { spawn } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(
  cors({
    origin: 'http://192.168.100.183:5173'
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

let counter = 1;

app.post('/upload', upload.single('file'), (req, res) => {
  const inputFile = path.join(__dirname, req.file.filename);
  let outputFile = path.join(__dirname, path.parse(inputFile).name + '.mp3');
  while (fs.existsSync(outputFile)) {
    outputFile = path.join(
      __dirname,
      path.parse(inputFile).name + '_' + counter++ + '.mp3'
    );
  }
  ffmpeg(inputFile)
    .toFormat('mp3')
    .on('error', err => {
      console.error(err);
      res.status(500).send({ error: 'Error during conversion' });
    })
    .on('end', () => {
      res.send({
        audioUrl: `http://localhost:3000/${path.parse(outputFile).base}`
      });
    })
    .save(outputFile);
});

// app.post('/trim-audio', async (req, res) => {
//   const inputFile = req.query.inputFile;
//   const outputFile = req.query.outputFile;
//   const startTime = req.query.startTime;
//   const endTime = req.query.endTime;

//   if (!inputFile || !outputFile || !startTime || !endTime) {
//     return res.status(400).send('Bad Request: Missing required parameters');
//   }

//   try {
//     await trimAudio(inputFile, outputFile, startTime, endTime);
//     res.send(`Trimmed audio saved to ${outputFile}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error: Failed to trim audio');
//   }
// });

// async function trimAudio(inputFile, outputFile, startTime, endTime) {
//   return new Promise((resolve, reject) => {
//     const ffmpeg = spawn('ffmpeg', [
//       '-i',
//       inputFile,
//       '-ss',
//       startTime,
//       '-to',
//       endTime,
//       '-c',
//       'copy',
//       outputFile
//     ]);

//     ffmpeg.stderr.on('data', data => {
//       console.error(`ffmpeg stderr: ${data}`);
//     });

//     ffmpeg.on('close', code => {
//       if (code === 0) {
//         resolve();
//       } else {
//         reject(code);
//       }
//     });
//   });
// }

app.post('/trim-audio', upload.single('inputFile'), (req, res) => {
  const startTime = `00:${req.body.startTime}:${req.body.startTime}`;
  const endTime = `00:${req.body.endTime}:${req.body.endTime}`;
  const inputPath = req.file.path;
  const outputPath = `output/${req.body.outputFile}`;

  ffmpeg(inputPath)
    .setStartTime(startTime)
    .setDuration(endTime)
    .output(outputPath)
    .on('end', () => {
      res.send('Trimmed audio saved');
    })
    .run();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

