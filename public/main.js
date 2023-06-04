// mendapatkan elemen select tanggal dengan masing-masing id
let selectDay = document.getElementById("day");
let selectMonth = document.getElementById("month");
let selectYear = document.getElementById("year");
let tahun = new Date().getFullYear();

for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectDay.appendChild(option);
}

// Loop untuk menambahkan opsi tanggal ke elemen select "day"
function updateDay() {
  let month = parseInt(document.getElementById("month").value);
  let day = selectDay.value;
  
  selectDay.innerHTML = "";

  let daysInMonth;
  switch (month) {
    case 2: // Februari
      let year = parseInt(document.getElementById("year").value);
      daysInMonth = 28;
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        daysInMonth = 29;
      }
      break;
    case 4: // April
    case 6: // Juni
    case 9: // September
    case 11: // November
      daysInMonth = 30;
      break;
    default:
      daysInMonth = 31;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectDay.appendChild(option);
    if (i) {
      selectDay.value = day;
      if (i < day) {
        selectDay.value = i;
      }
    }
  }
}

// Loop untuk menambahkan opsi bulan ke elemen select "month"
for (let i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectMonth.appendChild(option);
}

// Loop untuk menambahkan opsi tahun ke elemen select "year"
for (let i = 1945; tahun >= i; tahun--) {
  let option = document.createElement("option");
  option.value = tahun;
  option.text = tahun;
  selectYear.appendChild(option);
}

function calculateAge() {
  // Mendapatkan nilai tanggal lahir dari input
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  // Mendapatkan tanggal saat ini
  let current = new Date();

  // Membuat objek tanggal lahir
  let birthdate = new Date(year, month - 1, day);

  // Menghitung selisih tahun
  let ageYear = current.getFullYear() - birthdate.getFullYear();

  // Menghitung selisih bulan
  let ageMonth = current.getMonth() - birthdate.getMonth();

  // Menghitung selisih hari
  let ageDay = current.getDate() - birthdate.getDate();

  // Memeriksa apakah bulan lahir sudah lewat pada bulan ini
  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    if (ageMonth < 0) {
      ageMonth += 12;
    }
  }

  // Memeriksa apakah hari lahir sudah lewat pada hari sekarang
  if (ageDay < 0) {
    let monthBeforeCurrent = new Date(
      current.getFullYear(),
      current.getMonth() - 1,
      birthdate.getDate()
    );
    ageMonth--;
    if (ageMonth < 0) {
      ageMonth += 12;
    }
    ageDay = Math.floor((current - monthBeforeCurrent) / (1000 * 60 * 60 * 24));
    
  }

  // memeriksa jika tanggal lahir melewati tanggal saat ini
  if (birthdate.getFullYear() >= new Date().getFullYear()) {
    if (birthdate.getMonth() > new Date().getMonth()) {
      alert("Error")
    }
    if (birthdate.getMonth() == new Date().getMonth() && birthdate.getDate() >= new Date().getDate()){
      alert("Error")
    }
  }
    // Menampilkan hasil perhitungan umur
    document.getElementById("resultYears").innerHTML = ageYear;
  document.getElementById("resultMonths").innerHTML = ageMonth;
  document.getElementById("resultDays").innerHTML = Math.abs(ageDay);
}
