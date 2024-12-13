document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
      "Diseño de tatuajes",
      "Tatuajes clasicos",
      "Body Piercing",
      "Body art",
      "Modificacione corporales",
    ]; 
    const typingElement = document.getElementById('typing');
    let currentPhraseIndex = 0;
    let charIndex = 0;
  
    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex];
  

      typingElement.textContent = currentPhrase.slice(0, charIndex++);
  
      
      if (charIndex > currentPhrase.length) {
        charIndex = 0; 
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; 
        setTimeout(() => typeEffect(), 1000); 
      } else {
        setTimeout(() => typeEffect(), 100); 
      }
    }
  

    typeEffect();
  });
  
  
  