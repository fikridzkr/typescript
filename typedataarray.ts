// Array
let names: string[] = ["Fikri", "Ronaldo", "Bruno"];
let age: Array<number> = [17, 34, 27];

// Push data ke arrray
names.push("Neymar");
// Hapus data array
delete names[1];
// rubah data array
names[0] = "Fikri Dzakir";

console.log(names);
console.log(`Nama saya ${names[0]}, umur saya ${age[0]}`);

// Tuple
let tuple: [boolean, string, number] = [true, "Makan", 100];
let product: [string, number] = ["Mac", 1500000];

// rubah tuple
product[0] = "Asus ROG";
console.log(`Saya menjual ${product[0]} dengan harga ${product[1]}`);
