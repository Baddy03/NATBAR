"use strict";

const lineBreak = "br";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Zaczyna się skrypt");
  let uruchomione = false;
  const lewy1 = document.getElementById("lewy_1");

  function resetState() {
    uruchomione = false;
    lewy1.innerHTML = "";
  }

  function zmien_tlo() {
    let tlo = document.getElementById("lewy_1");
    tlo.style.backgroundColor = "white";
    tlo.style.border = "1px solid rgba(216, 216, 216, 0.726)";
  }

  function start_tlo() {
    let tlo = document.getElementById("lewy_1");
    tlo.style.backgroundColor = "#2d2f31";
    tlo.style.border = "1px solid #3e4143";
  }

  function tytul(miejsce) {
    miejsce.style.marginBottom = "10px";
    miejsce.style.fontSize = "30px";
    miejsce.style.fontWeight = "700";

    return miejsce;
  }

  function podtytul(miejsce) {
    miejsce.style.marginBottom = "10px";
    miejsce.style.fontSize = "20px";
    miejsce.style.fontWeight = "700";

    return miejsce;
  }

  function tresc(miejsce) {
    miejsce.style.marginBottom = "10px";
    miejsce.style.textAlign = "justify";

    return miejsce;
  }

  function box_text(miejsce) {
    miejsce.style.margin = "auto";
    miejsce.style.marginTop = "30px";
    miejsce.style.marginBottom = "30px";
    miejsce.style.width = "550px";

    return miejsce;
  }

  function pytania(miejsce) {
    miejsce.style.marginBottom = "10px";
    miejsce.style.textAlign = "justify";
    miejsce.style.fontSize = "15px";

    return miejsce;
  }

  function odpowiedzi(miejsce) {
    miejsce.style.marginBottom = "10px";
    miejsce.style.fontSize = "20px";
    miejsce.style.border = "1px solid black ";
    miejsce.style.padding = "15px";
    miejsce.style.color = "#b4690e";
    miejsce.style.fontWeight = "700";

    return miejsce;
  }

  function hover(miejsce) {
    miejsce.addEventListener("mousemove", () => {
      miejsce.style.backgroundColor = "#e3e7ea";
    });
    miejsce.addEventListener("mouseout", () => {
      miejsce.style.backgroundColor = "";
    });

    return miejsce;
  }

  function prawda(miejsce) {
    miejsce.style.backgroundColor = "#acd2cc";

    return miejsce;
  }
  function falsz(miejsce) {
    miejsce.style.backgroundColor = "#d88888";

    return miejsce;
  }

  function zaznaczenie(miejsce, pr) {
    miejsce.addEventListener("click", () => {
      if (miejsce == pr) {
        miejsce = prawda(miejsce);
      } else {
        miejsce = falsz(miejsce);
      }
    });
    return miejsce;
  }

  function znaki_zapytania(miejsce) {
    miejsce.style.margin = "auto";
    miejsce.style.width = "80%";
    miejsce.style.marginTop = "20px";
    miejsce.style.marginBottom = "100px";

    return miejsce;
  }

  function quiz_intro(miejsce, numer_testu, nazwa_quizu, pytania) {
    let miejsce_na_naglowek_1 = document.createElement("div");
    miejsce_na_naglowek_1 = tytul(miejsce_na_naglowek_1);

    let naglowek_1 = `${nazwa_quizu}`;
    miejsce_na_naglowek_1.appendChild(document.createTextNode(naglowek_1));
    miejsce.appendChild(miejsce_na_naglowek_1);
    let miejsce_na_naglowek_2 = document.createElement("div");
    miejsce_na_naglowek_2 = podtytul(miejsce_na_naglowek_2);
    let naglowek_2 = `Test ${numer_testu}`;
    miejsce_na_naglowek_2.appendChild(document.createTextNode(naglowek_2));
    let miejsce_na_info = document.createElement("div");
    miejsce_na_info = tresc(miejsce_na_info);
    let text =
      "Zaznacz, czego się nauczyłeś/aś o nazywaniu zmiennych i sprawdź swoją wiedzę";
    miejsce_na_info.appendChild(document.createTextNode(text));
    let kontener_guzika = document.createElement("div");
    let button = document.createElement("button");
    button.innerHTML = "Rozpocznij test";
    let miejsce_computer = document.createElement("div");
    let computer = document.createElement("img");
    miejsce_computer = znaki_zapytania(miejsce_computer);
    miejsce_computer.appendChild(computer);
    computer.src = "zdjecia/znaki_zapytania.png";
    miejsce.appendChild(miejsce_computer);
    lewy1.style.overflowY = "scroll";
    miejsce.appendChild(miejsce_na_naglowek_1);
    miejsce.appendChild(document.createElement(lineBreak));
    miejsce.appendChild(miejsce_na_naglowek_2);
    miejsce.appendChild(document.createElement(lineBreak));
    miejsce.appendChild(miejsce_na_info);
    miejsce.appendChild(button);

    button.addEventListener("click", pytania);

    return miejsce;
  }

  function informacja() {
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      console.log(uruchomione);

      resetState();
      zmien_tlo();

      let contener_na_text = document.createElement("div");
      contener_na_text = box_text(contener_na_text);

      let miejsce_na_naglowek_1 = document.createElement("div");
      miejsce_na_naglowek_1 = tytul(miejsce_na_naglowek_1);
      let naglowek_1 = "Przeczytaj zanim zaczniesz!";
      miejsce_na_naglowek_1.appendChild(document.createTextNode(naglowek_1));

      let miejsce_na_naglowek_2 = document.createElement("div");
      miejsce_na_naglowek_2 = podtytul(miejsce_na_naglowek_2);
      let naglowek_2 = "🚨 Twoja ścieżka z Pythonem właśnie się zaczęła";
      miejsce_na_naglowek_2.appendChild(document.createTextNode(naglowek_2));

      let miejsce_na_info = document.createElement("div");
      miejsce_na_info = tresc(miejsce_na_info);
      let text =
        "W każdej sekcji czekają na ciebie filmiki oraz short quizy, które pomogą utrwalić wiedzę, którą pozyskałeś/aś. Pod koniec każdej sekcji znajduje się projekt, który wykonasz, aby podsumować pozyskaną wiedzę. Do zobaczenia! 😉";
      miejsce_na_info.appendChild(document.createTextNode(text));

      contener_na_text.appendChild(miejsce_na_naglowek_1);
      contener_na_text.appendChild(document.createElement(lineBreak));
      contener_na_text.appendChild(miejsce_na_naglowek_2);
      contener_na_text.appendChild(document.createElement(lineBreak));
      contener_na_text.appendChild(miejsce_na_info);

      let computer = document.createElement("img");
      computer.src = "zdjecia/programmer.gif";
      computer.style.width = "100%";
      contener_na_text.appendChild(computer);

      lewy1.appendChild(contener_na_text);
      lewy1.style.overflowY = "scroll";
    }
  }

  function pytania_do_testu() {
    if (!uruchomione) {
      uruchomione = true;
      console.log(uruchomione);
      resetState();
      zmien_tlo();

      let odpowiedzi_do_testu_0 = ["a = 12", "var a = 12", "a :12", "12 = a"];
      let odpowiedzi_do_testu_1 = [
        'p1 user name = "jack bauer"',
        '1_player_username = "jackbauer"',
        'player1_username = "jack bauer"',
        'p1u = "jack bauer',
      ];
      let odpowiedzi_do_testu_2 = [
        "/* To jest komentarz*/",
        "//To jest komentarz",
        "#To jest komentarz",
      ];

      let odpowiedzi_do_testu = [
        odpowiedzi_do_testu_0,
        odpowiedzi_do_testu_1,
        odpowiedzi_do_testu_2,
      ];

      let pytania_do_testu = [
        "Która nazwa zmiennej jest prawidłowa?",
        "Która nazwa zmiennej jest najlepsza dla pierwszego zawodnika, który nazywanie jack bauer?",
        "Jak poprawnie napisać komentarz?",
      ];

      let contener_na_text = document.createElement("div");
      contener_na_text = box_text(contener_na_text);

      let box_pierwsze_pytanie = document.createElement("div");
      let box_drugie_pytanie = document.createElement("div");
      let box_trzecie_pytanie = document.createElement("div");

      let boxy_pytan = [
        box_pierwsze_pytanie,
        box_drugie_pytanie,
        box_trzecie_pytanie,
      ];

      let kontener_p_1_1_odp;
      let kontener_p_1_2_odp;
      let kontener_p_1_3_odp;
      let kontener_p_1_4_odp;

      let kontener_p_2_1_odp;
      let kontener_p_2_2_odp;
      let kontener_p_2_3_odp;
      let kontener_p_2_4_odp;

      let kontener_p_3_1_odp;
      let kontener_p_3_2_odp;
      let kontener_p_3_3_odp;

      let kontener_3 = [
        kontener_p_3_1_odp,
        kontener_p_3_2_odp,
        kontener_p_3_3_odp,
      ];

      let kontener_2 = [
        kontener_p_2_1_odp,
        kontener_p_2_2_odp,
        kontener_p_2_3_odp,
        kontener_p_2_4_odp,
      ];

      let kontener_1 = [
        kontener_p_1_1_odp,
        kontener_p_1_2_odp,
        kontener_p_1_3_odp,
        kontener_p_1_4_odp,
      ];

      let kontenery = [kontener_1, kontener_2, kontener_3];

      for (let i = 0; i < kontenery.length; i++) {
        boxy_pytan[i] = pytania(boxy_pytan[i]);
        boxy_pytan[i].appendChild(document.createTextNode(pytania_do_testu[i]));
        boxy_pytan[i].style.marginBottom = "20px";
        contener_na_text.appendChild(boxy_pytan[i]);

        for (let j = 0; j < kontenery[i].length; j++) {
          kontenery[i][j] = document.createElement("div");
          kontenery[i][j] = odpowiedzi(kontenery[i][j]);
          kontenery[i][j] = hover(kontenery[i][j]);
          kontenery[i][j].appendChild(
            document.createTextNode(odpowiedzi_do_testu[i][j])
          );
          if (j === kontenery[i].length - 1) {
            kontenery[i][j].style.marginBottom = "50px";
          }
          contener_na_text.appendChild(kontenery[i][j]);
        }
      }

      for (let i = 0; i < kontener_1.length; i++) {
        kontener_1[i] = zaznaczenie(kontener_1[i], kontener_1[0]);
      }

      for (let i = 0; i < kontener_2.length; i++) {
        kontener_2[i] = zaznaczenie(kontener_2[i], kontener_2[2]);
      }

      for (let i = 0; i < kontener_3.length; i++) {
        kontener_3[i] = zaznaczenie(kontener_3[i], kontener_3[2]);
      }

      document.getElementById("lewy_1").appendChild(contener_na_text);
      document.getElementById("lewy_1").style.overflowY = "scroll";
    }
  }

  function pytania_do_testu_2() {
    if (!uruchomione) {
      uruchomione = true;
      console.log(uruchomione);
      resetState();
      zmien_tlo();
      let odpowiedzi_do_testu_0 = [
        "fruits[3]",
        "fruits[4]",
        "fruits.Apples()",
        "fruits[-5]",
        "fruits[-4]",
      ];
      let odpowiedzi_do_testu_1 = [
        '["Strawberries", "Nectarines", "Apples","Grapes", "Peaches", "Cherries","Lemons"]',
        '["Strawberries", "Nectarines", "Apples","Grapes", "Peaches",  "Cherries","Pears","Lemons"]',
        '["Strawberries", "Nectarines", "Apples","Grapes", "Peaches",  "Cherries","Pears","Melons","Lemons"]',
        ' ["Strawberries", "Nectarines", "Apples","Grapes", "Peaches", "Cherries","Melons","Lemons"]',
      ];
      let odpowiedzi_do_testu_2 = [
        "/* To jest komentarz*/",
        "//To jest komentarz",
        "#To jest komentarz",
      ];
      let odpowiedzi_do_testu = [
        odpowiedzi_do_testu_0,
        odpowiedzi_do_testu_1,
        odpowiedzi_do_testu_2,
      ];
      let pytania_do_testu = [
        ' fruits = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"]. Która z nich da ci "Apples"?',
        'fruits = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"], fruits[-1] = "Melons", fruits.append("Lemons"), print(fruits)',
        "Jak poprawnie napisać komentarz?",
      ];
      let contener_na_text = document.createElement("div");
      contener_na_text = box_text(contener_na_text);
      let box_pierwsze_pytanie = document.createElement("div");
      let box_drugie_pytanie = document.createElement("div");
      let boxy_pytan = [box_pierwsze_pytanie, box_drugie_pytanie];
      let kontener_p_1_1_odp;
      let kontener_p_1_2_odp;
      let kontener_p_1_3_odp;
      let kontener_p_1_4_odp;
      let kontener_p_2_1_odp;
      let kontener_p_2_2_odp;
      let kontener_p_2_3_odp;
      let kontener_p_2_4_odp;

      let kontener_2 = [
        kontener_p_2_1_odp,
        kontener_p_2_2_odp,
        kontener_p_2_3_odp,
        kontener_p_2_4_odp,
      ];
      let kontener_1 = [
        kontener_p_1_1_odp,
        kontener_p_1_2_odp,
        kontener_p_1_3_odp,
        kontener_p_1_4_odp,
      ];
      let kontenery = [kontener_1, kontener_2];
      for (let i = 0; i < kontenery.length; i++) {
        boxy_pytan[i] = pytania(boxy_pytan[i]);
        boxy_pytan[i].appendChild(document.createTextNode(pytania_do_testu[i]));
        boxy_pytan[i].style.marginBottom = "20px";
        contener_na_text.appendChild(boxy_pytan[i]);
        for (let j = 0; j < kontenery[i].length; j++) {
          kontenery[i][j] = document.createElement("div");
          kontenery[i][j] = odpowiedzi(kontenery[i][j]);
          kontenery[i][j] = hover(kontenery[i][j]);
          kontenery[i][j].appendChild(
            document.createTextNode(odpowiedzi_do_testu[i][j])
          );
          if (j === kontenery[i].length - 1) {
            kontenery[i][j].style.marginBottom = "50px";
          }
          contener_na_text.appendChild(kontenery[i][j]);
        }
      }
      for (let i = 0; i < kontener_1.length; i++) {
        kontener_1[i] = zaznaczenie(kontener_1[i], kontener_1[3]);
      }
      for (let i = 0; i < kontener_2.length; i++) {
        kontener_2[i] = zaznaczenie(kontener_2[i], kontener_2[3]);
      }
      document.getElementById("lewy_1").appendChild(contener_na_text);
      document.getElementById("lewy_1").style.overflowY = "scroll";
    }
  }

  function rozpocznij_test() {
    console.log("Rozpocznij test function called");
    if (!uruchomione) {
      uruchomione = true;
      console.log(uruchomione);

      resetState();
      zmien_tlo();
      let contener_na_text = document.createElement("div");
      contener_na_text = box_text(contener_na_text);

      //intro quiz

      contener_na_text = quiz_intro(
        contener_na_text,
        1,
        "Nazywanie zmiennych",
        pytania_do_testu
      );

      lewy1.appendChild(contener_na_text);
    }
  }

  function rozpocznij_test_2() {
    if (!uruchomione) {
      uruchomione = true;
      console.log(uruchomione);
      resetState();
      zmien_tlo();
      let contener_na_text = document.createElement("div");
      contener_na_text = box_text(contener_na_text);
      //intro quiz
      contener_na_text = quiz_intro(
        contener_na_text,
        2,
        "Listy i IndexError",
        pytania_do_testu_2
      );
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_1_1() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;

      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";

      let video = document.createElement("video");

      video.src = "D:/TS/day1_1.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";

      contener_na_text.appendChild(video);

      lewy1.appendChild(contener_na_text);
    }
  }

  function film_1_2() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 1_2.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_1_3() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 1_3.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_1_4() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 1_4.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_2_1() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 2_1.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_2_2() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 2_2.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_2_3() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 2_3.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_3_1() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day3_1.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_3_2() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 3_2.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_4_1() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 4_1.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }
  function film_4_2() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day4_2.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_5_1() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day5_1.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_5_2() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 5_2.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_6_1() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day6_1.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }

  function film_6_2() {
    start_tlo();
    console.log("Informacja function called");
    if (!uruchomione) {
      uruchomione = true;
      let contener_na_text = document.createElement("div");
      resetState();
      contener_na_text.height = "100%";
      contener_na_text.width = "700px";
      let video = document.createElement("video");
      video.src = "D:/TS/day 6_2.mp4";
      video.autoplay = false;
      video.controls = true;
      video.muted = false;
      video.width = 700;
      video.style.margin = "auto";
      contener_na_text.style.textAlign = "center";
      contener_na_text.appendChild(video);
      lewy1.appendChild(contener_na_text);
    }
  }
  document
    .getElementById("rozpocznij_kurs")
    .addEventListener("click", informacja);

  document.getElementById("day_1_1").addEventListener("click", film_1_1);
  document.getElementById("day_1_2").addEventListener("click", film_1_2);
  document.getElementById("day_1_3").addEventListener("click", film_1_3);
  document.getElementById("day_1_4").addEventListener("click", film_1_4);

  document.getElementById("day_2_1").addEventListener("click", film_2_1);
  document.getElementById("day_2_2").addEventListener("click", film_2_2);
  document.getElementById("day_2_3").addEventListener("click", film_2_3);

  document.getElementById("day_3_1").addEventListener("click", film_3_1);
  document.getElementById("day_3_2").addEventListener("click", film_3_2);

  document.getElementById("day_4_1").addEventListener("click", film_4_1);
  document.getElementById("day_4_2").addEventListener("click", film_4_2);

  document.getElementById("day_5_1").addEventListener("click", film_5_1);
  document.getElementById("day_5_2").addEventListener("click", film_5_2);

  document.getElementById("day_6_1").addEventListener("click", film_6_1);
  document.getElementById("day_6_2").addEventListener("click", film_6_2);

  document.getElementById("test").addEventListener("click", rozpocznij_test);
  document
    .getElementById("test_2")
    .addEventListener("click", rozpocznij_test_2);

  // document
  // .getElementById("")
  // .addEventListener("click", console.log("Zaczelo sie"));
});
