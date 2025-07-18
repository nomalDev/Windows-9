

const apps = {
  youtube: {
    title: "YouTube",
    content: '<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowfullscreen></iframe>'
  },
  notepad: {
    title: "Notepad",
    content: '<iframe src="https://onlinenotepad.org/notepad" allowfullscreen></iframe>'
  },
  paint: {
    title: "Paint",
    content: '<iframe src="https://jspaint.app" allowfullscreen></iframe>'
  },
  explorer: {
    title: "File Explorer",
    content: `
      <style>
       .explorer {
         display: flex;
         height: 100%;
         font-family: 'Segoe UI', sans-serif;
       }

       .explorer-sidebar {
         width: 200px;
         background: #f2f2f2;
         border-right: 1px solid #ccc;
         padding: 10px;
       }

       .explorer-sidebar ul {
         list-style: none;
         padding: 0;
       }

       .explorer-sidebar li {
         padding: 8px;
         cursor: pointer;
       }

       .explorer-sidebar li:hover {
         background: #ddd;
       }

       .explorer-main {
         flex: 1;
         display: flex;
         flex-direction: column;
       }

       .explorer-toolbar {
         padding: 10px;
         background: #e9e9e9;
         border-bottom: 1px solid #ccc;
       }

       .explorer-toolbar button {
         margin-right: 10px;
         padding: 6px 10px;
         font-size: 14px;
         cursor: pointer;
       }

       .explorer-content {
         flex: 1;
         padding: 10px;
         background: white;
         overflow-y: auto;
         display: flex;
         flex-wrap: wrap;
         gap: 10px;
       }

       .explorer-item {
         width: 100px;
         height: 80px;
         padding: 10px;
         background: #f9f9f9;
         border: 1px solid #ccc;
         text-align: center;
         border-radius: 6px;
       }

       .drive-list {
         display: flex;
         flex-direction: column;
         gap: 8px;
         padding: 10px;
       }

       .drive {
         padding: 10px 14px;
         border: 1px solid #aaa;
         border-radius: 6px;
         background: #f5f5f5;
         cursor: pointer;
         transition: background 0.2s;
         font-weight: bold;
         width: 200px;
       }

       .drive:hover {
         background: #e0e0e0;
       }

       .drive.locked {
         background: #ddd;
         color: gray;
         cursor: not-allowed;
         border-style: dashed;
       }

       
      </style>
      
      <div class="explorer">
        <div class="explorer-sidebar">
          <ul id="explorer-folders">
            <li onclick="openFolder('Desktop')">📁 Desktop</li>
            <li onclick="openFolder('Documents')">📁 Documents</li>
            <li onclick="openFolder('Downloads')">📁 Downloads</li>
            <li onclick="openFolder('Music')">📁 Music</li>
            <li onclick="openFolder('Pictures')">📁 Pictures</li>
            <li onclick="openFolder('Videos')">📁 Videos</li>
          </ul>
        </div>
        <div class="explorer-main">
          <div class="explorer-toolbar">
            <button onclick="createFile()">📄 New File</button>
            <button onclick="createFolder()">📁 New Folder</button>
          </div>
          <div id="explorer-content" class="explorer-content">
            <div class="drive-list">
              <div class="drive">C:</div>
              <div class="drive">D:</div>
              <div class="drive locked">E: (Access Denied)</div>
            </div>

          </div>
        </div>
      </div>
      
    `
  },
  tweetarama: {
    title: "Tweet@rama",
    content: `
      <div id="tweetarama-app" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; height: 100%; display: flex; flex-direction: column; border: 1px solid #ccc; border-radius: 8px; overflow: hidden;">
        <div style="background: #1DA1F2; color: white; padding: 10px; font-weight: bold; font-size: 18px;">Tweet@rama</div>
        <div id="tweet-feed" style="flex: 1; background: white; padding: 10px; overflow-y: auto;">
          <div style="border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-bottom: 8px;">
            <strong>@</strong> <span style="color: #555;">- 2m ago</span>
            <p>Who still uses tweet@rama for Windows 9?</p>
          </div>
          <div style="border-bottom: 1px solid #ddd; padding-bottom: 8px; margin-bottom: 8px;">
            <strong>@user2</strong> <span style="color: #555;">- 5m ago</span>
            <p>Welcome to your Twitter clone on Windows 9!</p>
          </div>
        </div>
        <div style="padding: 10px; border-top: 1px solid #ddd; display: flex; gap: 8px;">
          <input id="tweet-input" type="text" placeholder="What's happening?" style="flex-grow: 1; padding: 8px; border: 1px solid #ccc; border-radius: 20px; outline: none;" />
          <button id="tweet-submit" style="background: #1DA1F2; border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-weight: bold;">Tweet</button>
        </div>
      </div>
    `,
    onLoad: () => {
      const app = document.getElementById('tweetarama-app');
      if (!app) return;

      const input = app.querySelector('#tweet-input');
      const submit = app.querySelector('#tweet-submit');
      const feed = app.querySelector('#tweet-feed');

      submit.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;

        const tweet = document.createElement('div');
        tweet.style.borderBottom = "1px solid #ddd";
        tweet.style.paddingBottom = "8px";
        tweet.style.marginBottom = "8px";
        tweet.innerHTML = `
          <strong>@you</strong> <span style="color: #555;">- just now</span>
          <p>${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        `;
        feed.prepend(tweet);
        input.value = '';
      });

      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          submit.click();
        }
      });
    }
  },
  flashPlayer: {
    title: "Flash Player",
    content: `
      <style>
        .flash-player-window {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: #111;
          color: white;
          font-family: 'Segoe UI', sans-serif;
        }

        .flash-player-header {
          padding: 8px 12px;
          background: #d32f2f;
          font-weight: bold;
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .flash-player-select {
          background: #fff;
          color: #000;
          border-radius: 4px;
          padding: 4px;
          font-size: 14px;
        }

        .flash-player-content {
          flex: 1;
          background: #000;
        }

        .flash-player-content iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      </style>

      <div class="flash-player-window">
        <div class="flash-player-header">
          Flash Player
          <select class="flash-player-select" onchange="document.getElementById('game-frame').src = this.value">
            <option value="https://ubggo.github.io/ub-games/slope/">Slope</option>
            <option value="https://firebasestorage.googleapis.com/v0/b/test-1e83a.appspot.com/o/1.html?alt=media&amp;token=3542ede2-65da-4871-a64a-3494f448bb76">1v1.lol</option>
            <option value="https://firebasestorage.googleapis.com/v0/b/test-1e83a.appspot.com/o/mcc.html?alt=media&amp;token=0692f613-2b3b-462e-9948-67179c0a13e6">Minecraft Classic</option>
            <option value="https://script.google.com/macros/s/AKfycbyB8Cg09IyL5iA01VRMcp6GXWBsHJDyytzuovDyiHdgIUmtHuNM7x27VlBnJjYt26F-/exec">Super Mario 64</option>
            <option value="https://script.google.com/macros/s/AKfycbwAOi2tPbjzeWDkigfZMIPEGubYxz2la_qjxJyydNZyjwgbqsv9mv05g7tdmLHdvdaw/exec">Drift Boss</option>
          </select>
        </div>
        <div class="flash-player-content">
          <iframe id="game-frame" src="https://ubggo.github.io/ub-games/slope/" allowfullscreen></iframe>
        </div>
      </div>
    `
  },
  store: {
    title: "Store",
    content: `
      <style>
        .store-container {
          display: flex;
          flex-direction: row;
          gap: 20px;
          height: 100%;
        }

        .store-sidebar {
          width: 200px;
          background: #f4f4f4;
          padding: 10px;
          border-right: 1px solid #ccc;
        }

        .store-main {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
        }

        .store-tile {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          padding: 16px;
          max-width: 300px;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .store-tile:hover {
          transform: scale(1.03);
        }

        .store-tile img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .store-tile h3 {
          margin: 0;
          font-size: 18px;
        }

        .store-tile p {
          font-size: 14px;
          color: #555;
        }

        .store-app-detail {
          display: none;
          flex-direction: column;
          gap: 10px;
        }

        .store-app-detail.active {
          display: flex;
        }

        .store-app-detail button {
          align-self: flex-start;
          padding: 8px 16px;
          background: #0078D7;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .store-app-detail button:hover {
          background: #005fa1;
        }
      </style>

      <div class="store-container">
      <div class="store-tile" onclick="openApp('cuttherope')">
  <img src="CutTheRopeIcon.jpg" alt="">
  <span>Cut the Rope</span>
</div>
 <div class="store-tile" onclick="openApp('vex6')">
  <img src="Vex6Icon.png" alt="">
  <span>Vex 6</span>
</div>




<!-- Modal -->
<div id="app-details-modal" class="modal hidden">
  <div class="modal-content">
    <h2>Cut the Rope</h2>
    <p>A fun physics-based puzzle game where you feed candy to Om Nom!</p>
    <button onclick="downloadApp('cuttherope')">Install</button>
    <div id="download-progress" class="progress-bar hidden">
      <div class="progress-fill"></div>
    </div>
    <button onclick="closeAppDetails()">Close</button>
  </div>
</div>

      </div>

      <script>
        function showAppDetail() {
          document.getElementById('app-detail').classList.add('active');
        }
      </script>
    `
  },
  cuttherope: {
    title: "Cut the Rope",
    content: `
      <iframe
        style="width:100%; height:100%; border:none; border-radius:8px;"
        src="https://script.google.com/macros/s/AKfycbzC5BJN124UUKkQqKJwi6D_xOIz7Vy0fHyc1Fl8NEnSUtRXD-AUGnkKt3u1bugFLT5s/exec"
        allowfullscreen
      ></iframe>
    `
  },
  vex6: {
    title: "Vex 6",
    content: `
      <iframe style="width:100%; height:100%; border:none; border-radius:8px;" src="https://script.google.com/macros/s/AKfycbzi5I00V5E4UoWKNwYMpazWyXDs1J4m0hui0937lFzMRKs31QGZ3rcUHRroAt13wmc9tw/exec" allowfullscreen></iframe>
    `
  },
};

function maximizeWindow(button) {
  const win = button.closest('.window');

  // If already maximized, restore
  if (win.classList.contains('maximized')) {
    win.style.top = win.dataset.prevTop;
    win.style.left = win.dataset.prevLeft;
    win.style.width = win.dataset.prevWidth;
    win.style.height = win.dataset.prevHeight;
    win.classList.remove('maximized');
    return;
  }

  // Save current dimensions
  const rect = win.getBoundingClientRect();
  win.dataset.prevTop = rect.top + 'px';
  win.dataset.prevLeft = rect.left + 'px';
  win.dataset.prevWidth = rect.width + 'px';
  win.dataset.prevHeight = rect.height + 'px';

  // Maximize window
  win.style.top = '0px';
  win.style.left = '0px';
  win.style.height = (window.innerHeight - 40) + 'px';
  win.style.width = window.innerWidth + 'px';
  win.classList.add('maximized');
}



function openApp(id) {
  let existing = document.getElementById("win-" + id);
  if (existing) {
    existing.style.display = "block";
    existing.style.zIndex = Date.now();
    return;
  }

  function showAppDetails(app) {
    document.getElementById("app-details-modal").classList.remove("hidden");
  }

  function closeAppDetails() {
    document.getElementById("app-details-modal").classList.add("hidden");
    document.getElementById("download-progress").classList.add("hidden");
    document.querySelector('.progress-fill').style.width = '0%';
  }

  function downloadApp(app) {
    const progress = document.getElementById("download-progress");
    const fill = document.querySelector(".progress-fill");
    progress.classList.remove("hidden");

    let percent = 0;
    const interval = setInterval(() => {
      percent += 5;
      fill.style.width = percent + "%";

      if (percent >= 100) {
        clearInterval(interval);
        openApp(app);
        closeAppDetails();
      }
    }, 100);
  }

  function openApp(app) {
    if (app === "cuttherope") {
      openAppWindow("Cut the Rope", `
        <iframe src="https://script.google.com/macros/s/AKfycbzC5BJN124UUKkQqKJwi6D_xOIz7Vy0fHyc1Fl8NEnSUtRXD-AUGnkKt3u1bugFLT5s/exec" 
          style="width: 100%; height: 100%; border: none;"></iframe>
      `);
    }
  }
  const appStoreApps = {
    cutTheRope: {
      title: "Cut The Rope",
      description: "Enjoy the classic physics-based puzzle game!",
      iframe: "https://script.google.com/macros/s/AKfycbzC5BJN124UUKkQqKJwi6D_xOIz7Vy0fHyc1Fl8NEnSUtRXD-AUGnkKt3u1bugFLT5s/exec"
    }
  };

  function openAppDetails(appId) {
    const app = appStoreApps[appId];
    if (!app) return;

    document.getElementById("app-title").textContent = app.title;
    document.getElementById("app-description").textContent = app.description;
    document.getElementById("app-details-modal").classList.remove("hidden");

    // Store app for use when installing
    document.getElementById("app-details-modal").dataset.appId = appId;
  }

  function downloadAndOpenApp() {
    const appId = document.getElementById("app-details-modal").dataset.appId;
    const app = appStoreApps[appId];
    if (!app) return;

    // Simulate download
    const btn = event.target;
    btn.textContent = "Installing...";
    setTimeout(() => {
      btn.textContent = "Installed";
      setTimeout(() => {
        openAppWindow(app.title, app.iframe);
        document.getElementById("app-details-modal").classList.add("hidden");
        btn.textContent = "Install";
      }, 1000);
    }, 1500);
  }

  function openAppWindow(title, url) {
    const win = document.createElement("div");
    win.className = "window";
    win.innerHTML = `
      <div class="window-header">
        <span>${title}</span>
        <div class="controls">
          <button onclick="this.closest('.window').remove()">✖</button>
        </div>
      </div>
      <div class="window-content">
        <iframe src="${url}" allowfullscreen></iframe>
      </div>`;
    document.getElementById("windows-container").appendChild(win);
  }

  

  const win = document.createElement("div");
  win.className = "window";
  win.id = "win-" + id;
  win.style.top = "100px";
  win.style.left = "100px";
  win.innerHTML = `
    <div class="window-header">
      <span>${apps[id].title}</span>
      <div class="controls">
        <button onclick="minimize('${id}')">_</button>
        <button onclick="maximizeWindow(this)">□</button>
        <button onclick="closeApp('${id}')">X</button>
      </div>
    </div>
    <div class="window-content">${apps[id].content}</div>
  `;
  document.getElementById("windows-container").appendChild(win);
  if (id === 'cmd') setupCmd();
  makeDraggable(win);

  const taskBtn = document.createElement("button");
  taskBtn.id = "task-" + id;
  taskBtn.innerText = apps[id].title;
  taskBtn.onclick = () => toggle(id);
  document.getElementById("taskbar-apps").appendChild(taskBtn);
}

function closeApp(id) {
  const win = document.getElementById("win-" + id);
  if (win) win.remove();
  const task = document.getElementById("task-" + id);
  if (task) task.remove();
}

function minimize(id) {
  const win = document.getElementById("win-" + id);
  if (win) win.style.display = "none";
}

function maximize(id) {
  const win = document.getElementById("win-" + id);
  if (win) {
    win.style.top = "0";
    win.style.left = "0";
    win.style.width = "100vw";
    win.style.height = "calc(100vh - 40px)";
  }
}

function toggle(id) {
  const win = document.getElementById("win-" + id);
  if (!win) return;
  win.style.display = win.style.display === "none" ? "block" : "none";
  win.style.zIndex = Date.now();
}

function toggleStart() {
  const menu = document.getElementById("start-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function makeDraggable(win) {
  const header = win.querySelector(".window-header");
  let isDragging = false, offsetX, offsetY;

  header.addEventListener("mousedown", e => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", e => {
    if (isDragging) {
      win.style.left = `${e.clientX - offsetX}px`;
      win.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => isDragging = false);
}

setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit', // <-- This adds seconds
    hour12: false // Set to true for AM/PM format
  });
  document.getElementById("taskbar-clock").innerText = timeString;
}, 1000);


let hydraTimerStarted = false;

function runHydraEffects() {
  if (hydraTimerStarted) return;
  hydraTimerStarted = true;

  const hydraDiv = document.getElementById("hydra-content");
  let interval = setInterval(() => {
    const msg = document.createElement("p");
    msg.textContent = "You shouldn't have done that...";
    hydraDiv.appendChild(msg);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    document.body.innerHTML = `
      <div style="background:#0000AA;color:white;font-family:monospace;padding:40px;height:100vh;">
        <h1>:(</h1>
        <p>Your PC ran into a problem and needs to restart.</p>
        <p>Error: HYDRA_ATTACK_EXCEPTION</p>
      </div>
    `;
  }, 30000);
}

apps.chrome = {
  title: "Chrome",
  content: `
    <style>
      .chrome-window {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: 'Segoe UI', sans-serif;
        background: #fff;
      }

      .chrome-tabs {
        display: flex;
        background: #f1f1f1;
        padding: 5px;
        border-bottom: 1px solid #ccc;
      }

      .chrome-tabs .tab {
        background: #e0e0e0;
        padding: 5px 10px;
        margin-right: 5px;
        border-radius: 4px 4px 0 0;
        cursor: pointer;
      }

      .chrome-address-bar {
        display: flex;
        padding: 6px;
        border-bottom: 1px solid #ccc;
        background: #f9f9f9;
      }

      .chrome-address-bar input {
        flex: 1;
        padding: 6px;
        font-size: 14px;
        border: 1px solid #bbb;
        border-radius: 4px;
      }

      .chrome-address-bar button {
        margin-left: 6px;
        padding: 6px 12px;
        font-size: 14px;
        cursor: pointer;
      }

      .chrome-bookmarks {
        display: flex;
        gap: 8px;
        padding: 6px 10px;
        background: #f1f1f1;
        border-bottom: 1px solid #ccc;
      }

      .chrome-bookmarks button {
        background: #e0e0e0;
        border: 1px solid #ccc;
        padding: 5px 10px;
        border-radius: 3px;
        cursor: pointer;
        font-size: 13px;
      }

      .chrome-browser-view {
        flex-grow: 1;
      }

      .chrome-browser-view iframe {
        width: 100%;
        height: 100%;
        border: none;
      }
    </style>

    <div class="chrome-window">
      <div class="chrome-tabs">
        <div class="tab">Tab</div>
      </div>
      <div class="chrome-address-bar">
        <input type="text" id="chrome-url" placeholder="Enter URL or site..." value="https://myspace.windows93.net" />
        <button onclick="loadChromePage()">Go</button>
      </div>
      <div class="chrome-bookmarks">
        <button onclick="document.getElementById('chrome-url').value='https://kleki.com/'; loadChromePage();">Kleki</button>
        <button onclick="document.getElementById('chrome-url').value='https://archive.org/'; loadChromePage();">Archive</button>
        <button onclick="document.getElementById('chrome-url').value='https://myspace.windows93.net'; loadChromePage();">Myspace</button>
        <button onclick="document.getElementById('chrome-url').value='https://ubg44.github.io'; loadChromePage();">UBG Games</button>
        <button onclick="document.getElementById('chrome-url').value='https://wikipedia.org'; loadChromePage();">Wikipedia</button>
        <button onclick="document.getElementById('chrome-url').value='https://www.youtube.com/embed/8mNRLKkkQOE?si=GGPDm0ugrf0wh2ic'; loadChromePage();">We Listened Windows 7</button>

      </div>
      <div class="chrome-browser-view">
        <iframe id="chrome-frame" src="https://myspace.windows93.net" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
      </div>
    </div>
  `
};

function loadChromePage() {
  const url = document.getElementById("chrome-url").value;
  const iframe = document.getElementById("chrome-frame");

  // Prepend https if user enters without it
  if (!url.startsWith("http")) {
    iframe.src = "https://" + url;
  } else {
    iframe.src = url;
  }
}

apps.minesweeper = {
  title: "Minesweeper",
  content: `<iframe src="https://minesweeper.online/" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`
};

apps.solitaire = {
  title: "Solitaire",
  content: `<iframe src="https://www.solitr.com/" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`
};

function shutdownSystem() {
  document.body.innerHTML = `
    <div style="background:#000;color:white;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Segoe UI',sans-serif;">
      <h1>Shutting down...</h1>
      <p>Thanks for using my website!</p>
    </div>
  `;
}

function restartSystem() {
  location.reload();
}

window.addEventListener("load", () => {
  const sound = document.getElementById("startup-sound");
  if (sound) {
    sound.volume = 0.5;
    sound.play().catch(() => {
      // Autoplay might be blocked; show prompt if needed
      console.log("Startup sound blocked by browser.");
    });
  }
});



function closeApp(id) {
  const win = document.getElementById("win-" + id);
  if (!win) return;

  win.style.animation = 'windowClose 0.2s ease-in forwards';
  setTimeout(() => {
    win.remove();
  }, 200);

  const task = document.getElementById("task-" + id);
  if (task) task.remove();
}

apps.cmd = {
  title: "Command Prompt",
  content: `
    <div id="cmd-window">
      <div id="cmd-output"></div>
      <input id="cmd-input" type="text" autofocus placeholder="Type a command..." />
    </div>
  `
};

function setupCmd() {
  const input = document.getElementById('cmd-input');
  const output = document.getElementById('cmd-output');

  function print(text) {
    output.innerHTML += text + '\n';
    output.scrollTop = output.scrollHeight;
  }

  function runCommand(cmdLine) {
    const args = cmdLine.trim().split(" ");
    const command = args[0].toLowerCase();

    print("> " + cmdLine);

    if (command === "help") {
      print("Available commands:\n- help\n- open [app]\n- clear\n- list");
    } else if (command === "clear") {
      output.innerHTML = "";
    } else if (command === "open") {
      const app = args[1];
      if (apps[app]) {
        openApp(app);
        print(`Opening "${app}"...`);
      } else {
        print(`Unknown app: "${app}"`);
      }
    } else if (command === "list") {
      print("Available apps:\n" + Object.keys(apps).join("\n"));
    } else {
      print(`Unknown command: "${command}"`);
    }
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      runCommand(input.value);
      input.value = "";
    }
  });

  print("Windows 9 Shell\nType 'help' for a list of commands.");
}

apps.credits = {
  title: "Credits",
  content: `
    <div id="credits-content" style="white-space:pre-wrap; font-family:monospace; font-size:14px; padding:10px; height:100%; overflow:auto;">
Windows 9
================

Name: Windows 9 Pro Beta 1 (3 betas, the 2 are not released yet.)
Created by: Thecoolone1744, and some help with ChatGPT.
Date: 2025
Version: 1.0

CREDITS
-------

🖼 Icons and Images:
- YouTube icon – Wikimedia Commons
- Notepad & Paint icons – Google Play / Microsoft
- Chrome icon – Wikimedia Commons
- Recycle Bin icon – Local file
- Solitaire icon – rw-designer.com
- Minesweeper image – minesweeper.online
- MP3 Player icon – Wikimedia Commons
- Windows Explorer icon – Wikimedia Commons
- Start Button icon – Custom/local
- Tweet@rama icon – Windows Developer Beta
- Supermium icon – Chrome old icon
- Firefox icon – Firefox website
- Cut the Rope icon – Google Play
- Vex 6 icon – Google Play
- Credits icon – Windows 98-95 Text File Icon

🖥 Apps & Iframes:
- YouTube embedded video – youtube.com
- Notepad – onlinenotepad.org
- Paint – jspaint.app
- Chrome – iframe browser
- Solitaire – solitr.com
- Minesweeper – minesweeper.online
- Firefox – iframe browser
- Supermium – iframe browser

🎵 Sounds:
- startup.mp3 – From 8.1/8

📚 Fonts:
- Segoe UI – Google Fonts

No external JS libraries used.
Thank you for using Windows 9 Pro Beta 1!
    `
};

apps.firefox = {
  title: "Firefox",
  content: `
    <style>
      .firefox77-browser {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: "Segoe UI", sans-serif;
      }
      .firefox77-toolbar {
        display: flex;
        align-items: center;
        background: #f9f9fa;
        padding: 6px;
        border-bottom: 1px solid #ccc;
        gap: 6px;
      }
      .firefox77-toolbar button {
        padding: 4px 8px;
        background: #e0e0e0;
        border: 1px solid #aaa;
        border-radius: 4px;
        cursor: pointer;
      }
      .firefox77-toolbar input {
        flex: 1;
        padding: 6px 8px;
        border: 1px solid #bbb;
        border-radius: 6px;
        font-size: 14px;
      }
      .firefox77-browser iframe {
        flex: 1;
        border: none;
      }
    </style>

    <div class="firefox77-browser">
      <div class="firefox77-toolbar">
        <button onclick="firefox77Back()">←</button>
        <button onclick="firefox77Forward()">→</button>
        <button onclick="firefox77Reload()">⟳</button>
        <button onclick="firefox77Home()">🏠</button>
        <input type="text" id="firefox77-url" value="https://example.org" />
        <button onclick="firefox77Go()">Go</button>
      </div>
      <iframe id="firefox77-frame" src="https://us8.proxysite.com/process.php?d=5ydl5V9tQv%2BLYbttI2J4tGUK&b=1"></iframe>
    </div>
  `
};

let firefox77History = [];
let firefox77Index = -1;

function firefox77Go() {
  const urlInput = document.getElementById("firefox77-url");
  let url = urlInput.value.trim();
  if (!url.startsWith("http")) url = "https://" + url;

  const iframe = document.getElementById("firefox77-frame");
  iframe.src = url;

  // Manage history
  firefox77History = firefox77History.slice(0, firefox77Index + 1);
  firefox77History.push(url);
  firefox77Index++;
}

function firefox77Back() {
  if (firefox77Index > 0) {
    firefox77Index--;
    const url = firefox77History[firefox77Index];
    document.getElementById("firefox77-frame").src = url;
    document.getElementById("firefox77-url").value = url;
  }
}

function firefox77Forward() {
  if (firefox77Index < firefox77History.length - 1) {
    firefox77Index++;
    const url = firefox77History[firefox77Index];
    document.getElementById("firefox77-frame").src = url;
    document.getElementById("firefox77-url").value = url;
  }
}

function firefox77Reload() {
  const iframe = document.getElementById("firefox77-frame");
  iframe.src = iframe.src;
}

function firefox77Home() {
  const homeUrl = "https://duckduckgo.com";
  document.getElementById("firefox77-url").value = homeUrl;
  document.getElementById("firefox77-frame").src = homeUrl;
  firefox77History.push(homeUrl);
  firefox77Index = firefox77History.length - 1;
}



function triggerBSOD() {
  // Replace entire page content
  document.body.innerHTML = `
    <div style="
      background: #0000AA;
      color: white;
      font-family: monospace;
      padding: 40px;
      height: 100vh;
      box-sizing: border-box;
    ">
      <h1 style="font-size: 60px;">:(</h1>
      <p>Your PC ran into a problem and needs to restart.</p>
      <p style="margin-top: 20px;">Error: FAKE_CRITICAL_PROCESS_DIED</p>
      <p style="margin-top: 40px;">We're collecting some error info, and then we'll restart for you.</p>
      <p>0% complete</p>
    </div>
  `;

  // Restart (refresh) after 30 seconds
  setTimeout(() => {
    location.reload();
  }, 30000);
}

apps.supremiemSetup = {
  title: "Supremiem Setup",
  content: `
    <div style="text-align:center; padding:10px;">
      <h3>Supremiem Installer</h3>
      <p>Install Supremiem Web Browser, the next evolution of Chrome.</p>
      <button onclick="installSupremiem()">Install</button>
      <div id="install-status" style="margin-top:10px;"></div>
    </div>
  `
};

function installSupremiem() {
  const status = document.getElementById("install-status");
  status.innerHTML = "Installing...";

  setTimeout(() => {
    // Add Supremiem app to the apps object
    apps.supremiem = {
      title: "Supremiem",
      content: apps.chrome.content.replace("chrome", "supremiem") // Reuse Chrome app, just change IDs
    };

    // Add desktop icon dynamically
    const icon = document.createElement("div");
    icon.className = "icon";
    icon.onclick = () => openApp("supremiem");
    icon.innerHTML = `
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" />
      <p>Supremiem</p>
    `;
    document.getElementById("desktop").appendChild(icon);

    status.innerHTML = "<span style='color:green;'>Installation Complete!</span>";
  }, 2000);
}

apps.supermium = {
  title: "Supermium For Windows 9",
  content: `
    <style>
      .supermium-window {
        display: flex;
        flex-direction: column;
        height: 100%;
        font-family: 'Segoe UI', sans-serif;
        background: #fff;
      }

      .supermium-tabs {
        display: flex;
        background: #f5f5f5;
        padding: 4px 6px;
        border-bottom: 1px solid #ccc;
        overflow-x: auto;
      }

      .supermium-tabs .tab {
        background: #e1e1e1;
        padding: 6px 12px;
        margin-right: 4px;
        border-radius: 4px 4px 0 0;
        cursor: pointer;
        font-size: 13px;
        white-space: nowrap;
      }

      .supermium-controls {
        display: flex;
        gap: 6px;
      }

      .supermium-address-bar {
        display: flex;
        padding: 6px;
        border-bottom: 1px solid #ccc;
        background: #fdfdfd;
        align-items: center;
        gap: 6px;
      }

      .supermium-address-bar input {
        flex: 1;
        padding: 6px 10px;
        font-size: 14px;
        border: 1px solid #bbb;
        border-radius: 4px;
        outline: none;
      }

      .supermium-address-bar button {
        padding: 6px 10px;
        font-size: 14px;
        cursor: pointer;
        background: #0078d7;
        color: white;
        border: none;
        border-radius: 4px;
      }

      .supermium-browser-view {
        flex-grow: 1;
        height: 100%;
        position: relative;
      }

      .supermium-browser-view iframe {
        position: absolute;
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        border: none;
        display: none;
      }

      .supermium-browser-view iframe.active {
        display: block;
      }
    </style>

    <div class="supermium-window">
      <div class="supermium-tabs" id="supermium-tabs">
        <div class="tab active" onclick="switchSupermiumTab(this)">Tab 1</div>
      </div>

      <div class="supermium-address-bar">
        <div class="supermium-controls">
          <button onclick="supermiumBack(this)">←</button>
          <button onclick="supermiumForward(this)">→</button>
          <button onclick="supermiumHome(this)">🏠</button>
          <button onclick="supermiumNewTab(this)">➕</button>
        </div>
        <input type="text" id="supermium-url" placeholder="Enter URL..." value="https://example.com" />
        <button onclick="loadSupermiumPage(this)">Go</button>
      </div>

      <div class="supermium-browser-view" id="supermium-view">
        <iframe src="https://example.com" class="active" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
      </div>
    </div>
  `
};





function loadSupermiumPage(button) {
  const win = button.closest('.window');
  const urlInput = win.querySelector('#supermium-url');
  const iframe = win.querySelector('.supermium-browser-view iframe.active');
  let url = urlInput.value.trim();

  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  iframe.src = url;
}

function supermiumBack(button) {
  const iframe = button.closest('.window').querySelector('.supermium-browser-view iframe.active');
  iframe.contentWindow.history.back();
}

function supermiumForward(button) {
  const iframe = button.closest('.window').querySelector('.supermium-browser-view iframe.active');
  iframe.contentWindow.history.forward();
}

function supermiumHome(button) {
  const win = button.closest('.window');
  const iframe = win.querySelector('.supermium-browser-view iframe.active');
  const input = win.querySelector('#supermium-url');
  iframe.src = "https://example.com";
  input.value = "https://example.com";
}

function supermiumNewTab(button) {
  const win = button.closest('.window');
  const tabBar = win.querySelector('#supermium-tabs');
  const view = win.querySelector('#supermium-view');

  const tabCount = tabBar.children.length + 1;

  // Deactivate current tabs and iframes
  tabBar.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  view.querySelectorAll('iframe').forEach(f => f.classList.remove('active'));

  // Create new tab
  const tab = document.createElement('div');
  tab.className = 'tab active';
  tab.textContent = `Tab ${tabCount}`;
  tab.onclick = () => switchSupermiumTab(tab);
  tabBar.appendChild(tab);

  // Create new iframe
  const iframe = document.createElement('iframe');
  iframe.className = 'active';
  iframe.src = "https://example.com";
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups");
  view.appendChild(iframe);

  // Update URL input
  win.querySelector('#supermium-url').value = "https://example.com";
}

function switchSupermiumTab(tabEl) {
  const win = tabEl.closest('.window');
  const tabs = win.querySelectorAll('.supermium-tabs .tab');
  const iframes = win.querySelectorAll('.supermium-browser-view iframe');
  const index = Array.from(tabs).indexOf(tabEl);

  tabs.forEach(t => t.classList.remove('active'));
  iframes.forEach(f => f.classList.remove('active'));

  tabEl.classList.add('active');
  iframes[index]?.classList.add('active');

  const urlInput = win.querySelector('#supermium-url');
  urlInput.value = iframes[index]?.src || "";
}

apps.winver = {
  title: "About Windows",
  content: `
    <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; color: #000; background: #fff; height: 100%; box-sizing: border-box;">
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <img src="https://cdn.wccftech.com/wp-content/uploads/2014/07/Windows-9-Logo.jpg" style="width: 64px; height: 64px; margin-right: 15px;" alt="Windows Logo">
        <div>
          <h1 style="margin: 0; font-size: 24px;">Windows 9 Pro </h1>
          <p style="margin: 4px 0 0; font-size: 14px;">Version 1.0 (First Version of the site)</p>
        </div>
      </div>
      <p style="font-size: 14px;">
        © Github Repo. All rights reserved.
      </p>
      <p style="font-size: 13px; margin-top: 20px; line-height: 1.4;">
        The Windows 9 Pro operating system and its user interface are protected by trademark and other pending or existing intellectual property rights in the United States and other countries/regions. This is also a beta version of Windows 9 Pro.
      </p>
      <p style="font-size: 13px; margin-top: 20px;">
        This product is licensed under the Microsoft Software License Terms to:
        <br><strong>Web Browser</strong>
      </p>
    </div>
  `
};

apps.asciisnake = {
  title: "ASCII Snake",
  content: `
    <div style="font-family:monospace; background:black; color:lime; height:100%; display:flex; flex-direction:column;">
      <pre id="snake-screen" style="flex:1; margin:0; overflow:auto; white-space:pre-wrap; padding:10px; font-size:14px; line-height:16px;"></pre>
      <p style="text-align:center; margin:4px 0; color:white;">Use arrow keys to play. Don't hit the walls!</p>
    </div>
    <script>
      (() => {
        const screen = document.getElementById('snake-screen');
        const rows = 20, cols = 40;
        let snake = [{x:10, y:10}], direction = 'right', food = {x:5, y:5}, dead = false;

        const draw = () => {
          let output = '';
          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
              if (snake.some(p => p.x === x && p.y === y)) output += 'O';
              else if (food.x === x && food.y === y) output += '@';
              else output += '.';
            }
            output += '\\n';
          }
          screen.textContent = output;
        };

        const move = () => {
          if (dead) return;
          let head = {...snake[0]};
          if (direction === 'up') head.y--;
          if (direction === 'down') head.y++;
          if (direction === 'left') head.x--;
          if (direction === 'right') head.x++;

          if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows ||
              snake.some(p => p.x === head.x && p.y === head.y)) {
            dead = true;
            screen.textContent = 'GAME OVER\\nRefresh to play again!';
            return;
          }

          snake.unshift(head);
          if (head.x === food.x && head.y === food.y) {
            food = {
              x: Math.floor(Math.random() * cols),
              y: Math.floor(Math.random() * rows)
            };
          } else {
            snake.pop();
          }

          draw();
        };

        document.addEventListener('keydown', e => {
          if (e.key === 'ArrowUp') direction = 'up';
          if (e.key === 'ArrowDown') direction = 'down';
          if (e.key === 'ArrowLeft') direction = 'left';
          if (e.key === 'ArrowRight') direction = 'right';
        });

        draw();
        setInterval(move, 150);
      })();
    </script>
  `
};

document.getElementById("search-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const query = this.value.toLowerCase().trim();
    if (apps[query]) {
      openApp(query);
    } else {
      alert(`App "${query}" not found.`);
    }
    this.value = ""; // Clear input
  }
});

function updateDateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString();
  document.getElementById("taskbar-time").innerText = time;
  document.getElementById("taskbar-date").innerText = date;
}

setInterval(updateDateTime, 1000);
updateDateTime();



apps.gmaps = {
  title: "Google Maps",
  content: `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26144831354!2d-74.14465596236367!3d40.69728414617328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1752680680182!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `
}

function setupVLCPlayer() {
  const fileInput = document.getElementById("vlc-file");
  const filenameDisplay = document.getElementById("vlc-filename");
  const video = document.getElementById("vlc-video");

  if (!fileInput || !filenameDisplay || !video) return;

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      video.src = url;
      video.load();
      video.play();
      filenameDisplay.textContent = file.name;
    }
  });
}


if (id === "vlc") {
  setTimeout(setupVLCPlayer, 100); // Slight delay to ensure DOM is ready
}


setInterval(() => {
  const now = new Date();
  document.getElementById("clock-time").innerText = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  document.getElementById("clock-date").innerText = now.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });
}, 1000);

function toggleStart() {
  const menu = document.getElementById("start-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleStartMenu() {
  const menu = document.getElementById("start-menu");
  menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("vlc-file");
  const filenameDisplay = document.getElementById("vlc-filename");
  const video = document.getElementById("vlc-video");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      video.src = url;
      video.load();
      video.play();
      filenameDisplay.textContent = file.name;
    }
  });
});

apps.tweet = {
  title: "tweet@rama",
  content: `
    <div class="tweet-app">
      <h2>@rama</h2>
      <p>This is a tweet-like message UI!</p>
    </div>
  `
};


function postTweet() {
  const text = document.getElementById("new-tweet").value.trim();
  if (text === "") return;

  const timeline = document.getElementById("tweet-timeline");

  const tweetDiv = document.createElement("div");
  tweetDiv.className = "tweet";
  tweetDiv.innerHTML = `
    <div class="tweet-user">You 🧍</div>
    <div class="tweet-text">${text}</div>
  `;

  timeline.prepend(tweetDiv);
  document.getElementById("new-tweet").value = "";
}

if (appName === 'tweetarama') {
  const tweetApp = document.createElement('div');
  tweetApp.id = 'tweetarama-app';

  tweetApp.innerHTML = `
    <textarea id="tweet-input" placeholder="What's happening?" rows="3"></textarea>
    <button id="tweet-submit">Tweet</button>
    <div id="tweet-feed"></div>
  `;

  content.appendChild(tweetApp);

  const tweetInput = tweetApp.querySelector('#tweet-input');
  const tweetSubmit = tweetApp.querySelector('#tweet-submit');
  const tweetFeed = tweetApp.querySelector('#tweet-feed');

  tweetSubmit.addEventListener('click', () => {
    const tweetText = tweetInput.value.trim();
    if (!tweetText) return;

    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet', 'new');
    newTweet.textContent = tweetText;

    tweetFeed.prepend(newTweet);
    tweetInput.value = '';

    // Remove animation class after animation ends to allow replay next time
    newTweet.addEventListener('animationend', () => {
      newTweet.classList.remove('new');
    });
  });
}

const app = apps['tweetarama'];
win.querySelector('.window-content').innerHTML = app.content;
if (app.onLoad) app.onLoad();

  function filterDesktopApps() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const icons = document.querySelectorAll("#desktop .icon");

    icons.forEach(icon => {
      const text = icon.innerText.toLowerCase();
      icon.style.display = text.includes(query) ? "flex" : "none";
    });
  }

  

  function spawnCrazyError() {
    const count = 5 + Math.floor(Math.random() * 5); // spawn 5–10 windows
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * (window.innerWidth - 300));
      const y = Math.floor(Math.random() * (window.innerHeight - 150));

      const errorWindow = document.createElement('div');
      errorWindow.classList.add('window');
      errorWindow.style.left = x + 'px';
      errorWindow.style.top = y + 'px';
      errorWindow.innerHTML = `
        <div class="window-header">
          System Error
          <div class="controls">
            <button onclick="closeWindow(this)">X</button>
          </div>
        </div>
        <div class="window-content">
          <p>A critical error has occurred.</p>
          <button onclick="spawnCrazyError()">OK</button>
        </div>
      `;
      document.getElementById('windows-container').appendChild(errorWindow);
    }
  }

  // 1) Define the Crazy Error app
  apps.crazyerror = {
    title: "Crazy Error",
    content: `
      <div style="padding: 10px; font-size: 13px;">
        <strong>System Error</strong><br>
        A critical error has occurred.
        <div style="text-align: right; margin-top: 10px;">
          <button onclick="spawnCrazyError()">OK</button>
        </div>
      </div>
    `
  };

  // 2) Function to spawn error windows
  function spawnCrazyError() {
    const count = 4 + Math.floor(Math.random() * 5); // 4–8 windows
    for (let i = 0; i < count; i++) {
      const win = document.createElement('div');
      win.className = 'window';
      win.style.width = '240px';
      win.style.height = '100px';
      win.style.left = Math.random() * (window.innerWidth - 260) + 'px';
      win.style.top = Math.random() * (window.innerHeight - 120) + 'px';
      win.style.zIndex = getNextZIndex();

      win.innerHTML = `
        <div class="window-header">
          Error
          <div class="controls">
            <button onclick="closeWindow(this)">×</button>
          </div>
        </div>
        <div class="window-content">
          <p>Unexpected error occurred.</p>
          <div style="text-align: right;">
            <button onclick="spawnCrazyError()">OK</button>
          </div>
        </div>
      `;

      document.getElementById('windows-container').appendChild(win);
    }

    // Play error beep if audio exists
    const beep = document.getElementById('error-beep');
    if (beep) {
      beep.currentTime = 0;
      beep.play();
    }
  }


function updateClock() {
  const now = new Date();
  document.getElementById('clock-time').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 500);
updateClock();

function initStoreApp() {
  const storeApps = [
    { id: 'notepad', title: 'Notepad', icon: 'https://icons.iconarchive.com/icons/icons8/windows-8/64/Apps-Notepad-icon.png' },
    { id: 'zkype', title: 'Zkype', icon: 'https://secure.skypeassets.com/content/dam/skype/images/misc/skype.png' },
    { id: 'tweetarama', title: 'Tweet@rama', icon: 'https://abs.twimg.com/favicons/twitter.2.ico' }
  ];
  const installed = new Set();
  const listEl = document.getElementById('store-list');
  if (!listEl) return; // Safety check if store not loaded

  listEl.innerHTML = ''; // Clear previous if any

  storeApps.forEach(app => {
    const div = document.createElement('div');
    div.className = 'store-item';
    div.innerHTML = `
      <img src="${app.icon}" alt=""><br>
      <strong>${app.title}</strong><br>
      <button class="store-install" id="install-${app.id}">Install</button>
    `;
    listEl.appendChild(div);

    const btn = div.querySelector('button');
    btn.onclick = () => {
      if (!installed.has(app.id)) {
        openApp(app.id);  // Assumes you have a function openApp to open apps by id
        installed.add(app.id);
        btn.textContent = 'Installed';
        btn.disabled = true;
      }
    };
  });
}

function shutdownSystem() {
  const desktop = document.getElementById("desktop");
  const windowsContainer = document.getElementById("windows-container");
  desktop.innerHTML = "";
  windowsContainer.innerHTML = "";
  document.body.innerHTML = `
    <div style="height: 100vh; background: black; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px;">
      🔌 Shutting down...
    </div>
  `;
}

function restartSystem() {
  const restartScreen = document.createElement("div");
  restartScreen.style.position = "fixed";
  restartScreen.style.top = "0";
  restartScreen.style.left = "0";
  restartScreen.style.width = "100vw";
  restartScreen.style.height = "100vh";
  restartScreen.style.background = "black";
  restartScreen.style.color = "white";
  restartScreen.style.display = "flex";
  restartScreen.style.alignItems = "center";
  restartScreen.style.justifyContent = "center";
  restartScreen.style.fontSize = "24px";
  restartScreen.textContent = "🔄 Restarting...";
  document.body.appendChild(restartScreen);

  setTimeout(() => {
    location.reload(); // Simulates restart by refreshing the page
  }, 2000);
}

function shutdownSystem() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'black';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.color = 'white';
  overlay.style.fontSize = '24px';
  overlay.innerHTML = `<div>🔌 Shutting down...</div>`;
  document.body.innerHTML = '';
  document.body.appendChild(overlay);
}

function restartSystem() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'black';
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.color = 'white';
  overlay.style.fontSize = '24px';
  overlay.innerHTML = `<div>🔄 Restarting...</div>`;
  document.body.appendChild(overlay);
  setTimeout(() => {
    location.reload(); // Simulated restart
  }, 2500);
}

