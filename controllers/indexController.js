module.exports = {
    index: (req,res) => {
        res.status(200).json({welcome: 'Welcome to Banca&Seguros', data: `http://localhost:4000/api/registerConfirmed`});
    }
}