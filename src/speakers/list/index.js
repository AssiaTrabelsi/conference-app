export default class SpeakersList {
  constructor(talkService) {
    this.talkService = talkService;
  }

  render(idView) {
    this.talkService.findAllSpeakers().then(speakers => {
      let template = "";
      speakers.forEach(speaker => {
        template += `<a href="#speakers?id=${speaker.id}"> ${
          speaker.firstname
        } ${speaker.lastname} </a><br>`;
      });

      document.getElementById(idView).innerHTML = template;
    });
  }
}
