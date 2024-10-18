function lagEpost(fornavn, mellomnavn, etternavn) {
  return lagEpostBruker(fornavn, mellomnavn, etternavn) + "@alf.no";
}
function lagEpostBruker(fornavn, mellomnavn, etternavn) {
  if (mellomnavn) {
    return fornavn.slice(0, 3) + "." + mellomnavn.slice(0, 1) + "." + etternavn;
  } else {
    return fornavn + "-" + etternavn.slice(0, 2);
  }

}
function visEpost(epost) {
  const svarWrapper = document.querySelector(".svar");
  console.log(svarWrapper);
  svarWrapper.querySelector(".epost").textContent = epost;
  svarWrapper.classList.remove("skjult");
}

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const epost = lagEpost(e.target.fornavn.value, e.target.mellomnavn.value, e.target.etternavn.value);
  visEpost(epost);
});
