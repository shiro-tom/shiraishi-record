document.addEventListener('DOMContentLoaded', () => {
    // スムーズスクロールの実装
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // スクロール時のアニメーション
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// モーダルを開く
function openModal(skillId) {
    const modal = document.getElementById('modal');
    const details = document.querySelectorAll('.modal-detail');
    details.forEach(detail => {
        detail.classList.remove('active');
    });
    document.getElementById(skillId).classList.add('active');
    modal.style.display = 'block';
}

// モーダルを閉じる
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// モーダル外をクリックで閉じる
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
