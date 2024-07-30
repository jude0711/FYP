document.addEventListener('scroll', function() {
    const links = document.querySelectorAll('.nav-links ul li a');
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    links.forEach(link => {
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
