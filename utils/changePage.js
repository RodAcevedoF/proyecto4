export const changePage = (PageComponent) => {
  const main = document.querySelector('main');
  if (!main) return;

  main.style.transition = 'opacity 0.4s ease';
  main.style.opacity = '0';

  setTimeout(() => {
    main.innerHTML = '';
    PageComponent();

    main.style.opacity = '1';
  }, 400); 
};
