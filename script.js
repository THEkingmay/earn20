document.getElementById("surprise-btn").addEventListener("click", function() {
    const message = document.getElementById("surprise-message");
    const popSound = document.getElementById("pop-sound");
  
    // Show the surprise message
    message.classList.remove("hidden");
    setTimeout(() => {
      message.style.opacity = 1;
    }, 100);
  
    // Play sound
    popSound.play();
  
    // Create balloons
    createBalloons(5);
  
    // Change background to friend's image
    changeBackgroundImage();
  });
  
  function createBalloons(num) {
    const container = document.querySelector('.balloon-container');
    const colors = ['#ff6f61', '#ffcc00', '#33cc33', '#66ccff', '#ff66b2'];
  
    for (let i = 0; i < num; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.left = `${Math.random() * 90}%`;
      balloon.style.animationDuration = `${Math.random() * 2 + 3}s`;
      container.appendChild(balloon);
  
      // Remove balloon after animation ends
      balloon.addEventListener('animationend', () => {
        balloon.remove();
      });
    }
  }
  
  function changeBackgroundImage() {
    const container = document.getElementById('b_con');
    
    // Set the background image to your friend's photo
    container.style.backgroundImage = 'url("love.jpg")';
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center';
  }
  