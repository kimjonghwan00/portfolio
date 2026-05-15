document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const cards = document.querySelectorAll('.card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedTab = button.getAttribute('data-tab');

            // 버튼 활성화 상태 변경
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 카드 필터링
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                let isVisible = false;
                if (selectedTab === 'all') {
                    isVisible = true;
                } else {
                    isVisible = (selectedTab === cardCategory);
                }

                if (isVisible) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.display = 'flex';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });

    console.log('Portfolio Tab filter initialized');
});
