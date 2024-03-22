let contador = 0; // Inicializamos el contador en 0
const a1 = document.getElementById("isabella");
const a2 = document.getElementById("nahuel");
const a3 = document.getElementById("guada");
const a4 = document.getElementById("benjaC");
const a5 = document.getElementById("tomi2");
const a6 = document.getElementById("thiago");
const enviar = document.getElementById("enviar");

let asistentes = [];

const alumnoCheckboxes = [a1, a2, a3, a4, a5, a6];
const alumnoNames = [
  " Isabella",
  " Nahuel",
  " Guada",
  " BenjaminC",
  " Tomi",
  " Thiago",
];

enviar.addEventListener("click", () => {
  asistentes = [];
  for (let i = 0; i < alumnoCheckboxes.length; i++) {
    if (alumnoCheckboxes[i].checked) {
      asistentes.push(alumnoNames[i]);
    }
  }
  if (asistentes.length === 1) {
    console.log(`Hola Mabe, hoy solo vino${asistentes}`);
    let mensaje = `Hola Mabe, hoy solo vino${asistentes}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5491165277188&text=${mensaje}`
    );
  } else {
    console.log(`Hola Mabe, hoy vinieron ${asistentes.length}.${asistentes}`);
  }
  let mensaje = `Hola Mabe, hoy vinieron ${asistentes.length}.${asistentes}`;
  window.open(
    `https://api.whatsapp.com/send?phone=5491165277188&text=${mensaje}`
  );
});
