let recorder, stream;
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const pause = document.getElementById('pause');
const resume = document.getElementById('resume');
const video = document.querySelector('video');

const startRecording = async () => {
  stream = await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: { mediaSource: 'screen' },
  });
  recorder = new MediaRecorder(stream);

  const chunks = [];
  recorder.ondataavailable = (e) => chunks.push(e.data);

  recorder.onstop = (e) => {
    const completeBlob = new Blob(chunks, { type: chunks[0].type });
    video.src = URL.createObjectURL(completeBlob);
  };

  recorder.start(200);
};

stopbtn.addEventListener('click', () => {
  stopbtn.setAttribute('disabled', true);
  startbtn.removeAttribute('disabled');
  if (recorder.state !== 'inactive') {
    recorder.stop();
  }
});

pause.addEventListener('click', () => {
  recorder.pause();
});

resume.addEventListener('click', () => {
  recorder.resume();
});

startbtn.addEventListener('click', function () {
  start.setAttribute('disabled', true);
  stopbtn.removeAttribute('disabled');
  startRecording();
});
