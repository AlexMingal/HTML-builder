const fs = require('fs');

const { dirname } = require('path');

const path = require('path');

const {stdin, stdout} = process;

const out = fs.WriteStream(path.join(__dirname, 'data.txt'));

stdout.write('Wake up Neo... enter something. (To quit type \'exit\' or press \'Ctrl + C\' ń\n');


stdin.on('data', data => {
    const text = data.toString();
    if (text.includes('exit')){
        process.exit();
    } else out.write(text);    
})

process.on('SIGINT', () => {
    process.exit();    
})

process.on('exit', () => {
    stdout.write('Matrix has you! Goodbye!');    
})