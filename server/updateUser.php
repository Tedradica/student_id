 <?php

 $joinNo = $_GET['joinNo'];
 $updateStudentId = $_GET['updateStudentId'];
 $updateStudentName = $_GET['studentName'];
 $updateDeptName = $_GET['deptName'];

 require "DAO.php";

 modifiedUser($joinNo, $updateStudentId, $updateStudentName, $updateDeptName);


echo $_GET['callback']."({'no':$joinNo, 'student_id':$updateStudentId, 'name':$updateStudentName, 'dept':$updateDeptName})";
?>

