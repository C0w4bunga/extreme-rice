const express = require('express');
const fs = require('fs');

const app = express()
const port = 3000

app.get('/gigs', (req, res) => {
    try {
        const gigsFileContent = fs.readFileSync('./gigs.csv', { encoding: 'utf-8'} );
        const gigs = 
            gigsFileContent.split('\n')
                .filter(line => line !== '')
                .map(line => line.split(',').map(elem => /"(.*)"/.exec(elem)[1]))
                .map(tuple => ({ date: tuple[0], name: tuple[1]}))        
    
        res.status(200).send(gigs);
    } catch (error) {
        console.log("Failed to read ./gigs.csv", error)
        res.status(200).send([]);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))