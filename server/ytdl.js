const express = require('express');
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta para procesar la solicitud de descarga
app.post('/download', async function (req, res) {
  const link = req.body.url; // Obtener el enlace del video de YouTube enviado desde el formulario

  // Validar el enlace de YouTube
  if (!ytdl.validateURL(link)) {
    res.status(400).send('El enlace proporcionado no es válido.');
    return;
  }

  // Descargar el video de YouTube
  ytdl(link, { quality: 'highestaudio' })
    .pipe(fs.createWriteStream('video.mp4'))
    .on('finish', function () {
      console.log('Descarga del video completa');

      // Convertir el video a MP3
      ffmpeg('video.mp4')
        .audioBitrate(128)
        .saveToFile('audio.mp3')
        .on('end', function () {
          console.log('Conversión completa');

          // Descargar el archivo MP3 resultante
          const file = `${__dirname}/audio.mp3`;
          const video = `${__dirname}/video.mp4`;
          res.download(file, function (err) {
            if (err) {
              console.log('Error al descargar el archivo: ' + err);
            } else {
              console.log('Archivo descargado correctamente');
            }
            // Eliminar el archivo MP3 resultante después de descargarlo
            fs.unlink(file, function (err) {
              if (err) {
                console.log('Error al eliminar el archivo: ' + err);
              } else {
                console.log('Audio eliminado correctamente');
              }
            });

            // Eliminar el archivo MP4 resultante después de descargarlo
            fs.unlink(video, function (err) {
              if (err) {
                console.log('Error al eliminar el archivo: ' + err);
              } else {
                console.log('Video eliminado correctamente');
              }
            });
          });
        });
    });
});

// Iniciar el servidor en el puerto 3000
app.listen(4000, function () {
  console.log('Servidor iniciado en el puerto 4000');
});

