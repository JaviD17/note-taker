const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./Develop/routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('./Develop/public'));

// use apiRoutes

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Api server now on port ${PORT}!`)
});