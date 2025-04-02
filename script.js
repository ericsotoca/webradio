// Liste complète des pistes avec les 5 nouvelles catégories
const sunoTracks = [
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210", "category": "Esprit Aiguisé", "duration": 229 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋      ‎ 🔞", "category": "Calme Puissant", "duration": 117 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand", "category": "Décollage Express", "duration": 184 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408", "category": "Calme Puissant", "duration": 240 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "category": "Calme Puissant", "duration": 140 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip", "category": "Calme Puissant", "duration": 214 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "category": "Esprit Aiguisé", "duration": 179 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT", "category": "Esprit Aiguisé", "duration": 239 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área", "category": "Décollage Express", "duration": 157 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área", "category": "Calme Puissant", "duration": 168 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT", "category": "Esprit Aiguisé", "duration": 183 },
    { "id": "5a285fbc-f64a-418a-8b2e-05e3e7990899", "title": "Deep Night", "artist": "Moisty", "category": "Esprit Aiguisé", "duration": 194 },
    { "id": "3107d309-3316-4b00-bc7c-f590038d9e5b", "title": "I Can Wait 100 Years", "artist": "wetcircuit", "category": "Esprit Aiguisé", "duration": 264 },
    { "id": "423d3dea-7a36-4621-a3b2-ff92edc066d4", "title": "Bossa Jazz A Cappella", "artist": "3Daizy🌼", "category": "Horizon Infini", "duration": 140 },
    { "id": "ffa48fbf-ac87-4a02-8cf2-f3766f518d58", "title": "I Spent 3000 Credits on This Song", "artist": "Nanashi_Zero🀄️", "category": "Décollage Express", "duration": 194 },
    { "id": "e48c0ee8-24c8-459b-8d91-469dbd6fc3a5", "title": "dialectic (accept it)", "artist": "yolkhead", "category": "Calme Puissant", "duration": 239 },
    { "id": "c5ebced9-f509-4d49-97b2-ff89ef881a52", "title": "Bob Ross Love Letter", "artist": "Suno AI", "category": "Décollage Express", "duration": 185 },
    { "id": "5564a0a7-ed9d-4b63-967b-c5534f472bce", "title": "π", "artist": "Suno AI", "category": "Décollage Express", "duration": 180 },
    { "id": "674e86cb-0395-414a-a291-a4c11a9efc4d", "title": "50 decimal places of pi", "artist": "Suno AI", "category": "Esprit Aiguisé", "duration": 180 },
    { "id": "4ec14116-ac9b-49e3-ae62-99eb2f1ac0c2", "title": "Circles (Remastered)", "artist": "claraco", "category": "Calme Puissant", "duration": 180 },
    { "id": "2343eb4a-d3c6-40e7-bf40-91e76b72a25c", "title": "Escape from 9 to 5", "artist": "Adios", "category": "Décollage Express", "duration": 125 },
    { "id": "93288786-8d6a-4e6a-95fd-4e3ba1aca02c", "title": "Why didn't anyone like my song?", "artist": "Suno AI", "category": "Décollage Express", "duration": 180 },
    { "id": "8b6a2d3c-909f-4bee-8193-1f206b0cc111", "title": "OH AI (extended Version)", "artist": "SpinningFeedback620", "category": "Esprit Aiguisé", "duration": 180 },
    { "id": "1b28f52a-0311-48e1-a645-f06f6a6f3d66", "title": "Nikola Tesla", "artist": "crispity", "category": "Décollage Express", "duration": 214 },
    { "id": "530b3957-d316-45d1-8bbf-989b1aa32a60", "title": "Sway Sway Sway Sway Sway Sway", "artist": "Shonen Beats", "category": "Décollage Express", "duration": 161 }
];

// Variable globale
let currentCategory = "decollage-express";
let currentTrackId = null;
let nextTrackTimer = null;
let radioHasStarted = false;
let isLoading = false;
let startTime = null;

// Fonction pour démarrer la radio
function startRadioFirstTime() {
    if (radioHasStarted) return;
    radioHasStarted = true;
    initialOverlay.classList.add('hidden');
    loadNextTrack();
}

// Améliorez la fonction de chargement de piste
function loadTrack(track) {
    if (!track || !track.id) {
        iframeTarget.innerHTML = '<p class="loading-message">Erreur : Piste invalide.</p>';
        nowPlayingText.textContent = 'Erreur de chargement';
        return;
    }

    currentTrackId = track.id;
    if (nextTrackTimer) clearTimeout(nextTrackTimer);
    
    console.log("Chargement de la piste:", track.title, track.id); // Journalisation pour déboguer
    
    const iframe = document.createElement('iframe');
    iframe.id = 'suno-iframe';
    iframe.src = `https://suno.com/embed/${track.id}?autoplay=true`;
    iframe.title = `Lecteur Suno pour ${track.title}`;
    iframe.allow = 'autoplay';
    iframe.loading = 'lazy';
    
    // Gestionnaire d'erreurs amélioré
    iframe.onerror = () => {
        console.error("Erreur de chargement de l'iframe pour:", track.id);
        iframeTarget.innerHTML = '<p class="loading-message">Erreur : Impossible de charger ce morceau. Passage au suivant...</p>';
        setTimeout(loadNextTrack, 2000);
    };
    
    // Nettoyage et ajout
    iframeTarget.innerHTML = '';
    iframeTarget.appendChild(iframe);
    
    updatePlayHistory(track.id);
    updateProgress(track);
    
    // Configuration du prochain morceau avec délai sécurisé
    if (track.duration) {
        const duration = track.duration * 1000 + 3000; // Durée en ms + 3s de tampon
        console.log(`Prochain morceau dans ${duration/1000}s`);
        nextTrackTimer = setTimeout(loadNextTrack, duration);
    }
}

// Amélioration de la fonction loadNextTrack
function loadNextTrack() {
    if (!radioHasStarted) {
        startRadioFirstTime(); // Démarrer la radio si pas encore active
        return;
    }
    
    if (isLoading) return;
    isLoading = true;
    
    iframeTarget.innerHTML = '<p class="loading-message">Chargement du prochain morceau...</p>';
    nowPlayingText.textContent = 'Sélection en cours...';
    
    // Ajouter un petit délai pour l'interface utilisateur
    setTimeout(() => {
        try {
            const trackToLoad = selectRandomTrack();
            console.log("Piste sélectionnée:", trackToLoad ? trackToLoad.title : "aucune");
            
            if (trackToLoad) loadTrack(trackToLoad);
            else {
                iframeTarget.innerHTML = '<p class="loading-message">Erreur : Aucun morceau trouvé pour cette catégorie.</p>';
                nowPlayingText.textContent = 'Erreur de sélection';
            }
        } catch (error) {
            console.error("Erreur lors du chargement:", error);
            iframeTarget.innerHTML = `<p class="loading-message">Erreur inattendue: ${error.message}</p>`;
        } finally {
            isLoading = false;
        }
    }, 300);
}

// Amélioration des écouteurs d'événements
function setupEventListeners() {
    // Gestion des clics sur boutons de catégorie
    categoryButtonsContainer.addEventListener('click', (event) => {
        const categoryButton = event.target.closest('.category-button');
        if (categoryButton) {
            event.preventDefault(); // Empêche les comportements indésirables
            event.stopPropagation(); // Empêche le clic de se propager
            
            console.log("Catégorie sélectionnée:", categoryButton.dataset.category);
            currentCategory = categoryButton.dataset.category;
            updateCategoryButtons();
            
            // Démarrer la radio ou changer de morceau
            if (radioHasStarted) {
                loadNextTrack();
            } else {
                startRadioFirstTime();
            }
        }
    });

    // Gestion du clic sur l'overlay initial
    startButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        startRadioFirstTime();
    });
    
    // Configurer le bouton "next track" séparément
    nextTrackButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (isLoading) return;
        
        if (!radioHasStarted) {
            startRadioFirstTime();
        } else {
            loadNextTrack();
        }
    });

    // Gestion des événements réseau
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
    // Vérifications de sécurité
    if (!sunoTracks || sunoTracks.length === 0) {
        console.error("Liste de morceaux vide ou invalide");
        initialOverlay.innerHTML = '<p class="loading-message" style="color: red;">Erreur: Liste de morceaux vide !</p>';
        return;
    }
    
    // Initialiser l'interface
    console.log("Initialisation de SOTOCA WebRadio");
    updateCategoryButtons();
    setupEventListeners();

    // Masquer le préchargeur après chargement complet
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
        console.log("Chargement terminé, préchargeur masqué");
    });

    // Enregistrer le service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker enregistré avec succès'))
            .catch(err => console.error('Erreur lors de l\'enregistrement du Service Worker:', err));
    }
});
