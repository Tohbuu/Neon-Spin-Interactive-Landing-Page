document.addEventListener('DOMContentLoaded', function() {
    // Custom neon cursor
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Cursor hover effects
    document.querySelectorAll('a, button, .feature-card, .testimonial-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.backgroundColor = 'rgba(5, 217, 232, 0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--neon-blue)';
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const count = +stat.innerText;
            const increment = target / 100;
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateStats, 20);
            } else {
                stat.innerText = target;
            }
        });
    }
    
    // Animate slot machine reels
    function animateSlotReels() {
        const reels = document.querySelectorAll('.slot-reel');
        
        reels.forEach((reel, index) => {
            const symbols = reel.querySelectorAll('.slot-symbol');
            const animationDuration = 2000 + (index * 500);
            const stopPosition = Math.floor(Math.random() * symbols.length);
            
            gsap.to(symbols, {
                y: `-=${stopPosition * 100}%`,
                duration: animationDuration / 1000,
                ease: "back.out(0.5)",
                onComplete: function() {
                    // Highlight winning symbols if needed
                    if (index === reels.length - 1) {
                        symbols[stopPosition].classList.add('winning-symbol');
                        setTimeout(() => {
                            symbols[stopPosition].classList.remove('winning-symbol');
                        }, 1000);
                    }
                }
            });
        });
        
        // Animate lever
        gsap.to('.slot-lever', {
            rotation: -30,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut"
        });
    }
    
    // Animate slot machine periodically
    setInterval(animateSlotReels, 5000);
    
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero title animation
    gsap.to('.title-word-1', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2
    });
    
    gsap.to('.title-word-2', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5
    });
    
    gsap.to('.title-word-3', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8
    });
    
    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.2
    });
    
    gsap.to('.neon-btn', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.5
    });
    
    // About section animation
    gsap.from('.about-text', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.about-image', {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        onComplete: animateStats
    });
    
    // Features animation
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '.features',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Gameplay animation
    gsap.from('.gameplay-video', {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
            trigger: '.gameplay',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.gameplay-text', {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '.gameplay',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    // Testimonials animation
    gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            delay: i * 0.2,
            scrollTrigger: {
                trigger: '.testimonials',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Contact animation
    gsap.from('.contact-info', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.contact-form', {
        opacity: 0,
        x: 50,
        duration: 0.8,
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    // Random glitch effect on header
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.glitch');
        glitchElements.forEach(el => {
            el.classList.add('glitch-active');
            setTimeout(() => {
                el.classList.remove('glitch-active');
            }, 200);
        });
    }, 5000);
    
    // Video Player Functionality
    const video = document.getElementById('gameplay-video');
    const playBtn = document.getElementById('play-btn');
    const muteBtn = document.getElementById('mute-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const videoOverlay = document.querySelector('.video-overlay');
    
    // Play/Pause functionality
    playBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            videoOverlay.classList.add('hidden');
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            videoOverlay.classList.remove('hidden');
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Show controls on video hover
    video.addEventListener('mouseenter', function() {
        if (!video.paused) {
            videoOverlay.style.opacity = '0.8';
            videoOverlay.style.pointerEvents = 'auto';
        }
    });
    
    video.addEventListener('mouseleave', function() {
        if (!video.paused) {
            videoOverlay.style.opacity = '0';
            videoOverlay.style.pointerEvents = 'none';
        }
    });
    
    // Video ended event
    video.addEventListener('ended', function() {
        videoOverlay.classList.remove('hidden');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
    
    // Mute/Unmute functionality
    muteBtn.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            video.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });
    
    // Fullscreen functionality
    fullscreenBtn.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
    
    // Click on video to play/pause
    video.addEventListener('click', function() {
        playBtn.click();
    });
});