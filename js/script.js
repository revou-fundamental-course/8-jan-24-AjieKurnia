// Add active class to the current button (highlight it)
var header = document.getElementById("navLink");
var btns = header.getElementsByClassName("btn");
var listcl = document.querySelector(".btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if (current[0].textContent == "Persegi") {
            console.log("L")
            document.getElementById("calculatorL").removeAttribute("hidden");
            document.getElementById("calculatorK").setAttribute("hidden","true");
        }else if(current[0].textContent == "P. Persegi"){
            console.log("K")
            document.getElementById("calculatorL").setAttribute("hidden","true");
            document.getElementById("calculatorK").removeAttribute("hidden");
        }
    });
}

function calculateLuas() {
    // Ambil nilai panjang sisi dari input
    var sideLengthL = document.getElementById("sideLengthL").value;

    // Validasi input
    if (sideLengthL === "" || isNaN(sideLengthL)) {
        alert("Masukkan panjang sisi dengan angka.");
        return;
    }

    // Hitung luas persegi
    var area = sideLengthL * sideLengthL;

    // Tampilkan hasil
    document.getElementById("area").innerHTML = "<p>L = S * S </p><p>L = "+sideLengthL+" * "+sideLengthL +"</p>"+"<p>L = "+area+"</p><p><b>Jadi Hasil Luas  Persegi = "+area+"</b></p>";
}
function calculateKeliling() {
    // Ambil nilai panjang sisi dari input
    var sideLengthK = document.getElementById("sideLengthK").value;

    // Validasi input
    if (sideLengthK === "" || isNaN(sideLengthK)) {
        alert("Masukkan panjang sisi dengan angka.");
        return;
    }

    // Hitung keliling persegi
    var perimeter = 4 * sideLengthK;

    // Tampilkan hasil
    document.getElementById("perimeter").innerHTML = "<p>K = 4 * S </p><p>K = 4 * "+sideLengthK +"</p>"+"<p>K = "+perimeter+"</p><p><b>Jadi Hasil Keliling Persegi = "+perimeter+"</b></p>";
}


function resetL(){
    document.getElementById("sideLengthL").value = "";
    document.getElementById("area").innerText= "---";
}

function resetK(){
    document.getElementById("sideLengthK").value = "";
    document.getElementById("perimeter").innerText= "---";
}
