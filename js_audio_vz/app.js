const renderAudioViz = () => {
  const audioDiv = $("<div/>", {
    "id": "audio_container"
  });
  $("#app").append(audioDiv);
};

const main = () => {
  $(document).ready(() => {
    renderAudioViz();
  });
};

main();
