<?php

$action = empty($_POST['action']) ? false : $_POST['action'];

switch ($action) {
	case 'login':
		$username = empty($_POST['username']) ? '' : $_POST['username'];
		$password = empty($_POST['password']) ? '' : $_POST['password'];
		if ($username=='test' && $password=='pass') {
			setcookie('userid', $username);
			$response = 'Login: Sucess';
		}
		else {
			$response = 'Login: Fail';
		}
		print $response;
		break;
	case 'get':
		$userid = empty($_COOKIE['userid']) ? '' : $_COOKIE['userid'];
		if ($userid=='test') {
			$response = '<h4>Hi</h4> <p>Here\'s a fun video</p><iframe width="560" height="315" src="https://www.youtube.com/embed/ebU7eLlzs9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h4>Ok, now let\'s get into it</h4><ul id="privateList"><li>Full Name: Noah John Frew<br></li><li>Address: 10 Gray Wolfe Ct, Glen Carbon, Illinois<br></li><li>Email: noahfrew@gmail.com<br></li><li>Phone Number: 618-406-3990<br></li></ul>';
		}
		else {
			$response = "Either there is no content for your userid or you are not logged in.";
		}
		print $response;
		break;
	case 'logout':
		setcookie('userid', '', 1);
		print 'Logged out';
		break;
	default: 
		print "Error, default case"; 
		break; 
}
?>
