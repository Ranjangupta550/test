document.addEventListener("DOMContentLoaded", function() {
    // Navbar Background Change on Scroll
    window.addEventListener("scroll", function() {
        let navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Button Click Event
    document.getElementById("changeText").addEventListener("click", function() {
        this.innerText = "You Clicked Me!";
        this.classList.toggle("btn-success");
    });

    // Read More Button Click
    let readMoreBtns = document.querySelectorAll(".readMoreBtn");
    readMoreBtns.forEach(button => {
        button.addEventListener("click", function() {
            alert("You clicked Read More!");
        });
    });
});
