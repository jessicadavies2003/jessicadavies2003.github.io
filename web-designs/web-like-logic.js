const allLikeBtns = document.getElementsByClassName("like");
for (let i = 0; i < allLikeBtns.length; i++){
    const currBtn = allLikeBtns.item(i);
    let isLiked;

    if (window.localStorage.getItem(`weblikes${i+1}-isliked`)){
        isLiked = window.localStorage.getItem(`weblikes${i+1}-isliked`);
    } else {
        isLiked = 0;
    }

    currBtn.style.fontSize = "1.2em";
    let likes;

    if (window.localStorage.getItem(`weblikes${i+1}`)){
        likes = Number(window.localStorage.getItem(`weblikes${i+1}`));
    } else {
        likes = 0;
    }

    currBtn.textContent = `❤️ ${likes}`;
    currBtn.addEventListener("click", () => {
        if (isLiked == 0) {
            likes++;
            isLiked = 1;

            window.localStorage.setItem(`weblikes${i+1}`, String(likes));
            window.localStorage.setItem(`weblikes${i+1}-isliked`, String(isLiked));

            currBtn.textContent = `❤️ ${likes}`;

        } else if (isLiked == 1) {
            likes--;
            isLiked = 0;

            window.localStorage.setItem(`weblikes${i+1}`, String(likes));
            window.localStorage.setItem(`weblikes${i+1}-isliked`, String(isLiked));

            currBtn.textContent = `❤️ ${likes}`;
        }
    });
}