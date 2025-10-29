// Reemplaza el contenido del script.js anterior con este código extendido

// Usar la base de datos extendida
const vehiclesDatabase = getAllVehicles();

// Actualizar los filtros en el HTML
function updateFilters() {
    const nationFilter = document.getElementById('nationFilter');
    nationFilter.innerHTML = `
        <option value="">Todas las naciones</option>
        <option value="usa">USA</option>
        <option value="urss">URSS/Rusia</option>
        <option value="alemania">Alemania</option>
        <option value="uk">Reino Unido</option>
        <option value="japon">Japón</option>
        <option value="francia">Francia</option>
        <option value="italia">Italia</option>
        <option value="china">China</option>
        <option value="suecia">Suecia</option>
    `;
}

// Función para mostrar estadísticas
function showStatistics() {
    const stats = {
        total: vehiclesDatabase.length,
        byNation: {},
        byType: {},
        byEra: {}
    };
    
    vehiclesDatabase.forEach(vehicle => {
        // Por nación
        if (!stats.byNation[vehicle.nation]) {
            stats.byNation[vehicle.nation] = 0;
        }
        stats.byNation[vehicle.nation]++;
        
        // Por tipo
        if (!stats.byType[vehicle.type]) {
            stats.byType[vehicle.type] = 0;
        }
        stats.byType[vehicle.type]++;
        
        // Por era
        if (!stats.byEra[vehicle.era]) {
            stats.byEra[vehicle.era] = 0;
        }
        stats.byEra[vehicle.era]++;
    });
    
    console.log('Estadísticas de la base de datos:', stats);
}

// Inicialización extendida
document.addEventListener('DOMContentLoaded', () => {
    updateFilters();
    renderVehicles(vehiclesDatabase);
    showStatistics();
    
    // Agregar información del total
    const searchSection = document.querySelector('.search-section');
    const statsElement = document.createElement('div');
    statsElement.className = 'database-stats';
    statsElement.innerHTML = `<p>Base de datos: ${vehiclesDatabase.length} vehículos - 9 naciones - 4 tipos</p>`;
    searchSection.appendChild(statsElement);
});

// CSS adicional para estadísticas
const additionalStyles = `
    .database-stats {
        text-align: center;
        margin-top: 1rem;
        color: #cccccc;
        font-size: 0.9rem;
    }
    
    .nation-flag {
        display: inline-block;
        width: 20px;
        height: 15px;
        margin-right: 8px;
        vertical-align: middle;
    }
    
    .vehicle-card.usa { border-left-color: #3C3B6E; }
    .vehicle-card.urss { border-left-color: #D52B1E; }
    .vehicle-card.alemania { border-left-color: #000000; }
    .vehicle-card.uk { border-left-color: #012169; }
    .vehicle-card.japon { border-left-color: #BC002D; }
    .vehicle-card.francia { border-left-color: #0055A4; }
    .vehicle-card.italia { border-left-color: #009246; }
    .vehicle-card.china { border-left-color: #DE2910; }
    .vehicle-card.suecia { border-left-color: #006AA7; }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);