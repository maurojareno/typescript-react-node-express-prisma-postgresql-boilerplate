import { Request, Response } from 'express';
import { getAllSamples } from '../application/get-all-samples.usecase';

export const getSamplesController = async (_req: Request, res: Response) => {
  try {
    const samples = await getAllSamples();
    res.json(samples);
  } catch (error) {
    console.error('Error getting samples:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};