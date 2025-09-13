/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', (e) =>{
        e.preventDefault()
        e.stopPropagation()
        navMenu.classList.add('show-menu')
        // Adicionar overlay para fechar o menu ao clicar fora
        document.body.classList.add('menu-open')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', (e) =>{
        e.preventDefault()
        e.stopPropagation()
        navMenu.classList.remove('show-menu')
        document.body.classList.remove('menu-open')
    })
}

/*===== FECHAR MENU AO CLICAR FORA =====*/
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('show-menu')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu')
            document.body.classList.remove('menu-open')
        }
    }
})

/*===== FECHAR MENU COM ESC =====*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu')
        document.body.classList.remove('menu-open')
    }
})

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    document.body.classList.remove('menu-open')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__content`)
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.section__header`, {delay: 200})
sr.reveal(`.feature`, {interval: 200})
sr.reveal(`.tester__content`, {delay: 200})
sr.reveal(`.tester__form`, {delay: 400, origin: 'right'})
sr.reveal(`.about__content`, {delay: 200})
sr.reveal(`.about__image`, {delay: 400, origin: 'left'})

/*=============== DARK THEME TOGGLE ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SMOOTH SCROLLING FOR ANCHOR LINKS ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight
            const targetPosition = target.offsetTop - headerHeight
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    })
})

/*=============== INTERSECTION OBSERVER FOR ANIMATIONS ===============*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
        }
    })
}, observerOptions)

// Observe all sections and features
document.querySelectorAll('section, .feature, .stat').forEach(el => {
    observer.observe(el)
})

/*=============== LOADING ANIMATION ===============*/
window.addEventListener('load', () => {
    document.body.classList.add('loaded')
    
    // Hide loading spinner if exists
    const loader = document.querySelector('.loader')
    if (loader) {
        loader.style.display = 'none'
    }
})

/*=============== MOBILE MENU CLOSE ON OUTSIDE CLICK ===============*/
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    
    if (navMenu.classList.contains('show-menu')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu')
        }
    }
})

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Lazy loading for images
const images = document.querySelectorAll('img[data-src]')
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
        }
    })
})

images.forEach(img => imageObserver.observe(img))

/*=============== ANALYTICS TRACKING ===============*/
// Track button clicks
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent || button.alt || 'Unknown Button'
        console.log(`Button clicked: ${buttonText}`)
        
        // Here you can add Google Analytics tracking
        // gtag('event', 'click', {
        //     'event_category': 'Button',
        //     'event_label': buttonText
        // })
    })
})

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionName = entry.target.id || entry.target.className
            console.log(`Section viewed: ${sectionName}`)
            
            // Here you can add Google Analytics tracking
            // gtag('event', 'view', {
            //     'event_category': 'Section',
            //     'event_label': sectionName
            // })
        }
    })
}, { threshold: 0.5 })

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section)
})

/*=============== ERROR HANDLING ===============*/
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error)
    // Here you can send error reports to your analytics service
})

/*=============== ACCESSIBILITY IMPROVEMENTS ===============*/
// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    const navMenu = document.getElementById('nav-menu')
    
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu')
    }
})

// Focus management
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation')
    }
})

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation')
})

/*=============== PWA SUPPORT ===============*/
// Register service worker if available
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration)
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError)
            })
    })
}

/*=============== PERFORMANCE MONITORING ===============*/
// Monitor page load performance
window.addEventListener('load', () => {
    setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0]
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart
        
        console.log(`Page load time: ${loadTime}ms`)
        
        // Here you can send performance data to your analytics
        // gtag('event', 'timing_complete', {
        //     'name': 'load',
        //     'value': loadTime
        // })
    }, 0)
})

/*=============== UTILITY FUNCTIONS ===============*/
// Debounce function for performance
function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle
    return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(scrollActive, 100))
window.addEventListener('scroll', throttle(scrollUp, 100))

/*=============== TESTER FORM SUBMISSION ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const testerForm = document.getElementById('testerForm');
    const formMessage = document.getElementById('formMessage');
    
    if (testerForm) {
        testerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(testerForm);
            const data = {
                name: formData.get('name'),
                age: formData.get('age'),
                email: formData.get('email'),
                phone: formData.get('phone')
            };
            
            // Show loading state
            const submitBtn = testerForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Enviando...';
            submitBtn.disabled = true;
            
            try {
                // Send email using EmailJS or similar service
                // For now, we'll use a simple mailto approach
                const subject = 'Nova Inscrição - Testador Beta QRZap';
                const body = `
Nova inscrição para o programa de testadores beta do QRZap:

Nome: ${data.name}
Idade: ${data.age}
E-mail: ${data.email}
Modelo do Celular: ${data.phone}

Data da inscrição: ${new Date().toLocaleString('pt-BR')}
                `;
                
                // Create mailto link
                const mailtoLink = `mailto:evandrotielcop@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                showMessage('Inscrição enviada com sucesso! Verifique seu cliente de e-mail.', 'success');
                
                // Reset form
                testerForm.reset();
                
            } catch (error) {
                console.error('Erro ao enviar inscrição:', error);
                showMessage('Erro ao enviar inscrição. Tente novamente.', 'error');
            } finally {
                // Restore button state
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    function showMessage(text, type) {
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.className = `mt-3 text-center alert alert-${type === 'success' ? 'success' : 'danger'}`;
            formMessage.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
});

