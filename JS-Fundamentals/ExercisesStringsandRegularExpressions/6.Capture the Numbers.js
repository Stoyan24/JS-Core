function digits(text) {
    let pattern = /\d+/g;
    console.log(text.join('').match(pattern).join(' '));
}
digits(['The300 What is that?' ,'I think it’s the 3rd movie.',' Lets watch it at 22:45']);