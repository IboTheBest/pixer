function handleModeBtnClick() {
  const wasAdded = document.body.classList.toggle("dark");
    if (wasAdded) {
      setCookie("darkMode", "enabled", 7)
    } else {
      setCookie("darkMode", "disabled", 7);
}
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}


function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
function applyTheme() {
  const userTheme = getCookie('darkMode'); 
  if (userTheme === 'enabled') {
    handleModeBtnClick()
  }
}
applyTheme();
