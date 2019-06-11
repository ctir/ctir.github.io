//Author: Charles Tiriamai

function showMore(divId, hideId, showId){
    //alert(divId);    
    //alert(hideId);
    //alert(showId);
    document.getElementById(divId).classList.add("grid-container");
    document.getElementById(divId).classList.remove("hidden");
    //alert("grid good");
    //alert("remove hidden good");
    document.getElementById(hideId).classList.add("hidden");
    //alert("add hidden good");    
    document.getElementById(showId).classList.remove("hidden");
}