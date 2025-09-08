// Simple Timer Functionality
class MeditationTimer {
    constructor() {
        this.seconds = 0;
        this.isRunning = false;
        this.intervalId = null;
        
        // Get DOM elements
        this.display = document.getElementById('timerDisplay');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        
        // Bind event listeners
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        
        // Initial display update
        this.updateDisplay();
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                this.seconds++;
                this.updateDisplay();
            }, 1000);
            
            // Update button states
            this.startBtn.disabled = true;
            this.pauseBtn.disabled = false;
        }
    }
    
    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.intervalId);
            
            // Update button states
            this.startBtn.disabled = false;
            this.pauseBtn.disabled = true;
        }
    }
    
    reset() {
        this.isRunning = false;
        clearInterval(this.intervalId);
        this.seconds = 0;
        
        // Update display and button states
        this.updateDisplay();
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.seconds / 60);
        const remainingSeconds = this.seconds % 60;
        
        // Format as MM:SS
        const formattedTime = 
            String(minutes).padStart(2, '0') + ':' + 
            String(remainingSeconds).padStart(2, '0');
        
        this.display.textContent = formattedTime;
    }
}

// Initialize timer when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MeditationTimer();
    console.log('Timer initialized!');
});
