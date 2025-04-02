// Liste complète des pistes avec thématiques et sous-thématiques
const sunoTracks = [
    { "id": "6c9eaca1-f359-430e-8f79-5c7b5bfb479b", "title": "Sunset in early November", "artist": "IrresistibleArtDirector1123", "ambiance": "Calme", "moment": "Soir", "intention": "Détente", "duration": 240 },
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210", "ambiance": "Mélancolique", "moment": "Soir", "intention": "Réflexion", "duration": 229 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋      ‎ 🔞", "ambiance": "Calme", "moment": "Soir", "intention": "Détente", "duration": 117 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand", "ambiance": "Énergique", "moment": "Nuit", "intention": "Motivation", "duration": 184 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408", "ambiance": "Calme", "moment": "Soir", "intention": "Détente", "duration": 240 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "ambiance": "Méditative", "moment": "Nuit", "intention": "Méditation", "duration": 140 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip", "ambiance": "Calme", "moment": "Matin", "intention": "Détente", "duration": 214 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "ambiance": "Calme", "moment": "Soir", "intention": "Réflexion", "duration": 179 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT", "ambiance": "Mélancolique", "moment": "Soir", "intention": "Réflexion", "duration": 239 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área", "ambiance": "Énergique", "moment": "Midi", "intention": "Motivation", "duration": 157 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área", "ambiance": "Calme", "moment": "Soir", "intention": "Détente", "duration": 168 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT", "ambiance": "Mélancolique", "moment": "Matin", "intention": "Réflexion", "duration": 183 }
    { "id": "ee467d00-5813-4a74-9792-c9ae4a09d344", "title": "Cat", "artist": "Feline Music", "ambiance": "Calme", "moment": "Nuit", "intention": "Détente", "duration": "Inconnu" }
    { "id": "5a285fbc-f64a-418a-8b2e-05e3e7990899", "title": "Deep Night", "artist": "Moisty", "ambiance": "Mélancolique", "moment": "Nuit", "intention": "Réflexion", "duration": 194 }
    { "id": "b27c29f6-8ab4-47eb-81fd-efb85c848ada", "title": "C-A-P-Y-B-A-R-A", "artist": "Suno AI", "ambiance": "Inconnu", "moment": "Inconnu", "intention": "Inconnu", "duration": "Inconnu" }
    { "id": "f275d9ac-5a62-4bbe-baf9-3fa10e0332f4", "title": "Ain't Got a Nickel Ain't Got a Dime", "artist": "soul_diego", "ambiance": "Inconnu", "moment": "Inconnu", "intention": "Inconnu", "duration": "Inconnu" }
    { "id": "7f774078-1672-4858-a37f-acad373c5a84", "title": "Ho-Ohhhh Baby", "artist": "Suno AI", "ambiance": "Joyeuse", "moment": "Soir", "intention": "Détente", "duration": "Inconnu" }
    { "id": "19807561-1427-4c25-a229-a8c3063d0616", "title": "Egyptian Dance Party", "artist": "Suno AI", "ambiance": "Énergique", "moment": "Nuit", "intention": "Voyage", "duration": "Inconnu" }
    { "id": "c15f0251-fbac-4a30-a3e1-002dbc78cb79", "title": "I only ate 3 cheeseburgers!", "artist": "Suno AI", "ambiance": "Joyeuse", "moment": "Midi", "intention": "Inconnu", "duration": "Inconnu" }
    { "id": "3107d309-3316-4b00-bc7c-f590038d9e5b", "title": "I Can Wait 100 Years", "artist": "wetcircuit", "ambiance": "Méditative", "moment": "Nuit", "intention": "Réflexion", "duration": 264 }
    { "id": "5b83f352-1956-4ca2-8534-2af03bf76863", "title": "MAYBE?!", "artist": "aroundonce", "ambiance": "Inconnu", "moment": "Inconnu", "intention": "Inconnu", "duration": "Inconnu" }
    { "id": "423d3dea-7a36-4621-a3b2-ff92edc066d4", "title": "Bossa Jazz A Cappella", "artist": "3Daizy🌼", "ambiance": "Calme", "moment": "Après-midi", "intention": "Détente", "duration": 140 }
    { "id": "ffa48fbf-ac87-4a02-8cf2-f3766f518d58", "title": "I Spent 3000 Credits on This Song", "artist": "Nanashi_Zero🀄️", "ambiance": "Énergique", "moment": "Midi", "intention": "Motivation", "duration": 194 }
    { "id": "2cf0773a-cd83-4931-8e1e-7f4eb1a2610e", "title": "Where Do We Go From Here?", "artist": "sushileaf 🍣🍃", "ambiance": "Mélancolique", "moment": "Soir", "intention": "Réflexion", "duration": "Inconnu" }
    { "id": "b26f13fd-69d0-4b70-a575-2757d9dea505", "title": "ポートフォリオ", "artist": "realisticnocturne357", "ambiance": "Inconnu", "moment": "Inconnu", "intention": "Inconnu", "duration": "Inconnu" }
    { "id": "225b52b1-a2d4-4c73-acdf-a6bfb1b391cd", "title": "World Hello!!", "artist": "Suno AI", "ambiance": "Joyeuse", "moment": "Midi", "intention": "Voyage", "duration": "Inconnu" }
    { "id": "96031c9b-930b-4aae-a433-d624a1686d2f", "title": "Give it to me (Suno) 🌳", "artist": "mrtree", "ambiance": "Inconnu", "moment": "Inconnu", "intention": "Inconnu", "duration": "Inconnu" }
    { "id": "e48c0ee8-24c8-459b-8d91-469dbd6fc3a5", "title": "dialectic (accept it)", "artist": "yolkhead", "ambiance": "Calme", "moment": "Soir", "intention": "Détente", "duration": 239 }
    { "id": "093e95d7-1cb5-46b5-9342-39bc82621a7b", "title": "I LOVE MY SMALL LITTLE CAT", "artist": "Suno AI", "ambiance": "Joyeuse", "moment": "Matin", "intention": "Détente", "duration": "Inconnu" }
    { "id": "290fc7e0-4796-4c05-a0c0-8c92e1e2827a", "title": "Suno Please Fix", "artist": "SirBitesAlot", "ambiance": "Énergique", "moment": "Midi", "intention": "Motivation", "duration": "Inconnu" }
];

// Variables globales
let currentCategory = "ambiance";
let currentSubcategory = "Calme";
let currentTrackId = null;
let nextTrackTimer = null;
let radioHasStarted = false;
let isLoading = false;
let startTime = null;

// Éléments du DOM
const preloader = document.getElementById('preloader');
const categoryButtonsContainer = document.querySelector('.category-buttons');
const subcategoryContainers = document.querySelectorAll('.subcategory-container');
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
                category: `${currentCategory}: ${currentSubcategory}`,
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

function getTracksByCategoryAndSubcategory(category, subcategory) {
    return sunoTracks.filter(track => track[category] === subcategory);
}

function selectRandomTrack() {
    const history = getPlayHistory();
    let availableTracks = getTracksByCategoryAndSubcategory(currentCategory, currentSubcategory);
    if (availableTracks.length === 0) {
        console.warn(`Aucun morceau pour ${currentCategory}: ${currentSubcategory}.`);
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
    subcategoryContainers.forEach(container => {
        container.style.display = container.id === `subcategory-${currentCategory}` ? 'flex' : 'none';
    });
    updateSubcategoryButtons();
}

function updateSubcategoryButtons() {
    const activeContainer = document.getElementById(`subcategory-${currentCategory}`);
    if (activeContainer) {
        const buttons = activeContainer.querySelectorAll('.subcategory-button');
        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.subcategory === currentSubcategory);
        });
    }
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

// Chargement de la piste (sans vérification réseau)
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
            currentSubcategory = document.querySelector(`#subcategory-${currentCategory} .subcategory-button.active`).dataset.subcategory;
            updateCategoryButtons();
            radioHasStarted ? loadNextTrack() : startRadioFirstTime();
        }
    });

    document.querySelectorAll('.subcategory-container').forEach(container => {
        container.addEventListener('click', (event) => {
            if (event.target.matches('.subcategory-button')) {
                currentSubcategory = event.target.dataset.subcategory;
                updateSubcategoryButtons();
                radioHasStarted ? loadNextTrack() : startRadioFirstTime();
            }
        });
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
