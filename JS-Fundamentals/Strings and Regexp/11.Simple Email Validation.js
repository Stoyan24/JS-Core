function validate(email) {
    let pattern = /^[a-zA-Z-0-9]+@[a-z]+\.[a-z]+$/;
    let result = pattern.test(email);
    if(result){
        console.log('Valid')
    }else {
        console.log('Invalid');
    }
}
console.log(validate('valid@email.bg'));