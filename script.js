
ScrollReveal(
{
// reset: true,
distance: "120px",
duration: 2000,
delay: 200
}
);


ScrollReveal().reveal('.intro-logo , .m-logo , .g-btn ,.aud ', { origin: 'top' });
ScrollReveal().reveal('.content-box, .main-heading, .discription ', { origin: 'right' });
ScrollReveal().reveal('.box,  .main-logo , .nav-logo ', { origin: 'left' });
ScrollReveal().reveal('.btn ', { origin: 'bottom' });

 
 
//  gsap.from('.item', {
//     x: 400,
//     opacity: 0,
//     delay: 0.5,
//     duration: 2,
//     stagger: 0.2,
//     ease: 'bounce.out',
//     force3D: true,
// })

        
// gsap.from('.update-box', {
//     delay: 0.5,
//     x: 50,
//     // scale: 0.02,
//     // stagger: 3,
//     ease: 'elastic',
//     duration: 1,
// })     
 