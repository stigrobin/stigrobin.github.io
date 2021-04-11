//Hook up event for opening resume in new tab
document.getElementById('download-resume').addEventListener('click', () => {
  window.open('files/CV-no-phone.pdf', '_blank').focus();
  return false;
});

