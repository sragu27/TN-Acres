 // Header HTML
const headerHTML = `
<nav class="navbar navbar-expand-lg bg-light fixed-top shadow">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img class="img-fluid" src="assets/images/logo-brand.png" alt="brand-img">
    </a>

    <!-- Toggle button for small screens -->
    <button class="menu-toggle" id="menuToggle">
      <i class="bi bi-list"></i>
    </button>

    <!-- Normal menu for large screens -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarMain">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active fs-5" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link fs-5" href="about.html">About Us</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5" href="#" id="propertyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Property List
          </a>
          <ul class="dropdown-menu" aria-labelledby="propertyDropdown">
            <li><a class="dropdown-item" href="residential.html">Residential</a></li>
            <li><a class="dropdown-item" href="commercial.html">Commercial</a></li>
            <li><a class="dropdown-item" href="industrial.html">Industrial</a></li>
            <li><a class="dropdown-item" href="land.html">Land/Plots</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link fs-5" href="contact.html">Contact Us</a></li>
        <li class="nav-item ms-lg-3">
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
        </li>
        <li class="nav-item ms-lg-3">
         <button class="btn btn-primary  w-100" onclick="window.location.href='post-property.html'">
          Post Property
        </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Sidebar menu -->
<div id="sidebar">
  <a href="index.html" class="nav-link fs-5">Home</a>
  <a href="about.html" class="nav-link fs-5">About Us</a>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Property List
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="residential.html">Residential</a></li>
      <li><a class="dropdown-item" href="commercial.html">Commercial</a></li>
      <li><a class="dropdown-item" href="industrial.html">Industrial</a></li>
      <li><a class="dropdown-item" href="land.html">Land/Plots</a></li>
    </ul>
  </div>
  <a href="contact.html" class="nav-link fs-5">Contact Us</a>
  <button class="btn btn-primary mt-3 w-100" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
 <a href="post-property.html" class="btn btn-primary mt-3 w-100">Post Property</a>
   
</div>
<div id="overlay"></div>
`;

// Footer HTML
const footerHTML = `
<footer class="footer text-white pt-5 pb-4">
  <div class="container">
    <div class="row gy-4">
      <div class="col-md-4">
        <a class="mb-3" href="index.html"><img class="img-fluid" src="assets/images/logo.png" alt="img-logo"></a>
        <p class="text-light mt-3">Empowering your financial future with fast, flexible, and transparent loan solutions tailored for individuals and businesses.</p>
      </div>
      <div class="col-md-2">
        <h6 class="mb-3 text-uppercase">Quick Links</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="index.html" class="text-light text-decoration-none">Home</a></li>
          <li class="mb-2"><a href="about.html" class="text-light text-decoration-none">About</a></li>
          <li class="mb-2"><a href="service.html" class="text-light text-decoration-none">Services</a></li>
          <li class="mb-2"><a href="contact.html" class="text-light text-decoration-none">Contact</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h6 class="mb-3 text-uppercase">Our Services</h6>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="service.html" class="text-light text-decoration-none">Business Loan</a></li>
          <li class="mb-2"><a href="service.html" class="text-light text-decoration-none">Personal Loan</a></li>
          <li class="mb-2"><a href="service.html" class="text-light text-decoration-none">Education Loan</a></li>
          <li class="mb-2"><a href="service.html" class="text-light text-decoration-none">Auto Loan</a></li>
        </ul>
      </div>
      <div class="col-md-3">
        <h6 class="mb-3 text-uppercase">Contact</h6>
        <p class="mb-2"><i class="bi bi-geo-alt-fill me-2"></i>No 23A, S G Tower, Abusali street, Saligramam, Chennai</p>
        <p class="mb-2"><i class="bi bi-telephone-fill me-2"></i> +91 8825513746</p>
        <p class="mb-2"><i class="bi bi-envelope-fill me-2"></i> msmedevelopments@gmail.com</p>
        <div class="mt-3">
          <a href="#" class="text-white me-3"><i class="bi bi-facebook fs-5"></i></a>
          <a href="#" class="text-white me-3"><i class="bi bi-instagram fs-5"></i></a>
          <a href="#" class="text-white me-3"><i class="bi bi-twitter fs-5"></i></a>
          <a href="#" class="text-white"><i class="bi bi-linkedin fs-5"></i></a>
        </div>
      </div>
    </div>
    <div class="text-center mt-4 pt-3 border-top border-secondary">
      <small class="text-light">&copy; 2025 Ess-Matrix Infotech Pvt. Ltd. All rights reserved.</small>
    </div>
  </div>
</footer>
`;

// Inject header & footer
document.addEventListener("DOMContentLoaded", () => {
  if(document.getElementById("header")){
    document.getElementById("header").innerHTML = headerHTML;
  }
  if(document.getElementById("footer")){
    document.getElementById("footer").innerHTML = footerHTML;
  }
});
 
 
 
 
 // SIDE NAVBAR CODE ------------START
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelectorAll("#sidebar .nav-link");
  const menuToggleIcon = menuToggle.querySelector("i");

    const MOBILE_BREAKPOINT = 769; 
  // Toggle sidebar open/close
  function toggleSidebar(open) {
    if (open) {
      sidebar.style.left = "0";
      overlay.style.display = "block";
      sidebar.style.display ="block";
      //menuToggle.innerHTML = "&times;";
      menuToggleIcon.className = "bi bi-x-circle-fill"; // change to X
    } else {
      sidebar.style.left = "-250px";
      overlay.style.display = "none";
      sidebar.style.display ="none"
      //menuToggle.innerHTML = "&#9776;";
      menuToggleIcon.className = "bi bi-list"; // change to hamburger
    }
  }

  // Handle toggle button
  menuToggle.addEventListener("click", () => {
    if (window.innerWidth < MOBILE_BREAKPOINT) {
    const isOpen = sidebar.style.left === "0px";
    toggleSidebar(!isOpen);
  }
  });

  // Close sidebar when overlay clicked
  overlay.addEventListener("click", () => {
    toggleSidebar(false);
  });

  // Close sidebar and highlight active on nav link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      toggleSidebar(false);
    });
  });

  // Auto-close sidebar when switching to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= MOBILE_BREAKPOINT) {
    toggleSidebar(false);
  }
});



  // Highlight top menu item (desktop) based on scroll
  // const desktopLinks = document.querySelectorAll("#navbarMain .nav-link");
  // window.addEventListener("scroll", () => {
  //   let current = "";
  //   document.querySelectorAll("section").forEach(section => {
  //     if (pageYOffset >= section.offsetTop - 80) {
  //       current = section.id;
  //     }
  //   });

  //   [...navLinks, ...desktopLinks].forEach(link => {
  //     link.classList.remove("active");
  //     if (link.getAttribute("href") === `#${current}`) {
  //       link.classList.add("active");
  //     }
  //   });
  // });

//--------------------------------SIDE NAVBAR------------------------------------------END   

// Scroll to Top Button--------------------START
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/hide scroll-to-top button on scroll
window.addEventListener("scroll", () => {
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
} else {
    scrollTopBtn.style.display = "none";
}
});

// Scroll to top when button clicked
scrollTopBtn.addEventListener("click", () => {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});
//Scroll to Top Button ---------------------------END



