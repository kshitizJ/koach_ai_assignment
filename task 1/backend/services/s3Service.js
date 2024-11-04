const { awsConfig, bucketName } = require("../config/dotenv");
const { S3Client, ListObjectsV2Command, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    credentials: {
        accessKeyId: awsConfig.accessKeyId,
        secretAccessKey: awsConfig.secretAccessKey
    },
    region: awsConfig.region
})

const storeJson = async (req, res) => {
    try {
        const data = req.body;
        const fileName = `json-${Date.now()}.json`;

        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: JSON.stringify(data),
            ContentType: 'application/json'
        };

        const result = await s3.send(new PutObjectCommand(params));

        console.log(result);

        res.status(200).json({
            e_tag: result.ETag,
            url: `https://${bucketName}.s3.amazonaws.com/${fileName}`
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to store JSON data' });
    }
}

const retrieveJson = async (req, res) => {
    try {
        const params = { Bucket: bucketName };
        const fileList = await s3.send(new ListObjectsV2Command(params));
        const jsonData = [];
        console.log(fileList);

        if (!fileList.Contents) {
            return res.status(200).json(jsonData);
        }

        for (const file of fileList.Contents) {
            const fileParams = {
                Bucket: bucketName,
                Key: file.Key
            };
            const fileData = await s3.send(new GetObjectCommand(fileParams));
            jsonData.push(JSON.parse(await fileData.Body.transformToString()));
        }

        res.status(200).json(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve JSON data' });
    }
}

module.exports = {
    storeJson,
    retrieveJson
}