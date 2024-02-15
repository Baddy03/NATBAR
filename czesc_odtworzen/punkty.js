"use strict";

function zlicz_punkty() {
  let punkty = 0;
  //   let zadanie_1 = document.getElementById("odpowiedz_1_1").checked;

  let zadanie_otwarte = document.getElementById("odpowiedz_7_1").value;

  zadanie_otwarte.toLowerCase();

  if (zadanie_otwarte == "0foo0bar") {
    punkty++;
    console.log(punkty);
  }

  let zadania = [
    "odpowiedz_1_3",
    "odpowiedz_2_1",
    "odpowiedz_3_3",
    "odpowiedz_4_4",
    "odpowiedz_5_2",
    "odpowiedz_6_3",
    "odpowiedz_8_3",
    "odpowiedz_9_3",
    "odpowiedz_10_1",
    "odpowiedz_11_3",
    "odpowiedz_12_2",
    "odpowiedz_13_3",
    "odpowiedz_14_2",
    "odpowiedz_15_2",
  ];

  for (let i = 0; i < zadania.length; i++) {
    let x = document.getElementById(zadania[i]).checked;
    if (x == true) {
      punkty++;
    }
  }
  console.log(punkty);

  if (punkty >= 12) {
    let certyfikat = document.getElementById("certyfikat");
    certyfikat.innerHTML = "Odbierz certyfikat";
    certyfikat.style.fontSize = "20px";
    certyfikat.style.color = "purple";
    certyfikat.addEventListener("click", function () {
      window.open(
        "file:///D:/TS/czesc_odtworzen/zdjecia/Certificate%20PYTHON.pdf",
        "_blank"
      );
    });
  }

  let wyswietlenie = document.getElementById("punkty");
  wyswietlenie.textContent = `Twój wynik to ${punkty}/15`;
}
