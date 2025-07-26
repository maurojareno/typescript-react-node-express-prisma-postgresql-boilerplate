import { useSamples } from '../hooks/useSamples';

export function SampleList() {
  const { samples, loading, error } = useSamples();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {samples.map(sample => (
        <li key={sample.id}>
          Name: {sample.name} — Email: {sample.email}
          
        </li>
      ))}
    </ul>
  );
}