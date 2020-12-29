import * as tf from '@tensorflow/tfjs';

function Usemodel(img) {
    

    const model = await tf.loadLayerModel('https://mattaupe.github.io/models/model.json'); 
    
    const prediction = model.predict(img);   
    return prediction;  
}
