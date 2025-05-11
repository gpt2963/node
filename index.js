const express = require('express');
const app = express();

// Root endpoint
app.get('/', (req, res) => {
  res.json({ response: "Congratulation on Your First deployment" });
});

// /hello endpoint
app.get('/hello', (req, res) => {
  res.json({ response: "Hello World" });
});

// /ready endpoint
app.get('/ready', (req, res) => {
  res.json({ response: " Great!, It works!" });
});

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export for testing
module.exports = app;
