const express = require('express');
const format = require('date-format');
const app = express();

const PORT = process.env.PORT || 3000;

// swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const getDate = () => format.asString('dd[MM] - hh:mm:ss', new Date());

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/api/v1/instagram', (req, res) => {
    const insta = {
        username: "dummyUsername",
        followers: 44,
        follows: 70,
        date: getDate()
    };

    res.status(200).json(insta);
});

app.get('/api/v1/linkedin', (req, res) => {
    const linkedin = {
        username: "abhinav1509",
        followers: 86,
        follows: 40,
        date: getDate()
    };

    res.status(200).json(linkedin);
});

app.get('/api/v1/:id', (req, res) => {
    res.status(200).json({params: req.params.id});
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}, url: http://localhost:${PORT}/`);
});