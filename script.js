// Liste complète des pistes avec nouvelle catégorisation unique
const sunoTracks = [
    { "id": "6c9eaca1-f359-430e-8f79-5c7b5bfb479b", "title": "Sunset in early November", "artist": "IrresistibleArtDirector1123", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210.", "categorie": "Horizon Infini", "duration": 229 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋 🔞", "categorie": "Esprit Aiguisé", "duration": 117 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand.", "categorie": "Décollage Express", "duration": 184 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "categorie": "Esprit Aiguisé", "duration": 140 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip", "categorie": "Calme Puissant", "duration": 214 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "categorie": "Esprit Aiguisé", "duration": 179 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 239 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área", "categorie": "Quête Sauvage", "duration": 157 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área", "categorie": "Calme Puissant", "duration": 168 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT.", "categorie": "Calme Puissant", "duration": 183 },
    { "id": "5a285fbc-f64a-418a-8b2e-05e3e7990899", "title": "Deep Night", "artist": "Moisty.", "categorie": "Décollage Express", "duration": 185 },
    { "id": "3107d309-3316-4b00-bc7c-f590038d9e5b", "title": "I Can Wait 100 Years", "artist": "Wetcircuit.", "categorie": "Esprit Aiguisé", "duration": 264 },
    { "id": "423d3dea-7a36-4621-a3b2-ff92edc066d4", "title": "Bossa Jazz A Cappella", "artist": "3Daizy🌼.", "categorie": "Esprit Aiguisé", "duration": 140 },
    { "id": "ffa48fbf-ac87-4a02-8cf2-f3766f518d58", "title": "I Spent 3000 Credits on This Song", "artist": "Nanashi_Zero🀄️", "categorie": "Décollage Express", "duration": 194 },
    { "id": "e48c0ee8-24c8-459b-8d91-469dbd6fc3a5", "title": "Dialectic (accept it)", "artist": "yolkhead", "categorie": "Calme Puissant", "duration": 239 },
    { "id": "c5ebced9-f509-4d49-97b2-ff89ef881a52", "title": "Bob Ross Love Letter", "artist": "Suno AI.", "categorie": "Décollage Express", "duration": 115 },
    { "id": "5564a0a7-ed9d-4b63-967b-c5534f472bce", "title": "π", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 180 },
    { "id": "674e86cb-0395-414a-a291-a4c11a9efc4d", "title": "50 decimal places of pi", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 180 },
    { "id": "4ec14116-ac9b-49e3-ae62-99eb2f1ac0c2", "title": "Circles (Remastered)", "artist": "Claraco.", "categorie": "Esprit Aiguisé", "duration": 239 },
    { "id": "2343eb4a-d3c6-40e7-bf40-91e76b72a25c", "title": "Escape from 9 to 5", "artist": "Adios.", "categorie": "Quête Sauvage", "duration": 126 },
    { "id": "1b28f52a-0311-48e1-a645-f06f6a6f3d66", "title": "Nikola Tesla", "artist": "crispity", "categorie": "Décollage Express", "duration": 214 },
    { "id": "4ed9cd17-d8e9-4ab9-9514-e83e7597886a", "title": "Lokah samastah sukhino bhavantu", "artist": "Sotoca IA", "categorie": "Horizon Infini", "duration": 178 },
    { "id": "530b3957-d316-45d1-8bbf-989b1aa32a60", "title": "Sway Sway Sway Sway Sway Sway", "artist": "Shonen Beats.", "categorie": "Décollage Express", "duration": 161 },
    { "id": "695f1367-b817-4399-be9d-ad73af812a41", "title": "test test", "artist": "Sotoca", "categorie": "Esprit Aiguisé", "duration": 170 },
    { "id": "ed4bc352-89f2-4f08-b21c-3fef7ce86245", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "9d601e01-1282-4a76-afb5-b710edc38f8f", "title": "Onde cristalline de sérénité", "artist": "JeanMiK2", "categorie": "Calme Puissant", "duration": 143 },
    { "id": "e9e6a0fb-d175-4678-a1a0-b8ab100e3d37", "title": "Kangaroo Rock", "artist": "JeanMiK2", "categorie": "Quête Sauvage", "duration": 165 },
    { "id": "0d6a7a3e-6dbf-4337-8b79-11fe7ce4629c", "title": "test8 test8", "artist": "JeanMiK2", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "bbddf627-8e79-4eda-b986-e658e115e451", "title": "Запастись энергией", "artist": "JeanMiK2", "categorie": "Décollage Express", "duration": 240 },
    { "id": "67764712-b129-4f78-bab2-1c03e2014655", "title": "Rambling Railroad", "artist": "JeanMiK2", "categorie": "Horizon Infini", "duration": 133 },
    { "id": "ac9cbeac-ae76-4472-933d-626b29fa870e", "title": "Fusion Éternelle", "artist": "JeanMiK2", "categorie": "Esprit Aiguisé", "duration": 240 },
    { "id": "cfbd2cd5-ef3d-42b7-8c79-c09215cf4a46", "title": "Мегаполис ночью", "artist": "JeanMiK2", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "501f08e0-47b5-457c-b4ba-72b02fe033a2", "title": "Voyage Galactique", "artist": "JeanMiK2", "categorie": "Décollage Express", "duration": 240 },
    { "id": "695f1367-b817-4399-be9d-ad73af812a41", "title": "test test", "artist": "Sotoca", "categorie": "Esprit Aiguisé", "duration": 170 },
    { "id": "ed4bc352-89f2-4f08-b21c-3fef7ce86245", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "812c5928-d512-4fcb-85ba-c6ed02647bbb", "title": "Digital Love", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 160 },
    { "id": "997e0359-8457-4c24-9b6a-42ba76a7ee0d", "title": "Victory Unveiled", "artist": "GROOVEBOT", "categorie": "Décollage Express", "duration": 200 },
    { "id": "a3e445c8-b7e6-4f11-9c5c-2e7281c8a68e", "title": "Ethereal Journey", "artist": "GROOVEBOT", "categorie": "Calme Puissant", "duration": 180 },
    { "id": "187fd87d-614b-4fc8-bd98-9420e9939795", "title": "Thirst of Triumph", "artist": "GROOVEBOT", "categorie": "Quête Sauvage", "duration": 170 },
    { "id": "0f9017bf-936d-4242-93cd-fe54f49c6c65", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "7bd6d4dc-4e7a-4dd4-af9a-f269eee9f0b2", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "53bcffeb-260a-4a21-919d-ecedc88a21d4", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "a397db51-e3b7-43ab-b641-5d301b0b98e5", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "bfa06855-f2b4-425a-bcda-73a29ddb78d9", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "72095b8a-e900-4d3b-85c8-b161812f61d1", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "fe2e6d06-1dd5-4458-8426-6cb742fce01c", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "6a1b0175-9461-40ac-836e-52e0f754556c", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "6361a4ee-4b2b-4753-b2c6-7cc3d4efd603", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "9361bd7f-0d2e-4989-b3d8-c8bf83c9adb8", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "bfdf9757-cd77-4f2e-9676-b41598292ccb", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "1b6cafb4-ccc0-496e-b686-ac202a53e132", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "fa5e40b4-4e2b-4031-8ef0-369ad1d98f09", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "20f5dedf-4ad7-45f1-8519-71207ede4ea1", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "942301b1-f679-4a92-8374-aa676840dc3f", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "4d8be4fa-04e2-4db7-8a0c-afba32006935", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 },
    { "id": "bfbfe02a-3bf3-4c04-b834-65ca9cc55a59", "title": "Inconnu", "artist": "Suno AI", "categorie": "Inconnu", "duration": 150 }

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
