let chart;

function simulate() {

    const v = parseFloat(document.getElementById("velocity").value);
    const angle = parseFloat(document.getElementById("angle").value);
    const g = 9.81;

    const theta = angle * Math.PI / 180;

    let time = 0;
    let data = [];

    while (true) {
        let x = v * Math.cos(theta) * time;
        let y = v * Math.sin(theta) * time - 0.5 * g * time * time;

        if (y < 0) break;

        data.push({x: x, y: y});
        time += 0.05;
    }

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(document.getElementById("graph"), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Projectile Path',
                data: data,
                borderColor: '#38bdf8',
                backgroundColor: '#38bdf8',
                showLine: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Distance (m)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Height (m)'
                    }
                }
            }
        }
    });
}