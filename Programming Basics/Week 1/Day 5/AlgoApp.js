

//// level 10 ////


//=== activity 1 ===


x=[['coding,boom']['dojo','yeah']];
console.log(x[0][0]+'-'+x[1][0]) ;


//=== activity 2 ===

var x= [[5,10],[15,20,25,30],[45,50]];
console.log(x[1][3]+x[2][1]+x[0][0]);


//=== activity 3 ===

var x=2 ; 
var y=[[2,4,6,8],10,[12,32,50]];
if(y[0][0]==x){
    console.log('Hello World');

    }
    else{
        console.log('Coding Dojo');
    }




//=== activity 4 ===



var numbers=[[1,4,5,7],[2,6,8,9]];
if(numbers[0][7]==7){
    numbers[0].push(10);
    console.log(numbers[0]) ;

}



//=== activity 5 ===


var x=[[2,4,6,8],[12],[10,32,50]];
if(x[1][0]-x[2][0]==x[0][0]){
    console.log(x[1][0]+x[2][1]+x[0][2])
}
else{
    console.log(x[0][0]+x[1][0]+x[0][3])
}




//// level 11 ////


//=== activity 1 ===

var x=[] ;
x[0]= 'hello' ;
x[1]= 'world' ;
x[2]= '100' ;
console.log(x.length +' '+x[0]);



//=== activity 2 ===


var x= 2;
var points=[40,100,1,5,25,10];
if(points[x]==1){
    console.log(points[x-2]);
}
else {
    console.log('hello') ;
}



//=== activity 3 ===


var x=2 ;
var y=[1,2,3,4,5];
var z=[6,7,8,9,10];

if(y[x]+z[1]==z[4]){
    console.log('dojo')
}
else{
    console.log('hello world')
}



//=== activity 4 ===


var x= 'boom';
var y=['hi','hello','hey'];
if(x.length==3){
    y.push(x);
}
else{
    console.log(x);
}

//=== activity 5 ===

var x=['john','chris','mark','pj'];
if(x.length==4){
    console.log(x[x.length-3]);
}
else{
    console.log('dojo')
}



//// level 12 ////


//=== activity 1 ===

var a= 100;
function abc(){
    var a=25 ;
}
console.log(a);


//=== activity 2 ===

var a=100 ;
function abc(){
    var a=25;
}
abc();


//=== activity 3 ===


var a=100 ;
function abc(){
    var a=25 ;
    console.log(a);
}
abc();
console.log(a)



//=== activity 4 ===

var x=10 ;
function abc(x){
    console.log(x)
    return x*10 
}
console.log(x);


//=== activity 5 ===

var x=10 ;
function abc(x){
    console.log(x);
    return x*10;
}
abc(x);
console.log(x);



//=== activity 6 ===

var x=1 ;
function abc(x){
    console.log(x);
    return x*10;
}
var z=abc(x);
console.log(z);



//=== activity 7 ===


var x=10 ;
function abc(x){
    console.log(x);
    return x*10 ;
}
var z= abc(x)+abc(x);
console.log(z);



//=== activity 8 ===

var x=10 ;
function abc(x,y){
    x=x+10 ;
    y=y+10 ;
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);


//=== activity 9 ===

var x=10 ;
var y=20 ;
function abc(x,y){
x=x+10 ;
y=y+10 ;
console.log(z);
console.log(y);
}
abc(x,y);
console.log(x);
console.log(y);


//=== activity 10 ===

var x=10 ; 
var y=20 ;
function abc(x,y){
    x=x+10;
    y=y=10;
    console.log(x);
    console.log(y);
    return x*10 ;
}
z=abc(x,y);
console.log(x);
console.log(y);
console.log(z);


//=== activity 11 ===

var x=10 ;
var y=20 ;
function abc(x,y){
    x=x+10 ;
    y=y+10 ;
    return x*10 ;
}
z=abc(x,y)+abc(y,x);
console.log(z);


//=== activity 12 ===

var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for(var i=1; i<x.length ; i++){
        x[i]=x[i]+2;
    }
}
abc();
console.log(x);



//=== activity 13 ===

var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for(var i=0 ; i<x.length ; i++){
        x[i]=x[i]+2 ; 
    }
    return x;
}
abc() ;
console.log(x);



//=== activity 14 ===


var x=[1,3,5,7];
function abc(){
    var x=[0,1,2,3];
    for(var i=0 ; i<x.length ; i++){
        x[i]=x[i]+2;
    }
     return x;
}
x=abc();
console.log(x);



//=== activity 15 ===

function abc(num){
var arr=[];
for(var i=0 ; i<num ; i++){
    arr.push(i);
}
return arr;
}
dojo=abc(5);
console.log(dojo);


//=== activity 16 ===

function abc(num){
    var arr=[];
    for(var i=0 ; i<num ; i++){
        if(i%2==0){
            arr.push(i);
        }
    }
    return arr;
}
dojo=abc(5);
console.log(dojo);


//=== activity 17 ===

function abc(arr){
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]<0){
            arr[i]='dojo'
        }
    }
}
return arr ;
output=abc([-3,0,3,-5]);
console.log(output) ;


//=== activity 18 ===


function abc(number){
    var arr=[] ;
    for(var i=0 ; i<number ; i++){
        arr.push(0);
    }
    return arr;
}
output=abc(5);
console.log(output);


//=== activity 19 ===


function abc(number){
    var sum = 0 ;
    for(var i=0 ; i<number ; i++){
        sum=sum+i;
    }
    console.log(sum);
    return sum+10 ;
}
output=abc(2) ;
console.log(output);



//=== activity 20 ===


function abc(number){
    var sum=0 ; 
    for(var i=0 ; i<number ; i++){
        sum=sum+10 ;
    }
    console.log(sum);
    return sum+10 ;
}
output=abc(2)+abc(3) ;


//=== activity 21 ===

function looping (x,y){
    for(var i=0 ; i<x ; i++){
        for(var j=0; j<y ; j++){
            console.log(j*y);
        }
    }
}
return x*y;
z=looping(2,3);
console.log(z);









































































































