// 理想伴侣画像测试 - 结果生成文件
// 版本: 2.0 | 最后更新: 2026-03-06
// 注意: 此文件负责根据用户选择生成详细的伴侣画像分析

// 结果生成器
const ResultGenerator = {
    // 生成完整分析结果
    generateAnalysis(dimensionScores) {
        const result = {
            // 详细分析文本
            personalityTraits: this.getPersonalityTraits(dimensionScores.personality),
            communicationStyle: this.getCommunicationStyle(dimensionScores.communication),
            emotionalNeeds: this.getEmotionalNeeds(dimensionScores.emotional),
            coreValues: this.getCoreValues(dimensionScores.values),
            lifestyleAttitude: this.getLifestyleAttitude(dimensionScores.lifestyle),
            relationshipExpectations: this.getRelationshipExpectations(dimensionScores.relationship),
            
            // 标签
            personalityTags: this.getPersonalityTags(dimensionScores.personality),
            communicationTags: this.getCommunicationTags(dimensionScores.communication),
            emotionalTags: this.getEmotionalTags(dimensionScores.emotional),
            valuesTags: this.getValuesTags(dimensionScores.values),
            lifestyleTags: this.getLifestyleTags(dimensionScores.lifestyle),
            relationshipTags: this.getRelationshipTags(dimensionScores.relationship),
            
            // 建议
            recognitionTips: this.getRecognitionTips(dimensionScores),
            relationshipTips: this.getRelationshipTips(dimensionScores),
            selfPreparation: this.getSelfPreparation(dimensionScores)
        };
        
        return result;
    },
    
    // 生成性格特质分析
    getPersonalityTraits(score) {
        if (score >= 85) {
            return "您期待一个性格鲜明的伴侣，拥有强烈的个人特色。您欣赏那些在人群中脱颖而出、拥有独特人格魅力的人。您的理想伴侣可能充满自信，具有领导气质，或是在专业领域表现出色的专家。您希望对方能在思想上给您启发，在生活中给您惊喜。";
        } else if (score >= 70) {
            return "您偏好平衡型的性格特质，既期待伴侣有一定的主见和个性，又希望ta能够顾及他人感受。您欣赏善于思考、情绪稳定的人，能够在理性与感性之间找到良好的平衡点。您期待的伴侣是那种既有深度思考能力，又懂得生活情趣的类型。";
        } else if (score >= 60) {
            return "您对性格特质持开放态度，更看重性格的适配性而非特定的性格类型。您希望伴侣性格温和、容易相处，能够给您带来舒适和安心的感觉。您不要求对方性格多么突出，但希望ta是真诚、可靠的。";
        } else {
            return "您对伴侣的性格特质没有太多预设框架，更看重相处的自然感觉。您认为性格的多样性是关系的调味品，只要两人相处舒适，任何性格类型都可以接受。您更注重内在品质而非外在表现。";
        }
    },
    
    // 生成性格标签
    getPersonalityTags(score) {
        if (score >= 85) {
            return ["个性鲜明", "自信独立", "思想深刻", "有主见", "充满魅力"];
        } else if (score >= 70) {
            return ["理性温和", "情绪稳定", "善于思考", "平衡有度", "成熟稳重"];
        } else if (score >= 60) {
            return ["温和可亲", "真诚可靠", "随和易处", "善解人意", "包容性强"];
        } else {
            return ["开放包容", "自然真实", "不拘一格", "注重本质", "适应性强"];
        }
    },
    
    // 生成沟通方式分析
    getCommunicationStyle(score) {
        if (score >= 85) {
            return "您期待深度、真诚的沟通模式，重视言语的力量。您希望伴侣能够坦诚表达想法，也愿意倾听您的心声。您欣赏善于表达、逻辑清晰的人，能够在交流中碰撞思想，在对话中增进了解。高质量的沟通是您衡量关系深度的重要标准。";
        } else if (score >= 70) {
            return "您偏好平衡的沟通方式，既有理性讨论，也有感性交流。您希望伴侣能够用恰当的方式表达不同意见，在冲突时保持冷静，在分享时充满温度。您认为良好的沟通不在于说得多，而在于说到点上，理解到心里。";
        } else if (score >= 60) {
            return "您倾向于轻松自然的沟通氛围，不追求深度讨论，但期待舒适的交流。您希望伴侣沟通时温和、不具攻击性，能够用简单直接的方式表达关心。您更看重日常的小对话，而非严肃的正式交流。";
        } else {
            return "您对沟通方式没有太多特定要求，更看重沟通的内容和诚意。您认为行动有时比言语更重要，默默付出与陪伴也是一种沟通。您接受不同的沟通风格，只要双方能够理解彼此的意思即可。";
        }
    },
    
    // 生成沟通标签
    getCommunicationTags(score) {
        if (score >= 85) {
            return ["深度交流", "坦诚开放", "逻辑清晰", "善于表达", "重视倾听"];
        } else if (score >= 70) {
            return ["理性讨论", "温和表达", "换位思考", "适度分享", "平衡有度"];
        } else if (score >= 60) {
            return ["轻松自然", "简单直接", "不喜冲突", "日常交流", "温和耐心"];
        } else {
            return ["内容为重", "行动表达", "不拘形式", "理解至上", "灵活适应"];
        }
    },
    
    // 生成情感需求分析
    getEmotionalNeeds(score) {
        if (score >= 85) {
            return "您有较高的情感需求，期待深刻的感情连接和充分的情感支持。您希望伴侣能够敏锐察觉您的情绪变化，给予及时的关心和安慰。您看重关系中的情感温度，期待浪漫的表达和仪式感的营造，相信真爱需要用心经营和表达。";
        } else if (score >= 70) {
            return "您期待平衡的情感互动，既需要伴侣的情感支持，也给予对方情感空间。您希望关系中有足够的温度，但不过分依赖。您欣赏那些懂得给予也懂得索取的伴侣，相信健康的关系是双向的情感流动。您看重日常的关心，也珍视特殊的时刻。";
        } else if (score >= 60) {
            return "您的情感需求相对平和，更看重稳定的情感陪伴而非激烈的感情表达。您希望伴侣是可靠的、温暖的，能够在需要时给予支持，但平时不过分粘腻。您更倾向于细水长流的感情模式，相信陪伴是最长情的告白。";
        } else {
            return "您对情感表达的要求较为宽松，更看重实际的行动和长期的承诺。您可能不太习惯过于外露的情感表达，但内心珍视真诚的关系。您希望伴侣是踏实的、务实的，用行动证明爱意而非仅仅用言语。";
        }
    },
    
    // 生成情感标签
    getEmotionalTags(score) {
        if (score >= 85) {
            return ["情感丰富", "需要关注", "重视浪漫", "深度连接", "仪式感强"];
        } else if (score >= 70) {
            return ["双向流动", "适度依赖", "情感平衡", "珍惜当下", "懂得感恩"];
        } else if (score >= 60) {
            return ["稳定平和", "细水长流", "可靠温暖", "陪伴为重", "不喜粘腻"];
        } else {
            return ["行动派", "务实踏实", "内敛含蓄", "承诺为重", "实际支持"];
        }
    },
    
    // 生成价值观分析
    getCoreValues(score) {
        if (score >= 85) {
            return "您对价值观的一致性有很高要求，认为共同的价值观是关系长久的基础。您期待伴侣在核心问题上与您看法一致，包括人生观、金钱观、家庭观等重要方面。您欣赏那些有明确原则、坚守底线的人，相信相似的价值观能够减少根本性的冲突。";
        } else if (score >= 70) {
            return "您看重价值观的基本一致，但也接受在某些非核心问题上的差异。您希望伴侣与您在重要事项上方向一致，但在具体细节上可以有不同的看法和处理方式。您欣赏能够尊重差异、求同存异的人，相信互补有时能带来更丰富的视角。";
        } else if (score >= 60) {
            return "您对价值观的匹配度持开放态度，更看重对方的品格和诚意而非具体的观点。您认为只要基本的人品正直、善良，具体的价值观差异可以通过沟通和理解来弥合。您更注重相处的实际感受而非理论上的完美匹配。";
        } else {
            return "您对价值观的一致性没有特别要求，甚至可能欣赏与您不同的人。您认为多样性能够带来新鲜感和成长，不同的价值观能够激发思考和讨论。您看重的是互相尊重的能力，以及从差异中学习的态度。";
        }
    },
    
    // 生成价值观标签
    getValuesTags(score) {
        if (score >= 85) {
            return ["原则性强", "价值观一致", "重视传统", "家庭观念强", "有责任感"];
        } else if (score >= 70) {
            return ["基本一致", "求同存异", "尊重差异", "开放包容", "注重沟通"];
        } else if (score >= 60) {
            return ["品格为重", "诚意至上", "灵活适应", "实际感受", "不固守教条"];
        } else {
            return ["欣赏差异", "多元包容", "乐于学习", "重视尊重", "成长思维"];
        }
    },
    
    // 生成生活态度分析
    getLifestyleAttitude(score) {
        if (score >= 85) {
            return "您有明确的生活态度偏好，期待伴侣在生活方式上与您高度契合。无论是休闲方式、消费观念、生活节奏还是居家环境，您都希望找到相似的灵魂。您欣赏那些懂得生活、有品位、能把日子过出质感的人，相信相似的生活习惯能减少日常摩擦。";
        } else if (score >= 70) {
            return "您期待与伴侣在生活中找到良好的节奏配合，既有共同的兴趣爱好，也尊重彼此的独立空间。您希望生活是充实而有条理的，既有计划性又不失灵活性。您欣赏那些能够平衡工作与生活、懂得享受当下也规划未来的人。";
        } else if (score >= 60) {
            return "您对生活方式的匹配度要求适中，更看重相处的舒适度而非具体的形式。您希望生活是轻松、无压力的，不过分追求精致或计划。您欣赏那些随和、不挑剔的伴侣，相信简单的生活也能带来幸福。";
        } else {
            return "您对生活方式持非常开放的态度，能够适应各种生活模式。您认为生活的形式并不重要，重要的是与谁一起生活。您欣赏那些能够给生活带来新鲜感、不固守常规的伴侣，相信不同的生活方式能丰富人生体验。";
        }
    },
    
    // 生成生活标签
    getLifestyleTags(score) {
        if (score >= 85) {
            return ["精致生活", "品味相投", "习惯相似", "计划性强", "注重细节"];
        } else if (score >= 70) {
            return ["平衡有度", "充实有序", "共同兴趣", "适度规划", "享受当下"];
        } else if (score >= 60) {
            return ["简单舒适", "随和不挑", "轻松自在", "不拘形式", "注重感受"];
        } else {
            return ["开放多元", "适应性强", "喜欢新鲜", "不拘常规", "体验导向"];
        }
    },
    
    // 生成关系期待分析
    getRelationshipExpectations(score) {
        if (score >= 85) {
            return "您对亲密关系有清晰的期待和规划，希望建立深度、稳定、长期的关系。您期待伴侣同样重视承诺，愿意为关系的未来投入时间和精力。您欣赏那些在关系中主动、负责、有担当的人，相信明确的关系目标有助于双方共同努力。";
        } else if (score >= 70) {
            return "您期待建立平衡的亲密关系，既有紧密的连接，也保持适当的个人空间。您希望关系是相互支持、共同成长的伙伴关系，而不是完全的依赖或独立。您欣赏那些懂得经营关系、能够把握亲密与自由平衡的人。";
        } else if (score >= 60) {
            return "您对关系的期待较为轻松自然，更看重相处的舒适和愉快。您希望关系是温暖的陪伴，不过分强调形式或承诺。您欣赏那些不施加压力、让关系自然发展的伴侣，相信顺其自然的关系往往最长久。";
        } else {
            return "您对关系形式持开放态度，更看重关系的质量而非特定的模式。您可能享受关系中的自由和弹性，欣赏那些独立、不粘人的伴侣。您相信好的关系不需要太多约束，真正的连接来自内心的选择而非外在的形式。";
        }
    },
    
    // 生成关系标签
    getRelationshipTags(score) {
        if (score >= 85) {
            return ["长期承诺", "关系导向", "主动投入", "重视规划", "深度连接"];
        } else if (score >= 70) {
            return ["平衡伙伴", "相互支持", "共同成长", "适度空间", "经营关系"];
        } else if (score >= 60) {
            return ["轻松陪伴", "自然发展", "温暖舒适", "不施压力", "顺其自然"];
        } else {
            return ["质量优先", "自由弹性", "独立自主", "不拘形式", "内心连接"];
        }
    },
    
    // 生成识别建议
    getRecognitionTips(dimensionScores) {
        const tips = [];
        
        // 基于最高分的维度给出识别建议
        const highestDim = this.getHighestDimension(dimensionScores);
        
        switch(highestDim) {
            case 'personality':
                tips.push("注意观察ta在压力下的表现和日常决策方式，这能反映真实的性格底色。");
                tips.push("留意ta与不同类型人的相处模式，性格的适应性比单一表现更重要。");
                tips.push("关注ta的业余爱好和放松方式，这往往能展现最真实的性格侧面。");
                break;
            case 'communication':
                tips.push("留意ta在意见不合时的表达方式，这是沟通模式的关键考验。");
                tips.push("观察ta倾听时的表现，好的沟通者首先是好的倾听者。");
                tips.push("注意ta在表达关心和爱意时的语言习惯，这反映了情感表达偏好。");
                break;
            case 'emotional':
                tips.push("观察ta在他人需要情感支持时的反应，这反映了ta的情感敏感度。");
                tips.push("留意ta如何表达自己的情绪，健康的情感表达是关系的重要基础。");
                tips.push("注意ta对仪式感和特殊时刻的态度，这反映了情感需求的强度。");
                break;
            case 'values':
                tips.push("关注ta在重要决策时的考量因素，这能反映核心价值观。");
                tips.push("留意ta对朋友、家庭和工作的优先级排序，这是价值观的直观体现。");
                tips.push("观察ta的消费习惯和对金钱的态度，这往往关联着深层的价值观。");
                break;
            case 'lifestyle':
                tips.push("注意ta的日常作息和生活习惯，生活方式的兼容性很重要。");
                tips.push("观察ta如何安排休闲时间，这反映了生活态度和品味。");
                tips.push("留意ta对居家环境的要求，共同生活的舒适度需要提前考量。");
                break;
            case 'relationship':
                tips.push("关注ta对过去关系的反思，这能反映ta对亲密关系的理解。");
                tips.push("留意ta如何平衡个人空间与亲密关系，这是关系健康度的指标。");
                tips.push("观察ta对长期承诺的态度，关系期待的匹配是长久的基础。");
                break;
        }
        
        // 通用建议
        tips.push("给对方足够的时间展现真实的自己，不要急于下结论。");
        tips.push("关注言行一致性，长期的观察比短暂的印象更可靠。");
        tips.push("相信自己的直觉，但也要用理性验证直觉的判断。");
        
        return tips.join(" ");
    },
    
    // 生成相处建议
    getRelationshipTips(dimensionScores) {
        const tips = [];
        
        // 基于分数分布给出相处建议
        const hasHighScores = Object.values(dimensionScores).some(score => score >= 80);
        const hasLowScores = Object.values(dimensionScores).some(score => score <= 50);
        
        if (hasHighScores) {
            tips.push("您在某些方面有明确的偏好，建议在关系初期就坦诚沟通这些期待，避免后续误解。");
        }
        
        if (hasLowScores) {
            tips.push("您在某些方面持开放态度，这给了关系更多灵活性。建议保持这种开放，同时明确自己的底线。");
        }
        
        // 基于沟通分数
        if (dimensionScores.communication >= 80) {
            tips.push("您重视深度沟通，建议建立定期的交流时间，创造安全的表达空间。");
        } else if (dimensionScores.communication <= 50) {
            tips.push("您不苛求沟通形式，但建议找到双方都舒适的表达方式，避免误会积累。");
        }
        
        // 基于情感分数
        if (dimensionScores.emotional >= 80) {
            tips.push("您有较高的情感需求，建议明确表达自己的情感期待，同时理解对方可能的不同表达方式。");
        }
        
        // 基于关系分数
        if (dimensionScores.relationship >= 80) {
            tips.push("您对关系有清晰规划，建议在适当的时候与伴侣讨论关系发展的时间表和期待。");
        }
        
        // 通用相处建议
        tips.push("保持好奇心和学习的姿态，每个人都有值得探索的深度。");
        tips.push("尊重彼此的成长节奏，好的关系是两个人一起变好，而不是互相改变。");
        tips.push("在冲突中学习，每一次分歧都是了解彼此更深的机会。");
        tips.push("珍惜平凡日常中的小确幸，长久的关系建立在无数个普通的日子里。");
        
        return tips.join(" ");
    },
    
    // 生成自我准备建议
    getSelfPreparation(dimensionScores) {
        const tips = [];
        
        // 基于分数给出自我成长建议
        const avgScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0) / 6;
        
        if (avgScore >= 80) {
            tips.push("您对自己的需求有清晰认识，这是优势。同时保持一定的灵活性，给缘分一些意外的空间。");
            tips.push("在坚持标准的同时，也反思这些标准是否真的重要，避免因完美主义错过合适的人。");
        } else if (avgScore >= 60) {
            tips.push("您对自己的需求有一定了解，继续深入自我探索，同时在实际相处中验证和调整这些认知。");
            tips.push("保持开放的心态，理想伴侣的画像可能在遇到对的人之后变得更加清晰。");
        } else {
            tips.push("您对伴侣的要求较为宽泛，这是开放性的表现。建议在相处中更注意自己的真实感受和需求。");
            tips.push("通过更多的社交和约会经验，逐步明确自己在关系中真正看重的是什么。");
        }
        
        // 通用自我准备建议
        tips.push("先成为理想的自己，才能吸引理想的伴侣。专注于个人成长和幸福。");
        tips.push("建立丰富的生活，不过分聚焦于寻找伴侣。充实的人生本身就有吸引力。");
        tips.push("保持真诚和善良，这些品质会吸引到频率相同的人。");
        tips.push("在等待的同时积极生活，缘分往往在不经意间到来。");
        
        return tips.join(" ");
    },
    
    // 获取最高分的维度
    getHighestDimension(scores) {
        let highestDim = 'personality';
        let highestScore = 0;
        
        for (const [dim, score] of Object.entries(scores)) {
            if (score > highestScore) {
                highestScore = score;
                highestDim = dim;
            }
        }
        
        return highestDim;
    },
    
    // 生成伴侣类型描述（基于原始文档的8种类型）
    generatePartnerType(dimensionScores) {
        // 计算每个原始类型的匹配度
        const typeScores = {
            soulmate: this.calculateSoulmateScore(dimensionScores),
            builder: this.calculateBuilderScore(dimensionScores),
            adventurer: this.calculateAdventurerScore(dimensionScores),
            guardian: this.calculateGuardianScore(dimensionScores),
            elite: this.calculateEliteScore(dimensionScores),
            freeSpirit: this.calculateFreeSpiritScore(dimensionScores),
            traditionalist: this.calculateTraditionalistScore(dimensionScores),
            romantic: this.calculateRomanticScore(dimensionScores)
        };
        
        // 找出最高分的类型
        let highestType = 'soulmate';
        let highestScore = 0;
        
        for (const [type, score] of Object.entries(typeScores)) {
            if (score > highestScore) {
                highestScore = score;
                highestType = type;
            }
        }
        
        // 获取类型描述
        return this.getTypeDescription(highestType, highestScore);
    },
    
    // 计算灵魂共鸣者分数
    calculateSoulmateScore(scores) {
        // 重视性格、情感、价值观
        return (scores.personality * 0.3 + scores.emotional * 0.3 + scores.values * 0.4);
    },
    
    // 计算踏实共建者分数
    calculateBuilderScore(scores) {
        // 重视价值观、生活态度、关系
        return (scores.values * 0.4 + scores.lifestyle * 0.3 + scores.relationship * 0.3);
    },
    
    // 计算活力冒险家分数
    calculateAdventurerScore(scores) {
        // 重视性格、沟通、生活态度
        return (scores.personality * 0.4 + scores.communication * 0.3 + scores.lifestyle * 0.3);
    },
    
    // 计算温柔守护者分数
    calculateGuardianScore(scores) {
        // 重视情感、价值观、关系
        return (scores.emotional * 0.4 + scores.values * 0.3 + scores.relationship * 0.3);
    },
    
    // 计算精英同行者分数
    calculateEliteScore(scores) {
        // 重视性格、价值观、生活态度
        return (scores.personality * 0.4 + scores.values * 0.3 + scores.lifestyle * 0.3);
    },
    
    // 计算随性自由人分数
    calculateFreeSpiritScore(scores) {
        // 重视沟通、情感、关系（但分数低表示自由）
        return 100 - (scores.communication * 0.3 + scores.emotional * 0.4 + scores.relationship * 0.3);
    },
    
    // 计算传统安定者分数
    calculateTraditionalistScore(scores) {
        // 重视价值观、生活态度、关系
        return (scores.values * 0.4 + scores.lifestyle * 0.3 + scores.relationship * 0.3);
    },
    
    // 计算浪漫梦想家分数
    calculateRomanticScore(scores) {
        // 重视情感、沟通、性格
        return (scores.emotional * 0.4 + scores.communication * 0.3 + scores.personality * 0.3);
    },
    
    // 获取类型描述
    getTypeDescription(type, score) {
        const descriptions = {
            soulmate: {
                name: "灵魂共鸣者",
                description: "您最看重精神世界的契合，期待与伴侣在思想深度、价值观和情感表达上产生共鸣。您寻找的不是表面的吸引，而是灵魂的对话。",
                traits: ["重视深度交流", "追求精神契合", "理性与感性平衡", "欣赏独立思考"]
            },
            builder: {
                name: "踏实共建者",
                description: "您期待与伴侣一起建设稳定、有安全感的生活。您重视实际的责任感、共同的规划和日常的相互支持。",
                traits: ["务实可靠", "重视承诺", "计划性强", "家庭导向"]
            },
            adventurer: {
                name: "活力冒险家",
                description: "您渴望充满新鲜感和共同体验的关系。您欣赏那些热爱生活、勇于尝试、能给关系带来活力和惊喜的伴侣。",
                traits: ["热爱体验", "充满活力", "开放好奇", "喜欢新鲜"]
            },
            guardian: {
                name: "温柔守护者",
                description: "您最看重情感的支持和日常的陪伴。您期待一个温暖、细腻、能够给予安全感和无条件的爱的伴侣。",
                traits: ["温柔体贴", "情感支持", "善解人意", "注重陪伴"]
            },
            elite: {
                name: "精英同行者",
                description: "您期待与伴侣在能力和成就上相互匹配、共同进步。您欣赏那些优秀、上进、在专业领域有建树的伴侣。",
                traits: ["能力相当", "追求卓越", "互相成就", "重视成长"]
            },
            freeSpirit: {
                name: "随性自由人",
                description: "您最看重关系的轻松和自由，不喜欢过多的约束和压力。您欣赏那些独立、有自己的生活、不粘人的伴侣。",
                traits: ["独立自主", "不喜约束", "轻松相处", "注重空间"]
            },
            traditionalist: {
                name: "传统安定者",
                description: "您重视关系的稳定性和社会认可，期待按部就班地发展关系，建立传统意义上的完整家庭。",
                traits: ["重视传统", "稳定导向", "责任明确", "家庭完整"]
            },
            romantic: {
                name: "浪漫梦想家",
                description: "您最看重关系中的浪漫感觉和心动体验。您相信一见钟情，期待持续不断的恋爱感和仪式感。",
                traits: ["浪漫至上", "感觉优先", "重视仪式", "追求心动"]
            }
        };
        
        return descriptions[type] || descriptions.soulmate;
    },
    
    // 生成结果摘要
    generateResultSummary(dimensionScores) {
        const totalScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0) / 6;
        const partnerType = this.generatePartnerType(dimensionScores);
        
        return {
            totalScore: Math.round(totalScore),
            partnerType: partnerType.name,
            typeDescription: partnerType.description,
            typeTraits: partnerType.traits,
            strengths: this.identifyStrengths(dimensionScores),
            growthAreas: this.identifyGrowthAreas(dimensionScores)
        };
    },
    
    // 识别优势维度
    identifyStrengths(dimensionScores) {
        const strengths = [];
        const threshold = 75;
        
        for (const [dim, score] of Object.entries(dimensionScores)) {
            if (score >= threshold) {
                strengths.push(DIMENSIONS[dim].name);
            }
        }
        
        return strengths;
    },
    
    // 识别成长维度
    identifyGrowthAreas(dimensionScores) {
        const growthAreas = [];
        const threshold = 50;
        
        for (const [dim, score] of Object.entries(dimensionScores)) {
            if (score <= threshold) {
                growthAreas.push(DIMENSIONS[dim].name);
            }
        }
        
        return growthAreas;
    }
};

// 结果展示工具
const ResultDisplay = {
    // 格式化分数显示
    formatScore(score) {
        return Math.round(score);
    },
    
    // 获取分数颜色
    getScoreColor(score) {
        if (score >= 85) return "#06D6A0"; // 绿色
        if (score >= 70) return "#FFD166"; // 黄色
        if (score >= 60) return "#FF9E6D"; // 橙色
        return "#FF6B8B"; // 红色
    },
    
    // 获取分数描述
    getScoreDescription(score) {
        if (score >= 90) return "极佳匹配";
        if (score >= 80) return "高度匹配";
        if (score >= 70) return "良好匹配";
        if (score >= 60) return "基本匹配";
        if (score >= 50) return "部分匹配";
        return "匹配度较低";
    },
    
    // 获取进度条颜色
    getProgressColor(score) {
        if (score >= 85) return "linear-gradient(90deg, #06D6A0, #4D6EFF)";
        if (score >= 70) return "linear-gradient(90deg, #FFD166, #FF9E6D)";
        if (score >= 60) return "linear-gradient(90deg, #FF9E6D, #FF6B8B)";
        return "linear-gradient(90deg, #FF6B8B, #9D4EDD)";
    }
};

// 导出到全局作用域
window.ResultGenerator = ResultGenerator;
window.ResultDisplay = ResultDisplay;