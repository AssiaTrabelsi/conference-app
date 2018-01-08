export default class SessionView {
  constructor(talkService) {
    this.talkService = talkService;
  }

  render(idView, sessionId) {
    this.talkService.findSessionById(sessionId).then(session => {
      let template = "";
      console.log(session);
      session.forEach(session => {
        template += `<a href="#sessions?id=${session[0].id}"> ${
          session[0].title
        }</a><br>`;
      });

      document.getElementById(idView).innerHTML = template;
    });
  }
}
