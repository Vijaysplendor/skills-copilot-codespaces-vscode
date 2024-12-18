// create web server
// request -> response
// request: req, response: res
app.get('/comment', (req, res) => {
    // request: req
    // response: res
    // res.send('Hello, World!');
    // res.send('안녕하세요!');

    // send JSON
    res.send({
        message: 'Hello, World!',
    });
});