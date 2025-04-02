// Liste complète des pistes avec nouvelle catégorisation unique
const sunoTracks = [
    { "id": "6c9eaca1-f359-430e-8f79-5c7b5bfb479b", "title": "Sunset in early November", "artist": "IrresistibleArtDirector1123", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210", "categorie": "Horizon Infini", "duration": 229 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋      ‎ 🔞", "categorie": "Calme Puissant", "duration": 117 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand", "categorie": "Décollage Express", "duration": 184 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "categorie": "Esprit Aiguisé", "duration": 140 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip", "categorie": "Calme Puissant", "duration": 214 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "categorie": "Esprit Aiguisé", "duration": 179 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 239 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área", "categorie": "Quête Sauvage", "duration": 157 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área", "categorie": "Calme Puissant", "duration": 168 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 183 },
    { "id": "5a285fbc-f64a-418a-8b2e-05e3e7990899", "title": "Deep Night", "artist": "Moisty", "categorie": "Horizon Infini", "duration": 194 },
    { "id": "3107d309-3316-4b00-bc7c-f590038d9e5b", "title": "I Can Wait 100 Years", "artist": "wetcircuit", "categorie": "Esprit Aiguisé", "duration": 264 },
    { "id": "423d3dea-7a36-4621-a3b2-ff92edc066d4", "title": "Bossa Jazz A Cappella", "artist": "3Daizy🌼", "categorie": "Calme Puissant", "duration": 140 },
    { "id": "ffa48fbf-ac87-4a02-8cf2-f3766f518d58", "title": "I Spent 3000 Credits on This Song", "artist": "Nanashi_Zero🀄️", "categorie": "Quête Sauvage", "duration": 194 },
    { "id": "e48c0ee8-24c8-459b-8d91-469dbd6fc3a5", "title": "dialectic (accept it)", "artist": "yolkhead", "categorie": "Calme Puissant", "duration": 239 },
    { "id": "c5ebced9-f509-4d49-97b2-ff89ef881a52", "title": "Bob Ross Love Letter", "artist": "Suno AI", "categorie": "Décollage Express", "duration": 180 },
    { "id": "5564a0a7-ed9d-4b63-967b-c5534f472bce", "title": "π", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 180 },
    { "id": "674e86cb-0395-414a-a291-a4c11a9efc4d", "title": "50 decimal places of pi", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 180 },
    { "id": "4ec14116-ac9b-49e3-ae62-99eb2f1ac0c2", "title": "Circles (Remastered)", "artist": "claraco", "categorie": "Calme Puissant", "duration": 180 },
    { "id": "2343eb4a-d3c6-40e7-bf40-91e76b72a25c", "title": "Escape from 9 to 5", "artist": "Adios", "categorie": "Quête Sauvage", "duration": 125 },
    { "id": "93288786-8d6a-4e6a-95fd-4e3ba1aca02c", "title": "Why didn't anyone like my song?", "artist": "Suno AI", "categorie": "Décollage Express", "duration": 180 },
    { "id": "063f3392-fe1b-4ce9-9ac8-660dd0315bfb", "title": "Mozart On The Bass- FI", "artist": "Suno AI", "categorie": "Quête Sauvage", "duration": 180 },
    { "id": "8b6a2d3c-909f-4bee-8193-1f206b0cc111", "title": "OH AI (extended Version)", "artist": "SpinningFeedback620", "categorie": "Horizon Infini", "duration": 180 },
    { "id": "1b28f52a-0311-48e1-a645-f06f6a6f3d66", "title": "Nikola Tesla", "artist": "crispity", "categorie": "Décollage Express", "duration": 214 },
    { "id": "530b3957-d316-45d1-8bbf-989b1aa32a60", "title": "Sway Sway Sway Sway Sway Sway", "artist": "Shonen Beats", "categorie": "Calme Puissant", "duration": 161 }
];

// Variables globales
let currentCategory = "horizon"; // Catégorie par défaut
let currentTrackId = null;
let nextTrackTimer = null;
let radioHasStarted = false;
let isLoading = false;
let startTime = null;

// Éléments du DOM
const preloader = document.getElementById('preloader');
const categoryButtonsContainer = document.querySelector('.category-buttons');
const playerContainer = document.getElementById('player-container');
const initialOverlay = document.getElementById('initial-play-overlay');
const startButton = document.getElementById('start-radio-button');
const iframeTarget = document.getElementById('iframe-target');
const nowPlayingText = document.getElementById('now-playing-text');
const nextTrackButton = document.getElementById('next-track');
const progressBar = document.getElementById('progress-bar');

// Fonctions Utilitaires
function getPlayHistory() {
    try {
        const history = localStorage.getItem('sunoRadioHistory');
        return history ? JSON.parse(history) : [];
    } catch (e) {
        console.error("Erreur lecture historique:", e);
        return [];
    }
}

function updatePlayHistory(trackId) {
    if (!trackId) return;
    let history = getPlayHistory();
    const track = sunoTracks.find(t => t.id === trackId);
    if (track) {
        nowPlayingText.textContent = `En cours: ${track.title} par ${track.artist}`;
        if (history.length === 0 || history[0].id !== trackId) {
            history.unshift({
                id: trackId,
                title: track.title,
                artist: track.artist,
                category: track.categorie,
                timestamp: new Date().toISOString()
            });
            if (history.length > 15) history = history.slice(0, 15);
            try {
                localStorage.setItem('sunoRadioHistory', JSON.stringify(history));
            } catch (e) {
                console.error("Erreur sauvegarde historique:", e);
            }
        }
    }
}

function getTracksByCategory(category) {
    // Conversion des catégories vers les valeurs internes
    const categoryMap = {
        "horizon": "Horizon Infini",
        "calme": "Calme Puissant",
        "esprit": "Esprit Aiguisé",
        "quete": "Quête Sauvage",
        "decollage": "Décollage Express"
    };
    
    const selectedCategory = categoryMap[category];
    return sunoTracks.filter(track => track.categorie === selectedCategory);
}

function selectRandomTrack() {
    const history = getPlayHistory();
    let availableTracks = getTracksByCategory(currentCategory);
    
    if (availableTracks.length === 0) {
        console.warn(`Aucun morceau pour la catégorie: ${currentCategory}.`);
        return sunoTracks[Math.floor(Math.random() * sunoTracks.length)];
    }
    
    if (history.length > 0 && availableTracks.length > 2) {
        const recentTrackIds = [...new Set(history.slice(0, 2).map(item => item.id))];
        const filteredTracks = availableTracks.filter(track => !recentTrackIds.includes(track.id));
        if (filteredTracks.length > 0) availableTracks = filteredTracks;
    }
    
    return availableTracks[Math.floor(Math.random() * availableTracks.length)];
}

function updateCategoryButtons() {
    const buttons = categoryButtonsContainer.querySelectorAll('.category-button');
    buttons.forEach(button => {
        button.classList.toggle('active', button.dataset.category === currentCategory);
        button.setAttribute('aria-selected', button.dataset.category === currentCategory);
    });
}

function updateProgress(track) {
    progressBar.style.width = '0%';
    if (track.duration) {
        startTime = Date.now();
        const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            progressBar.style.width = `${Math.min((elapsed / track.duration) * 100, 100)}%`;
        }, 1000);
        setTimeout(() => clearInterval(interval), track.duration * 1000);
    }
}

// Chargement de la piste
function loadTrack(track) {
    if (!track || !track.id) {
        iframeTarget.innerHTML = '<p class="loading-message">Erreur : Piste invalide.</p>';
        nowPlayingText.textContent = 'Erreur de chargement';
        return;
    }

    currentTrackId = track.id;
    if (nextTrackTimer) clearTimeout(nextTrackTimer);
    const iframe = document.createElement('iframe');
    iframe.id = 'suno-iframe';
    iframe.src = `https://suno.com/embed/${track.id}?autoplay=true`;
    iframe.title = `Lecteur Suno pour ${track.title}`;
    iframe.allow = 'autoplay';
    iframe.loading = 'lazy'; // Lazy loading
    iframe.onerror = () => {
        iframeTarget.innerHTML = '<p class="loading-message">Erreur : Impossible de charger ce morceau. Passage au suivant...</p>';
        setTimeout(loadNextTrack, 2000);
    };
    iframeTarget.innerHTML = '';
    iframeTarget.appendChild(iframe);
    updatePlayHistory(track.id);
    updateProgress(track);
    if (track.duration) {
        nextTrackTimer = setTimeout(loadNextTrack, track.duration * 1000 + 3000);
    }
}

function loadNextTrack() {
    if (!radioHasStarted || isLoading) return;
    isLoading = true;
    iframeTarget.innerHTML = '<p class="loading-message">Chargement du prochain morceau...</p>';
    nowPlayingText.textContent = 'Sélection en cours...';
    setTimeout(() => {
        const trackToLoad = selectRandomTrack();
        if (trackToLoad) loadTrack(trackToLoad);
        else {
            iframeTarget.innerHTML = '<p class="loading-message">Erreur : Aucun morceau trouvé.</p>';
            nowPlayingText.textContent = 'Erreur de sélection';
        }
        isLoading = false;
    }, 100);
}

function startRadioFirstTime() {
    if (radioHasStarted) return;
    radioHasStarted = true;
    initialOverlay.classList.add('hidden');
    loadNextTrack();
}

// Écouteurs d'événements optimisés avec délégation
function setupEventListeners() {
    categoryButtonsContainer.addEventListener('click', (event) => {
        if (event.target.matches('.category-button')) {
            currentCategory = event.target.dataset.category;
            updateCategoryButtons();
            radioHasStarted ? loadNextTrack() : startRadioFirstTime();
        }
    });

    initialOverlay.addEventListener('click', startRadioFirstTime);
    nextTrackButton.addEventListener('click', () => {
        if (isLoading) return;
        if (!radioHasStarted) startRadioFirstTime();
        else loadNextTrack();
    });

    // Détection hors ligne
    window.addEventListener('offline', () => {
        iframeTarget.innerHTML = '<p class="loading-message">Connexion perdue. Mode hors ligne activé.</p>';
        nowPlayingText.textContent = 'Mode hors ligne';
    });
    window.addEventListener('online', () => {
        if (radioHasStarted) loadNextTrack();
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (!sunoTracks || sunoTracks.length === 0) {
        initialOverlay.innerHTML = '<p class="loading-message" style="color: red;">Erreur: Liste de morceaux vide !</p>';
        return;
    }
    updateCategoryButtons();
    setupEventListeners();

    // Cacher le préchargeur après chargement
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });

    // Enregistrement du Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker enregistré'))
            .catch(err => console.error('Erreur Service Worker:', err));
    }
});
