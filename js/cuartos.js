// Base de datos de Cuartos de Final (4 Grupos de 12 equipos = 48 equipos)
const tournamentData = {
    1: [
        { name: "RED RIOT GAMG", points: 9 }, { name: "TEAM 777", points: 72 },
        { name: "B7 BEGIN", points: 18 }, { name: "DC ESPORT RED", points: 34 },
        { name: "FURIUS LYNX SPORT", points: 50 }, { name: "CLAN CARTEL 23!", points: 43 },
        { name: "V9 ESPORT", points: 67 }, { name: "DARK KING", points: 7 },
        { name: "LOS VAGOS", points: 0 }, { name: "ESPORT HLP", points: 86 },
        { name: "BLΛCK FURY", points: 30 }, { name: "TEAM SAVAGE", points: 2 }
    ],
    2: [
        { name: "SAMURAI", points: 18 }, { name: "32 ESPORT", points: 38 },
        { name: "BR ESPORT", points: 57 }, { name: "GSX ESPORT", points: 22 },
        { name: "TEAM 04", points: 45 }, { name: "BIOHAZARD ESPORTS", points: 52 },
        { name: "DC ESPORT RED", points: 29 }, { name: "GHOST DEMONDS", points: 40 },
        { name: "GA! ESPORT", points: 30 }, { name: "LIFE REWORK", points: 10 },
        { name: "CLAN LEVELING UP", points: 46 }, { name: "DRAGÓN Z", points: 16 }
    ],
    3: [
        { name: "TEAM CRAZY RABBITS", points: 0 }, { name: "B7 ESPORT", points: 0 },
        { name: "CLAN DARK GODS", points: 0 }, { name: "BR ESPORT", points: 0 },
        { name: "V9 ESPORT", points: 0 }, { name: "F7 E-SPORT", points: 0 },
        { name: "ESPORT ZENITH", points: 0 }, { name: "TEAM SANTOSGANG", points: 0 },
        { name: "CLAN TS BÉLICOS", points: 0 }, { name: "RNS ESPORTS", points: 0 },
        { name: "ROOSTER FEM DC", points: 0 }, { name: "RANK FLOW ESPORT", points: 0 }
    ],
    4: [
        { name: "AG STORM ESPORT", points: 0 }, { name: "SAMURAI", points: 0 },
        { name: "DELTA ESPORT DIVISIÓN", points: 0 }, { name: "DC ESPORT RED", points: 0 },
        { name: "ROOSTER INVADING", points: 0 }, { name: "TEAM DEVIANSTGANG", points: 0 },
        { name: "TEAM SANTOSGANG", points: 0 }, { name: "ESPORT BLK BLACK", points: 0 },
        { name: "SAIYANS ESPORT", points: 0 }, { name: "CLAN WE ARE", points: 0 },
        { name: "CLAN WONKRU", points: 0 }, { name: "TEAM L3P", points: 0 }
    ]
};

const playerImages = {
    1: "assets/grupo1.png", 2: "assets/cuartos-g2.png", 
    3: "assets/cuartos-g3.png", 4: "assets/cuartos-g4.png"
};

// Configuración de Staff y Horarios (Ajustado para el fin de semana: Sábado 11 y Domingo 12 de Julio)
// Horarios exactos en GMT-05:00 (Hora de Perú)
const groupScheduleAndStaff = {
    // SÁBADO
    1: { date: "2026-07-11T19:00:00-05:00", mod: { name: "Caleb", img: "staff/modcaleb.jpeg", ig: "desing_paton" }, caster: { name: "Nikki", img: "staff/", ig: "nikki30.ff" } }, // 7:00 PM
    2: { date: "2026-07-11T22:00:00-05:00", mod: { name: "Cesar", img: "staff/modcesar.jpeg", ig: "kmk._cesar.mod" }, caster: { name: "Danna", img: "staff/casterdana.jpeg", ig: "mod_dxnx.23" } }, // 9:00 PM
    
    // DOMINGO
    3: { date: "2026-07-12T19:00:00-05:00", mod: { name: "Eri", img: "staff/moderi.jpeg", ig: "moroff_" }, caster: { name: "", img: "staff/", ig: "" } }, // 7:00 PM
    4: { date: "2026-07-12T21:00:00-05:00", mod: { name: "Teo", img: "staff/modteo.jpeg", ig: "teoo__ff.mod" }, caster: { name: "", img: "staff/", ig: "" } }  // 9:00 PM
};

let countdownInterval = null;

// Inicialización de la página
window.onload = () => {
    generateGroupButtons();
    renderGroup(1); // Carga el grupo 1 por defecto
    renderGeneralTable(); // Calcula y muestra la tabla de 48 equipos
};

// Generar botones de navegación (Solo 4 grupos)
function generateGroupButtons() {
    const container = document.getElementById('groupButtons');
    for (let i = 1; i <= 4; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Grupo ${i}`;
        if (i === 1) btn.classList.add('active');
        btn.onclick = () => renderGroup(i, btn);
        container.appendChild(btn);
    }
}

// ----------------------------------------------------
// NUEVA FUNCIÓN DE APOYO: OBTENER TABLA GENERAL ORDENADA
// ----------------------------------------------------
function getSortedGeneralStandings() {
    let allTeams = [];
    for (let i = 1; i <= 4; i++) {
        const groupTeams = tournamentData[i].map(team => {
            return { ...team, groupNumber: i };
        });
        allTeams = allTeams.concat(groupTeams);
    }
    // Ordenar de mayor a menor puntaje
    return allTeams.sort((a, b) => b.points - a.points);
}

// Renderizar el Grupo seleccionado en la parte superior
function renderGroup(groupNum, activeBtn = null) {
    if (activeBtn) {
        document.querySelectorAll('.group-buttons button').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    document.getElementById('currentGroupNum').textContent = groupNum;

    // Actualizar Imagen
    const playerImgElement = document.getElementById('playerImage');
    if (playerImgElement && playerImages[groupNum]) {
        playerImgElement.src = playerImages[groupNum];
    }

    // Actualizar Staff y Temporizador
    const staffData = groupScheduleAndStaff[groupNum];
    if (staffData) {
        document.getElementById('modName').textContent = staffData.mod.name;
        document.getElementById('modImage').src = staffData.mod.img;
        document.getElementById('modInstagram').href = `https://instagram.com/${staffData.mod.ig}`;
        document.getElementById('modInstagram').innerHTML = `<i class="fab fa-instagram"></i> @${staffData.mod.ig}`;

        document.getElementById('casterName').textContent = staffData.caster.name || "TBA";
        document.getElementById('casterImage').src = staffData.caster.img;
        if(staffData.caster.ig) {
            document.getElementById('casterInstagram').href = `https://instagram.com/${staffData.caster.ig}`;
            document.getElementById('casterInstagram').innerHTML = `<i class="fab fa-instagram"></i> @${staffData.caster.ig}`;
        } else {
            document.getElementById('casterInstagram').innerHTML = "";
        }
        
        startTimer(staffData.date);
    }

    // Llenar tabla del Grupo
    const tableContainer = document.getElementById('standingsTable');
    tableContainer.innerHTML = '';

    const teams = tournamentData[groupNum] || [];
    const sortedGroupTeams = [...teams].sort((a, b) => b.points - a.points);
    
    // Obtenemos la tabla general para saber quiénes están en el TOP 18 global
    const generalStandings = getSortedGeneralStandings();

    sortedGroupTeams.forEach((team, index) => {
        const groupRank = index + 1;
        
        // Buscamos la posición de ESTE equipo en la tabla general
        const generalIndex = generalStandings.findIndex(t => t.name === team.name && t.groupNumber === groupNum);
        const generalRank = generalIndex + 1; // Le sumamos 1 porque los arrays empiezan en 0

        // Si su rango en la tabla general es 18 o menos, se pinta dorado (qualified), si no, oscuro (eliminated)
        const isEliminated = generalRank > 18 ? 'eliminated' : 'qualified';

        tableContainer.innerHTML += `
            <div class="team-row ${isEliminated}">
                <div class="rank">${groupRank}</div>
                <div class="name">${team.name}</div>
                <div class="points">${team.points}</div>
            </div>
        `;
    });
}

// ----------------------------------------------------
// RENDERIZAR TABLA GENERAL (48 EQUIPOS) EN LA PARTE INFERIOR
// ----------------------------------------------------
function renderGeneralTable() {
    const generalContainer = document.getElementById('generalTable');
    generalContainer.innerHTML = '';

    const allTeams = getSortedGeneralStandings();

    // Los primeros 18 clasifican a Semifinales
    allTeams.forEach((team, index) => {
        const rank = index + 1;
        const isEliminated = rank > 18 ? 'eliminated' : 'qualified';

        generalContainer.innerHTML += `
            <div class="team-row ${isEliminated}">
                <div class="rank">${rank}</div>
                <div class="name">
                    ${team.name} 
                    <span class="group-tag">G${team.groupNumber}</span>
                </div>
                <div class="points">${team.points}</div>
            </div>
        `;
    });
}

// Función del Temporizador
function startTimer(targetDateString) {
    clearInterval(countdownInterval);
    const targetTime = new Date(targetDateString).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetTime - now;

        if (diff <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('mins').textContent = '00';
            document.getElementById('secs').textContent = '00';
            clearInterval(countdownInterval);
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(d).padStart(2, '0');
        document.getElementById('hours').textContent = String(h).padStart(2, '0');
        document.getElementById('mins').textContent = String(m).padStart(2, '0');
        document.getElementById('secs').textContent = String(s).padStart(2, '0');
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
}