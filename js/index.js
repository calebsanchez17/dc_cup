// Establece la fecha de inicio del torneo: 04 de Julio de 2026 a las 8:00 PM (Hora Perú / GMT-5)
// Usamos el formato ISO para asegurar que la zona horaria sea siempre la correcta sin importar el país del visitante
const tournamentDate = new Date("2026-07-04T20:00:00-05:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = tournamentDate - now;

    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return; // Seguridad extra para evitar errores si el HTML no carga a tiempo

    // Si el torneo ya empezó (la cuenta regresiva llegó a 0)
    if (distance < 0) {
        // Mensaje con estilo dorado neón acorde al diseño
        countdownElement.innerHTML = `
            <h3 style="color:#eab308; font-size: 2.5rem; text-shadow: 0 0 15px rgba(234, 179, 8, 0.6); margin: 0; font-family: 'Teko', sans-serif; letter-spacing: 2px;">
                ¡EL TORNEO ESTÁ EN VIVO!
            </h3>`;
        return;
    }

    // Cálculos matemáticos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear para que siempre tenga 2 dígitos (ej: "09" en vez de "9") usando padStart
    const formatNumber = (num) => String(num).padStart(2, '0');

    // Renderizar el HTML del contador respetando tus clases CSS (.time-box)
    countdownElement.innerHTML = `
        <div class="time-box">
            <span>${formatNumber(days)}</span>
            <p>DÍAS</p>
        </div>
        <div class="time-box">
            <span>${formatNumber(hours)}</span>
            <p>HORAS</p>
        </div>
        <div class="time-box">
            <span>${formatNumber(minutes)}</span>
            <p>MIN</p>
        </div>
        <div class="time-box">
            <span>${formatNumber(seconds)}</span>
            <p>SEG</p>
        </div>
    `;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar una vez al inicio para que no parpadee al cargar la página
updateCountdown();