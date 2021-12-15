// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

// To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object: 


// EventEmitter is class....  short way


const EventEmitter = require('events')
const custemEmitter = new EventEmitter()

custemEmitter.on('event trigger',()=> {
                console.log('event triggered');
                setTimeout(()=>{
                    console.log('callback inside event trigged this will execute right after next custem event method because it is system written event so that event trigger will remain in js stack thriughout execution')
                },0) // by setTimeout method i made it asynchronous
                console.log('a')
                
})
custemEmitter.on('event trigger',()=>{ console.log('\n event')})
custemEmitter.emit('event trigger' )





//                  ------>The EventEmitter Object<-----

/*
You can assign event handlers to your own events with the EventEmitter object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event, use the emit() method
*/

/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
*/