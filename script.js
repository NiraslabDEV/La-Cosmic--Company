// Dados dos pacotes
const paquetes = {
  opcion1: {
    nombre: "Show de Burbujas",
    duracion: "20-30 min",
    precio: "S/ 350",
    descripcion:
      "Show de Burbujas con 1 artista, show original y acompañamiento para cantar el hb",
  },
  opcion2: {
    nombre: "Burbujas y Música",
    duracion: "40 min",
    precio: "S/ 450",
    descripcion:
      "Show de Burbujas y Música con 1 artista, show original y acompañamiento para cantar el hb",
  },
  opcion3: {
    nombre: "Burbujas, Títeres y Música",
    duracion: "40 min",
    precio: "S/ 550",
    descripcion:
      "Show completo con burbujas, títeres y música, 1 artista, show original",
  },
  opcion4: {
    nombre: "Burbujas, Malabares y Títeres",
    duracion: "40 min",
    precio: "S/ 550",
    descripcion:
      "Show completo con burbujas, malabares y títeres, 1 artista, show original",
  },
  opcion5: {
    nombre: "Show Completo",
    duracion: "40 min",
    precio: "S/ 600",
    descripcion:
      "Show completo con burbujas, malabares, títeres y música, 1 artista, show original",
  },
  opcion6: {
    nombre: "Burbujas con Ciencia Divertida",
    duracion: "40 min",
    precio: "S/ 650",
    descripcion:
      "Show de burbujas con ciencia divertida y música, 1 artista, show original",
  },
  opcion7: {
    nombre: "Show Premium",
    duracion: "60 min",
    precio: "S/ 750",
    descripcion:
      "Show completo con burbujas, títeres, malabares, ciencia divertida y música",
  },
};

// Complementos disponíveis
const complementos = {
  globoflexia: {
    nombre: "Globoflexia",
    precio: "S/ 550",
    descripcion: "Realización de figuras con globos, 90 minutos de duración",
  },
  fotografia: {
    nombre: "Registro Fotográfico",
    precio: "S/ 400",
    descripcion:
      "2.5 horas de fotografía, mini sesión familiar, 100 fotos digitales",
  },
};

// Talleres disponíveis
const talleres = {
  burbujas: {
    nombre: "Taller de Burbujas",
    precio: "S/ 300",
    descripcion: "30 minutos de duración, materiales para 20 participantes",
  },
  pintura: {
    nombre: "Taller de Pintura",
    precio: "S/ 350",
    descripcion: "30 minutos de duración, materiales para 20 participantes",
  },
  malabares: {
    nombre: "Taller de Malabares",
    precio: "S/ 300",
    descripcion: "30 minutos de duración, materiales para 20 participantes",
  },
  ritmo: {
    nombre: "Taller de Ritmo y Percusión",
    precio: "S/ 350",
    descripcion: "30 minutos de duración, materiales para 20 participantes",
  },
  acrobacias: {
    nombre: "Taller de Acrobacias y Juegos",
    precio: "S/ 350",
    descripcion: "30 minutos de duración, materiales para 20 participantes",
  },
};

// Função para atualizar o resumo do pedido
function actualizarResumen() {
  const paqueteSeleccionado = document.getElementById("paquete").value;
  const complementosSeleccionados = Array.from(
    document.querySelectorAll('input[name="complementos"]:checked')
  ).map((cb) => cb.value);
  const talleresSeleccionados = Array.from(
    document.querySelectorAll('input[name="talleres"]:checked')
  ).map((cb) => cb.value);

  let resumen = "🎪 *LA COSMIC COMPANY - RESUMEN DE RESERVA*\n\n";

  if (paqueteSeleccionado) {
    const paquete = paquetes[paqueteSeleccionado];
    resumen += `*Paquete Principal:* ${paquete.nombre}\n`;
    resumen += `Duración: ${paquete.duracion}\n`;
    resumen += `Precio: ${paquete.precio}\n\n`;
  }

  if (complementosSeleccionados.length > 0) {
    resumen += "*Complementos Seleccionados:*\n";
    complementosSeleccionados.forEach((comp) => {
      resumen += `- ${complementos[comp].nombre}: ${complementos[comp].precio}\n`;
    });
    resumen += "\n";
  }

  if (talleresSeleccionados.length > 0) {
    resumen += "*Talleres Seleccionados:*\n";
    talleresSeleccionados.forEach((taller) => {
      resumen += `- ${talleres[taller].nombre}: ${talleres[taller].precio}\n`;
    });
    resumen += "\n";
  }

  const nombre = document.getElementById("nombre").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const fecha = document.getElementById("fecha").value;

  resumen += `*Datos del Cliente:*\n`;
  resumen += `Nombre: ${nombre}\n`;
  resumen += `WhatsApp: ${whatsapp}\n`;
  resumen += `Fecha del Evento: ${fecha}\n\n`;

  resumen += `*Datos de Pago:*\n`;
  resumen += `BBVA:\n`;
  resumen += `Cuenta: 0011-0426-0200289575\n`;
  resumen += `CCI: 011-426-000200289575-49\n`;
  resumen += `Titular: María Milagros Esquivel Roca\n\n`;
  resumen += `BCP:\n`;
  resumen += `Cuenta: 194-94781522-0-09\n`;
  resumen += `CCI: 00219419478152200991\n`;
  resumen += `Titular: Ramon Nunura García\n\n`;

  resumen += `Para confirmar la reserva, se requiere el 50% del pago.`;

  return resumen;
}

// Função para enviar para o WhatsApp
function enviarWhatsApp() {
  const resumen = actualizarResumen();
  const whatsappNumber = "51999999999"; // Substituir pelo número correto
  const mensaje = encodeURIComponent(resumen);
  window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, "_blank");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    enviarWhatsApp();
  });

  // Atualizar preços quando um pacote é selecionado
  const paqueteSelect = document.getElementById("paquete");
  paqueteSelect.addEventListener("change", function () {
    const paquete = paquetes[this.value];
    if (paquete) {
      document.getElementById("precioPaquete").textContent = paquete.precio;
      document.getElementById("descripcionPaquete").textContent =
        paquete.descripcion;
    }
  });
});

// Novo controle de etapas do formulário dinâmico
let currentStep = 0;
const steps = [
  "step-inicio",
  "step-nome",
  "step-whatsapp",
  "step-fecha",
  "step-paquete",
  "step-complementos",
  "step-talleres",
  "step-pagamento",
  "step-resumo",
];

function showStep(index) {
  steps.forEach((id, i) => {
    document.getElementById(id).classList.toggle("hidden", i !== index);
  });
  currentStep = index;
}

function nextStep(next) {
  if (next === 1) return showStep(1); // INICIAR RESERVA não precisa validar
  if (next === 2 && !document.getElementById("quiz-nombre").value) return;
  if (next === 3 && !document.getElementById("quiz-whatsapp").value) return;
  if (next === 4 && !document.getElementById("quiz-fecha").value) return;
  if (next === 5 && !document.getElementById("quiz-paquete").value) return;
  // Complementos e Talleres são opcionais
  if (next === 8) {
    // Validação da forma de pagamento só ao tentar ir para o resumo
    const pagamento = document.querySelector(
      'input[name="quiz-pagamento"]:checked'
    );
    if (!pagamento) return;
  }
  showStep(next);
  if (next === 8) montarResumo();
}

function prevStep(prev) {
  showStep(prev);
}

function getValorPacote(pacote) {
  // Extrai o valor do pacote do texto do select
  if (!pacote) return 0;
  const match = pacote.match(/\(S\/\s?(\d+)\)/);
  return match ? parseInt(match[1]) : 0;
}

function getValorExtra(valorStr) {
  // Extrai o valor do texto tipo "(S/ 350)"
  if (!valorStr) return 0;
  const match = valorStr.match(/S\/\s?(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

function montarResumo() {
  const nome = document.getElementById("quiz-nombre").value;
  const whatsapp = document.getElementById("quiz-whatsapp").value;
  const fecha = document.getElementById("quiz-fecha").value;
  const pacote = document.getElementById("quiz-paquete").value;
  const complementos = Array.from(
    document.querySelectorAll('input[name="quiz-complementos"]:checked')
  ).map((e) => e.value);
  const talleres = Array.from(
    document.querySelectorAll('input[name="quiz-talleres"]:checked')
  ).map((e) => e.value);
  const pagamento =
    document.querySelector('input[name="quiz-pagamento"]:checked')?.value || "";

  // Calcular valor total
  let total = 0;
  total += getValorPacote(pacote);
  complementos.forEach((c) => (total += getValorExtra(c)));
  talleres.forEach((t) => (total += getValorExtra(t)));

  let resumo = `<b>Nome:</b> ${nome}<br>`;
  resumo += `<b>WhatsApp:</b> ${whatsapp}<br>`;
  resumo += `<b>Data do evento:</b> ${fecha}<br>`;
  resumo += `<b>Pacote:</b> ${pacote}<br>`;
  if (complementos.length)
    resumo += `<b>Complementos:</b> ${complementos.join(", ")}<br>`;
  if (talleres.length) resumo += `<b>Talleres:</b> ${talleres.join(", ")}<br>`;
  resumo += `<b>Forma de pagamento:</b> ${pagamento}<br>`;
  resumo += `<b>Total:</b> <span class='text-pink-400 font-bold'>S/ ${total}</span>`;
  document.getElementById("quiz-resumo").innerHTML = resumo;
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("quiz-nombre").value;
  const whatsapp = document.getElementById("quiz-whatsapp").value;
  const fecha = document.getElementById("quiz-fecha").value;
  const pacote = document.getElementById("quiz-paquete").value;
  const complementos = Array.from(
    document.querySelectorAll('input[name="quiz-complementos"]:checked')
  ).map((e) => e.value);
  const talleres = Array.from(
    document.querySelectorAll('input[name="quiz-talleres"]:checked')
  ).map((e) => e.value);
  const pagamento =
    document.querySelector('input[name="quiz-pagamento"]:checked')?.value || "";

  // Calcular valor total
  let total = 0;
  total += getValorPacote(pacote);
  complementos.forEach((c) => (total += getValorExtra(c)));
  talleres.forEach((t) => (total += getValorExtra(t)));

  let mensagem = `*Reserva de Show LA Cosmic Company*\n`;
  mensagem += `*Nome:* ${nome}\n`;
  mensagem += `*WhatsApp:* ${whatsapp}\n`;
  mensagem += `*Data do evento:* ${fecha}\n`;
  mensagem += `*Pacote:* ${pacote}\n`;
  if (complementos.length)
    mensagem += `*Complementos:* ${complementos.join(", ")}\n`;
  if (talleres.length) mensagem += `*Talleres:* ${talleres.join(", ")}\n`;
  mensagem += `*Forma de pagamento:* ${pagamento}\n`;
  mensagem += `*Total:* S/ ${total}`;

  const url = `https://wa.me/51934287589?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});

// Inicializa mostrando a primeira etapa
showStep(0);

// Menu hambúrguer responsivo
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) navMenu.classList.add("hidden");
    });
  });
}
