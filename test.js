// const first = 2;
// const second = 2;
// const third = 3;




// let arr = new Array();

// for(let i = 0; i < first; i++){
//     arr[i] = new Array();
//     for(let j = 0; j < second; j++){
//         arr[i][j] = new Array();
       
//         for(let k = 0; k < third; k++){
//             arr[i][j].push(i*j*k)
//         }
//     }
    
// }

// console.log(arr)


//////////////////////////////////

// const input = "How much is that doggie in the window? I hope that doggie's for sale."

// const words = input.split(' ');

// const number = 9;
// let output = new Array();
// for(let i = 0; i < number; i++){
   
//      output.push(words[i]);

// }
// function isSentence(arr){
//     let lastWord = arr[arr.length - 1];

//     if(lastWord.endsWith(lastWord))
// }
// console.log(output)


// const dessert = {type: 'pie'};
// dessert.type = 'pudding';

// const seconds = dessert;
// seconds.type = 'fruit';

// console.log(dessert)

// console.log('first')
// setTimeout(function(){
//     console.log('2md')
// },0)
// console.log('third')

function A(x,y,z){
    this.x = x;
    this.z = z;
    this.y = y;
    this.display = function(p){
        console.log('X' + p.x);
        console.log('Y' + p.y);
        console.log('Z' + p.z);
    }
}
function B(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.display = function(p){
        console.log('A' + p.a.c);
        console.log('X' + p.b);
        console.log('Z' + p.c);
    }
}

const b= new B(1,2,3);
b.display(b)
function fun(x,y){
    for(i in x){
        if(!(i in y))
            delete x[i];
    }
    for(i in y){
        if(!(i in x))
            x[i] = y[i]
    }
}
