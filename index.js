function predic(){   
    
    alert("TEST");

    const example = tf.fromPixels("test.PNG");  // for example
    const prediction = model.predict(example);  
    
    console.log(prediction);

}



