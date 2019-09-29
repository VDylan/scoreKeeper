const darkMode = document.querySelector("#darkMode");

function changeTheme(ev) {
  if (ev.target.tagName === "A") {
    document.body.classList.toggle("darkMode");
  }

  if (document.querySelector("body").classList.contains("darkMode")) {
    document.querySelector("#darkMode").classList.add("active");
  } else {

    document.querySelector("#darkMode").classList.remove("active");
  }
}

darkMode.addEventListener("click", changeTheme);
