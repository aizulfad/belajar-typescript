let sample: number | string | boolean = "aizul";

sample = 100
sample = false
console.log(sample)


function process(value: number | string |boolean){
    if(typeof value === "string"){
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value + 2
    }
}

console.log(process("aizul"))
console.log(process(32))