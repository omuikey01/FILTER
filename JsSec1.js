let comNameD, jobTypeD, workInD, jobTitleD, languD;

comNameD = document.getElementById("cnD");
jobTypeD = document.getElementById("jtD");
workInD = document.getElementById("wiD");
jobTitleD = document.getElementById("jtitleD");
languD = document.getElementById("lngD");

comNameD.style.display = "none";
jobTypeD.style.display = "none";
workInD.style.display = "none";
jobTitleD.style.display = "none";
languD.style.display = "none";


document.getElementById("cnh").addEventListener("click", CName);
document.getElementById("jth").addEventListener("click", jType);
document.getElementById("wih").addEventListener("click", workId);
document.getElementById("jtitleh").addEventListener("click", jobTitle);
document.getElementById("lngh").addEventListener("click", langE);


function CName() {
	if (comNameD.style.display == "none") {
		comNameD.style.display = "block";
	}
	else {
		comNameD.style.display = "none";
	}
}

function jType() {

	if (jobTypeD.style.display == "none") {
		jobTypeD.style.display = "block";
	}
	else {
		jobTypeD.style.display = "none";
	}
}
function workId() {

	if (workInD.style.display == "none") {
		workInD.style.display = "block";
	}
	else {
		workInD.style.display = "none";
	}
}
function jobTitle() {

	if (jobTitleD.style.display == "none") {
		jobTitleD.style.display = "block";
	}
	else {
		jobTitleD.style.display = "none";
	}
}
function langE() {
	if (languD.style.display == "none") {
		languD.style.display = "block";
	}
	else {
		languD.style.display = "none";
	}
}
