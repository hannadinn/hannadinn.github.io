window.onload = function() {
    var stages = [
      ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'],
      // ['image4.jpg', 'image5.jpg', 'image6.jpg'],
      // ['image7.jpg', 'image8.jpg', 'image9.jpg']
    ];
  
    var currentStage = 0;
    var images = document.getElementsByClassName('image');
    // var revealButton = document.getElementById('reveal-button');
    var result = document.getElementById('result');
  
    // Attach click event handlers to all images
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
        // if (currentStage < stages.length && this.src.endsWith(stages[currentStage][i])) {
        //   this.classList.add('selected');
  
        //   if (currentStage === stages.length - 1) {
        //     revealButton.disabled = false;
        //   }
        // }
        var filePath = this.src;
        console.log(filePath);
        if (filePath.includes("5.jpg")) {
          result.style.display = "block";
        }
        
        // if (this.src.toString().) {
        //   result.style.visibility = "visible";
        // }
      });
    }
  
    // Attach click event handler to reveal button
    // revealButton.addEventListener('click', revealAnswer);
  };
  
  // function revealAnswer() {
  //   var answerImages = document.getElementsByClassName('selected');
  //   var result = document.getElementById('result');
  
  //   if (answerImages.length === 0) {
  //     result.textContent = 'Incorrect!';
  //   } else {
  //     var currentStageImages = stages[currentStage];
  //     var isCorrect = true;
  
  //     for (var i = 0; i < answerImages.length; i++) {
  //       if (!answerImages[i].src.endsWith(currentStageImages[i])) {
  //         isCorrect = false;
  //         break;
  //       }
  //     }
  
  //     if (isCorrect) {
  //       result.textContent = 'Stage ' + (currentStage + 1) + ': Correct!';
  //       currentStage++;
  
  //       if (currentStage === stages.length) {
  //         revealButton.disabled = true;
  //       }
  //     } else {
  //       result.textContent = 'Incorrect!';
  //     }
  //   }
  // }
  