var 이미지로딩 = new Promise(function (성공, 실패) {
  var img = document.querySelector("#test");
  img.addEventListener("load", function () {
    성공();
  });
  img.addEventListener("error", function () {
    실패();
  });
});

이미지로딩
  .then(function () {
    console.log("성공했어요");
  })
  .catch(function () {
    console.log("실패했어요");
  });
