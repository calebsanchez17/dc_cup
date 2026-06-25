// Base de datos completa para los 8 grupos
const tournamentData = {
    1: [
        { name: "DC ESPORT RED", points: 0 }, { name: "CLAN RZ MITX IT", points: 0 },
        { name: "V9 ESPORT", points: 0 }, { name: "BR ESPORT", points: 0 },
        { name: "ESPORTS GX", points: 0 }, { name: "FAMILY E-SPORT", points: 0 },
        { name: "RED RIOT GAMG", points: 0 }, { name: "CLAN A7", points: 0 },
        { name: "LW ESPORT", points: 0 }, { name: "CLAN NR", points: 0 },
        { name: "HEADSHOO7", points: 0 }, { name: "CUPO", points: 0 }
    ],
    2: [
        { name: "DC ESPORT BLACK", points: 0 }, { name: "TEAM 777", points: 0 },
        { name: "GSX ESPORT", points: 0 }, { name: "ØNEFEELING FEM", points: 0 },
        { name: "DELTA ESPORT DIVISIÓN", points: 0 }, { name: "VIRTUS STRIKE ESPORTS", points: 0 },
        { name: "TEAM CRAZY RABBITS", points: 0 }, { name: "TEAM AFA 03", points: 0 },
        { name: "CLAN TUCU OFICIAL", points: 0 }, { name: "TEAM DEVIANSTGANG", points: 0 },
        { name: "LAST ESPORT", points: 0 }, { name: "CUPO", points: 0 }
    ],
    3: [
        { name: "SAIYANS ESPORT", points: 0 }, { name: "B7 BEGIN", points: 0 },
        { name: "VFT LEGIÓES", points: 0 }, { name: "SAVAGE ACD ESPORT", points: 0 },
        { name: "CLAN XHILEE 65", points: 0 }, { name: "KETZA WARRIORS", points: 0 },
        { name: "CLAN VISIONBULLS", points: 0 }, { name: "ESPORT GROUND ZERO 9", points: 0 },
        { name: "CLAN RFW ESPORTS", points: 0 }, { name: "CLAN DARK GODS", points: 0 },
        { name: "SHINKARU GG ESPORT", points: 0 }, { name: "CUPO", points: 0 }
    ],
    4: [
        { name: "SOLARIS ESPORT", points: 0 }, { name: "RX7 ESPORTS", points: 0 },
        { name: "DC ESPORT RED", points: 0 }, { name: "LTX E-SPORTS", points: 0 },
        { name: "B7 ESPORT", points: 0 }, { name: "32 ESPORT", points: 0 },
        { name: "VIOLAᵛᶫCLAN", points: 0 }, { name: "NOVA REVELLION ESPORTS", points: 0 },
        { name: "LX SPORT", points: 0 }, { name: "AG STORM ESPORT", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    5: [
        { name: "LOS VAGOS", points: 0 }, { name: "RED RIOT GANG ESPORT", points: 0 },
        { name: "F7 E-SPORT", points: 0 }, { name: "TEAM WACHINGTON", points: 0 },
        { name: "DC ESPORT BLACK", points: 0 }, { name: "BIOHAZARD ESPORTS", points: 0 },
        { name: "CLAN LEVELING UP", points: 0 }, { name: "ESPORT HLP", points: 0 },
        { name: "TEAM L3P", points: 0 }, { name: "LIFE REWORK", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    6: [
        { name: "DRAGÓN Z", points: 0 }, { name: "CLAN KMK GAMING", points: 0 },
        { name: "FURY E-SPORT", points: 0 }, { name: "CLAN LEGIONMURSI", points: 0 },
        { name: "SAVAGE ESPORT", points: 0 }, { name: "CLAN TS BÉLICOS", points: 0 },
        { name: "CLAN WONKRU", points: 0 }, { name: "BLΛCK FURY", points: 0 },
        { name: "TEAM TX", points: 0 }, { name: "SAMURAI", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    7: [
        { name: "TEAM KING", points: 0 }, { name: "CLAN CARTEL 23!", points: 0 },
        { name: "CLAN DARK BLOOD", points: 0 }, { name: "URU TEAM", points: 0 },
        { name: "DARK KING", points: 0 }, { name: "TEAM X7 FIELES", points: 0 },
        { name: "DC ESPORT RED", points: 0 }, { name: "CLAN SLNT〆KLRS", points: 0 },
        { name: "ESPORT NR ", points: 0 }, { name: "ESPORT BLK BLACK", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ],
    8: [
        { name: "MONKEY SQUAD", points: 0 }, { name: "GHOST DEMONDS", points: 0 },
        { name: "CLAN WE ARE", points: 0 }, { name: "TEAM SAVAGE", points: 0 },
        { name: "TEAM 04", points: 0 }, { name: "CLAN W$N", points: 0 },
        { name: "TEAM SANTOSGANG", points: 0 }, { name: "INFIERNO POLAR ESPORT", points: 0 },
        { name: "DC ESPORT BLACK", points: 0 }, { name: "DYNEX ESPORT", points: 0 },
        { name: "CUPO", points: 0 }, { name: "CUPO", points: 0 }
    ]
};

const playerImages = {
    1: "assets/grupo1.png", 2: "assets/grupo2.png", 3: "assets/grupo3.png", 4: "assets/grupo4.png",
    5: "assets/grupo5.png", 6: "assets/grupo6.png", 7: "assets/grupo7.png", 8: "assets/grupo8.png"
};

// Configuración detallada de Staff y Horarios (GMT-05:00 Hora de Perú)
const groupScheduleAndStaff = {
    1: { date: "2026-07-04T20:00:00-05:00", mod: { name: "Caleb", img: "staff/modcaleb.jpeg", ig: "desing_paton" }, caster: { name: "Dana", img: "staff/casterdana.jpeg", ig: "mod_dxnx.23" } },
    2: { date: "2026-07-04T21:00:00-05:00", mod: { name: "Caleb", img: "staff/modcaleb.jpeg", ig: "desing_paton" }, caster: { name: "Dana", img: "staff/casterdana.jpeg", ig: "mod_dxnx.23" } },
    3: { date: "2026-07-05T20:00:00-05:00", mod: { name: "Alu", img: "staff/modalu.jpeg", ig: "aluruizz_" }, caster: { name: "", img: "staff/.jpeg", ig: "" } },
    4: { date: "2026-07-05T21:00:00-05:00", mod: { name: "Alu", img: "staff/modalu.jpeg", ig: "aluruizz_" }, caster: { name: "", img: "staff/.jpeg", ig: "" } },
    5: { date: "2026-07-06T20:00:00-05:00", mod: { name: "Cesar", img: "staff/modcesar.jpeg", ig: "kmk._cesar.mod" }, caster: { name: "", img: "staff/.jpeg", ig: "" } },
    6: { date: "2026-07-06T21:00:00-05:00", mod: { name: "Cesar", img: "staff/modcesar.jpeg", ig: "kmk._cesar.mod" }, caster: { name: "", img: "staff/.jpeg", ig: "" } },
    7: { date: "2026-07-07T20:00:00-05:00", mod: { name: "Eri", img: "staff/moderi.jpeg", ig: "" }, caster: { name: "", img: "staff/.jpeg", ig: "" } },
    8: { date: "2026-07-07T21:00:00-05:00", mod: { name: "Eri", img: "staff/moderi.jpeg", ig: "" }, caster: { name: "", img: "staff/.jpeg", ig: "" } }
};

let countdownInterval = null;

// Generar botones de navegación de grupos
const groupButtonsContainer = document.getElementById('groupButtons');
for (let i = 1; i <= 8; i++) {
    const btn = document.createElement('button');
    btn.textContent = `Grupo ${i}`;
    if (i === 1) btn.classList.add('active');
    btn.onclick = () => renderGroup(i, btn);
    groupButtonsContainer.appendChild(btn);
}

function renderGroup(groupNum, activeBtn = null) {
    if (activeBtn) {
        document.querySelectorAll('.group-buttons button').forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    document.getElementById('currentGroupNum').textContent = groupNum;

    // Cambiar la imagen principal del competidor
    const playerImgElement = document.getElementById('playerImage');
    if (playerImgElement && playerImages[groupNum]) {
        playerImgElement.src = playerImages[groupNum];
    }

    // Actualizar sección del Staff asignado dinámicamente
    const staffData = groupScheduleAndStaff[groupNum];
    if (staffData) {
        document.getElementById('modName').textContent = staffData.mod.name;
        document.getElementById('modImage').src = staffData.mod.img;
        document.getElementById('modInstagram').href = `https://instagram.com/${staffData.mod.ig}`;
        document.getElementById('modInstagram').innerHTML = `<i class="fab fa-instagram"></i> @${staffData.mod.ig}`;

        document.getElementById('casterName').textContent = staffData.caster.name;
        document.getElementById('casterImage').src = staffData.caster.img;
        document.getElementById('casterInstagram').href = `https://instagram.com/${staffData.caster.ig}`;
        document.getElementById('casterInstagram').innerHTML = `<i class="fab fa-instagram"></i> @${staffData.caster.ig}`;
        
        // Ejecutar conteo regresivo para este grupo específico
        startTimer(staffData.date);
    }

    // Limpiar e insertar filas de la tabla de posiciones
    const tableContainer = document.getElementById('standingsTable');
    tableContainer.innerHTML = '';

    const teams = tournamentData[groupNum] || [];
    teams.forEach((team, index) => {
        const rank = index + 1;
        const isEliminated = rank > 6 ? 'eliminated' : 'qualified';

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

window.onload = () => renderGroup(1);