//for loop1


var count=0;
var msg="<br>";
var val=0;
document.write("<br> <br> <br>")
for(count=0;count<5;count++)
{
    val = prompt("Enter the value "+":");
    msg=msg+"The value entered is:"+val+"<br>";
}
document.write(msg);

//for loop 2
var count=0;
var val=0, total=0;
for(count=0;count<5;count++)
{
    val = prompt(" Enter the marks for  Subject"+(count+1)+":");
    total=total+parseInt(val);
}
document.write("The Total marks obtained are: "+total);