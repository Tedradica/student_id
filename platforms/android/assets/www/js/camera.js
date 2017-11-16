
var image_data;
var image_name;

function cameraTakePicture() {

   navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      // destinationType: Camera.DestinationType.DATA_URL
      destinationType: Camera.DestinationType.FILE_URI,
      correctOrientation:true
   });



   function onSuccess(imageData) {
      var image = document.getElementById('student_img');
      // var image_data = "data:image/jpeg;base64," + imageData;
      image.src = imageData;


      //업로드할때 사진데이터 넘기기 위해
      image_data = imageData;


   }
   function onFail(message) {
      // alert('Failed because: ' + message);
      alert("사진이 선택되지 않았습니다");

   }

}

function cameraGetPicture() {
   navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation:true
   });

   function onSuccess(imageData) {
      var image = document.getElementById('student_img');
      image.src = imageData;

      //업로드할때 사진데이터 넘기기 위해
      image_data = imageData

   }

   function onFail(message) {
      // alert('Failed because: ' + message);
      alert("사진이 선택되지 않았습니다");

   }

}


//파일 업로드

function uploadPhoto(imageURI,join_no) {
           var options = new FileUploadOptions();
           options.fileKey="file";
           options.fileName=join_no+".jpg";
           options.mimeType="image/jpeg";
           //db에저장할이름



           var params = {};
           params.value1 = "test";
           params.value2 = "param";

           options.params = params;

           var ft = new FileTransfer();
           ft.upload(imageURI, encodeURI("http://54.92.37.34/studentID/picture.php"), win, fail, options);

          //  alert("filekey:"+options.fileKey+"\n"+"fileName:"+options.fileName+"\n"+"mimeType:"+options.mimeType+"\n");

       }

function win(r) {
          //  console.log("Code = " + r.responseCode);
          //  console.log("Response = " + r.response);
          //  console.log("Sent = " + r.bytesSent);


          //  alert("Code = " + r.responseCode + "\n" + "Response = " + r.response + "\n" + "Sent = " + r.bytesSent);
}

function fail(error) {
          //  alert("An error has occurred: Code = " + error.code);
           console.log("upload error source " + error.source);
           console.log("upload error target " + error.target);

           alert("사진이 선택되지 않았습니다");
}
