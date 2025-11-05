// Asynchronous( non - blocking)
// these are delegated to the browser or node.js APIs and run in the background, allowing JS to move on.


//|         TYPES                |            EXAMPLE                                       |
// -----------------------------------------------------------------------------------------
//| timers                       |   setTimeout(),setInterval()                             |
//| promises                     |   promise.resolve() , promise.reject() , then, catch     |
//| async functions              |   async function getData() {await fetch(...)}            |
//| fetch API                    |   fetch("https://api.example.com")                       |
//| network requests             |   XMLHTTPrequests, axious.get()                          |
//| file system                  |   fs.readFile() , fs.writeFile() (async version)         |
//| database queries             |   mongoDB , mysql , queries , etc.                       |
//| event listeners              |   buttion,addEventlistener("click", ....)                |
//| animation frames             |   requestanimationFrame()                                |
//| web workers                  |   background threads for heavy compulation               |

// these are handled by the Event loop, web APIs., and callback queue -- they dont block other code.
