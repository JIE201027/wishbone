let answer = Math.floor(Math.random() * 100);
// 0 <= Math.random < 1
// 0 <= Math.random < 100
// 0 <= Math.floor(Math.random) < 100
let n1 = 0;
let n2 = 99;

while (true) {
    let guess = Number(prompt("請輸入你的猜測(" + n1 + "~" + n2 + ")"));
    // prompt 會給我們 String 所以前面要加 Number

    if (guess < n1 || guess > n2) {
        alert("無效猜測，請重新輸入數字");
    }

    if (guess == answer) {
        alert("您猜對了！秘密數字是" + answer);
        break;
    } else if (guess < answer) {
        n1 = guess;
    } else if (guess > answer) {
        n2 = guess;
    }
}

