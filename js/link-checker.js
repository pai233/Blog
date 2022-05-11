$(document).ready(function(){
    checkLink();
});
$(document).on('pjax:complete', function () {
    checkLink();   
});
async function checkLink(){
    console.log("Running...")
    let link = document.getElementsByTagName('a');
    //console.log(link)
    for(var i=0;i<link.length;i++){
        if(link[i].href==="" || link[i].className==="gitter-open-chat-button" || link[i].className==="twikoo-count")continue;
        if(!await checkLocalSite(link[i].href)){
            link[i].href = "https://go.pai233.top/#"+window.btoa(link[i].href)
            console.log("edit.")
        }
    }
}
async function checkLocalSite(url){
    try{
        console.log("check:",url)
        let domain = url.split("/")[2];
        if(domain.endsWith("pai233.top")||domain.endsWith("localhost:4000"))return true;
        return false;
    }catch(err){
        return true;
    }
}