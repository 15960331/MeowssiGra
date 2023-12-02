export const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  const inner = document.createElement('div');
  outer.appendChild(inner);

  let scrollbarWidth = outer.offsetHeight - inner.offsetHeight;

  if (outer.offsetHeight === inner.offsetHeight) {
    scrollbarWidth = 0;
  }

  if (outer.parentNode) {
    outer.parentNode.removeChild(outer);
  }

  return scrollbarWidth;
};
