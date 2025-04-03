document.addEventListener("DOMContentLoaded", function () {
    let i = 0;
    const text = "Hi, I'm Yashdeep Tehlan";
    const speed = 100;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});
