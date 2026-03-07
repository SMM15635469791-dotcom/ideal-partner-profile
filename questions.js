// 理想伴侣画像测试 - 问题数据文件
// 版本: 2.0 | 最后更新: 2026-03-06
// 注意: 此文件包含35个问题，分为6个评估维度

// 问题数据结构
const QUESTIONS = [
    {
        id: 1,
        text: "在休闲时间，您更希望伴侣如何安排两人时光？",
        dimension: "relationship",
        hint: "这反映了您对伴侣关系的期待模式",
        options: [
            { text: "各自有独立空间，偶尔分享兴趣", score: 1, dimensionScores: { personality: 1, communication: 2, emotional: 1, values: 2, lifestyle: 3, relationship: 1 } },
            { text: "一起尝试新事物，保持新鲜感", score: 2, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 3, lifestyle: 4, relationship: 4 } },
            { text: "安静在家，享受平静温馨的相处", score: 3, dimensionScores: { personality: 4, communication: 2, emotional: 4, values: 3, lifestyle: 2, relationship: 3 } },
            { text: "计划充实活动，共同成长进步", score: 4, dimensionScores: { personality: 2, communication: 4, emotional: 3, values: 4, lifestyle: 1, relationship: 2 } }
        ]
    },
    {
        id: 2,
        text: "当您遇到困难时，希望伴侣最先给予什么支持？",
        dimension: "emotional",
        hint: "这反映了您的情感需求类型",
        options: [
            { text: "冷静分析，提供解决方案", score: 1, dimensionScores: { personality: 3, communication: 4, emotional: 1, values: 2, lifestyle: 3, relationship: 2 } },
            { text: "无条件陪伴，给予情感安慰", score: 2, dimensionScores: { personality: 2, communication: 1, emotional: 4, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "鼓励独立面对，相信我能解决", score: 3, dimensionScores: { personality: 4, communication: 2, emotional: 2, values: 4, lifestyle: 2, relationship: 1 } },
            { text: "一起分担，共同寻找出路", score: 4, dimensionScores: { personality: 1, communication: 3, emotional: 3, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 3,
        text: "您如何看待伴侣的社交圈和异性朋友？",
        dimension: "values",
        hint: "这反映了您的价值观和信任基础",
        options: [
            { text: "完全信任，给予充分自由", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "适度介意，希望保持适当距离", score: 2, dimensionScores: { personality: 2, communication: 4, emotional: 2, values: 2, lifestyle: 4, relationship: 3 } },
            { text: "需要知情权，不介意但想了解", score: 3, dimensionScores: { personality: 3, communication: 2, emotional: 3, values: 3, lifestyle: 2, relationship: 1 } },
            { text: "较难接受，希望以两人世界为主", score: 4, dimensionScores: { personality: 1, communication: 1, emotional: 4, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 4,
        text: "在重要决策上，您希望伴侣如何与您沟通？",
        dimension: "communication",
        hint: "这反映了您偏好的沟通方式",
        options: [
            { text: "理性讨论，逻辑说服", score: 1, dimensionScores: { personality: 3, communication: 4, emotional: 1, values: 2, lifestyle: 3, relationship: 2 } },
            { text: "情感交流，感受优先", score: 2, dimensionScores: { personality: 2, communication: 1, emotional: 4, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "各自思考，然后协商", score: 3, dimensionScores: { personality: 4, communication: 3, emotional: 2, values: 4, lifestyle: 2, relationship: 1 } },
            { text: "听从主导，避免争论", score: 4, dimensionScores: { personality: 1, communication: 2, emotional: 3, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 5,
        text: "您理想中的家庭经济管理模式是怎样的？",
        dimension: "lifestyle",
        hint: "这反映了您的生活态度和价值观",
        options: [
            { text: "各自经济独立，共同分担", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 2, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "一人主管，另一人辅助", score: 2, dimensionScores: { personality: 2, communication: 4, emotional: 1, values: 2, lifestyle: 3, relationship: 3 } },
            { text: "完全共享，不分彼此", score: 3, dimensionScores: { personality: 1, communication: 2, emotional: 4, values: 3, lifestyle: 1, relationship: 4 } },
            { text: "按比例贡献，灵活调整", score: 4, dimensionScores: { personality: 3, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 6,
        text: "您希望伴侣如何表达爱意？",
        dimension: "emotional",
        hint: "这反映了您的情感需求表达方式",
        options: [
            { text: "实际行动，默默付出", score: 1, dimensionScores: { personality: 3, communication: 1, emotional: 4, values: 2, lifestyle: 3, relationship: 2 } },
            { text: "语言表达，直接说爱", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 3, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "精心时刻，高质量陪伴", score: 3, dimensionScores: { personality: 2, communication: 3, emotional: 2, values: 4, lifestyle: 2, relationship: 1 } },
            { text: "礼物惊喜，仪式感满满", score: 4, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 7,
        text: "当您和伴侣意见不合时，您希望如何解决？",
        dimension: "communication",
        hint: "这反映了您的冲突处理方式",
        options: [
            { text: "立即沟通，当场解决", score: 1, dimensionScores: { personality: 3, communication: 4, emotional: 2, values: 3, lifestyle: 4, relationship: 2 } },
            { text: "冷静后再谈，避免冲动", score: 2, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 4, lifestyle: 3, relationship: 3 } },
            { text: "各退一步，寻求妥协", score: 3, dimensionScores: { personality: 2, communication: 2, emotional: 4, values: 2, lifestyle: 2, relationship: 1 } },
            { text: "听从一方，结束争论", score: 4, dimensionScores: { personality: 1, communication: 1, emotional: 3, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 8,
        text: "您如何看待事业与家庭的平衡？",
        dimension: "lifestyle",
        hint: "这反映了您的生活优先级",
        options: [
            { text: "事业为重，经济基础决定家庭幸福", score: 1, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 3, lifestyle: 4, relationship: 1 } },
            { text: "家庭第一，陪伴家人最重要", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "两者平衡，寻找最佳结合点", score: 3, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 4, lifestyle: 3, relationship: 3 } },
            { text: "顺其自然，不同阶段不同重点", score: 4, dimensionScores: { personality: 2, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 2 } }
        ]
    },
    {
        id: 9,
        text: "您希望伴侣的性格更偏向哪种类型？",
        dimension: "personality",
        hint: "这反映了您对伴侣性格的偏好",
        options: [
            { text: "外向开朗，社交能力强", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 2, values: 2, lifestyle: 4, relationship: 3 } },
            { text: "内向沉稳，深度思考型", score: 2, dimensionScores: { personality: 1, communication: 2, emotional: 4, values: 3, lifestyle: 1, relationship: 1 } },
            { text: "理性务实，逻辑清晰", score: 3, dimensionScores: { personality: 3, communication: 4, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "感性温柔，善解人意", score: 4, dimensionScores: { personality: 2, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 4 } }
        ]
    },
    {
        id: 10,
        text: "您认为理想的亲密关系中，独立与依赖的比例应该是？",
        dimension: "relationship",
        hint: "这反映了您对关系距离的期待",
        options: [
            { text: "高度独立，各自精彩", score: 1, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 3, relationship: 1 } },
            { text: "适度依赖，相互扶持", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 3, values: 3, lifestyle: 2, relationship: 3 } },
            { text: "亲密无间，彼此融合", score: 3, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "动态平衡，不同情境不同模式", score: 4, dimensionScores: { personality: 3, communication: 1, emotional: 2, values: 1, lifestyle: 4, relationship: 2 } }
        ]
    },
    {
        id: 11,
        text: "您希望伴侣在朋友面前如何描述您？",
        dimension: "values",
        hint: "这反映了您的自我价值认同",
        options: [
            { text: "聪明能干的事业伙伴", score: 1, dimensionScores: { personality: 3, communication: 2, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "温柔体贴的生活伴侣", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 4, values: 3, lifestyle: 1, relationship: 4 } },
            { text: "有趣好玩的灵魂伴侣", score: 3, dimensionScores: { personality: 4, communication: 4, emotional: 2, values: 2, lifestyle: 3, relationship: 3 } },
            { text: "相互成就的最佳战友", score: 4, dimensionScores: { personality: 1, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 12,
        text: "当您情绪低落时，希望伴侣如何回应？",
        dimension: "emotional",
        hint: "这反映了您的情感支持需求",
        options: [
            { text: "给予空间，让我自己消化", score: 1, dimensionScores: { personality: 4, communication: 1, emotional: 1, values: 3, lifestyle: 4, relationship: 2 } },
            { text: "耐心倾听，理解我的感受", score: 2, dimensionScores: { personality: 2, communication: 4, emotional: 4, values: 2, lifestyle: 3, relationship: 3 } },
            { text: "积极开导，带我走出情绪", score: 3, dimensionScores: { personality: 1, communication: 3, emotional: 2, values: 4, lifestyle: 2, relationship: 1 } },
            { text: "实际帮助，解决引发情绪的问题", score: 4, dimensionScores: { personality: 3, communication: 2, emotional: 3, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 13,
        text: "您认为伴侣间应该有多少共同爱好？",
        dimension: "lifestyle",
        hint: "这反映了您对共同生活的期待",
        options: [
            { text: "各自爱好，互不干涉", score: 1, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 4, relationship: 1 } },
            { text: "部分重叠，保持各自空间", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 2, values: 3, lifestyle: 3, relationship: 2 } },
            { text: "大部分相同，共同成长", score: 3, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 2, relationship: 4 } },
            { text: "积极培养，努力创造共同点", score: 4, dimensionScores: { personality: 3, communication: 1, emotional: 3, values: 1, lifestyle: 1, relationship: 3 } }
        ]
    },
    {
        id: 14,
        text: "您希望伴侣如何处理与您家人的关系？",
        dimension: "values",
        hint: "这反映了您的家庭观念",
        options: [
            { text: "保持适当距离，尊重彼此家庭", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "亲密相处，像一家人一样", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "礼貌友好，但不过多介入", score: 3, dimensionScores: { personality: 3, communication: 2, emotional: 2, values: 3, lifestyle: 4, relationship: 1 } },
            { text: "视情况而定，顺其自然", score: 4, dimensionScores: { personality: 2, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 3 } }
        ]
    },
    {
        id: 15,
        text: "在公开场合，您希望伴侣如何与您互动？",
        dimension: "communication",
        hint: "这反映了您的社交表达偏好",
        options: [
            { text: "保持适度亲密，自然流露", score: 1, dimensionScores: { personality: 2, communication: 3, emotional: 2, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "正式得体，注意社交礼仪", score: 2, dimensionScores: { personality: 3, communication: 2, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "甜蜜恩爱，不介意展示亲密", score: 3, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "像朋友一样，轻松自在", score: 4, dimensionScores: { personality: 4, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 16,
        text: "您认为理想的关系中，谁应该在经济上承担更多责任？",
        dimension: "lifestyle",
        hint: "这反映了您的经济观念",
        options: [
            { text: "经济能力较强的一方", score: 1, dimensionScores: { personality: 3, communication: 2, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "平均分配，男女平等", score: 2, dimensionScores: { personality: 4, communication: 4, emotional: 2, values: 3, lifestyle: 3, relationship: 3 } },
            { text: "传统模式，男方为主", score: 3, dimensionScores: { personality: 1, communication: 1, emotional: 4, values: 2, lifestyle: 1, relationship: 1 } },
            { text: "按需调整，灵活变通", score: 4, dimensionScores: { personality: 2, communication: 3, emotional: 3, values: 1, lifestyle: 2, relationship: 4 } }
        ]
    },
    {
        id: 17,
        text: "您希望伴侣在决策时更注重什么？",
        dimension: "personality",
        hint: "这反映了您欣赏的决策风格",
        options: [
            { text: "逻辑分析，数据支持", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "直觉感受，内心声音", score: 2, dimensionScores: { personality: 1, communication: 2, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "他人建议，社会共识", score: 3, dimensionScores: { personality: 2, communication: 4, emotional: 2, values: 3, lifestyle: 4, relationship: 1 } },
            { text: "经验积累，过往实践", score: 4, dimensionScores: { personality: 3, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 3 } }
        ]
    },
    {
        id: 18,
        text: "您如何看待伴侣的过去情感经历？",
        dimension: "values",
        hint: "这反映了您的感情观和开放度",
        options: [
            { text: "完全不在意，关注现在", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "适度了解，但不纠结", score: 2, dimensionScores: { personality: 2, communication: 2, emotional: 2, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "需要坦诚分享，建立信任", score: 3, dimensionScores: { personality: 3, communication: 4, emotional: 3, values: 2, lifestyle: 2, relationship: 1 } },
            { text: "比较介意，希望越少越好", score: 4, dimensionScores: { personality: 1, communication: 1, emotional: 4, values: 1, lifestyle: 1, relationship: 4 } }
        ]
    },
    {
        id: 19,
        text: "在压力大时，您希望伴侣如何表现？",
        dimension: "emotional",
        hint: "这反映了您的压力应对期待",
        options: [
            { text: "独自安静，不过多打扰", score: 1, dimensionScores: { personality: 4, communication: 1, emotional: 1, values: 3, lifestyle: 4, relationship: 2 } },
            { text: "温柔安慰，给予情感支持", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 4, values: 2, lifestyle: 3, relationship: 4 } },
            { text: "理性分析，帮助解决问题", score: 3, dimensionScores: { personality: 3, communication: 4, emotional: 2, values: 4, lifestyle: 2, relationship: 1 } },
            { text: "转移注意力，带我去放松", score: 4, dimensionScores: { personality: 1, communication: 2, emotional: 3, values: 1, lifestyle: 1, relationship: 3 } }
        ]
    },
    {
        id: 20,
        text: "您希望伴侣的生活习惯与您有多相似？",
        dimension: "lifestyle",
        hint: "这反映了您对生活协调性的要求",
        options: [
            { text: "可以完全不同，互相尊重", score: 1, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "基本一致，减少摩擦", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "求同存异，包容不同", score: 3, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 3, lifestyle: 3, relationship: 3 } },
            { text: "愿意为对方调整习惯", score: 4, dimensionScores: { personality: 2, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 21,
        text: "您认为理想的伴侣应该有多少个人空间？",
        dimension: "relationship",
        hint: "这反映了您对个人界限的看法",
        options: [
            { text: "大量个人空间，保持独立性", score: 1, dimensionScores: { personality: 4, communication: 1, emotional: 1, values: 4, lifestyle: 3, relationship: 1 } },
            { text: "适度个人空间，平衡独立与亲密", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 3, values: 3, lifestyle: 2, relationship: 3 } },
            { text: "较少个人空间，高度融合", score: 3, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "弹性空间，根据不同需求调整", score: 4, dimensionScores: { personality: 3, communication: 2, emotional: 2, values: 1, lifestyle: 4, relationship: 2 } }
        ]
    },
    {
        id: 22,
        text: "您希望伴侣如何对待您的朋友？",
        dimension: "values",
        hint: "这反映了您的社交价值观",
        options: [
            { text: "融入我的朋友圈，成为朋友", score: 1, dimensionScores: { personality: 1, communication: 4, emotional: 3, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "礼貌友好，但不必深交", score: 2, dimensionScores: { personality: 2, communication: 2, emotional: 2, values: 3, lifestyle: 4, relationship: 2 } },
            { text: "保持距离，尊重我的社交圈", score: 3, dimensionScores: { personality: 4, communication: 1, emotional: 1, values: 4, lifestyle: 3, relationship: 1 } },
            { text: "选择性相处，看个人合拍度", score: 4, dimensionScores: { personality: 3, communication: 3, emotional: 4, values: 1, lifestyle: 2, relationship: 3 } }
        ]
    },
    {
        id: 23,
        text: "您欣赏哪种类型的幽默感？",
        dimension: "personality",
        hint: "这反映了您的性格偏好",
        options: [
            { text: "机智犀利，反应迅速", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 2, lifestyle: 4, relationship: 3 } },
            { text: "温和风趣，不伤他人", score: 2, dimensionScores: { personality: 2, communication: 2, emotional: 4, values: 3, lifestyle: 2, relationship: 4 } },
            { text: "冷幽默，需要思考才懂", score: 3, dimensionScores: { personality: 3, communication: 1, emotional: 2, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "夸张搞笑，活跃气氛", score: 4, dimensionScores: { personality: 1, communication: 4, emotional: 3, values: 1, lifestyle: 1, relationship: 1 } }
        ]
    },
    {
        id: 24,
        text: "在纪念日或节日，您希望如何庆祝？",
        dimension: "emotional",
        hint: "这反映了您的仪式感需求",
        options: [
            { text: "简单温馨，两人世界", score: 1, dimensionScores: { personality: 2, communication: 1, emotional: 4, values: 3, lifestyle: 2, relationship: 4 } },
            { text: "盛大浪漫，精心准备", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 3, values: 2, lifestyle: 1, relationship: 3 } },
            { text: "顺其自然，不刻意安排", score: 3, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 4, relationship: 1 } },
            { text: "有创意，每次都有新意", score: 4, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 1, lifestyle: 3, relationship: 2 } }
        ]
    },
    {
        id: 25,
        text: "您希望伴侣如何处理负面情绪？",
        dimension: "communication",
        hint: "这反映了您对情绪表达的态度",
        options: [
            { text: "直接表达，共同面对", score: 1, dimensionScores: { personality: 2, communication: 4, emotional: 3, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "自我调节，不传播负能量", score: 2, dimensionScores: { personality: 4, communication: 1, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "选择性分享，适度倾诉", score: 3, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 3, lifestyle: 3, relationship: 3 } },
            { text: "通过其他方式发泄，如运动", score: 4, dimensionScores: { personality: 1, communication: 2, emotional: 4, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 26,
        text: "您认为理想的伴侣应该有多少生活技能？",
        dimension: "lifestyle",
        hint: "这反映了您的实际生活期待",
        options: [
            { text: "生存必备，能照顾自己", score: 1, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 4, relationship: 1 } },
            { text: "多才多艺，生活丰富", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "互补型，不会的可以学", score: 3, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 3, lifestyle: 3, relationship: 3 } },
            { text: "专业精通，在某领域出色", score: 4, dimensionScores: { personality: 2, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 2 } }
        ]
    },
    {
        id: 27,
        text: "您希望伴侣如何支持您的事业发展？",
        dimension: "relationship",
        hint: "这反映了您的职业与关系平衡观",
        options: [
            { text: "精神支持，鼓励打气", score: 1, dimensionScores: { personality: 2, communication: 3, emotional: 4, values: 2, lifestyle: 1, relationship: 3 } },
            { text: "实际帮助，提供资源建议", score: 2, dimensionScores: { personality: 3, communication: 4, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "不干涉，相信我的选择", score: 3, dimensionScores: { personality: 4, communication: 1, emotional: 2, values: 3, lifestyle: 3, relationship: 1 } },
            { text: "共同进步，互相成就", score: 4, dimensionScores: { personality: 1, communication: 2, emotional: 3, values: 1, lifestyle: 2, relationship: 4 } }
        ]
    },
    {
        id: 28,
        text: "您如何看待家务分工？",
        dimension: "values",
        hint: "这反映了您的家庭责任观念",
        options: [
            { text: "明确分工，各司其职", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "谁有空谁做，灵活处理", score: 2, dimensionScores: { personality: 2, communication: 2, emotional: 3, values: 3, lifestyle: 3, relationship: 3 } },
            { text: "一起做，增进感情", score: 3, dimensionScores: { personality: 1, communication: 4, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "外包解决，专业高效", score: 4, dimensionScores: { personality: 3, communication: 1, emotional: 2, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 29,
        text: "您希望伴侣的外在形象更注重什么？",
        dimension: "personality",
        hint: "这反映了您的审美偏好",
        options: [
            { text: "干净整洁，舒适得体", score: 1, dimensionScores: { personality: 2, communication: 1, emotional: 2, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "时尚潮流，有品味", score: 2, dimensionScores: { personality: 1, communication: 4, emotional: 3, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "自然随意，不做作", score: 3, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "专业得体，符合场合", score: 4, dimensionScores: { personality: 3, communication: 3, emotional: 4, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 30,
        text: "在旅行时，您希望如何与伴侣相处？",
        dimension: "lifestyle",
        hint: "这反映了您的休闲方式偏好",
        options: [
            { text: "精心计划，高效游玩", score: 1, dimensionScores: { personality: 3, communication: 4, emotional: 1, values: 4, lifestyle: 4, relationship: 2 } },
            { text: "随性而为，走到哪算哪", score: 2, dimensionScores: { personality: 1, communication: 1, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "深度体验，感受当地文化", score: 3, dimensionScores: { personality: 4, communication: 3, emotional: 2, values: 3, lifestyle: 3, relationship: 1 } },
            { text: "放松休息，享受酒店设施", score: 4, dimensionScores: { personality: 2, communication: 2, emotional: 3, values: 1, lifestyle: 2, relationship: 3 } }
        ]
    },
    {
        id: 31,
        text: "您希望伴侣如何表达不同意见？",
        dimension: "communication",
        hint: "这反映了您的沟通冲突处理偏好",
        options: [
            { text: "直接坦率，不拐弯抹角", score: 1, dimensionScores: { personality: 4, communication: 4, emotional: 1, values: 3, lifestyle: 2, relationship: 2 } },
            { text: "委婉温和，照顾感受", score: 2, dimensionScores: { personality: 1, communication: 2, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "书面表达，更清晰理性", score: 3, dimensionScores: { personality: 3, communication: 3, emotional: 2, values: 4, lifestyle: 4, relationship: 1 } },
            { text: "幽默化解，避免冲突", score: 4, dimensionScores: { personality: 2, communication: 1, emotional: 3, values: 1, lifestyle: 3, relationship: 3 } }
        ]
    },
    {
        id: 32,
        text: "您认为理想的亲密关系应该持续多久？",
        dimension: "relationship",
        hint: "这反映了您对关系长度的期待",
        options: [
            { text: "一辈子，从一而终", score: 1, dimensionScores: { personality: 1, communication: 3, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "顺其自然，珍惜当下", score: 2, dimensionScores: { personality: 2, communication: 2, emotional: 2, values: 3, lifestyle: 4, relationship: 3 } },
            { text: "长期稳定，但接受变化", score: 3, dimensionScores: { personality: 3, communication: 4, emotional: 3, values: 4, lifestyle: 2, relationship: 2 } },
            { text: "质量比长度更重要", score: 4, dimensionScores: { personality: 4, communication: 1, emotional: 1, values: 1, lifestyle: 3, relationship: 1 } }
        ]
    },
    {
        id: 33,
        text: "您希望伴侣的价值观与您有多匹配？",
        dimension: "values",
        hint: "这反映了您对价值观一致性的重视程度",
        options: [
            { text: "高度一致，核心价值必须相同", score: 1, dimensionScores: { personality: 1, communication: 2, emotional: 3, values: 4, lifestyle: 1, relationship: 4 } },
            { text: "大体一致，细节可不同", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 2, values: 3, lifestyle: 3, relationship: 3 } },
            { text: "可以不同，互相尊重", score: 3, dimensionScores: { personality: 4, communication: 4, emotional: 1, values: 2, lifestyle: 4, relationship: 2 } },
            { text: "不同反而有吸引力", score: 4, dimensionScores: { personality: 3, communication: 1, emotional: 4, values: 1, lifestyle: 2, relationship: 1 } }
        ]
    },
    {
        id: 34,
        text: "您希望伴侣如何展现责任感？",
        dimension: "personality",
        hint: "这反映了您对责任感的理解",
        options: [
            { text: "对工作认真负责", score: 1, dimensionScores: { personality: 4, communication: 2, emotional: 1, values: 4, lifestyle: 3, relationship: 2 } },
            { text: "对家庭全心投入", score: 2, dimensionScores: { personality: 2, communication: 3, emotional: 4, values: 2, lifestyle: 1, relationship: 4 } },
            { text: "对社会有贡献意识", score: 3, dimensionScores: { personality: 3, communication: 4, emotional: 2, values: 3, lifestyle: 4, relationship: 1 } },
            { text: "对自己的人生负责", score: 4, dimensionScores: { personality: 1, communication: 1, emotional: 3, values: 1, lifestyle: 2, relationship: 3 } }
        ]
    },
    {
        id: 35,
        text: "在未来的规划中，您希望伴侣扮演什么角色？",
        dimension: "relationship",
        hint: "这反映了您对长期关系的期待",
        options: [
            { text: "并肩作战的伙伴", score: 1, dimensionScores: { personality: 4, communication: 3, emotional: 2, values: 4, lifestyle: 3, relationship: 4 } },
            { text: "温暖依靠的港湾", score: 2, dimensionScores: { personality: 2, communication: 2, emotional: 4, values: 3, lifestyle: 2, relationship: 3 } },
            { text: "共同成长的导师", score: 3, dimensionScores: { personality: 3, communication: 4, emotional: 3, values: 2, lifestyle: 4, relationship: 2 } },
            { text: "简单陪伴的爱人", score: 4, dimensionScores: { personality: 1, communication: 1, emotional: 1, values: 1, lifestyle: 1, relationship: 1 } }
        ]
    }
];

// 维度配置
const DIMENSIONS = {
    personality: {
        id: "personality",
        name: "性格特质",
        description: "分析您对伴侣性格特征的偏好，包括内外向、理性感性、处事风格等",
        color: "#FF6B8B",
        icon: "fa-user-circle"
    },
    communication: {
        id: "communication",
        name: "沟通方式",
        description: "评估您期望的沟通模式，包括表达方式、冲突处理和情感交流等",
        color: "#4D6EFF",
        icon: "fa-comments"
    },
    emotional: {
        id: "emotional",
        name: "情感需求",
        description: "探索您的情感需求类型，包括安全感、表达方式和情感支持等",
        color: "#6BDC8B",
        icon: "fa-heart"
    },
    values: {
        id: "values",
        name: "价值观",
        description: "分析您在生活、家庭、事业等方面的核心价值观匹配度",
        color: "#FFD166",
        icon: "fa-balance-scale"
    },
    lifestyle: {
        id: "lifestyle",
        name: "生活态度",
        description: "评估您对生活方式、习惯和日常相处的偏好",
        color: "#9D4EDD",
        icon: "fa-home"
    },
    relationship: {
        id: "relationship",
        name: "关系期待",
        description: "探索您对亲密关系的期待，包括独立性、依赖度和关系模式等",
        color: "#06D6A0",
        icon: "fa-handshake"
    }
};

// 维度显示顺序
const DIMENSION_ORDER = ["personality", "communication", "emotional", "values", "lifestyle", "relationship"];

// 测试配置
const TEST_CONFIG = {
    totalQuestions: QUESTIONS.length,
    maxScorePerQuestion: 4,
    minScorePerQuestion: 1,
    dimensions: Object.keys(DIMENSIONS).length,
    passingScore: 60, // 及格分数（百分比）
    excellentScore: 85 // 优秀分数（百分比）
};

// 导出到全局作用域
window.QUESTIONS = QUESTIONS;
window.DIMENSIONS = DIMENSIONS;
window.DIMENSION_ORDER = DIMENSION_ORDER;
window.TEST_CONFIG = TEST_CONFIG;