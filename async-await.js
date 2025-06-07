const fs = require('fs').promises;

async function processFiles() {
    try {
        const data = await fs.readFile('input.txt', 'utf8');
        console.log('Read from input.txt:', data);

        const modifiedData = data.toUpperCase();
        await fs.writeFile('output.txt', modifiedData);
        console.log('Written to output.txt');

        const newData = await fs.readFile('output.txt', 'utf8');
        console.log('Read from output.txt:', newData);
    } catch (err) {
        console.error('Error during file processing:', err);
    }
}

processFiles();
