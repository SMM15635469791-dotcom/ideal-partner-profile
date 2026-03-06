// 理想伴侣画像测试 - 主逻辑文件
// 版本: 2.0 | 最后更新: 2026-03-06
// 注意: 此文件处理测试流程控制、用户交互和页面切换

// 全局状态管理
const AppState = {
    // 测试状态
    currentQuestionIndex: 0,
    userAnswers: new Array(QUESTIONS.length).fill(null),
    testStarted: false,
    testCompleted: false,
    isLoading: true,
    
    // 维度分数
    dimensionScores: {
        personality: { total: 0, count: 0, average: 0 },
        communication: { total: 0, count: 0, average: 0 },
        emotional: { total: 0, count: 0, average: 0 },
        values: { total: 0, count: 0, average: 0 },
        lifestyle: { total: 0, count: 0, average: 0 },
        relationship: { total: 0, count: 0, average: 0 }
    },
    
    // 当前会话
    sessionId: null,
    startTime: null,
    
    // 初始化
    init() {
        this.sessionId = this.generateSessionId();
        this.startTime = new Date();
        
        // 从本地存储恢复进度（如果存在）
        this.loadProgress();
    },
    
    // 生成唯一会话ID
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    // 保存进度到本地存储
    saveProgress() {
        const progress = {
            sessionId: this.sessionId,
            currentQuestionIndex: this.currentQuestionIndex,
            userAnswers: this.userAnswers,
            testStarted: this.testStarted,
            saveTime: new Date().toISOString()
        };
        
        try {
            localStorage.setItem('idealPartnerProgress', JSON.stringify(progress));
        } catch (e) {
            console.warn('无法保存进度到本地存储:', e);
        }
    },
    
    // 从本地存储加载进度
    loadProgress() {
        try {
            const saved = localStorage.getItem('idealPartnerProgress');
            if (saved) {
                const progress = JSON.parse(saved);
                
                // 检查是否为今天的进度（过期一天就重置）
                const saveDate = new Date(progress.saveTime);
                const today = new Date();
                const isSameDay = saveDate.toDateString() === today.toDateString();
                
                if (isSameDay) {
                    this.sessionId = progress.sessionId;
                    this.currentQuestionIndex = progress.currentQuestionIndex;
                    this.userAnswers = progress.userAnswers;
                    this.testStarted = progress.testStarted;
                } else {
                    this.clearProgress();
                }
            }
        } catch (e) {
            console.warn('无法从本地存储加载进度:', e);
        }
    },
    
    // 清除进度
    clearProgress() {
        try {
            localStorage.removeItem('idealPartnerProgress');
        } catch (e) {
            console.warn('无法清除本地存储:', e);
        }
        
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(QUESTIONS.length).fill(null);
        this.testStarted = false;
        this.testCompleted = false;
    },
    
    // 记录答案
    recordAnswer(questionIndex, optionIndex) {
        if (questionIndex >= 0 && questionIndex < QUESTIONS.length) {
            this.userAnswers[questionIndex] = optionIndex;
            this.saveProgress();
        }
    },
    
    // 获取当前问题
    getCurrentQuestion() {
        return QUESTIONS[this.currentQuestionIndex];
    },
    
    // 计算维度分数
    calculateDimensionScores() {
        // 重置分数
        for (const dimension in this.dimensionScores) {
            this.dimensionScores[dimension] = { total: 0, count: 0, average: 0 };
        }
        
        // 遍历所有已回答的问题
        for (let i = 0; i < this.userAnswers.length; i++) {
            const answerIndex = this.userAnswers[i];
            
            if (answerIndex !== null) {
                const question = QUESTIONS[i];
                const selectedOption = question.options[answerIndex];
                
                // 累加每个维度的分数
                for (const dimension in selectedOption.dimensionScores) {
                    this.dimensionScores[dimension].total += selectedOption.dimensionScores[dimension];
                    this.dimensionScores[dimension].count++;
                }
            }
        }
        
        // 计算平均分
        for (const dimension in this.dimensionScores) {
            const dim = this.dimensionScores[dimension];
            dim.average = dim.count > 0 ? dim.total / dim.count : 0;
        }
        
        return this.dimensionScores;
    },
    
    // 计算匹配度
    calculateCompatibility() {
        this.calculateDimensionScores();
        
        // 计算综合匹配度（0-100分）
        let totalAverage = 0;
        let dimensionCount = 0;
        
        for (const dimension in this.dimensionScores) {
            const avg = this.dimensionScores[dimension].average;
            if (avg > 0) {
                // 将1-4分的平均分转换为0-100分
                const normalizedScore = ((avg - 1) / 3) * 100;
                totalAverage += normalizedScore;
                dimensionCount++;
            }
        }
        
        const overallScore = dimensionCount > 0 ? Math.round(totalAverage / dimensionCount) : 0;
        return overallScore;
    },
    
    // 获取已回答问题数量
    getAnsweredCount() {
        return this.userAnswers.filter(answer => answer !== null).length;
    },
    
    // 检查是否所有问题都已回答
    areAllQuestionsAnswered() {
        return this.userAnswers.every(answer => answer !== null);
    },
    
    // 重置测试
    resetTest() {
        this.clearProgress();
        this.currentQuestionIndex = 0;
        this.testStarted = false;
        this.testCompleted = false;
        this.sessionId = this.generateSessionId();
        this.startTime = new Date();
    }
};

// DOM元素缓存
const DOM = {
    // 视图容器
    coverView: document.getElementById('coverView'),
    questionView: document.getElementById('questionView'),
    loadingResultView: document.getElementById('loadingResultView'),
    resultView: document.getElementById('resultView'),
    
    // 进度指示器
    progressContainer: document.getElementById('progressContainer'),
    progressFill: document.getElementById('progressFill'),
    currentQuestion: document.getElementById('currentQuestion'),
    totalQuestions: document.getElementById('totalQuestions'),
    currentDimension: document.getElementById('currentDimension'),
    dimensionIndicator: document.getElementById('dimensionIndicator'),
    
    // 问题视图元素
    questionNumber: document.getElementById('questionNumber'),
    questionTitle: document.getElementById('questionTitle'),
    questionHint: document.getElementById('questionHint'),
    dimensionName: document.getElementById('dimensionName'),
    optionsContainer: document.getElementById('optionsContainer'),
    prevButton: document.getElementById('prevButton'),
    nextButton: document.getElementById('nextButton'),
    currentPosition: document.getElementById('currentPosition'),
    
    // 按钮
    startButton: document.getElementById('startButton'),
    retryButton: document.getElementById('retryButton'),
    shareButton: document.getElementById('shareButton'),
    downloadButton: document.getElementById('downloadButton'),
    
    // 加载屏幕
    loadingScreen: document.getElementById('loadingScreen'),
    
    // 结果视图元素
    resultSubtitle: document.getElementById('resultSubtitle'),
    resultDate: document.getElementById('resultDate'),
    matchScore: document.getElementById('matchScore'),
    scoreDescription: document.getElementById('scoreDescription'),
    compatibilityScore: document.getElementById('compatibilityScore'),
    valuesScore: document.getElementById('valuesScore'),
    emotionalScore: document.getElementById('emotionalScore'),
    personalityTraits: document.getElementById('personalityTraits'),
    communicationStyle: document.getElementById('communicationStyle'),
    emotionalNeeds: document.getElementById('emotionalNeeds'),
    coreValues: document.getElementById('coreValues'),
    lifestyleAttitude: document.getElementById('lifestyleAttitude'),
    relationshipExpectations: document.getElementById('relationshipExpectations'),
    recognitionTips: document.getElementById('recognitionTips'),
    relationshipTips: document.getElementById('relationshipTips'),
    selfPreparation: document.getElementById('selfPreparation'),
    
    // 分析卡片分数
    traitScore: document.getElementById('traitScore'),
    communicationScore: document.getElementById('communicationScore'),
    emotionalNeedScore: document.getElementById('emotionalNeedScore'),
    valuesScoreDetailed: document.getElementById('valuesScoreDetailed'),
    lifestyleScore: document.getElementById('lifestyleScore'),
    relationshipScore: document.getElementById('relationshipScore'),
    
    // 标签容器
    personalityTags: document.getElementById('personalityTags'),
    communicationTags: document.getElementById('communicationTags'),
    emotionalTags: document.getElementById('emotionalTags'),
    valuesTags: document.getElementById('valuesTags'),
    lifestyleTags: document.getElementById('lifestyleTags'),
    relationshipTags: document.getElementById('relationshipTags'),
    
    // 分析进度
    analyzingText: document.getElementById('analyzingText'),
    analyzingBar: document.getElementById('analyzingBar')
};

// 视图管理器
const ViewManager = {
    currentView: 'cover',
    
    // 切换到指定视图
    switchTo(viewName) {
        // 隐藏所有视图
        DOM.coverView.classList.remove('active');
        DOM.questionView.classList.remove('active');
        DOM.loadingResultView.classList.remove('active');
        DOM.resultView.classList.remove('active');
        
        // 显示指定视图
        switch(viewName) {
            case 'cover':
                DOM.coverView.classList.add('active');
                DOM.progressContainer.style.display = 'none';
                break;
            case 'question':
                DOM.questionView.classList.add('active');
                DOM.progressContainer.style.display = 'block';
                this.updateProgress();
                break;
            case 'loadingResult':
                DOM.loadingResultView.classList.add('active');
                DOM.progressContainer.style.display = 'none';
                break;
            case 'result':
                DOM.resultView.classList.add('active');
                DOM.progressContainer.style.display = 'none';
                break;
        }
        
        this.currentView = viewName;
        
        // 滚动到顶部
        window.scrollTo(0, 0);
    },
    
    // 更新进度显示
    updateProgress() {
        const progress = (AppState.currentQuestionIndex + 1) / QUESTIONS.length * 100;
        DOM.progressFill.style.width = `${progress}%`;
        DOM.currentQuestion.textContent = AppState.currentQuestionIndex + 1;
        DOM.totalQuestions.textContent = QUESTIONS.length;
        DOM.currentPosition.textContent = AppState.currentQuestionIndex + 1;
        
        // 更新当前维度显示
        const currentQuestion = AppState.getCurrentQuestion();
        if (currentQuestion) {
            const dimension = DIMENSIONS[currentQuestion.dimension];
            DOM.currentDimension.textContent = dimension.name;
            
            // 更新维度指示器
            const dimensionIndex = DIMENSION_ORDER.indexOf(currentQuestion.dimension);
            const dots = DOM.dimensionIndicator.querySelectorAll('.dimension-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === dimensionIndex);
            });
        }
        
        // 更新按钮状态
        DOM.prevButton.disabled = AppState.currentQuestionIndex === 0;
        
        const isLastQuestion = AppState.currentQuestionIndex === QUESTIONS.length - 1;
        if (isLastQuestion) {
            DOM.nextButton.innerHTML = `<span>查看结果</span><i class="fas fa-chart-bar"></i>`;
        } else {
            DOM.nextButton.innerHTML = `<span>下一题</span><i class="fas fa-arrow-right"></i>`;
        }
    }
};

// 问题渲染器
const QuestionRenderer = {
    // 渲染当前问题
    renderCurrentQuestion() {
        const question = AppState.getCurrentQuestion();
        if (!question) return;
        
        const dimension = DIMENSIONS[question.dimension];
        
        // 更新问题信息
        DOM.questionNumber.textContent = `Q${question.id}`;
        DOM.questionTitle.textContent = question.text;
        DOM.questionHint.textContent = question.hint;
        DOM.dimensionName.textContent = dimension.name;
        
        // 清空选项容器
        DOM.optionsContainer.innerHTML = '';
        
        // 渲染选项
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.className = 'option';
            
            // 检查是否已选择
            if (AppState.userAnswers[AppState.currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }
            
            optionElement.innerHTML = `
                <div class="option-text">${option.text}</div>
            `;
            
            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });
            
            DOM.optionsContainer.appendChild(optionElement);
        });
        
        // 更新视图
        ViewManager.updateProgress();
    },
    
    // 选择选项
    selectOption(optionIndex) {
        // 移除其他选项的选择状态
        const options = DOM.optionsContainer.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        
        // 添加当前选项的选择状态
        options[optionIndex].classList.add('selected');
        
        // 记录答案
        AppState.recordAnswer(AppState.currentQuestionIndex, optionIndex);
        
        // 启用下一题按钮
        DOM.nextButton.disabled = false;
    },
    
    // 导航到下一题
    nextQuestion() {
        // 检查是否已回答当前问题
        if (AppState.userAnswers[AppState.currentQuestionIndex] === null) {
            this.showAnswerRequiredWarning();
            return;
        }
        
        const isLastQuestion = AppState.currentQuestionIndex === QUESTIONS.length - 1;
        
        if (isLastQuestion) {
            this.submitTest();
        } else {
            AppState.currentQuestionIndex++;
            this.renderCurrentQuestion();
        }
    },
    
    // 导航到上一题
    prevQuestion() {
        if (AppState.currentQuestionIndex > 0) {
            AppState.currentQuestionIndex--;
            this.renderCurrentQuestion();
        }
    },
    
    // 显示必须回答的警告
    showAnswerRequiredWarning() {
        const options = DOM.optionsContainer.querySelectorAll('.option');
        
        // 添加动画效果
        options.forEach(option => {
            option.style.animation = 'none';
            setTimeout(() => {
                option.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        });
        
        // 显示提示
        const originalHint = DOM.questionHint.textContent;
        DOM.questionHint.textContent = '请选择一个选项才能继续';
        DOM.questionHint.style.color = '#ff6b8b';
        
        setTimeout(() => {
            DOM.questionHint.textContent = originalHint;
            DOM.questionHint.style.color = '';
        }, 1500);
    },
    
    // 提交测试
    async submitTest() {
        // 切换到加载结果视图
        ViewManager.switchTo('loadingResult');
        
        // 模拟分析过程
        const analyzingSteps = [
            "正在收集您的所有答案...",
            "分析性格特质维度...",
            "评估沟通方式偏好...",
            "计算情感需求匹配...",
            "比对价值观一致性...",
            "分析生活态度契合度...",
            "评估关系期待模式...",
            "生成综合分析报告..."
        ];
        
        for (let i = 0; i < analyzingSteps.length; i++) {
            DOM.analyzingText.textContent = analyzingSteps[i];
            DOM.analyzingBar.style.width = `${((i + 1) / analyzingSteps.length) * 100}%`;
            
            // 更新步骤指示器
            const steps = document.querySelectorAll('.analyzing-steps .step');
            steps.forEach((step, index) => {
                if (index <= i % 4) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
            
            // 等待一段时间
            await this.sleep(600);
        }
        
        // 等待额外的动画时间
        await this.sleep(800);
        
        // 切换到结果视图
        ViewManager.switchTo('result');
        
        // 显示结果
        this.displayResults();
    },
    
    // 显示结果
    displayResults() {
        // 计算分数
        const compatibilityScore = AppState.calculateCompatibility();
        const dimensionScores = AppState.dimensionScores;
        
        // 设置结果副标题
        const today = new Date();
        const dateStr = today.toLocaleDateString('zh-CN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });
        DOM.resultDate.textContent = dateStr;
        
        // 设置匹配度
        DOM.matchScore.textContent = compatibilityScore;
        
        // 设置进度条动画
        const progressCircle = document.querySelector('.progress-bar');
        const circumference = 2 * Math.PI * 54; // 对于大圆: 2 * Math.PI * 72
        const offset = circumference - (compatibilityScore / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
        
        // 设置分数描述
        let scoreDescription = '';
        if (compatibilityScore >= 85) {
            scoreDescription = '恭喜！您的理想伴侣画像非常清晰，匹配度极高。您对自己的需求有深刻理解，这有助于找到高度契合的伴侣。';
        } else if (compatibilityScore >= 70) {
            scoreDescription = '很好！您的理想伴侣画像比较明确，匹配度良好。您对自己的需求有一定了解，但可能在某些方面还有探索空间。';
        } else if (compatibilityScore >= 60) {
            scoreDescription = '不错！您对理想伴侣有一定想法，但可能还需要更深入地了解自己的需求。建议多关注自己的真实感受。';
        } else {
            scoreDescription = '您的理想伴侣画像还有待明确。这可能意味着您还在探索自己的需求，或者对关系持开放态度。';
        }
        DOM.scoreDescription.textContent = scoreDescription;
        
        // 设置详细维度分数
        const normalizedScores = {};
        for (const dimension in dimensionScores) {
            const avg = dimensionScores[dimension].average;
            normalizedScores[dimension] = avg > 0 ? Math.round(((avg - 1) / 3) * 100) : 0;
        }
        
        // 设置维度分数条
        DOM.compatibilityScore.style.width = `${normalizedScores.personality}%`;
        DOM.valuesScore.style.width = `${normalizedScores.values}%`;
        DOM.emotionalScore.style.width = `${normalizedScores.emotional}%`;
        
        // 设置详细分数显示
        DOM.traitScore.textContent = `${normalizedScores.personality}%`;
        DOM.communicationScore.textContent = `${normalizedScores.communication}%`;
        DOM.emotionalNeedScore.textContent = `${normalizedScores.emotional}%`;
        DOM.valuesScoreDetailed.textContent = `${normalizedScores.values}%`;
        DOM.lifestyleScore.textContent = `${normalizedScores.lifestyle}%`;
        DOM.relationshipScore.textContent = `${normalizedScores.relationship}%`;
        
        // 生成并显示分析结果
        this.generateDetailedAnalysis(normalizedScores);
        
        // 更新雷达图
        this.updateRadarChart(normalizedScores);
    },
    
    // 生成详细分析
    generateDetailedAnalysis(scores) {
        // 获取分析结果
        const analysis = ResultGenerator.generateAnalysis(scores);
        
        // 设置详细分析文本
        DOM.personalityTraits.textContent = analysis.personalityTraits;
        DOM.communicationStyle.textContent = analysis.communicationStyle;
        DOM.emotionalNeeds.textContent = analysis.emotionalNeeds;
        DOM.coreValues.textContent = analysis.coreValues;
        DOM.lifestyleAttitude.textContent = analysis.lifestyleAttitude;
        DOM.relationshipExpectations.textContent = analysis.relationshipExpectations;
        
        // 设置建议
        DOM.recognitionTips.textContent = analysis.recognitionTips;
        DOM.relationshipTips.textContent = analysis.relationshipTips;
        DOM.selfPreparation.textContent = analysis.selfPreparation;
        
        // 设置标签
        this.setTags(DOM.personalityTags, analysis.personalityTags);
        this.setTags(DOM.communicationTags, analysis.communicationTags);
        this.setTags(DOM.emotionalTags, analysis.emotionalTags);
        this.setTags(DOM.valuesTags, analysis.valuesTags);
        this.setTags(DOM.lifestyleTags, analysis.lifestyleTags);
        this.setTags(DOM.relationshipTags, analysis.relationshipTags);
    },
    
    // 设置标签
    setTags(container, tags) {
        container.innerHTML = '';
        tags.forEach(tag => {
            const span = document.createElement('span');
            span.textContent = tag;
            container.appendChild(span);
        });
    },
    
    // 更新雷达图
    updateRadarChart(scores) {
        const ctx = document.getElementById('radarChart').getContext('2d');
        
        // 确保Chart.js已加载
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js未加载，跳过雷达图渲染');
            return;
        }
        
        // 销毁现有图表
        if (window.radarChart instanceof Chart) {
            window.radarChart.destroy();
        }
        
        const data = {
            labels: ['性格特质', '沟通方式', '情感需求', '价值观', '生活态度', '关系期待'],
            datasets: [{
                label: '您的偏好强度',
                data: [
                    scores.personality,
                    scores.communication,
                    scores.emotional,
                    scores.values,
                    scores.lifestyle,
                    scores.relationship
                ],
                backgroundColor: 'rgba(255, 107, 139, 0.2)',
                borderColor: '#ff6b8b',
                pointBackgroundColor: '#ff6b8b',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ff6b8b',
                borderWidth: 2
            }]
        };
        
        const config = {
            type: 'radar',
            data: data,
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        min: 0,
                        max: 100,
                        ticks: {
                            stepSize: 20,
                            display: false
                        },
                        pointLabels: {
                            display: false
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                elements: {
                    line: {
                        tension: 0.3
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        };
        
        window.radarChart = new Chart(ctx, config);
    },
    
    // 辅助函数：等待
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// 事件处理器
const EventHandlers = {
    // 初始化所有事件监听
    init() {
        // 开始测试按钮
        DOM.startButton.addEventListener('click', () => {
            AppState.testStarted = true;
            AppState.currentQuestionIndex = 0;
            ViewManager.switchTo('question');
            QuestionRenderer.renderCurrentQuestion();
        });
        
        // 上一题按钮
        DOM.prevButton.addEventListener('click', () => {
            QuestionRenderer.prevQuestion();
        });
        
        // 下一题按钮
        DOM.nextButton.addEventListener('click', () => {
            QuestionRenderer.nextQuestion();
        });
        
        // 重新测试按钮
        DOM.retryButton.addEventListener('click', () => {
            if (confirm('确定要重新开始测试吗？当前进度将会丢失。')) {
                AppState.resetTest();
                ViewManager.switchTo('cover');
            }
        });
        
        // 分享按钮
        DOM.shareButton.addEventListener('click', () => {
            this.shareResults();
        });
        
        // 下载按钮
        DOM.downloadButton.addEventListener('click', () => {
            this.downloadResults();
        });
        
        // 键盘导航
        document.addEventListener('keydown', (e) => {
            if (ViewManager.currentView === 'question') {
                switch(e.key) {
                    case 'ArrowLeft':
                        QuestionRenderer.prevQuestion();
                        break;
                    case 'ArrowRight':
                    case 'Enter':
                        e.preventDefault();
                        QuestionRenderer.nextQuestion();
                        break;
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                        const optionIndex = parseInt(e.key) - 1;
                        if (optionIndex >= 0 && optionIndex < 4) {
                            const currentQuestion = AppState.getCurrentQuestion();
                            if (currentQuestion && optionIndex < currentQuestion.options.length) {
                                QuestionRenderer.selectOption(optionIndex);
                            }
                        }
                        break;
                }
            }
        });
        
        // 初始化加载完成
        this.initLoading();
    },
    
    // 初始化加载
    initLoading() {
        // 模拟加载过程
        setTimeout(() => {
            DOM.loadingScreen.classList.add('fade-out');
            
            setTimeout(() => {
                DOM.loadingScreen.style.display = 'none';
                AppState.isLoading = false;
                
                // 如果有进度，直接进入问题视图
                if (AppState.testStarted && AppState.currentQuestionIndex > 0) {
                    ViewManager.switchTo('question');
                    QuestionRenderer.renderCurrentQuestion();
                }
            }, 500);
        }, 1500);
    },
    
    // 分享结果
    shareResults() {
        const score = AppState.calculateCompatibility();
        const text = `我的理想伴侣画像测试结果：匹配度${score}%\n快来测试你的理想伴侣画像吧！`;
        
        if (navigator.share) {
            navigator.share({
                title: '理想伴侣画像测试结果',
                text: text,
                url: window.location.href
            }).catch(err => {
                console.log('分享失败:', err);
                this.copyToClipboard(text);
            });
        } else {
            this.copyToClipboard(text);
        }
    },
    
    // 复制到剪贴板
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板，快去分享给朋友吧！');
        }).catch(err => {
            console.log('复制失败:', err);
            alert('分享失败，请手动复制结果。');
        });
    },
    
    // 下载结果
    downloadResults() {
        const score = AppState.calculateCompatibility();
        const today = new Date().toLocaleDateString('zh-CN');
        const content = `
理想伴侣画像测试报告
测试时间：${today}
综合匹配度：${score}%

性格特质：${DOM.personalityTraits.textContent.substring(0, 50)}...
沟通方式：${DOM.communicationStyle.textContent.substring(0, 50)}...
情感需求：${DOM.emotionalNeeds.textContent.substring(0, 50)}...
价值观：${DOM.coreValues.textContent.substring(0, 50)}...
生活态度：${DOM.lifestyleAttitude.textContent.substring(0, 50)}...
关系期待：${DOM.relationshipExpectations.textContent.substring(0, 50)}...

--- 此报告由理想伴侣画像测试生成 ---
测试链接：${window.location.href}
        `.trim();
        
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `理想伴侣画像测试报告_${today}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// 应用初始化
class IdealPartnerApp {
    constructor() {
        this.init();
    }
    
    init() {
        // 初始化应用状态
        AppState.init();
        
        // 初始化事件处理器
        EventHandlers.init();
        
        // 设置总问题数
        DOM.totalQuestions.textContent = QUESTIONS.length;
        
        // 检查是否已完成所有问题
        if (AppState.areAllQuestionsAnswered()) {
            ViewManager.switchTo('result');
            QuestionRenderer.displayResults();
        }
        
        // 添加CSS动画
        this.addAnimationStyles();
        
        // 记录应用启动
        console.log('理想伴侣画像测试 v2.0 已启动');
    }
    
    addAnimationStyles() {
        // 添加SVG渐变
        const svgNS = "http://www.w3.org/2000/svg";
        const defs = document.createElementNS(svgNS, "defs");
        const gradient = document.createElementNS(svgNS, "linearGradient");
        gradient.setAttribute("id", "progressGradient");
        gradient.setAttribute("x1", "0%");
        gradient.setAttribute("y1", "0%");
        gradient.setAttribute("x2", "100%");
        gradient.setAttribute("y2", "0%");
        
        const stop1 = document.createElementNS(svgNS, "stop");
        stop1.setAttribute("offset", "0%");
        stop1.setAttribute("stop-color", "#ff6b8b");
        gradient.appendChild(stop1);
        
        const stop2 = document.createElementNS(svgNS, "stop");
        stop2.setAttribute("offset", "100%");
        stop2.setAttribute("stop-color", "#4d6eff");
        gradient.appendChild(stop2);
        
        defs.appendChild(gradient);
        
        const svg = document.querySelector('.score-progress');
        if (svg) {
            svg.appendChild(defs);
        }
    }
}

// 当DOM加载完成后启动应用
document.addEventListener('DOMContentLoaded', () => {
    new IdealPartnerApp();
});

// 暴露必要的方法到全局作用域
window.IdealPartnerApp = {
    resetTest: () => {
        AppState.resetTest();
        ViewManager.switchTo('cover');
    },
    getResults: () => {
        return {
            score: AppState.calculateCompatibility(),
            dimensions: AppState.dimensionScores
        };
    }
};