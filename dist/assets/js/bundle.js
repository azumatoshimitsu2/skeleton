var BREAK_POINTS={ltSP:767,gtTAB:768,ltTAB:992,gtPC:992};function accessibleGnavToggle(){var t=document.querySelector(".js-gnav-wrapper"),i=document.querySelectorAll(".js-gnav"),n=document.querySelector(".js-gnav-target");function e(){window.innerWidth>BREAK_POINTS.ltHbgMenu?n.classList.add("is-active"):n.classList.remove("is-active"),o(n)}function o(e){e.classList.contains("is-active")?(t.setAttribute("aria-expanded",!0),n.setAttribute("aria-hidden",!1),[].forEach.call(i,function(e){e.classList.add("is-active")})):(t.setAttribute("aria-expanded",!1),n.setAttribute("aria-hidden",!0),[].forEach.call(i,function(e){e.classList.remove("is-active")}))}function a(e){e.preventDefault(),n.classList.toggle("is-active"),o(n)}[].forEach.call(i,function(e){e.addEventListener("click",a)}),window.addEventListener("DOMContentLoaded",e),window.addEventListener("resize",e)}function addCurrentClass(){var i=location.pathname;document.querySelectorAll(".nav a").forEach(function(e,t){e.getAttribute("href")==i&&(e.classList.contains("throwgh")||e.classList.add("is-current"))})}function smoothscroll(){$('a:not(".no-scroll")').click(function(e){var t=$(this).attr("href");t.match(/#/)&&(t.match(/^#/)||(t="#"+(t=t.split("#"))[1]),0<$(t).length&&(e.preventDefault(),$("html, body").animate({scrollTop:$(t).offset().top},"fast")))})}function pcViewportFixed(){window.innerWidth>BREAK_POINTS.gtTAB&&document.querySelector('meta[name="viewport"]').setAttribute("content","width=1200")}function uajs(){var e=window.navigator.userAgent.toLowerCase();return{Tablet:-1!=e.indexOf("windows")&&-1!=e.indexOf("touch")||-1!=e.indexOf("ipad")||-1!=e.indexOf("android")&&-1==e.indexOf("mobile")||-1!=e.indexOf("firefox")&&-1!=e.indexOf("tablet")||-1!=e.indexOf("kindle")||-1!=e.indexOf("silk")||-1!=e.indexOf("playbook"),Mobile:-1!=e.indexOf("windows")&&-1!=e.indexOf("phone")||-1!=e.indexOf("iphone")||-1!=e.indexOf("ipod")||-1!=e.indexOf("android")&&-1!=e.indexOf("mobile")||-1!=e.indexOf("firefox")&&-1!=e.indexOf("mobile")||-1!=e.indexOf("blackberry")}}function spRemoveIshover(){var e=uajs();(e.Mobile||e.Tablet)&&document.querySelectorAll(".is-hover").forEach(function(e,t){e.classList.remove("is-hover")})}jQuery(document).ready(function(){accessibleGnavToggle(),addCurrentClass(),spRemoveIshover(),pcViewportFixed(),smoothscroll()});