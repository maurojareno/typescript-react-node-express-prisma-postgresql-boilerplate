import { findAllSamples } from '../infrastructure/sample.repository';
import { Sample } from '../domain/sample.entity';

export const getAllSamples = async (): Promise<Sample[]> => {
  return findAllSamples();
};