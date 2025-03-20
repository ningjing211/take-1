// 动画管理器
const animationManager = {
  animations: [],
  
  add(selector, config) {
    this.animations.push({selector, config});
  },

  play() {
    this.animations.forEach(({selector, config}) => {
      try {
        const target = document.querySelector(selector);
        if(target) {
          gsap.to(target, config);
        } else {
          console.warn(`Animation target ${selector} not found`);
        }
      } catch(error) {
        console.warn(`GSAP animation failed for ${selector}: ${error.message}`);
      }
    });
  },

  // 滚动触发动画
  addScrollTrigger(selector, config) {
    try {
      const element = document.querySelector(selector);
      if(element) {
        ScrollTrigger.create({
          trigger: element,
          start: config.start || "top center",
          onEnter: () => {
            gsap.to(element, config.animation);
          },
          ...config.trigger
        });
      } else {
        console.warn(`ScrollTrigger target ${selector} not found`);
      }
    } catch(error) {
      console.warn(`ScrollTrigger creation failed for ${selector}: ${error.message}`);
    }
  }
};

export default animationManager; 