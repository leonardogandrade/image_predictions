const path = require('path');
const fs = require('fs').promises;

const tf = require('@tensorflow/tfjs-node');
const cocoSsd = require('@tensorflow-models/coco-ssd');

const objectDetection = async (req, res) => {
    const filename = req.params["filename"]
    const imagePath = await path.resolve(__dirname, '../', '../', 'upload', filename);
    // Load model
    const model = await cocoSsd.load();

    // Read image as a buffer
    const imageBuffer = await fs.readFile(imagePath);

    // Convert image to a tensor
    const imageTensor = tf.node.decodeImage(imageBuffer)

    // Make a prediction
    const predictions = await model.detect(imageTensor);

    console.log(predictions);
    return res.json(predictions);
}

module.exports = {
    objectDetection,
}