var a,b,c="PEAK",y=50,word="Peak",d,e,f,g,s,four,pa,pb,pc,howplay, inst, instru;
var GameState="preload"

function bulls()
{

   var aa=four.charAt(0);
  var ab=four.charAt(1);
  var ac=four.charAt(2);
  var ad=four.charAt(3);
  var bn=0;
  var cn=0;
  
  word=a.value();
  var wordA=word.toLowerCase();

   if(word.length!==4)
   {
    alert("put only four letters word");
   }

   if(wordA.charAt(0)==aa)
   {
    bn=bn+1;
   }

   if(wordA.charAt(1)==ab)
   {
    bn=bn+1;
   }

   if(wordA.charAt(2)==ac)
   {
    bn=bn+1;
   }

   if(wordA.charAt(3)==ad)
   {
    bn=bn+1;
   }

   if(wordA.charAt(0)==ab||wordA.charAt(0)==ac||wordA.charAt(0)==ad)
   {
    cn=cn+1;  
   }

   if(wordA.charAt(1)==aa||wordA.charAt(1)==ac||wordA.charAt(1)==ad)
   {
    cn=cn+1;  
   }

   if(wordA.charAt(2)==ab||wordA.charAt(2)==aa||wordA.charAt(2)==ad)
   {
    cn=cn+1;  
   }

   if(wordA.charAt(3)==ab||wordA.charAt(3)==ac||wordA.charAt(3)==aa)
   {
    cn=cn+1;  
   }

   if(word.length==4)
   {
    var i;
    for( i =0;i<s.length;i=i+1)
    {
     if(s[i].includes(wordA))
     {
      break;
     }
     
    }

    if(i<s.length)
    {
     var d=createElement("h2");
     d.position(575,y);
     d.html(a.value()); 

     var zz=createElement("h2");
     zz.position(850,y);
     zz.html(bn);
    

     var z=createElement("h2");
     z.position(1200,y);
     z.html(cn);
     y=y+50;

    }
    else if(i==s.length)
    {
      alert("ENTER A VALID WORD");
    }
  }
   } 
    function instructions()
     {
       alert(inst);
       alert(instru);
     }
    

function preload()
{
 pa=loadImage("cowface4.png")
pb=loadImage("bullface6.png")
pc=loadImage("bullscow5.png")
}

function setup()
{
 /*if(GameState=="Preload")
 {
  var pa=createButton("Play");
  pa.position(200,620);
  GameState="Play"
 }
 if(GameState=="Play")
 {*/
 var r=Math.round(random(0,s.length-1));
 four=s[r]
 
 
   a=createInput("");
   a.position(50,70);

   b=createButton("SUBMIT");
   b.position(200,580);
   b.mousePressed(bulls);

   howplay=createButton("HOW TO PLAY");
   howplay.position(50,15);
   howplay.mousePressed(instructions)

   e=createElement('h1');
   e.position(575,10);
   e.html("Word");


   f=createElement('h1');
   f.position(700,10);
   f.html("Number of Bulls");

   g=createElement('h1');
   g.position(1050,10);
   g.html("Number of Cows");
    createCanvas(1400,700);
 
 
}
function draw()
{
  image(pa,1050,70,80,80);
  image(pb,700,70,80,80);
  image(pc,100,200,400,300);
}