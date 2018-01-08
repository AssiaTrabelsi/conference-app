console.log('Conference App démarré!')

import TalkService from './common/talk.service'

const talkService = new TalkService();

talkService.findAllSpeakers().then(speakers => {
    speakers.forEach(sp => {
        console.log(sp.firstname)
    })
}

)

