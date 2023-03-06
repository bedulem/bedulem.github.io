window.addEventListener("load", function () {
  const formulario = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const errores = document.querySelector("#errores");
  let errorList = [];

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarForm(nombre.value, email.value);
  });

  function validarForm(nombre, email) {
    errorList = [];
    errores.innerHTML = "";

    validarNombre(nombre);
    validarEmail(email);

    if (errorList.length > 0) {
      for (let error of errorList) {
        errores.innerHTML += "<li>" + error + "</li>";
      }
    } else {
      formulario.reset();
      alert("Tu mensaje ha asido enviado!");
    }
  }

  function validarEmail(email) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(email))
      errorList.push("La dirección de correo " + email + " es incorrecta.");
  }

  function validarNombre(nombre) {
    let expr = /^[A-Za-z0-9_-]/;
    if (!expr.test(nombre)) {
      errorList.push("El nombre debe contener solo letras.");
    }
  }
});
