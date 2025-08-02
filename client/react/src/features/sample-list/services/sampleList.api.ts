import type { Sample } from '../types';

export const getSamples = async (): Promise<Sample[]> => {
  const res = await fetch('http://localhost:4000/api/samples');
  if (!res.ok) throw new Error('No se pudo obtener samples');
  return res.json();
};