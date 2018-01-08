export default class SpeakersList {
  constructor(talkService) {
    this.talkService = talkService;
  }

  render(idView) {
    this.talkService.findAllSpeakers().then(speakers => {
      let template = "";
      speakers.forEach(speaker => {
        template += `<p> ${speaker.firstname} ${speaker.lastname} </p>`;
      });

      document.getElementById(idView).innerHTML = template;
    });
  }
}
