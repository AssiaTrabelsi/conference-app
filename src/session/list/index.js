export default class SesionList {
  constructor(talkService) {
    this.talkService = talkService;
  }

  render(idView) {
    this.talkService.findAllSessions().then(session => {
      let template = "";
      session.forEach(session => {
        template += `<p> ${session.title}</p>`;
      });

      document.getElementById(idView).innerHTML = template;
    });
  }
}
