const lineBreak = "br";
let uruchomione = false;

 console.log(uruchomione);

 
function zmien_tlo() {
  let tlo = document.getElementById("lewy_1");
  tlo.style.backgroundColor = "white";
  tlo.style.border = "1px solid rgba(216, 216, 216, 0.726)";
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

function informacja() {
  if (!uruchomione) {
    uruchomione = true;
    console.log(uruchomione);
    document.getElementById("lewy_1").innerHTML = "";
    //#############################################################################
    //########### GENEROWANIE KONTENERA PRZECHOWUJACEGO ZAWARTOSC TEKTSU ##########
    //#############################################################################
    zmien_tlo();
    let contener_na_text = document.createElement("div");
    contener_na_text = box_text(contener_na_text);

    //1. GENEROWANIE KONTENERA PRZECHOWUJACEGO NAGLOWEK
    let miejsce_na_naglowek_1 = document.createElement("div");
    miejsce_na_naglowek_1 = tytul(miejsce_na_naglowek_1);

    //2. PRZYPISYWANIE NAGLOWKA ORAZ DODAWANIE GO DO KONTENERA
    let naglowek_1 = "Przeczytaj zanim zaczniesz!";
    miejsce_na_naglowek_1.appendChild(document.createTextNode(naglowek_1));

    //-------------------------------------------------POWTARZAJACE SIE CZYNNOSCI DLA DWOCH RODZAJOW TEKSTOW-------------------------------------------------

    let miejsce_na_naglowek_2 = document.createElement("div");
    miejsce_na_naglowek_2 = podtytul(miejsce_na_naglowek_2);

    let naglowek_2 = "🚨 Twoja ścieżka z Pythonem właśnie się zaczęła";
    miejsce_na_naglowek_2.appendChild(document.createTextNode(naglowek_2));

    let miejsce_na_info = document.createElement("div");
    miejsce_na_info = tresc(miejsce_na_info);

    let text =
      "W każdej sekcji czekają na ciebie filmiki oraz short quizy, które pomogą utrwalić wiedzę, którą pozyskałeś/aś. Pod koniec każdej sekcji znajduje się projekt, który wykonasz, aby podsumować pozyskaną wiedzę. Kurs składa się z 7 sekcji i 40 lekcji Do zobaczenia! 😉";
    miejsce_na_info.appendChild(document.createTextNode(text));

    //_____________________________________________________________________________________________________________________________________________________

    //3. PRZYPISYWANIE DO KONTENERA

    contener_na_text.appendChild(miejsce_na_naglowek_1);
    contener_na_text.appendChild(document.createElement(lineBreak));
    contener_na_text.appendChild(miejsce_na_naglowek_2);
    contener_na_text.appendChild(document.createElement(lineBreak));
    contener_na_text.appendChild(miejsce_na_info);

    //4. DODAWANIE ZDJECIA

    let computer = document.createElement("img");
    computer.src = "zdjecia/programmer.gif";
    computer.style.width = "100%";
    contener_na_text.appendChild(computer);

    //5. DODAWANIE DO GLOWNEGO KONTENERA

    document.getElementById("lewy_1").appendChild(contener_na_text);
    document.getElementById("lewy_1").style.overflowY = "scroll";
  }
}

function ropocznij_test() {
  if (!uruchomione) {
    uruchomione=true;
    console.log(uruchomione);
    document.getElementById("lewy_1").innerHTML = "";
    //#############################################################################
    //########### GENEROWANIE KONTENERA PRZECHOWUJACEGO ZAWARTOSC TEKTSU ##########
    //#############################################################################
    zmien_tlo();
    let contener_na_text = document.createElement("div");
    contener_na_text = box_text(contener_na_text);

    //1. GENEROWANIE KONTENERA PRZECHOWUJACEGO NAGLOWEK QUIZU
    let miejsce_na_naglowek_1 = document.createElement("div");
    miejsce_na_naglowek_1 = tytul(miejsce_na_naglowek_1);

    let naglowek_1 = "Nazywanie zmiennych Quiz";
    miejsce_na_naglowek_1.appendChild(document.createTextNode(naglowek_1));
    contener_na_text.appendChild(miejsce_na_naglowek_1);

    //2. GENEROWANIE KONTENERA PRZECHOWUJACEGO DRUGI NAGLOWEK QUIZU
    let miejsce_na_naglowek_2 = document.createElement("div");
    miejsce_na_naglowek_2 = podtytul(miejsce_na_naglowek_2);

    let naglowek_2 = "Test 1 | 3 pytania";
    miejsce_na_naglowek_2.appendChild(document.createTextNode(naglowek_2));

    //3. GENEROWANIE KONTENERA PRZECHOWUJACEGO TRESC QUIZU
    let miejsce_na_info = document.createElement("div");
    miejsce_na_info = tresc(miejsce_na_info);
    let text =
      "Zaznacz, czego się nauczyłeś/aś o nazywaniu zmiennych i sprawdź swoją wiedzę";
    miejsce_na_info.appendChild(document.createTextNode(text));

    //4.GENEROWANIE GUZIKA

    let kontener_guzika = document.createElement("div");
    let button = document.createElement("button");
    button.innerHTML = "Rozpocznij test";

    //5. DODAWANIE ZDJECIA
    let miejsce_computer = document.createElement("div");
    let computer = document.createElement("img");
    miejsce_computer.appendChild(computer);
    miejsce_computer.style.margin = "auto";
    miejsce_computer.style.width = "80%";
    miejsce_computer.style.marginTop = "20px";
    miejsce_computer.style.marginBottom = "100px";
    computer.src = "zdjecia/znaki_zapytania.png";
    contener_na_text.appendChild(miejsce_computer);
    document.getElementById("lewy_1").style.overflowY = "scroll";

    //5. DODAWANIE DO GLOWNEGO KONTENERA

    contener_na_text.appendChild(miejsce_na_naglowek_1);
    contener_na_text.appendChild(document.createElement(lineBreak));
    contener_na_text.appendChild(miejsce_na_naglowek_2);
    contener_na_text.appendChild(document.createElement(lineBreak));
    contener_na_text.appendChild(miejsce_na_info);
    contener_na_text.appendChild(button);

    document.getElementById("lewy_1").appendChild(contener_na_text);
    
  }
 
}
function resetState() {
  uruchomione = false;
  document.getElementById("lewy_1").innerHTML = "";
}


document.getElementById("zostaw_ocene").addEventListener("click", informacja);


function pytania_do_testu() {
  zmien_tlo();

  let contener_na_text = document.createElement("div");
  contener_na_text = box_text(contener_na_text);

  let box_pierwsze_pytanie = document.createElement("div");
  let p_1 = "Które nazwy zmiennej są prawidłowe?";
  box_pierwsze_pytanie = pytania(box_pierwsze_pytanie);
  box_pierwsze_pytanie.appendChild(document.createTextNode(p_1));

  contener_na_text.appendChild(box_pierwsze_pytanie);

  let p_1_1_odp = "f_num";


  
  let kontener_p_1_1_odp = document.createElement("div");
  kontener_p_1_1_odp = odpowiedzi(kontener_p_1_1_odp);
  kontener_p_1_1_odp = hover(kontener_p_1_1_odp);
  kontener_p_1_1_odp.appendChild(kolo_1);
  kontener_p_1_1_odp.appendChild(document.createTextNode(p_1_1_odp));

  contener_na_text.appendChild(kontener_p_1_1_odp);

  let p_1_2_odp = "1Num";
  let kontener_p_1_2_odp = document.createElement("div");
  kontener_p_1_2_odp = odpowiedzi(kontener_p_1_2_odp);
  kontener_p_1_2_odp.appendChild(kolo_2);
  kontener_p_1_2_odp.appendChild(document.createTextNode(p_1_2_odp));
  kontener_p_1_2_odp = hover(kontener_p_1_2_odp);

  contener_na_text.appendChild(kontener_p_1_2_odp);

  let p_1_3_odp = "1_num";
  let kontener_p_1_3_odp = document.createElement("div");
  kontener_p_1_3_odp = odpowiedzi(kontener_p_1_3_odp);
  kontener_p_1_3_odp.appendChild(kolo_3);
  kontener_p_1_3_odp.appendChild(document.createTextNode(p_1_3_odp));
  kontener_p_1_3_odp = hover(kontener_p_1_3_odp);
  contener_na_text.appendChild(kontener_p_1_3_odp);

  let p_1_4_odp = "FirstNum";
  let kontener_p_1_4_odp = document.createElement("div");
  kontener_p_1_4_odp = odpowiedzi(kontener_p_1_4_odp);
  kontener_p_1_4_odp.appendChild(kolo_4);
  kontener_p_1_4_odp.appendChild(document.createTextNode(p_1_4_odp));
  kontener_p_1_4_odp = hover(kontener_p_1_4_odp);
  contener_na_text.appendChild(kontener_p_1_4_odp);

  kontener_p_1_4_odp = prawda(kontener_p_1_4_odp);
  kontener_p_1_1_odp = prawda(kontener_p_1_1_odp);
  kolo_1 = zaznaczenie(kolo_1);
  kolo_2 = zaznaczenie(kolo_2);
  kolo_3 = zaznaczenie(kolo_3);
  kolo_4 = zaznaczenie(kolo_4);

  document.getElementById("lewy_1").appendChild(contener_na_text);
  document.getElementById("lewy_1").style.overflowY = "scroll";
}