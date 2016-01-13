#!/usr/bin/env node

'use strict';
/*
var local = 'Montreal';
if(local === 'Montreal') {
    print('Salut!');
} else if ('New Orleans') {
    print('Who Dat!');
} else {
    print('Where you at?');
}

function print(value) {
    console.log(value);
}

*/

var hour = new Date().getHours();
var hour = 2;

if(hour < 12) {
    print('Good morning')
} else if (hour < 17) {
    print('Good afternoon')
} else if (hour < 22) {
    print('Good evening')
} else if (hour < 24) {
    print('Good night')
} else {
    print('undefined')
}

function print(value) {
    console.log(value);
}
