import express from 'express';
const Route = express.Router();

import HomeController from '../app/Http/Controllers/HomeController';


Route.get('/',HomeController.index);


export default Route;