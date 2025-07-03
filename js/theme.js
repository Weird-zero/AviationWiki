// 保存主题设置
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("themeBtn");

    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");

    btn.innerText = isDark ? "🌞" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// 页面加载时读取设置
window.onload = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        document.getElementById("themeBtn").innerText = "🌞";
    }
};

//主页侧边栏收起展开控制
const toggleBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('aside');
const container = document.querySelector('.container');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    container.classList.toggle('sidebar-collapsed');
});

// 页面加载后 若干ms 自动收起侧边栏，这么做为了让用户知道侧边栏的存在。
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        sidebar.classList.add('collapsed');
        container.classList.add('sidebar-collapsed');
    }, 700); // 这里改时间，单位为ms
});