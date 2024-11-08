// server.js
import express from 'express';
import path from 'path';

const app = express();

// Servir los archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Cualquier otra ruta debe devolver el archivo 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('App is running on port 3000');
});
