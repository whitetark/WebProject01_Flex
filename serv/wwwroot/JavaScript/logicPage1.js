let sctn_3 = document.getElementById("box3"); //for 1st task
let sctn_6 = document.getElementById("box6"); //for 1st task
let sctn_5 = document.getElementById("box5"); //for 2nd task
let sctn_4_cont = document.getElementById("box4").childNodes[1]; //for 4th task
let sctn_4 = document.getElementById("box4"); //for 5th task
let altbox = document.getElementById("x"); //for 5th task

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
var count = 0;
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
let button = document.getElementById("enterbutton");

window.onload = reloadCookie();
function reloadCookie(){
    if(getCookie("cookie1")){
        let result = confirm("The data in cookies: " + getCookie("cookie1")+ "\nClick OK to delete cookies.");
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
    setCookie("cookie1", result);
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
var already_generated = 0;
altbox.onclick = function(event){
   if(already_generated == 0){
    GenEntryField();
        already_generated++;
   }
}

function GenEntryField(){
    var tag1 = document.createElement("form");
    tag1.name = "imgforms";
    tag1.action="";

    var tag2 = document.createElement("input");
    tag2.type = "button";
    tag2.id = "saveBtn";
    tag2.value = "Save";
    
    var tag3 = document.createElement("input");
    tag3.type = "text";
    tag3.id = "urlpic";
    
    var tag4 = document.createElement("input");
    tag4.type = "button";
    tag4.id = "showBtn";
    tag4.value = "Show All";

    tag1.appendChild(tag2);
    tag1.appendChild(tag3);
    tag1.appendChild(tag4);
    sctn_5.appendChild(tag1);

    var div1 = document.createElement("div");
    div1.style = "display: flex; flex-direction: column;";
    div1.id = "album";    
    sctn_4.appendChild(div1);

    tag2.onclick = function(event){
        SavePicture(tag3, div1);
    }

    tag4.onclick = function(event){
        ShowAllPics(div1);
    }
}

function SavePicture(url, div1){
    var div2 = document.createElement("div");
    div2.style = "display: flex; flex-direction: column; align-items: center";   
    var p = document.createElement("p");
    var img1 = document.createElement("img");

    div2.appendChild(p);
    
    img1.src = url.value;
    img1.alt = "Image Not Found";
    img1.style = "height: 250px; width: 250px;"
    div2.appendChild(img1);
    url.value = "";
    var urimg = localStorage.getItem("pic")+"@"+img1.src;
    localStorage.setItem("pic", urimg);

    var deletebut = document.createElement("button");
    deletebut.name = "delbut";
    deletebut.textContent = "Delete Photo"
    deletebut.style= "background-color: #101010; color: white; border-radius: 5px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); width:100px; height:25px;"
    deletebut.id = img1.src;
    div2.appendChild(deletebut);
    div1.appendChild(div2);

    deletebut.onclick = function(event){
        deletebut.parentNode.remove();
        localStorage.setItem("pic", localStorage.getItem("pic").replace('@'+deletebut.id,''));
    }
}

function ShowAllPics(div1){
    div1.innerHTML = '';
    var arr = localStorage.getItem("pic").split('@');
    arr.forEach(element => {
        if(element != 'null'){            
            var p = document.createElement("p");
            var div2 = document.createElement("div");
            div2.style = "display: flex; flex-direction: column; align-items: center";   

            div2.appendChild(p);
            var img1 = document.createElement("img");
            img1.src = element;
            img1.alt = "Image Not Found";
            img1.style = "height: 250px; width: 250px;"
            div2.appendChild(img1);

            var deletebut = document.createElement("button");
            deletebut.name = "delbut";
            deletebut.textContent = "Delete Photo"
            deletebut.id = img1.src;
            deletebut.style= "background-color: #101010; color: white; border-radius: 5px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); width:100px; height:25px;"
            div2.appendChild(deletebut);
            div1.appendChild(div2);

            deletebut.onclick = function(event){
                deletebut.parentNode.remove();
                localStorage.setItem("pic", localStorage.getItem("pic").replace('@'+deletebut.id,''));
            }
        }
    });
}
