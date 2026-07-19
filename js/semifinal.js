// ==========================================
// DATOS: TABLA GENERAL (TODO EN 0 PARA LLENAR)
// ==========================================
const semifinalTeams = [
    { name: "ESPORT HLP", flag: "🇵🇪", logo: "logos/hlp.png", maps: 4, booyah: 0, ptsPos: 17, elims: 18, ptsExtra: 0 },
    { name: "SAIYANS ESPORT", flag: "🇨🇱", logo: "logos/saiyans.png", maps: 4, booyah: 1, ptsPos: 26, elims: 70, ptsExtra: 0 },
    { name: "TEAM 777", flag: "🇦🇷", logo: "logos/777.png", maps: 4, booyah: 0, ptsPos: 19, elims: 39, ptsExtra: 0 },
    { name: "AG STORM ESPORT", flag: "🇺🇾", logo: "logos/ag.png", maps: 4, booyah: 2, ptsPos: 34, elims: 66, ptsExtra: 5 },
    { name: "V9 ESPORT", flag: "🇨🇱", logo: "logos/nueve.png", maps: 4, booyah: 0, ptsPos: 11, elims: 15, ptsExtra: 0 },
    { name: "ESPORT ZENITH", flag: "🇨🇱", logo: "logos/z7.png", maps: 4, booyah: 0, ptsPos: 18, elims: 18, ptsExtra: 0 },
    { name: "SAMURAI", flag: "🇦🇷", logo: "logos/samurai.png", maps: 4, booyah: 0, ptsPos: 18, elims: 17, ptsExtra: 0 },
    { name: "DC ESPORT RED", flag: "🇵🇪", logo: "logos/dc.png", maps: 4, booyah: 0, ptsPos: 8, elims: 13, ptsExtra: 5 },
    { name: "BR ESPORT", flag: "🇵🇪", logo: "logos/br.png", maps: 4, booyah: 1, ptsPos: 31, elims: 99, ptsExtra: 0 },
    { name: "F7 E-SPORT", flag: "🇦🇷", logo: "logos/f7.png", maps: 4, booyah: 0, ptsPos: 3, elims: 5, ptsExtra: 5 },
    { name: "RANK FLOW ESPORT", flag: "🇵🇪", logo: "logos/rf.png", maps: 4, booyah: 1, ptsPos: 29, elims: 41, ptsExtra: 5 },
    { name: "LOSP40", flag: "🇦🇷", logo: "logos/40.png", maps: 4, booyah: 0, ptsPos: 18, elims: 28, ptsExtra: 0 },
    { name: "V9 ESPORT", flag: "🇨🇱", logo: "logos/nueve.png", maps: 4, booyah: 0, ptsPos: 25, elims: 23, ptsExtra: 0 },
    { name: "FURIUS LYNX", flag: "🇦🇷", logo: "logos/flx.png", maps: 4, booyah: 0, ptsPos: 9, elims: 15, ptsExtra: 0 },
    { name: "TEAM CRAZY RABBITS", flag: "🇦🇷", logo: "logos/crazy.png", maps: 4, booyah: 1, ptsPos: 26, elims: 22, ptsExtra: 0 },
    { name: "TEAM 04", flag: "🇧🇷", logo: "logos/04.png", maps: 4, booyah: 0, ptsPos: 12, elims: 24, ptsExtra: 0 },
    { name: "CLAN CARTEL 23!", flag: "🇦🇷", logo: "logos/23.png", maps: 4, booyah: 0, ptsPos: 14, elims: 17, ptsExtra: 0 },
    { name: "GHOST DEMONDS", flag: "🇦🇷", logo: "logos/gd.png", maps: 4, booyah: 0, ptsPos: 23, elims: 23, ptsExtra: 5 }
];

// ==========================================
// DATOS: BOOYAH RECAP (TODO EN 0 PARA LLENAR)
// ==========================================
const mapRecapData = [
    { map: "MAPA 1 - BERMUDA", bg: "mapas/bermuda.jpg", team: "RANK FLOW ESPORT", flag: "🇵🇪", elims: 11, pts: 23, logo: "logos/rf.png" },
    { map: "MAPA 2 - PURGATORIO", bg: "mapas/purgatorio.jpg", team: "BR ESPORT", flag: "🇵🇪", elims: 35, pts: 47, logo: "logos/br.png" },
    { map: "MAPA 3 - BERMUDA", bg: "mapas/bermuda.jpg", team: "AG STORM ESPORT", flag: "🇺🇾", elims: 17, pts: 29, logo: "logos/ag.png" },
    { map: "MAPA 4 - KALAHARI", bg: "mapas/kalahari.jpg", team: "TEAM CRAZY RABBITS", flag: "🇦🇷", elims: 8, pts: 20, logo: "logos/crazy.png" },
    { map: "MAPA 5 - BERMUDA", bg: "mapas/bermuda.jpg", team: "SAIYANS ESPORT", flag: "🇨🇱", elims: 24, pts: 36, logo: "logos/saiyans.png" },
    { map: "MAPA 6 - NEXTERRA", bg: "mapas/nexterra.jpg", team: "AG STORM ESPORT", flag: "🇺🇾", elims: 28, pts: 40, logo: "logos/ag.png" }
];

window.onload = () => {
    // Calculamos totales dinámicamente
    semifinalTeams.forEach(team => {
        team.total = team.ptsPos + team.elims + team.ptsExtra;
    });

    // Ordenamos de mayor a menor (cuando llenes datos, se acomodarán solos)
    semifinalTeams.sort((a, b) => b.total - a.total);

    buildTableExport();
    buildRecapExport();
};

function buildTableExport() {
    const tableBody = document.getElementById('ig-table-body');
    if (!tableBody) return;
    
    let html = `
        <div class="table-header-row">
            <div>#</div>
            <div class="col-team-head">EQUIPO</div>
            <div>MAPAS</div>
            <div class="booyah-text">BOOYAH!</div>
            <div>PTS POS</div>
            <div>ELIMS</div>
            <div>EXTRA</div>
            <div>TOTALES</div>
        </div>
    `;

    semifinalTeams.forEach((team, index) => {
        const rank = index + 1;
        
        if (rank === 1) html += `<div class="phase-divider div-final">A LA FINAL</div>`;
        if (rank === 13) html += `<br><div class="phase-divider div-elim">ELIMINADOS</div>`;

        const rowClass = (rank % 2 === 0) ? 'row-dark' : '';
        let rankClass = '';
        if (rank === 1) rankClass = 'top-rank'; 
        if (rank >= 13) rankClass = 'elim-rank'; 

        html += `
            <div class="team-row ${rowClass}">
                <div class="rank-box ${rankClass}">${rank}</div>
                <div class="team-info">
                    <img src="${team.logo}" class="team-logo" alt="logo" onerror="this.src=''">
                    <span class="team-name">${team.name || 'POR DEFINIR'}</span>
                    <span class="team-flag">${team.flag}</span>
                </div>
                <div>${team.maps}</div>
                <div>${team.booyah}</div>
                <div>${team.ptsPos}</div>
                <div>${team.elims}</div>
                <div class="col-extra">+${team.ptsExtra}</div>
                <div class="col-total">${team.total}</div>
            </div>
        `;
    });

    tableBody.innerHTML = html;
}

function buildRecapExport() {
    const recapBody = document.getElementById('ig-recap-body');
    if (!recapBody) return;
    
    let html = '';

    mapRecapData.forEach(data => {
        html += `
            <div class="recap-item">
                <div class="recap-team-box">
                    <span class="flag">${data.flag}</span>
                    <img src="${data.logo}" alt="logo" onerror="this.style.display='none'">
                </div>
                <div class="recap-map-box" style="background-image: url('${data.bg}');">
                    <div class="map-label">${data.map}</div>
                </div>
                <div class="recap-stats-box">
                    <div class="recap-booyah">BOOYAH!</div>
                    <div class="recap-numbers">${data.elims} ELIMS<br>${data.pts} PUNTOS</div>
                </div>
            </div>
        `;
    });

    recapBody.innerHTML = html;
}

// ==========================================
// EXPORTADOR A IMAGEN (RESOLUCIÓN NATIVA)
// ==========================================
function downloadImage(elementId, fileName) {
    const element = document.getElementById(elementId);
    
    document.body.style.cursor = 'wait';

    // Para evitar que la exportación salga reducida por el "transform: scale(0.5)" de CSS,
    // guardamos el estilo, lo removemos temporalmente, capturamos y lo restauramos.
    const originalTransform = element.style.transform;
    element.style.transform = 'none';

    html2canvas(element, { 
        useCORS: true, 
        allowTaint: true,
        backgroundColor: "#ce0202", // Color base de fondo para seguridad
        scale: 1, // Exporta exacto a 1080x1920
        width: 1080,
        height: 1920
    }).then(canvas => {
        // Restauramos el zoom visual
        element.style.transform = originalTransform || 'scale(0.5)';

        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL("image/png");
        link.click();
        document.body.style.cursor = 'default';
    }).catch(err => {
        console.error(err);
        element.style.transform = originalTransform || 'scale(0.5)';
        alert("Error al descargar. Asegúrate de usar Live Server y revisar las rutas de tus imágenes locales.");
        document.body.style.cursor = 'default';
    });
}