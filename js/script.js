// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// ===== 3D ANIMATED BACKGROUND =====
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.z = Math.random() * 1500;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.speedZ = Math.random() * 2 + 1;
            this.color = `hsla(${Math.random() * 60 + 240}, 80%, 70%, ${Math.random() * 0.5 + 0.3})`;
        }

        update() {
            this.z -= this.speedZ;
            if (this.z <= 0) {
                this.z = 1500;
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
            }

            const scale = 1000 / (1000 + this.z);
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                this.x -= dx * 0.02;
                this.y -= dy * 0.02;
            }

            return scale;
        }

        draw(scale) {
            ctx.save();
            ctx.translate(this.x, this.y);
            
            const size = this.size * scale;
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, size * 3, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, size, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
    }

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.sort((a, b) => b.z - a.z);

        particles.forEach((particle, i) => {
            const scale = particle.update();
            particle.draw(scale);

            for (let j = i + 1; j < particles.length; j++) {
                const other = particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - distance / 120) * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ===== DARK MODE TOGGLE =====
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Toggle theme
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        
        // Update icon
        if (themeIcon) {
            themeIcon.classList.toggle('fa-moon', !isDark);
            themeIcon.classList.toggle('fa-sun', isDark);
        }
        
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Add click sound effect
        playClickSound();
    });
}

// ===== SOUND EFFECTS =====
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playClickSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

function playHoverSound() {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 600;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.05);
}

// Add hover sounds to interactive elements
document.querySelectorAll('.btn, .project-card, .skill-category, .nav-links a').forEach(element => {
    element.addEventListener('mouseenter', () => {
        playHoverSound();
    });
});

// ===== CUSTOM CURSOR =====
if (window.innerWidth > 768) {
    const cursorDot = document.createElement('div');
    const cursorRing = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth follow for dot
        dotX += (mouseX - dotX) * 0.8;
        dotY += (mouseY - dotY) * 0.8;
        
        // Smooth follow for ring (slower)
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scale cursor on hover
    document.querySelectorAll('a, button, .project-card, .skill-category, .stat').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorRing.style.borderColor = 'rgba(99, 102, 241, 0.9)';
        });
        element.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorRing.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        });
    });
}

// Smooth Scrolling with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Advanced Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.project-card, .skill-category, .stat, .cv-item, .info-item');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.classList.add('reveal', 'active');
        }
    });
};

revealOnScroll();
window.addEventListener('scroll', revealOnScroll);

revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${index * 0.1}s`;
});

// Typing Effect for Hero Section
const subtitle = document.querySelector('.subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 1000);
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < 600) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = Math.max(0.2, 1 - (scrolled / 600));
    }
});

// Animated Counter for Stats
const animateCounter = (element) => {
    const target = element.textContent;
    const isNumber = /^\d+/.test(target);
    
    if (isNumber) {
        const number = parseInt(target);
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < number) {
                element.textContent = Math.floor(current) + target.replace(/^\d+/, '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
};

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const h3 = entry.target.querySelector('h3');
            if (h3) {
                animateCounter(h3);
                entry.target.classList.add('counted');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// Form Submission with Animation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        
        button.textContent = 'Sending...';
        button.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            button.textContent = '✓ Message Sent!';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            playClickSound();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
                button.style.transform = '';
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Skill Tags with Rainbow Colors
const skillTags = document.querySelectorAll('.tag');
const colors = [
    'linear-gradient(135deg, #667eea, #764ba2)',
    'linear-gradient(135deg, #f093fb, #f5576c)',
    'linear-gradient(135deg, #4facfe, #00f2fe)',
    'linear-gradient(135deg, #43e97b, #38f9d7)',
    'linear-gradient(135deg, #fa709a, #fee140)',
];

skillTags.forEach((tag, index) => {
    tag.style.background = colors[index % colors.length];
});

// Floating Animation
const floatingElements = document.querySelectorAll('.project-card img, .profile-pic img');
floatingElements.forEach((el, index) => {
    el.style.animation = `float ${3 + (index * 0.5)}s ease-in-out infinite`;
    el.style.animationDelay = `${index * 0.2}s`;
});

// Project Cards 3D Tilt Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    let frameId = null;
    let lastX = 0;
    let lastY = 0;

    const updateTilt = () => {
        const rect = card.getBoundingClientRect();
        const x = lastX - rect.left;
        const y = lastY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Higher sensitivity for faster response
        const rotateX = (y - centerY) / 7;
        const rotateY = (centerX - x) / 7;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        frameId = null;
    };

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    card.addEventListener('mousemove', (e) => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (!frameId) {
            frameId = requestAnimationFrame(updateTilt);
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = '';
        card.style.transform = '';
    });
});

// Progress Bar on Scroll
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    z-index: 9999;
    transition: width 0.1s ease;
    width: 0;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Particle Effect in Hero
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
            z-index: 1;
        `;
        hero.appendChild(particle);
    }
}

createParticles();

// Entrance Animations for Skill Categories
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach((category, index) => {
    category.style.animation = `fadeInUp 0.6s ease-out ${index * 0.2}s both`;
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        playClickSound();
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('🚀 Portfolio loaded with ULTIMATE premium features!');
console.log('💡 Features: Dark Mode, Custom Cursor, Sound Effects, Particles, 3D Tilt');
console.log('🎮 Easter egg: Try the Konami code! ↑↑↓↓←→←→BA');
