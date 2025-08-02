import { useState, useEffect } from 'react';
import { getSamples } from '../services/sampleList.api';
import type { Sample }  from '../types';

export function useSamples() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSamples()
      .then(setSamples)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { samples, loading, error };
}