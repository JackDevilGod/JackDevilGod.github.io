fetch('/components/github_chart.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('github_chart').innerHTML = data;
                });