/* *********************************************
* NativeSoft NativeDoc  ************************
************************************************
* Go to http://www.nativesoft.fr/nativedoc for more information about
* NativeDoc code documentation tool.
************************************************
* JavaScript file.
* Version: 1.6
************************************************ */

var h = $(window).height();

$(function() {
    // If the variable "print" = "print" then the page is displayed in format for printing.
    // So disabling all javascript.
    if (getValue("print") != "print")
    {
        $("#Splitter").height(h - $("#block-header").height() - $("#block-footer").height() -4);
        $("#Splitter").splitter({
            outline: true,
            minLeft: 0,
            sizeLeft: 300,
            minRight: 150,
            resizeToWidth: true,
            cookie: "nativedoc_splitter",
            cookiePath: "/",
            cookieExpires: 365,
            anchorToWindow: true
        });
        
        if ($("#css").attr("href") == "../Style/ndoc.css") prefix="../Style/Icons"
        else prefix="Style/Icons"
        
        tIsIE6 = false;
        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
            var ieversion=new Number(RegExp.$1)
            tIsIE6 = (ieversion>=5 && ieversion <= 7);
        }

        if (tIsIE6 == false) {
            tree1 = jQuery.tree.create();
            tree1.init($("#jsTree"), {
                ui : {
                    animation : 0
                },
                types : {
                    "default" : { draggable : false },
                    "button" : {icon : {image : prefix +"/button.png"}},
                    "card" : {icon : {image : prefix +"/card.png"}},
                    "command" : {icon : {image : prefix +"/command.png"}},
                    "command_private" : {icon : {image : prefix +"/command_private.png"}},
                    "constant" : {icon : {image : prefix +"/constant.png"}},
                    "error" : {icon : {image : prefix +"/error.png"}},
                    "external" : {icon : {image : prefix +"/external.png"}},
                    "field" : {icon : {image : prefix +"/field.png"}},
                    "function" : {icon : {image : prefix +"/function.png"}},
                    "function_private" : {icon : {image : prefix +"/function_private.png"}},
                    "getprop" : {icon : {image : prefix +"/getprop.png"}},
                    "getprop_private" : {icon : {image : prefix +"/getprop_private.png"}},
                    "global" : {icon : {image : prefix +"/global.png"}},
                    "graphic" : {icon : {image : prefix +"/graphic.png"}},
                    "group" : {icon : {image : prefix +"/group.png"}},
                    "handler" : {icon : {image : prefix +"/handler.png"}},
                    "handler_private" : {icon : {image : prefix +"/handler_private.png"}},
                    "image" : {icon : {image : prefix +"/image.png"}},
                    "library" : {icon : {image : prefix +"/library.png"}},
                    "local" : {icon : {image : prefix +"/local.png"}},
                    "on" : {icon : {image : prefix +"/on.png"}},
                    "on_private" : {icon : {image : prefix +"/on_private.png"}},
                    "package" : {icon : {image : prefix +"/package.png"}},
                    "player" : {icon : {image : prefix +"/player.png"}},
                    "scrollbar" : {icon : {image : prefix +"/scrollbar.png"}},
                    "setprop" : {icon : {image : prefix +"/setprop.png"}},
                    "setprop_private" : {icon : {image : prefix +"/setprop_private.png"}},
                    "stack" : {icon : {image : prefix +"/stack.png"}},
                    "substack" : {icon : {image : prefix +"/substack.png"}}
                }
            });
        }
        else {
            // Replacing 'rel' with class="<rel>"
            $("#jsTree li").each( function(index) {
                var rel = $(this).attr("rel");
                if (typeof(rel) != "undefined" && rel != "") {
                    $(this).children("a").attr("class", rel);
                    $(this).children("a").children("ins").remove();
                    if (typeof(gPage) != 'undefined' && gPage != "" && gPage == $(this).attr("id")) {
                        tText = $(this).children("a").text();
                        $(this).children("a").remove();
                        $(this).before("<b class='"+ rel +"'>"+ tText +"</b>");
                    }
                }
            });
        }
        
        if (typeof(gPage) != 'undefined' && gPage != "")
        {
            var offset = $('#'+ gPage).offset();
            if (tIsIE6 == false) {
                tree1.select_branch($('#'+ gPage));
                tree1.open_branch($('#'+ gPage));
                if ($("#jsTree").scrollTop() > 0 || offset.top > Math.round($("#jsTree").height() /1.3))
                    $("#jsTree").scrollTop($("#jsTree").scrollTop() + Math.round($("#jsTree").height() /2));
            }
            else $("#jsTree").scrollTop(offset.top - Math.round($("#jsTree").height() /2));
        }

        // Flicker free treeview.
        $("#block-body").css("visibility", "visible");
        $("#jsTree").css("visibility", "visible");
    }
    else
    {
        if ($("#css").attr("href") == "../Style/ndoc.css")
            $("#css").attr("href", "../Style/ndoc_print.css");
        else
            $("#css").attr("href", "Style/ndoc_print.css");
        window.print();
    }
});

function resize()
{
    if (getValue("print") != "print") {
        var h = $(window).height();
        $("#Splitter").height(h - $("#block-header").height() - $("#block-footer").height() -4);
        $("#mainblock").height(h - $("#block-footer").height());
    }
}

function getValue(varname)
{
    var url = window.location.href;
    var qparts = url.split("?");
    if (qparts.length <= 1)
        return "";
    var query = qparts[1];
    var vars = query.split("&");
    var value = "";

    for (i=0;i<vars.length;i++) {
        var parts = vars[i].split("=");
        if (parts[0] == varname) {
            value = parts[1];
            break;
        }
    }
    value = unescape(value);
    value.replace(/\+/g," ");
    return value;
}