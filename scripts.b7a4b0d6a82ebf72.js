function toggleRootClass(){const t="dark"==document.documentElement.getAttribute("data-bs-theme")?"light":"dark";document.documentElement.setAttribute("data-bs-theme",t)}function toggleLocalStorage(){isLight()?localStorage.removeItem("light"):localStorage.setItem("light","set")}function isLight(){return localStorage.getItem("light")}isLight()&&toggleRootClass();