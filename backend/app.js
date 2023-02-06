const express = require('express');
const fs = require('fs');
const cors = require('cors');


const app = express();
const port = 3333;
app.use(cors());
app.use(express.json());


app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync('../src/assets/data.json', 'utf-8'));
  res.send(data);
});


app.post('/data', (req, res) => {
    fs.readFile('../src/assets/data.json', 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send({ message: 'Error reading data.json' });
      } else {
        const jsonData = JSON.parse(data);
        jsonData.title = req.body.title;
        jsonData.description = req.body.description;
        fs.writeFile('../src/assets/data.json', JSON.stringify(jsonData), 'utf-8', err => {
          if (err) {
            res.status(500).send({ message: 'Error writing to data.json' });
          } else {
            res.status(200).send({ message: 'Data written to data.json' });
          }
        });
      }
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
