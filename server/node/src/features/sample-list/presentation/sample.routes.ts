import { Router } from 'express';
import { getSamplesController } from './sample.controller';

export const sampleRoutes = Router();

sampleRoutes.get('/', getSamplesController);