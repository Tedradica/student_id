<?php 
$join_no = $_GET['join_no'];

//echo $_GET['callback']."({'test':$studentId})";

require "DAO.php";

$row = selectUser($join_no);

echo $_GET['callback']."($row)";

?>
