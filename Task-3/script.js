document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a') ;
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault() ;
            alert(`Navigating to ${link.textContent}`) ;
        }) ;
    }) ;

    const socialLinks = document.querySelectorAll('.links a') ;
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault() ;
            window.open(link.href, '_blank') ;
        }) ;
    }) ;

    const professions = ['Web Developer', 'UI/UX Designer', 'Software Engineer'] ;
    let current = 0 ;
    let i = 0 ;
    let isDeleting = false ;
    const h2 = document.querySelector('h2') ;

    function type() {
        const text = professions[current] ;
        if (isDeleting) {
            h2.innerHTML = `I'm a ${text.substring(0, i--)}<span class="cursor"></span>` ;
            if (i < 0) {
                isDeleting = false ;
                current = (current + 1) % professions.length ;
                setTimeout(type, 500) ;
                return ;
            }
        } else {
            h2.innerHTML = `I'm a ${text.substring(0, i++)}<span class="cursor"></span>` ;
            if (i > text.length) {
                isDeleting = true ;
                setTimeout(type, 1500) ;
                return ;
            }
        }
        setTimeout(type, isDeleting ? 50 : 100) ;
    }
    type() ;
}) ;