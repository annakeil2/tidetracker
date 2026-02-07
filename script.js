const form = document.getElementById("ApplicationForm");
const applicationsList = document.getElementById("applicationList");
const rejectedApplicationList = document.getElementById("rejectedApplicationList");
const progressFill = document.getElementById("progressFill");
const encouragement = document.getElementById("encouragement");
const feedback = document.getElementById("feedback");

let deletedApplicationCount = 0;

const applicationStatusMap = {
  "Applied": "Applied",
  "InitialScreen": "Initial Screen",
  "FirstInterview": "1st Interview",
  "FinalInterview": "Final Interview",
  "Offered": "Offered",
  "Rejected": "Rejected",
};

const messages = [
  "You've started, well done! Only focus on the next step.",
  "Look at you go, you little rockstar!",
  "Over halfway already!",
  "Great! Try to submit at least one more. Future you will thank you!",
  "Five already?! 100% main character energy!",
  "I see you've decided to keep going. I don't have to tell you how amazing you are, right?"
];

let applications = loadApplications();
for (let i = 0; i < applications.length; i++) {
  if (applications[i].rawStatus === "Rejected"){
    addApplicationToDOM(applications[i], rejectedApplicationList)
  }
  else {
    addApplicationToDOM(applications[i], applicationsList);
  }
}



// updateProgress();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const company = document.getElementById("company").value.trim();
  const role = document.getElementById("role").value.trim();
  const rawStatus = document.getElementById("applicationStatus").value;
  const notes = document.getElementById("notes").value.trim();
  const priority = document.getElementById("priority").checked;

  const status = applicationStatusMap[rawStatus]

  if (!company || !role) {
    feedback.textContent = "Future you needs at least a company and a role in order to keep track.";
    feedback.style.color = "#c42307ff";
    return;
  }

  if (company.length < 2 || role.length < 2) {
    feedback.innerHTML = "You must enter at least 2 characters in the 'company' and 'role' fields<br>- Future You'll be delighted.";
    feedback.style.color = "#eb4325ff";
    return;
  }


  // Application object
  const application = {
    company,
    role,
    status,
    rawStatus,
    notes,
    priority,
    createdAt: new Date()  //this is a constructor
  };

  applications.push(application);

  if (application.rawStatus === "Rejected"){
    addApplicationToDOM(application, rejectedApplicationList)
  }
  else {
    addApplicationToDOM(application, applicationsList);
  }
  updateProgress();

  saveApplications(applications);

  feedback.textContent = priority
    ? "Priority added. Eyes on this one!"
    : "Application successfully added";

  feedback.style.color = "#19b954ff";
  form.reset();
});

function saveApplications(applications) {
  const jsonApplications = JSON.stringify(applications);
  localStorage.setItem('applications', jsonApplications);
}

function loadApplications() {
  const jsonApplications = localStorage.getItem('applications');
  if (!jsonApplications) {
    return [];
  }
  const results = JSON.parse(jsonApplications);
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    results[i] = {
      company: result.company,
      role: result.role,
      status: result.status,
      rawStatus: result.rawStatus,
      notes: result.notes,
      priority: result.priority,
      createdAt: new Date(result.createdAt)
    };
  }
  return results;
}

function createDropdown(parent, optionsMap, selectedKey, onChange) {
  const select = document.createElement("select");


  let options = [];
  for (let key in optionsMap) {
    const text = optionsMap[key];
    const selected = (selectedKey === key) ? " selected" : "";
    options.push(`<option value="${key}"${selected}>${text}</option>`)
  }
  select.innerHTML = options.join("\n")
  select.addEventListener("change", onChange);
  parent.appendChild(select);


}

/**
 * @param {Date} date 
 */
function timeStamp(date) {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  return (`${year}-${month}-${day}`);
}

function addApplicationToDOM(app, targetElement) {
  const li = document.createElement("li");
  li.className = "application";
  if (app.priority) {
    li.classList.add("priority");
  }

  const createdAt = app.createdAt.getTime();
  const generatedDropdownId = `generatedDropdown${createdAt}`;
  const notesWrapper = (app.notes)
    ? `<div class="notes-wrapper">
        <div class="notes">Your notes: ${app.notes}</div>
        <time datetime="${timeStamp(app.createdAt)}">${timeStamp(app.createdAt)}</time>
      </div>`
    : "";

  li.innerHTML = `
    <div class="application-header">
      <div class="app-details">
        ${(app.priority) ? "⭐" : ""}
        <span>${app.company}</span>
        <span>${app.role}</span>
        <span id="${generatedDropdownId}" class="status-${app.rawStatus}"></span>
      </div>
      <button class="delete-btn">Delete</button>
    </div>
    ${notesWrapper}
    `;

  li.querySelector(".delete-btn").addEventListener("click", function() {
    const result = window.confirm('Are you sure you want to delete this application?');
    if (!result) {
      return;
    }
    applications = applications.filter(function (a) {
      return a !== app;
    });
    li.remove();
    deletedApplicationCount++;
    updateProgress();
    saveApplications(applications);
  });

  targetElement.appendChild(li);
  const generatedDropdown = document.getElementById(generatedDropdownId);
  createDropdown(
    generatedDropdown,
    applicationStatusMap,
    app.rawStatus,
    function (event) {
      console.log(event)
      app.rawStatus = event.target.value;
      app.status = applicationStatusMap[event.target.value];
      saveApplications(applications);
      if (app.rawStatus === "Rejected"){
        rejectedApplicationList.appendChild(li);
      }
      else {
        applicationsList.appendChild(li);
      }
    }
  );
}

function updateProgress() {
  const count = applications.length + deletedApplicationCount;
  const goal = 5;

  progressFill.style.width =
    Math.min((count / goal) * 100, 100) + "%";

  encouragement.textContent =
    messages[Math.min(count - 1, messages.length - 1)];
}

function clearFeedback() {
  // console.log ("ClearFeedback")
  const feedback = document.getElementById("feedback");
  feedback.innerHTML = "";
}
const company = document.getElementById("company");
company.addEventListener("click", clearFeedback);

const role = document.getElementById("role");
role.addEventListener("click", clearFeedback);

const notes = document.getElementById("notes");
notes.addEventListener("click", clearFeedback);

const applicationStatus = document.getElementById("applicationStatus");
applicationStatus.addEventListener("click", clearFeedback);