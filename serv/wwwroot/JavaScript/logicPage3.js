const container = document.getElementById("box5");

window.onload = () =>{
    UploadHtml();
}

async function UploadHtml(){
    const response = await fetch("/api/updates/get/1").
    then(response => response.json()).then(data => {
        container.innerHTML = data.innerHtml;
        console.log(data);
	})
}