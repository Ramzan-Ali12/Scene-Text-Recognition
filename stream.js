const fs = require('fs');

const readStream = fs.createReadStream('./docs/read.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/write.txt');

readStream.on('data', chunk => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream);