const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }
    console.log('Read from input.txt:', data);

    const modifiedData = data.toUpperCase();

    fs.writeFile('output.txt', modifiedData, (err) => {
        if (err) {
            console.error('Error writing to output file:', err);
            return;
        }
        console.log('Written to output.txt');

        fs.readFile('output.txt', 'utf8', (err, newData) => {
            if (err) {
                console.error('Error reading output file:', err);
                return;
            }
            console.log('Read from output.txt:', newData);
        });
    });
});
