const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Permite solicitudes desde otros dominios

const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Ruta para servir el archivo version.txt
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'version.txt');

    // Leer el archivo version.txt
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Si ocurre un error al leer el archivo, responder con un mensaje de error
            console.error('Error al leer el archivo:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        // Enviar el contenido del archivo como respuesta
        res.status(200).send(data);
    });
});

// Configurar el puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
