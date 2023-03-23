const bg = document.getElementById('background1');
const Cbg = bg.getContext('2d');
const bg_width = bg.width = 100;
const bg_height = bg.height = 100;

let pos_y = 0;
let masa = 0;

// function background1 loading
function jump(num) {
  Cbg.clearRect(0, 0, bg_width, bg_height);
  Cbg.fillRect(pos_y,pos_y,100,100);
  if (num == 1){
    pos_y ++;
  }
  else {
    console.log(pos_y);
  }
  
  if (num == 0) {
    pos_y --;
  }
  else {
    console.log(pos_y);
  }
  
  if (pos_y > 50 - 1) {
    pos_y = 0;
  }
}

// function loading
function sleep() {
  masa ++;
  console.log(masa,'\r');
  if (masa > 16 - 1) {
    masa = 0;
    pos_y += 1;
    jump(1);
  }
  requestAnimationFrame(sleep);
}

// function dari chat gpt dengan fungsi seperti alert()
function popup(message,text_color) {
  // Buat elemen HTML untuk menampilkan pesan
  var alertBox = document.createElement('div');
  alertBox.style.backgroundColor = 'black';
  alertBox.style.color = text_color;
  alertBox.style.position = 'fixed';
  alertBox.style.top = '10';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translateX(-50%)';
  alertBox.style.padding = '20px';
  alertBox.textContent = message;

  // Tambahkan elemen ke halaman HTML
  document.body.appendChild(alertBox);

  // Setel waktu untuk menghapus elemen setelah 3 detik
  setTimeout(function() {
    alertBox.parentNode.removeChild(alertBox);
  }, 1000);
}


var password_user = "exit";

// function button login
function login(password) {
  if (password == password_user) {
    popup("berhasil, untuk login!","green");
    window.location.href = "exit.html";
  }
  else {
    popup("password login salah, sila cuba lagi!", "red");
  }
}

// function info1
function info(input,text_color,x,y) {
  // Buat elemen HTML untuk menampilkan pesan
  var alertBox = document.createElement('div');
  alertBox.style.backgroundColor = 'black';
  alertBox.style.color = text_color;
  alertBox.style.position = 'fixed';
  alertBox.style.top = y;
  alertBox.style.left = x;
  alertBox.style.transform = 'translateX(-50%,-50%)';
  alertBox.style.padding = '20px';
  alertBox.textContent = input;

  // Tambahkan elemen ke halaman HTML
  document.body.appendChild(alertBox);

  // Setel waktu untuk menghapus elemen setelah 3 detik
  setTimeout(function() {
    alertBox.parentNode.removeChild(alertBox);
  }, 2000);
}


sleep();