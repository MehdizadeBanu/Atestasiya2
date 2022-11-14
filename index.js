class Message {
    constructor(muellifinAdi, mesajVaxti, mesajMetni) {
        this.muellif = muellifinAdi;
        this.mesajVaxti = mesajVaxti;
        this.metn = mesajMetni;
    }

    toString() {
        this.mesajVaxti = function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }

    }
}

class Messenger {
    constructor() {
        this.history = [];
    }

    show_history() {
        function gettime() {
            let now = new Date();
            return `${now.getHours()}:${now.getMinutes()}`
        }

        console.log(`${gettime()} ${this.history[0]}: ${this.history[1]}`);
        console.log(`${gettime()} ${this.history[2]}: ${this.history[3]}`);
    }

    send(muellifinAdi, mesajMetni) {
        this.muellif = muellifinAdi;
        this.metn = mesajMetni;

        this.history.push(this.muellif, this.metn);
    }
}

let messenger = new Messenger();
messenger.send('Adil', 'ilk mesaj');
messenger.send('Məryəm', 'İkinci mesaj');
messenger.show_history();