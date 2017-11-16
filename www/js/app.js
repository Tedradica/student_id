

$('document').ready(function() {

    console.log("ajax 실행");

    // document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
    //
    // document.getElementById("cameraGetPicture").addEventListener("click", cameraGetPicture);

});

function join(){
  // 여기서 create의 이미지폼을 잡아서 보내줘야한다
  var student_name = "\'" + $("#student_name").val() + "\'";
  var student_id = $("#student_id").val();
  var dept = "\'" + $("#dept").val() + "\'";


  $.ajax({

        type: 'GET',
        dataType: 'jsonp',
        data: {student_name: student_name,
               student_id: student_id,
               dept: dept},
        // data: {'name': 'test'},
        url: 'http://54.92.37.34/studentID/join.php',
        // jsonp 값을 전달할 때 사용되는 파라미터 변수명
        // 이 속성을 생략하면 callback 파라미터 변수명으로 전달된다.
        jsonp: 'callback',
        success:function(data) {

          alert("학생증을 추가했습니다.");

          location.href="./index.html";

        }
  });

}

function goToMain(){

  history.go(-1);


}

//동적으로 추가된 태그의 이벤트 처리
$(document).on('click','.viewUser',function(){

    //$(this).attr('id') => 학번
    //동적으로 추가된 div의 id값(학번)을 식별하여, 해당 학생에게 접근가능
    location.href="view_user.html?" + $(this).attr('id');


});

function modified(data){

  location.href="modified_user.html?" + data;

}

function modifiedUser(data){

   var prestudentId = data;
   var studentName = "\'" + $('#update_student_name').val() + "\'";
   var studentID = $('#update_student_id').val();
   var deptName = "\'" + $('#update_dept').val() + "\'";


$.ajax({

  type: 'GET',
  dataType: 'jsonp',
  data: {
         studentId : prestudentId,
         updateStudentId : studentID,
         studentName : studentName,
         deptName : deptName
        },
  url: 'http://54.92.37.34/studentID/updateUser.php',
  // jsonp 값을 전달할 때 사용되는 파라미터 변수명
  // 이 속성을 생략하면 callback 파라미터 변수명으로 전달된다.
  jsonp: 'callback',
  success:function(data) {

    alert("학생증 정보를 수정했습니다.");

    location.href="./index.html";

  }

});

}
