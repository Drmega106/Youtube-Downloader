let container = document.querySelector(".container");
let input = document.querySelector(".vinput input");
let btn = document.querySelector(".btn");
let videos = document.querySelector(".videos");
let vlink = "";



if (input.value === "") {
    videos.innerHTML = "<span> ...your video will appear here </span>"
} 
btn.onclick = function () {
    if (input.value === "") {
        videos.innerHTML = "<span> Please type the URL ...</span>"
    }else {
    let mylink = {
        "url" : input.value
       };
    let xhttp = new XMLHttpRequest;
    xhttp.open("post", "https://save-from.net/api/convert");
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send(JSON.stringify(mylink));

    let data = "";
    let dataobj;
    xhttp.onload = function () {
        if (xhttp.status != 200) {
            videos.innerHTML = "<span> ....incorrect Url ! </span>"
        } else {
            videos.innerHTML = "";
            data = this.responseText;
            dataobj = JSON.parse(data);
            let video = document.createElement("div");
            video.classList.add("video");
            video.innerHTML =  ` <img src=${dataobj.thumb} alt="thumb" class="vimg"</img>  
            <div class="vname">${dataobj.meta.title}</div>` ;
            videos.appendChild(video);
            let urls = dataobj.url.slice(0,2);
            urls.forEach( e => {
                let downloadbtn = document.createElement("a");
                downloadbtn.classList.add("downloadbtn");
                downloadbtn.innerHTML= `${e.subname} ${e.type}`;
                downloadbtn.href = e.url;
                downloadbtn.target = "_blank";
                videos.appendChild(downloadbtn);

            });


            console.log(urls)
            
           
};
};
};
};
