// while loop1

var count=0;
var msg="<br>";
var val=0;
while(count<5)
{
    val = prompt("Enter the value "+":");
    msg=msg+"The value enterede is:"+val+"<br>";
    count++;
}
document.write(msg);

//while loop2
var count=0;
var val=0, total=0;
while(count<5)
{
    val = prompt(" Enter the marks for  Subject"+":");
    total=total+parseInt(val);
    count++;
}
document.write("The Total marks obtained are: "+total);