$("input").focus((function(){$(this).parent().addClass("active"),$("input").focusout((function(){""==$(this).val()?$(this).parent().removeClass("active"):$(this).parent().addClass("active")}))})),$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#navbar").addClass("sticky"):$("#navbar").removeClass("sticky")})),$(window).on("scroll",(function(){$(window).scrollTop()>200?$("#land-nav").addClass("sticky"):$("#land-nav").removeClass("sticky")})),function(){"use strict";var e=document.querySelectorAll(".timeline li");function n(){for(var n=0;n<e.length;n++)t=e[n],o=void 0,(o=t.getBoundingClientRect()).top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)&&e[n].classList.add("in-view");var t,o}window.addEventListener("load",n),window.addEventListener("resize",n),window.addEventListener("scroll",n)}();const openBtn=document.querySelector("#hamburger-1"),closeBtn=document.querySelector("#hamburger-2"),nav_list=document.querySelector(".land-nav"),overlay=document.querySelector(".overlay"),navContact=document.querySelector(".nav-contact");function mobileMenu(){openBtn.classList.toggle("active"),nav_list.classList.toggle("active")}function mobileMenuClose(){openBtn.classList.remove("active"),nav_list.classList.remove("active")}overlay.classList.add("hidden"),openBtn.addEventListener("click",mobileMenu),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>100?$("#scroll").fadeIn():$("#scroll").fadeOut()})),$("#scroll").click((function(){return $("html, body").animate({scrollTop:0},600),!1}))}));