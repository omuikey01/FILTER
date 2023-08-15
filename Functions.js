let num = 0;
let b1, b2, b3, b4, b5, b6, b7;
b1 = document.getElementById("box1");
b2 = document.getElementById("box2");
b3 = document.getElementById("box3");
b4 = document.getElementById("box4");
b5 = document.getElementById("box5");
b6 = document.getElementById("box6");
b7 = document.getElementById("box7");

let hb1, hb2, hb3, hb4, hb5, hb6, hb7;
hb1 = document.getElementById("company").innerHTML;
hb2 = document.getElementById("usscn").innerHTML;
hb3 = document.getElementById("om").innerHTML;
hb4 = document.getElementById("insfy").innerHTML;
hb5 = document.getElementById("wipro").innerHTML;
hb6 = document.getElementById("mcro").innerHTML;
hb7 = document.getElementById("googlecn").innerHTML;

let jtb12, jtb22, jtb32, jtb42, jtb52, jtb62, jtb72;
jtb12 = document.getElementById("key21").innerHTML;
jtb22 = document.getElementById("key22").innerHTML;
jtb32 = document.getElementById("key23").innerHTML;
jtb42 = document.getElementById("key24").innerHTML;
jtb52 = document.getElementById("key25").innerHTML;
jtb62 = document.getElementById("key26").innerHTML;
jtb72 = document.getElementById("key27").innerHTML;


let jtb13, jtb23, jtb33, jtb43, jtb53, jtb63, jtb73;
jtb13 = document.getElementById("key31").innerHTML;
jtb23 = document.getElementById("key32").innerHTML;
jtb33 = document.getElementById("key33").innerHTML;
jtb43 = document.getElementById("key34").innerHTML;
jtb53 = document.getElementById("key35").innerHTML;
jtb63 = document.getElementById("key36").innerHTML;
jtb73 = document.getElementById("key37").innerHTML;

let jobtitle1, jobtitle2, jobtitle3, jobtitle4, jobtitle5, jobtitle6, jobtitle7;
jobtitle1 = document.getElementById("jobtitl1").innerHTML;
jobtitle2 = document.getElementById("jobtitl2").innerHTML;
jobtitle3 = document.getElementById("jobtitl3").innerHTML;
jobtitle4 = document.getElementById("jobtitl4").innerHTML;
jobtitle5 = document.getElementById("jobtitl5").innerHTML;
jobtitle6 = document.getElementById("jobtitl6").innerHTML;
jobtitle7 = document.getElementById("jobtitl7").innerHTML;


function boxHide() {
	b1.style.display = "none";
	b2.style.display = "none";
	b3.style.display = "none";
	b4.style.display = "none";
	b5.style.display = "none";
	b6.style.display = "none";
	b7.style.display = "none";
}

function boxShow() {
	b1.style.display = "flex";
	b2.style.display = "flex";
	b3.style.display = "flex";
	b4.style.display = "flex";
	b5.style.display = "flex";
	b6.style.display = "flex";
	b7.style.display = "flex";
}





let google, apple, uss;
google = document.getElementById("googlef");
apple = document.getElementById("applef");
uss = document.getElementById("ussf");

let partTime, fullTime, intenship, freelanching;
partTime = document.getElementById("ptf");
fullTime = document.getElementById("ftf");
intenship = document.getElementById("intenshipf");
freelanching = document.getElementById("freelancingf");

let india, us, ww;
india = document.getElementById("indiaf");
us = document.getElementById("usf");
ww = document.getElementById("wwf");

let fsd, fspd, fsjd, fswd, fsmernd, fred, baed;
fsd = document.getElementById("fsdf");
fspd = document.getElementById("fspdf");
fsjd = document.getElementById("fsjdf");
fswd = document.getElementById("fswdf");
fsmernd = document.getElementById("fsmerndf");
fred = document.getElementById("pef"); fred
baed = document.getElementById("bef"); baed


function noDataPrint() {
	if (num == 0) {
		if (b1.style.display == "none" && b2.style.display == "none" && b3.style.display == "none" && b4.style.display == "none" && b5.style.display == "none" && b6.style.display == "none" && b7.style.display == "none") {
			b7.style.display = "flex";
			b7.innerHTML = "<h1> No Data Found </h1>";
		}
	}
}

function googleFn() {
	if (" Google " == hb1) {
		b1.style.display = "flex";
	}
	if (" Google " == hb2) {
		b2.style.display = "flex";
	}
	if (" Google " == hb3) {
		b3.style.display = "flex";
	}
	if (" Google " == hb4) {
		b4.style.display = "flex";
	}
	if (" Google " == hb5) {
		b5.style.display = "flex";
	}
	if (" Google " == hb6) {
		b6.style.display = "flex";
	}

	if (" Google " == hb7) {
		b7.style.display = "flex";
	}
}

function appleFn() {
	if (" Apple " == hb1) {
		b1.style.display = "flex";
	}
	if (" Apple " == hb2) {
		b2.style.display = "flex";
	}
	if (" Apple " == hb3) {
		b3.style.display = "flex";
	}
	if (" Apple " == hb4) {
		b4.style.display = "flex";
	}
	if (" Apple " == hb5) {
		b5.style.display = "flex";
	}
	if (" Apple " == hb6) {
		b6.style.display = "flex";
	}

	if (" Apple " == hb7) {
		b7.style.display = "flex";
	}
}

function USSFn() {
	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb1) {
		b1.style.display = "flex";
	}
	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb2) {
		b2.style.display = "flex";
	}
	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb3) {
		b3.style.display = "flex";
	}
	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb4) {
		b4.style.display = "flex";
	}
	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb5) {
		b5.style.display = "flex";
	}
	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb6) {
		b6.style.display = "flex";
	}

	if (" UIKEY SOFTWARE SOLOTION SERICE " == hb7) {
		b7.style.display = "flex";
	}
}


function partTimeFn() {
	if ("Part Time" == jtb12) {
		b1.style.display = "flex";
	}
	if ("Part Time" == jtb22) {
		b2.style.display = "flex";
	}
	if ("Part Time" == jtb32) {
		b3.style.display = "flex";
	}
	if ("Part Time" == jtb42) {
		b4.style.display = "flex";
	}
	if ("Part Time" == jtb52) {
		b5.style.display = "flex";
	}
	if ("Part Time" == jtb62) {
		b6.style.display = "flex";
	}
	if ("Part Time" == jtb72) {
		b7.style.display = "flex";
	}
}

function fullTimeFn() {
	if ("Full Time" == jtb12) {
		b1.style.display = "flex";
	}
	if ("Full Time" == jtb22) {
		b2.style.display = "flex";
	}
	if ("Full Time" == jtb32) {
		b3.style.display = "flex";
	}
	if ("Full Time" == jtb42) {
		b4.style.display = "flex";
	}
	if ("Full Time" == jtb52) {
		b5.style.display = "flex";
	}
	if ("Full Time" == jtb62) {
		b6.style.display = "flex";
	}
	if ("Full Time" == jtb72) {
		b7.style.display = "flex";
	}
}

function intenshipFn() {
	if ("Intenship" == jtb12) {
		b1.style.display = "flex";
	}
	if ("Intenship" == jtb22) {
		b2.style.display = "flex";
	}
	if ("Intenship" == jtb32) {
		b3.style.display = "flex";
	}
	if ("Intenship" == jtb42) {
		b4.style.display = "flex";
	}
	if ("Intenship" == jtb52) {
		b5.style.display = "flex";
	}
	if ("Intenship" == jtb62) {
		b6.style.display = "flex";
	}
	if ("Intenship" == jtb72) {
		b7.style.display = "flex";
	}
}
function freelanchingFn() {
	if ("Free Lanching" == jtb12) {
		b1.style.display = "flex";
	}
	if ("Free Lanching" == jtb22) {
		b2.style.display = "flex";
	}
	if ("Free Lanching" == jtb32) {
		b3.style.display = "flex";
	}
	if ("Free Lanching" == jtb42) {
		b4.style.display = "flex";
	}
	if ("Free Lanching" == jtb52) {
		b5.style.display = "flex";
	}
	if ("Free Lanching" == jtb62) {
		b6.style.display = "flex";
	}
	if ("Free Lanching" == jtb72) {
		b7.style.display = "flex";
	}
}
function indiaFn() {
	if ("India" == jtb13) {
		b1.style.display = "flex";
	}
	if ("India" == jtb23) {
		b2.style.display = "flex";
	}
	if ("India" == jtb33) {
		b3.style.display = "flex";
	}
	if ("India" == jtb43) {
		b4.style.display = "flex";
	}
	if ("India" == jtb53) {
		b5.style.display = "flex";
	}
	if ("India" == jtb63) {
		b6.style.display = "flex";
	}
	if ("India" == jtb73) {
		b7.style.display = "flex";
	}
}
function usFn() {
	if ("US" == jtb13) {
		b1.style.display = "flex";
	}
	if ("US" == jtb23) {
		b2.style.display = "flex";
	}
	if ("US" == jtb33) {
		b3.style.display = "flex";
	}
	if ("US" == jtb43) {
		b4.style.display = "flex";
	}
	if ("US" == jtb53) {
		b5.style.display = "flex";
	}
	if ("US" == jtb63) {
		b6.style.display = "flex";
	}
	if ("US" == jtb73) {
		b7.style.display = "flex";
	}
}
function wwFn() {
	if ("word wide" == jtb13) {
		b1.style.display = "flex";
	}
	if ("word wide" == jtb23) {
		b2.style.display = "flex";
	}
	if ("word wide" == jtb33) {
		b3.style.display = "flex";
	}
	if ("word wide" == jtb43) {
		b4.style.display = "flex";
	}
	if ("word wide" == jtb53) {
		b5.style.display = "flex";
	}
	if ("word wide" == jtb63) {
		b6.style.display = "flex";
	}
	if ("word wide" == jtb73) {
		b7.style.display = "flex";
	}
}
function FullStack() {
	if ("Full Stack Developer" == jobtitle1) {
		b1.style.display = "flex";
	}
	if ("Full Stack Developer" == jobtitle2) {
		b2.style.display = "flex";
	}
	if ("Full Stack Developer" == jobtitle3) {
		b3.style.display = "flex";
	}
	if ("Full Stack Developer" == jobtitle4) {
		b4.style.display = "flex";
	}
	if ("Full Stack Developer" == jobtitle5) {
		b5.style.display = "flex";
	}
	if ("Full Stack Developer" == jobtitle6) {
		b6.style.display = "flex";
	}
	if ("Full Stack Developer" == jobtitle7) {
		b7.style.display = "flex";
	}
}
function FullStackPyDe() {
	num = 0;
	if ("Full Stack Python Developer" == jobtitle1) {
		b1.style.display = "flex";
		num++;
	}
	if ("Full Stack Python Developer" == jobtitle2) {
		b2.style.display = "flex";
		num++;
	}
	if ("Full Stack Python Developer" == jobtitle3) {
		b3.style.display = "flex";
		num++;
	}
	if ("Full Stack Python Developer" == jobtitle4) {
		b4.style.display = "flex";
		num++;
	}
	if ("Full Stack Python Developer" == jobtitle5) {
		b5.style.display = "flex";
		num++;
	}
	if ("Full Stack Python Developer" == jobtitle6) {
		b6.style.display = "flex";
		num++;
	}
	if ("Full Stack Python Developer" == jobtitle7) {
		b7.style.display = "flex";
		num++;
	}
	if (num == 0) {
		b1.style.display = "flex";
		b1.innerHTML = "<h1> No Data Found </h1>";
	}
}
function FullStackJvDe() {
	num = 0;
	if ("Full Stack Java Developer" == jobtitle1) {
		b1.style.display = "flex";
		num++;
	}
	if ("Full Stack Java Developer" == jobtitle2) {
		b2.style.display = "flex";
		num++;
	}
	if ("Full Stack Java Developer" == jobtitle3) {
		b3.style.display = "flex";
		num++;
	}
	if ("Full Stack Java Developer" == jobtitle4) {
		b4.style.display = "flex";
		num++;
	}
	if ("Full Stack Java Developer" == jobtitle5) {
		b5.style.display = "flex";
		num++;
	}
	if ("Full Stack Java Developer" == jobtitle6) {
		b6.style.display = "flex";
		num++;
	}
	if ("Full Stack Java Developer" == jobtitle7) {
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function FullStackWevDe() {
	num = 0;
	if ("Full Stack Web Developer" == jobtitle1) {
		b1.style.display = "flex";
		num++;
	}
	if ("Full Stack Web Developer" == jobtitle2) {
		b2.style.display = "flex";
		num++;
	}
	if ("Full Stack Web Developer" == jobtitle3) {
		b3.style.display = "flex";
		num++;
	}
	if ("Full Stack Web Developer" == jobtitle4) {
		b4.style.display = "flex";
		num++;
	}
	if ("Full Stack Web Developer" == jobtitle5) {
		b5.style.display = "flex";
		num++;
	}
	if ("Full Stack Web Developer" == jobtitle6) {
		b6.style.display = "flex";
		num++;
	}
	if ("Full Stack Web Developer" == jobtitle7) {
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function FullStackmernDe() {
	num = 0;
	if ("Full Stack MERN Developer" == jobtitle1) {
		b1.style.display = "flex";
		num++;
	}
	if ("Full Stack MERN Developer" == jobtitle2) {
		b2.style.display = "flex";
		num++;
	}
	if ("Full Stack MERN Developer" == jobtitle3) {
		b3.style.display = "flex";
		num++;
	}
	if ("Full Stack MERN Developer" == jobtitle4) {
		b4.style.display = "flex";
		num++;
	}
	if ("Full Stack MERN Developer" == jobtitle5) {
		b5.style.display = "flex";
		num++;
	}
	if ("Full Stack MERN Developer" == jobtitle6) {
		b6.style.display = "flex";
		num++;
	}
	if ("Full Stack MERN Developer" == jobtitle7) {
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function FroentEnd() {
	num = 0;
	if ("Froent End Developer" == jobtitle1) {
		b1.style.display = "flex";
		num++;
	}
	if ("Froent End Developer" == jobtitle2) {
		b2.style.display = "flex";
		num++;
	}
	if ("Froent End Developer" == jobtitle3) {
		b3.style.display = "flex";
		num++;
	}
	if ("Froent End Developer" == jobtitle4) {
		b4.style.display = "flex";
		num++;
	}
	if ("Froent End Developer" == jobtitle5) {
		b5.style.display = "flex";
		num++;
	}
	if ("Froent End Developer" == jobtitle6) {
		b6.style.display = "flex";
		num++;
	}
	if ("Froent End Developer" == jobtitle7) {
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function baCkentEnd() {
	num = 0;
	if ("Back End Developer" == jobtitle1) {
		b1.style.display = "flex";
		num++;
	}
	if ("Back End Developer" == jobtitle2) {
		b2.style.display = "flex";
		num++;
	}
	if ("Back End Developer" == jobtitle3) {
		b3.style.display = "flex";
		num++;
	}
	if ("Back End Developer" == jobtitle4) {
		b4.style.display = "flex";
		num++;
	}
	if ("Back End Developer" == jobtitle5) {
		b5.style.display = "flex";
		num++;
	}
	if ("Back End Developer" == jobtitle6) {
		b6.style.display = "flex";
		num++;
	}
	if ("Back End Developer" == jobtitle7) {
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}



function Check_Again_Ckecked() {
	boxHide();
	num = 0;
	if (google.checked == true) {
		googleFn();
		num++;
	}
	if (apple.checked == true) {
		appleFn();
		num++;
	}
	if (uss.checked == true) {
		USSFn();
		num++;
	}
	if (partTime.checked == true) {
		partTimeFn();
		num++;
	}
	if (fullTime.checked == true) {
		fullTimeFn();
		num++;
	}
	if (intenship.checked == true) {
		intenshipFn();
		num++;
	}
	if (freelanching.checked == true) {
		freelanchingFn();
		num++;
	}
	if (india.checked == true) {
		indiaFn();
		num++;
	}
	if (us.checked == true) {
		usFn();
		num++;
	}
	if (ww.checked == true) {
		wwFn();
		num++;
	}
	if (fsd.checked == true) {
		FullStack();
		num++;
	}
	if (fspd.checked == true) {
		FullStackPyDe();
		num++;
	}
	if (fsjd.checked == true) {
		FullStackJvDe();
		num++;
	}
	if (fswd.checked == true) {
		FullStackWevDe();
		num++;
	}
	if (fsmernd.checked == true) {
		FullStackmernDe();
		num++;
	}
	if (fred.checked == true) {
		FroentEnd();
		num++;
	}

	if (baed.checked == true) {
		baCkentEnd();
		num++;
	}
	if (html.checked == true) {
		htmlWORK();
		num++;
	}
	if (css.checked == true) {
		cssWORK();
		num++;
	}
	
	if (js.checked == true) {
		jsWORK();
		num++;
	}
	
	if (cpp.checked == true) {
		cppWORK();
		num++;
	}
	
	if (python.checked == true) {
		pythonWORK();
		num++;
	}
	
	if (num == 0) {
		boxShow();
	}
}

document.getElementById("googlef").addEventListener("click", mygoogleHS);
document.getElementById("applef").addEventListener("click", myappleHS);
document.getElementById("ussf").addEventListener("click", myUSSHS);
document.getElementById("ptf").addEventListener("click", myPartTimeJY);
document.getElementById("ftf").addEventListener("click", myFullTimeJY);
document.getElementById("intenshipf").addEventListener("click", myIntenshipJY);
document.getElementById("freelancingf").addEventListener("click", myFreeLanchingJY);
document.getElementById("indiaf").addEventListener("click", myindiaC);
document.getElementById("usf").addEventListener("click", usC);
document.getElementById("wwf").addEventListener("click", wwC);

document.getElementById("fsdf").addEventListener("click", fullstackdeve);
document.getElementById("fspdf").addEventListener("click", fullstackPydevo);
document.getElementById("fsjdf").addEventListener("click", fullstackJVdevo);
document.getElementById("fswdf").addEventListener("click", fullstackWEBdevo);
document.getElementById("fsmerndf").addEventListener("click", fullstackMERNdevo);
document.getElementById("pef").addEventListener("click", froentDeve);
document.getElementById("bef").addEventListener("click", BackentDeve);




function mygoogleHS() {
	if (google.checked == true) {
		boxHide();
		googleFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myappleHS() {
	if (apple.checked == true) {
		boxHide();
		appleFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myUSSHS() {
	if (uss.checked == true) {
		boxHide();
		USSFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}

function myFullTimeJY() {
	if (partTime.checked == true) {
		boxHide();
		partTimeFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myPartTimeJY() {
	if (fullTime.checked == true) {
		boxHide();
		fullTimeFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myIntenshipJY() {
	if (intenship.checked == true) {
		boxHide();
		intenshipFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myFreeLanchingJY() {
	if (freelanching.checked == true) {
		boxHide();
		freelanchingFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}

function myindiaC() {
	if (india.checked == true) {
		boxHide();
		indiaFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function usC() {
	if (us.checked == true) {
		boxHide();
		usFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function wwC() {
	if (ww.checked == true) {
		boxHide();
		wwFn();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function fullstackdeve() {
	if (fsd.checked == true) {
		boxHide();
		FullStack();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function fullstackPydevo() {
	if (fspd.checked == true) {
		boxHide();
		FullStackPyDe();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function fullstackJVdevo() {
	if (fsjd.checked == true) {
		boxHide();
		FullStackJvDe();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function fullstackWEBdevo() {
	if (fswd.checked == true) {
		boxHide();
		FullStackWevDe();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function fullstackMERNdevo() {
	if (fsmernd.checked == true) {
		boxHide();
		FullStackmernDe();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}

function froentDeve() {
	if (fred.checked == true) {
		boxHide();
		FroentEnd();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function BackentDeve() {
	if (baed.checked == true) {
		boxHide();
		baCkentEnd();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}





function htmlWORK(){
	num = 0;
	if("HTML" == b_l_11 || "HTML" == b_l_12 || "HTML" == b_l_13 || "HTML" == b_l_14 || "HTML" == b_l_15){
		b1.style.display = "flex";
		num++;
	}
	if("HTML" == b_l_21 || "HTML" == b_l_22 || "HTML" == b_l_23 || "HTML" == b_l_24 || "HTML" == b_l_25){
		b2.style.display = "flex";
		num++;
	}
	if("HTML" == b_l_31 || "HTML" == b_l_32 || "HTML" == b_l_33 ){
		b3.style.display = "flex";
		num++;
	}
	if("HTML" == b_l_41 || "HTML" == b_l_42 ){
		b4.style.display = "flex";
		num++;
	}
	if("HTML" == b_l_51 || "HTML" == b_l_52 ){
		b5.style.display = "flex";
		num++;
	}
	if("HTML" == b_l_61 ){
		b6.style.display = "flex";
		num++;
	}
	if("HTML" == b_l_71 ){
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}

function cssWORK(){
	num = 0;
	if("CSS" == b_l_11 || "CSS" == b_l_12 || "CSS" == b_l_13 || "CSS" == b_l_14 || "CSS" == b_l_15){
		b1.style.display = "flex";
		num++;
	}
	if("CSS" == b_l_21 || "CSS" == b_l_22 || "CSS" == b_l_23 || "CSS" == b_l_24 || "CSS" == b_l_25){
		b2.style.display = "flex";
		num++;
	}
	if("CSS" == b_l_31 || "CSS" == b_l_32 || "CSS" == b_l_33 ){
		b3.style.display = "flex";
		num++;
	}
	if("CSS" == b_l_41 || "CSS" == b_l_42 ){
		b4.style.display = "flex";
		num++;
	}
	if("CSS" == b_l_51 || "CSS" == b_l_52 ){
		b5.style.display = "flex";
		num++;
	}
	if("CSS" == b_l_61 ){
		b6.style.display = "flex";
		num++;
	}
	if("CSS" == b_l_71 ){
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function jsWORK(){
	num = 0;
	if("JAVASCRIPT" == b_l_11 || "JAVASCRIPT" == b_l_12 || "JAVASCRIPT" == b_l_13 || "JAVASCRIPT" == b_l_14 || "JAVASCRIPT" == b_l_15){
		b1.style.display = "flex";
		num++;
	}
	if("JAVASCRIPT" == b_l_21 || "JAVASCRIPT" == b_l_22 || "JAVASCRIPT" == b_l_23 || "JAVASCRIPT" == b_l_24 || "JAVASCRIPT" == b_l_25){
		b2.style.display = "flex";
		num++;
	}
	if("JAVASCRIPT" == b_l_31 || "JAVASCRIPT" == b_l_32 || "JAVASCRIPT" == b_l_33 ){
		b3.style.display = "flex";
		num++;
	}
	if("JAVASCRIPT" == b_l_41 || "JAVASCRIPT" == b_l_42 ){
		b4.style.display = "flex";
		num++;
	}
	if("JAVASCRIPT" == b_l_51 || "JAVASCRIPT" == b_l_52 ){
		b5.style.display = "flex";
		num++;
	}
	if("JAVASCRIPT" == b_l_61 ){
		b6.style.display = "flex";
		num++;
	}
	if("JAVASCRIPT" == b_l_71 ){
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function cppWORK(){
	num = 0;
	if("C++" == b_l_11 || "C++" == b_l_12 || "C++" == b_l_13 || "C++" == b_l_14 || "C++" == b_l_15){
		b1.style.display = "flex";
		num++;
	}
	if("C++" == b_l_21 || "C++" == b_l_22 || "C++" == b_l_23 || "C++" == b_l_24 || "C++" == b_l_25){
		b2.style.display = "flex";
		num++;
	}
	if("C++" == b_l_31 || "C++" == b_l_32 || "C++" == b_l_33 ){
		b3.style.display = "flex";
		num++;
	}
	if("C++" == b_l_41 || "C++" == b_l_42 ){
		b4.style.display = "flex";
		num++;
	}
	if("C++" == b_l_51 || "C++" == b_l_52 ){
		b5.style.display = "flex";
		num++;
	}
	if("C++" == b_l_61 ){
		b6.style.display = "flex";
		num++;
	}
	if("C++" == b_l_71 ){
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}
function pythonWORK(){
	num = 0;
	if("PYTHON" == b_l_11 || "PYTHON" == b_l_12 || "PYTHON" == b_l_13 || "PYTHON" == b_l_14 || "PYTHON" == b_l_15){
		b1.style.display = "flex";
		num++;
	}
	if("PYTHON" == b_l_21 || "PYTHON" == b_l_22 || "PYTHON" == b_l_23 || "PYTHON" == b_l_24 || "PYTHON" == b_l_25){
		b2.style.display = "flex";
		num++;
	}
	if("PYTHON" == b_l_31 || "PYTHON" == b_l_32 || "PYTHON" == b_l_33 ){
		b3.style.display = "flex";
		num++;
	}
	if("PYTHON" == b_l_41 || "PYTHON" == b_l_42 ){
		b4.style.display = "flex";
		num++;
	}
	if("PYTHON" == b_l_51 || "PYTHON" == b_l_52 ){
		b5.style.display = "flex";
		num++;
	}
	if("PYTHON" == b_l_61 ){
		b6.style.display = "flex";
		num++;
	}
	if("PYTHON" == b_l_71 ){
		b7.style.display = "flex";
		num++;
	}
	noDataPrint();
}

let html, css, js, cpp, python;
	html = document.getElementById("htmlf");
	css = document.getElementById("cssf");
	js = document.getElementById("jsf");
	cpp = document.getElementById("cppf");
	python = document.getElementById("pyf");

let b_l_11, b_l_12, b_l_13, b_l_14, b_l_15;
let b_l_21, b_l_22, b_l_23, b_l_24, b_l_25;
let b_l_31, b_l_32, b_l_33;
let b_l_41, b_l_42;
let b_l_51, b_l_52;
let b_l_61;
let b_l_71;

b_l_11 = document.getElementById("b_lang_1_1").innerHTML;
b_l_12 = document.getElementById("b_lang_1_2").innerHTML;
b_l_13 = document.getElementById("b_lang_1_3").innerHTML;
b_l_14 = document.getElementById("b_lang_1_4").innerHTML;
b_l_15 = document.getElementById("b_lang_1_5").innerHTML;
b_l_21 = document.getElementById("b_lang_2_1").innerHTML;
b_l_22 = document.getElementById("b_lang_2_2").innerHTML;
b_l_23 = document.getElementById("b_lang_2_3").innerHTML;
b_l_24 = document.getElementById("b_lang_2_4").innerHTML;
b_l_25 = document.getElementById("b_lang_2_5").innerHTML;

b_l_31 = document.getElementById("b_lang_3_1").innerHTML;
b_l_32 = document.getElementById("b_lang_3_2").innerHTML;
b_l_33 = document.getElementById("b_lang_3_3").innerHTML;
b_l_41 = document.getElementById("b_lang_4_1").innerHTML;
b_l_42 = document.getElementById("b_lang_4_2").innerHTML;

b_l_51 = document.getElementById("b_lang_5_1").innerHTML;
b_l_52 = document.getElementById("b_lang_5_2").innerHTML;
b_l_61 = document.getElementById("b_lang_6_1").innerHTML;
b_l_71 = document.getElementById("b_lang_7_1").innerHTML;

document.getElementById("htmlf").addEventListener("click", myHTML);
document.getElementById("cssf").addEventListener("click", myCSS);
document.getElementById("jsf").addEventListener("click", myJS);
document.getElementById("cppf").addEventListener("click", myCPP);
document.getElementById("pyf").addEventListener("click", myPYTHON);



function myHTML(){
	if (html.checked == true) {
		boxHide();
		htmlWORK();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myCSS(){
	if (css.checked == true) {
		boxHide();
		cssWORK();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myJS(){
	if (js.checked == true) {
		boxHide();
		jsWORK();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myCPP(){
	if (cpp.checked == true) {
		boxHide();
		cppWORK();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}
function myPYTHON(){
	if (python.checked == true) {
		boxHide();
		pythonWORK();
		Check_Again_Ckecked();
	}
	else {
		boxShow();
		Check_Again_Ckecked();
	}
}