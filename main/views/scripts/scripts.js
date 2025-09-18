// Inicialização do Vanta.js
document.addEventListener('DOMContentLoaded', function() {
  // Verifica se o three.js e vanta estão carregados
  if (typeof THREE !== 'undefined' && typeof VANTA !== 'undefined') {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x667eea,
      backgroundColor: 0x0,
      points: 10.00,
      maxDistance: 20.00,
      spacing: 15.00
    });
  }

  // Animações de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
      }
    });
  }, observerOptions);

  // Observar cards e elementos para animação
  const elementsToAnimate = document.querySelectorAll('.card, .btn, .badge');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });

  // Smooth scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Efeito de typing para textos (opcional)
  const typingElements = document.querySelectorAll('.typing-effect');
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    typeWriter();
  });

  // Formulário de contato (se existir)
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aqui você pode adicionar a lógica para enviar o formulário
      // Por exemplo, usando fetch para enviar para um servidor
      
      // Feedback visual
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Simular envio (remover em produção)
      setTimeout(() => {
        submitBtn.textContent = 'Mensagem Enviada!';
        submitBtn.classList.remove('background-btn-purple');
        submitBtn.classList.add('btn-success');
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.add('background-btn-purple');
          submitBtn.classList.remove('btn-success');
          this.reset();
        }, 2000);
      }, 1500);
    });
  }

  // Navbar collapse em mobile
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler && navbarCollapse) {
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      });
    });
  }

  // Efeito parallax suave no scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Preloader (opcional)
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    });
  }
});

// Função para adicionar efeitos de hover nos cards
function addCardHoverEffects() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', addCardHoverEffects);

// Função para copiar texto para clipboard (útil para email)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    // Feedback visual
    const notification = document.createElement('div');
    notification.textContent = 'Email copiado para a área de transferência!';
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #28a745;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      z-index: 9999;
      animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  });
}

// CSS para animação de notificação
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);