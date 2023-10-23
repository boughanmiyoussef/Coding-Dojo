


//// level 6 ////


//=== activity 1 ===

function a(){
    console.log(5) ;
}
a();


//=== activity 2 ===

function a() {
    console.log(55) ;
}

//=== activity 3 ===

a() ;
function a(){
    console.log(25) ;
}

//=== activity 4 ===

a();
function a(){
    var b=25 
    b=b+10 ;
    console.log(b)
}

//=== activity 5 ===

function a(b,c){
    console.log(b) ;
    console.log(c) ;
}
a(3,5) ;


//=== activity 6 ===

function a(b,c){
    return b+c ;
}
console.log(a(3,5)) ;



//=== activity 7 ===

function a(b,c){
    return b*c ;
}
console.log(a(3,5));


//=== activity 8 ===

function a(b,c){
    return b*3-c ;
}

console.log(a(3,2));
console.log(a(1,1));

//=== activity 9 ===

function a(b,c){
    return b+c ;
}
console.log(a(1,1)+a(2,2))


//=== activity 10 ===

function a(b,c){
    return b+c ;
}
console.log(a(1),a(2,3)) ;


//=== activity 11 ===

function a(b,c){
    return b+c
}
console.log(a(a(1,2),a(2,3)));



//=== activity 12 ===

function a(b,c){
    return b+c ;
}
    console.log(a(a(1,2),a(2,a(1,2))))


    //=== activity 13===

    function a(b,c){
        console.log(b) ;
        return b+c ;
    }
    console.log(a(3,2));



    //=== activity 14 ===


function a(b,c){
    console.log(c);
    return b-c ;
}
console.log(a(3,2));
console.log(1) ;


//=== activity 15 ===


function a(){
return 25 ;
return 50 ;
}
console.log(a()) ;
console.log(25) ;


//=== activity 16 ===


function a(b,c){
    return 25 ;
    return b+c ;
}
console.log(a(3,2));
console.log(25) ;


//=== activity 17 ===

function a(b,c){
    return b+c ;
}
console.log(a(a(2,3),a(1,1)))


//=== activity 18 ===

function a(b,c){
    return 0 ;
}
console.log(a(a(2,3),a(1,1))) ;



//// level 7 ////


//=== activity 1 ===

for(var i=1 ; i<10 ; i++){
    if(i==10) {
        break ;
    }
    console.log(i);
}

//=== activity 2 ===

for(var i=1 ; i<=20 ; i++){
    if(i==50){
        break ;
    }
    console.log(i) ;
}


//=== activity 3 ===


for(var i=1 ; i<=20 ; i++){
    if(i>5){
        break ;
    }
else{
    console.log('hello') ;
}
}


//=== activity 4 ===


for(var i= 9 ; i<=20 ; i++){
    if(i==10){
        break ;
    }
else {
    console.log('hello')
}
    console.log(i) ;
}


//=== activity 5 ===

var message = 'codingdojo' ;
for(var i=5 ; i<20 ; i++){
    if(i==message.length){
        break ;
    }
    console.log(i) ;
}


//// level 8 ////


//=== activity 1 ===

for(num = 1 ; num1<=3 ; num1 ++){
    for(num2=1 ; num2<=2 ; num2++){
        console.log('Dojo') ;
    }
}


//=== activity 2 ===

for(var num1 = 0 ; num1<=3 ; num1++){
    for(var num2= 0 ; num2<=2 ; num2++){
        if(num1==5){
            console.log('coder')
        }
    }
    console.log('ninja')
}


//=== activity 3 ===

var x='coding' ;
var y='dojo' ;
for(num1= 0 ; num1<=x.length-3 ; num1++ ){
    for(num2=0 ; num2<=0 ; num2++){
        console.log(x+y) ;
    }
}


//=== activity 4 ===

var msg1='hello' ;
var msg2='world !' ;
for(var num1=1 ; num1<=msg1.length ; num1++){
    for(var num2=1 ; num2<=msg2.length ; num2++){
        if(msg1.length ==4){
            console.log(msg1+' '+msg2);
        }
    }
    if(num1 !=4){
        console.log(msg1.length+msg2.length)
        }
    }


    //=== activity 5 ===

var array=[5,3,4,1] ;
for(var x= 0 ; x<array.length ; i++){
    for(var y= array.length-1 ; y>=x ; i--){
        if(array[x]>array[y]){
            var temp=array[y];
            array[y]=array[x];
            array[x]=temp;
        }
    }
}
console.log(array);



//// level 9 ////


//=== activity 1 ===


var number = ' ';
var x=5;

while(x<10){
    number +=x
    number=number+x;
    x++;
}
console.log(number) ;



//=== activity 2 ===

var count=1 ; 
while(count<5){
    console.log('Dojo')
    count++ ;
}

//=== activity 3 ===

var x=1;
var y=48 ;
while(x<100){
    if(x==y){
        break;
    }
    x++;
}
console.log(x);



//=== activity 4 ===


var message='coding';
var x=1 ;
while(x<100){
    x++;
}
console.log('message');


//=== activity 5 ===

var x=7 ;
var message= 'message' ;
while(x>message.length){
    console.log(message+x)
    x--;
}















