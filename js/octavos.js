// Base de datos completa para los 8 grupos (12 equipos por grupo)
const tournamentData = {
    1: [
        { name: "DC ESPORT RED", points: 0 }, { name: "CLAN RZ MITX IT", points: 0 },
        { name: "V9 ESPORT", points: 0 }, { name: "BR ESPORT", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    2: [
        { name: "DC ESPORT BLACK", points: 0 }, { name: "TEAM 777", points: 0 },
        { name: "GSX ESPORT", points: 0 }, { name: "SAVAGE ESPORT", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    3: [
        { name: "SAIYANS ESPORT", points: 0 }, { name: "B7 BEGIN", points: 0 },
        { name: "VFT LEGIÓES", points: 0 }, { name: "SAVAGE ACD ESPORT", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    4: [
        { name: "SOLARIS ESPORT", points: 0 }, { name: "RX7 ESPORTS", points: 0 },
        { name: "DC ESPORT RED", points: 0 }, { name: "LTX E-SPORTS", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    5: [
        { name: "LOS VAGOS", points: 0 }, { name: "RED RIOT GANG ESPORT", points: 0 },
        { name: "B7 E-SPORT", points: 0 }, { name: "CUPO", points: 0 },
        { name: "DC ESPORT BLACK", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    6: [
        { name: "DRAGÓN Z", points: 0 }, { name: "CLAN KMK GAMING", points: 0 },
        { name: "FURY E-SPORT", points: 0 }, { name: "B7 E-SPORT", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    7: [
        { name: "TEAM KING", points: 0 }, { name: "CLAN CARTEL 23!", points: 0 },
        { name: "CLAN DARK BLOOD", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "DC ESPORT RED", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    8: [
        { name: "MONKEY SQUAD", points: 0 }, { name: "GHOST DEMONDS", points: 0 },
        { name: "CLAN WE ARE", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 },
        { name: "DC ESPORT BLACK", points: 0 }, { name: "CUPO", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ]
};

// Objeto con las rutas de las fotos de los jugadores por grupo
const playerImages = {
    1: "assets/grupo1.png",
    2: "assets/grupo2.png",
    3: "assets/grupo3.png",
    4: "assets/grupo4.png",
    5: "assets/grupo5.png",
    6: "assets/grupo6.png",
    7: "assets/grupo7.png",
    8: "assets/grupo8.png"
};

// Generar botones de navegación de grupos
const groupButtonsContainer = document.getElementById('groupButtons');
for (let i = 1; i <= 8; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Grupo ${i}`;
    if (i === 1) btn.classList.add('active'); // Grupo 1 activo por defecto
    btn.onclick = () => renderGroup(i, btn);
    groupButtonsContainer.appendChild(btn);
}

// Función unificada para renderizar la tabla y cambiar la imagen
function renderGroup(groupNum, activeBtn = null) {
    // 1. Actualizar clase activa en botones
    if (activeBtn) {
        document.querySelectorAll('.group-buttons button').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    // 2. Actualizar título con el número de grupo
    document.getElementById('currentGroupNum').textContent = groupNum;

    // 3. Cambiar la imagen del jugador
    const playerImgElement = document.getElementById('playerImage');
    if (playerImgElement && playerImages[groupNum]) {
        // Truco para reiniciar la animación CSS (si la estás usando)
        playerImgElement.classList.remove('fade-in');
        void playerImgElement.offsetWidth; // Fuerza al navegador a recalcular
        playerImgElement.classList.add('fade-in');
        
        // Cambiar la ruta de la imagen
        playerImgElement.src = playerImages[groupNum];
    }

    // 4. Limpiar contenedor de la tabla
    const tableContainer = document.getElementById('standingsTable');
    tableContainer.innerHTML = '';

    const teams = tournamentData[groupNum] || [];

    // 5. Renderizar filas de los equipos dinámicamente
    teams.forEach((team, index) => {
        const rank = index + 1;
        // Los primeros 6 clasifican, del 7 al 12 quedan eliminados
        const isEliminated = rank > 6 ? 'eliminated' : '';

        const rowHTML = `
            <div class="team-row ${isEliminated}">
                <div class="rank">${rank}</div>
                <div class="name">${team.name}</div>
                <div class="points">${team.points}</div>
            </div>
        `;
        tableContainer.innerHTML += rowHTML;
    });
}

// Inicializar mostrando el Grupo 1 al cargar la página
window.onload = () => renderGroup(1);