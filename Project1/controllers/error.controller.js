const getError = (req, res) => {
    res.status(404).render('404', {pageTitle: 'Page not found', path: '/dummy'});
}

module.exports = {getError}