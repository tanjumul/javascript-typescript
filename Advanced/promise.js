// promise has 3 states ; 
/** 
 * fullfiled 
 * pending 
 * rejected 
 * 
 * * 
 */

const promiseOne = new Promise(function(resolve , reject){ 
  //do async tasks 
  //Db task calls , crypto.

})


/**
 * PROMISE STATES DEMONSTRATION
 * 1. Pending - Initial state, neither fulfilled nor rejected
 * 2. Fulfilled - Operation completed successfully
 * 3. Rejected - Operation failed
 */

// ============================================
// BASIC PROMISE EXAMPLE
// ============================================
const promiseOne = new Promise(function(resolve, reject) {
    // Do async tasks
    // DB task calls, crypto, API calls, etc.
    
    console.log("⏳ Promise is in PENDING state...");
    
    // Simulating async operation
    setTimeout(() => {
        const success = true; // Change to false to test rejection
        
        if (success) {
            resolve({ 
                message: "✅ Promise FULFILLED!",
                data: { 
                    id: 1, 
                    name: "John Doe",
                    timestamp: new Date().toISOString()
                }
            });
        } else {
            reject({
                message: "❌ Promise REJECTED!",
                error: "Database connection failed"
            });
        }
    }, 2000);
});

// Consuming the promise
promiseOne
    .then((result) => {
        console.log("Success:", result.message);
        console.log("Data:", result.data);
    })
    .catch((error) => {
        console.error("Error:", error.message);
        console.error("Details:", error.error);
    })
    .finally(() => {
        console.log("🔚 Promise settled (either fulfilled or rejected)");
    });

// ============================================
// REAL-WORLD EXAMPLE: SIMULATING API CALL
// ============================================
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        console.log(`\n🔄 Fetching user data for ID: ${userId}...`);
        
        // Simulating API call with delay
        setTimeout(() => {
            // Simulating different scenarios
            if (userId === 1) {
                resolve({
                    status: 200,
                    user: {
                        id: 1,
                        name: "Alice Johnson",
                        email: "alice@example.com",
                        role: "Developer"
                    }
                });
            } else if (userId === 2) {
                resolve({
                    status: 200,
                    user: {
                        id: 2,
                        name: "Bob Smith",
                        email: "bob@example.com",
                        role: "Designer"
                    }
                });
            } else if (userId === 999) {
                reject({
                    status: 404,
                    message: "User not found"
                });
            } else {
                reject({
                    status: 500,
                    message: "Internal server error"
                });
            }
        }, 1500);
    });
}

// Testing the API simulation
console.log("\n===== API SIMULATION =====");

// Success case
fetchUserData(1)
    .then(response => {
        console.log("✅ User found:", response.user.name);
        console.log("Role:", response.user.role);
    })
    .catch(error => {
        console.error("❌ Error:", error.message);
    });

// Error case - User not found
fetchUserData(999)
    .then(response => {
        console.log("User found:", response.user.name);
    })
    .catch(error => {
        console.error("❌ Error:", error.status, "-", error.message);
    });

// ============================================
// PROMISE CHAINING EXAMPLE
// ============================================
console.log("\n===== PROMISE CHAINING =====");

function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: id, name: `User ${id}` });
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: user,
                posts: [
                    { id: 1, title: "First Post" },
                    { id: 2, title: "Second Post" }
                ]
            });
        }, 1000);
    });
}

function getPostComments(postData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...postData,
                comments: [
                    { id: 1, text: "Great post!" },
                    { id: 2, text: "Thanks for sharing" }
                ]
            });
        }, 1000);
    });
}

// Chaining promises
getUser(1)
    .then(user => {
        console.log(`👤 Got user: ${user.name}`);
        return getUserPosts(user);
    })
    .then(userWithPosts => {
        console.log(`📝 Got ${userWithPosts.posts.length} posts`);
        return getPostComments(userWithPosts);
    })
    .then(finalData => {
        console.log("💬 Final data with comments:", finalData);
    })
    .catch(error => {
        console.error("Error in chain:", error);
    });

// ============================================
// PROMISE.ALL EXAMPLE - Parallel Execution
// ============================================
console.log("\n===== PROMISE.ALL =====");

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 1000, 'foo');
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("✅ All promises resolved:", values);
    })
    .catch(error => {
        console.error("❌ One promise failed:", error);
    });

// ============================================
// PROMISE.RACE EXAMPLE
// ============================================
console.log("\n===== PROMISE.RACE =====");

const slowPromise = new Promise(resolve => 
    setTimeout(() => resolve("Slow"), 3000)
);
const fastPromise = new Promise(resolve => 
    setTimeout(() => resolve("Fast"), 1000)
);

Promise.race([slowPromise, fastPromise])
    .then(result => {
        console.log("🏁 First to finish:", result);
    });

// ============================================
// ASYNC/AWAIT SYNTAX (Modern Approach)
// ============================================
console.log("\n===== ASYNC/AWAIT =====");

async function fetchUserDataAsync(userId) {
    try {
        console.log(`🔄 Fetching user ${userId} with async/await...`);
        const user = await fetchUserData(userId);
        console.log("✅ User data:", user);
        return user;
    } catch (error) {
        console.error("❌ Error in async function:", error);
        throw error;
    }
}

// Using async/await
fetchUserDataAsync(2)
    .then(result => {
        console.log("🎉 Async operation completed:", result.user.name);
    })
    .catch(error => {
        console.error("💥 Caught error:", error.message);
    });

// ============================================
// PROMISE WITH MULTIPLE .then() CALLBACKS
// ============================================
console.log("\n===== MULTIPLE CONSUMERS =====");

const sharedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Shared data");
    }, 500);
});

// Multiple consumers of the same promise
sharedPromise.then(data => {
    console.log("Consumer 1 received:", data);
});

sharedPromise.then(data => {
    console.log("Consumer 2 received:", data);
});

sharedPromise.then(data => {
    console.log("Consumer 3 received:", data);
});

// ============================================
// ERROR HANDLING BEST PRACTICES
// ============================================
console.log("\n===== ERROR HANDLING =====");

function riskyOperation() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random > 0.5) {
            resolve("Operation successful!");
        } else {
            reject(new Error("Operation failed randomly"));
        }
    });
}

// Using try-catch with async/await
async function handleRiskyOperation() {
    try {
        const result = await riskyOperation();
        console.log("✅", result);
    } catch (error) {
        console.error("❌", error.message);
    }
}

handleRiskyOperation();

// ============================================
// CUSTOM PROMISE WITH PROGRESS REPORTING
// ============================================
console.log("\n===== PROGRESS REPORTING =====");

function downloadFile(url) {
    return new Promise((resolve, reject) => {
        let progress = 0;
        console.log(`📥 Starting download from ${url}`);
        
        const interval = setInterval(() => {
            progress += 10;
            console.log(`📊 Download progress: ${progress}%`);
            
            if (progress >= 100) {
                clearInterval(interval);
                resolve({
                    file: "downloaded_file.pdf",
                    size: "2.5MB",
                    url: url
                });
            }
        }, 500);
    });
}

downloadFile("https://example.com/file.pdf")
    .then(result => {
        console.log("✅ Download complete:", result);
    })
    .catch(error => {
        console.error("❌ Download failed:", error);
    });

// ============================================
// UTILITY FUNCTION: PROMISE WITH TIMEOUT
// ============================================
console.log("\n===== PROMISE WITH TIMEOUT =====");

function promiseWithTimeout(promise, timeoutMs) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error(`Promise timed out after ${timeoutMs}ms`));
        }, timeoutMs);
        
        promise
            .then(result => {
                clearTimeout(timeout);
                resolve(result);
            })
           return timeout; 

  
            });
    });
}

function timelimit(n){ 
  limit = n*2; 
  
}
// Test with a slow promise
const slowOperation = new Promise((resolve) => {
    setTimeout(() => resolve("Slow operation complete"), 3000);
});

promiseWithTimeout(slowOperation, 2000)
    .then(result => {
        console.log("✅", result);
    })
    .catch(error => {
        console.error("⏰", error.message);
    });

console.log("\n🎯 All promise examples executed successfully!"); 
//new attention 