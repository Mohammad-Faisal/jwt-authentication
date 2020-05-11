var aws = require('aws-sdk');

module.exports = {
    uploadFile: async (req, res) => {


        console.log('inside the uploadFile function  ' , req);

        aws.config.update({
            accessKeyId: 'AKIAIP6NYMTRYQEBYMWQ',
            secretAccessKey: '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'
            ,
            region: 'eu-west-1'
        })
        var s3 = new aws.S3()
        console.log('req.files >>>', req.files); // eslint-disable-line

        sampleFile = req.files.sampleFile; 
        s3.putObject({
            Bucket: 'rokkhi',
            Body: fs.readFileSync(localImage),
            Key: 'imageRemoteName'
        })
            .promise()
            .then(response => {
                console.log(`done! - `, response)
                console.log(
                    `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: 'imageRemoteName' })}`
                )
                res.send(
                    `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: 'imageRemoteName' })}`
                )
            })
            .catch(err => {
                console.log('failed:', err)
            })






        // res.statusCode = 200;
        // res.json(req.file);
    }
}