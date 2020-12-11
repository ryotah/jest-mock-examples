function isAndroid(): boolean {
  if (!window) {
    return false;
  }
  return window.navigator.userAgent.includes('Android');
}

export function render(): void {
  if (!document || !isAndroid()) {
    return;
  }
  const title = document.getElementById('title');
  if (title) {
    title.textContent = 'Hello Android!';
  }
}
