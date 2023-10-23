

//// level 4 ////


//=== activity 1 ===


var counter =1  ;
if(counter ==1)
{
    console.log('hello') ;
}



//=== activity 2 ===

var counter =1 ;
if(counter ==1 ){
    console.log('hello') ;
}
else if(counter ==2){
    console.log('world') ;
}

//=== activity 3 ===

var counter = 2 ;
if(counter < 10){
    console.log('less than 10') ;
}
else{
    console.log('greater or equal than 10') ;
}

//=== activity 4 ===

var counter = 1 ;
if(counter ==5){
    console.log('coding') ;
}
else{
    console.log('Dojo') ;
}

//=== activity 5 ===

var x= [2,4,5] ;
var counter = 0 ;
if(x[counter]<5){
    console.log('coding') ;
}
else{
    console.log('dojo') ;
}


//=== activity 6 ===

var x=[2,4,5] ;
counter =2 ;
if(x[counter]> 10){
    console.log('coding')
}
else{
    console.log('dojo')
}

//=== activity 7 ===

var x=[2,4,5] ;
var counter = 0 ;
if(x[counter]>0){
    console.log('coding')
    counter= counter + 1 ;
}
console.log(x[counter]) ;



//=== activity 8 ===

var x=[2,4,5] ;
var counter = 0 ;
if(x[counter]>0){
    console.log('coding') ;
    counter = counter + 1 ;
}
if(x[counter]>0) {
    console.log('coding') ;
    counter = counter + 1 ;

}
if (x[counter]>0) {
    console.log('coding') ;
    counter= counter + 1 ;
}
console.log(x) ;
console.log(counter) ;



//// level 5 ////


//=== activity 1 ===

for(var i = 0 ; i<10 ; i++){
    console.log(i) ;

}

//=== activity 2 ===

var x=1;
for(var i=1 ; i<3 ; i++){
    x= x+1 ;
}
console.log(x) ;

//=== activity 3 ===

var x=1 ; 
for(var i=1 ; i<3 ; i=i+2){
    x=x+1 ;
}
console.log(x) ;
console.log(i) ;

//=== activity 4 ===

var x=1 ;
for(var i=0 ; i<-1 ; i=i+2 ){
    x=x+1 ;
}
console.log(x) ;

//=== activity 5 ===

var x = [] ;
for (var i = 0 ; i<10 ; i++){
    x.push(i*2) ;
}
console.log(x) ; 


//=== activity 6 ===

var x=[1,3,5,8] ;
for(var i = 1 ; i<x.length ; i++)
{
    if(x[i]>4){
        x[i]=0; 
    }
}
console.log(x) ;


//=== activity 7 ===

var x=[-1,3,2,7] ;
for(var i=0 ; i<x.length ; i++){
    if(x[i]<i){
        x[i]=-10 ;
    }
}
console.log(x);


//=== activity 8 ===


for(var i=20 ; i=!10 ; i--){
    console.log(i)
}


//=== activity 9 ===

var x=0 ; 
for(var i= 1 ; i<4 ; i++){
    x=x+1 ;
    console.log(x) ;
    console.log(i) ;
}


//=== activity 10 ===

var x=0 ; 
for (var i=1 ; i<4 ; i=i+2){
    x=x+i ;
    console.log(x);
    console.log(i);
}













































