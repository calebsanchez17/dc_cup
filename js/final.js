// ==========================================
// BASE DE DATOS Ficticia para alimentar las vistas
// ==========================================

const dataTabla = [
    { pos: 1, img: "logos/br.png", name: "BR", game: 4, elims: 0, posPts: 0, booyah: 0, total: 0, flag: "🇵🇪" },
    { pos: 2, img: "logos/ag.png", name: "AG", game: 4, elims: 49, posPts: 27, booyah: 0, total: 76, flag: "🇺🇾" },
    { pos: 3, img: "logos/dc.png", name: "DC ", game: 4, elims: 21, posPts: 13, booyah: 0, total: 34, flag: "🇵🇪" },
    { pos: 4, img: "logos/rf.png", name: "RF", game: 4, elims: 32, posPts: 22, booyah: 0, total: 54, flag: "🇵🇪" },
    { pos: 5, img: "logos/777.png", name: "777", game: 4, elims: 3, posPts: 8, booyah: 0, total: 11, flag: "🇦🇷" },
    { pos: 6, img: "logos/nueve.png", name: "V9", game: 4, elims: 20, posPts: 12, booyah: 0, total: 32, flag: "🇨🇱" },
    { pos: 7, img: "logos/gd.png", name: "GD", game: 4, elims: 13, posPts: 21, booyah: 0, total: 34, flag: "🇦🇷" },
    { pos: 8, img: "logos/crazy.png", name: "CR", game: 4, elims: 50, posPts: 39, booyah: 3, total: 89, flag: "🇦🇷" },
    { pos: 9, img: "logos/40.png", name: "P40", game: 4, elims: 13, posPts: 10, booyah: 0, total: 23, flag: "🇦🇷" },
    { pos: 10, img: "logos/z7.png", name: "Z7", game: 4, elims: 35, posPts: 21, booyah: 0, total: 56, flag: "🇨🇱" },
    { pos: 11, img: "logos/04.png", name: "04", game: 4, elims: 56, posPts: 28, booyah: 1, total: 84, flag: "🇧🇷" },
    { pos: 12, img: "logos/hlp.png", name: "HLP", game: 4, elims: 32, posPts: 26, booyah: 0, total: 58, flag: "🇵🇪" }
];

const dataBooyah = [
    { map: "MAPA 1 - BERMUDA", mapImg: "mapas/bermuda.jpg", logo: "logos/crazy.png", elims: 16, pts: 28, flag: "🇦🇷" },
    { map: "MAPA 2 - SOLARA", mapImg: "mapas/purgatorio.jpg", logo: "logos/crazy.png", elims: 13, pts: 25, flag: "🇦🇷" },
    { map: "MAPA 3 - PURGATORIO", mapImg: "mapas/kalahari.jpg", logo: "logos/crazy.png", elims: 15, pts: 27, flag: "🇦🇷" },
    { map: "MAPA 4 - NEXTERRA", mapImg: "mapas/nexterra.jpg", logo: "logos/04.png", elims: 26, pts: 38, flag: "🇧🇷" }
];

const dataMVP = {
    name: "04.Lewis44", team: "TEAM 04", flag: "🇧🇷", elims: 20, assists: 0, kd: 5.0,
    photo: "jugador/02.png"
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
            { name: "UP.xtonyy777 pw", img: "jugador/703.png", elims: 0, kd: "0" },
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
    teamName: "AG STORM ESPORT",
    logo: "logos/ag.png",
    totalPoints: 323,
    playersImages: [
        "jugador/ag1.png",
        "jugador/ag2.png",
        "jugador/ag3.png",
        "jugador/ag4.png"
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
    // 1. Ordenar la tabla de mayor a menor según el total de puntos
    dataTabla.sort((a, b) => b.total - a.total);

    // 2. Reasignar las posiciones correctas según el nuevo orden
    dataTabla.forEach((equipo, index) => {
        equipo.pos = index + 1;
    });

    // 3. El campeón siempre será el índice 0 (el primero)
    const champ = dataTabla[0];
    
    // 4. Buscar la escuadra del equipo campeón en dataEquipos usando el logo o nombre
    const equipoDetalle = dataEquipos.find(eq => eq.logo === champ.img || eq.name.includes(champ.name.trim()));
    
    let fotosHtml = "";
    if (equipoDetalle && equipoDetalle.players) {
        // Tomamos hasta 5 jugadores que tengan una imagen válida asignada
        const validPlayers = equipoDetalle.players.filter(p => p.img && p.img !== "jugador/.png").slice(0, 5);
        
        // Creamos las etiquetas de imagen para cada jugador
        fotosHtml = validPlayers.map(p => `
            <img src="${p.img}" onerror="this.src='https://placehold.co/150x200/222/fff?text=NO+FOTO'" style="height: 160px; flex: 1; min-width: 0; object-fit: cover; object-position: top; border-right: 2px solid #111;">
        `).join('');
    } else {
        fotosHtml = `<div style="display:flex; width:100%; height:160px; background:#222; color:#555; align-items:center; justify-content:center; font-weight:bold;">FOTOS NO DISPONIBLES</div>`;
    }

    document.getElementById('campeones-container').innerHTML = `
        <div style="position:relative; display: flex; width: 60%; background: #111; overflow: hidden; border-radius: 8px 0 0 8px;">
            <div style="position:absolute; top:-12px; left:15px; background:black; color:white; padding:4px 12px; font-size:1rem; font-weight:bold; z-index: 10;">CAMPEONES</div>
            <div style="display: flex; width: 100%; height: 160px;">
                ${fotosHtml}
            </div>
        </div>
        <div class="champ-stats" style="width: 40%;">
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
// AUTO-ESCALADO MEJORADO (PC Y MÓVIL)
// ==========================================
function ajustarPantalla() {
    const lienzos = document.querySelectorAll('.export-canvas');
    
    // Calculamos el ancho de la pantalla (dejando un pequeño margen de 20px)
    const anchoDisponible = window.innerWidth - 20;
    
    lienzos.forEach(lienzo => {
        // Adaptamos el póster al ANCHO de la pantalla, no al alto.
        let escalaFinal = anchoDisponible / 1080;
        
        // Evitamos que en PC se haga gigante (máximo tamaño = 1 original)
        if (escalaFinal > 1) {
            escalaFinal = 1;
        }
        
        // Aplicamos el escalado mágico
        lienzo.style.transform = `scale(${escalaFinal})`;
        lienzo.style.transformOrigin = "top center";
        
        // Ajustamos la caja contenedora para que la página sepa hasta dónde hacer scroll
        if(lienzo.parentElement.classList.contains('scale-wrapper')) {
            lienzo.parentElement.style.height = `${1350 * escalaFinal}px`;
        }
    });
}

// Eventos para ejecutar la función
document.addEventListener('DOMContentLoaded', ajustarPantalla);
window.addEventListener('resize', ajustarPantalla);
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(ajustarPantalla, 10);
    });
});

// ==========================================
// FUNCIÓN DE DESCARGA CON HTML2CANVAS (OPTIMIZADA)
// ==========================================
function downloadImage(elementId, filename) {
    const element = document.getElementById(elementId);
   
    // Forzamos temporalmente el tamaño real de exportación para asegurar calidad y que salga completo
    const originalWidth = element.style.width;
    const originalHeight = element.style.height;
    
    element.style.width = "1080px";
    element.style.height = "1350px";

    html2canvas(element, {
        scale: 2, // Mantiene la alta definición (Full HD / 2K)
        useCORS: true,
        backgroundColor: null,
        windowWidth: 1080,  // Simula el ancho exacto del póster para evitar recortes
        windowHeight: 1350 // Simula la altura exacta del póster
    }).then(canvas => {
        // Restauramos los estilos originales de la pantalla
        element.style.width = originalWidth;
        element.style.height = originalHeight;

        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(err => {
        // Restauramos estilos en caso de error también
        element.style.width = originalWidth;
        element.style.height = originalHeight;
        
        console.error("Error al generar la imagen: ", err);
        alert("Hubo un error al generar la imagen.");
    });
}