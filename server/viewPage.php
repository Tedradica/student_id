<?php 

require "DAO.php";

$row = select();


//echo $_GET['callback']."({'test':'$row'})";

echo $_GET['callback']."($row)";

?>
