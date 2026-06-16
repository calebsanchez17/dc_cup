// Base de datos del Staff
const staffData = {
    moderadores: [
        { 
            name: "Patón", 
            role: "Moderador", 
            image: "staff/modcaleb.jpeg", 
            ig: "https://instagram.com/desing_paton" 
        },
        { 
            name: "Danna", 
            role: "Moderadora", 
            image: "staff/moddana.jpeg", 
            ig: "https://instagram.com/mod_dxnx.23" 
        },
        { 
            name: "Cesar", 
            role: "Moderador", 
            image: "staff/modcesar.jpeg", 
            ig: "https://instagram.com/kmk._cesar.mod" 
        }
        
        // Agrega más moderadores aquí
    ],
    casters: [
        { 
            name: "Linda", 
            role: "Caster", 
            image: "staff/casterlinda.jpeg", 
            ig: "https://instagram.com/linda_mc20" 
        },
        { 
            name: "Danna", 
            role: "Caster", 
            image: "staff/casterdana.jpeg", 
            ig: "https://instagram.com/mod_dxnx.23" 
        }
        // Agrega más casters aquí
    ]
};

function renderStaff(type) {
    // 1. Actualizar estado visual de los botones
    document.querySelectorAll('.staff-tabs button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${type}`).classList.add('active');

    // 2. Actualizar el título principal
    document.getElementById('staff-heading').textContent = type.toUpperCase();

    // 3. Renderizar las tarjetas
    const grid = document.getElementById('staffGrid');
    grid.innerHTML = ''; // Limpiar grid

    const members = staffData[type] || [];

    members.forEach(member => {
        const cardHTML = `
            <div class="staff-card">
                <div class="img-wrapper">
                    <img src="${member.image}" alt="${member.name}">
                </div>
                <h3 class="staff-name">${member.name}</h3>
                <p class="staff-role">${member.role}</p>
                <a href="${member.ig}" target="_blank" class="ig-btn">
                    <i class="fab fa-instagram"></i> Instagram
                </a>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

// Lógica para leer la URL al cargar la página (ej. staff.html?view=casters)
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewToLoad = urlParams.get('view');
    
    // Si la URL dice 'casters', carga casters, si no, carga moderadores por defecto
    if (viewToLoad === 'casters') {
        renderStaff('casters');
    } else {
        renderStaff('moderadores');
    }
};