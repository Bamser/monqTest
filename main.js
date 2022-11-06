  let switchTheme = document.getElementById("switchThemeDark");

switchTheme.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "./light-mode.css" && (document.getElementById('radio-2').checked))  {
        theme.href = "./dark-mode.css";
    } 
    if (theme.getAttribute("href") == "./dark-mode.css" && (document.getElementById('radio-1').checked))  {
        theme.href = "./light-mode.css";
    } 
};


