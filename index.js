// Change emotion image
let currentEmotion = {};

function changeImg(emotionType, postId) {
  if (!currentEmotion[postId]) {
    currentEmotion[postId] = [0, 0, 0];
  }

  let imgToChange;

  switch (emotionType) {
    case 1:
      imgToChange = document.getElementById("imgFirst-" + postId + "-1");
      break;
    case 2:
      imgToChange = document.getElementById("imgSecond-" + postId + "-2");
      break;
    case 3:
      imgToChange = document.getElementById("imgThird-" + postId + "-3");
      break;
  }

  if (currentEmotion[postId][emotionType - 1] === 1) {
    resetImages(postId);
    currentEmotion[postId][emotionType - 1] = 0;
  } else {
    resetImages(postId);
    switch (emotionType) {
      case 1:
        imgToChange.src = "./icon/ike-coor.png";
        break;
      case 2:
        imgToChange.src = "./icon/ove-coor.png";
        break;
      case 3:
        imgToChange.src = "./icon/sad-coor.png";
        break;
    }
    currentEmotion[postId][emotionType - 1] = 1;
  }
}

function resetImages(postId) {
  document.getElementById("imgFirst-" + postId + "-1").src = "./icon/ike.png";
  document.getElementById("imgSecond-" + postId + "-2").src = "./icon/ove.png";
  document.getElementById("imgThird-" + postId + "-3").src = "./icon/sad.png";

  document.getElementById("showImgFirst-" + postId + "-1").src =
    "./icon/ike-coor.png";
  document.getElementById("showImgSecond-" + postId + "-2").src =
    "./icon/ove-coor.png";
  document.getElementById("showImgThird-" + postId + "-3").src =
    "./icon/sad-coor.png";
}

// Check input
function myFunction() {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("comment").value == "" ||
    document.getElementById("class").value == ""
  ) {
    document.getElementById("thongbao").innerHTML =
      "Hãy nhập thông tin và bình luận của bạn";
    return false;
  } else document.getElementById("thongbao").innerHTML = "Cảm ơn bạn đã góp ý";
}
