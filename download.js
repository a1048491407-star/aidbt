const userAgent = navigator.userAgent.toLowerCase();
const currentPlatform = userAgent.includes("mac") ? "mac" : userAgent.includes("win") ? "windows" : null;

if (currentPlatform) {
  const panel = document.querySelector(`[data-platform="${currentPlatform}"]`);
  panel?.classList.add("is-recommended");
  const badge = panel?.querySelector(".recommended-badge");
  if (badge) badge.hidden = false;
}
