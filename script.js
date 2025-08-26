let count = 0;
const counter = document.getElementById("counter");
const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

// زر أحبها
likeBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// زر لا أحبها يهرب عند محاولة لمسه
dislikeBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - dislikeBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - dislikeBtn.offsetHeight);
  dislikeBtn.style.left = x + "px";
  dislikeBtn.style.top = y + "px";
});
