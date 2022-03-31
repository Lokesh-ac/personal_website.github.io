
var timenow;
var current=new Date();
timenow=current.getHours();
if(timenow>=16)
{
  document.getElementById("greetline").innerHTML="Hello, Good Evening Welcome !!";
}
else if(timenow>=12)
{
  document.getElementById("greetline").innerHTML="Hello, Good Afternoon Welcome !!";
}
else if(timenow<12)
{
  document.getElementById("greetline").innerHTML="Hello, Good Morning Welcome !!";
}
