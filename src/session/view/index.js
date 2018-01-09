export default class SessionView {
  constructor(talkService) {
    this.talkService = talkService;
  }

  render(idView, sessionId) {
    this.talkService.findSessionById(sessionId).then(session => {
      console.log(session);
      /*session.forEach(session => {
        template += `<a href="#sessions?id=${session[0].id}"> ${
          session[0].title
        }</a><br>`;
      });
*/
      let template = `
<h4 >${session[0].title}</h4>`;
      template += `<div class="container">
<p class="text-justify">${session[0].desc}</p>
<p><u>${session[0].confRoom}</u></p>
<p><strong> Les présentateurs : </strong></p>
<ul>`;
      session[0].speakers.forEach(speakerId => {
        this.talkService.findSpeakerById(speakerId).then(sp => {
          template += `<li><a href=#speakers-list/${sp[0].id}>${
            sp[0].firstname
          } ${sp[0].lastname}</a></li>`;

          template += `</ul>
          <a class="btn btn-primary" href="#notes/${
            session[0].id
          }">Mes notes</a>
          </div>`;
          document.getElementById(idView).innerHTML = template;
        });
      });
    });
  }
}
