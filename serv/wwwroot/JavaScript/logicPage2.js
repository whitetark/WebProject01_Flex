var imageSize = 15;

window.onload = () =>{
    SetMasonry();
    AddPicture();
    ChangeSize();
}

function SetMasonry(){
    const grid = document.querySelector('.grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 5,
    });
}

function AddPicture(){
    const grid = document.querySelector('.grid');
    const button = document.querySelector('.enterbutton');
    const url = document.querySelector('.area');

    button.onclick = function(event){
        const imgBox = document.createElement("div");
        imgBox.className = "grid-item";

        const image = document.createElement("img");
        image.className = "grid-img";
        image.alt = "";
        image.src = url.value;

        imgBox.appendChild(image);
        url.value = "";

        image.onclick = function(event){
            image.remove();
            SetMasonry();
            SaveHtml();
        }

        grid.appendChild(imgBox);
        imgBox.style.width = imageSize + "%";

        SetMasonry();
        SaveHtml();
    }
}

function ChangeSize(){
    const button = document.querySelector('.saveBtn');
    const needSize = document.querySelector('.area');

    button.onclick = function(event){
        var needSizeInt = parseInt(needSize.value);
        console.log(needSizeInt);
        if(needSizeInt.toString() != "NaN")
        {
            const hidingDivs = document.querySelectorAll('.grid-item');
            console.log(hidingDivs);
            hidingDivs.forEach(pic=>{
                pic.style.width = needSizeInt + "%"
            });
            imageSize = needSizeInt;
        }
        else
        {
            alert('NaN');
        }
        needSize.value = "";
        SetMasonry();
        SaveHtml();
    }
}

async function SaveHtml(){
    const data = document.querySelector(".grid").outerHTML;
    const response = await fetch("/api/updates/put?id=1", {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            id: 1,
            innerhtml: data
        })
    });
}