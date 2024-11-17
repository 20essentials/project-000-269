document.addEventListener('click', e => {
  // if (e.target.matches('.side')) {
  //   e.target.closest('.container').classList.toggle('pause');
  // }
  if (e.target.matches('*')) {
    document
      .querySelectorAll('.scene')
      .forEach(el => el.classList.toggle('pause'));
  }
});
