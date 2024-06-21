
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 123) { // F12
            e.preventDefault();
            return false;
        } else if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
            e.preventDefault();
            return false;
        } else if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
            e.preventDefault();
            return false;
        } else if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
            e.preventDefault();
            return false;
        } else if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
            e.preventDefault();
            return false;
        }
    });
