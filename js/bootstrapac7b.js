var Drupal=Drupal||{};!function(o,t){"use strict";t.behaviors.bootstrap={attach:function(t){o(t).find(".tabbable").once("bootstrap-tabs",(function(){var t=o(this),a=t.find(".nav-tabs"),r=t.find(".tab-content"),e=parseInt(r.css("borderBottomRightRadius"),10),s=function(){(t.hasClass("tabs-left")||t.hasClass("tabs-right"))&&r.css("min-height",a.outerHeight())};s(),(t.hasClass("tabs-left")||t.hasClass("tabs-right"))&&a.on("shown.bs.tab",'a[data-toggle="tab"]',(function(a){s(),t.hasClass("tabs-left")?o(a.target).parent().is(":first-child")?r.css("borderTopLeftRadius","0"):r.css("borderTopLeftRadius",e+"px"):o(a.target).parent().is(":first-child")?r.css("borderTopRightRadius","0"):r.css("borderTopRightRadius",e+"px")}))}))}},t.behaviors.bootstrapFormHasError={attach:function(t,a){a.bootstrap&&a.bootstrap.formHasError&&o(t).find(".form-item.has-error:not(.form-type-password.has-feedback)").once("error",(function(){var t=o(this),a=t.find(":input");a.on("keyup focus blur",(function(){var o=a.val()||!1;t[o?"removeClass":"addClass"]("has-error"),a[o?"removeClass":"addClass"]("error")}))}))}},t.behaviors.bootstrapPopovers={attach:function(t,a){if(a.bootstrap&&a.bootstrap.popoverEnabled&&o.fn.popover){if(a.bootstrap.popoverOptions.triggerAutoclose){var r=null;o(document).on("show.bs.popover","[data-toggle=popover]",(function(){var t=o(this);"click"===t.data("bs.popover").options.originalTrigger&&(r&&!r.is(t)&&r.popover("hide"),r=t)})).on("click",(function(t){var a=o(t.target);a.is("[data-toggle=popover]")&&a.data("bs.popover");!r||a.is("[data-toggle=popover]")||a.closest(".popover.in")[0]||(r.popover("hide"),r=null)}))}for(var e=o(t).find("[data-toggle=popover]").toArray(),s=0;s<e.length;s++){var n=o(e[s]),i=o.extend({},o.fn.popover.Constructor.DEFAULTS,a.bootstrap.popoverOptions,n.data());i.originalTrigger=i.trigger,"click"===i.trigger&&(i.trigger="manual");var p=o(i.target||n.is('a[href^="#"]')&&n.attr("href")).clone();!i.content&&p[0]&&(p.removeClass("element-invisible hidden").removeAttr("aria-hidden"),i.content=p.wrap("<div/>").parent()[i.html?"html":"text"]()||""),n.popover(i),"click"===i.originalTrigger&&n.off("click.drupal.bootstrap.popover").on("click.drupal.bootstrap.popover",(function(t){o(this).popover("toggle"),t.preventDefault(),t.stopPropagation()}))}}},detach:function(t,a){a.bootstrap&&a.bootstrap.popoverEnabled&&o.fn.popover&&o(t).find('[data-toggle="popover"]').off("click.drupal.bootstrap.popover").popover("destroy")}},t.behaviors.bootstrapTooltips={attach:function(t,a){if(a.bootstrap&&a.bootstrap.tooltipEnabled)for(var r=o(t).find('[data-toggle="tooltip"]').toArray(),e=0;e<r.length;e++){var s=o(r[e]),n=o.extend({},a.bootstrap.tooltipOptions,s.data());s.tooltip(n)}}};var a=o();t.behaviors.bootstrapAnchors={attach:function(t,r){var e,s=["html","body"];if(!a.length)for(e=0;e<s.length;e++){var n=o(s[e]);if(n.scrollTop()>0){a=n;break}if(n.scrollTop(1),n.scrollTop()>0){n.scrollTop(0),a=n;break}}if(r.bootstrap&&"1"===r.bootstrap.anchorsFix){var i=o(t).find("a").toArray();for(e=0;e<i.length;e++)i[e].scrollTo||this.bootstrapAnchor(i[e]);a.once("bootstrap-anchors",(function(){a.on("click.bootstrap-anchors",'a[href*="#"]:not([data-toggle],[data-target],[data-slide])',(function(o){this.scrollTo&&this.scrollTo(o)}))}))}},bootstrapAnchor:function(r){r.validAnchor="A"===r.nodeName&&(location.hostname===r.hostname||!r.hostname)&&r.hash.replace(/#/,"").length>0,r.scrollTo=function(e){var s="id",n=o(r.hash);if(n.length||(s="name",n=o('[name="'+r.hash.replace("#","")+'"]')),this.validAnchor||n.length){var i=n.offset().top-parseInt(a.css("paddingTop"),10)-parseInt(a.css("marginTop"),10);if(i>0){e&&e.preventDefault();var p=o("<div/>").addClass("element-invisible").attr(s,n.attr(s)).css({position:"absolute",top:i+"px",zIndex:-1e3}).appendTo(a);n.removeAttr(s);var l=function(){location.hash=r.hash,p.remove(),n.attr(s,r.hash.replace("#",""))};t.settings.bootstrap.anchorsSmoothScrolling?a.animate({scrollTop:i,avoidTransforms:!0},400,l):(a.scrollTop(i),l())}}}}},t.theme.tableDragChangedMarker=function(){return'<span class="tabledrag-changed glyphicon glyphicon-warning-sign text-warning"></span>'},t.theme.tableDragChangedWarning=function(){return'<div class="tabledrag-changed-warning alert alert-warning messages warning">'+t.theme("tableDragChangedMarker")+" "+t.t("Changes made in this table will not be saved until the form is submitted.")+"</div>"}}(jQuery,Drupal);