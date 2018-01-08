import TalkService from "./common/talk.service";
import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);

talkService.findAllSpeakers().then(speakers => {
  speakers.forEach(sp => {
    console.log(sp.firstname);
  });
});

layout.render();

speakerList.render("main-view");
