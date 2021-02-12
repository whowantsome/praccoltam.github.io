let ww2 = 1945 - 1939
console.log('évig tartott a 2. vh: ', ww2, 'évig')
let dob = 2021-1992
console.log('ennyi éves vagy: ', dob)
let tesla = 76 * 803
console.log('76 tesla részvény: ', tesla, 'USD')
let secondsOfDay = 24 * 3600
console.log('egy nap ', secondsOfDay, 'másodperc')
let hungarians = 10000000 / 8000000000
console.log('a világ', hungarians, 'százaléka magyar')
let bigger = 9597000 / 78866
console.log('kína területe ', bigger, '-szer nagyobb mint csehország területe')
let participants = 654 % 7
console.log('legkissebb csatornában', participants, 'ember lesz DC szerveren')
let myString = 'ez szöveg'
console.log(myString)
let name = 'Mark'
let greeting = `Szevasz ${name}!` // $ jel változót jelent
console.log(greeting)
let greetWorld = 'Hello ' + 'Hello '
console.log(greetWorld)
let name2 = 'Dave2'
let greeting2 = 'Hello ' + name2 + '!'
console.log(greeting2)
let charCount = 'Hello'.length
console.log('"Hello" karakter száma', charCount, 'db')
let charCount2 = 'Hello World'.length
console.log('"Hello World" karakter száma', charCount2, 'db, (szóköz miatt)')
let trueOrFalse = 5 === 5;
console.log(trueOrFalse)
trueOrFalse = 100 < 50;
console.log(trueOrFalse)
trueOrFalse = 'hello' !== 'world';
console.log(trueOrFalse)
trueOrFalse = 1 >= 2;
console.log(trueOrFalse)
trueOrFalse = 'blue'.length === 'green'.length;
console.log(trueOrFalse)
trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8); // && és , || vagy 
console.log(trueOrFalse)
//komplexebb
let myArray = [3, 5, 6, 2, 22]
console.log(myArray)
let myOtherArray = [3, 12, true, 'Hello']
console.log(myOtherArray)
let myArray2 = ['Claire', 'Mark', 'Susan']
console.log(myArray2)
console.log(myArray2[2]) //kiirja a 2. (3) elemet
myArray2[0] = 'Peter' // lecseréli "Claire"-t "Peter"-re (0. elem)
console.log(myArray2)
console.log(myArray2.length) //dobozok száma
myArray2.push('Julia') //hozzáad dobozt, uj sorszámmal, julia értékkel
console.log(myArray2)
console.log(myArray2.length)
/*
Hozz létre egy tömböt, amiben különböző neveket tárolsz és mentsd el egy names nevű változóban
Nézd meg, a harmadik név hosszabb-e, mint 5 karakter (.length)
Adj 1 vagy több új nevet a tömbhöz (.push)
Cseréld le az első nevet a saját nevedre
Nézd meg, több, mint 4 elem van-e a tömbben (.length)
*/
let names = ['Klára', 'Béla', 'Joci', 'CJ', 'Niko', 'Bellic']
console.log(names)
console.log('Nézd meg, a harmadik név hosszabb-e, mint 5 karakter:', names[2] ,names[2].length > 5)
names.push('BigSmoke', 'Itallia')
console.log('BigSmoke hozzáadva +1', names)
names[0] = 'Zoltán'
console.log('első cseréje saját nevemre', names)
console.log('Nézd meg, több, mint 4 elem van-e a tömbben:', names.length > 4)
//ojjektum
let post = {
  author: "Bill Gates",
  content: "Online communication will change how companies work",
  date: "2020-04-01 18:06",
}
console.log(post)
console.log(post['author']) // kiírja, "Bill Gates"
console.log(post.author)    // kiírja, "Bill Gates"
post.likes = 11043 // az objektumok dinamikusak, bármikor hozzájuk adhatunk új "dobozokat"
console.log(post.likes)
console.log(post)
/*
Hozz létre egy objektumot, aminek van egy colors nevű adatmezője (doboza)
  a colors mező (változó) tartalma legyen egy tömb, ami színeket tartalmaz
Adj egy új mezőt az objektumhoz, hasManyColors néven
  az értéke legyen true, ha több, mint 3 színt tartalmaz a colors, különben pedig legyen false
*/
let object = {
    colors: ['red', 'orange', 'yellow', 'blue']
}
console.log(object)
object.hasManyColors = object.colors.length > 3
console.log(object)
//object.hasManyColors = (colors.length > 3)
//console.log(object)
//