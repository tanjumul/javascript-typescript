# JavaScript Execution Model

## Core Concepts

JavaScript is **synchronous** and **single-threaded**. This means it executes one line of code at a time in a specific order.

### Execution Context

The Execution Context consists of two main components:

1. **Call Stack** - Tracks the current function being executed
2. **Memory Heap** - Stores variables, functions, and objects

#### Example of Synchronous Execution

```javascript
console.log("1");  // Prints 1
console.log("2");  // Prints 2