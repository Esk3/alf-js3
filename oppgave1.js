const brukernavn = "abc";
const password = "123";

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const brukernavnValue = e.target.brukernavn.value;
  const passwordValue = e.target.password.value;
  if (brukernavnValue == brukernavn && passwordValue == password) {
    visOk(brukernavnValue);
  } else {
    visError();
  }

});

function visOk(navn) {
  const p = document.querySelector("p.ok");
  const error = document.querySelector("p.error");
  p.classList.remove("skjult");
  error.classList.add("skjult");

  p.querySelector("span.brukernavn").textContent = navn;
}

function visError() {
  const p = document.querySelector("p.ok");
  const error = document.querySelector("p.error");

  p.classList.add("skjult");
  error.classList.remove("skjult");

  error.style.animation = 'none';
  setTimeout(() => {
    error.style.animation = null;
  }, 10);

}
