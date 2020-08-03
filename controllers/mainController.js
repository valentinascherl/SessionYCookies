let mainController={
    index: function (req, res) {
        res.render('index', {color: req.session.color});
    },
    color: function (req, res) {
        req.session.color = req.body.color;
        res.redirect('/');
    },
    queColorEs: function (req, res) {
        res.render('queColorEs', {color: req.session.color});
    },
    borrar: function (req, res) {
        
    }
}

module.exports=mainController;