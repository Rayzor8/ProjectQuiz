
// active navbar Script
const activeNavbar = document.querySelectorAll('.navbar-nav .nav-target a');
// kalau mau tambah konten navbar tambah class nav-target pada html nav-item ,
activeNavbar.forEach((navLink) => {
  navLink.addEventListener('click', () => {
      
    activeNavbar.forEach((active) => {
      active.classList.remove('active');
    });

    navLink.classList.add('active');
  });
});
