new kursor({
  type: 4,
  removeDefaultCursor: true,
});

VANTA.CLOUDS({
  el: "#cui",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
});

const tahunbaru = new Date("Januari 1, 2023 00:00:00").getTime();

var countdown = setInterval(function () {
  const dateskrg = new Date().getTime();
  const selisih = tahunbaru - dateskrg;

  const selisihhari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const selisihjam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const selisihmenit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const selisihdetik = Math.floor((selisih % (1000 * 60)) / 1000);

  const hppynew = document.getElementById("thunbaru");
  const hari = document.getElementById("hari");
  const jam = document.getElementById("jam");
  const menit = document.getElementById("menit");
  const detik = document.getElementById("detik");
  hari.innerHTML = selisihhari;
  jam.innerHTML = selisihjam;
  menit.innerHTML = selisihmenit;
  detik.innerHTML = selisihdetik;

  if (selisih < 0) {
    clearInterval(countdown);
    hari.innerHTML = "0";
    jam.innerHTML = "0";
    menit.innerHTML = "0";
    detik.innerHTML = "0";
    hppynew.innerHTML = "HAPPY NEW YEARR";
  }
}, 1000);
