<?php
require('DAO.php');


$file_name = urldecode($_FILES['file']['name']);
$tmp_name = $_FILES['file']['tmp_name'];
$type = $_FILES['file']['type'];
$size = $_FILES['file']['size'];

//이미 사진이 있으면

//if(file_exists("/var/www/html/studentID/picture/".$file_name)){
//	unlink('./picture/'.$file_name);
//}else{

move_uploaded_file($tmp_name,"/var/www/html/studentID/picture/".$file_name);

//echo var_dump($test);
echo "filename : ".$file_name;
echo "tmp :".$tmp_name;
echo "type :".$type;
echo "size :".$size;

//}

?>
