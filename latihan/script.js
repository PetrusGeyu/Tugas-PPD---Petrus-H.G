const nama = 10;

if(nama == '10'){
    console.log("sepuluh");
}else if(nama === 10) {
    console.log(10)
}else{
    console.log('Bukan 10')
}

const numArray = [1,2,3,4,5,6,7,8,9,10];

const newNumArray = []
console.log(numArray)
numArray.forEach(num => {
    newNumArray.push(num);
});

console.log(newNumArray);

// for(i = 0; i < numArray.length; i++){
//     newNumArray.push(i);
//     console.log(newNumArray)
// }

// if(nama == 10 && nama !== '20'){
//     console.log('salah angka')
// }


