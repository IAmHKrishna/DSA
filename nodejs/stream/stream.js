const fs = require('fs');
const { Readable, Writable, Transform, pipeline } = require('stream');
const downloadBadWayfile = (req, res) => {
    const file = fs.readFileSync('sample.txt');
    return res.end(file);
}


const downloadBadWayVideoFile = (req, res) => {
    const file = fs.readFileSync('webhooks.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    return res.end(file);
}

const donloadGoodWayFile = (req, res) => {
    const file = fs.createReadStream('sample.txt');
    return file.pipe(res);
}

const donloadGoodWayVideoFile = (req, res) => {
    const file = fs.createReadStream('webhooks.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    return file.pipe(res);
}

const copyBigFileUsingBadWay = (req, res) => {
    const file = fs.readFileSync('sample.txt');
    fs.writeFileSync('output.txt', file);
    return res.end();
}

const copyBigFileUsingGoodWay = (req, res) => {
    const file = fs.createReadStream('sample.txt');
    const writeStream = fs.createWriteStream('output.txt');
    file.pipe(writeStream);
    return res.end();
}
const copyBigFilebetterWay = (req, res) => {
    const readStream = fs.createReadStream('sample.txt');
    const writeStream = fs.createWriteStream("output.txt");
    readStream.on("data", (chunk) => {
        writeStream.write(chunk);
    });
    return res.end();
}

const createReadableCustomStream = (req, res) => {
    const readableStream = new Readable({
        read() { }
    });
    readableStream.on('data', (chunk) => {
        console.log('data: ', chunk.toString());
    });
    readableStream.push('Hello World');
    return res.end();
}


const createReadableWriteableCustomStream = (req, res) => {
    const readableStream = new Readable({
        highWaterMark: 2,
        read() { }
    })
    const writeableStream = new Writable({
        write(s) {
            console.log('data: ', s.toString());
        }
    })
    readableStream.on('data', (chunk) => {
        // console.log('data: ', chunk.toString());
        writeableStream.write(chunk);
    });

    readableStream.push('Hello World');
    return res.end();
}

const createReadableWriteableWithObjCustomStream = (req, res) => {
    const readableStream = new Readable({
        objectMode: true,
        highWaterMark: 2,
        read() { }
    })
    const writeableStream = new Writable({
        objectMode: true,
        write(s) {
            console.log('data: ', s);
        }
    })
    readableStream.on('data', (chunk) => {
        console.log('readableStream data: ', chunk);
        writeableStream.write(chunk);
    });

    readableStream.push({
        id: 1,
        name: 'Rahul'
    });
    return res.end();
}

const fileStringProcess = (req, res) => {
    const readableStream = fs.createReadStream('sample.txt');
    const writeableStream = fs.createWriteStream("output.txt");
    readableStream.on("data", (chunk) => {
        // process
        const finalString = chunk.toString().replaceAll(/ipsum/gi, 'cool').toUpperCase();;
        writeableStream.write(finalString);
    })
    // readableStream.pipe(writeableStream);
    return res.end();
}


const uppercaseWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

const removeUnwantedWordProcessing = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().replaceAll(/ipsum/gi, 'cool'));
    }
});



const fileStringProcessWithPipe = (req, res) => {
    const readableStream = fs.createReadStream('sample.txt');
    const writeableStream = fs.createWriteStream("output.txt");
    readableStream
        .pipe(removeUnwantedWordProcessing)
        .pipe(uppercaseWordProcessing)
        .pipe(writeableStream);
    return res.end();
}
const fileStringProcessWithErrorHandling = (req, res) => {
    const readableStream = fs.createReadStream('sample.txt');
    const writeableStream = fs.createWriteStream("output.txt");
    readableStream
        .pipe(removeUnwantedWordProcessing)
        .on('error', (err) => {
            console.log('error: ', err);
        })
        .pipe(uppercaseWordProcessing)
        .on('error', (err) => {
            console.log('error: ', err);
        })
        .pipe(writeableStream)
        .on('error', (err) => {
            console.log('error: ', err);
        })
    return res.end();
}

const fileProcessingWithBetterErrorHandling = (req, res) => {
    const readableStream = fs.createReadStream('sample.txt');
    const writeableStream = fs.createWriteStream("output.txt");
    pipeline(
        readableStream,
        removeUnwantedWordProcessing,
        uppercaseWordProcessing,
        writeableStream,
        (err) => {
            if (err) {
                console.log('error: ', err);
            }
        }
    )
    return res.end();
}


module.exports = {
    downloadBadWayfile,
    downloadBadWayVideoFile,
    donloadGoodWayFile,
    donloadGoodWayVideoFile,
    copyBigFileUsingBadWay,
    copyBigFileUsingGoodWay,
    copyBigFilebetterWay,
    createReadableCustomStream,
    createReadableWriteableCustomStream,
    createReadableWriteableWithObjCustomStream,
    fileStringProcess,
    fileStringProcessWithPipe,
    fileStringProcessWithErrorHandling,
    fileProcessingWithBetterErrorHandling,
}