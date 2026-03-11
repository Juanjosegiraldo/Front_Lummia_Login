(function () {

    // Toggle login/register view
    const goLogin = document.querySelector("#go-login");
    const goRegister = document.querySelector("#go-register");
    const container = document.querySelector(".container");

    const toggle = () => {
        if (container.classList.contains("go-register")) {
            container.classList.remove("go-register");
            container.classList.add("go-login");
        } else {
            container.classList.remove("go-login");
            container.classList.add("go-register");
        }
    };

    goLogin.addEventListener("click", toggle);
    goRegister.addEventListener("click", toggle);

    // Generate falling leaves
    const leavesContainer = document.getElementById("leaves-container");
    const leafColors = ["leaf--green", "leaf--lime", "leaf--emerald", "leaf--teal", "leaf--dark"];
    const LEAF_COUNT = 18;

    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");

        // Pick a random color
        const colorClass = leafColors[Math.floor(Math.random() * leafColors.length)];
        leaf.classList.add(colorClass);

        // Random horizontal position
        leaf.style.left = Math.random() * 100 + "%";

        // Random size (12px to 30px)
        const size = 12 + Math.random() * 18;
        leaf.style.setProperty("--leaf-size", size + "px");

        // Random animation duration (6s to 16s)
        const duration = 6 + Math.random() * 10;
        leaf.style.animationDuration = duration + "s";

        // Random delay so they don't all start at once
        const delay = Math.random() * 12;
        leaf.style.animationDelay = delay + "s";

        leavesContainer.appendChild(leaf);
    }

    for (let i = 0; i < LEAF_COUNT; i++) {
        createLeaf();
    }

})();
