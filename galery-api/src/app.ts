import express from 'express';
import morgan from 'morgan';
const app = express();
import path from 'path';
import indexRoutes from './routes/index';

// Settings
// Asigns a variable port and its value
app.set('port', process.env.PORT || 3000); // When deploying de API to a host it could take either the new port or keep de 3000

// Middlewares
app.use(morgan('dev')); // shows petitions on console
app.use(express.json()); // Allows reading json files
// routes
app.use('/api', indexRoutes);

// This app will store images
app.use('/uploads', express.static(path.resolve('uploads')));



export default app;