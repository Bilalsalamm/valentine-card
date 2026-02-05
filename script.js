let fontSize = 1.2;

// FIX: Ensure this matches your filename. (Changed from .mp3.mp3 to .mp3)
const audio = new Audio('valentine.mp3.mp3'); 
audio.loop = true;

function handleNoClick() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    
    fontSize += 0.5;
    yesButton.style.fontSize = `${fontSize}rem`;
    yesButton.style.padding = `${fontSize * 10}px ${fontSize * 20}px`;

    const messages = ["Are you sure?", "Really??", "Pookie please", "Don't do this to me", "I'm gonna cry...", "You're breaking my heart ;("];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    noButton.innerText = randomMessage;

    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.position = "absolute"; 
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function handleYesClick() {
    // TRIGGER: Change the background realistically
    document.body.classList.add('realistic-love-bg');

    audio.play().then(() => {
        console.log("Music started!");
    }).catch(error => {
        console.error("Audio block:", error);
    });

    startConfetti(); 

    // Main layout with the Red Marquee added at the top
  document.querySelector('.container').innerHTML = `
        <marquee scrollamount="3">
            <h2 style="color: #d4af37; text-shadow: 0 0 10px #fcf6ba; font-family: 'Georgia', serif;">
         Love You ✨ Love You ✨ Love You
        </marquee>

        <h1 class="header_text" style="color: #ffffff">Knew you would say yes! 🌠</h1>
        
        <div class="music-card">
            <div class="control-row">
                <button onclick="togglePlay()" id="playPauseBtn" class="modern-play-btn">Pause ⏸️</button>
                <div class="volume-wrapper">
                    <span class="volume-icon">🔊</span>
                    <input type="range" min="0" max="1" step="0.1" value="0.5" oninput="adjustVolume(this.value)" class="modern-slider">
                </div>
            </div>
        </div>

        <div class="horizontal-layout" style="display: flex; justify-content: center; align-items: flex-start; gap: 40px; margin-top: 30px; flex-wrap: wrap;">
            
            <div class="video_container" style="flex: 2; max-width: 600px;">
                <iframe 
                    class="kiss-video"
                    src="https://www.youtube.com/embed/FVSCyvy_PW8?autoplay=1&mute=1&controls=0" 
                    frameborder="0" 
                    allow="autoplay"
                    style="width: 100%; aspect-ratio: 16/9; border-radius: 15px; border: 5px solid white;">
                </iframe>
            </div>

            <div class="date-planner" style="flex: 1; max-width: 350px; text-align: left; background: rgba(255,255,255,0.4); padding: 20px; border-radius: 20px; backdrop-filter: blur(10px);">
                <p>Step 1: Pick our date activity 🍽️</p>
                <select id="activity" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #ff4d6d;">
                    <option value="Romantic Dinner">Romantic Dinner</option>
                    <option value="Movie Marathon">Movie Marathon</option>
                    <option value="Sunset Picnic">Sunset Picnic</option>
                    <option value="Surprise Adventure">Surprise Adventure</option>
                </select>
                
                <p style="margin-top:15px;">Step 2: Leave a sweet note ✍️</p>
                <textarea id="love-note" placeholder="Write something sweet..." style="width: 100%; height: 60px; border-radius: 8px; padding: 10px; border: 1px solid #ff4d6d; resize: none;"></textarea>
                
                <button class="confirm-btn" onclick="confirmDate()" style="width: 100%; margin-top: 20px; background: #ff4d6d; color: white; padding: 12px; border: none; border-radius: 10px; cursor: pointer; font-weight: bold;">Confirm Date 🥰</button>
                
                <div id="confirmation-msg" style="margin-top: 15px; font-weight: bold; color: #d02e2e;"></div>
                
                <div id="share-container" style="display:none; margin-top: 20px;">
                    <button onclick="shareOnInstagram()" class="insta-btn" style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; width: 100%; padding: 12px; border: none; border-radius: 50px; cursor: pointer; font-weight: bold;">
                        ✉️ Message on Instagram
                    </button>
                </div>
            </div>
        </div>
    `;
}


function startConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        // Randomly pick between sparkles, gold hearts, or gold stars
        const goldItems = ['✨', '⭐', '📀', '🟡'];
        confetti.innerText = goldItems[Math.floor(Math.random() * goldItems.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.fontSize = '24px';
        confetti.style.zIndex = '999';
        confetti.style.transition = 'transform 2s linear, top 2s linear';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.style.top = '110vh';
            confetti.style.transform = `rotate(${Math.random() * 1000}deg)`;
        }, 10);

        setTimeout(() => confetti.remove(), 2000);
    }
}

function togglePlay() {
    const btn = document.getElementById('playPauseBtn');
    if (audio.paused) {
        audio.play();
        btn.innerText = "Pause ⏸️";
    } else {
        audio.pause();
        btn.innerText = "Play ▶️";
    }
}

function adjustVolume(val) {
    audio.volume = val;
}

function startConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = '❤️';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '999';
        confetti.style.transition = 'transform 2s linear, top 2s linear';
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.style.top = '110vh';
            confetti.style.transform = `rotate(${Math.random() * 1000}deg)`;
        }, 10);
        setTimeout(() => confetti.remove(), 2000);
    }
}

function createHearts() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; 
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
} 
setInterval(createHearts, 300);