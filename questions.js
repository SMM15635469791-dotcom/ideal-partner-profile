// questions.js - 理想伴侣画像测试题目与数据
'use strict';

// 定义8种测试结果类型
const TestResultTypes = {
    SOUL_MATE: '灵魂共鸣者',
    STEADY_BUILDER: '踏实共建者',
    VIBRANT_ADVENTURER: '活力冒险家',
    GENTLE_GUARDIAN: '温柔守护者',
    ELITE_COMPANION: '精英同行者',
    FREE_SPIRIT: '随性自由人',
    TRADITIONAL_STABILIZER: '传统安定者',
    ROMANTIC_DREAMER: '浪漫梦想家'
};

// 定义6个测试维度
const TestDimensions = [
    { id: 0, name: '颜值与外在', weight: 1.0, description: '对外在形象、气质、风格的基本期待' },
    { id: 1, name: '年龄与阶段', weight: 1.0, description: '对年龄、人生阶段、情感经历的接受度' },
    { id: 2, name: '性格特质', weight: 1.5, description: '对性格特点、情绪表达、社交方式的核心需求' },
    { id: 3, name: '爱好与生活', weight: 1.2, description: '对生活方式、兴趣爱好、生活态度的期待' },
    { id: 4, name: '职业与能力', weight: 1.2, description: '对职业发展、经济能力、事业心的要求' },
    { id: 5, name: '三观与核心', weight: 1.5, description: '对价值观、生活目标、关系本质的核心信念' }
];

// 定义关键修饰题目
const KeyModifierQuestions = {
    APPEARANCE: 0,      // 颜值（第1题）
    CEREMONY: 30,       // 仪式感（第31题）
    INCOME: 23,         // 收入（第24题）
    CHILDREN: 31        // 生育观（第32题）
};

// 定义修饰标签
const ModifierTags = {
    APPEARANCE_EMPHASIS: '（外显吸引强化型）',
    CEREMONY_EMPHASIS: '（仪式感需求强化型）',
    ECONOMIC_SECURITY: '（经济安全导向型）',
    FAMILY_ORIENTED: '（家庭导向强化型）',
    FREE_SPIRIT_ENHANCED: '（自由精神强化型）',
    CAREER_FOCUSED: '（事业成就导向型）'
};

// 定义35道测试题目
const Questions = [
    {
        id: 0,
        dimension: 0, // 颜值与外在
        text: "你对伴侣颜值的总体要求是?",
        options: [
            {
                text: "比较看重颜值，赏心悦目是重要的吸引力。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2
                }
            },
            {
                text: "颜值适中就好，干净、顺眼是我比较在意的。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "颜值不是首要因素，我更关注内在和其他特质。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "没有硬性标准，更看重整体的感觉或'眼缘'。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 1,
        dimension: 0,
        text: "你更偏好哪种身材类型?",
        options: [
            {
                text: "高挑、修长的类型。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3
                }
            },
            {
                text: "有线条、健康运动的类型。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2
                }
            },
            {
                text: "匀称、标准的体型。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "没有特定偏好，健康自然就好。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 2,
        dimension: 0,
        text: "你对伴侣身高的要求是?",
        options: [
            {
                text: "有比较明确的标准线(例如男生不低于···/女生不低于···)。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "比我高一些/矮一些就可以接受。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 2
                }
            },
            {
                text: "和我差不多身高，感觉最自在。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "完全不介意，身高不是考虑因素。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 3,
        dimension: 0,
        text: "你认为打扮风格的重要性如何?",
        options: [
            {
                text: "很重要，良好的衣品和审美是加分项。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "比较重要,起码要整洁、得体。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "一般,只要不太突兀,不影响相处。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不重要,穿着舒适、随意就好。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 4,
        dimension: 0,
        text: "你对'第一眼感觉'的重视程度?",
        options: [
            {
                text: "非常重要，是决定是否愿意深入了解的前提。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "比较重要，但感觉可以后续培养。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "不太依赖一眼定生死，更相信相处后的了解。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "完全不看重，深厚的感情都来自于日久生情。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 5,
        dimension: 1, // 年龄与阶段
        text: "你期望的伴侣年龄差是?",
        options: [
            {
                text: "比我大几岁(3-8岁)。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2
                }
            },
            {
                text: "比我小几岁(1-5岁)。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "同龄人最好(相差2岁以内)。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "年龄差可以较大，心理成熟度和观念匹配更重要。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 6,
        dimension: 1,
        text: "你对伴侣人生阶段的要求是?",
        options: [
            {
                text: "最好和我的阶段高度同步(如都在奋斗期或都处于稳定期)。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2
                }
            },
            {
                text: "可以略有差异，但人生大方向(如发展、定居)最好一致。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2
                }
            },
            {
                text: "阶段不重要，关键是心态和节奏能否匹配。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "差异可以接受，甚至能相互带动、互补就好。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 7,
        dimension: 1,
        text: "你如何看待伴侣的情感经历?",
        options: [
            {
                text: "希望对方的情感经历相对简单一些。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "可以接受有经历，但重要的是TA已从中成长，懂得如何经营关系。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2
                }
            },
            {
                text: "不介意经历丰富，更看重我们现在如何相处。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "不太关心对方的过去，更专注于我们的现在和未来。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 8,
        dimension: 1,
        text: "你对婚姻时间表的看法?",
        options: [
            {
                text: "有相对清晰的个人规划(例如希望恋爱1-3年内结婚)。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "顺其自然，但希望双方对婚姻的期待和方向一致。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2
                }
            },
            {
                text: "目前更享受恋爱状态，对婚姻还没有具体计划。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "可以接受长期的恋爱关系，婚姻不是急切的目标。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 9,
        dimension: 2, // 性格特质
        text: "你更倾向的性格主基调是?",
        options: [
            {
                text: "外向开朗，善于社交。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "内向沉静，心思细腻。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "理性稳重，情绪平和。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "感性浪漫，情感丰富。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 10,
        dimension: 2,
        text: "发生矛盾时，你希望对方如何?",
        options: [
            {
                text: "能主动沟通,尽快把问题说开、解决。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "双方都先冷静一下，然后再理性讨论。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "能优先照顾彼此的情绪,以温和的方式避免冲突升级。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "给彼此一些独立的空间和时间,让情绪自然消化。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 11,
        dimension: 2,
        text: "日常情绪表达方式，你偏好?",
        options: [
            {
                text: "直接表达，喜怒哀乐都比较明显。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "含蓄内敛，更倾向于自我消化。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "偏向积极正向,较少抱怨。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "真实自然，不需要刻意控制或扮演。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 12,
        dimension: 2,
        text: "面对压力时，你希望伴侣?",
        options: [
            {
                text: "有较强的自我消化能力,不过多传递负能量给我。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "愿意和我分享，我们可以一起分担压力。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "具备良好的自我调节能力，能较快恢复状态。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "需要我的安慰和支持，我愿意做TA的后盾。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            }
        ]
    },
    {
        id: 13,
        dimension: 2,
        text: "在社交场合，你希望伴侣?",
        options: [
            {
                text: "活跃主动，能带动气氛，善于交际。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "适度参与，保持礼貌得体即可。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "安静陪伴在我身边就好，不需要特别突出。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "能和我同步，我想社交时TA能融入，我想安静时TA也能享受二人世界。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 14,
        dimension: 2,
        text: "决策风格上，你偏好?",
        options: [
            {
                text: "果断有主见，能带领我。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "商量型，喜欢共同讨论决定。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "随和型，愿意多听取我的意见。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "有分析能力，能为我提供有价值的参考建议。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 15,
        dimension: 2,
        text: "幽默感对你有多重要?",
        options: [
            {
                text: "非常重要，和能让我开心的人在一起很重要。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "比较重要，幽默能让日常相处更有趣。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "有的话是加分项，没有也关系不大。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不重要，甚至不喜欢过于频繁的玩笑。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 16,
        dimension: 2,
        text: "你对伴侣'需要个人空间'的态度?",
        options: [
            {
                text: "非常理解且支持,因为我也需要个人空间。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "可以接受，但希望不要因此变得疏离。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "不太喜欢,我希望我们的联系能更紧密一些。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "只要找到两个人都舒服的平衡点就好。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 17,
        dimension: 3, // 爱好与生活
        text: "周末时光，你希望如何度过?",
        options: [
            {
                text: "一起出门，尝试各种新鲜好玩的活动。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "主要在家里享受二人世界，放松休息。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1
                }
            },
            {
                text: "一部分时间一起，一部分时间各自做喜欢的事。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "经常和朋友、家人聚会，热闹度过。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            }
        ]
    },
    {
        id: 18,
        dimension: 3,
        text: "对旅行偏好的匹配，你认为?",
        options: [
            {
                text: "很重要，能玩到一起是幸福的关键。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "比较重要，但彼此愿意妥协和配合也行。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不太重要，可以各自规划喜欢的旅行。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "可以慢慢培养出共同的旅行方式。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 19,
        dimension: 3,
        text: "你对'共同爱好'的看法?",
        options: [
            {
                text: "很重要，最好有2-3项能一起投入的爱好。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "有1-2项共同爱好就挺好的。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不需要强求一致，尊重并支持彼此的独立爱好更好。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不要求现有共同爱好，但愿意和对方一起培养新兴趣。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 20,
        dimension: 3,
        text: "消费观念和娱乐支出，你希望?",
        options: [
            {
                text: "高度一致，这样可以减少很多摩擦。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "在大方向上一致，细节可以磨合。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "可以互补，能互相理解对方的消费观。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "保持经济相对独立，在这件事上互不干涉。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 21,
        dimension: 3,
        text: "对居家环境的要求?",
        options: [
            {
                text: "必须保持整洁、有序。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "舒适、温馨、有生活气息就好。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1
                }
            },
            {
                text: "要有设计感和品味，体现格调。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "自由、随意，不要有太多拘束。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 22,
        dimension: 4, // 职业与能力
        text: "你对伴侣职业类型的要求?",
        options: [
            {
                text: "倾向于稳定、体面的职业(如公务员、教师、医生等)。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "从事有发展前景、朝阳行业的工作。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "做自己热爱的工作，有职业成就感和热情。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "没有限制，有正当职业、能自立就好。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 23,
        dimension: 4,
        text: "收入水平的重要性?",
        options: [
            {
                text: "很重要，需要达到我认可的基本标准。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "比较重要，至少不能比我低太多。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "过得去就行，够用且有一定结余即可。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1
                }
            },
            {
                text: "不重要，我更看重对方未来的发展潜力。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 24,
        dimension: 4,
        text: "工作时间匹配度的重要性?",
        options: [
            {
                text: "很重要，希望作息同步，有更多共同时间。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "比较重要，但能保证有稳定的共同时间就行。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不太重要，我们可以协调出见面的时间。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "完全不重要，彼此有独立的工作节奏更好。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 25,
        dimension: 4,
        text: "你对'事业心'的期待?",
        options: [
            {
                text: "有很强的事业心和上进心。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "有适度的事业心，能平衡工作和生活。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "事业心不用太强，更看重对家庭的投入。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1
                }
            },
            {
                text: "对事业没有要求，更看重生活的愉悦感。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 26,
        dimension: 4,
        text: "你希望伴侣在专业领域?",
        options: [
            {
                text: "是佼佼者或专家,能让我由衷佩服。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "能和我有共同话题，可以深入交流。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不需要多精通，有基本了解能听懂就行。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1
                }
            },
            {
                text: "无所谓，我们的生活可以很少聊工作。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 27,
        dimension: 5, // 三观与核心
        text: "金钱观上，你希望?",
        options: [
            {
                text: "节俭、有规划，不铺张浪费。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "懂得享受生活，但会量力而行。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "有投资理财头脑，注重财富增值。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "没有严格标准，大体上合理、不出格就行。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 28,
        dimension: 5,
        text: "家庭观的核心是?",
        options: [
            {
                text: "以我们俩组建的新家庭为绝对核心。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "与各自的原生家庭保持比较紧密的联系和照顾。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "小家庭完全独立,不过多牵扯双方原生家庭。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "能在新家庭和原生家庭之间找到平衡点。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 29,
        dimension: 5,
        text: "对未来生活的想象，最重要的是?",
        options: [
            {
                text: "物质丰足，有安全感和保障。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "精神富足，能一起持续学习和成长。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "平平淡淡，温馨和睦就是幸福。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1
                }
            },
            {
                text: "丰富多彩，充满不同的体验和冒险。",
                scores: {
                    [TestResultTypes.VIBRANT_ADVENTURER]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 30,
        dimension: 5,
        text: "对'仪式感'的看法?",
        options: [
            {
                text: "非常重要，是爱情中不可或缺的调味剂。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "比较重要，重要的日子和时刻需要被铭记。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "可有可无，平淡日常中的关怀比刻意仪式更珍贵。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "不太在意，甚至觉得有些麻烦。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            }
        ]
    },
    {
        id: 31,
        dimension: 5,
        text: "对生育和子女教育的态度?",
        options: [
            {
                text: "一定要有孩子，并且会认真规划教育。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "顺其自然，有孩子挺好，没有也能接受。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.STEADY_BUILDER]: 3,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "倾向于丁克，不想要孩子。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "目前还没想清楚，看未来的发展和状态。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.FREE_SPIRIT]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 32,
        dimension: 5,
        text: "如何处理与异性朋友的界限?",
        options: [
            {
                text: "必须有非常清晰的界限，主动避嫌。",
                scores: {
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "可以有正常的社交，但需要透明、公开。",
                scores: {
                    [TestResultTypes.ELITE_COMPANION]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.SOUL_MATE]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "给予对方完全的信任，不干涉其社交自由。",
                scores: {
                    [TestResultTypes.FREE_SPIRIT]: 5,
                    [TestResultTypes.SOUL_MATE]: 4,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.GENTLE_GUARDIAN]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "很难一概而论，需要根据具体的人和事来讨论。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            }
        ]
    },
    {
        id: 33,
        dimension: 5,
        text: "在长期关系中，你认为最重要的维护因素是?",
        options: [
            {
                text: "深度的理解、包容和有效沟通。",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 5,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.ELITE_COMPANION]: 3,
                    [TestResultTypes.STEADY_BUILDER]: 2,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "彼此的忠诚、责任和承诺。",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 5,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 4,
                    [TestResultTypes.GENTLE_GUARDIAN]: 3,
                    [TestResultTypes.ELITE_COMPANION]: 2,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "持续的吸引力、激情和心动的感觉。",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 5,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 4,
                    [TestResultTypes.FREE_SPIRIT]: 3,
                    [TestResultTypes.GENTLE_GUARDIAN]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "日常的陪伴、支持和不离不弃。",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 5,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 3,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            }
        ]
    },
    {
        id: 34,
        dimension: 5, // 终极权重题
        text: "你心中'理想伴侣'最核心、最不可或缺的特质是?",
        options: [
            {
                text: "理解与包容",
                scores: {
                    [TestResultTypes.SOUL_MATE]: 10,
                    [TestResultTypes.GENTLE_GUARDIAN]: 8,
                    [TestResultTypes.ELITE_COMPANION]: 6,
                    [TestResultTypes.STEADY_BUILDER]: 4,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 2,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1,
                    [TestResultTypes.ROMANTIC_DREAMER]: 1
                }
            },
            {
                text: "忠诚与责任",
                scores: {
                    [TestResultTypes.STEADY_BUILDER]: 10,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 8,
                    [TestResultTypes.GENTLE_GUARDIAN]: 6,
                    [TestResultTypes.ELITE_COMPANION]: 4,
                    [TestResultTypes.ROMANTIC_DREAMER]: 2,
                    [TestResultTypes.SOUL_MATE]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            },
            {
                text: "激情与心动",
                scores: {
                    [TestResultTypes.ROMANTIC_DREAMER]: 10,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 8,
                    [TestResultTypes.FREE_SPIRIT]: 6,
                    [TestResultTypes.GENTLE_GUARDIAN]: 4,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.STEADY_BUILDER]: 1,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 1
                }
            },
            {
                text: "陪伴与支持",
                scores: {
                    [TestResultTypes.GENTLE_GUARDIAN]: 10,
                    [TestResultTypes.STEADY_BUILDER]: 8,
                    [TestResultTypes.TRADITIONAL_STABILIZER]: 6,
                    [TestResultTypes.ROMANTIC_DREAMER]: 4,
                    [TestResultTypes.SOUL_MATE]: 2,
                    [TestResultTypes.ELITE_COMPANION]: 1,
                    [TestResultTypes.VIBRANT_ADVENTURER]: 1,
                    [TestResultTypes.FREE_SPIRIT]: 1
                }
            }
        ]
    }
];

// 算法计算函数
class IdealPartnerCalculator {
    constructor() {
        this.userAnswers = new Array(Questions.length).fill(null);
        this.typeScores = {};
        this.initializeScores();
    }
    
    // 初始化分数
    initializeScores() {
        for (const type in TestResultTypes) {
            this.typeScores[TestResultTypes[type]] = 0;
        }
    }
    
    // 记录用户答案
    recordAnswer(questionId, optionIndex) {
        if (questionId >= 0 && questionId < Questions.length) {
            this.userAnswers[questionId] = optionIndex;
        }
    }
    
    // 计算最终结果
    calculateResult() {
        // 重置分数
        this.initializeScores();
        
        // 步骤1：原始分数累加
        for (let i = 0; i < Questions.length; i++) {
            const question = Questions[i];
            const answerIndex = this.userAnswers[i];
            
            if (answerIndex !== null && answerIndex >= 0) {
                const option = question.options[answerIndex];
                const dimensionWeight = TestDimensions[question.dimension].weight;
                
                // 累加分数，应用维度权重
                for (const type in option.scores) {
                    this.typeScores[type] += option.scores[type] * dimensionWeight;
                }
            }
        }
        
        // 步骤2：排序并获取主副类型
        const sortedTypes = Object.entries(this.typeScores)
            .sort((a, b) => b[1] - a[1])
            .map(([type, score]) => ({ type, score }));
        
        if (sortedTypes.length < 2) {
            return this.createResultObject(sortedTypes[0], null, sortedTypes);
        }
        
        const primaryType = sortedTypes[0];
        const secondaryType = sortedTypes[1];
        
        // 步骤3：计算比率，确定副类型倾向
        const ratio = secondaryType.score / primaryType.score;
        let secondaryTendency = null;
        let tendencyStrength = 'none';
        
        if (ratio >= 0.85) {
            secondaryTendency = secondaryType.type;
            tendencyStrength = 'strong';
        } else if (ratio >= 0.70) {
            secondaryTendency = secondaryType.type;
            tendencyStrength = 'moderate';
        } else if (ratio >= 0.60) {
            secondaryTendency = secondaryType.type;
            tendencyStrength = 'weak';
        }
        
        // 步骤4：应用修饰标签
        const modifiedType = this.applyModifierTags(primaryType.type);
        
        // 步骤5：计算匹配度百分比
        const totalScore = sortedTypes.reduce((sum, item) => sum + item.score, 0);
        const typesWithPercentage = sortedTypes.map(item => ({
            type: item.type,
            score: item.score,
            percentage: Math.round((item.score / totalScore) * 100)
        }));
        
        return this.createResultObject(
            { ...primaryType, type: modifiedType },
            secondaryTendency ? { 
                type: secondaryTendency, 
                strength: tendencyStrength 
            } : null,
            typesWithPercentage
        );
    }
    
    // 应用修饰标签
    applyModifierTags(primaryType) {
        let modifiedType = primaryType;
        const modifiers = [];
        
        // 检查关键题目
        for (const [key, questionId] of Object.entries(KeyModifierQuestions)) {
            const answerIndex = this.userAnswers[questionId];
            
            if (answerIndex !== null && answerIndex >= 0) {
                const option = Questions[questionId].options[answerIndex];
                
                switch (key) {
                    case 'APPEARANCE':
                        if (option.text.includes("比较看重颜值") || option.text.includes("很重要")) {
                            modifiers.push(ModifierTags.APPEARANCE_EMPHASIS);
                        }
                        break;
                    case 'CEREMONY':
                        if (option.text.includes("非常重要")) {
                            modifiers.push(ModifierTags.CEREMONY_EMPHASIS);
                        }
                        break;
                    case 'INCOME':
                        if (option.text.includes("很重要")) {
                            modifiers.push(ModifierTags.ECONOMIC_SECURITY);
                        }
                        break;
                    case 'CHILDREN':
                        if (option.text.includes("一定要有孩子")) {
                            modifiers.push(ModifierTags.FAMILY_ORIENTED);
                        }
                        break;
                }
            }
        }
        
        // 添加修饰标签
        if (modifiers.length > 0) {
            // 只取第一个修饰标签，避免过长
            modifiedType += modifiers[0];
        }
        
        return modifiedType;
    }
    
    // 创建结果对象
    createResultObject(primary, secondary, allTypes) {
        return {
            primaryType: {
                name: primary.type,
                score: primary.score,
                percentage: primary.percentage
            },
            secondaryType: secondary,
            allTypes: allTypes,
            dimensionScores: this.calculateDimensionScores(),
            keyInsights: this.generateKeyInsights()
        };
    }
    
    // 计算维度分数
    calculateDimensionScores() {
        const dimensionScores = {};
        
        for (const dimension of TestDimensions) {
            dimensionScores[dimension.id] = {
                name: dimension.name,
                score: 0,
                maxScore: 0
            };
        }
        
        // 计算每个维度的得分
        for (let i = 0; i < Questions.length; i++) {
            const question = Questions[i];
            const answerIndex = this.userAnswers[i];
            
            if (answerIndex !== null && answerIndex >= 0) {
                const option = question.options[answerIndex];
                const dimension = TestDimensions[question.dimension];
                
                // 计算选项在该维度的平均分
                let optionScore = 0;
                let count = 0;
                for (const type in option.scores) {
                    optionScore += option.scores[type];
                    count++;
                }
                
                if (count > 0) {
                    dimensionScores[dimension.id].score += (optionScore / count) * dimension.weight;
                }
            }
        }
        
        // 计算百分比
        for (const dimId in dimensionScores) {
            const maxPossible = 5 * 5; // 每道题最高5分，每个维度最多5题
            dimensionScores[dimId].percentage = Math.min(100, 
                Math.round((dimensionScores[dimId].score / maxPossible) * 100));
        }
        
        return dimensionScores;
    }
    
    // 生成关键洞察
    generateKeyInsights() {
        const insights = [];
        
        // 分析用户的选择模式
        const answeredCount = this.userAnswers.filter(a => a !== null).length;
        if (answeredCount < Questions.length * 0.8) {
            insights.push({
                type: 'warning',
                text: '您跳过了部分题目，这可能会影响结果的准确性。'
            });
        }
        
        // 检查是否有明显矛盾的选择
        const consistencyScore = this.calculateConsistency();
        if (consistencyScore < 0.6) {
            insights.push({
                type: 'info',
                text: '您的选择在多个维度上呈现多样性，表明您对伴侣的期待较为开放和包容。'
            });
        }
        
        return insights;
    }
    
    // 计算选择一致性
    calculateConsistency() {
        // 简化的计算方法：检查相邻题目是否选择了相似倾向的选项
        let consistentPairs = 0;
        let totalPairs = 0;
        
        for (let i = 0; i < Questions.length - 1; i++) {
            const currentAnswer = this.userAnswers[i];
            const nextAnswer = this.userAnswers[i + 1];
            
            if (currentAnswer !== null && nextAnswer !== null) {
                totalPairs++;
                
                // 检查是否属于同一维度
                if (Questions[i].dimension === Questions[i + 1].dimension) {
                    // 简单的一致性检查：是否选择了相似位置的选项
                    if (Math.abs(currentAnswer - nextAnswer) <= 1) {
                        consistentPairs++;
                    }
                }
            }
        }
        
        return totalPairs > 0 ? consistentPairs / totalPairs : 1;
    }
    
    // 获取用户答案统计
    getAnswerStatistics() {
        const answered = this.userAnswers.filter(a => a !== null).length;
        const skipped = this.userAnswers.filter(a => a === null).length;
        
        return {
            total: Questions.length,
            answered,
            skipped,
            completionRate: Math.round((answered / Questions.length) * 100)
        };
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        TestResultTypes,
        TestDimensions,
        Questions,
        IdealPartnerCalculator
    };
}