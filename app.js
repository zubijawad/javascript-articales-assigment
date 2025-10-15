
    document.querySelector('.btn').addEventListener('click', function (e) {
        e.preventDefault(); 
        const searchValue = document.querySelector('.srch').value.trim();
        if (searchValue) {
            console.log("Search for:", searchValue);
            alert("Searching for: " + searchValue);
        } else {
            alert("Please enter something to search.");
        }
    });

    
    document.querySelector('.cn a').addEventListener('click', function (e) {
        e.preventDefault();
        alert("Thanks for showing interest! Registration coming soon.");
    });

    
    document.querySelector('.btnn a').addEventListener('click', function (e) {
        e.preventDefault();
        const email = document.querySelector('input[type="email"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();

        if (!email || !password) {
            alert("Please fill in both email and password.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            console.log("Logging in with", email);
            alert("Login successful (demo only)");
        }
    });

    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }