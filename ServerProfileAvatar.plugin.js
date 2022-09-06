 /**
 * @name ServerProfileAvatar
 * @author Armnajafi
 * @description  A plugin to download the profile picture inside the profile server
 * @version 0.0.1
 * @invite dXFaduAzdr
 * @authorId 918209161769148506
 * @authorLink https://my.armnajafi.ir
 * @website https://github.com/Armnajafi/
 * @source https://github.com/Armnajafi/discord-server-profile-avatar-plugin/
 */

module.exports = class ServerProfileAvatar {
	
	ServerAvatar(){
			setTimeout(() => {
				if(document.getElementsByClassName("layer-2aCOJ3")[0]){
					if(document.getElementsByClassName("miniAvatar-dnzs_w")[0]){
						let serverAvatar = document.getElementsByClassName("avatar-2Vndt_")[0].children[0].children[0].children[0].children[0].src;
					
						if(document.getElementsByClassName("headerTagWithNickname-1U8zZH")[0]){
							if(document.getElementsByClassName("server-avatar-downloadLink").length > 0) return;
							let HeaderTag = document.getElementsByClassName("headerTagWithNickname-1U8zZH")[0]
							
							let DownloadLink = document.createElement("a");
							DownloadLink.innerHTML = "Server Avatar";
							DownloadLink.style="color: #3365ab;float: right;font-weight: 900;";
							DownloadLink.href = serverAvatar;
							DownloadLink.className = "server-avatar-downloadLink";
							DownloadLink.target = "_blank"

							HeaderTag.append(DownloadLink);
						}
					}
				}
			} , 900)
   }
	
   constructor(meta) {
	    if (window.ZLibrary) {
				ZLibrary.PluginUpdater.checkForUpdate(
				  this.getName(),
				  this.getVersion(),
				  "https://github.com/Armnajafi/discord-server-profile-avatar-plugin/ServerProfileAvatar.plugin.js"
				);
	    }
			BdApi.showToast("ServerProfileAvatar is Ready to start", {type: "success"});
	}
	
    start() {
     	document.addEventListener("click" , this.ServerAvatar)
		BdApi.showToast("ServerProfileAvatar is Started", {type: "success"});
    } 
	
    stop() {
        document.removeEventListener("click" , this.ServerAvatar)
		BdApi.showToast("ServerProfileAvatar is Stoped");
    }
}
