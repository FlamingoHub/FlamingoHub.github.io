<?php
$Username = $_POST["Username"];
$Email = $_POST ["Email"];
$Password = $_POST ["Password"];
$Phonenumber = $_POST ["Phonenumber"];
$FirstName = $_POST ["FirstName"];
$LastName = $_POST ["LastName"];



//Connect to the Database



$conn = new mysql('localhost', 'root','test');
if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(Username, Email, Password)
     values(?, ?, ?)");
     $stmt->bind_param("sssssi", $Username, $Email, $Password);
     $execval = $stmt->execute();
     echo $execval;
     echo "Registration successfully...";
     $stmt->close();
     $conn->close();

?>
