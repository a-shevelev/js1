console.log("all ok")
punkt2_1()
punkt2_2_1()

function punkt2_1() {
  let d = {key: "value"};
  let e = {key: "value"} == d;
  console.log(e);
  let a = {key: "value"} === d;
  console.log(a);
  let b = d;
  let c = b === d;
  console.log(c);
}

function punkt2_2_1() {
	console.log("кино \"аватар\" \n \\n -перевод строки");
	let s = " The Quick bRown FOX quickly jumps over The lazy dog. "
	console.log(s[1] + s[3])
	console.log(s.indexOf("e"))
	console.log(s.lastIndexOf("e"))
	console.log(s.indexOf("ф"))
	console.log(s.replace("o", "OOO"))
	let mas = s.split(" ");
	console.log(mas);
	console.log("192.168.1.1".split(". "))
	console.log(mas.join("-^-"))
	console.log(s.substr(5, 11))
	console.log(s.toLowerCase())
	console.log(s.toUpperCase())
	console.log(s.trim())
}