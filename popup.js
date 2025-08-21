const clientId = "1408024385243189388";
const redirectUri = "https://oeamo13.github.io/fff/oauth2-redirect.html"; // رابطك الصحيح

const oauth2Url = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=identify+guilds+rpc.activities.write`;

document.getElementById("connect").addEventListener("click", () => {
  window.open(oauth2Url, "_blank", "width=500,height=800");
});
