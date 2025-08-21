chrome.runtime.onMessage.addListener((msg) => {
  if(msg.type === "updatePresence") {
    const token = localStorage.getItem("discord_access_token");
    if(!token) return;
    fetch("https://discord.com/api/v10/users/@me/settings", {
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    }).then(res => console.log("Presence updated", res.status));
  }
});
