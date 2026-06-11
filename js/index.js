// Establece la fecha de inicio del torneo (Año, Mes (0-11), Día, Hora, Minutos)
// Por ejemplo: 30 de Junio de 2026 a las 20:00 (8:00 PM)
const tournamentDate = new Date(2026, 5, 30, 20, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = tournamentDate - now;

    const countdownElement = document.getElementById('countdown');

    // Si el torneo ya empezó
    if (distance < 0) {
        countdownElement.innerHTML = "<h3 style='color:#ff0000; font-size: 2.5rem; text-shadow: 0 0 15px red;'>¡EL TORNEO ESTÁ EN VIVO!</h3>";
        return;
    }

    // Cálculos matemáticos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear para que siempre tenga 2 dígitos (ej: "09" en vez de "9")
    const formatNumber = (num) => num < 10 ? `0${num}` : num;

    // Renderizar el HTML del contador
    countdownElement.innerHTML = `
        <div class="time-box">
            <span>${formatNumber(days)}</span>
            <p>Días</p>
        </div>
        <div class="time-box">
            <span>${formatNumber(hours)}</span>
            <p>Horas</p>
        </div>
        <div class="time-box">
            <span>${formatNumber(minutes)}</span>
            <p>Min</p>
        </div>
        <div class="time-box">
            <span>${formatNumber(seconds)}</span>
            <p>Seg</p>
        </div>
    `;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar una vez al inicio para que no parpadee al cargar
updateCountdown();