// JavaScript untuk logika pencarian
function searchHama() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    let resultText = "";

    // Data hama dan solusi
    const hamaData = {
        "penggerek buah kakao": "Cara menanggulangi: Menggunakan insektisida yang sesuai. Pencegahan: Lakukan sanitasi kebun secara rutin.",
        "ulat api": "Cara menanggulangi: Pangkas daun yang terinfestasi. Pencegahan: Gunakan musuh alami seperti burung pemakan serangga.",
        "kepik penghisap buah": "Cara menanggulangi: Gunakan perangkap feromon. Pencegahan: Pelihara tanaman penutup tanah untuk menekan populasinya."
    };

    if (searchValue in hamaData) {
        resultText = `<h3>${searchValue.toUpperCase()}</h3><p>${hamaData[searchValue]}</p>`;
    } else {
        resultText = `<p>Hama tidak ditemukan. Pastikan ejaan benar atau tambahkan data baru ke sistem.</p>`;
    }

    resultDiv.innerHTML = resultText;
}
