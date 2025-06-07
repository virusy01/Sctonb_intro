document.addEventListener('DOMContentLoaded', () => {
    // 헤더 메뉴 클릭 시 부드러운 스크롤 효과 추가
    document.querySelectorAll('.main-nav a').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault(); // 기본 동작 방지
            const targetId = anchor.getAttribute('href').substring(1); // 앵커의 href에서 ID 추출
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // 부드러운 스크롤 효과
                    block: 'start' // 스크롤 위치를 시작점으로 설정
                });
            }
        });
    });

    const video = document.querySelector("#main-video");
    if (video) {
        video.play();
    }

    const loginButton = document.querySelector(".login-button");
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            window.location.href = "/login.html";
        });
    }

    const tabButtons = document.querySelectorAll('.research-tabs button');
    const tabContents = document.querySelectorAll('.research-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                content.style.display = content.id === target ? 'block' : 'none';
            });
        });
    });

    document.querySelectorAll('.accordion-trigger').forEach(button => {
        button.addEventListener('click', () => {
            const accordionItem = button.parentElement;
            const isActive = accordionItem.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stickyHeader = document.querySelector('.sticky-header');
    const aboutSection = document.querySelector('#about');

    window.addEventListener('scroll', () => {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        if (aboutSectionTop <= 0) {
            stickyHeader.classList.add('active'); // 새로운 헤더 활성화
        } else {
            stickyHeader.classList.remove('active'); // 새로운 헤더 숨김
        }
    });
});