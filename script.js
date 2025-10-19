function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        const currentTime = Date.now();
        timeElement.textContent = currentTime;
        timeElement.setAttribute('datetime', new Date(currentTime).toISOString());
    }
}

// Initialize time update on page load
//document.addEventListener('DOMContentLoaded', updateTime);
updateTime();


// Optional: Update time every second (you can remove this if you want static time)
setInterval(updateTime, 1000);

// Handle avatar upload (optional feature)
function initAvatarUpload() {
    const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
    
    // Create file input for avatar upload
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);
    
    // Make avatar clickable for upload
    if (avatarImg) {
        avatarImg.style.cursor = 'pointer';
        avatarImg.setAttribute('tabindex', '0');
        avatarImg.setAttribute('role', 'button');
        avatarImg.setAttribute('aria-label', 'Click to upload new avatar image');
        
        const handleAvatarClick = () => {
            fileInput.click();
        };
        
        avatarImg.addEventListener('click', handleAvatarClick);
        
        // Keyboard accessibility for avatar upload
        avatarImg.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleAvatarClick();
            }
        });
        
        // Handle file selection
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    avatarImg.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

// Initialize avatar upload functionality
initAvatarUpload();


// Announce time updates to screen readers (accessibility)
function announceTimeUpdate() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = `Time updated to ${timeElement.textContent}`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
}

// Add screen reader only class for announcements
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
`;
document.head.appendChild(style);

console.log('Profile card initialized successfully!');
