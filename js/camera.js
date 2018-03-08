//资料1
var $_file = document.getElementById("cinput1");
var img_box = document.getElementById("cbox1");
//资料2
var $_file2 = document.getElementById("cinput2");
var img_box2 = document.getElementById("cbox2");
//资料3
var $_file3 = document.getElementById("cinput3");
var img_box3 = document.getElementById("cbox3");
//资料4
var $_file4 = document.getElementById("cinput4");
var img_box4 = document.getElementById("cbox4");
//资料5
var $_file5 = document.getElementById("cinput5");
var img_box5 = document.getElementById("cbox5");
//资料6
var $_file6 = document.getElementById("cinput6");
var img_box6 = document.getElementById("cbox6");
//资料7
var $_file7 = document.getElementById("cinput7");
var img_box7 = document.getElementById("cbox7");
//资料8
var $_file8 = document.getElementById("cinput8");
var img_box8 = document.getElementById("cbox8");
//资料9
var $_file9 = document.getElementById("cinput9");
var img_box9 = document.getElementById("cbox9");
//资料10
var $_file10 = document.getElementById("cinput10");
var img_box10 = document.getElementById("cbox10");


//资料1缩略图
$_file.addEventListener('change',function () {
	var file = $_file.files[0];
	var readerFile = new FileReader();
	readerFile.onload = function (ev) {
		var data = ev.target.result;
		img_box.src=data;
	}
	readerFile.readAsDataURL(file);
})
//资料2缩略图
$_file2.addEventListener('change',function () {
	var file = $_file2.files[0];
	var readerFile2 = new FileReader();
	readerFile2.onload = function (ev) {
		var data = ev.target.result;
		img_box2.src=data;
	}
	readerFile2.readAsDataURL(file);
})
//资料3缩略图
$_file3.addEventListener('change',function () {
	var file = $_file3.files[0];
	var readerFile3 = new FileReader();
	readerFile3.onload = function (ev) {
		var data = ev.target.result;
		img_box3.src=data;
	}
	readerFile3.readAsDataURL(file);
})
//资料4缩略图
$_file4.addEventListener('change',function () {
	var file = $_file4.files[0];
	var readerFile4 = new FileReader();
	readerFile4.onload = function (ev) {
		var data = ev.target.result;
		img_box4.src=data;
	}
	readerFile4.readAsDataURL(file);
})
//资料5缩略图
$_file5.addEventListener('change',function () {
	var file = $_file5.files[0];
	var readerFile5 = new FileReader();
	readerFile5.onload = function (ev) {
		var data = ev.target.result;
		img_box5.src=data;
	}
	readerFile5.readAsDataURL(file);
})
//资料6缩略图
$_file5.addEventListener('change',function () {
	var file = $_file6.files[0];
	var readerFile6 = new FileReader();
	readerFile6.onload = function (ev) {
		var data = ev.target.result;
		img_box6.src=data;
	}
	readerFile6.readAsDataURL(file);
})
//资料7缩略图
$_file5.addEventListener('change',function () {
	var file = $_file7.files[0];
	var readerFile7 = new FileReader();
	readerFile7.onload = function (ev) {
		var data = ev.target.result;
		img_box7.src=data;
	}
	readerFile7.readAsDataURL(file);
})
//资料8缩略图
$_file8.addEventListener('change',function () {
	var file = $_file8.files[0];
	var readerFile8 = new FileReader();
	readerFile8.onload = function (ev) {
		var data = ev.target.result;
		img_box8.src=data;
	}
	readerFile8.readAsDataURL(file);
})
//资料9缩略图
$_file9.addEventListener('change',function () {
	var file = $_file9.files[0];
	var readerFile9 = new FileReader();
	readerFile9.onload = function (ev) {
		var data = ev.target.result;
		img_box9.src=data;
	}
	readerFile9.readAsDataURL(file);
})
//资料10缩略图
$_file10.addEventListener('change',function () {
	var file = $_file10.files[0];
	var readerFile10 = new FileReader();
	readerFile10.onload = function (ev) {
		var data = ev.target.result;
		img_box10.src=data;
	}
	readerFile10.readAsDataURL(file);
})