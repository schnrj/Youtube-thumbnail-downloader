document.getElementById("thumbnailForm").addEventListener("submit",function(event){
   event.preventDefault();

 var url=document.getElementById("youtubeURL").value;
//  console.log(url);
var videoid=extractVideoId(url);
// console.log(videoid);
if(videoid){
    // generating the thumbnail on the page
    var thumbnailurl="https://img.youtube.com/vi/"+videoid+"/maxresdefault.jpg";
    
    // here i am displaying the image on the page itself so that if user just want to see the thumbnail he can see here
    console.log(thumbnailurl);

    displaythumbnail(thumbnailurl);

    // if user wants to download the thumbnail then
    downloadthumbnail(thumbnailurl);
}
else{
    alert("Invalid url,Please try again");
}
});

function extractVideoId(url){
    var match = url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/i);
    return match ? match[1] : null;
}

function displaythumbnail(url) {
    var container = document.getElementById("thumbnailContainer");
    container.innerHTML = `<img src="${url}" alt="YouTube Thumbnail">`;
}

function downloadthumbnail(url) {
    var link = document.createElement("a");
    link.href = url;
    link.target = "_blank";  // Open in a new tab so the download happens properly
    link.download = "thumbnail.jpg";

 
    document.body.appendChild(link);
    link.click();

    // Clean up the DOM
    document.body.removeChild(link);
}