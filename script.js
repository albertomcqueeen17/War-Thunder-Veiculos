// Base de datos de imágenes para vehículos
const vehicleImages = {
    // USA
    "M1A2 Abrams": "https://www.agenzianova.com/news/wp-content/uploads/2023/01/M1A2-Abrams.jpg",
    "M1A1 HC": "https://old-wiki.warthunder.com/images/thumb/6/60/GarageImage_M1A1_HC_Dozer.jpg/800px-GarageImage_M1A1_HC_Dozer.jpg",
    "M60A3 TTS": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXweRuKmm1JFyp1Lz4QEtyls_IZuz981fxg&s",
    "M4A3E2 Sherman Jumbo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPC_nCw7ftxHSPqGVujfgG44pMbTlhzKu87A&s",
    "F-16C Fighting Falcon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97wj7KbMDbhnScmbLDMP5xSZ-lFH36H6wng&s",
    "F-14B Tomcat": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmREfOpbePa-XiMuTHBgcTLUE_f5BfJEApQ&s",
    "A-10A Thunderbolt II": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc6NRnFJVMZJ7RvJJY8C5Ay6VLPPFmPMIAw&s",
    "P-51D-30 Mustang": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PnESDYiRquILQ5fSfyB5glpjJW10REAEmQ&s",
    "AH-64D Apache": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCoinzDtFBsl0AliL9ZzBkFhMBOWllK2X5Q&s",
    "UH-1B Iroquois": "https://wt-ugc.cdn.gaijin.net/mh/tr/7c57jwirjsphuechtfwwxxnuuyuw-2aq.icon.jpg",
    
    // URSS
    "T-80BVM": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdcLiCRNmkeHtY3DLJ9P9VL3Z5Lx9pr5pTCQ&s",
    "T-72B3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVp__MYT4-WQhxuYPoRYSjUqkesvwT88I9w&s",
    "T-64B": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6F4oVo4bViUt_FDr8u4kRXWg3sPooenauw&s",
    "T-34-85": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dYogTFz41akHlGFrw8jEADjx7gbsYaNJLA&s",
    "MiG-29SMT": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM54rYjMZOZLsU7xmt0qsR2yjFtFvLnEIsuw&s",
    "Su-27 Flanker": "https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/Aircraft/2560x1440_su_27_logo_691857041dee5acea4b454b7d87c64fa.jpg",
    "IL-2 Sturmovik": "https://static.warthunder.com/upload/image/!%202017%20NEWS/03%20March/Il-2-37/Il-2%20Skin1%20small1_89fc75e447764c38b23388b8983faea2.jpg",
    "Ka-52 Alligator": "https://old-wiki.warthunder.com/images/thumb/6/62/Ka-52_WebsiteImage_1.jpg/800px-Ka-52_WebsiteImage_1.jpg",
    "Mi-24V Hind-E": "https://old-wiki.warthunder.com/images/thumb/6/69/Mi-24V_WTWallpaper_001.jpg/534px-Mi-24V_WTWallpaper_001.jpg",
    
    // Alemania
    "Leopard 2A6": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSOqxCcS0HTTfetjuHu4faJvuDAO0LUot4A&s",
    "Leopard 2A5": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15vcqpSGk9Ck5zBt0ZhY0NIx0CvP-xd0xRQ&s",
    "Leopard 1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIfbEv1cXeBpec6fxyjGoUHXRbcmILi-DPDg&s",
    "Tiger II (H)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjib4_xPfz1flpp7AdFPbrUwcYvhLyeT6NtA&s",
    "Eurofighter Typhoon": "https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/Aircraft/2560x1440_ef_2000_block_10_logo_365876dc2645c355ce2c4d6984947216.jpg",
    "MiG-29G": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PHY29FldTjhpTe1phbdF8mRCtimCkQyitg&s",
    "Fw 190 D-9": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdE8lesLbZ9AIk8dMn90EKwo5GFJOu8lL0mw&s",
    "Tiger UHT": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAF9vS8Ddi6xHX_GLCmuyBuv3u4R1QydfYQ&s",
    
    // Reino Unido
    "Challenger 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hR_VsPM4TeBOnewKk_wXwIHvaQX2n1vm7Q&s",
    "Challenger 1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkM5XbA207PoBz50HkpQK6hS__NJihKoP2A&s",
    "Centurion Mk.10": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnDeq_MZZo40iAREk6Roe6qFcoYHyXzzZ6w&s",
    "Spitfire LF Mk.IX": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mrwm9yC4OtfPPOZwaaudAhrMlLkzHS5MFg&s",
    "Harrier GR.7": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmYVlJJqMOMD0tEKeXRB7GndZocXgfxtagw&s",
    
    // Japón
    "Type 10": "https://static.warthunder.com/upload/image/wallpapers/1920x1080_type_10_logo_com_cf73183d3bee6aeeaf5a8b2bb4e166fb.jpg",
    "Type 90": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_ZKdKS8D8UH3oOC-142H9JqptgQdtRVuhA&s",
    "ST-A3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJc_coi6sGBY91s7DB4LqvDm4g947qkPNqQ&s",
    "A6M5 Zero": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOytBoTRdT4NPW3RUZ53Gc7zcmOa8UHZ36Q&s",
    "F-4EJ Kai Phantom II": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStelZxadlaLUdOAkfRJDKhZCzIh0AnO1jO8g&s",
    
    // Francia
    "Leclerc SXXI": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuN6N4Z2X1E-RCzQRcZEFWoWAevv3i-WxZdw&s",
    "AMX-40": "https://i.redd.it/l1d8fvq6aa3b1.jpg",
    "Mirage 2000-5F": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbqXidReu8jfOXrILVAbffPjVLP_hDeQDAA&s",
    
    // Italia
    "Ariete AMV": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nxbxBpYkI0vvB1tS580-5o1Xilj-bqRMrA&s",
    "Centauro 120": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT837UnY9G7kAPgCbzm7RLllJO7Q6eA0AUL1A&s",
    "F-104S ASA": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiPTAsSG5DOw71_gA_tpDws3TbCw-lmueAg&s",
    
    // China
    "ZTZ99A": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDU26OBuVCciuzIDnYBf2OKr0KYFR0eqvQJQ&s",
    "Type 96A": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5C37ElSlXunL0vkIyi6q-cMA2aNjsyK8Haw&s",
    "J-8F": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcF52dA47ZHvqleuTfTDmsSdbc6nXxVZnBw&s",
    
    // Suecia
    "Strv 122B PLSS": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnya2J2mbcEkxqpaAALATIp3w_HAfkckPOCQ&s",
    "CV90120": "https://static.warthunder.com/upload/image/!%202020%20NEWS/03%20March/CV%2090105/cv_90105_tml_03_1280h720_bba16b7b761df65dfb182a66e339c157.jpg",
    "JA37C Viggen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMKOW43hBoedaaVtLYivfE-w8NhdiMchceA&s"
};

// Elementos del DOM
const vehiclesGrid = document.getElementById('vehiclesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const nationFilter = document.getElementById('nationFilter');
const typeFilter = document.getElementById('typeFilter');
const brFilter = document.getElementById('brFilter');
const infoBtn = document.getElementById('infoBtn');
const gameInfoModal = document.getElementById('gameInfoModal');
const closeButton = document.querySelector('.close-button');
const modalBody = document.querySelector('.modal-body');
const totalVehicles = document.getElementById('totalVehicles');
const totalStats = document.getElementById('totalStats');

// Función para obtener imagen del vehículo
function getVehicleImage(vehicleName) {
    return vehicleImages[vehicleName] || "https://via.placeholder.com/400x200/333333/FFFFFF?text=Imagen+No+Disponible";
}

// Función para renderizar vehículos
function renderVehicles(vehicles) {
    vehiclesGrid.innerHTML = '';
    
    if (vehicles.length === 0) {
        vehiclesGrid.innerHTML = `
            <div class="no-results">
                <h3>No se encontraron vehículos</h3>
                <p>Intenta con otros filtros o términos de búsqueda</p>
            </div>
        `;
        return;
    }
    
    vehicles.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.className = `vehicle-card ${vehicle.nation}`;
        
        vehicleCard.innerHTML = `
            <img src="${getVehicleImage(vehicle.name)}" alt="${vehicle.name}" class="vehicle-image" loading="lazy">
            
            <div class="vehicle-header">
                <h3 class="vehicle-name">${vehicle.name}</h3>
                <span class="vehicle-br">BR ${vehicle.br}</span>
            </div>
            
            <div class="vehicle-info">
                <div class="info-item">
                    <span class="info-label">Nación</span>
                    <span class="info-value">${getNationName(vehicle.nation)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Tipo</span>
                    <span class="info-value">${getTypeName(vehicle.type)}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Era</span>
                    <span class="info-value">${vehicle.era}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Tripulación</span>
                    <span class="info-value">${vehicle.crew}</span>
                </div>
            </div>
            
            <div class="vehicle-specs">
                <div class="spec-item">
                    <span class="info-label">Armamento Principal</span>
                    <span class="info-value">${vehicle.mainGun}</span>
                </div>
                <div class="spec-item">
                    <span class="info-label">Blindaje</span>
                    <span class="info-value">${vehicle.armor}</span>
                </div>
                <div class="spec-item">
                    <span class="info-label">Motor</span>
                    <span class="info-value">${vehicle.engine}</span>
                </div>
            </div>
            
            <div class="vehicle-stats">
                <div class="stats-grid">
                    <div class="stat-item">
                        <span>Velocidad Máx:</span>
                        <span class="stat-value">${vehicle.speed} ${getSpeedUnit(vehicle.type)}</span>
                    </div>
                    <div class="stat-item">
                        <span>Peso:</span>
                        <span class="stat-value">${vehicle.weight} ${getWeightUnit(vehicle.type)}</span>
                    </div>
                    <div class="stat-item">
                        <span>Año:</span>
                        <span class="stat-value">${vehicle.year}</span>
                    </div>
                    <div class="stat-item">
                        <span>Penetración:</span>
                        <span class="stat-value">${vehicle.penetration}</span>
                    </div>
                </div>
            </div>
            
            ${vehicle.characteristics ? `
            <div class="vehicle-features">
                <div class="info-label">Características:</div>
                <div class="features-list">
                    ${vehicle.characteristics.map(feat => 
                        `<span class="feature-tag">${feat}</span>`
                    ).join('')}
                </div>
            </div>
            ` : ''}
        `;
        
        vehiclesGrid.appendChild(vehicleCard);
    });
}

// Funciones auxiliares
function getNationName(code) {
    const nations = {
        'usa': 'USA',
        'urss': 'URSS/Rusia',
        'alemania': 'Alemania',
        'uk': 'Reino Unido',
        'japon': 'Japón',
        'francia': 'Francia',
        'italia': 'Italia',
        'china': 'China',
        'suecia': 'Suecia'
    };
    return nations[code] || code;
}

function getTypeName(type) {
    const types = {
        'tanque': 'Tanque',
        'avion': 'Avión',
        'helicoptero': 'Helicóptero',
        'barco': 'Barco'
    };
    return types[type] || type;
}

function getSpeedUnit(type) {
    return (type === 'avion' || type === 'helicoptero') ? 'km/h' : 'km/h';
}

function getWeightUnit(type) {
    return type === 'barco' ? 'toneladas' : 'ton';
}

// Filtrado y búsqueda
function filterVehicles() {
    const searchTerm = searchInput.value.toLowerCase();
    const nation = nationFilter.value;
    const type = typeFilter.value;
    const br = brFilter.value;
    
    let filtered = vehiclesDatabase.filter(vehicle => {
        const matchesSearch = !searchTerm || 
         vehicle.name.toLowerCase().includes(searchTerm) ||
         vehicle.type.toLowerCase().includes(searchTerm) ||
         vehicle.nation.toLowerCase().includes(searchTerm);
        
        const matchesNation = !nation || vehicle.nation === nation;
        const matchesType = !type || vehicle.type === type;
        const matchesBR = !br || Math.floor(vehicle.br) === parseFloat(br);
        
        return matchesSearch && matchesNation && matchesType && matchesBR;
    });
    
    renderVehicles(filtered);
    
    // Actualizar estadísticas
    totalVehicles.textContent = filtered.length;
    totalStats.textContent = filtered.length;
}

// Event listeners
searchInput.addEventListener('input', filterVehicles);
searchBtn.addEventListener('click', filterVehicles);
nationFilter.addEventListener('change', filterVehicles);
typeFilter.addEventListener('change', filterVehicles);
brFilter.addEventListener('change', filterVehicles);

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderVehicles(vehiclesDatabase);
    totalVehicles.textContent = vehiclesDatabase.length;
    totalStats.textContent = vehiclesDatabase.length;
});

// CSS adicional para resultados vacíos
const additionalStyles = `
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 4rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        border: 2px dashed #e63946;
    }
    
    .no-results h3 {
        color: #e63946;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .no-results p {
        color: #cccccc;
        font-size: 1.1rem;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);