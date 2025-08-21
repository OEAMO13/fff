const clientId = "1408024385243189388";
const redirectUri = "https://oeamo13.github.io/fff/oauth2-redirect.html";
const scope = "identify guilds rpc.activities.write";

document.getElementById("connect").addEventListener("click", () => {
  const authUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${scope}`;

  chrome.identity.launchWebAuthFlow(
    {
      url: authUrl,
      interactive: true
    },
    (redirect_url) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }

      if (redirect_url) {
        const params = new URLSearchParams(new URL(redirect_url).hash.substring(1));
        const token = params.get("access_token");
        if (token) {
          console.log("✅ Token:", token);
          alert("Logged in! Token captured successfully.");
        } else {
          alert("❌ No token found");
        }
      }
    }
  );
});
