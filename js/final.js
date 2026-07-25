// ==========================================
// BASE DE DATOS Ficticia para alimentar las vistas
// ==========================================

const dataTabla = [
    { pos: 1, img: "logos/br.png", name: "BR", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇵🇪" },
    { pos: 2, img: "logos/ag.png", name: "AG", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇺🇾" },
    { pos: 3, img: "logos/saiyans.png", name: "SAIYANS ", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇨🇱" },
    { pos: 4, img: "logos/rf.png", name: "RF", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇵🇪" },
    { pos: 5, img: "logos/777.png", name: "777", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇦🇷" },
    { pos: 6, img: "logos/nueve.png", name: "V9", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇨🇱" },
    { pos: 7, img: "logos/gd.png", name: "GD", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇦🇷" },
    { pos: 8, img: "logos/crazy.png", name: "CR", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇦🇷" },
    { pos: 9, img: "logos/40.png", name: "P40", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇦🇷" },
    { pos: 10, img: "logos/z7.png", name: "Z7", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇨🇱" },
    { pos: 11, img: "logos/04.png", name: "04", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇧🇷" },
    { pos: 12, img: "logos/hlp.png", name: "HLP", game: 0, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇵🇪" }
];

const dataBooyah = [
    { map: "MAPA 1 - BERMUDA", mapImg: "mapas/bermuda.jpg", logo: "logos/.png", elims: 0, pts: 0, flag: "" },
    { map: "MAPA 2 - SOLARA", mapImg: "mapas/purgatorio.jpg", logo: "logos/.png", elims: 0, pts: 0, flag: "" },
    { map: "MAPA 3 - PURGATORIO", mapImg: "mapas/kalahari.jpg", logo: "logos/.png", elims: 0, pts: 0, flag: "" },
    { map: "MAPA 4 - NEXTERRA", mapImg: "mapas/nexterra.jpg", logo: "logos/.png", elims: 0, pts: 0, flag: "" }
];

const dataMVP = {
    name: "", team: "", flag: "", elims: 0, assists: 0, kd: 0,
    photo: "jugador/.png"
};

const dataEquipos = [
    {
        id: "team1", name: "BR ESPORT", flag: "🇵🇪", logo: "logos/br.png",
        players: [
            { name: "BR.Rodri", img: "jugador/br1.png", elims: 0, kd: "0" },
            { name: "BR.terryzda", img: "jugador/br2.png", elims: 0, kd: "0" },
            { name: "BR.alezn", img: "jugador/br3.png", elims: 0, kd: "0" },
            { name: "BR.Danymagic", img: "jugador/br4.png", elims: 0, kd: "0" },
            { name: "BR.Carlitos", img: "jugador/br5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team2", name: "AG STORM ESPORT", flag: "🇺🇾", logo: "logos/ag.png",
        players: [
            { name: "AG.Yimzd788", img: "jugador/ag1.png", elims: 0, kd: "0" },
            { name: "AG.Teozn788", img: "jugador/ag2.png", elims: 0, kd: "0" },
            { name: "AG.Pedro788", img: "jugador/ag3.png", elims: 0, kd: "0" },
            { name: "AG.Larryzada", img: "jugador/ag4.png", elims: 0, kd: "0" },
            { name: "AG.", img: "jugador/ag5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team3", name: "SAIYANS ESPORT", flag: "🇨🇱", logo: "logos/saiyans.png",
        players: [
            { name: "SA.stevens", img: "jugador/sa1.png", elims: 0, kd: "0" },
            { name: "SA.retro", img: "jugador/sa2.png", elims: 0, kd: "0" },
            { name: "SA.piraña", img: "jugador/sa3.png", elims: 0, kd: "0" },
            { name: "SA.maldito", img: "jugador/sa4.png", elims: 0, kd: "0" },
            { name: "SA.pipe", img: "jugador/sa5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team4", name: "RANK FLOW ESPORT", flag: "🇵🇪", logo: "logos/rf.png",
        players: [
            { name: "RF.PICU", img: "jugador/rf1.png", elims: 0, kd: "0" },
            { name: "RF.FACU", img: "jugador/rf2.png", elims: 0, kd: "0" },
            { name: "RF.DAVHID", img: "jugador/rf3.png", elims: 0, kd: "0" },
            { name: "RF.FERB", img: "jugador/rf4.png", elims: 0, kd: "0" },
            { name: "RF.BLEXX", img: "jugador/rf5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team5", name: "TEAM 777", flag: "🇦🇷", logo: "logos/777.png",
        players: [
            { name: "UP.Drazz14", img: "jugador/701.png", elims: 0, kd: "0" },
            { name: "UP.Tronzx21p", img: "jugador/702.png", elims: 0, kd: "0" },
            { name: "UP.aleezn:)", img: "jugador/703.png", elims: 0, kd: "0" },
            { name: "UP.RamirezBBY", img: "jugador/704.png", elims: 0, kd: "0" },
            { name: "UP.", img: "jugador/.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team6", name: "V9 ESPORT", flag: "🇨🇱", logo: "logos/nueve.png",
        players: [
            { name: "V9.ROCHA", img: "jugador/v1.png", elims: 0, kd: "0" },
            { name: "V9.PAPITA", img: "jugador/v2.png", elims: 0, kd: "0" },
            { name: "V9.SAXS", img: "jugador/v3.png", elims: 0, kd: "0" },
            { name: "V9.MATEO", img: "jugador/v4.png", elims: 0, kd: "0" },
            { name: "V9.PELAO", img: "jugador/v5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team7", name: "GHOST DEMONDS", flag: "🇦🇷", logo: "logos/gd.png",
        players: [
            { name: "GD.RAMI", img: "jugador/gd1.png", elims: 0, kd: "0" },
            { name: "GD.MADARA", img: "jugador/gd2.png", elims: 0, kd: "0" },
            { name: "GD.FRAN", img: "jugador/gd3.png", elims: 0, kd: "0" },
            { name: "GD.JULI", img: "jugador/gd4.png", elims: 0, kd: "0" },
            { name: "GD.", img: "jugador/gd5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team8", name: "TEAM CRAZY RABBITS", flag: "🇦🇷", logo: "logos/crazy.png",
        players: [
            { name: "CR.Jotagod", img: "jugador/cr1.png", elims: 0, kd: "0" },
            { name: "CR.ItsSeven", img: "jugador/cr2.png", elims: 0, kd: "0" },
            { name: "CR.AGUSS", img: "jugador/cr3.png", elims: 0, kd: "0" },
            { name: "CR.GALO", img: "jugador/cr4.png", elims: 0, kd: "0" },
            { name: "CR.Zurdogg", img: "jugador/cr5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team9", name: "LOSP40", flag: "🇦🇷", logo: "logos/40.png",
        players: [
            { name: "P40.Vixxo17", img: "jugador/403.png", elims: 0, kd: "0" },
            { name: "P40.Nerox10", img: "jugador/402.png", elims: 0, kd: "0" },
            { name: "P40.LAUTI PRIME", img: "jugador/405.png", elims: 0, kd: "0" },
            { name: "P40.Ezek!ng", img: "jugador/404.png", elims: 0, kd: "0" },
            { name: "P40.Thiagoxit", img: "jugador/401.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team10", name: "ESPORT ZENITH", flag: "🇨🇱", logo: "logos/z7.png",
        players: [
            { name: "Z7.Kabrihña", img: "jugador/z1.png", elims: 0, kd: "0" },
            { name: "Z7.Agusx", img: "jugador/z2.png", elims: 0, kd: "0" },
            { name: "Z7.David", img: "jugador/z3.png", elims: 0, kd: "0" },
            { name: "Z7.Seba", img: "jugador/z4.png", elims: 0, kd: "0" },
            { name: "Z7.Nass", img: "jugador/z5.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team11", name: "TEAM 04", flag: "🇧🇷", logo: "logos/04.png",
        players: [
            { name: "04.Lewis44", img: "jugador/02.png", elims: 0, kd: "0" },
            { name: "04.papayadx7", img: "jugador/03.png", elims: 0, kd: "0" },
            { name: "04.bachira", img: "jugador/004.png", elims: 0, kd: "0" },
            { name: "04.tilapia7v", img: "jugador/05.png", elims: 0, kd: "0" },
            { name: "04.LaraX", img: "jugador/01.png", elims: 0, kd: "0" }
        ]
    },
    {
        id: "team12", name: "ESPORT HLP", flag: "🇵🇪", logo: "logos/hlp.png",
        players: [
            { name: "HLP.LOLO", img: "jugador/h1.png", elims: 0, kd: "0" },
            { name: "HLP.RAI", img: "jugador/h2.png", elims: 0, kd: "0" },
            { name: "HLP.INKA", img: "jugador/h3.png", elims: 0, kd: "0" },
            { name: "HLP.ROZAS", img: "jugador/h4.png", elims: 0, kd: "0" },
            { name: "HLP.CARLOS", img: "jugador/h5.png", elims: 0, kd: "0" },
            { name: "HLP.ADRIAN", img: "jugador/h6.png", elims: 0, kd: "0" }
        ]
    }
];

const dataDestacado = {
    teamName: "",
    logo: "logos/.png",
    totalPoints: 0,
    playersImages: [
        "jugador/.png",
        "jugador/.png",
        "jugador/.png",
        "jugador/.png",
        "jugador/.png"
    ]
};

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    renderTabla();
    renderBooyah();
    renderMVP();
    initEquiposSelector();
    renderDestacado();
});

// Función para cambiar pestañas
function changeTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
   
    document.getElementById(`tab-${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active'); // Ojo: event.currentTarget funciona en contexto de evento, si no funciona puedes usar tabId.
}

// ==========================================
// RENDERIZADOS
// ==========================================
function renderTabla() {
    const champ = dataTabla[0];
   
    document.getElementById('campeones-container').innerHTML = `
        <div style="position:relative;">
            <div style="position:absolute; top:-20px; left:20px; background:black; color:white; padding:4px 12px; font-size:1.2rem; font-weight:bold;">CAMPEONES</div>
            <img src="https://placehold.co/600x180/222/fff?text=FOTO+DEL+EQUIPO+CAMPEON" class="champ-photo" style="height: 160px; width: 100%; object-fit: cover;">
        </div>
        <div class="champ-stats">
            <div class="titles"><span>ELIMS</span><span>BOOYAH!</span><span>TOTAL</span></div>
            <div class="numbers"><span>${champ.elims}</span><span>${champ.booyah}</span><span>${champ.total}</span></div>
            <div class="champ-bottom">
                <span class="flag">${champ.flag}</span>
                <img src="${champ.img}" style="height:40px;">
                <span class="name">${champ.name}</span>
            </div>
        </div>
    `;

    let html = `<div class="s-col">`;
   
    html += `
        <div class="s-row header">
            <div>POS</div><div>EQUIPO</div><div>JUEGO</div><div>ELIMS</div><div>PUNTOS POS</div><div>BOOYAH</div><div>TOTAL</div>
        </div>
    `;
       
    dataTabla.forEach(t => {
        html += `
        <div class="s-row">
            <div class="pos">${t.pos}</div>
            <div class="team-info">${t.flag} <img src="${t.img}"> ${t.name}</div>
            <div class="stat">${t.game}</div>
            <div class="stat">${t.elims}</div>
            <div class="stat">${t.posPts}</div>
            <div class="stat">${t.booyah}</div>
            <div class="stat total">${t.total}</div>
        </div>`;
    });
   
    html += `</div>`;
    document.getElementById('standings-container').innerHTML = html;
}

function renderBooyah() {
    const container = document.getElementById('booyah-list-container');
    container.innerHTML = dataBooyah.map(b => `
        <div class="booyah-row">
            <div class="b-map-img" style="background: url('${b.mapImg}') center/cover;">
                <div class="b-map-name">${b.map}</div>
            </div>
            <div class="b-details">
                <span style="position:absolute; left:-25px; top:10px; font-size:1.5rem; background:white; padding:5px; border-radius:50%;">${b.flag}</span>
                <img src="${b.logo}" class="team-logo">
                <div class="b-stats">
                    <div class="b-text">BOOYAH!</div>
                    <div class="elims">${b.elims} ELIMS | ${b.pts} PUNTOS</div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMVP() {
    document.getElementById('mvp-stats-container').innerHTML = `
        <div class="stat-item"><div class="stat-label">ELIM</div><div class="stat-value">${dataMVP.elims}</div></div>
        <div class="stat-item"><div class="stat-label">ASISTS</div><div class="stat-value">${dataMVP.assists}</div></div>
        <div class="stat-item"><div class="stat-label">KDRATIO</div><div class="stat-value">${dataMVP.kd}</div></div>
    `;
    document.getElementById('mvp-team-name').textContent = dataMVP.team;
    document.getElementById('mvp-flag').textContent = dataMVP.flag;
    document.getElementById('mvp-name').textContent = dataMVP.name;
    document.getElementById('mvp-photo-img').src = dataMVP.photo;
}

function initEquiposSelector() {
    const select = document.getElementById('team-selector');
    select.innerHTML = ""; // Limpiamos por si acaso
    dataEquipos.forEach((team, index) => {
        select.innerHTML += `<option value="${index}">${team.name}</option>`;
    });
    renderRosterView(); // Cargar el primero por defecto
}

function renderRosterView() {
    const index = document.getElementById('team-selector').value;
    const team = dataEquipos[index];

    const nameParts = team.name.split(' ');
    const title1 = nameParts[0] || "EQUIPO";
    const title2 = nameParts.slice(1).join(' ') || team.name;

    document.getElementById('equipos-header-container').innerHTML = `
        <div class="ff-header">
            <div class="ff-title-black">${title1}</div>
            <div class="ff-title-white">${title2} ${team.flag}</div>
        </div>
    `;

    // Filtra jugadores vacíos o inválidos (ej. "AG." sin nombre)
    const validPlayers = team.players.filter(p => {
        if (!p.name) return false;
        const parts = p.name.split('.');
        return parts.length === 1 || parts[1].trim() !== "";
    });

    const playersToShow = validPlayers.slice(0, 6);
    const playersContainer = document.getElementById('roster-players-container');
    
    playersContainer.innerHTML = playersToShow.map((p, i) => {
        const imgSrc = p.img ? p.img : `https://placehold.co/400x600/transparent/dddddd?text=PLAYER+${i+1}`;
        const tLogo = team.logo || `https://placehold.co/150x80/ffffff/000000?text=LOGO`;
        const e = p.elims !== undefined ? p.elims : '0';
        const k = p.kd !== undefined ? p.kd : '0.0';

        return `
        <div class="ff-card">
            <div class="ff-card-top">
                <span class="ff-num">${i+1}</span>
                <span class="ff-name">${p.name}</span>
            </div>
            
            <div class="ff-card-img-wrapper">
                <img src="${imgSrc}" class="ff-player-img" alt="${p.name}" onerror="this.src='https://placehold.co/400x600/transparent/dddddd?text=NO+FOTO'">
            </div>
            
            <div class="ff-card-logo">
                <img src="${tLogo}" alt="logo" onerror="this.src='https://placehold.co/150x80/ffffff/000000?text=LOGO'">
            </div>
            
            <div class="ff-card-stats">
                <div class="ff-stat-row">
                    <div class="ff-stat-label">ELIMS</div>
                    <div class="ff-stat-value">${e}</div>
                </div>
                <div class="ff-stat-row">
                    <div class="ff-stat-label">KD RATIO</div>
                    <div class="ff-stat-value">${k}</div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderDestacado() {
    document.getElementById('destacado-desc').textContent = dataDestacado.teamName;
    document.getElementById('destacado-logo').src = dataDestacado.logo;
   
    document.getElementById('destacado-players').innerHTML = dataDestacado.playersImages.map(img => `
        <div class="d-player"><img src="${img}"></div>
    `).join('');
}

// ==========================================
// FUNCIÓN DE DESCARGA CON HTML2CANVAS
// ==========================================
function downloadImage(elementId, filename) {
    const element = document.getElementById(elementId);
   
    html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        console.error("Error al generar la imagen: ", err);
        alert("Hubo un error al generar la imagen. Asegúrate de estar corriendo esto en un servidor local si usas imágenes externas.");
    });
}