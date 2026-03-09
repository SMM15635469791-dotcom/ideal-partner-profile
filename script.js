// script.js - 测试流程控制器
'use strict';

// MVVM 架构 - ViewModel
class TestViewModel {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(Questions.length).fill(null);
        this.calculator = new IdealPartnerCalculator();
        this.isTestCompleted = false;
        this.isPaused = false;
        
        this.initBindings();
        this.initEventListeners();
        this.renderCoverPage();
    }
    
    // 初始化数据绑定
    initBindings() {
        // 页面元素
        this.elements = {
            coverPage: document.getElementById('cover-page'),
            testPage: document.getElementById('test-page'),
            resultPage: document.getElementById('result-page'),
            startTestBtn: document.getElementById('start-test-btn'),
            currentQuestion: document.getElementById('current-question'),
            totalQuestions: document.getElementById('total-questions'),
            progressFill: document.getElementById('progress-fill'),
            sectionTitle: document.getElementById('section-title'),
            sectionDescription: document.getElementById('section-description'),
            questionText: document.getElementById('question-text'),
            optionsContainer: document.getElementById('options-container'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            skipBtn: document.getElementById('skip-btn'),
            questionCounter: document.getElementById('question-counter'),
            restartBtn: document.getElementById('restart-btn'),
            pauseBtn: document.getElementById('pause-btn'),
            pauseModal: document.getElementById('pause-modal'),
            resumeBtn: document.getElementById('resume-btn'),
            restartFromModalBtn: document.getElementById('restart-from-modal-btn'),
            retakeTestBtn: document.getElementById('retake-test-btn'),
            shareResultBtn: document.getElementById('share-result-btn'),
            shareModal: document.getElementById('share-modal'),
            copyLinkBtn: document.getElementById('copy-link-btn'),
            closeModals: document.querySelectorAll('.close-modal')
        };
        
        // 更新总题目数
        this.elements.totalQuestions.textContent = Questions.length;
    }
    
    // 初始化事件监听
    initEventListeners() {
        // 开始测试
        this.elements.startTestBtn.addEventListener('click', () => this.startTest());
        
        // 导航按钮
        this.elements.prevBtn.addEventListener('click', () => this.navigateToPrevious());
        this.elements.nextBtn.addEventListener('click', () => this.navigateToNext());
        this.elements.skipBtn.addEventListener('click', () => this.skipQuestion());
        this.elements.restartBtn.addEventListener('click', () => this.restartTest());
        
        // 暂停/继续
        this.elements.pauseBtn.addEventListener('click', () => this.togglePause());
        this.elements.resumeBtn.addEventListener('click', () => this.resumeTest());
        this.elements.restartFromModalBtn.addEventListener('click', () => this.restartTest());
        
        // 结果页面按钮
        this.elements.retakeTestBtn.addEventListener('click', () => this.retakeTest());
        this.elements.shareResultBtn.addEventListener('click', () => this.showShareModal());
        this.elements.copyLinkBtn.addEventListener('click', () => this.copyResultLink());
        
        // 关闭模态框
        this.elements.closeModals.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                }
            });
        });
        
        // 点击模态框背景关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });
        
        // 键盘导航
        document.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
    }
    
    // 渲染封面页
    renderCoverPage() {
        this.elements.coverPage.classList.add('active');
        this.elements.testPage.classList.remove('active');
        this.elements.resultPage.classList.remove('active');
    }
    
    // 开始测试
    startTest() {
        this.elements.coverPage.classList.remove('active');
        this.elements.testPage.classList.add('active');
        this.elements.resultPage.classList.remove('active');
        
        this.currentQuestionIndex = 0;
        this.renderQuestion();
        this.updateProgress();
    }
    
    // 渲染题目
    renderQuestion() {
        if (this.currentQuestionIndex >= Questions.length) {
            this.completeTest();
            return;
        }
        
        const question = Questions[this.currentQuestionIndex];
        
        // 更新题目信息
        this.elements.currentQuestion.textContent = this.currentQuestionIndex + 1;
        this.elements.questionText.textContent = question.text;
        this.elements.questionCounter.textContent = `第 ${this.currentQuestionIndex + 1} 题 / 共 ${Questions.length} 题`;
        
        // 更新部分信息
        const dimension = TestDimensions[question.dimension];
        this.elements.sectionTitle.textContent = `第${this.getDimensionNumber(question.dimension)}部分：${dimension.name}`;
        this.elements.sectionDescription.textContent = dimension.description;
        
        // 渲染选项
        this.renderOptions(question);
        
        // 更新导航按钮状态
        this.updateNavigationButtons();
    }
    
    // 渲染选项
    renderOptions(question) {
        this.elements.optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'option';
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            
            optionElement.innerHTML = `
                <span class="option-text">${option.text}</span>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            
            this.elements.optionsContainer.appendChild(optionElement);
        });
    }
    
    // 选择选项
    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        this.calculator.recordAnswer(this.currentQuestionIndex, optionIndex);
        
        // 更新UI
        const options = this.elements.optionsContainer.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.toggle('selected', index === optionIndex);
        });
        
        // 启用下一题按钮
        this.elements.nextBtn.disabled = false;
        
        // 自动进入下一题（可选）
        // setTimeout(() => this.navigateToNext(), 500);
    }
    
    // 跳过题目
    skipQuestion() {
        this.userAnswers[this.currentQuestionIndex] = null;
        this.navigateToNext();
    }
    
    // 导航到下一题
    navigateToNext() {
        if (this.currentQuestionIndex < Questions.length - 1) {
            this.currentQuestionIndex++;
            this.renderQuestion();
            this.updateProgress();
        } else {
            this.completeTest();
        }
    }
    
    // 导航到上一题
    navigateToPrevious() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderQuestion();
            this.updateProgress();
        }
    }
    
    // 更新进度
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / Questions.length) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        
        // 更新导航按钮状态
        this.updateNavigationButtons();
    }
    
    // 更新导航按钮状态
    updateNavigationButtons() {
        this.elements.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.elements.nextBtn.disabled = this.userAnswers[this.currentQuestionIndex] === null;
    }
    
    // 完成测试
    completeTest() {
        this.isTestCompleted = true;
        
        // 计算结果
        const result = this.calculator.calculateResult();
        
        // 显示结果页面
        this.elements.coverPage.classList.remove('active');
        this.elements.testPage.classList.remove('active');
        this.elements.resultPage.classList.add('active');
        
        // 渲染结果
        this.renderResult(result);
    }
    
    // 渲染结果
    renderResult(result) {
        // 更新结果类型
        document.getElementById('result-type-title').textContent = result.primaryType.name;
        document.getElementById('result-type-tag').textContent = this.getTypeTag(result.primaryType.name);
        
        // 更新结果描述
        document.getElementById('result-description').textContent = 
            this.getTypeDescription(result.primaryType.name);
        
        // 渲染维度分数
        this.renderDimensionScores(result.dimensionScores);
        
        // 渲染详细分析
        this.renderDetailedAnalysis(result);
        
        // 渲染建议
        this.renderRecommendations(result.primaryType.name);
        
        // 保存结果到本地存储
        this.saveResultToLocalStorage(result);
    }
    
    // 渲染维度分数
    renderDimensionScores(dimensionScores) {
        const container = document.getElementById('dimension-scores');
        container.innerHTML = '';
        
        TestDimensions.forEach(dimension => {
            const score = dimensionScores[dimension.id];
            if (!score) return;
            
            const scoreElement = document.createElement('div');
            scoreElement.className = 'dimension-score';
            scoreElement.innerHTML = `
                <div class="dimension-name">
                    <i class="${this.getDimensionIcon(dimension.id)}"></i>
                    ${dimension.name}
                </div>
                <div class="dimension-score-bar">
                    <div class="dimension-score-fill" style="width: ${score.percentage}%"></div>
                </div>
                <div class="dimension-percentage">${score.percentage}%</div>
            `;
            
            container.appendChild(scoreElement);
        });
    }
    
    // 渲染详细分析
    renderDetailedAnalysis(result) {
        const container = document.getElementById('analysis-grid');
        container.innerHTML = '';
        
        const insights = [
            {
                icon: 'fas fa-chart-bar',
                title: '核心特质匹配',
                text: this.getCoreTraitsAnalysis(result.primaryType.name)
            },
            {
                icon: 'fas fa-handshake',
                title: '关系模式偏好',
                text: this.getRelationshipPattern(result.primaryType.name)
            },
            {
                icon: 'fas fa-lightbulb',
                title: '关键需求洞察',
                text: this.getKeyInsights(result.primaryType.name)
            },
            {
                icon: 'fas fa-balance-scale',
                title: '决策风格倾向',
                text: this.getDecisionStyle(result.primaryType.name)
            }
        ];
        
        insights.forEach(insight => {
            const insightElement = document.createElement('div');
            insightElement.className = 'analysis-item';
            insightElement.innerHTML = `
                <h4><i class="${insight.icon}"></i> ${insight.title}</h4>
                <p>${insight.text}</p>
            `;
            container.appendChild(insightElement);
        });
    }
    
    // 渲染建议
    renderRecommendations(type) {
        const container = document.getElementById('recommendations-content');
        container.innerHTML = '';
        
        const recommendations = this.getTypeRecommendations(type);
        
        recommendations.forEach((rec, index) => {
            const recElement = document.createElement('div');
            recElement.className = 'recommendation-item';
            recElement.innerHTML = `
                <div class="recommendation-icon">${index + 1}</div>
                <div class="recommendation-text">${rec}</div>
            `;
            container.appendChild(recElement);
        });
    }
    
    // 暂停/继续测试
    togglePause() {
        this.isPaused = !this.isPaused;
        
        if (this.isPaused) {
            this.elements.pauseModal.classList.add('active');
        } else {
            this.elements.pauseModal.classList.remove('active');
        }
    }
    
    resumeTest() {
        this.isPaused = false;
        this.elements.pauseModal.classList.remove('active');
    }
    
    // 重新开始测试
    restartTest() {
        if (confirm('确定要重新开始测试吗？您的当前进度将被清除。')) {
            this.currentQuestionIndex = 0;
            this.userAnswers.fill(null);
            this.calculator = new IdealPartnerCalculator();
            this.isTestCompleted = false;
            this.isPaused = false;
            
            // 关闭模态框
            this.elements.pauseModal.classList.remove('active');
            this.elements.shareModal.classList.remove('active');
            
            this.startTest();
        }
    }
    
    // 重新测试（从结果页面）
    retakeTest() {
        this.restartTest();
    }
    
    // 显示分享模态框
    showShareModal() {
        this.elements.shareModal.classList.add('active');
    }
    
    // 复制结果链接
    copyResultLink() {
        const url = window.location.href.split('?')[0];
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('链接已复制到剪贴板！');
            })
            .catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制链接。');
            });
    }
    
    // 处理键盘导航
    handleKeyNavigation(e) {
        if (this.isPaused || !this.elements.testPage.classList.contains('active')) {
            return;
        }
        
        switch (e.key) {
            case 'ArrowLeft':
                if (!this.elements.prevBtn.disabled) {
                    this.navigateToPrevious();
                }
                break;
            case 'ArrowRight':
            case ' ':
                if (!this.elements.nextBtn.disabled) {
                    this.navigateToNext();
                }
                break;
            case '1':
            case '2':
            case '3':
            case '4':
                const index = parseInt(e.key) - 1;
                if (index >= 0 && index < 4) {
                    this.selectOption(index);
                }
                break;
        }
    }
    
    // 保存结果到本地存储
    saveResultToLocalStorage(result) {
        try {
            const testResult = {
                timestamp: new Date().toISOString(),
                result: result,
                statistics: this.calculator.getAnswerStatistics()
            };
            
            localStorage.setItem('idealPartnerTestResult', JSON.stringify(testResult));
            
            // 保存历史记录
            const history = JSON.parse(localStorage.getItem('idealPartnerTestHistory') || '[]');
            history.unshift({
                id: Date.now(),
                type: result.primaryType.name,
                date: new Date().toLocaleDateString(),
                data: testResult
            });
            
            // 只保留最近10条记录
            if (history.length > 10) {
                history.pop();
            }
            
            localStorage.setItem('idealPartnerTestHistory', JSON.stringify(history));
        } catch (error) {
            console.error('保存结果失败:', error);
        }
    }
    
    // 辅助方法
    getDimensionNumber(dimensionId) {
        const chineseNumbers = ['一', '二', '三', '四', '五', '六'];
        return chineseNumbers[dimensionId] || (dimensionId + 1);
    }
    
    getDimensionIcon(dimensionId) {
        const icons = [
            'fas fa-eye',
            'fas fa-birthday-cake',
            'fas fa-brain',
            'fas fa-hiking',
            'fas fa-briefcase',
            'fas fa-star'
        ];
        return icons[dimensionId] || 'fas fa-question';
    }
    
    getTypeTag(typeName) {
        const tags = {
            [TestResultTypes.SOUL_MATE]: '深度理解型伴侣',
            [TestResultTypes.STEADY_BUILDER]: '稳定共建型伴侣',
            [TestResultTypes.VIBRANT_ADVENTURER]: '活力冒险型伴侣',
            [TestResultTypes.GENTLE_GUARDIAN]: '温柔守护型伴侣',
            [TestResultTypes.ELITE_COMPANION]: '精英同行型伴侣',
            [TestResultTypes.FREE_SPIRIT]: '随性自由型伴侣',
            [TestResultTypes.TRADITIONAL_STABILIZER]: '传统安定型伴侣',
            [TestResultTypes.ROMANTIC_DREAMER]: '浪漫梦想型伴侣'
        };
        
        return tags[typeName] || '理想伴侣';
    }
    
    getTypeDescription(typeName) {
        const descriptions = {
            [TestResultTypes.SOUL_MATE]: '您最看重精神层面的深度连接，寻求能够理解您内心世界、价值观高度契合的伴侣。您相信真正的默契来自于灵魂的共鸣，而不仅仅是表面的吸引。',
            [TestResultTypes.STEADY_BUILDER]: '您向往经得起时间考验的、稳定而温暖的共生关系。您像一个深思熟虑的建筑师，寻求的是一位能够并肩携手、共同打造生活坚实基础的"人生合伙人"。',
            [TestResultTypes.VIBRANT_ADVENTURER]: '您渴望和另一个有趣灵魂一起，体验生命这场盛大冒险。您理想的伴侣，首先得是您的"最佳玩伴"和"冒险搭档"。',
            [TestResultTypes.GENTLE_GUARDIAN]: '您珍视那份细腻的体贴、无言的守护与情感上的深刻依恋。您向往的关系是亲密、包容、充满情感支持的。',
            [TestResultTypes.ELITE_COMPANION]: '您期待强强联合的伙伴关系，在与彼此的共勉中攀登各自的高峰。您心中的理想伴侣，是能够与您并肩站在高处眺望风景的"人生战友"。',
            [TestResultTypes.FREE_SPIRIT]: '您崇尚关系中的轻松自在、真实不羁与对彼此独特性的最大尊重。您抗拒被传统的框架或过高的期望所束缚。',
            [TestResultTypes.TRADITIONAL_STABILIZER]: '您信赖那些历经时间检验的、清晰而稳定的关系结构与承诺。明确的社会角色、清晰的关系阶段和得到广泛认可的生活方式，能带来最大的安全感和归属感。',
            [TestResultTypes.ROMANTIC_DREAMER]: '您坚信爱本身的光芒、心动的魔法与关系中永不褪色的仪式感。您是一个不折不扣的情感主义者，追求爱情的理想化表达。'
        };
        
        return descriptions[typeName] || '基于您的选择，我们为您生成了专属的理想伴侣画像。';
    }
    
    getCoreTraitsAnalysis(typeName) {
        const analyses = {
            [TestResultTypes.SOUL_MATE]: '深度理解、精神共鸣、独立思考、真诚透明',
            [TestResultTypes.STEADY_BUILDER]: '责任感强、务实可靠、忠诚稳定、善于规划',
            [TestResultTypes.VIBRANT_ADVENTURER]: '充满活力、好奇心强、幽默有趣、热爱探索',
            [TestResultTypes.GENTLE_GUARDIAN]: '温柔体贴、情感细腻、善解人意、包容支持',
            [TestResultTypes.ELITE_COMPANION]: '专业卓越、目标明确、理性睿智、追求成长',
            [TestResultTypes.FREE_SPIRIT]: '自由独立、真实随性、开放包容、尊重空间',
            [TestResultTypes.TRADITIONAL_STABILIZER]: '传统稳重、家庭观念强、遵守承诺、重视秩序',
            [TestResultTypes.ROMANTIC_DREAMER]: '情感丰富、浪漫细腻、注重仪式、追求完美'
        };
        
        return analyses[typeName] || '根据您的选择分析出的核心特质组合。';
    }
    
    getRelationshipPattern(typeName) {
        const patterns = {
            [TestResultTypes.SOUL_MATE]: '独立又相依的灵魂伴侣模式，注重精神层面的深度交流',
            [TestResultTypes.STEADY_BUILDER]: '稳定共建的团队合作模式，共同规划未来承担责任',
            [TestResultTypes.VIBRANT_ADVENTURER]: '共同探索的冒险伙伴模式，保持生活的新鲜与活力',
            [TestResultTypes.GENTLE_GUARDIAN]: '相互依存的温暖守护模式，提供情感支持与安全感',
            [TestResultTypes.ELITE_COMPANION]: '强强联合的成长伙伴模式，互相激励共同进步',
            [TestResultTypes.FREE_SPIRIT]: '自由舒适的朋友式伴侣模式，保持各自空间与独立性',
            [TestResultTypes.TRADITIONAL_STABILIZER]: '传统稳定的家庭中心模式，遵循明确角色与责任',
            [TestResultTypes.ROMANTIC_DREAMER]: '浪漫梦幻的激情伴侣模式，注重情感表达与仪式感'
        };
        
        return patterns[typeName] || '基于您偏好的关系互动方式。';
    }
    
    getKeyInsights(typeName) {
        const insights = {
            [TestResultTypes.SOUL_MATE]: '您最需要的是能被深度理解的感觉，而非表面的陪伴',
            [TestResultTypes.STEADY_BUILDER]: '稳定的承诺和可靠的行动比华丽的言语更能打动您',
            [TestResultTypes.VIBRANT_ADVENTURER]: '新鲜感和共同体验是维持您关系热情的关键',
            [TestResultTypes.GENTLE_GUARDIAN]: '细腻的关怀和情感的稳定性对您至关重要',
            [TestResultTypes.ELITE_COMPANION]: '相互尊重的能力认可和共同成长让您感到满足',
            [TestResultTypes.FREE_SPIRIT]: '足够的个人空间和真实的相处让您感到舒适',
            [TestResultTypes.TRADITIONAL_STABILIZER]: '明确的承诺和传统价值的实现给您安全感',
            [TestResultTypes.ROMANTIC_DREAMER]: '持续的浪漫表达和用心的仪式感让您感到被爱'
        };
        
        return insights[typeName] || '基于您的选择分析出的关键情感需求。';
    }
    
    getDecisionStyle(typeName) {
        const styles = {
            [TestResultTypes.SOUL_MATE]: '倾向于深度讨论后的共同决定，重视思想的碰撞',
            [TestResultTypes.STEADY_BUILDER]: '偏好稳妥务实的决策，经过充分考量和规划',
            [TestResultTypes.VIBRANT_ADVENTURER]: '灵活随性的决策风格，乐于尝试新的可能性',
            [TestResultTypes.GENTLE_GUARDIAN]: '温和包容的决策方式，会考虑对方感受和关系和谐',
            [TestResultTypes.ELITE_COMPANION]: '理性分析的决策模式，基于数据和逻辑判断',
            [TestResultTypes.FREE_SPIRIT]: '自主独立的决策倾向，不喜欢被约束或过度干涉',
            [TestResultTypes.TRADITIONAL_STABILIZER]: '遵循传统和经验的决策，重视稳定和可预测性',
            [TestResultTypes.ROMANTIC_DREAMER]: '情感驱动的决策方式，更相信直觉和内心的感觉'
        };
        
        return styles[typeName] || '反映您在关系中的重要决策倾向。';
    }
    
    getTypeRecommendations(typeName) {
        const recommendations = {
            [TestResultTypes.SOUL_MATE]: [
                '给那些"慢热"但真诚的人一点时间，让理想的共鸣照进生活的烟火',
                '在仰望星空时，也能携手漫步人间，平衡精神追求与现实生活',
                '保持开放心态，不同形式的深度连接都可能带来惊喜'
            ],
            [TestResultTypes.STEADY_BUILDER]: [
                '在专注"建设"的同时，别忘了偶尔为关系"留白"，享受即兴的快乐',
                '坚固的城池里，也需要有滋养心灵的花园，注重情感的表达与分享',
                '稳定的承诺很重要，但也要给关系中的小惊喜留出空间'
            ],
            [TestResultTypes.VIBRANT_ADVENTURER]: [
                '在享受无尽探索的同时，练习与同一个人在熟悉风景里发掘新的深度',
                '最极致的冒险，有时是敢于承诺的勇气，平衡新鲜感与稳定性',
                '保持活力的同时，建立一些有意义的日常仪式来加深连接'
            ],
            [TestResultTypes.GENTLE_GUARDIAN]: [
                '在悉心呵护对方的同时，请同样温柔地守护好自己的需求和边界',
                '一段健康的关系，是两颗心都能舒适地依偎，也能完整地独立',
                '适度的自我关怀能让您以更充沛的能量去关爱他人'
            ],
            [TestResultTypes.ELITE_COMPANION]: [
                '在追求共同成长和卓越的旅途中，偶尔切换回纯粹的"恋人"频道',
                '那些不为了解决问题、不为了提升自我的无目的亲密时光同样重要',
                '在理性讨论之余，也不要忽视情感的表达和感受的分享'
            ],
            [TestResultTypes.FREE_SPIRIT]: [
                '真正的亲密，有时恰恰存在于敢于给予彼此距离的自信之中',
                '在享受自由的同时，那些微妙的情感需求和共同的责任需要温柔的确认',
                '保持独立性的同时，建立一些让彼此感到安心的连接点'
            ],
            [TestResultTypes.TRADITIONAL_STABILIZER]: [
                '在遵循美好传统的同时，为你们二人独特的故事留出书写的空间',
                '最温暖的"传统"，或许正是由你们共同创造的、专属于你们的新模式',
                '稳定的结构中也可以融入一些个性化的表达和创新的元素'
            ],
            [TestResultTypes.ROMANTIC_DREAMER]: [
                '在追寻心跳和仪式的同时，偶尔品味平凡一日里静水流深的安宁',
                '最极致的浪漫，有时就藏在"我一直都在"的平淡守护里',
                '平衡理想化的期待与现实中的不完美，让爱情在现实中扎根生长'
            ]
        };
        
        return recommendations[typeName] || [
            '基于相互尊重和理解建立关系',
            '保持开放的沟通，及时表达需求和感受',
            '在关系中保持一定的个人空间和独立性'
        ];
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    const viewModel = new TestViewModel();
    
    // 检查是否有保存的结果
    try {
        const savedResult = localStorage.getItem('idealPartnerTestResult');
        if (savedResult) {
            // 可以在结果页面显示"查看上次结果"的选项
            console.log('找到上次的测试结果');
        }
    } catch (error) {
        console.error('读取保存结果失败:', error);
    }
    
    // 导出到全局（便于调试）
    window.testViewModel = viewModel;
    window.IdealPartnerCalculator = IdealPartnerCalculator;
});