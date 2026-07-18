// Base de datos de las predicciones (Reemplaza las URLs por las rutas de tus imágenes)
const analistas = [
    {
        nombre: "CALEB",
        foto: "staff/modcaleb.jpeg",
        aciertos: 0,
        top1: "",
        top2: "",
        top3: "",
        killsImg: "",
        killsName: "",
        booyah: ""
    },
    {
        nombre: "DANNA",
        foto: "staff/moddana.jpeg",
        aciertos: 0,
        top1: "",
        top2: "",
        top3: "",
        killsImg: "",
        killsName: "",
        booyah: ""
    },
    {
        nombre: "CESAR",
        foto: "staff/modcesar.jpeg",
        aciertos: 0,
        top1: "",
        top2: "",
        top3: "",
        killsImg: "",
        killsName: "",
        booyah: ""
    },
    {
        nombre: "NIKKI",
        foto: "staff/casterniki.png",
        aciertos: 0,
        top1: "",
        top2: "",
        top3: "",
        killsImg: "",
        killsName: "",
        booyah: ""
    },
    {
        nombre: "ERI",
        foto: "staff/moderi.jpeg",
        aciertos: 0,
        top1: "",
        top2: "",
        top3: "",
        killsImg: "",
        killsName: "",
        booyah: ""
    },
    {
        nombre: "TEO",
        foto: "staff/modteo.jpeg",
        aciertos: 0,
        top1: "",
        top2: "",
        top3: "",
        killsImg: "",
        killsName: "",
        booyah: ""
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('predicciones-grid');

    // 1. Crear la columna izquierda de etiquetas
    const labelsCol = document.createElement('div');
    labelsCol.className = 'labels-col';
    labelsCol.innerHTML = `
        <div class="label aciertos">ACIERTOS</div>
        <div class="label top3">TOP 3</div>
        <div class="label kills">+KILLS</div>
        <div class="label booyah">BOOYAH</div>
    `;
    grid.appendChild(labelsCol);

    // 2. Crear las columnas para cada analista
    analistas.forEach(persona => {
        const col = document.createElement('div');
        col.className = 'player-col';
        
        col.innerHTML = `
            <!-- Perfil -->
            <div class="cell player-profile">
                <img src="${persona.foto}" alt="${persona.nombre}">
                <div class="name">${persona.nombre}</div>
            </div>
            
            <!-- Aciertos -->
            <div class="cell score-cell">${persona.aciertos}</div>
            
            <!-- Top 1 -->
            <div class="cell prediction-cell">
                <span class="pos-number">1</span>
                <img src="${persona.top1}" alt="Top 1">
            </div>
            
            <!-- Top 2 -->
            <div class="cell prediction-cell">
                <span class="pos-number">2</span>
                <img src="${persona.top2}" alt="Top 2">
            </div>
            
            <!-- Top 3 -->
            <div class="cell prediction-cell">
                <span class="pos-number">3</span>
                <img src="${persona.top3}" alt="Top 3">
            </div>
            
            <!-- +Kills -->
            <div class="cell prediction-cell kills-cell">
                <img src="${persona.killsImg}" alt="${persona.killsName}">
                <div class="kills-name">${persona.killsName}</div>
            </div>
            
            <!-- Booyah -->
            <div class="cell prediction-cell">
                <img src="${persona.booyah}" alt="Booyah">
            </div>
        `;
        
        grid.appendChild(col);
    });
});