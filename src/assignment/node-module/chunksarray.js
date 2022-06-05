
const _ = require('lodash');

function myfunction(){
    const arc = ['january','feb', 'march','april','may','june','july','august', 'september', 'october', 'nov', 'dec'];
    const newarray= _.chunk(arc, 3)
    console.log(newarray);
}

module.exports.cab= myfunction