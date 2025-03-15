document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const barIcon = document.querySelector(".bar_icon");
    const panelOps = document.querySelector(".panel-ops");

    barIcon.addEventListener("click", () => {
        panelOps.classList.toggle("active");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const searchBox = document.getElementById("searchMenu");
        const menuItems = document.querySelectorAll(".menu-item");

        searchBox.addEventListener("input", function () {
            const searchText = searchBox.value.toLowerCase();

            menuItems.forEach(item => {
                const foodText = item.innerText.toLowerCase();
                item.style.display = foodText.includes(searchText) ? "block" : "none";
            });
        });
    });

    // Handle sign-in click
    const signIn = document.querySelector(".sign_in");
    signIn.addEventListener("click", () => {
        alert("Redirecting to Sign-in page...");
    });

    // Handle Locate Us click
    const locateUs = document.querySelector(".location_icon a");
    locateUs.addEventListener("click", () => {
        alert("Opening location map...");
    });

    // Order Now button
    const orderBtn = document.querySelector(".Order_btn");
    orderBtn.addEventListener("click", () => {
        alert("Redirecting to the order page...");
    });

    // Handle feedback input
    const feedbackInput = document.querySelector(".feedback input");
    feedbackInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            alert("Thank you for your feedback!");
            feedbackInput.value = "";
        }
    });

    // Social media icons click alert
    const socialIcons = document.querySelectorAll(".icon i");
    socialIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            alert("Redirecting to social media page...");
        });
    });
});
