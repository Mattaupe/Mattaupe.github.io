function predic(){   
    
    const example = tf.fromPixels(webcamElement);  // for example
    const prediction = model.predict(example);  
    
    console.log(prediction);

}



