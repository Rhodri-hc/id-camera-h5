import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import banner from '@/assets/banner.png';
import styles from './index.module.scss';

const json = {
  content: `天空阴沉，大雨滂沱。\r\n铭霄大陆东南山脉，秘地。\r\n地下古墓之中，一个年轻人正盘膝而坐。\r\n隐约有紫色的雾霭，在他身上若隐若现。\r\n“伤势很难痊愈……”他缓缓睁开双眸，眼中精芒暗敛。\r\n“嗖！”\r\n突然，一道流光，直接从外界飞入，落在了他的身前。\r\n那是一个传音玉简。\r\n玉简之上，沾满血迹，触目惊心。\r\n“咔嚓！”\r\n紧跟着一个虚弱的声音从中传出。\r\n“罗霄……我……恐怕不行了，我已为你寻得疗伤之物，在……烈火圣宗……”\r\n话音落，玉简粉碎！\r\n“苍辉……”罗霄通体一颤，猛地站起身来。\r\n“烈火圣宗！”\r\n山脉中，愤怒的咆哮声响起。\r\n“轰！”\r\n山峰碎裂，一道人影直冲天际，化为一抹虹芒，直奔西南！\r\n……\r\n苍穹峰，烈火圣宗！\r\n这是一个有着近千年传承的宗门。\r\n其屹立此地不倒，底蕴浑厚。\r\n然而，巨大的山门，突然被一剑劈得粉碎。\r\n紧跟着，乌云蔽日，震雷滚滚。\r\n暴雨瓢泼。\r\n“什么人，敢毁我烈火圣宗山门？”数十个弟子纷纷跑出，却看到暴雨之中，一个身穿白色长袍的男子，手中提着一把长剑，正缓步走来。\r\n“噗！”剑芒闪烁，十几颗人头飞起。\r\n霎时间，钟声大作。\r\n整个烈火圣宗的弟子立刻戒备，朝着山门方向赶来。\r\n然而，来多少，死多少。\r\n鲜血，随着雨水，顺着山峰向下流淌。\r\n一人，一剑，势不可挡。\r\n其走过之处，死尸遍地，残缺不全。\r\n“大胆！”\r\n紧跟着，一声怒喝响起，旋即一个满头花白的老者，面色涨红，率领一群人冲天而起。\r\n“何方狂徒，竟敢擅闯烈火圣宗，毁我山门，屠我弟子？”\r\n“都来了？”罗霄嘴角上扬，目中凶光闪烁：“也罢，省的罗某人一个个的揪出来杀！”\r\n“岂有此理，你真以为我烈火圣宗是纸老虎不成？”老者怒不可遏，指着罗霄质问：“你到底是何人？”\r\n“苍辉呢？”罗霄语气森寒的问道。\r\n老者闻言双瞳一缩。\r\n“把他交出来，我转身就走，否则的话……后果自负！”罗霄伸出手来。\r\n“你……你是罗霄？”老者连忙狡辩：“他……他并不是在我宗门之内！”\r\n“唰！”罗霄抬手，一道剑芒划过。\r\n老者身边几人的身躯顿时被切开，鲜血喷涌，惨叫连连。\r\n“岂有此理！”老者发狂般冲向罗霄。\r\n然，无异于飞蛾扑火！\r\n罗霄五指张开，只是一招，便直接拍碎了老者的一条手臂！\r\n碎肉混合着骨头渣子乱飞。\r\n“饶，饶了我们吧，我们也是被迫的！”老者双膝跪地，不断求饶，全然没了方才的强硬。\r\n“苍辉呢？”罗霄再度开口。\r\n虽然，他已经可以确定，苍辉已经遭到了不测。\r\n但他却不敢承认，还有着一丝希望。\r\n哪怕苍辉重伤都好，只要还活着……\r\n“这……这……”老者全身颤抖。\r\n苍辉，在三天前被他们骗到了宗门内，设计坑杀，并毁尸灭迹，早已尸骨无存！\r\n罗霄心中如利刃剜割，痛不欲生！\r\n“烈火圣宗，没有再存在的必要了！”\r\n“不，我们也是被迫的，是来自于黑狱海的命令，我们不敢不尊啊！”老者连忙大吼道，仅剩的一只手，从怀中掏出一块石头递给罗霄：“为的就是这块石头！”\r\n罗霄眯起眼睛，抬手抓过石头。\r\n苍辉，就是因为此物而死的吗？\r\n罗霄与苍辉，并非隶属任何势力，他们是铭霄大陆上的散修。\r\n然而，却并非寻常散修。\r\n他们威名在外。\r\n从小到大，他们相互扶持，相依为命，为生死弟兄，是莫逆之交。\r\n半年前，两人一并去探索一处遗迹，使得罗霄身受重伤，在体内留下了隐患，苍辉便游历四方，为罗霄寻找疗伤之物。\r\n可想不到，半年光阴弹指间，疗伤之物以寻得，他与苍辉却就此阴阳相隔……\r\n“到底是谁的命令？”将石头收起，罗霄寒声质问。\r\n“不知道，黑狱海中有着许多大人物，我们哪有资格知道？”老者连连叩头：“饶了我们吧，东西你也拿了，我宗门弟子你也杀了这么多……”\r\n“你认为，苍辉的命如此低贱吗？”罗霄全身煞气喷涌，真气汇聚成一个宛若修罗般的虚影，若隐若现。\r\n“不可能，你是……你的修为……”老者见状，不禁惊呼了起来。\r\n“噗！”话音未落，罗霄一指已经点穿了对方的眉心。\r\n“宗主！”\r\n“跟他拼了，他这个魔鬼！”\r\n所有烈火圣宗之人见状，都怒吼起来，纷纷朝着罗霄扑杀而来。\r\n罗霄深吸口气，喃喃自语：“苍辉……你一路走好，我先送这烈火圣宗给你陪葬，然后揪出幕后之人，让你在九泉之下可以安息！”\r\n“轰轰轰！”\r\n猛烈的爆炸声，在烈火圣宗之内响起。\r\n剑芒漫天，真气弥漫。\r\n雷声轰鸣。\r\n雨，下的更大了。\r\n一炷香后，烈火圣宗之内，横尸遍地，血流漂橹。\r\n共计三百七十二人，无一生还。\r\n宗门，覆灭！\r\n“咣当！”\r\n罗霄手中的长剑已崩断，被他扔在了地上。\r\n他全身满是血迹，却没有半点伤势。\r\n仰望苍天，雨水打在他的脸上，与泪水一并流淌而下。\r\n他没有离开，就这么一直坐在地上。\r\n似是在等待。\r\n不知过了多久，天空放晴。\r\n自远方的空中，有数道身影御空而来。\r\n这些人，男女参半，穿着统一的银色长袍，胸前有着鲜红的‘罚’字，转眼便到了近前。\r\n看着烈火圣宗之内的一片惨象，来者众人纷纷面色剧变。\r\n太惨了。\r\n地上满是残肢碎肉，似乎很难找得到一具完整的尸体。\r\n“是谁，竟做出如此惨无人道之事？”为首之人捂住了嘴，眼中满是震惊之色。\r\n“都是我杀的！”罗霄站起身来，看向天空。\r\n“你是何人，为何要灭了烈火圣宗？”\r\n“复仇之人，罗霄！”罗霄背负双手，长袍迎风咧咧，神色从容，似乎等待的，就是他们的到来……`,
  title: '第一章 只身灭宗门',
};
const btnArea: Record<string, React.CSSProperties> = {
  cell: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: 'auto',
    width: '55rem',
    height: '8rem',
    maxHeight: '60px',
    fontSize: 'min(4.5rem, 40px)',
    fontFamily: 'PingFangSC-Regular',
    fontWeight: 'bold',
    borderRadius: '10rem',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
};
const LandingPage = () => {
  const { book_id } = useParams<{ book_id: string }>();

  // const handleRead = useCallback(() => {
  //   // window.open(`hap://app/com.fyyd.rpk/pages/bookDetail?book_id=${book_id}`);
  //   window.open('https://hapjs.org/app/com.fyyd.rpk/pages/bookDetail?book_id=4254898');
  // }, [book_id]);
  const urlParams = useMemo(() => JSON.stringify({ book_id }), [book_id]);

  return (
    <>
      <div className={styles.landingPage}>
        <img src={banner} alt="" className={styles.banner} />
        <div className={styles.content}>{json.content}</div>
        {/* <div className={styles.btn} onClick={handleRead}>
          点击阅读全文
        </div> */}
      </div>
      <qa-router-button
        data-package-name="com.fyyd.rpk"
        data-page="/pages/bookDetail"
        data-params={urlParams}
        data-design-params='{"fontSize": 18}'
        // data-click-event='{"eventName": "handleClickEvent", "eventParams": "anyString"}'
        style={{ position: 'fixed', bottom: '50px', margin: 'auto', width: '100%', height: '60px' }}
      >
        <templates is="x3d">
          <div style={btnArea.cell}>
            <button style={btnArea.button}>点击阅读全文</button>
          </div>
        </templates>
      </qa-router-button>
    </>
  );
};
export default LandingPage;
