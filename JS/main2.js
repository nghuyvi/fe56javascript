/**
 * DOM
 */
var txtInput = document.getElementById("txtInput");
// lấy nguyên nút Input
console.log(txtInput);

// chỉ lấy giá trị value
// cách 1
console.log(txtInput.value);
// cách 2
// var txtInput = document.getElementById("txtInput").value;

var _pText = document.getElementById("pText").innerHTML;
console.log(_pText);
// console.log(_pText.textContent);
/**
 * Event trong JS
 */

//  cách 1: thông qua attribute HTML onclick 
function eventClick() {
    console.log(txtInput.value);
}

// cách 2: thông qua JS .onclick
document.getElementById("btnClick--2").onclick = function () {
    console.log(_pText);
}

// cách 3: thông qua JS .addEventListener("click",function(){})
// call back function: một hàm có tham số là một hàm khác
document.getElementById("btnClick--3").addEventListener("click", function () {
    console.log(txtInput.value, " ", _pText);
})
// có thể định nghĩa function ra riêng để đỡ rối
// document.getElementById("btnClick--3").addEventListener("click",demoFunction());
// function demoFunction(){
// console.log(txtInput.value," ", _pText);
// }
var temp = 0;
document.getElementById("btnNhanEmDi").addEventListener("click", function () {
    document.getElementById("divContent").innerHTML = "Thay đổi rồi nhé " + temp;
    document.getElementById("divContent").style.fontSize = 20 + temp + "px";
    document.getElementById("btnNhanEmDi").style.backgroundColor = "yellow";
    temp = temp + 1;
})

document.getElementById("btnHidden").addEventListener("click", function () {
    document.getElementById("divContent").style.display = "none";
});

document.getElementById("btnShow").addEventListener("click", function () {
    document.getElementById("divContent").style.display = "block";
});

document.getElementById("btnDisable").addEventListener("click",function(){
    if (document.getElementById("btnNhanEmDi").disabled == true){
        document.getElementById("btnNhanEmDi").removeAttribute("disabled");
    }else{
        document.getElementById("btnNhanEmDi").disabled = true;
    }    
});

document.getElementById("btnOn").addEventListener("click",function(){
    document.getElementById("imgBulb").src = "./img/pic_bulbon.gif"
})

document.getElementById("btnOff").addEventListener("click",function(){
    document.getElementById("imgBulb").src = "./img/pic_bulboff.gif"
})

/**
 * Login
 */
var idCyber = "123";
var passCyber = "123";
function getId(){
    return document.getElementById("inputUser").value;
  }
  function getPass(){
     return document.getElementById("inputPass").value;
  }


document.getElementById("btnLogin").addEventListener("click",function(){
    var temp = "thất bại"
    if(getId() == idCyber && getPass() == passCyber){
        temp = "thành công";
        document.getElementById("loginSuccess").className = "alert alert-success";
        document.getElementById("loginFall").className = "d-none"
    } else{
        document.getElementById("loginFall").className ="alert alert-danger d- block";
        document.getElementById("loginSuccess").className = "d-none"
    }
      console.log("Đăng nhập ",temp);  
})

/**
 * DOM TagName
 */
var tagName = document.getElementsByTagName("button")[1];
console.log(tagName);

/**
 * DOM className
 */
var className = document.getElementsByClassName("btn")[2];

/**
 * DOM querySelector
 */
var _querySelector = document.querySelector(".container #inputID");

/**
 * DOM querySelectorALL
 */
var _querySelectorALL =document.querySelectorAll(".container .form-control")[0];
console.log(_querySelectorALL)

/**
 * Bài toàn chia tiền tip
 */
function _tinhTienTip(){
    var tongTien = document.getElementById("txtTongTien").value;
    var tienTip = document.getElementById("slPhanTramTip").value/100 *tongTien;
    var soNguoi = document.getElementById("txtSoNguoi").value;
    return tienTip / soNguoi;

};

document.getElementById("btnTinhTienTip").addEventListener("click",function(){
    var ketQua = _tinhTienTip();
    document.getElementById("txtThongBaoTienTip").className = "alert alert-success text-center col-sm-6 align-middle";
    document.getElementById("txtThongBaoTienTip").style = "";
    document.getElementById("txtThongBaoTienTip").innerHTML = "số tiền tìm được "+ ketQua ;
});



