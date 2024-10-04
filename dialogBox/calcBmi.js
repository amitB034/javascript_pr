//BMIを計算して表示する
//身長、体重を取得する
let height;
let weight;

height = prompt("BMI調べる。身長入れろ");
weight = prompt("体重入れろ");

let isCalc = confirm("BMI調べて良いのか");
if(isCalc){
    height = height/100;
    let bmi = weight / (height * height);

    let message = "お前のBMIは" + bmi + "だ";
    alert(message)
}

