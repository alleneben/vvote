var FormData =  require('form-data');
const fetch =  require('node-fetch');
const io = require('socket.io')();
// const url = 'http://votes.loc/biz/bis/';
const url ='https://evoting.versified.xyz/biz/bis/';

var data = null;
function makerequest(){
  var fm = new FormData(),
  pps='{"rid":"n","pos":"n","plm":"n"}'
  fm.append("s", "fd");fm.append("a", "countvotes");fm.append("dd", pps);
  fm.append("uid", '44');fm.append("df", "sp_votes_find");fm.append('m','l');

  fetch(url,{method: 'post', body: fm})
  .then(res => res.json())
  .then(rd => { 
    data = rd
    console.log(rd);
    
  })

}


io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);


    setInterval(() => {
      makerequest();
      client.emit('timer', data);
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
