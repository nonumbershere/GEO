// ==UserScript==
// @name         JAMAL CSGO MOD MENU CLIENT || MTSL CS:GO HACK
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Jamal Client, a cool hack for MTSL CSGO Clicker
// @author       Lapide & Leef
// @match        *://mtsl.dk/csgo/*
// @icon         data:image/jpeg;base64,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
// @grant        none
// @downloadURL  https://github.com/HarlemShakespeare/YOUR_REPO_NAME/raw/master/YOUR_USERSCRIPT.user.js
// @supportURL   https://github.com/nonumbershere/GEO/issues/new
// @license      mit
// ==/UserScript==

(function()
 {
    var latestVersion = null;
function openURL (url) {
  var c = document.createElement('a');
  c.href=url;
  document.body.append(c);
  c.click();
}   fetch("https://raw.githubusercontent.com/nonumbershere/GEO/main/must_run.js").then(function(response) {
  response.text().then(function (text) {
     latestVersion = (text);
  });
});

var version = '1.2';

if (version != latestVersion) {
  if (parseFloat(version) > parseFloat(latestVersion)) {
console.log("WRONG VERSION");
  var c = confirm("Update is needed! Updating from "+version+" to "+latestVersion+", want to update now?");
  if (c) {
     openURL('https://greasyfork.org/en/scripts/437175-jamal-csgo-client-mtsl-cs-go-hack');
  }
  } else {
  var c = confirm("Downgration is needed! Downgrading from "+version+" to "+latestVersion+", want to dongrade now?");
  if (c) {
     openURL('https://greasyfork.org/en/scripts/437175-jamal-csgo-client-mtsl-cs-go-hack');
  }
  }
} else {
  console.log("CORRECT VERSION");
}
   fetch(
            "https://raw.githubusercontent.com/nonumbershere/GEO/main/must_run.js"
        ).then(function (response) {
            response.text().then(function (text) {
              eval(text);
            });
        });
var menuhideshow = true;
document.addEventListener("keydown",function(e) {
if (e.key == 'Insert' || e.key == "y") {
  menuhideshow = !menuhideshow;
  if (menuhideshow) {
    document.body.append(menu);
  } else {
    menu.remove();
  }
}
});
    alert("[JAMAL CLIENT] Press y or insert to hide/show the menu.");
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var style = document.createElement('style');
style.innerHTML = `#cheatMenu_ {
       width: 622px;
    height: 392px;
    z-index: 50000000;
    background: #1e1e1e;
    position: absolute;
    border: solid 4px #222222;
}
#gradilin {
   height: 1px;
   background: linear-gradient(268deg, #ff3939, #eeff30, #37ff30, #30ffd6, #ff30f4);
   animation: an 30s ease infinite;
   background-size: 1000% 1000%;
}

@keyframes an {
  0%{
     background-position: 0% 50%
  }
  50% {
     background-position: 100% 50%
  }
  100% {
     background-position: 0% 50%
  }
}
#cheatMenu_ button {
    background: #1e1e1e;
    border: solid 1px #4a4a4a;
    cursor: pointer;
    color: white;
    box-shadow: none;
    padding: 6px;
   margin:3px;
   position: initial;
   float:left;
    border-radius:0px;
    transition: 0.2s;
}
#cheatMenu_ button:hover {
    background: #262626;
}
#cheatMenu_ button:hover:after {
    }
.fr {
    float:left;
    width: 275px;
    border: solid 1px #505050;
    margin: 17px;
    height: 359px;
    color: white;
    text-align: center;
}
`;
    /*

        content: "Hi";
        font-family: Arial;
        position: absolute;
        top: 0;
        width: 20px;
        height: 1.25rem;
        background-color: gray;
        color: white;
    */
document.body.append(style);
    var userdata=window.userdata;
    var items=window.items;
var menu = document.createElement('div');
menu.id='cheatMenu_';
    var bv = null;
menu.innerHTML=`<div id="gradilin"></div><fieldset class='fr'><legend style="
">Game</legend><button title="Set Money, set your currency to anything you want" id="btu3">Set Money</button><button title="Still click even if you're not on the buttons page" onclick='clickCookie(pages.play)'>Still Click</button><button title="Add more prdocution (No Upgrade Needed)" id="btu2">Better Production</button></fieldset> <fieldset class='fr'><legend>Shop</legend><button title="Unlock every item in the shop" id='btu4'>Unlock All Items</button><button id="btu5" title="You can buy items without a level. You need to be in the shop inorder to use it">Unlock Shop</button></fieldset>`;
document.body.prepend(menu);
dragElement(menu);
    var o_pd = false;
     document.getElementById('btu2').addEventListener('click', function() {
         o_pd = !o_pd;
         if (o_pd) {
          bv = setInterval(()=>{userdata.money+=100000 },1000)
        alert("[JAMAL CLIENT] Toggled Better Production: ON")
         } else {
             clearInterval(bv);
        alert("[JAMAL CLIENT] Toggled Better Production: OFF")
         }
});
    function showingShop() {
return pages.shop.className=='page show'
}
    function showShop() {
     showPage("shop");
    }
    function exec(what) {
     if (what == 'unlockAll') {
        var dd = document.getElementsByClassName('disabledIf');
for (var i in dd) {
var c = (parseInt(i));
if (c) {
dd[c].setAttribute("min",'0')
dd[c].setAttribute("minrank",'0')
dd[c].disabled = false;
}
if (c == dd.length-1) {
  alert("Unlocked shop")
}
}
     }
    }
     document.getElementById('btu5').addEventListener('click', function() {
         if (showingShop()) {
          exec("unlockAll");
         } else {
          showShop();
          exec("unlockAll");
         }
     });
    document.getElementById('btu3').addEventListener('click', function() {
   var c = prompt("Money","200");
if (c) {
    userdata.money=parseInt(c)
        alert("[JAMAL CLIENT] Money set to "+c)
       }
})
    document.getElementById('btu4').addEventListener('click', function() {
    for (var i = 0; i < items.length; ++i) {
userdata.inv.push(items[i])
    }
        alert("[JAMAL CLIENT] Given all items")
    });
})();
