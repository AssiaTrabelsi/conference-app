export default class SessionList {
  constructor(talkService) {
    this.talkService = talkService;
  }

  render(idView) {
    this.talkService.findAllSessions().then(session => {
      let template = "";
      session.forEach(session => {
        template += `<a href="#sessions?id=${session.id}"> ${
          session.title
        }</a><br>`;
      });

      document.getElementById(idView).innerHTML = template;
    });
  }
}
