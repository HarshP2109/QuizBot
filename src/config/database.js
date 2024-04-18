const data = [
    {
        question: "What is Node.js?",
        a: "A runtime environment for executing JavaScript code outside of a web browser",
        b: "A programming language",
        c: "A database management system",
        d: "A front-end framework",
        correct: 'a',
    },
    {
        question: "What is the event loop in Node.js?",
        c: "A loop that processes asynchronous tasks",
        
        b: "A loop that handles synchronous tasks",
        
        a: "A loop that iterates through arrays",
        
        d: "A loop that manages browser events",
        correct: 'c',
    },
    {
        question: "What are modules in Node.js?",
        d: "Reusable blocks of code that encapsulate related functionality",
        
        b: "Files that store data",
        
        c: "Built-in functions provided by Node.js",
        
        a: "Configuration settings for Node.js applications",
        correct: 'd',
    },
    {
        question: "What is npm?",
        a: "Node Package Manager, used for installing and managing dependencies in Node.js projects",
        
        c: "A programming language",
        
        b: "A version control system",
        
        d: "A database management system",
        correct: 'a',
    },
    {
        question: "What are callbacks in Node.js?",
        b: "Functions passed as arguments to other functions, to be executed later",
        
        a: "A type of error handling mechanism",
        
        c: "A way to define HTML elements in JavaScript",
        
        d: "A method for creating animations",
        correct: 'b',
    },
    {
        question: "What is the purpose of the 'require' function in Node.js?",
        d: "To import modules into a Node.js application",
        
        b: "To define variables",
        
        c: "To create new functions",
        
        a: "To handle user input",
        correct: 'd',
    },
    {
        question: "What is the role of 'process' object in Node.js?",
        a: "To provide information about the current Node.js process",
        
        b: "To manage file I/O operations",
        
        c: "To handle HTTP requests",
        
        d: "To manipulate DOM elements",
        correct: 'a',
    },
    {
        question: "What is the purpose of 'fs' module in Node.js?",
        d: "To perform file system operations such as reading and writing files",
        
        b: "To create web servers",
        
        c: "To manipulate strings",
        
        a: "To interact with databases",
        correct: 'd',
    },
    {
        question: "What is the difference between 'setImmediate()' and 'setTimeout()' functions in Node.js?",
        b: "'setImmediate()' executes the callback immediately after the current event loop cycle, while 'setTimeout()' schedules the callback to be executed after a specified delay",
        
        a: "'setTimeout()' executes the callback immediately, while 'setImmediate()' schedules the callback to be executed after a specified delay",
        
        c: "'setTimeout()' and 'setImmediate()' are interchangeable and can be used interchangeably",
        
        d: "There is no difference between 'setImmediate()' and 'setTimeout()' functions",
        correct: 'b',
    },
    {
        question: "What is middleware in Express.js?",
        a: "Functions that have access to the request and response objects, and can modify them or terminate the request-response cycle",
        
        b: "A built-in module for handling file uploads",
        
        c: "A template engine for rendering HTML",
        
        d: "A method for handling HTTP requests",
        correct: 'a',
    },
    {
        question: "What is the purpose of 'next()' function in Express.js middleware?",
        c: "To pass control to the next middleware function in the stack",
        
        b: "To terminate the request-response cycle",
        
        a: "To send a response to the client",
        
        d: "To handle errors",
        correct: 'c',
    },
    {
        question: "What is the role of 'body-parser' middleware in Express.js?",
        d: "To parse incoming request bodies in a middleware before handlers, available under the 'req.body' property",
        
        b: "To create HTML templates",
        
        c: "To handle file uploads",
        
        a: "To render HTML views",
        correct: 'd',
    },
    {
        question: "What is the purpose of 'mongoose' module in Node.js?",
        b: "To interact with MongoDB databases and define schemas for documents",
        
        a: "To handle HTTP requests",
        
        c: "To render HTML views",
        
        d: "To create web servers",
        correct: 'b',
    },
    {
        question: "What are streams in Node.js?",
        a: "Objects that allow reading data from a source or writing data to a destination in a continuous manner",
        
        b: "A type of data structure",
        
        c: "A method for handling asynchronous operations",
        
        d: "A mechanism for handling events",
        correct: 'a',
    },
    {
        question: "What is the purpose of 'cluster' module in Node.js?",
        c: "To enable the creation of child processes to handle incoming requests, thereby improving performance and scalability",
        
        b: "To create clusters of web servers",
        
        a: "To manage file system operations",
        
        d: "To parse incoming request bodies",
        correct: 'c',
    }
];


module.exports = data