// 滚动限制功能
const ScrollLimit = {
    init() {
        // 初始化变量
        this.lastScrollTop = 0;
        this.isScrolling = false;
        this.scrollTimeout = null;
        
        // 获取grow section
        this.growSection = document.querySelector('.grow-section, .grow-w');
        if (!this.growSection) {
            console.warn('Grow section not found');
            return;
        }
        
        // 显示footer
        const footer = document.querySelector('#footer');
        if (footer) {
            footer.style.display = 'block';
        }
        
        // 确保滚动条显示
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        
        // 不再阻止滚动，但仍监听滚动事件用于其他功能
        this.handleScroll = this.handleScroll.bind(this);
        this.debouncedScroll = this.debounce(this.handleScroll, 16);
        
        window.addEventListener('scroll', this.debouncedScroll, { passive: true });
    },
    
    handleScroll(e) {
        if (this.isScrolling) return;
        
        this.isScrolling = true;
        window.requestAnimationFrame(() => {
            const st = window.pageYOffset || document.documentElement.scrollTop;
            
            // 只记录滚动位置，不再限制滚动
            this.lastScrollTop = st <= 0 ? 0 : st;
            this.isScrolling = false;
        });
    },
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    cleanup() {
        if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
        }
        
        window.removeEventListener('scroll', this.debouncedScroll);
    }
};

// 导出模块
export default ScrollLimit; 