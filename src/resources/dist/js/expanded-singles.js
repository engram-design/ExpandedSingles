!function(n){var t=n("#page-container").find(".sitemenubtn:first"),e=Craft.getLocalStorage("BaseElementIndex.siteId");e||(e=Craft.primarySiteId);var a=function(t=null){n("#main-content #sidebar nav a[data-cp-nav]").each((function(e,a){var i,s=n(this).data("site-urls")[t];if(console.log("Expanded Singles: "+t+": "+s),s){var r=n(this).parent().find("a.cp-nav-link-mask");r.length?r.attr("href",s):(r=n('<a class="cp-nav-link-mask" href="'+s+'">'+n(this).text()+"</a>"),n(this).parent().append(r))}}))};Garnish.requestAnimationFrame(n.proxy((function(){t.length?(a(e),this.siteMenu=t.menubtn().data("menubtn").menu,this.siteMenu.on("optionselect",(function(t){var e=n(t.selectedOption);a(e.data("site-id"))}))):a(e)}),this))}(jQuery);