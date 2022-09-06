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
	stop() {}
    start() {
		this.stop = document.removeEventListener.bind(document, "click", SPAFunction, true);
		function SPAFunction({ target }){
			if (target.classList.contains("avatar-2Vndt_") && document.getElementsByClassName("miniAvatar-dnzs_w")[0]) {
				BdApi.showConfirmationModal("ServerProfileAvatar", `Do you want to see picture?`, {
					confirmText: "Download Now",
					cancelText: "Cancel",
					onCancel: _ => {},
					onConfirm: _ => {
						window.open(target.querySelector("img").src.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"), "_blank");
					}
				});
		    }
		}

     	document.addEventListener("click" , SPAFunction, true)
		BdApi.showToast("ServerProfileAvatar is Started", {type: "success"});
    } 
}
