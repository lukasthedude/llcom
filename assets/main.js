// Relative timestamps: swap absolute dates for "N days ago" (calendar days)
document.querySelectorAll("time[datetime]").forEach(function (el) {
  var then = new Date(el.getAttribute("datetime"));
  var now = new Date();
  var startOf = function (d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  };
  var days = Math.round((startOf(now) - startOf(then)) / 86400000);
  if (isNaN(days) || days < 0) return;
  if (days === 0) {
    el.textContent = "today";
  } else if (days === 1) {
    el.textContent = "1 day ago";
  } else {
    el.textContent = days + " days ago";
  }
});

// Easter egg: clicking the profile image plays a sound
var avatar = document.querySelector(".avatar");
if (avatar) {
  var sound = null;
  avatar.addEventListener("click", function () {
    if (!sound) sound = new Audio(avatar.getAttribute("data-sound"));
    sound.currentTime = 0;
    sound.play();
  });
}
