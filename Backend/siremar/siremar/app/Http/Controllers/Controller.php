<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function addbusiness()
    {
		$business=$_POST["business"];
		$company=$_POST["company"];
		$date=$_POST["date"];
		$comment=$_POST["comment"];
	  
		DB::insert("INSERT INTO business(business, company, date, comment) VALUES ('".$business."','".$company."','".$date."','".$comment."')");

		echo "Business Added Successfully";
    }

    function addchat()
    {
		$message=$_POST["message"];
		$user=$_POST["user"];
	  
		DB::insert("INSERT INTO chat(message, user) VALUES ('".$message."','".$user.")");

		echo "Message Added Successfully";
    }

    function getchat()
    {
		$chats = DB::select("select * from chat");

		$out="";
		foreach($chats as $chat){
		  $out = $out." ; ".$chat->user." , ".$chat->message;
		}

		print_r($out);
    }

    function addevents()
    {
		$fname=$_POST["event"];
	  
		DB::insert("INSERT INTO events(event) VALUES ('".$event."')");

		echo "Event Added Successfully";
    }

    function deleteres()
    {
		$rid=$_POST["rid"];
	  
		DB::insert("DELETE FROM users WHERE rid='".$rid."'");

		echo "Resident Removed Successfully";
    }

    function deleteins()
    {
		$rid=$_POST["rid"];
	  
		DB::insert("DELETE FROM users WHERE rid='".$rid."'");

		echo "Inspector Removed Successfully";
    }

    function addmoveout()
    {
		$business=$_POST["business"];
		$company=$_POST["company"];
		$date=$_POST["date"];
		$comment=$_POST["comment"];
	  
		DB::insert("INSERT INTO moveout(business, company, date, comment) VALUES ('".$business."','".$company."','".$date."','".$comment."')");

		echo "Moeout Added Successfully";
    }

    function addblog()
    {
		$image=$_POST["image"];
		$title=$_POST["title"];
		$content=$_POST["content"];
	  
		DB::insert("INSERT INTO blogs(image, title, content) VALUES ('".$image."','".$title."','".$content."')");

		echo "Blog Added Successfully";
    }

    function addregister()
    {
		$business=$_POST["business"];
		$company=$_POST["company"];
		$date=$_POST["date"];
		$comment=$_POST["comment"];

		echo "School Registration Added Successfully";
    }

    function addschool()
    {
		$rid=$_POST["rid"];
		$school=$_POST["school"];
		$admission=$_POST["admission"];
		$address=$_POST["address"];
	  
		DB::insert("INSERT INTO schools(rid, school, admission, address) VALUES ('".$rid."','".$school."','".$admission."','".$address."')");

		echo "School Registration Added Successfully";
    }

    function checkuser()
    {
		$rid=$_POST["rid"];
		$one=DB::select("select role from users where rid='".$rid."'");

		print_r($one[0]->role);
    }

    function contact()
    {
		$fname=$_POST["fname"];
		$lname=$_POST["lname"];
		$phone=$_POST["phone"];
		$email=$_POST["email"];
		$query=$_POST["query"];
		
		DB::insert("INSERT INTO contact(fname, lname, phone, email, query) VALUES ('".$fname."' , '".$lname."' , '".$phone."' , '".$email."' , '".$query."')");
		
		echo "Contact Request Raised Successfully";
    }

    function getbusiness()
    {
		$crc=DB::select("select * from business");
		
		$out="";
		
		foreach($crc as $crck){
		  $out = $out." ; ".$crck->business." , ".$crck->company." , ".$crck->date." , ".$crck->comment;
		}
		
		print_r($out);
    }

    function getcount()
    {
		$crc = DB::select("select count(*) as cc from users where role='Residents'");
		$cic = DB::select("select count(*) as cc from users where role='Inspectors'");
		$cbc = DB::select("select count(*) as cc from business");
		$cec = DB::select("select count(*) as cc from events");
		
		$out = $crc[0]->cc." ; ".$cic[0]->cc." ; ".$cbc[0]->cc." ; ".$cec[0]->cc;
				
		print_r($out);
    }

    function getevents()
    {
		$one = DB::select("select * from events");

		foreach($one as $one){
			$out = $out."\n".$one;
		}
		print_r($out);
    }

    function getschools()
    {
		$one = DB::select("select * from schools");

		foreach($one as $one){
			$out = $out."\n".$one;
		}
		print_r($out);
    }

    function getusers()
    {qfgl]
    }

    function getblogs()
    {
		$crc = DB::select("select * from blogs");

		$out="";
		foreach($crc as $crck){
		  $out = $out." ; ".$crck->image." , ".$crck->title." , ".$crck->content;
		}

		print_r($out);
    }

    function login()
    {
		$email=$_POST["email"];
		$password=$_POST["password"];
		$one=DB::select("select rid from users where email='".$email."' and password='".$password."'");
		
		print_r($one[0]->rid);
    }

    function register()
    {
		$role=$_POST["role"];
		$name=$_POST["name"];
		$dob=$_POST["dob"];
		$address=$_POST["address"];
		$email=$_POST["email"];
		$phone=$_POST["phone"];
		$password=$_POST["password"];
		$t = time();
		$rid= "sxs_".$t;
		
		$one=DB::select("select rid from users where email='".$email."'");
		$two=DB::select("select rid from users where email='".$email."' and password='".$password."'");

		if(isset($one[0]->rid) || isset($two[0]->rid))
		{
			echo "User Already Exists";
		}else{
			DB::insert("INSERT INTO users(role, name, dob, address, email, phone, password, rid ) VALUES ('".$role."' , '".$name."' , '".$dob."' , '".$address."' , '".$email."' , '".$phone."' , '".$password."' , '".$rid."')");
			echo "New Record Created Successfully";
		}
    }
}
