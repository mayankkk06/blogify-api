const express = require('express');
const app = express();

// import router
const postRoutes = require('./src/routes/posts.routes');

// mount router
app.use('/api/v1/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
