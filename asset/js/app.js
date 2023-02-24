var cl = console.log;

var stdArray = [{
    fname: "tony",
    lname: "stark",
    nickname: "ironman",
    email:"tony@stark.com"
},
{
    fname: "peter",
    lname: "parker",
    nickname: "pk",
    email:"pk@stark.com"
},
{
    fname: "Bruce",
    lname: "Wayne",
    nickname: "Batmen",
    email:"bruce@wayne.com"
},
{
    fname: "Stephen",
    lname: "strange",
    nickname: "dr stange",
    email:"de@strange.com"
},
]
var result = ' ';
var stdInfoContainer=document.getElementById('stdInfoContainer')
for(var i=0; i<stdArray.length; i++){

    //cl(stdArray[i].fname+" "+ stdArray[i].lname);
    result +="<tr>"
    result +="<td>" +(i+1) + "</td>";
    result +="<td>" + stdArray[i].fname + "</td>"
    result +="<td>" + stdArray[i].lname + "</td>"
    result +="<td>" + stdArray[i].nickname + "</td>"
    result +="<td>" + stdArray[i].email + "</td>"

    result += "</tr>"
}

cl(result);
stdInfoContainer.innerHTML=result;

