import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TalkService from "./common/talk.service";
import Layout from "./layout/index";
import SpeakerList from "./speakers/list";
import SessionList from "./session/list";
import SessionView from "./session/view";

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService);
const sessionView = new SesionView(talkService);

layout.render();

var router = () => {
  if (location.hash == "#speakers-list") {
    speakerList.render("main-view");
  } else if (location.hash == "#sessions-list") {
    sessionList.render("main-view");
  } else if (location.hash.includes("#sessions?id=")) {
    let params = new URLSearchParams(location.hash);
    let sessionId = params.get("#sessions?id");
    sessionView.render("main-view", sessionId);
  } else {
    layout.render();
  }
};
window.addEventListener("load", () => {
  window.onhashchange = () => {
    router();
  };
  router();
});
