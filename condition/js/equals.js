// let n1;
// let n2;

// n1 = prompt("1入れろ");
// n2 = prompt("2入れろ");

// if(n1==n2){
//     alert(n2)
// }

// let eon;
// eon = prompt("入れろ");

// if ((eon%2)==0 ){
//     alert("偶数")
// } else if((eon%2)==1){
//     alert("奇数")
// } else if(eon==0){
//     alert(0)
// };

// let n1;
// let n2;

// n1 = prompt("1入れろ");
// n2 = prompt("2入れろ");

// if(n1==n2){
//     alert("同じ");
// }else if(n1<n2){
//     alert(n1+"より"+n2+"の方が大きい");
// }else if(n1>n2){
//     alert(n1+"より"+n2+"の方が小さい");
// }else{
//     alert("それ以外だボケ")
// }

// let ani=prompt("動物の名前入れろ");
// if(ani=="犬"||ani=="いぬ"||ani=="イヌ"){
//     alert("バウ")
// }else if(ani=="猫"||ani=="ねこ"||ani=="ネコ"){
//     alert("ミャー")
// }else if(ani=="鮫"||ani=="さめ"||ani=="サメ"){
//     alert("シャーク")
// }else if(ani=="宇宙"||ani=="うちゅう"||ani=="アンディー"){
//     alert("ちんちん！")
// }else if(ani=="alien"||ani=="ALIEN"){
//     alert("dick dick!!")
// }else if(ani=="ザリガニ"||ani=="ざりがに"){
//     alert("ザリガニに鳴き声はありませんよ。そんなことも分からないのですか？")
// }

let ani=prompt("動物の名前入れろ");
switch(ani){
    case "イヌ":
        alert("バウ")
        break;
    case"ネコ":
        alert("ミャー")
        break;
    case"サメ":
        alert("シャーク")
        break;
    case"アンディー":
        alert("ちんちん！")
        break;
    case"alien":
    case"ALIEN":
        alert("dick dick!!")
        break;
    case"ザリガニ":
        alert("ザリガニに鳴き声はありませんよ。そんなことも分からないのですか？")
        break;
    default:
        alert("（その他の動物の鳴き声）")

}

