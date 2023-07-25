window.onload = function() {
    var stages = [
      ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'],
    ];
  
    var currentStage = 1;
    var images = document.getElementsByClassName('image');
    var result = document.getElementById('result');
    var bgId = "bgimage";
  
    // Attach click event handlers to all images
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
        
        var filePath = this.src;
        if (currentStage === 1 && filePath.includes("3.jpg")) {
          showAnswerByColumn(2);
          showAnswerByColumn(3);
          triggerChangeImage(currentStage);
        }

        if (currentStage === 2 && filePath.includes("6.jpg")) {
          showAnswerByColumn(4);
          showAnswerByColumn(6);
          triggerChangeImage(currentStage)
        }

        if (currentStage === 3 && filePath.includes("9.jpg")) {
          showAnswerByColumn(1);
          showAnswerByColumn(5);
        }
      });
    }

    function triggerChangeImage(stage) {
      currentStage = 0;
      setTimeout(() => changeImage(stage), 1000);
      currentStage = stage + 1; 
    }

    function changeImage(stage) {
      var newStage = stage + 1;
      var newBgImagePath = 'url(' + "stage" + newStage + "/image" + (newStage*3) + ".jpg)";
      document.getElementById(bgId).style.backgroundImage = newBgImagePath;
      for (let index = 1; index < 10; index++) {
        var imageId = "image" + index;
        var newImageSrc = "stage" + newStage + "/image" + index + ".jpg";
        document.getElementById(imageId).src = newImageSrc;
      }
    }

    function showAnswerByColumn(num) {
      var columnId = "result" + num;
      var answerElement = document.getElementById(columnId);
      answerElement.style.visibility = "visible";
    }
  };
  