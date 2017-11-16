<?php
require('DAO.php');

$student_name = $_GET['student_name'];
$student_id = $_GET['student_id'];
$dept = $_GET['dept'];



student_join($student_id,$student_name,$dept);

$join_no = select_join_number($student_id);

$image_name = $join_no.".jpg";

student_image($student_id,$image_name);



$callback = $_GET['callback'];


//echo $callback."({'data':{'name':'lee'}})";
echo $callback."({'no':$join_no,'name':$student_name,'id':'$student_id','dept':$dept,'image':'$image'})";

?>
