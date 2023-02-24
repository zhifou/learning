const observer = new MutationObserver(() => console.log('DOM 发生变化了~'));

observer.observe(document.body, { attributes: true });

export default observer;