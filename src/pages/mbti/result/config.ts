import React, { CSSProperties } from 'react';
import MBTI_PNG from '@/assets/mbti';
import {
  LottieENFJSrc,
  LottieENFPSrc,
  LottieENTJSrc,
  LottieENTPSrc,
  LottieESFJSrc,
  LottieESFPSrc,
  LottieESTJSrc,
  LottieESTPSrc,
  LottieINFJSrc,
  LottieINFPSrc,
  LottieINTJSrc,
  LottieINTPSrc,
  LottieISFJSrc,
  LottieISFPSrc,
  LottieISTJSrc,
  LottieISTPSrc,
} from '@/assets/character';

export type TPersonality =
  | 'INTJ'
  | 'INTP'
  | 'ENTJ'
  | 'ENTP'
  | 'INFJ'
  | 'INFP'
  | 'ENFJ'
  | 'ENFP'
  | 'ISTJ'
  | 'ISFJ'
  | 'ESTJ'
  | 'ESFJ'
  | 'ISTP'
  | 'ISFP'
  | 'ESTP'
  | 'ESFP';
const personalityDesc = {
  ENFJ: '主人公',
  ENFP: '竞选者',
  ENTJ: '指挥官',
  ENTP: '辩论家',
  ESFJ: '执行官',
  ESFP: '表演者',
  ESTJ: '总经理',
  ESTP: '企业家',
  INFJ: '提倡者',
  INFP: '调停者',
  INTJ: '建筑师',
  INTP: '逻辑学家',
  ISFJ: '守卫者',
  ISFP: '探险家',
  ISTJ: '物流师',
  ISTP: '鉴赏家',
} as const;
type ValueOf<T> = T[keyof T];

type StatusVal = ValueOf<typeof personalityDesc>;
export type TPersonalityConfig = {
  title: StatusVal;
  color: CSSProperties['color'];
  json: Record<string, any>;
  characters: {
    name: string;
    image: string;
    description: string;
  };
  analyse: {
    advantage: string;
    disadvantage: string;
  };
  englishName: string;
};
const personalityConfig: Record<TPersonality, TPersonalityConfig> = {
  ENFJ: {
    title: '主人公',
    color: '#23A46D',
    json: LottieENFJSrc,
    characters: {
      name: '贝拉克·侯赛因·奥巴马（Barack Obama）',
      image: MBTI_PNG.img_figure_enfj,
      description: `1961年8月4日出生，美国民主党籍政治家，美国第44任总统，美国历史上第一位非洲裔总统。
      2008年11月4日当选美国总统，2009年10月9日获诺贝尔和平奖。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_enfj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_enfj,
    },
    englishName: 'Protagonist Personality',
  },
  ENFP: {
    title: '竞选者',
    color: '#23A46D',
    json: LottieENFPSrc,
    characters: {
      name: '小罗伯特·唐尼（Robert Downey Jr.）',
      image: MBTI_PNG.img_figure_enfp,
      description:
        '1965年4月4日出生于美国纽约，美国演员、歌手、监制。1992年，主演传记电影《卓别林》，入围了第65届奥斯卡金像奖最佳男主角奖。',
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_enfp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_enfp,
    },
    englishName: 'Campaigner Personality',
  },
  INFJ: {
    title: '提倡者',
    color: '#23A46D',
    json: LottieINFJSrc,
    characters: {
      name: '马丁·路德·金（Martin Luther King）',
      image: MBTI_PNG.img_figure_infj,
      description: `1929年1月15日—1968年4月4日，非裔美国人，出生于美国佐治亚州亚特兰大，美国牧师、社会活动家、黑人民权运动领袖。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_infj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_infj,
    },
    englishName: 'Advocate Personality',
  },
  INFP: {
    title: '调停者',
    color: '#23A46D',
    json: LottieINFPSrc,
    characters: {
      name: '约翰·罗纳德·瑞尔·托尔金（John Ronald Reuel Tolkien）',
      image: MBTI_PNG.img_figure_infp,
      description: `1892年1月3日-1973年9月2日），英国作家、诗人、语言学家及大学教授，以创作经典严肃奇幻作品《霍比特人》、《魔戒》与《精灵宝钻》而闻名于世。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_infp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_infp,
    },
    englishName: 'Mediator Personality',
  },

  ENTJ: {
    title: '指挥官',
    color: '#663399',
    json: LottieENTJSrc,
    characters: {
      name: '史蒂夫·乔布斯（Steve Jobs）',
      image: MBTI_PNG.img_figure_entj,
      description: `1955年2月24日—2011年10月5日，美国发明家、企业家，苹果公司联合创始人，曾任苹果公司首席执行官。
乔布斯出生于加利福尼亚州旧金山，在领养家庭长大，自幼对电子学抱有兴趣。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_entj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_entj,
    },
    englishName: 'Commander Personality',
  },
  ENTP: {
    title: '辩论家',
    color: '#663399',
    json: LottieENTPSrc,
    characters: {
      name: '艾尔·扬科维奇（Alfred “Weird Al” Yankovic）',
      image: MBTI_PNG.img_figure_entp,
      description: `1959年10月23日，出生在加州的Lynwood，是家里的独生子。由于非常喜欢波尔卡舞明星Frank Yankovic，"Weird Al" Yankovic在七岁的时候开始学习手风琴。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_entp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_entp,
    },
    englishName: 'Debater Personality',
  },
  INTJ: {
    title: '建筑师',
    color: '#663399',
    json: LottieINTJSrc,
    characters: {
      name: '弗里德里希·威廉·尼采（Friedrich Wilhelm Nietzsche）',
      image: MBTI_PNG.img_figure_intj,
      description: `1844年10月15日—1900年8月25日，哲学家、语文学家、文化评论家、诗人、作曲家、思想家。主要著作有《权力意志》、《悲剧的诞生》《不合时宜的考察》等`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_intj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_intj,
    },
    englishName: 'Architect Personality',
  },
  INTP: {
    title: '逻辑学家',
    color: '#663399',
    json: LottieINTPSrc,
    characters: {
      name: '比尔·盖茨（Bill Gates）',
      image: MBTI_PNG.img_figure_intp,
      description: `全名威廉·亨利·盖茨三世，简称比尔或盖茨。1955年10月28日出生于美国华盛顿州西雅图，企业家、软件工程师、慈善家、微软公司创始人、中国工程院外籍院士 。曾任微软董事长、CEO和首席软件设计师。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_intp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_intp,
    },
    englishName: 'Logician Personality',
  },

  ESFJ: {
    title: '执行官',
    color: '#36A9FF',
    json: LottieESFJSrc,
    characters: {
      name: '泰勒·斯威夫特（Taylor Swift）',
      image: MBTI_PNG.img_figure_esfj,
      description: `1989年12月13日出生于美国宾夕法尼亚州，美国女歌手、词曲作者、音乐制作人、演员。2006年，发行个人首张音乐专辑《Taylor Swift》，该专辑获得美国唱片业协会认证5倍白金唱片销量。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_esfj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_esfj,
    },
    englishName: 'Consul Personality',
  },
  ESTJ: {
    title: '总经理',
    color: '#36A9FF',
    json: LottieESTJSrc,
    characters: {
      name: '约翰·洛克菲勒（John D.Rockefeller）',
      image: MBTI_PNG.img_figure_estj,
      description: `1839年7月8日－1937年5月23日，美国实业家，慈善家，埃克森美孚创始人，是十九世纪第一个亿万富翁，被人称为“石油大王”。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_estj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_estj,
    },
    englishName: 'Executive Personality',
  },
  ISFJ: {
    title: '守卫者',
    color: '#36A9FF',
    json: LottieISFJSrc,
    characters: {
      name: '碧昂丝·吉赛尔·诺斯（Beyoncé）',
      image: MBTI_PNG.img_figure_isfj,
      description: `1981年9月4日出生于美国得克萨斯州休斯敦，美国女歌手、演员。
1993年，以组合天命真女成员身份出道。2003年，开始个人发展，并发行首张个人专辑《Dangerously in Love》。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_isfj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_isfj,
    },
    englishName: 'Defender Personality',
  },
  ISTJ: {
    title: '物流师',
    color: '#36A9FF',
    json: LottieISTJSrc,
    characters: {
      name: '斯汀（Sting）',
      image: MBTI_PNG.img_figure_istj,
      description: `Sting的独唱生涯始于1982年，当时他是Police乐队的主唱和贝斯手。当年他还主演了电影《Brimstone And Treacle》，他在剧中还翻唱了由Vivian Ellis创作的30年代的民谣歌曲《Spread A Little Happiness》。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_istj,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_istj,
    },
    englishName: 'Logistician Personality',
  },

  ESFP: {
    title: '表演者',
    color: '#FF9933',
    json: LottieESFPSrc,
    characters: {
      name: '艾尔顿·约翰（Elton John）',
      image: MBTI_PNG.img_figure_esfp,
      description: `原名雷金纳德·肯尼思·德怀特（Reginald Kenneth Dwight），1947年3月25日出生于英国伦敦，英国歌手、曲作者、钢琴演奏者、演员、慈善家。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_esfp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_esfp,
    },
    englishName: 'Entertainer Personality',
  },
  ESTP: {
    title: '企业家',
    color: '#FF9933',
    json: LottieESTPSrc,
    characters: {
      name: '欧内斯特·米勒尔·海明威（Ernest Hemingway）',
      image: MBTI_PNG.img_figure_estp,
      description: `1899年7月21日－1961年7月2日，出生于美国伊利诺伊州芝加哥市郊区奥克帕克，美国作家、记者，被认为是20世纪最著名的小说家之一。海明威的一生之中曾荣获不少奖项。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_estp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_estp,
    },
    englishName: 'Entrepreneur Personality',
  },
  ISFP: {
    title: '探险家',
    color: '#FF9933',
    json: LottieISFPSrc,
    characters: {
      name: '拉娜·德雷（Lana Del Rey）',
      image: MBTI_PNG.img_figure_isfp,
      description: `原名伊丽莎白·伍里奇·格兰特（Elizabeth Woolridge Grant），1985年6月21日出生于美国纽约曼哈顿区，美国女歌手、词曲作者、模特。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_isfp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_isfp,
    },
    englishName: 'Adventurer Personality',
  },
  ISTP: {
    title: '鉴赏家',
    color: '#FF9933',
    json: LottieISTPSrc,
    characters: {
      name: '奥利维亚·王尔德（OliviaWilde)',
      image: MBTI_PNG.img_figure_istp,
      description: `1984年3月10日出生于美国纽约，美国演员、导演。
2003年，参演个人首部电影《邻家女优》。2006年，主演爱情喜剧电影《妙想天书》，她凭借该片获得HBO喜剧艺术电影节最佳女演员奖。`,
    },
    analyse: {
      advantage: MBTI_PNG.img_illustration_advantage_istp,
      disadvantage: MBTI_PNG.img_illustration_disadvantage_istp,
    },
    englishName: 'Virtuoso Personality',
  },
};
export default personalityConfig;
