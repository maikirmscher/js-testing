function hideAside() {
  document.querySelector('aside')?.style.setProperty('display', 'none', 'important');
}
hideAside();
new MutationObserver(hideAside).observe(document.body, { childList: true, subtree: true });