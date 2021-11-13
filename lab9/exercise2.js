

class Subject {
    eat = []
    study = []

    on(event, fn){
        if(event === "eat"){
            this.eat.push(fn)
        }else if(event === "study"){
            this.study.push(fn)
        }
    }
    emit(event, message){
        if(event === "eat"){
            this.eat.forEach(observer=> observer(message))
        }else if(event === "study"){
            this.study.forEach(observer=> observer(message))
        }
    }

}

const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log); 
function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');