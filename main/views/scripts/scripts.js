if (window.vantaEffect) {
      window.vantaEffect.destroy();
      window.vantaEffect = null;
    }
    window.vantaEffect = VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x6a0dad,        // Linhas roxo escuro
      backgroundColor: 0x0d001a, // Fundo roxo bem escuro
      points: 6.00,
      maxDistance: 18.00,
      spacing: 15.00
    });