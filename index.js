const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server startred on port 3001`);
})
db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        })
    })
    .catch((err) => {
        console.log(err);
     })

    app.post('/hotel', async (req, res) => {
        const data = req.body;
        try {
            const hotel = await db.hotel.create(data);
            res.send(hotel);
        } catch (error) {}
        res.send({message: error.message});
        });

      app.get('/hotel', async (req, res) => {
        try {
            const hotel = await db.hotel.findAll();
            res.send(hotel);
        } catch (error) {
            res.send({message: error.message});
        }
    });

    app.put('/hotel/:ID', async (req, res) => {
        const ID = req.params.ID;
        const data = req.body;
        try {
            const hotel = await db.hotel.findByPk(ID);
            if (!hotel) {
                return res.status(404).send({ message: 'hotel not found' });
            }
            await komik.update(data);
            res.send({ message: 'hotel berhasil diupdate', hotel });
        } catch (error) {
            res.send({ message: error.message });
        }
    });

    app.delete('/komik/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const komik = await db.Komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik not found' });
        }
        await komik.destroy();
        res.send({ message: 'Komik berhasil dihapus' });
        } catch (error) {
            res.status(500).send(err)
        }
    });

    


