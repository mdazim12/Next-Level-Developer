import { Router } from "express";
import { profileController } from "./profile.controller";

const router = Router();


router.post('/',profileController.createProfile);
router.get('/', profileController.getAllProfile );
router.get('/:id', profileController.getSingleProfile)
router.put('/:id',profileController.updateProfile)



export const profileRoute = router;