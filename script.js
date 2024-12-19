document.addEventListener('DOMContentLoaded', () => {
    const secondLogo = document.querySelector('.second-logo');
    const videoContainer = document.querySelector('.video-container');
    const videoPlayer = document.getElementById('video-player');

    setTimeout(() => {
        secondLogo.style.display = 'none'; 
        videoContainer.style.display = 'block';
        videoContainer.style.animation = 'fadeInVideo 2s forwards';

        videoPlayer.load();
    }, 10000); 
});
