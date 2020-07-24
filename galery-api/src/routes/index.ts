import { Router } from 'express';
import multer from '../libs/multer';
import {createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto} from '../controllers/photo.controller';


const router = Router();

router.route('/photos')
    .post(multer.single('image'),createPhoto)
    .get(getPhotos);

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);
export default router;