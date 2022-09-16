let login = function(password) {
    if(password === 'test123') {
        return 'Successfully logged in';
    } else {
        return 'Password incorrect, please try again';
    }
    };

    let result = login('test123');

    console.log(result);