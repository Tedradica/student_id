<?php

$hostname ="localhost";
$user_name ="root";
$password ="";
$db_name ="student_id";
//$db_name ="test";

try {

	$pdo = new PDO("mysql:host=$hostname;dbname=$db_name",$user_name,$password);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (Exception $e){
	echo $e->getMessage();
}

function student_join($student_no,$student_name,$dept_name){

	global $pdo;

//	$query = "insert into student(student_no,student_name,dept_name) values(10,'test2','test2')";

	$query = "insert into student(student_no,student_name,dept_name) values($student_no,$student_name,$dept_name)";

	$stmt = $pdo->prepare($query);
	$stmt->execute();

}

function student_image($student_no,$image){

	global $pdo;


	$query = "update student set photo = '{$image}' where student_no = {$student_no}";

	$stmt = $pdo->prepare($query);
	$stmt->execute();

}

function selectUser($join_no){

         global $pdo;

         $query = "select * from student where join_no = {$join_no}";

         $stmt = $pdo->prepare($query);
         $stmt->execute();
         $stmt->setFetchMode(PDO::FETCH_ASSOC);

         $results = $stmt->fetch();

         return json_encode($results);
}


function select_join_number($student_id){

         global $pdo;

         $query = "select join_no from student where student_no = {$student_id}";

         $stmt = $pdo->prepare($query);
         $stmt->execute();
         $stmt->setFetchMode(PDO::FETCH_ASSOC);

         $result = $stmt->fetch();

	return $result['join_no'];
}

function select(){

	global $pdo;

	$query = "select * from student";

	$stmt = $pdo->prepare($query);
	$stmt->execute();
	$stmt->setFetchMode(PDO::FETCH_ASSOC);

	$results = $stmt->fetchAll();

	//foreach($results as $result){

	//echo $result['student_no'];

	//}

	return json_encode($results);	

}

function modifiedUser($joinNo, $updateStudentId, $updateStudentName, $updateDeptName){

   global $pdo;

  $query = "UPDATE student SET student_no = $updateStudentId, student_name = $updateStudentName, dept_name = $updateDeptName, join_date = now() WHERE join_no = $joinNo";

  $stmt = $pdo->prepare($query);
  $stmt->execute();






}

?>

