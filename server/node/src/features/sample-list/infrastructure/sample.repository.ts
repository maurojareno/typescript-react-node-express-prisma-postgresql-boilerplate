import { prisma } from '../../../shared/config/prisma';
import { Sample } from '../domain/sample.entity';

export const findAllSamples = async (): Promise<Sample[]> => {
  return prisma.sample.findMany();
};