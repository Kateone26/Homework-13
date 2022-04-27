// 1.

// let  user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//     studentstatus: 'active'
//   };

// console.log(user.studentstatus);

  

// 2.

// let array =[9, 13, 8 , 'april', 'may']
// for (let item of array){
//     console.log(item);
// }


// 3.

// let numbers = [5,6,10,25,3,7,4,100,28,36,89];
// for (let x of numbers){
//     if(x>5){
//         console.log(x);
//     }
// }


// 4.

// let user={
//     name: 'giorgi',
//     age:20,
//     studentstatus:'active'
// }
// if (user.age<18 && user.studentstatus == 'active'){
//     console.log('hello');
// } else if(user.name == 'giorgi'){
//     console.log('hello giorgi')
// } else if(user.studentstatus=='active' || user.age<25){
//     console.log('hello world')
// } else{
//     console.log('error')
// }


// 5.

// let array = ['watermelon','pear',10,45,50,'apple','ananas'];

// for (item of array){
//     if(typeof item == 'string'){
//         console.log(item);
//     }
// }



// 6.

// let array= [[2,-3,5,10],[25,-24,-11,100],[-6,-7,10]]

// for(let x of array){
//     for(let item of x)
//     if(item >0){
//         console.log(item);
//     }
// }


// let array= [[2,-3,5,10],[25,-24,-11,100],[-6,-7,10]]

// for(let item of array){
//     for(let x of item){
//         if (x>0){
//             console.log(x);
//         }
//     }
    
// }

// let array= [[2,-3,5,10],[25,-24,-11,100],[-6,-7,10]]

// for (let i = 0; i < array.length; i++) {
//     const numbers = array[i];
//     for (let x = 0; x < numbers.length; x++) {
//         const positive = numbers[x];
        
//         if(positive>0){
//             console.log(positive);
//         }       
//     }   
// }




// // 7. 

// let array= [32,10,'hello', null,'hello2', 50];

// for(let i=0; i < array.length; i++){
//     if (typeof array[i] == 'number' && array[i] % 5 == 0){
//         console.log(array[i]);
//     }
// }

// for(let item of array){
//     if (typeof item == 'number' && item % 5 == 0){
//         console.log(item);
//     }
// }





// functions

// 1.

// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// function sum(...args){
//     let numbersum = 0;
//     for(let item of args){
//         if(item>0){
//             numbersum=numbersum+item; 
//         }
        
//     }
//     console.log(numbersum);
// }


// sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);

// function sum (...numbers){
//     let newsum = 0;
//     for(let x of numbers){
//         if(x>0){
//             newsum=newsum+x;
//         }
//     }
//             console.log(newsum);
// }



// function sum (...numbers){
//     let newsum = 0;
//     for(let x of numbers){
//         if(x>0){
//             newsum=newsum+x;
//         }
//     }
//     return newsum;
// }
// let result=sum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);


// 2.

// sum(10, 50, 6, 7, 8, 11, 6, 3, 9)
// function sum (...args){
//     let numbersum=0;
//     for (let item of args){
//         numbersum+=item;
//     }
//     console.log(numbersum);
// }



// 3.

// let user = {
//     firstname: 'giorgi ',
//     lastname:'saakadze',
//     age:32,
//     isloggedin:true
// }

// function condition(){
//     if(user.isloggedin == true){
//         console.log(user.firstname + user.lastname);
//     } else {
//         console.log(false)
//     }
// }
// condition()

// let user = {
//     firstname: 'giorgi',
//     lastname:'saakadze',
//     age:32,
//     isloggedin:true
// }

// function printname(obj){
//     if (obj.isloggedin){
//         return obj.firstname+' '+ obj.lastname;
//     }
//     return false;
// }
// let result=printname(user);
// console.log(result);


// function printname(user){
//     if (user.isloggedin){
//         return user.firstname+' '+ user.lastname;
//     }
//     return false;
// }
// let result=printname(user);
// console.log(result);


// 4.

// let randomnumbers = [1,2,3,4,9,6,7];
// function maxMath(){
//     let max= 0;
//     for(let item of randomnumbers){
//         if(item>max){
//             max=item;
//         }
//     }
//     console.log(max);
// }
// maxMath(randomnumbers)


// 
// let numbers = [1,5,9,3,5,7];

// let max = Math.max(...numbers);

// console.log(...numbers);
// console.log(`${max}`);
// 





// function getmax(arraynumbers){
//     let maxvalue=0;
//     for(let item of arraynumbers){
//         if(item>maxvalue){
//             maxvalue=item;
//         }
//     }
//     return maxvalue;
// }

// console.log(getmax([5,102,120,250,30]));