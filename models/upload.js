const multer = require('multer');

module.exports = {
    upload:multer({dest:'./public/images/user'}).fields([
        {name: 'file1'},
        {name: 'file2'},
        {name: 'file3'},
        {name: 'file4'},
        {name: 'file5'}
    ])
}