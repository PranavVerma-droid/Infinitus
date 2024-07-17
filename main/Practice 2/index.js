let chart;
const ctx = document.getElementById('ai-impact-chart').getContext('2d');

function createChart() {
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Economic Growth', 'Job Creation', 'Ethical Concerns', 'Environmental Impact'],
            datasets: [{
                label: 'AI Impact Score',
                data: [75, 60, 80, 70],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)',
                    'rgba(46, 204, 113, 0.6)',
                    'rgba(231, 76, 60, 0.6)',
                    'rgba(241, 196, 15, 0.6)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(231, 76, 60, 1)',
                    'rgba(241, 196, 15, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

createChart();

document.getElementById('update-chart').addEventListener('click', function () {
    const newData = [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100)
    ];
    chart.data.datasets[0].data = newData;
    chart.update();
});

// Smooth scrolling and section display
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });

        targetElement.classList.remove('hidden');
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for Submitting the Form! We Will Get Back to You!");
});

function animateChat() {
    const messages = document.querySelectorAll('.chat-message');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.animation = 'fadeInTop 0.5s ease-out forwards';
        }, index * 1000);
    });
}

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        
        const targetElement = document.getElementById(targetId);
        targetElement.classList.remove('hidden');
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        if (targetId === 'how-it-works') {
            animateChat();
        }
    });
});

document.getElementById('home').classList.remove('hidden');