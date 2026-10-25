let daftar = 5000;
let ruchka = 3000;

let jami = 4 * daftar + 2 * ruchka;

console.log("Umumiy narx:", jami, "so'm");

let yosh = 17;

if (yosh >= 18) {
    console.log("Kirish mumkin");
} else {
    console.log("Kirish mumkin emas");
}

console.log(Boolean(0));
console.log(Boolean("JavaScript"));
console.log(Boolean(""));
console.log(Boolean(25));
console.log(Boolean(null));
console.log(Boolean(undefined));

let ball = 76;
let davomati = 85;

if (ball >= 60 && davomati >= 80) {
    console.log("Imtihondan o'tdi");
} else {
    console.log("Imtihondan o'tmadi");
}

let buyurtma = 120000;
let premium = false;

if (buyurtma >= 100000 || premium == true) {
    console.log("Bepul yetkazib berish");
} else {
    console.log("Yetkazib berish pullik");
}

let login = "student";
let password = "js12345";

if (login == "student" && password == "js12345") {
    console.log("Tizimga xush kelibsiz");
} else {
    console.log("Login yoki parol xato");
}

let narx = 200000;
let kupon = true;

if (kupon == true) {
    narx = narx - narx * 15 / 100;
}

console.log("Yakuniy narx:", narx, "so'm");

let username = "";
let age = 20;

if (username == "") {
    console.log("Ismingizni kiriting");
} else {
    console.log("Xush kelibsiz");
}

console.log(Boolean(age));

let number = 14;

if (number % 2 == 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
}

let yos = 16;
let ruxsat = false;
let chipta = true;

if ((yosh >= 18 || ruxsat == true) && chipta == true) {
    console.log("Kino zaliga kirish mumkin");
} else {
    console.log("Kirish mumkin emas");
}