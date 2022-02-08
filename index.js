// *****************************************************************************
// Load Dependencies
// *****************************************************************************

const express = require('express');

// *****************************************************************************
// Initialize Application Server
// *****************************************************************************

const app = express();

// *****************************************************************************
// Routes
// *****************************************************************************

app.get("/", (req, res) => {
  res.send("<h2>Maybe it works. Who knows?</h2>").end();
})

// *****************************************************************************
// Start Listener
// *****************************************************************************

app.listen(3000);