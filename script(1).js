let courseCount = 1;

document.getElementById('add-course').addEventListener('click', function() {
    courseCount++;
    const courseContainer = document.getElementById('course-container');
    const newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.innerHTML = `
        <label for="course-name-${courseCount}">Course Name:</label>
        <input type="text" id="course-name-${courseCount}" class="course-name" required>
        <label for="course-grade-${courseCount}">Grade:</label>
        <input type="text" id="course-grade-${courseCount}" class="course-grade" required>
        <label for="course-credit-${courseCount}">Credit:</label>
        <input type="number" id="course-credit-${courseCount}" class="course-credit" required>
    `;
    courseContainer.appendChild(newCourse);
});

document.getElementById('cgpa-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const grades = document.querySelectorAll('.course-grade');
    const credits = document.querySelectorAll('.course-credit');

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i].value.toUpperCase();
        const credit = parseFloat(credits[i].value);

        let gradePoint;

        switch (grade) {
            case 'A':
                gradePoint = 4.0;
                break;
            case 'B':
                gradePoint = 3.0;
                break;
            case 'C':
                gradePoint = 2.0;
                break;
            case 'D':
                gradePoint = 1.0;
                break;
            case 'F':
                gradePoint = 0.0;
                break;
            default:
                alert('Please enter a valid grade (A, B, C, D, F)');
                return;
        }

        totalPoints += gradePoint * credit;
        totalCredits += credit;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your CGPA is ${cgpa.toFixed(2)}`;
});
