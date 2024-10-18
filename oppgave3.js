function vis(type) {
  const svar = document.querySelector(".svar");
  const typer = ["pensjon", "barn", "voksen"];

  for (const t of typer) {
    svar.classList.remove(t);
  }

  svar.classList.add(type);
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const alder = Number(e.target.alder.value);

  if (alder < 12) {
    vis("barn");
  } else if (alder > 67) {
    vis("pensjon");
  } else {
    vis("voksen");
  }
  document.querySelector("span.alder").textContent = alder;
});

document.querySelector(".utfordring form").addEventListener("submit", e => {
  e.preventDefault();
  const barneBilletter = Number(e.target.barn.value);
  const barnRow = document.querySelector(".utfordring .barn");
  const barnePris = Number(barnRow.querySelector(".pris").textContent);
  if (barneBilletter > 0) {
    barnRow.classList.remove("skjult");
    barnRow.querySelector("td").textContent = barneBilletter;
  } else {
    barnRow.classList.add("skjult");
  }

  const voksenBilletter = e.target.voksen.value;
  const voksenRow = document.querySelector(".utfordring .voksen");
  const voksenPris = Number(voksenRow.querySelector(".pris").textContent);
  if (voksenBilletter > 0) {
    voksenRow.classList.remove("skjult");
    voksenRow.querySelector("td").textContent = voksenBilletter;
  } else {
    voksenRow.classList.add("skjult");
  }

  const pensjonBilletter = e.target.pensjon.value;
  const pensjonRow = document.querySelector(".utfordring .pensjon");
  const pensjonPris = Number(pensjonRow.querySelector(".pris").textContent);
  if (pensjonBilletter > 0) {
    pensjonRow.classList.remove("skjult");
    pensjonRow.querySelector("td").textContent = pensjonBilletter;
  } else {
    pensjonRow.classList.add("skjult");
  }

  const pris = barnePris * barneBilletter + voksenPris * voksenBilletter + pensjonPris * pensjonBilletter;
  const prisElement = document.querySelector(".utfordring p.pris");
  prisElement.classList.remove("skjult");
  prisElement.querySelector("span").textContent = pris;

  document.querySelector("table").classList.remove("skjult")
});
