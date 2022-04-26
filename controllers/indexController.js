module.exports = {
    index: (req,res) => {
        res.status(200).json({welcome: 'Welcome to Banca&Seguros', data: `https://backbys.herokuapp.com/api/inscriptos`});
    }
}