function mudarTema(tema) {
    const root = document.documentElement;
    const body = document.querySelector("body")
  
    switch (tema) {
      case '1':
        root.style.setProperty('--Very-dark-main-bg', 'hsl(222, 26%, 31%)');
        root.style.setProperty('--Very-dark-toggle-keypad', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--Light-grayish-orange-key-bg', 'hsl(30, 25%, 89%)');
        root.style.setProperty('--red-bg', 'hsl(6, 63%, 50%)');
       
        break;
      case '2':
        body.style.backgroundColor = "hsl(0, 0%, 90%)"
       
        break;
      case '3':
        root.style.setProperty('--Very-dark-main-bg', 'hsl(268, 75%, 9%)');
        root.style.setProperty('--Very-dark-toggle-keypad', 'hsl(268, 71%, 12%)');
        root.style.setProperty('--Light-grayish-orange-key-bg', 'hsl(45, 7%, 89%)');
        root.style.setProperty('--red-bg', 'hsl(6, 63%, 50%)');
        
        break;
      
      default:
        break;
    }
  }
  
  
  function aplicarTema() {
    const elementos = document.querySelectorAll('body, .box-app, .displayNum, .keys');
  
    elementos.forEach(elemento => {
      
      elemento.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--Very-dark-main-bg');
      elemento.style.color = getComputedStyle(document.documentElement).getPropertyValue('--White-text');
    });
  }
  