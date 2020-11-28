console.log("Hello Cybesoft");

/**
 * Varriable: biến
 */
// String
var username = "Cherry Huỳnh";
var address = "112 Cao Thắng";
console.log(username + " có địa chỉ tại " + address);
console.log("ten la: " + username, "dia chi: " + address);
// Number
var age = 25;
console.log(age + 2);
// Boolean
var status = true;
// Null
var numberStudent = null;
// indefined
var people;
console.log(people);

/**
 * Hoisting
 */
console.log("full name: " + fullName);
var fullName = "Nguyen Van A";

isLogin = true;
console.log(isLogin);

// console.log(student);

// Hằng số phải gắn giá tri mặc định ban đầu, ko vò là bị lỗi
const PI = 3.14;

// "==" chỉ kiểm tra giá trị. Ko quan tâm kiểm dữ liệu
// "===" kiểm tra giá trị và kiểu dữ liệu
if (2 + 2 === "4") {
    console.log(" dk đúng")
} else {
    console.log("dieu kien sai")
}
// toán tử 3 ngôi
console.log(2 + 2 == "4" ? "dk đúng" : "ds sai");
2 + 2 === "4" ? console.log("dk đúng") : console.log("dk sai");

var btA = true;
var btB = false;
console.log("Kết quả và && ", btA && btB);
console.log("kết quả hoặc ||", btA || btB);
console.log("phủ định !", !btA);

switch (5) {
    case 0:
        console.log("đây là số 0");
        break;
    case 2:
        console.log("đây là số 2");
        break;
    default:
        console.log("không xác định");
        break;
}

var list = ["nguyen", "huy", "vi","huynh","thi","truc","nu"]
console.log(list);
console.log(list[2]);
for(var i=0;i<list.length;i++){
    console.log(list[i]);
}

var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;
var total = number_1 + number_2;
total = total + number_3;
console.log(total);
/**
 * Function: 
 *  + Hàm có tham số
 *  + có giả trị trả về
 */

function tinhTong(nb1, nb2){
    var sum = nb1 + nb2;
    console.log("bài toán tìm tổng của 2 số: ",nb1,nb2)
    console.log("Tổng tình được là ",sum);
    return sum;
}

var sum_1= tinhTong(number_1,number_2);
var sum_2 = tinhTong(sum_1,number_2);
console.log("bài toán",tinhTong(100,50));

function tinh_dtb(toan,ly,hoa){
    return (toan+ly+hoa)/3;
}
function xepHang(dtb){
    if(dtb>=9){
        console.log("xếp hạng xuất sắc");
    } else if(dtb>=8){
        console.log("xếp hạng giỏi");
    } else if(dtb>=7){
        console.log("xếp hạng khá");
    } else if(dtb>=5){
        console.log("xếp hạng tb");
    } else {
        console.log("xếp hạng yếu");
    }
}
xepHang(tinh_dtb(2,5,8));
