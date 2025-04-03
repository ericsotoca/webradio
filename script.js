// Liste complète des pistes avec nouvelle catégorisation unique
const sunoTracks = [
    { "id": "6c9eaca1-f359-430e-8f79-5c7b5bfb479b", "title": "Sunset in early November", "artist": "IrresistibleArtDirector1123.", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210.", "categorie": "Horizon Infini", "duration": 229 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋 🔞", "categorie": "Esprit Aiguisé", "duration": 117 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand.", "categorie": "Décollage Express", "duration": 184 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "categorie": "Esprit Aiguisé", "duration": 140 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip", "categorie": "Calme Puissant", "duration": 214 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "categorie": "Esprit Aiguisé", "duration": 179 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 239 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área.", "categorie": "Calme Puissant", "duration": 157 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área.", "categorie": "Calme Puissant", "duration": 168 },
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
    { "id": "4ed9cd17-d8e9-4ab9-9514-e83e7597886a", "title": "Lokah samastah sukhino bhavantu", "artist": "Sotoca IA", "categorie": "Horizon Infini", "duration": 178 },
    { "id": "9d601e01-1282-4a76-afb5-b710edc38f8f", "title": "Onde cristalline de sérénité", "artist": "JeanMiK2.", "categorie": "Calme Puissant", "duration": 144 },
    { "id": "e9e6a0fb-d175-4678-a1a0-b8ab100e3d37", "title": "Kangaroo Rock", "artist": "JeanMiK2", "categorie": "Quête Sauvage", "duration": 165 },
    { "id": "67764712-b129-4f78-bab2-1c03e2014655", "title": "Rambling Railroad", "artist": "JeanMiK2", "categorie": "Horizon Infini", "duration": 133 },
    { "id": "ac9cbeac-ae76-4472-933d-626b29fa870e", "title": "Fusion Éternelle", "artist": "JeanMiK2", "categorie": "Esprit Aiguisé", "duration": 240 },
    { "id": "501f08e0-47b5-457c-b4ba-72b02fe033a2", "title": "Voyage Galactique", "artist": "JeanMiK2", "categorie": "Décollage Express", "duration": 240 },
    { "id": "812c5928-d512-4fcb-85ba-c6ed02647bbb", "title": "Digital Love", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 160 },
    { "id": "997e0359-8457-4c24-9b6a-42ba76a7ee0d", "title": "Victory Unveiled", "artist": "GROOVEBOT", "categorie": "Décollage Express", "duration": 200 },
    { "id": "a3e445c8-b7e6-4f11-9c5c-2e7281c8a68e", "title": "Ethereal Journey", "artist": "GROOVEBOT", "categorie": "Calme Puissant", "duration": 180 },
    { "id": "187fd87d-614b-4fc8-bd98-9420e9939795", "title": "Thirst of Triumph", "artist": "GROOVEBOT", "categorie": "Quête Sauvage", "duration": 170 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 183 },
    { "id": "9d601e01-1282-4a76-afb5-b710edc38f8f", "title": "Onde cristalline de sérénité", "artist": "JeanMiK2", "categorie": "Calme Puissant", "duration": 143 },
    { "id": "e9e6a0fb-d175-4678-a1a0-b8ab100e3d37", "title": "Kangaroo Rock", "artist": "JeanMiK2.", "categorie": "Quête Sauvage", "duration": 165 },
    { "id": "bbddf627-8e79-4eda-b986-e658e115e451", "title": "Запастись энергией", "artist": "JeanMiK2", "categorie": "Décollage Express", "duration": 240 },
    { "id": "67764712-b129-4f78-bab2-1c03e2014655", "title": "Rambling Railroad", "artist": "JeanMiK2", "categorie": "Horizon Infini", "duration": 133 },
    { "id": "ac9cbeac-ae76-4472-933d-626b29fa870e", "title": "Fusion Éternelle", "artist": "JeanMiK2", "categorie": "Esprit Aiguisé", "duration": 240 },
    { "id": "cfbd2cd5-ef3d-42b7-8c79-c09215cf4a46", "title": "Мегаполис ночью", "artist": "JeanMiK2", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "501f08e0-47b5-457c-b4ba-72b02fe033a2", "title": "Voyage Galactique", "artist": "JeanMiK2", "categorie": "Décollage Express", "duration": 240 },
    { "id": "f8373d7f-c0a3-4a7d-81e0-9313e1309fa0", "title": "Banana Republic", "artist": "YouNoWhooIs", "categorie": "Esprit Aiguisé", "duration": 165 },
    { "id": "62712471-2235-4e17-a540-38360eadcc0e", "title": "Supersonic Grind", "artist": "Quantity Over Quality", "categorie": "Décollage Express", "duration": 148 },
    { "id": "4517afcc-b18f-471b-8bc2-d48794c5fe0b", "title": "Schlau vs. Schön (🇩🇪)", "artist": "Schöbi Records", "categorie": "Esprit Aiguisé", "duration": 198 },
    { "id": "a3bc664e-8ac0-4072-b340-2e847b240081", "title": "Cese y Desista", "artist": "Tiborio", "categorie": "Quête Sauvage", "duration": 255 },
    { "id": "d0def131-ec26-498a-9fd9-89952c2f060b", "title": "Tongue Twisters part two", "artist": "STEVE VAN GULICK-HILL", "categorie": "Esprit Aiguisé", "duration": 135 },
    { "id": "0e09c799-1259-48a0-9810-c8b9b6dab30d", "title": "I Miss You Remix", "artist": "Eclonix", "categorie": "Horizon Infini", "duration": 238 },
    { "id": "c0161255-f4a8-4aeb-bf6c-19d149bd40fe", "title": "Welcome to IKEA! (Välkommen till IKEA!)", "artist": "Wabbajack", "categorie": "Décollage Express", "duration": 112 },
    { "id": "feb7766c-f69d-43ce-a94d-2b9dfb277959", "title": "Shattered Mirrors", "artist": "AdrenalineFueledFaders", "categorie": "Horizon Infini", "duration": 237 },
    { "id": "1f54ea49-dddd-47b3-a3d3-264f1579caa0", "title": "No apologies (Remastered)", "artist": "Ovi", "categorie": "Esprit Aiguisé", "duration": 151 },
    { "id": "a18fb50a-1989-4a82-aa6c-67e0b9d985cb", "title": "In the Magic", "artist": "SunniHM", "categorie": "Calme Puissant", "duration": 132 },
    { "id": "04e9aeeb-76bb-4584-b47d-9bdb31206380", "title": "EL RAP GRAMATICAL", "artist": "TurbulentPublisher1155", "categorie": "Esprit Aiguisé", "duration": 211 },
    { "id": "cf95498e-1031-466d-95bc-b8e8c067d2f4", "title": "The Last Dance", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 219 },
    { "id": "1be45c7f-efee-4288-bb46-24bc4ac633a6", "title": "A Walk in the Park", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 131 },
    { "id": "edcf6f52-b255-4bb8-9efd-6f25e215aa4d", "title": "The Night We Met", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 192 },
    { "id": "b9d4abb4-1df8-40c5-952c-10e72f16df54", "title": "Sunrise Symphony", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 198 },
    { "id": "3013aab3-775a-424d-aa4c-039772113504", "title": "City Lights", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 187 },
    { "id": "11b441f9-8cb4-4e57-9c17-2d755e4bed36", "title": "Moonlight Sonata", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 164 },
    { "id": "7491c084-a47f-409c-be7a-976cd0ced1d4", "title": "The Stars Above", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 203 },
    { "id": "c91c0033-0347-4a17-ba76-d4d6250b50c6", "title": "Whispers of the Wind", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 149 },
    { "id": "754c51f6-790f-44dd-868c-c89a7d16e2f3", "title": "The Ocean's Call", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 191 },
    { "id": "aa0febaa-6c8b-444b-a34f-db5155272b2b", "title": "Peaceful Meadow", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 152 },
    { "id": "b6fcebe0-7eb9-4829-98c2-159602f24161", "title": "The Journey Begins", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 208 },
    { "id": "876ab577-f36a-4131-854a-5d51487d76e6", "title": "Tranquil Forest", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 137 },
    { "id": "37e0e1dc-82be-4e25-adba-5528974df604", "title": "The World Unfolds", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 201 },
    { "id": "8cc87e22-af6f-46fb-9d8a-ed1623547c31", "title": "Serene Lake", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 143 },
    { "id": "e5a628f1-18bc-4042-922c-afe8b0b028ed", "title": "The Distant Shore", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 197 },
    { "id": "264fd734-1fc4-465f-bac8-32bd7e87a563", "title": "Soft Rain", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 158 },
    { "id": "a200b759-03e4-47c2-b724-6683187e0b3f", "title": "The Whispering Pines", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 146 },
    { "id": "5f981a9d-8e2b-4213-9b1b-f6e478f12951", "title": "A New Beginning", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 205 },
    { "id": "66494343-5a2c-4ead-9320-2e77932216fa", "title": "Neon Swing", "artist": "waseland", "categorie": "Inconnu", "duration": "Inconnu" },
    { "id": "407a2098-ce34-4384-bfda-888acb693e4f", "title": "get on up out ya feelin one time", "artist": "Zack Brown", "categorie": "Quête Sauvage", "duration": 59 },
    { "id": "8828bd14-461f-4751-9d4c-776da5d4e64e", "title": "阿米诺斯 阿米诺斯", "artist": "Annie0001", "categorie": "Décollage Express", "duration": 162 },
    { "id": "937e5a85-4846-45b0-a665-cac8b95e6d32", "title": "Legacy of Rhythm", "artist": "Kyrylo Shmidt", "categorie": "Calme Puissant", "duration": 147 },
    { "id": "80a0540a-f19a-4bcb-a9b6-f856c0f0ec37", "title": "Zumba Zumba", "artist": "wolftopia", "categorie": "Inconnu", "duration": "Inconnu" },
    { "id": "d0c08d7c-7e72-40bf-90cc-3112da5f62a5", "title": "Fever dream", "artist": "GTZY", "categorie": "Horizon Infini", "duration": 198 },
    { "id": "d3138581-b61e-4e3d-952b-b07db480f473", "title": "Neon Blades", "artist": "austerecrowd841", "categorie": "Inconnu", "duration": "Inconnu" },
    { "id": "8e629fac-cc59-448f-876f-c4b72fa10ab4", "title": "me gusta el pan", "artist": "temardos", "categorie": "Inconnu", "duration": "Inconnu" },
    { "id": "2dba663e-404b-40c6-9eca-1d4871f9a75b", "title": "AI Music Conspiracies ft. 3Daizy🌼", "artist": "Nanashi_Zero🀄️", "categorie": "Esprit Aiguisé", "duration": 165 },
    { "id": "872b3f45-612c-4408-92c5-115dc9bb025e", "title": "Hip-Hop of The Rabbit", "artist": "Random505", "categorie": "Quête Sauvage", "duration": 223 },
    { "id": "2794e660-10a0-4761-856f-90289a189f80", "title": "Apple Pie", "artist": "Humans AI", "categorie": "Calme Puissant", "duration": 177 },
    { "id": "0e1a1313-f1d4-4848-9d74-19749ed14388", "title": "How 2 B Happy", "artist": "Chibiitaii", "categorie": "Esprit Aiguisé", "duration": 159 },
    { "id": "94e30c67-2f64-4ffb-9ef4-4cc93b8dd52f", "title": "Fox", "artist": "felinemusic", "categorie": "Inconnu", "duration": "Inconnu" }
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
