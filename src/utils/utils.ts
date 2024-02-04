export const updateBrowserURL = (url: string) => {
  if (!url) {
    window.history.pushState({}, "", window.location.pathname.split("?")[0]);
  }
  window.history.replaceState(null, "", url);
};
