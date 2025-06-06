const app = express();
const PORT = 3001;

// Enable CORS for your Vite frontend (running on port 3000)
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend connected!" });
});

// Contact route (create this later)
app.post('/api/contact', (req, res) => {
  console.log('Form data:', req.body);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});