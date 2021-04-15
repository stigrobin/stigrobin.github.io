const resumeButton = document.getElementById('download-resume');

resumeButton.addEventListener('click', downloadResume, { once: false });

function downloadResume() {
  let file = resumeButton.lang == 'sv' ? 'files/CV-no-phone.pdf' : 'files/CV-no-phone-en.pdf';
  window.open(file, '_blank').focus();
}

