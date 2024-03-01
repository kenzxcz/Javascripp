// Bài1 
var y = [ "Thứ hai","Thứ ba ","Thứ tư ","Thứ năm ","Thứ sáu ","Thứ bảy","Chủ nhật ",];
var x = 5 
console.log(y[x-2]);
switch (x) {
    case 1 :
        console.log(y[ "Thứ hai" ]);
        break;
    case 2 :
        console.log(y[ "Thứ ba " ]);
        break;
    case 3 :
        console.log(y[ "Thứ tư "]);
        break;
    case 4 :
        console.log(y[ "Thứ năm " ]);
        break;
    case 5 :
        console.log(y[ "Thứ sáu " ]);
        break;
    case 6 :
        console.log(y[ "Thứ bảy  "]);
        break;
    case 7 :
        console.log(y["Chủ nhật "]);
        break;
   default :
        console.log ( " Gía trị không hợp lệ ")
        break;
}
function LaSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
}
//bài 3
var a = [[1, 2, 3],[1, 2, 3],[2, 3, 4]];
for (var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        document.write(a[i][j] + " ");
    }
    document.write("<br/>"); // Xuống dòng sau mỗi hàng
}
//bai 4
