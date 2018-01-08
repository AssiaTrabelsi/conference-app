import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TalkService from "./common/talk.service";
import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";
import SesionList from "./session/list/index";

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SesionList(talkService);

layout.render();

var router = () => {
  if (location.hash == "#speakers-list") {
    speakerList.render("main-view");
  } else if (location.hash == "#sessions-list") {
    // TODO afficher vue liste des sessions
    sessionList.render("main-view");
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
