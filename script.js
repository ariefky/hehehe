let kontak = "";

function submitNama() {
  const input = document.getElementById('namaKontak');
  kontak = input.value.trim();
  localStorage.setItem('kontak', kontak);
  window.location.href = 'perasaan.html';
}

function toggleButton() {
  const input = document.getElementById('namaKontak');
  const button = document.getElementById('submitBtn');
  button.disabled = input.value.trim() === "";
}

function submitJawaban(jawaban) {
  const kontak = localStorage.getItem('kontak') || 'Tidak diisi';
  const data = {
    timestamp: new Date().toISOString(),
    namaKontak: kontak,
    jawaban: jawaban
  };

  fetch("https://script.google.com/macros/s/AKfycbxQ43CcwGHxFzXJjDTuKajBaEaTdttwtF6v02PgFhqRmqG-3PIqEfedbb-ISUu_7RIGXA/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (jawaban === "Mau") {
    alert("Yeyy! Jadian! 💞");
  } else {
    window.location.href = 'gpp.html';
  }
}
