import * as tf from '@tensorflow/tfjs';

function predic(){
 
    const model = await tf.loadLayerModel("https://mattaupe.github.io/models/model.json"); 
    
    const example = tf.fromPixels(webcamElement);  // for example
    const prediction = model.predict(example);  
    
    console.log(prediction);

}



