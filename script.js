window.onload = function() {
    var stages = [
      ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'],
    ];
  
    var currentStage = 1;
    var images = document.getElementsByClassName('image');
    var result = document.getElementById('result');
    var bgId = "bgimage";

    var vid = document.getElementById("video");
    vid.addEventListener("play", () => onPlay());
  
    // Attach click event handlers to all images
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('click', function() {
        
        var filePath = this.src;
        if (currentStage === 1 && filePath.includes("3.jpg")) {
          triggerChangeImage(currentStage);
        }

        if (currentStage === 2 && filePath.includes("6.jpg")) {
          triggerChangeImage(currentStage)
        }

        if (currentStage === 3 && filePath.includes("9.jpg")) {
          triggerChangeImage(currentStage)
        }
      });
    }

    function triggerChangeImage(stage) {
      currentStage = 0;
      document.getElementById("content-container").style.visibility = "hidden";
      document.getElementById("blur").classList.add("unblurTransition");
      document.getElementById("blur").style.backdropFilter = "none";
      setTimeout(() => changeImages(stage), 4000);
      currentStage = stage + 1; 
    }

    function changeImages(stage) {
      var newStage = stage + 1;
      if (currentStage <= 3) {
        for (let index = 1; index < 10; index++) {
          var imageId = "image" + index;
          var newImageSrc = "stage" + newStage + "/image" + index + ".jpg";
          document.getElementById(imageId).src = newImageSrc;
        }
        var newBgImagePath = 'url(' + "stage" + newStage + "/image" + (newStage*3) + ".jpg)";
        document.getElementById(bgId).style.backgroundImage = newBgImagePath;
      }
      document.getElementById("blur").classList.remove("unblurTransition");
      document.getElementById("blur").style.backdropFilter = "blur(8px)";
      document.getElementById("content-container").style.visibility = "visible";
      if (currentStage == 2) {
        showAnswerByColumn(2);
        showAnswerByColumn(3);
        document.getElementById("title").innerHTML = "🎄🎄";
      }
      if (currentStage == 3) {
        showAnswerByColumn(4);
        showAnswerByColumn(6);
        document.getElementById("title").innerHTML = "😴🤤";
      }
      if (currentStage == 4) {
        showAnswerByColumn(1);
        showAnswerByColumn(5);
        var emojiArray = ["😍","🥰", "💓", "🥳", "👰", "👸", "🦊", "🌷", "🍉", "🍙", "🍜", "🥟", "🦀", "🌞", "🎉", "🎊", "💍", "👜", "📸", "♍"];
        var emojiLine = "";
        while (emojiArray.length > 0 ) {
          var rand = emojiArray[(Math.random() * emojiArray.length) | 0];
          emojiLine += rand;
          emojiArray = emojiArray.filter(item => item != rand);
        }
        document.getElementById("title").innerHTML = emojiLine;
      }
    }

    function showAnswerByColumn(num) {
      var columnId = "result" + num;
      var answerElement = document.getElementById(columnId);
      answerElement.style.visibility = "visible";
    }

    function onPlay() {
      document.getElementById("bgimage").style.display = "none";
    }
  };
  