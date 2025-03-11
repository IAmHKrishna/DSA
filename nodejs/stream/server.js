const http = require('http');
const fs = require('fs');
const {downloadBadWayfile, downloadBadWayVideoFile,donloadGoodWayFile,
    copyBigFileUsingBadWay,copyBigFileUsingGoodWay,copyBigFilebetterWay,
    createReadableCustomStream,createReadableWriteableCustomStream,
    createReadableWriteableWithObjCustomStream,fileStringProcess,
    fileStringProcessWithPipe,
    fileStringProcessWithErrorHandling,
    fileProcessingWithBetterErrorHandling

} = require('./stream');
const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
    if (req.url !== '/') {
        return res.end();
    }

    // =============================================
     // Downloading big file bad way
    //  downloadBadWayfile(req, res);
    //  downloadBadWayVideoFile(req, res);
    // =============================================
    // donload good way fole
    // donloadGoodWayFile(req, res);

    // copyBigFileUsingBadWay(req, res);
    // copyBigFileUsingGoodWay(req, res);
    // copyBigFilebetterWay(req, res);
    // createReadableCustomStream(req, res);
    // createReadableWriteableCustomStream(req, res);
    // createReadableWriteableWithObjCustomStream(req, res);
    // fileStringProcess(req, res);
    //   fileStringProcessWithPipe(req, res);
    //   fileStringProcessWithErrorHandling(req, res);
    fileProcessingWithBetterErrorHandling(req, res);


});

const PORT = process.env.PORT || 5700;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));