import express from 'express';
import { sampleRoutes } from './features/sample-list/presentation/sample.routes';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is healthy' });
});

app.use('/api/samples', sampleRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});