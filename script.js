document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json') // JSON dosyasının adını ve yolunu doğru ayarlayın
      .then(response => response.json())
      .then(data => {
        // Kişisel Bilgiler
        document.getElementById('name').textContent = data.personalInfo.name;
        document.getElementById('title').textContent = data.personalInfo.title;
        document.getElementById('email').textContent = data.personalInfo.email;
        document.getElementById('phone').textContent = data.personalInfo.phone;
        document.getElementById('linkedin').textContent = data.personalInfo.linkedin;
        document.getElementById('github').textContent = data.personalInfo.github;
        document.getElementById('location').textContent = data.personalInfo.location;
  
        // İş Deneyimi
        const workEntriesDiv = document.getElementById('work-entries');
        data.workExperience.forEach(item => {
          const div = document.createElement('div');
          div.innerHTML = `
            <strong>${item.position} - ${item.company}</strong>
            <p>${item.startDate} - ${item.endDate}</p>
            <p>${item.description}</p>
          `;
          workEntriesDiv.appendChild(div);
        });
  
        // Eğitim
        const educationEntriesDiv = document.getElementById('education-entries');
        data.education.forEach(item => {
          const div = document.createElement('div');
          div.innerHTML = `
            <strong>${item.degree} - ${item.school}</strong>
            <p>${item.startDate} - ${item.endDate}</p>
          `;
          educationEntriesDiv.appendChild(div);
        });
  
        // Teknik Beceriler
        const techSkillsList = document.getElementById('tech-skills-list');
        data.technicalSkills.forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          techSkillsList.appendChild(li);
        });
  
        // Yumuşak Beceriler
        const softSkillsList = document.getElementById('soft-skills-list');
        data.softSkills.forEach(skill => {
          const li = document.createElement('li');
          li.textContent = skill;
          softSkillsList.appendChild(li);
        });
  
        // Projeler
        const projectEntriesDiv = document.getElementById('project-entries');
        data.projects.forEach(project => {
          const div = document.createElement('div');
          div.innerHTML = `
            <strong>${project.name}</strong>
            <p>${project.description}</p>
            <p>Technologies: ${project.technologies.join(', ')}</p>
          `;
          projectEntriesDiv.appendChild(div);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });