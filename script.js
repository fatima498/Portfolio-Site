document.querySelectorAll('.skill-btn').forEach(button => {
  button.addEventListener('mouseenter', function() {
    const skill = this.getAttribute('data-skill');

    // Hide all skill images first
    document.querySelectorAll('.skill-image').forEach(image => {
      image.classList.remove('active');
    });

    // Show the selected skill's image
    document.getElementById(`${skill}-img`).classList.add('active');
  });

  button.addEventListener('mouseleave', function() {
    document.querySelectorAll('.skill-image').forEach(image => {
      image.classList.remove('active');
    });
  });
});





const ham = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebarMenu');

ham.addEventListener("click", ()=>{
  ham.classList.toggle("active");
  sidebar.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  ham.classList.remove('active');
  sidebar.classList.remove('active');
}))


