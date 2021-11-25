let sctn_3 = document.getElementById("box3");
let sctn_6 = document.getElementById("box6");
let sctn_5 = document.getElementById("box5");
let sctn_4_cont = document.getElementById("box4").childNodes[1];
var count = 0;
let button = document.getElementById("enterbutton");

// ======#1======
sctn_3.onclick = function(event){
    Swapp();
}
sctn_6.onclick = function(event){
    Swapp();
}

function Swapp()
{
    let box3_container = document.getElementById("box3");
    let box3_content = document.getElementById("box3").innerHTML;
    let box6_container = document.getElementById("box6");
    let box6_content = document.getElementById("box6").innerHTML;
    let temp = box3_content;
    
    box3_container.innerHTML=box6_content;
    box6_container.innerHTML=temp;  
}

// ======#2======
sctn_5.childNodes[1].onclick = function(event){
    if(count < 4)
    {
        Area();
    }
    else {
        alert ("Too Many Requests");
    }
}

function Area()
{
    count++;
    let a = 5; 
    let b = 8;
    let h = 3
    let res = (a+b)*h/2; 

    document.getElementById("area").value = res.toString();
}

// ======#3======
window.onload = reloadCookie();
function reloadCookie(){
    let result = confirm("The data in cookies: " + document.cookie + "\nClick OK to delete cookies.");
	if(result)  
	{
		deleteCookie("cookie1");
		document.getElementById("inputString").style.display = "none";
		document.getElementById("convertButton").style.display = "none";
		
		let res = confirm("Cookies deleted.\nPress OK to reload page and start again.");
		if(res)
		{
			window.location.reload();
		}
	} 
}

function getCookie(name){
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}){
	if (options.expires instanceof Date) 
	{
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) 
	{
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
		if (optionValue !== true) 
		{
			updatedCookie += "=" + optionValue;
		}
	}
  
	document.cookie = updatedCookie;
}

function deleteCookie(name){
    setCookie(name, "", {
        'max-age': 0
    });
}

button.onclick = function(event){
    dividersSearch();
}

function dividersSearch(){
    let enterNum = document.getElementById("enternum");
    var arr = [];
    for (var i = 0, length = enterNum.value; i <= length; i++)
    {
        if(enterNum.value%i==0)
        {
            arr.push(i);
        }
    }
    var result = "";
    arr.forEach(element => {
        result += " " + element;
    });

    alert(result);
    setCookie("dividers", result);
    entarea.value="";
}

// ======#4======

const selectElement = document.querySelector('.caseschange');
var radio_key = -1;

selectElement.addEventListener('change', function() {
    if(event.target.value == "0"){
        sctn_4_cont.textContent = Upper(sctn_4_cont.textContent);
    }
    else if (event.target.value == '1'){
        sctn_4_cont.textContent = Lower(sctn_4_cont.textContent);
    }
    else if (event.target.value == "-1"){
        delete localStorage.radio_key;
    }
    else{return;}
}, false);

function Upper(str){
    radio_key = 0;
    localStorage.setItem('radio_key', radio_key.toString());
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

function Lower(str){
    radio_key = 1;
    localStorage.setItem('radio_key', radio_key.toString());
    return str.replace(/(^|\s)\S/g, function(a) {return a.toLowerCase()})
}

function Start(){
    if(localStorage.radio_key == '0'){
        sctn_4_cont.textContent = Upper(sctn_4_cont.textContent);
    }
    else if(localStorage.radio_key == '1'){
        sctn_4_cont.textContent = Lower(sctn_4_cont.textContent);
    }
    else{
        return;
    }
}

Start();

// ======#5======
