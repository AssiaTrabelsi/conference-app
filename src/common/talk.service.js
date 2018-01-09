export default class TalkService {
  findAllSpeakers() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/speakers", true);

      req.onreadystatechange = aEvt => {
        if (req.readyState == 4) {
          if (req.status == 200) {
            resolve(JSON.parse(req.responseText));
          } else {
            reject(`Erreur pendant le chargement de la page`);
          }
        }
      };

      req.send(null);
    });
  }

  findSpeakerById(speakerId) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/speakers?id=" + speakerId, true);

      req.onreadystatechange = aEvt => {
        if (req.readyState == 4) {
          if (req.status == 200) {
            resolve(JSON.parse(req.responseText));
          } else {
            reject(`Erreur pendant le chargement de la page`);
          }
        }
      };

      req.send(null);
    });
  }

  findAllSessions() {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/sessions", true);

      req.onreadystatechange = aEvt => {
        if (req.readyState == 4) {
          if (req.status == 200) {
            resolve(JSON.parse(req.responseText));
          } else {
            reject(`Erreur pendant le chargement de la page`);
          }
        }
      };

      req.send(null);
    });
  }
  findSessionById(sessionId) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open("GET", "http://localhost:3000/sessions?id=" + sessionId, true);

      req.onreadystatechange = aEvt => {
        if (req.readyState == 4) {
          if (req.status == 200) {
            resolve(JSON.parse(req.responseText));
          } else {
            reject(`Erreur pendant le chargement de la page`);
          }
        }
      };

      req.send(null);
    });
  }
}
