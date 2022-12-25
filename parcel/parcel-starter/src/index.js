import fs from 'fs';
import $ from 'jquery';
import { jokes } from './jokes';
import { observer } from './observer';

const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');
console.log(copy);
$('#copyright').text(copy);

// jokes.getOne()
//   .then(joke => {
//     $('#joke').text = joke;
//   });

setTimeout(() => {
    document.body.className = 'test';
  }, 1000);