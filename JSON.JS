fetch('./JSON RESUME.JSON')
    .then((response) => response.json())
    .then((json) => console.log(json));

// for loop

const studentdata = {
    "John": {"ENGLISH": 80, "MATHS": 90, "SCIENCE": 70, "SOCIAL": 65, "TAMIL": 85},
    "Jane": {"ENGLISH": 70, "MATHS": 95, "SCIENCE": 75, "SOCIAL": 55, "TAMIL": 95},
    "Peter": {"ENGLISH": 89, "MATHS": 45, "SCIENCE": 55, "SOCIAL": 60, "TAMIL": 75},
  };
  
  const students = Object.keys(studentdata);
  console.log(students);
  
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`Student: ${student}`);
  
    const subjects = Object.keys(studentdata[student]);
    for (let j = 0; j < subjects.length; j++) {
      const subject = subjects[j];
      console.log(`${subject}: ${studentdata[student][subject]}`);
    }
  
    console.log(); // Add a newline for better readability
  }
  
// for in loop

const studentMarks = {
    "John": {"ENGLISH": 80, "MATHS": 90, "SCIENCE": 70, "SOCIAL": 65, "TAMIL": 85},
    "Jane": {"ENGLISH": 70, "MATHS": 95, "SCIENCE": 75, "SOCIAL": 55, "TAMIL": 95},
    "Peter": {"ENGLISH": 89, "MATHS": 45, "SCIENCE": 55, "SOCIAL": 60, "TAMIL": 75},
  };
  
  for (const student in studentMarks) {
    if (studentMarks.hasOwnProperty(student)) {
      console.log(`${student}'s marks:`);
  for (const subject in studentMarks[student]) {
    if (studentMarks[student].hasOwnProperty(subject)) {
      console.log(`${subject}: ${studentMarks[student][subject]}`);
        }
      }
      console.log(); // Add a line break between students
    }
  }
 
  // for of loop

  let studentM = {
    "John": {"ENGLISH": 80, "MATHS": 90, "SCIENCE": 70, "SOCIAL": 65, "TAMIL": 85},
    "Jane": {"ENGLISH": 70, "MATHS": 95, "SCIENCE": 75, "SOCIAL": 55, "TAMIL": 95},
    "Peter": {"ENGLISH": 89, "MATHS": 45, "SCIENCE": 55, "SOCIAL": 60, "TAMIL": 75},
  };
  
  for (const [student, subjects] of Object.entries(studentM)) {
    console.log(`Student: ${student}`);
  
    for (const [subject, mark] of Object.entries(subjects)) {
      console.log(`${subject}: ${mark}`);
    }
  
    console.log(); // Add a newline for better readability
  }

  //for each loop

  const studentmarks = {
    "John": {"ENGLISH": 80, "MATHS": 90, "SCIENCE": 70, "SOCIAL": 65, "TAMIL": 85},
    "Jane": {"ENGLISH": 70, "MATHS": 95, "SCIENCE": 75, "SOCIAL": 55, "TAMIL": 95},
    "Peter": {"ENGLISH": 89, "MATHS": 45, "SCIENCE": 55, "SOCIAL": 60, "TAMIL": 75},
  };
  
  Object.entries(studentmarks).forEach(([student, subjects]) => {
    console.log(`Student: ${student}`);
  
    Object.entries(subjects).forEach(([subject, mark]) => {
      console.log(`${subject}: ${mark}`);
    });
  
    console.log(); // Add a newline for better readability
  });
  