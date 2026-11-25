function calculateArea() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    document.getElementById("result").value = s;
}
function calculateArea2() {
    let a = Number(document.getElementById("a2").value);
    let b = Number(document.getElementById("b2").value);
    let angle = Number(document.getElementById("c2").value);
    let s = 0.5 * a * b * Math.sin(angle * Math.PI / 180);
    document.getElementById("result2").value = s;
}
function calculateArea3() {
    let a = Number(document.getElementById("a3").value);
    let b = Number(document.getElementById("b3").value);
    let s = 0.5 * a * b;
    document.getElementById("result3").value = s;
}
function calculateArea4() {
    let a = Number(document.getElementById("a4").value);
    let b = Number(document.getElementById("b4").value);
    let c = Number(document.getElementById("c4").value);
    let radius = Number(document.getElementById("radius").value);
    let p = (a + b + c) / 2;
    let s = radius * p;
    document.getElementById("result4").value = s;
}
function calculate5() {
    let a = Number(document.getElementById("a5").value);
    let str = a.toString();
    let reversed = str.split("").reverse().join("");
    document.getElementById("result5").value = str === reversed ? "Так" : "Ні";
}
function calculate6() {
    let a = document.getElementById("a6").value;
    let b = document.getElementById("b6").value;
    let word1 = a.toLowerCase().split("").sort().join("");
    let word2 = b.toLowerCase().split("").sort().join("");
    if (word1 === word2) {
        document.getElementById("result6").value = "Анаграма";
} 
    else {
        document.getElementById("result6").value = "Не анаграма";
    }
}

function calculate7() {
    let n = Number(document.getElementById("a7").value);
    let a = 1;
    let b =1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    document.getElementById("result7").value = b;
}

function calculate8() {
    let n = Number(document.getElementById("a8").value);
    let a = 1;
    let b = 1;
    while (b < n) {
        let c = a + b;
        a = b;
        b = c;
    }
    document.getElementById("result8").value = b === n ? "Так" : "Ні";
}