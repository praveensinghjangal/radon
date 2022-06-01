function printDate() {
    console.log( '01-06-2022')
    
}

function printMonth(){
    console.log('JUNE')
}

function getBatchInfo(){
    console.log(' Roadon, the topic for today is Nodejs module system')
}

module.exports.a= printDate
module.exports.b= printMonth
module.exports.c= getBatchInfo