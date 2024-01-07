import { useCameraConfig } from '@/hooks';

const RechargeAgreement = () => {
  const { appName } = useCameraConfig();
  return (
    <div className="p-16" style={{ lineHeight: 1.8 }}>
      <div>{appName}“钻石”充值协议</div>
      <br />
      <div>欢迎您使用{appName}“钻石”付费服务！</div>
      <br />
      <div>
        为使用{appName}相机APP内的指定付费产品/服务，您应当阅读并遵守《{appName}
        “钻石”充值协议》（以下简称“本协议”）。
        【注意】请用户仔细阅读以下全部内容，如果用户不同意本服务协议的任一或全部条款内容，请不要使用
        {appName}“ 钻石”服务。{appName}“钻石”服务是从属于{appName}
        相机服务之下的子服务，因此，当用户开始获取、使用{appName}“钻石”服务时，即表示用户与{appName}
        相机已达成协议关系，并自愿接受并遵守{appName}相机服务及{appName}
        “钻石”服务的所有服务协议，包括但不限于《用户服务协议》、本服务协议及相关之子协议、管理规范等。
      </div>
      <br />
      <div>
        【特别提示】您确认，在您开始使用本服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则应获得监护人的知情同意，您及您的监护人应依照法律规定承担因此而导致的相应的责任。特别地，如果您是未成年人，请在您的监护人的同意和指导下访问和/或使用我方平台。
        {appName}相机谨此提醒家长合理引导未成年子女的上网及消费行为。
      </div>
      <br />
      <div>一、协议的范围</div>
      <br />
      <div>1.1 【协议适用主体范围】</div>
      <div>
        本协议是用户与{appName}
        相机之间关于用户在使用指定付费产品/服务和充值规则等相关事宜所订立的协议。
      </div>
      <div>1.2 【协议关系及冲突条款】</div>
      <div>
        本协议视为《{appName}
        相机用户服务协议》的补充协议，是其不可分割的组成部分，与其构成统一整体。本协议与上述内容存在冲突的，以本协议为准。
      </div>
      <div>二、名词定义</div>
      <div>
        2.1 【{appName}“钻石”】
        <br />
        指按照{appName}相机的指定方式支付一定费用之后，可以享有由{appName}
        相机提供的指定付费产品、服务。{appName}
        “钻石”不具有法定货币的流转及支付功能，不得反向兑换为法定货币、实物。{appName}
        相机提醒用户注意，{appName}
        “钻石”付费服务非存款、预付款或其他可无理由退还性质的商品或财产权利。
        <br />
        2.2 【充值服务】
        <br />
        用户通过{appName}“钻石”充值享有由{appName}
        相机或第三方提供指定付费产品/服务。用户所享有的具体服务内容会因为用户的{appName}
        “钻石”充值金额而有不同；同时，{appName}
        相机也可能会在不同时间推出具体不同的服务内容，以不断完善、优化本服务，具体服务以{appName}
        相机相关服务页面公布、实际提供的内容的为准。
        <br />
      </div>
      <div>
        三、付费服务及充值规则
        <br />
        3.1 用户理解并同意，用户须先成为{appName}
        相机普通注册用户之后，才能继续进行付费服务。本服务收取的充值金额是{appName}
        相机为了向最终用户收取互联网增值服务使用费，而提供的一种通用的收费渠道或计费方式。该充值金额不能用于
        {appName}相机指定服务以外的任何产品或服务。
        <br />
        3.2
        {appName}相机将有权决定所提供的服务的资费标准和收费方式，{appName}
        相机可能会就不同的服务制定不同的资费标准和收费方式，也可能按照{appName}
        相机所提供的服务的不同阶段确定不同的资费标准和收费方式。
        <br />
        3.3 充值
        <br />
        3.3.1 用户通过所用客户端相应支付方式（具体支付方式请见充值页面）为其账号充值所直接获得的
        {appName}“钻石”，可在指定的付费产品/服务中使用。
        <br />
        安卓端：{appName}
        “钻石”费用将在用户点击购买收银台标示价格通过支付宝、微信等第三方代收费的方式支付；
        <br />
        iOS端：{appName}
        “钻石”费用将在用户点击购买收银台标示价格通过支付宝、微信等第三方代收费的方式支付；
        <br />
        3.3.2 1{appName}“钻石”价格为人民币0.1元。
        <br />
        3.3.3 用户可通过登录{appName}相机，在首页点击“我的钻石”，查询已购买或尚未消费的{appName}
        “钻石”。
        <br />
        3.3.4 用户理解并知晓，{appName}相机不提供用户间交易{appName}“钻石”服务。用户间交易{appName}
        “钻石”构成对本协议的违反，{appName}相机有权在未经通知的情况下，采取相应适当措施，以确保
        {appName}相机不提供用户间交易{appName}“钻石”服务。
        <br />
        3.3.5 用户理解并同意，充值产品{appName}
        “钻石”不适用无理由退换，充值一旦成功，充值即确定完成。用户不得以消费完成后账户内仍有剩余
        {appName}“钻石”为由要求退费。
        <br />
        3.3.6 当用户在{appName}相机进行{appName}
        “钻石”充值时，用户必须仔细确认自己的账号及信息，若因为用户自身操作不当、不了解或未充分了解充值计费方式等因素造成充错账号、错选充值种类等情形而损害自身权益，由用户自行负责。
        <br />
        3.3.7
        用户在充值时使用第三方支付企业提供的服务的，应当遵守与该第三方的各项协议及其服务规则；在使用第三方支付服务过程中用户应当妥善保管个人信息，包括但不限于银行卡账号、密码、验证码等；用户同意并确认，
        {appName}相机对因第三方支付服务产生的纠纷不承担任何责任。
        <br />
        3.3.8 若因违反本协议条款，导致账号被冻结及/或终止使用的用户，不得因此要求{appName}
        相机作任何补偿或赔偿。
        <br />
        3.3.9 若因{appName}“钻石”充值系统自身充值故障原因造成用户充值失实，在{appName}
        相机恢复、存有有效数据和用户提供合法有效凭证的情况下，{appName}
        相机将根据用户充值情况作出变动及补救措施。
        <br />
        3.3.9.1 因{appName}“钻石”充值系统自身故障原因，造成系统充值额小于用户实际充值额的，{appName}
        相机予以补其差额。
        <br />
        3.3.9.2 因{appName}“钻石”充值系统自身故障原因，造成系统充值额大于用户实际充值额的，{appName}
        相机有权追回差额。
        <br />
      </div>
      <div>
        四、服务的变更、中止或终止
        <br />
        4.1 本服务的中止或终止包含如下情况：
        <br />
        4.1.1 因为用户的违约或违规行为，{appName}相机主动中止或终止服务的；
        <br />
        4.1.2 因国家或相关政府监管部门要求或发生不可抗力事件时，{appName}相机中止或终止服务的；
        <br />
        4.1.3 其他根据法律法规应中止或终止服务的。
        <br />
        4.2 中止或终止服务后，{appName}
        相机会以法律允许的方式进行通知用户。当用户发现无法登录或享受服务时，可以咨询客服人员。
        <br />
        4.3 中止或终止后的处理：
        <br />
        4.3.1 除法律规定的责任外，{appName}相机对本服务的中止或终止对用户和第三人不承担任何责任；
        <br />
        4.3.2 除法律规定或本协议另有约定外，已收取的费用不予退还；
        <br />
        4.4 对于本服务或本协议可能发生的变更（包括但不限于本协议修改、服务细则调整等），{appName}
        相机将根据本协议的约定相应通知用户，请用户仔细阅读并选择是否按照调整和/或变更后的本协议/服务细则等继续选择本服务。如用户同意上述调整和/或变更，用户可以采用接受服务的形式进行下一步操作或继续使用本服务，以表明用户已经接受上述调整和/或变更；如用户不同意调整和/或变更，我们建议用户立即停止使用本服务。如用户对上述调整和/或变更有任何问题，可以咨询客服。
        <br />
      </div>
      <div>
        五、违约责任
        <br />
        5.1 如果{appName}相机发现用户有违反本协议任何行为的，{appName}
        相机有权进行独立判断并采取技术手段予以删除、屏蔽或断开相关的信息。同时，{appName}
        相机有权视用户的行为性质，对用户采取包括但不限于暂停或终止部分或全部本服务、中止或终止用户对
        {appName}
        相机账号使用、追究法律责任等措施，而由此给用户带来的损失（包括但不限于通信中断、相关数据清空、服务费用作为违约金而归
        {appName}相机所有等），由用户自行承担，造成{appName}相机损失的，用户也应予以赔偿。若
        {appName}相机依前述约定对用户采取暂停或终止部分或全部本服务的，{appName}
        相机无需向用户退还任何费用，剩余的服务费用，作为违约金而归{appName}相机所有。
        <br />
        5.2 如用户有违反本协议任何行为，导致任何第三方损害的，用户应当独立承担责任；{appName}
        相机因此遭受损失的，用户也应当一并赔偿。
        <br />
      </div>
      <div>
        六、争议解决和法律适用 <br />
        6.1
        本协议条款的生效、履行、解释及争议的解决均适用中华人民共和国法律，本协议条款因与中华人民共和国现行法律相抵触而导致部分无效，不影响其他部分的效力。
        <br />
        6.2
        如就本协议内容或其执行发生任何争议，应尽量友好协商解决；协商不成时，任何一方均可向被告所在地人民法院提起诉讼。
        <br />
      </div>
      <div>
        七、其他 <br />
        7.1本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。{' '}
        <br />
        7.2 本协议的标题仅为方便及阅读而设，并不影响正文中任何条款的含义或解释。 <br />
      </div>
    </div>
  );
};
export default RechargeAgreement;