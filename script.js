// Liste complète des pistes avec nouvelle catégorisation unique
const sunoTracks = [
    { "id": "674e86cb-0395-414a-a291-a4c11a9efc4d", "title": "50 decimal places of pi", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 180 },
    { "id": "1be45c7f-efee-4288-bb46-24bc4ac633a6", "title": "A Walk in the Park", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 131 },
    { "id": "25a32452-1bfd-4791-b378-7584a0be64f5", "title": "Aerial Awakening", "artist": "Zneip.", "categorie": "Calme Puissant", "duration": 214 },
    { "id": "137ba8ff-3d61-4d79-acfe-7644999cdba8", "title": "Are You Not Entertained?", "artist": "Rattvisa.", "categorie": "Horizon Infini", "duration": 230 },
    { "id": "3a09ffcc-f677-42ad-9ec0-dd2e01b7adca", "title": "Aurora Dance (Instrumental)", "artist": "Xian - ExclusiveKnob421", "categorie": "Calme Puissant", "duration": 140 },
    { "id": "f8373d7f-c0a3-4a7d-81e0-9313e1309fa0", "title": "Banana Republic", "artist": "YouNoWhooIs", "categorie": "Esprit Aiguisé", "duration": 165 },
    { "id": "533b9834-52a5-4100-8d05-9ef605a4e715", "title": "Blues in the light of dawn", "artist": "GROOVEBOT.", "categorie": "Calme Puissant", "duration": 183 },
    { "id": "16555cd3-3aab-4f6d-b02c-8c15ebf6a8f1", "title": "Cade la neve", "artist": "Jazz56", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "d2002f05-15f7-4490-bc84-dfdb6f033b90", "title": "Caminhos da Vida", "artist": "Sueli.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "a3bc664e-8ac0-4072-b340-2e847b240081", "title": "Cese y Desista", "artist": "Tiborio.", "categorie": "Quête Sauvage", "duration": 265 },
    { "id": "b50869d5-fd45-4219-987b-22d68621178e", "title": "Love and Peace", "artist": "Vibe Music Ai Records.", "categorie": "Calme Puissant", "duration": 194 },
    { "id": "4ec14116-ac9b-49e3-ae62-99eb2f1ac0c2", "title": "Circles (Remastered)", "artist": "Claraco.", "categorie": "Esprit Aiguisé", "duration": 239 },
    { "id": "6f9a9ed2-0082-4536-8db9-6cfca9c621ef", "title": "Corner lights", "artist": "HiddenHand.", "categorie": "Décollage Express", "duration": 184 },
    { "id": "5a285fbc-f64a-418a-8b2e-05e3e7990899", "title": "Deep Night", "artist": "Moisty.", "categorie": "Décollage Express", "duration": 185 },
    { "id": "e48c0ee8-24c8-459b-8d91-469dbd6fc3a5", "title": "Dialectic (accept it)", "artist": "yolkhead", "categorie": "Calme Puissant", "duration": 239 },
    { "id": "a3e445c8-b7e6-4f11-9c5c-2e7281c8a68e", "title": "Ethereal Journey", "artist": "GROOVEBOT.", "categorie": "Calme Puissant", "duration": 160 },
    { "id": "b4661e87-97c3-4b6e-87ca-f31f47ac40ef", "title": "Eu Não Ando Sumido", "artist": "Roberto na Área.", "categorie": "Calme Puissant", "duration": 168 },
    { "id": "31ed9181-2aff-4bbc-b816-3be66fd9d0ef", "title": "Farther Along", "artist": "frowns.", "categorie": "Calme Puissant", "duration": 172 },
    { "id": "2160a428-d7c4-4892-b250-9a739a60e475", "title": "Fuja de quem não quer te perder mas não sabe te amar", "artist": "Roberto na Área.", "categorie": "Calme Puissant", "duration": 157 },
    { "id": "176e197f-0656-4351-9516-1ebc05d4855f", "title": "Her First Heartbreak", "artist": "Brandon Luke.", "categorie": "Calme Puissant", "duration": 185 },
    { "id": "3107d309-3316-4b00-bc7c-f590038d9e5b", "title": "I Can Wait 100 Years", "artist": "Wetcircuit.", "categorie": "Esprit Aiguisé", "duration": 265 },
    { "id": "0e09c799-1259-48a0-9810-c8b9b6dab30d", "title": "I Miss You Remix", "artist": "Eclonix.", "categorie": "Horizon Infini", "duration": 238 },
    { "id": "ffa48fbf-ac87-4a02-8cf2-f3766f518d58", "title": "I Spent 3000 Credits on This Song", "artist": "Nanashi_Zero🀄️", "categorie": "Décollage Express", "duration": 194 },
    { "id": "fd95f5af-5b7f-493b-918c-8c2cf7380db4", "title": "Inclusive Backdoor Man (Pilloe mix)", "artist": "CelticSemitone.", "categorie": "Quête Sauvage", "duration": 190 },
    { "id": "3899e808-d76f-48d4-b850-3ab3c6da6a88", "title": "Island Breeze", "artist": "DrollFire383.", "categorie": "Calme Puissant", "duration": 240 },
    { "id": "e9e6a0fb-d175-4678-a1a0-b8ab100e3d37", "title": "Kangaroo Rock", "artist": "JeanMiK2.", "categorie": "Quête Sauvage", "duration": 165 },
    { "id": "75b62359-9b3e-4ffe-839b-0eb7c11de71e", "title": "Let's Take a Chance", "artist": "MyDreamSongs.", "categorie": "Calme Puissant", "duration": 213 },
    { "id": "4ed9cd17-d8e9-4ab9-9514-e83e7597886a", "title": "Lokah samastah sukhino bhavantu", "artist": "Sotoca IA.", "categorie": "Horizon Infini", "duration": 118 },
    { "id": "917b4a0f-a658-4476-a00d-a8b1ba08f242", "title": "My Gal Done Got Crazy", "artist": "BrainBendersBanter.", "categorie": "Quête Sauvage", "duration": 227 },
    { "id": "1f54ea49-dddd-47b3-a3d3-264f1579caa0", "title": "No apologies (Remastered)", "artist": "Ovi", "categorie": "Esprit Aiguisé", "duration": 151 },
    { "id": "9d601e01-1282-4a76-afb5-b710edc38f8f", "title": "Onde cristalline de sérénité", "artist": "JeanMiK2.", "categorie": "Calme Puissant", "duration": 144 },
    { "id": "aa0febaa-6c8b-444b-a34f-db5155272b2b", "title": "Peaceful Meadow", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 152 },
    { "id": "6805b1a2-1700-41b3-80db-c285045e99e8", "title": "PODŁOŻE BUJANE", "artist": "ZoleMusicAI.", "categorie": "Calme Puissant", "duration": 223 },
    { "id": "67764712-b129-4f78-bab2-1c03e2014655", "title": "Rambling Railroad", "artist": "JeanMiK2.", "categorie": "Horizon Infini", "duration": 133 },
    { "id": "d4cd5909-e7cc-4751-a6e1-f7a28f44808a", "title": "Reflections in Solitude", "artist": "Henryhan", "categorie": "Calme Puissant", "duration": 179 },
    { "id": "5d4edb40-0565-4142-9758-6b3a90f6a2fd", "title": "Reggae Love Vibes", "artist": "Suno AI.", "categorie": "Horizon Infini", "duration": 225 },
    { "id": "1dba28fb-3dfa-41b6-b438-cc81b587d40c", "title": "Saudade", "artist": "GROOVEBOT.", "categorie": "Horizon Infini", "duration": 219 },
    { "id": "8cc87e22-af6f-46fb-9d8a-ed1623547c31", "title": "Serene Lake", "artist": "Suno AI", "categorie": "Esprit Aiguisé", "duration": 223 },
    { "id": "b9d4abb4-1df8-40c5-952c-10e72f16df54", "title": "Sunrise Symphony", "artist": "Suno AI", "categorie": "Calme Puissant", "duration": 198 },
    { "id": "70d69e22-05ce-477e-942e-cde1cd4da747", "title": "Sunset in early November", "artist": "WryConductor408.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "b6fcebe0-7eb9-4829-98c2-159602f24161", "title": "The Journey Begins", "artist": "Suno AI.", "categorie": "Horizon Infini", "duration": 253 },
    { "id": "cf95498e-1031-466d-95bc-b8e8c067d2f4", "title": "The Last Dance", "artist": "Suno AI", "categorie": "Horizon Infini", "duration": 219 },
    { "id": "754c51f6-790f-44dd-868c-c89a7d16e2f3", "title": "The Ocean's Call", "artist": "Suno AI.", "categorie": "Horizon Infini", "duration": 194 },
    { "id": "a200b759-03e4-47c2-b724-6683187e0b3f", "title": "The Whispering Pines", "artist": "Suno AI", "categorie": "Quête Sauvage", "duration": 206 },
    { "id": "187fd87d-614b-4fc8-bd98-9420e9939795", "title": "Thirst of Triumph", "artist": "GROOVEBOT", "categorie": "Quête Sauvage", "duration": 170 },
    { "id": "d0def131-ec26-498a-9fd9-89952c2f060b", "title": "Tongue Twisters part two", "artist": "STEVE VAN GULICK-HILL", "categorie": "Esprit Aiguisé", "duration": 135 },
    { "id": "1d2906a9-ee4a-44d9-a71e-164b53c1c496", "title": "Vanilla Suno", "artist": "Brado with the face for radio.", "categorie": "Horizon Infini", "duration": 231 },
    { "id": "997e0359-8457-4c24-9b6a-42ba76a7ee0d", "title": "Victory Unveiled", "artist": "GROOVEBOT.", "categorie": "Décollage Express", "duration": 180 },
    { "id": "501f08e0-47b5-457c-b4ba-72b02fe033a2", "title": "Voyage Galactique", "artist": "JeanMiK2.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "60035e3c-4024-4438-a0bf-85bea5b5fcd3", "title": "Well Well Well", "artist": "Vibe Music Ai Records.", "categorie": "Calme Puissant", "duration": 223 },
    { "id": "11e0e768-b87b-4fae-b0b4-4e8dc6374e44", "title": "Where the Hell Am I?", "artist": "Vrthtbox.", "categorie": "Esprit Aiguisé", "duration": 228 },
    { "id": "379a2b6a-d9fb-44f2-b3c3-9f608e223d04", "title": "You Need to Learn to Drive", "artist": "The Hulkster.", "categorie": "Esprit Aiguisé", "duration": 281 },
    { "id": "65738b12-6995-4421-be9f-e3083e97ae2b", "title": "𝕀𝕟𝕤𝕥𝕣𝕦𝕞𝕖𝕟𝕥𝕒𝕝", "artist": "𝐑𝐞𝐧𝐡𝐚𝐋 🔞.", "categorie": "Esprit Aiguisé", "duration": 117 },
    { "id": "cfbd2cd5-ef3d-42b7-8c79-c09215cf4a46", "title": "Мегаполис ночью", "artist": "JeanMiK2.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "4d8aac83-9cf6-48ce-af71-0b818df806db", "title": "康德之桥", "artist": "ReservedTremolo210.", "categorie": "Horizon Infini", "duration": 229 },
    { "id": "d012de10-e877-43f1-92f4-9bd2e706f52d", "title": "🎶 Darlin', Don't You Go 🎶", "artist": "RetroDream.", "categorie": "Calme Puissant", "duration": 206 },
    { "id": "ed4bc352-89f2-4f08-b21c-3fef7cb86245", "title": "Minute By Minute", "artist": "Brado with the face for radio", "categorie": "Esprit Aiguisé", "duration": 205 },
    { "id": "812c5928-d512-4fcb-85ba-c6ed02647bbb", "title": "Песня о песнях", "artist": "GROOVEBOT", "categorie": "Horizon Infini", "duration": 180 },
    { "id": "6805b1a2-1700-41b3-80db-c285045e99e8", "title": "Maylo", "artist": "Jenseits der Grenzen", "categorie": "Horizon Infini", "duration": 223 },
    { "id": "1892cdb4-3eca-41fe-b341-e4cdc3fca285", "title": "Jetzt waßt wi da oalles besser (Remastered)", "artist": "Jenseits der Grenzen", "categorie": "Quête Sauvage", "duration": 187 },
    { "id": "990e18ee-59a7-4e4a-88fe-5300347faa31", "title": "Сила Думки", "artist": "Tosik.", "categorie": "Horizon Infini", "duration": 240 },
    { "id": "948b8276-6714-460f-b526-033354e094ce", "title": "Cancer", "artist": "Joy'elle", "categorie": "Quête Sauvage", "duration": 157 },
    { "id": "e1917ac3-d715-457a-b17c-e21982141a53", "title": "🇷🇺Mellstroy Плаки плаки", "artist": "Wondarlove", "categorie": "Calme Puissant", "duration": 164 }
];

// Variables globales
let songIds = ["songId1", "songId2", "songId3"]; // Remplacer par vos IDs Suno réels
let currentSongIndex = 0;
let nextSongIndex = 1;
let playerContainer = document.getElementById('playerContainer');
let currentIframe = null;
let nextIframe = null;
let crossfadeTimer = null;

// Durées estimées en secondes pour chaque chanson (à remplir manuellement)
let songDurations = {
    "songId1": 180, // 3 minutes
    "songId2": 210, // 3:30 minutes
    "songId3": 195  // 3:15 minutes
};

// Configuration du crossfade
let crossfadeDuration = 5; // Durée du crossfade en secondes

// Fonction pour créer un iframe
function createIframe(songId, visible = true) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://suno.com/embed/${songId}`;
    iframe.frameBorder = "0";
    iframe.allow = "autoplay";
    iframe.style.width = "100%";
    iframe.style.height = "300px";
    
    // Style pour le crossfade
    iframe.style.transition = `opacity ${crossfadeDuration}s ease-in-out`;
    iframe.style.opacity = visible ? "1" : "0";
    
    // Positionnement
    iframe.style.position = "absolute";
    iframe.style.top = "0";
    iframe.style.left = "0";
    
    return iframe;
}

// Préparation du conteneur pour les iframes superposés
function preparePlayerContainer() {
    playerContainer.style.position = "relative";
    playerContainer.style.width = "100%";
    playerContainer.style.height = "300px";
}

// Fonction pour démarrer la lecture
function startPlayback() {
    preparePlayerContainer();
    
    // Créer et ajouter l'iframe pour la chanson actuelle
    currentIframe = createIframe(songIds[currentSongIndex], true);
    playerContainer.appendChild(currentIframe);
    
    // Configurer le timer pour le crossfade
    const currentSongDuration = songDurations[songIds[currentSongIndex]];
    const crossfadeStartTime = currentSongDuration - crossfadeDuration;
    
    console.log(`La chanson actuelle durera environ ${currentSongDuration} secondes`);
    console.log(`Le crossfade commencera dans ${crossfadeStartTime} secondes`);
    
    // Démarrer le timer pour le crossfade
    crossfadeTimer = setTimeout(() => {
        console.log("Préparation du crossfade...");
        // Créer et ajouter l'iframe pour la chanson suivante
        nextSongIndex = (currentSongIndex + 1) % songIds.length;
        nextIframe = createIframe(songIds[nextSongIndex], false);
        playerContainer.appendChild(nextIframe);
        
        // Attendre un peu que l'iframe se charge
        setTimeout(() => {
            // Démarrer le crossfade
            performCrossfade();
        }, 1000);
    }, crossfadeStartTime * 1000);
}

// Fonction pour effectuer le crossfade
function performCrossfade() {
    console.log("Début du crossfade...");
    
    // Fade out de la chanson actuelle
    currentIframe.style.opacity = "0";
    
    // Fade in de la chanson suivante
    nextIframe.style.opacity = "1";
    
    // Attendre la fin du crossfade
    setTimeout(() => {
        console.log("Fin du crossfade");
        
        // Supprimer l'ancien iframe
        playerContainer.removeChild(currentIframe);
        
        // Mettre à jour les index
        currentSongIndex = nextSongIndex;
        currentIframe = nextIframe;
        nextIframe = null;
        
        // Configurer le prochain crossfade
        const currentSongDuration = songDurations[songIds[currentSongIndex]];
        const crossfadeStartTime = currentSongDuration - crossfadeDuration;
        
        console.log(`Prochaine chanson: ${songIds[currentSongIndex]}`);
        console.log(`Prochain crossfade dans ${crossfadeStartTime} secondes`);
        
        crossfadeTimer = setTimeout(() => {
            // Recommencer le processus pour la prochaine chanson
            nextSongIndex = (currentSongIndex + 1) % songIds.length;
            nextIframe = createIframe(songIds[nextSongIndex], false);
            playerContainer.appendChild(nextIframe);
            
            setTimeout(() => {
                performCrossfade();
            }, 1000);
        }, crossfadeStartTime * 1000);
    }, crossfadeDuration * 1000);
}

// Bouton pour passer à la chanson suivante manuellement
document.getElementById('nextButton').addEventListener('click', function() {
    // Effacer le timer actuel
    clearTimeout(crossfadeTimer);
    
    // Si un crossfade est déjà en cours
    if (nextIframe) {
        // Accélérer la transition
        currentIframe.style.transition = "opacity 0.5s ease-in-out";
        nextIframe.style.transition = "opacity 0.5s ease-in-out";
        
        // Forcer la fin du crossfade
        currentIframe.style.opacity = "0";
        nextIframe.style.opacity = "1";
        
        setTimeout(() => {
            playerContainer.removeChild(currentIframe);https://github.com/ericsotoca/webradio/tree/main
            currentSongIndex = nextSongIndex;
            currentIframe = nextIframe;
            nextIframe = null;
            
            // Démarrer le prochain timer
            const currentSongDuration = songDurations[songIds[currentSongIndex]];
            const crossfadeStartTime = currentSongDuration - crossfadeDuration;
            
            crossfadeTimer = setTimeout(() => {
                nextSongIndex = (currentSongIndex + 1) % songIds.length;
                nextIframe = createIframe(songIds[nextSongIndex], false);
                playerContainer.appendChild(nextIframe);
                
                setTimeout(() => {
                    performCrossfade();
                }, 1000);
            }, crossfadeStartTime * 1000);
        }, 500);
    } else {
        // Commencer un nouveau crossfade immédiatement
        nextSongIndex = (currentSongIndex + 1) % songIds.length;
        nextIframe = createIframe(songIds[nextSongIndex], false);
        playerContainer.appendChild(nextIframe);
        
        setTimeout(() => {
            performCrossfade();
        }, 1000);
    }
});

// Démarrer la lecture au chargement de la page
window.onload = startPlayback;
