import animationManager from './animationManager.js';

// ... existing code ...

// 等待 DOM 加载完成
document.addEventListener("DOMContentLoaded", () => {
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
  
  // 初始化所有动画
  initAnimations();
});

function initAnimations() {
  // Pin element animation
  animationManager.add(".pin-element", {
    // 原有的动画配置
    duration: 1,
    y: 100,
    opacity: 1
  });

  // Window scroll animation
  animationManager.add(window, {
    duration: 1,
    scrollTo: {
      y: ".section-target",
      offsetY: 70
    }
  });

  // 添加滚动触发动画
  animationManager.addScrollTrigger(".scroll-element", {
    start: "top center",
    animation: {
      duration: 1,
      opacity: 1,
      y: 0
    },
    trigger: {
      toggleActions: "play none none reverse"
    }
  });

  // 执行所有动画
  animationManager.play();
}

// ... rest of the code ...
