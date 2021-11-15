
class Info {
    loggingAlgo (msg) {
       console.info(msg)
    }
}
class Warn {
    loggingAlgo (msg) {
        console.warn(msg)
    }
}
class Error {
    loggingAlgo (msg) {
        console.error(msg)
    }
}
class Table {
    loggingAlgo (msg) {
        console.table(msg)
    }
}

class Strategy {
    loggingAlgorithm =""

    setStrategy(logger){
        this.loggingAlgorithm = logger
    }
    logging(msg){
       this.loggingAlgorithm.loggingAlgo(msg)
    }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);