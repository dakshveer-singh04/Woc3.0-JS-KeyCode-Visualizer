/*Loading the table*/
var output='<table id="maintable" align="center" >';
output+='<tr> <th>Key Code</th> <th>Key</th></tr>';
var i;
for (i in keyCodes ){
    output+=`<tr>
            <td> ${i} </td>
            <td> ${keyCodes[i]}</td>
            </tr>`;
} 
output+='</table>';
document.getElementById("mytable").innerHTML=output;

maintable=document.getElementById("maintable");
/*Event*/
window.addEventListener("keydown",printkey,false);
let tablelement=document.getElementById("mytable");
let displ=document.getElementById("disp");

function printkey(key){
    if (tablelement.style.getPropertyValue("display")!="none"){
        console.log("Showing Button");
        displ.style.visibility="visible";
        console.log(displ.style.getPropertyValue("display"));
        tablelement.style.setProperty("display","none");

        /*Changing the CSS Styling*/
        document.body.style.setProperty("background","rgb(50, 216, 72)");
    }

    let j=keyCodes[(key.keyCode)];
    let i=(key.keyCode);
    document.getElementById("keycode").innerHTML="KeyCode : "+i;
    document.getElementById("key").innerHTML="Key : "+j;
    console.log("Table : " +tablelement.style.getPropertyValue("display"));
    console.log("Disp: "+displ.style.getPropertyValue("display"));
    console.log("Done Bro !");
}

function show(){
    displ.style.visibility="hidden";
    document.body.style.setProperty("background","rgb(245, 172, 78)");
    tablelement.style.display="";
}