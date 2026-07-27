// ---------- Student Login ----------
function login() {

    let name = document.getElementById("studentName").value;
    let dept = document.getElementById("department").value;

    if (name == "" || dept == "") {
        alert("Please fill all details");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("department", dept);

    window.location.href = "event.html";
}


// ---------- Save Event ----------
function saveEvent() {

    let event = {

        category: document.getElementById("category").value,

        date: document.getElementById("date").value,

        time: document.getElementById("time").value,

        venue: document.getElementById("venue").value,

        description: document.getElementById("description").value,

        things: document.getElementById("things").value,

        organizer: document.getElementById("organizer").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value

    };

    let events = JSON.parse(localStorage.getItem("events")) || [];

    events.push(event);

    localStorage.setItem("events", JSON.stringify(events));

    window.location.href = "help.html";
}


// ---------- Save Help Request ----------
function saveHelp() {

    let help = {

        student: document.getElementById("studentName").value,

        category: document.getElementById("helpCategory").value,

        description: document.getElementById("helpDescription").value

    };

    let helps = JSON.parse(localStorage.getItem("helps")) || [];

    helps.push(help);

    localStorage.setItem("helps", JSON.stringify(helps));

    window.location.href = "noticeboard.html";
}


// ---------- Display Notice Board ----------
function displayNoticeBoard() {

    let board = document.getElementById("noticeBoard");

    if (board == null)
        return;

    let events = JSON.parse(localStorage.getItem("events")) || [];

    let helps = JSON.parse(localStorage.getItem("helps")) || [];

    board.innerHTML = "";

    // Display Events
    events.forEach(function (event) {

        board.innerHTML += `

        <div class="card">

        <h2>📢 ${event.category}</h2>

        <p><b>Date:</b> ${event.date}</p>

        <p><b>Time:</b> ${event.time}</p>

        <p><b>Venue:</b> ${event.venue}</p>

        <p><b>Description:</b> ${event.description}</p>

        <p><b>Things to Bring:</b> ${event.things}</p>

        <hr>

        <p><b>Organizer:</b> ${event.organizer}</p>

        <p><b>Phone:</b> ${event.phone}</p>

        <p><b>Email:</b> ${event.email}</p>

        </div>

        `;

    });

    // Display Help Requests
    helps.forEach(function (help) {

        board.innerHTML += `

        <div class="card">

        <h2>🤝 Help Needed</h2>

        <p><b>Student:</b> ${help.student}</p>

        <p><b>Category:</b> ${help.category}</p>

        <p><b>Description:</b> ${help.description}</p>

        </div>

        `;

    });

}