require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/', (req, res) => res.json({ message: 'SocialApp API OK' }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connecté');
    app.listen(process.env.PORT, '0.0.0.0', () =>
      console.log(`Serveur sur http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error('Erreur MongoDB :', err.message));
