let obj = {

    name: 'Pakorn',
    age: 18,
    address: {
        no: '1/14',
        province: 'Rayong'
    }

}

let {name,age} = obj
let {address:{no,province}} = obj

/*console.log(obj);
console.log(name);
console.log(age);
console.log(no);
console.log(province);*/

let obj2 = {...obj,['name']:'Pawanrat',address:{...obj.address,no:5}}
console.log(obj2);