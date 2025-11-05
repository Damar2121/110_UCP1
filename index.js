const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


db.sequelize.sync()
    .then((result) => {
        app.listen(PORT, () => { 
            console.log(`Server is running on port ${PORT}`); 
        })
    })
    .catch((err) => {
        console.log("Database sync error: ", err); 
    })

app.post('/hotel', async (req, res) => {
    const data = req.body;
    try {
        const hotel = await db.Hotel.create(data);
        res.status(201).send(hotel); 
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }

});

app.get('/hotel', async (req, res) => {
    try {
        const hotel = await db.Hotel.findAll();
        res.send(hotel);
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
});

app.put('/hotel/:ID', async (req, res) => {
    const ID = req.params.ID;
    const data = req.body;
    try {
        const hotel = await db.Hotel.findByPk(ID);
        if (!hotel) {
            return res.status(404).send({ message: 'hotel not found' });
        }
        await hotel.update(data); 
        res.send({ message: 'hotel berhasil diupdate', hotel });
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
});

app.delete('/hotel/:ID', async (req, res) => {
    const ID = req.params.ID;
    try {
        const hotel = await db.Hotel.findByPk(ID);
        if (!hotel) {
            return res.status(404).send({ message: 'hotel not found' });
        }
        await hotel.destroy();
        res.send({ message: 'hotel berhasil dihapus' });
    } catch (error) {
        res.status(500).send({ message: error.message }); 
    }
});