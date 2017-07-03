function solve(commands) {

  let processor = (function () {
        let list = [];

        function add(string) {
        list.push(string);
     }

        function remove(string) {
        list = list.filter(el => el !== string);
     }

        function print() {
        console.log(list.toString());
        }

        return {
            add,
            remove,
            print
        };
    })();

    for(let command of commands){
        let comTok = command.split(' ');
        processor[comTok[0]](comTok[1]);
    }
}


