document.addEventListener("DOMContentLoaded", () => {

    trans_img = document.getElementById("transcendence_img")

    if (trans_img)
    {
        trans_img.addEventListener("mouseenter", () => {
            trans_img.src = "assets/transcendence.gif";
        });

        trans_img.addEventListener("mouseleave", () => {
            trans_img.src = "assets/transcendence_main.jpg";
        });
    }

    cub3d_img = document.getElementById("cub3d_img")

    if (cub3d_img)
    {
        cub3d_img.addEventListener("mouseenter", () => {
            cub3d_img.src = "assets/cub3d.gif";
        });

        cub3d_img.addEventListener("mouseleave", () => {
            cub3d_img.src = "assets/1.png";
        });
    }

});