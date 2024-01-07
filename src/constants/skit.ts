export type Item = {
  pid: number;
  appName: string;
  principalName: string;
  principalAddress: string;
  email: string;
};

const list: Item[] = [
  {
    pid: 39821,
    appName: '点映剧场',
    principalName: '惠州市铭远智创科技开发有限公司',
    principalAddress: '惠州市惠城区马安镇永安街赤澳大道旁C栋厂房4楼',
    email: 'dj_vimedia@163.com',
  },
  {
    pid: 38892,
    appName: '即刻天天看',
    principalName: '深圳市源码计算科技有限公司',
    principalAddress: '深圳市南山区粤海街道深大社区深南大道9819号深铁金融科技大厦2403',
    email: 'dj_vimedia@163.com',
  },
  {
    pid: 39853,
    appName: '天天赏阅',
    principalName: '深圳市漫城科技开发有限公司',
    principalAddress: '深圳市南山区粤海街道深大社区深南大道9819号地铁金融科技大厦2402',
    email: 'dj_vimedia@163.com',
  },
];

const getAutomaticRenewalServiceAgreement = (item: Item) => `
${item.appName}自动续费服务协议


更新时间：2023年08月04日

重要提示

欢迎您使用由${item.principalName}(以下简称“本公司”或“我们”)提供的自动续费服务(以下简称“自动续费服务”或“本服务”)。为了保障用户(以下称“您”)的权益，请在使用本服务之前，详细阅读此服务协议(以下简称“本协议”)所有内容，特别是加粗部分。

除非您已阅读并同意本协议所有内容，否则您无权使用本服务。如您购买或使用本服务，即表示已经与本公司达成协议，并自愿接受本协议的所有内容。

如果您未满18周岁，请在法定监护人陪同下或经过法定监护人同意后再使用本服务；未成年人行使和履行本协议项下的权利和义务视为已获得法定监护人的认可，本协议对您及您的法定监护人产生法律约束力。


第一条 服务协议的接受和修订

1.1本协议内容包括协议正文、《${item.appName}付费会员服务协议》、《${item.appName}用户协议》以及本公司已经发布的或将来可能发布/更新的各类规则。所有规则均为本协议不可分割的组成部分，与协议正文具有同等法律效力，本协议正文与前述规则存在冲突的，以本协议正文为准。除另行明确声明外，您使用自动续费服务均受本协议约束。

1.2由于互联网的行业特性，本协议及相关服务规则如由于业务发展需要进行修订的，本公司公司将在${item.appName}（或称“本APP”）软件平台公示。您可前往查阅最新版协议条款。在本公司修改上述条款后，如果您不接受修改后的条款，您可以选择终止使用自动续费服务。您继续使用本服务，将被视为已接受了修改后的协议。


第二条 服务说明

2.1本服务是在您开通${item.appName} 会员服务等现有及未来新增/调整付费服务的前提下，基于您对自动续费的需求，避免因您未及时续费而中断服务而推出的服务。如您开通本服务，则视为您授权本公司在您会员自动续费服务期限到期前24小时和到期后，委托支付渠道在不验证会员账户密码、支付密码、短信校验码等信息的情况下从您的自有充值账户、与会员账号绑定的第三方支付账户、银行卡、与苹果商店账户绑定的支付账户等(以下统称"账户")中代扣下一个计费周期的费用。具体自动续费计费周期包括：7天、14天、月度、季度、年度等((具体以用户购买页面展示为准),您可自行选择。

2.2如您通过苹果公司(本协议中“苹果公司”指Apple Inc.及其关联公司)Apple ID开通本服务，且在下一个订阅服务到期前24小时前未主动取消本自动续费服务的，则苹果公司将在每个订阅期即将到期前24小时，从您开通本自动续费服务时绑定的Apple ID账户(以下统称“账户”)余额中自动代扣下一个订阅期服务费，从而延长该订阅期对应的服务有效期。

2.3如您通过安卓(Android)产品开通本服务，且在订阅服务期内未主动取消本自动续费服务，则第三方支付渠道将自付费服务到期前一天开始，从您开通本自动续费服务时绑定的第三方支付账户(包括但不限于支付宝账户、微信钱包账户)等账户(以下统称“账户”)余额中自动代扣下一个订阅服务期费用，从而延长该订阅期对应的付费服务有效期。

2.4您理解并同意，因部分渠道由运营商或者支付渠道根据实际情况自行决定扣费周期，前述自动续费服务的扣款时间以各渠道实际扣款时间为准。

2.5请您关注上述各类账户及可扣款余额状况，如因账户问题或余额不足导致续费失败而引发的风险或导致的损失将由您自行承担(如相应权益终止、无法参与活动、会员身份/成长值受到影响等)。如您未主动明确选择取消本服务，将视为您同意本公司在订阅服务期满后的一定期限内进行不时的扣款尝试(具体以各支付渠道的扣款规则为准)，我们继续为您提供自动续费服务，且在您余额不足的情况下，本公司有权进行多次扣款直至足额扣款。在未足额扣款前，本公司保留继续为您提供付费会员权益的权利，即本公司有权自行决定暂停为您提供付费会员服务或继续为您提供付费会员服务。

2.6您知悉并同意，您使用第三方支付渠道支付费用的，您还将受到该第三方服务条款、使用规则的约束。


第三条 自动续费使用规则

3.1根据相关法律规定，为便于您知悉自动续费情况，本公司在下一个订阅期扣款前5日以站内信等方式通知您，第三方支付渠道也可能向您发送扣款前的提醒通知，请您予以关注。

3.2请您特别注意，基于自动续费服务的特点，自动代扣将按照本协议2.2、2.3、2.4条约定方式和时间完成。如果您未在代扣之前明确取消自动续费服务，本公司将根据您的委托向相关主体发出下一个订阅期的代扣指令，原则上对基于该指令扣除的费用将不予退还。

3.3如在扣费过程出现差错，本公司和您应密切配合查明原因，各自承担己方过错造成的损失；若因双方各自存在不均等过错造成的损失，由双方按过错的程度承担相应责任；双方共负责任的，由双方均摊责任。

3.4本公司对您开通自动续费服务暂不收取任何额外费用，但本公司有权根据业务发展需要决定是否对自动续费服务进行额外收费，并在相关页面向您进行公示。

3.5本公司向您提供的本服务仅限于您在本APP平台使用，任何以恶意破解等非法手段规避续费而使用付费服务的，均构成对本协议的违反。由此引起的一切法律后果由行为人负责，本公司将依法追究行为人的法律责任。


第四条服务中止、中断及终止

4.1除非本公司另有通知、公告，本服务将长期有效。本协议自您选择接受或使用本服务后生效，直至您终止本服务或注销付费服务资格时终止。

4.2出现下列情况之一的，本公司有权立即终止向您提供服务，且无须为此向您或任何第三方承担责任：

(1)经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本公司根据自身的判断，认为您的行为涉嫌违反本协议内容或本APP平台不时公布的使用规则等内容，或涉嫌违反法律法规的规定的；

(2)您的行为干扰了本APP任何部分或功能的正常运行；

(3)本公司认为向您提供本服务存在重大风险的。

4.3本公司根据自身商业决策等原因可能会选择中止、中断及中止本服务。如有此等情形发生，本公司会采取公告的形式通知您。

4.4如您希望取消自动续费，您可以在下一个订阅期结束前的24小时通过以下方式取消自动续费：

(1)Apple ID购买

liOS12及以上系统：打开苹果iOS设备“App Store”-->点击右上角苹果账户头像-->进入“账户”-->点击“订阅”-->选择${item.appName}，取消订阅即可；

liOS12以下系统：打开苹果手机“设置”-->进入“iTunes Store与App Store”-->点击“Apple ID”,选择"查看Apple ID",进入"账户设置"页面，点击“订阅”,选择${item.appName} ，取消订阅即可。

(2)安卓端购买

打开“支付宝”-->点击“我的”-->点击右上角设置按钮-->选择“支付设置”-->点击“免密支付/自动扣款”后找到${item.appName}，选择关闭服务取消订阅自动续费即可。

4.5本服务取消成功后，不影响您已成功扣费且生效的付费服务，已生效的付费服务期满后不再自动续费。您在选择终止本服务前已经委托本公司自动续费扣款的指令仍然有效，本公司对于基于该指令扣除的费用不予退还，由您自行承担相关责任。特别情况下，经本公司同意，本公司有权在支持退费的情况下扣除已使用周期的费用，退还费用计算公式为：支付费用金额*（订阅期限-实际使用会员服务期间）/订阅期限。

实际使用会员服务期限以月为单位计算的，自订单生效之日起记为1个月，订单生效之日往后第31日开始记为2个月，以此类推。


第五条其他约定

5.1本协议的解释及争议解决均应适用中华人民共和国法律，并且排除一切冲突法规定的适用。如就本协议的签订、履行等发生任何争议的，双方应尽量友好协商解决；协商不成时，任何一方均可向被告住所地享有管辖权的人民法院提起诉讼。

5.2本公司不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响本公司在将来行使该权利。

5.3如果用户对本条款内容有任何疑问，请发送邮件至我们的客服邮箱：${item.email}`;

const getPaidMemberServiceAgreement = (item: Item) => `
${item.appName}付费会员服务协议

更新日期：2023年08月04日

重要提示

欢迎使用由${item.principalName}(以下简称“本公司”或“我们”)提供的${item.appName}付费会员(以下简称“付费会员”)服务。为了保障您(即“用户”)的权益，请在使用付费会员服务之前，详细阅读此服务协议(以下简称“本协议”)所有内容，特别是加粗部分。未成年人则应在法定监护人陪同下阅读。如您对本协议的内容有任何疑问，请联系本公司客服。

除非您已阅读并接受本协议所有条款，否则您无权使用付费会员服务。您对付费会员服务的购买和/或使用行为即视为您已阅读并同意接受本协议的约束。

特别提示：

您通过本公司指定渠道开通会员服务后，可能会由于您使用的软件版本、设备、操作系统等不同以及第三方原因导致您实际可使用的具体服务有差别，由此可能给您带来的不便，您表示理解，并不会因此向本公司提出任何主张或追究本公司任何责任。


第一条 服务协议的接受和修订

1.1本协议是本公司与您之间关于获取/使用${item.appName}付费会员服务的约定，为《${item.appName}用户协议》、《${item.appName}隐私政策》、《${item.appName}儿童隐私保护声明》的补充协议。如本协议与上述协议存在冲突的，以本协议约定为准。本公司已经发布的或将来可能发布/更新的各类付费会员相关的规则，包括会员活动规则（如有）、权益说明（如有）、公告（如有）等均为本协议不可分割的组成部分，上述内容一经正式发布即生效，对双方均具约束力。

1.2本协议及相关服务条款如由于业务发展需要进行修订的，本公司将在${item.appName}（或称“本APP”）平台公布。您可前往查阅最新版协议条款。在本公司修改上述条款后，如果您不接受修改后的条款，您可以选择终止使用付费会员服务。您继续使用本服务的，将被视为已接受了修改后的协议。更新后的协议自发布之日起生效。


第二条 付费会员服务内容

2.1${item.appName}付费会员服务，是指本公司在${item.appName}中为您提供的网络增值服务，包括“1个月会员”、“3个月会员”、“1年会员”和“终身会员”等现有以及未来新增/调整的会员服务类型(具体会员类型以用户购买页面展示为准)。

为避免歧义，“终身会员”是指在${item.appName}软件运营期间，会员可以不受次数限制地使用会员服务内容。若${item.appName}停止运营，则您不再享有会员服务，本公司亦无需因此对您承担任何责任（包括但不限于退费等）。

您在成为付费会员后可以依本协议以及页面展示的权益内容享有一定的特权，具体权益内容以本公司提供的为准。付费会员的所有权和运营权，以及付费会员制度和活动的制订权均归本公司所有。

2.2请您注意，各类会员服务的权益、单价、适用终端等服务内容可能存在差异，请在购买前仔细确认您所订购的会员服务。

2.3用户成功开通付费会员后可享受专属特权和服务。您在此理解并同意因参加活动或会员等级不同，付费会员可能享受不同的特权。由于您使用的设备终端的产品技术不同，以及受版权方限制（如有）等，付费内容和特权可能在不同终端有所差异，具体以实际提供的服务为准。

2.4请您理解，本公司有权根据法律法规、业务发展情况调整(包括取消、新增、减少等)付费会员的类型和会员权益类型，本公司将在相应服务页面或以其他合理方式公布和/或向您发送通知，我们建议您仔细阅读。本公司将尽力确保上述调整不会损害会员已有利益，如您对调整有异议，请您联系我们的客服。当您继续使用付费会员服务的，即表明您同意接受相应调整。如您不同意前述调整内容的，请您立即停止使用付费会员服务。

2.5如您订购的为自动续费类会员服务，请仔细阅读并同意《自动续费服务协议》,该协议为本协议的补充协议。

2.6请您知悉，本公司有权根据实际运营情况，向非付费会员或不同类型的付费会员，免费提供部分付费会员的权益，如免费试用会员等。

2.7请您知悉，如您在${item.appName}看到会员服务以外的其他付费商品或服务,并且想了解相关商品的，请您仔细阅读相关页面的规则或服务协议，并请关注商品及服务提供方；您支付的费用，将由对应服务提供方收取，后续对于该商品或服务有任何问题，请您联系服务提供方。


第三条 付费会员的获取与终止

3.1如您希望获取付费会员权益的，需申请开通相应的付费会员。如您选用其他第三方帐号登录本软件的，您应保证第三方帐号的稳定性、真实性以及可用性，如因第三方帐号原因(如第三方帐号被封号等)致使您无法登录本APP的，您应与第三方帐号的所属公司联系。您在使用付费会员服务时所绑定的设备ID是本公司确认您身份的唯一依据。您理解并知悉，付费会员服务仅限于订购帐号自行使用，且本APP会员权益仅在您开通付费会员的设备生效，以设备ID号作为唯一识别码，如您更换设备将无法继续享受本APP会员权益。

您申请开通付费会员前，需完善个人的身份资料，包含但不限于手机号、地址、邮箱、性别等信息并保证信息的真实、准确、完整、合法有效、如有变动、应及时更新。如因您个人资料的不合法、不真实、不准确、不详尽等原因造成法律风险或损失，相关责任及后果由用户自行承担。

3.2您可以在开通服务界面通过本公司认可的支付方式完成支付来开通会员服务。您在开通服务时，应仔细核对帐号名称、开通服务类型、付费类型与服务期等具体信息。如因您个人原因造成充错帐号、开通错服务或时长，本公司不予退还已收取的费用。

3.3付费会员中的服务有效期以月为单位的，单月会员服务期为自开通付费会员之日起31天。如您是通过营销活动、站外推广等非主动购买方式获得的会员资格，其服务期可能少于31天。

3.4您在此理解并同意，本公司可能根据实际情况，对不同身份或不同阶段订购/续费的付费会员给予不同的增值服务或资费，具体优惠政策以本公司在相关服务页面公示的信息为准。

3.5本公司可能会根据运营情况、采购成本变化等，对付费会员的价格(包括单价和收费标准)进行调整，并在相关服务页面或其他合理方式通知您。若您在订购和续费时，相关服务的价格发生了调整的，请以页面展示的现时有效的价格为准。

3.6特别提醒您，一切在非官方渠道获取的付费会员资格或相关权益，将无法得到本公司的保护，请您谨慎选择、辨别购买渠道。如有疑问，可以咨询本公司客服。

3.7您知悉并理解，会员服务是一项特殊服务，在已开通的付费会员服务有效期内，若您中途主动取消或终止会员资格的，将不会获得会员开通费用的退还，本公司存在过错的情况除外。

3.8付费会员资格取消/终止后，您不能再享有由本APP提供的各项特权服务及增值服务，即本公司不再为您提供相应的会员服务。


第四条 付费会员服务的使用规则

4.1您确认：您是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织，有能力对您使用付费会员服务的一切行为独立承担责任。若您不具备前述主体资格，本公司在依据法律规定或本协议约定要求您承担责任时，有权向您的监护人或其他责任方追偿。若您是自然人，应向本公司提供真实姓名、住址、电子邮箱、联系电话等信息；若您是法人或其他组织的，应提供名称、住址、联系人等信息。

4.2您应妥善保存有关帐号、密码，并对该帐号进行的所有活动和行为负责，禁止赠与、借用、租用、转让或售卖该帐号。您应自行负责妥善保管、使用、维护您在本APP申请取得的帐号、帐号信息及帐号密码。非本公司原因致使您帐号密码泄漏以及因您保管、使用、维护不当造成损失的，本公司无须承担与此有关的任何责任。

4.3您开通付费会员服务后，可能会由于您使用的软件版本、设备、操作系统等的不同以及其他第三方原因导致您实际可使用的具体服务有一定差别，由此可能给您带来的不便，您表示理解且不予追究或豁免本公司的相关责任。

4.4如您实施了下列行为之一，本公司有完全的权利在不通知您的情况下，终止提供付费会员服务，并有权限制、冻结或终止与该服务相关联的本APP帐号使用。本公司无须给予任何补偿和退费，由此产生的责任由您自行独立承担。因此给本公司或第三方造成损失的，您应负责全额赔偿：

(1)以营利为目的为自己或他人获得付费会员服务；

(2)将会员帐号以出租、出借、出售等任何形式提供给第三方使用；

(3)将通过付费会员服务获得的任何内容用于个人学习、研究或欣赏之外的用途；

(4)通过非本公司指定的方式为自己或他人开通本服务

(5)以任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件或其它非正规方式获得付费会员服务或参与任何会员活动；

(6)通过不正当手段或以违反诚实信用原则的行为获得付费会员服务或参与会员活动；

(7)通过侵犯本公司或他人合法权益的方式为自己或他人开通付费会员服务；

(8)通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通付费会员服务；

(9)以恶意破解等非法手段规避续费而使用本服务。

4.5如发生下列任何一种情形，本公司有权根据实际情况，在不通知您的情况下中断或终止向您提供的一项或多项或全部服务，由此产生的损失由您承担，本公司无需给与任何补偿和退费。若因此给本公司或第三方造成损失的，您应负责全额赔偿：

(1)您提供的个人资料不真实或与注册时信息不一致又未能提供合理证明；

(2)经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本公司根据自身的判断，认为您的行为涉嫌违反《${item.appName}用户协议》、《${item.appName}隐私政策》、《${item.appName}儿童隐私保护声明》、本协议内容或本公司不时公布的使用规则等内容，或涉嫌违反法律法规的规定的；

(3)您的行为干扰了本APP任何部分或功能的正常运行；

(4)您未经本公司允许，利用本APP开展未经本公司同意的行为，包括但不限于对通过本APP获得的信息进行商业化活动，如附加广告、商业内容或链接等；

(5)您的个人信息、发布内容等违反国家法律法规规定，有悖社会道德伦理、公序良俗、侵犯他人合法权益、政治色彩强烈，引起任何争议，或违反本协议、本APP公示的要求的；

(6)您利用本APP进行任何违法行为的，包括但不限于刷播、刷下载量等。


第五条责任声明

5.1您知悉您使用本APP看到的所有广告均为第三方商户提供，如果您行使本协议规定的权利而购买/接受本公司以外的第三方商户提供的商品或服务，如因此发生纠纷的，您应向销售/提供该商品或服务的第三方商户主张权利，与本公司无关。

5.2您须对您自身及您所邀请的用户在参加本APP组织的活动（如有）或使用由本APP提供的各项优惠及增值服务时的实施的一切行为承担全部法律责任。

5.3本公司不对您因第三方的行为或不作为造成的损失、不可抗力原因造成的损失承担任何责任，包括但不限于支付服务、网络接入服务、电信部门的通讯线路故障、通讯技术问题、网络、电脑故障、系统不稳定性、任意第三方的侵权行为等。

5.4您理解并同意，在使用付费会员服务的过程中，可能会遇到不可抗力等风险因素，使该服务发生中断。如出现上述情况，本公司承诺将尽快与相关单位配合进行修复，但不承担由此对您造成的任何损失且不退还会员费用。


第六条未成年人用户的注意事项

6.1根据我国法律规定，若您为未满18周岁的未成年人，您应在监护人的陪同和指导下阅读本协议。

6.2若您的监护人同意您订购付费会员服务，则应当以监护人的名义完成交易。您使用付费会员服务，以及行使和履行本协议项下的权利和义务即视为已获得了监护人的认可。

6.3请未成年人用户注意保护个人信息，合理安排使用网络的时间，避免沉迷于网络，影响日常的学习生活。


第七条其他约定

7.1服务中止、中断及终止：本公司根据自身商业决策、政府行为、不可抗力等原因可能会选择更改、中止、中断及终止全部或部分付费会员服务。如有此等情形发生，本公司会通知您，但不承担由此对您造成的任何损失。除法律法规另有明确规定的情形外，本公司有权不经您申请，直接向您退还未履行的付费会员服务对应的费用。

7.2本公司对于发送给您所有的通知均可通过站内消息、您预留的电子邮件、手机短信以及信件等方式进行，该等通知于发送之日视为已送达用户。请您务必对本公司发送的通知保持关注。

7.3本协议的解释及争议解决均应适用中华人民共和国法律，并且排除一切冲突法规定的适用。如就本协议的签订、履行等发生任何争议的，双方应尽量友好协商解决；协商不成时，任何一方均可向被告住所地享有管辖权的人民法院提起诉讼。

7.4本公司不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响本公司在将来行使该权利。

7.5如果您对本条款内容有任何疑问，请发送邮件至我们的客服邮箱：${item.email}`;

const getChildrenPrivacyStatement = (item: Item) => `
${item.appName}儿童隐私保护声明


发布日期：2023年08月04日

生效日期：2023年08月04日


${item.principalName} 有限公司（注册地址： ${item.principalAddress}，联系地址：${item.principalAddress}，以下简称“我们”）系${item.appName} （以下统称「本APP」）的运营者。我们非常重视保护儿童个人信息和隐私。除《隐私政策》（以下简称为“隐私政策”）和《用户协议》（以下简称为“用户协议”）外，我们还将通过《${item.appName} 儿童隐私保护声明》（以下简称为“本声明”）帮助您和您的孩子进一步了解我们收集、使用、存储和共享您孩子的个人信息的情况，以及您和您的孩子所享有的相关权利。


我们致力于保护使用我们产品和服务的儿童的个人信息，本声明中“儿童”、“孩子”，是指不满14周岁的未成年人。本声明和《隐私政策》旨在向监护人（以下简称“您”）和儿童说明我们如何收集、使用、存储和处理儿童的个人信息，以及我们为您与儿童提供的访问、更正、删除和保护这些信息的方式。除另有约定外，本声明所用术语和缩略词与《隐私政策》和《用户协议》中的术语和缩略词具有相同的涵义。


儿童监护人特别说明：

如果您是儿童的监护人（父母或其他监护人），请您仔细阅读和选择是否同意本声明。我们希望您与我们共同保护儿童的个人信息，教育引导儿童增强个人信息保护意识和能力。


儿童特别说明：

如果您是儿童，您需要和您的监护人（父母或其他监护人）共同仔细阅读本声明，并在征得监护人同意后，使用我们的产品、服务或向我们提供信息。


请监护人和儿童在仔细阅读并充分理解《隐私政策》和本声明后，由监护人选择是否同意相关隐私政策以及是否同意儿童使用我们的产品和服务。如果监护人不同意相关隐私政策和本声明的内容或不同意提供服务所必要的信息，将可能导致我们的产品和服务无法正常运行，或者无法达到我们拟达到的服务效果，监护人和儿童可能无法正常使用我们的产品、服务或相关的具体业务功能。


监护人点击“同意”即表示监护人同意我们按照《隐私政策》和本声明的约定收集、使用和处理监护人和儿童的信息。


请您理解，我们不会主动直接向儿童收集其个人信息。对于经监护人同意而收集儿童个人信息的情况，我们只会在受到法律允许、监护人同意或保护儿童及为实现具体服务功能所必要的情形下使用、共享、转让或披露此信息。


对于收集到的儿童个人信息，我们除遵守隐私政策关于用户个人信息的约定外，还会秉持正当必要、知情同意、目的明确、安全保障、依法利用的原则，严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露，且不会超过实现收集、使用目的所必须的期限，到期后我们会对儿童个人信息进行删除或匿名化处理。


请您理解，我们提供的产品和服务中可能包括第三方提供的产品和服务。请您注意，该第三方可能收集、使用或处理儿童的相关信息，需要该第三方另行获得监护人的同意。我们建议监护人向儿童告知，在向第三方授权处理其个人信息之前需征得监护人的同意。


我们提醒您，仔细阅读本声明并确认了解我们对儿童个人信息的处理规则，特别是采用粗体字进行标注提示的部分。


如您在阅读本声明过程中有任何疑问或权利请求等个人信息相关事宜的，我们为您提供了专门的反馈渠道，具体参见本声明“联系我们”章节，我们会尽快为您作出解答。


一、我们收集哪些信息

请您理解，我们有专门面向14周岁以下的儿童提供的产品或服务、产品或服务中包含专门面向儿童的功能板块，我们仅为实现具体功能而收集用户的必要个人信息。

我们严格遵守法律法规的规定及与用户的约定，根据用户选择服务的具体情况，收集监护人和儿童的以下个人信息。

当我们根据法律法规及行业管理要求，需要为儿童用户配置保护措施时，我们可能会提示您提供监护人的手机号码、电子邮箱或者通过“扫码验证”等方式，与我们建立联系。在某些涉及支付的产品和服务中，我们可能会要求监护人填写和绑定监护人的银行卡相关信息，以便监护人知悉和管理儿童的支付行为。

在儿童使用产品和服务过程中，我们会要求您提供相关必要的信息，具体请查阅《隐私政策》“我们如何收集和使用您的个人信息”一节。

如果我们需要收集监护人或儿童的其他个人信息，我们将再次告知监护人和儿童，并征得监护人的同意。

监护人可以选择是否填写或向我们提供特定的信息。请您理解，监护人如果不填写或不提供某些特定的信息，可能会导致我们的产品和服务无法正常运行，或者无法实现我们拟提供的服务效果，监护人和儿童可能无法正常使用我们的产品、服务或相关的具体业务功能。


二、我们如何使用这些信息

我们严格遵守法律法规的规定以及与用户的约定，将收集的监护人和儿童的信息用于以下用途：

1、验证儿童和监护人身份

2、提供必要的产品和服务、产品和服务的具体功能

3、用于优化产品和服务、安全保障

若我们需要超出上述用途使用监护人或儿童的个人信息，我们将在使用个人信息前，并征得监护人的同意。


三、管理、披露儿童个人信息

我们遵照法律法规的规定，严格管理儿童的个人信息。

我们仅在监护人事先同意并采取符合《个人信息保护法》等法律法规要求的相关合规措施的情况下，才可能与监护人共享儿童的个人信息:
例如，我们会将部分儿童个人信息（如儿童用户名、账号，以及该儿童在我们某些产品和服务中的支付记录等）与监护人进行共享，监护人可以访问和管理相关个人信息。

随着我们业务的持续发展，当发生合并、收购、资产转让等交易导致向第三方共享或转移监护人和儿童的个人信息时，我们将通过推送通知、公告等形式告知监护人和儿童相关情形，按照法律法规及不低于本声明所要求的标准继续保护或要求新的管理者继续保护监护人和儿童的个人信息。

一般情况下，我们禁止披露儿童个人信息，但我们可能基于以下目的使用儿童的个人信息：

·遵守适用的法律法规等有关规定；

·遵守法院判决、裁定或其他法律程序的规定；

·遵守相关政府机关或其他法定授权组织的要求；

·我们有理由确信需要遵守法律法规等有关规定；

·为执行相关用户协议或本声明、维护社会公共利益，为保护我们的客户、我们或我们的关联公司、其他用户或雇员的人身财产安全或其他合法权益合理且必要的用途。


四、存储儿童个人信息

我们按照法律法规规定，将在中华人民共和国境内收集到的您孩子的个人信息存储于中华人民共和国境内，并依法对这些信息进行严格保密。如您要求将您孩子的个人信息传输到境外的，我们会根据相关法律进行处理，以确保对您孩子个人信息的保护。

一般情况下，我们只会在为实现服务目的所必需的时间内或法律法规规定的条件下存储您孩子的个人信息。超出法律法规或监管规定的期限后，我们会按照法律法规的要求对您孩子的个人信息进行删除或者匿名化处理。


五、更正、删除儿童个人信息

在儿童用户使用我们产品和服务期间，监护人和儿童如需访问、更正、删除相关个人信息，监护人可以根据产品或服务提供的指引进行相应的操作设置，监护人也可以通过我们提供的联系方式，来反馈和咨询相关信息。我们会在核实监护人反馈的问题后及时与监护人联系。请监护人理解，在核实过程中，我们可能需要监护人提供儿童账号、儿童身份信息、联系方式等个人信息，以便在完成身份验证和核实问题后继续响应监护人的需求。

·访问儿童个人信息

监护人和儿童可以查看儿童在使用我们产品和服务中提供或产生的个人信息，包括但不限于用户名、密码、头像、昵称、主动发布的内容等。


·更正儿童个人信息

当监护人和儿童发现我们收集、使用和处理的儿童个人信息有错误时，可以联系我们进行更正。我们会在完成身份验证和核实问题后，及时采取措施予以更正。


·删除儿童个人信息

如存在以下情况，监护人和儿童可以联系我们删除收集、使用和处理的儿童个人信息。我们会在完成身份验证和核实问题后，及时采取措施予以删除：

1、若我们违反法律、行政法规的规定或者双方的约定收集、存储、使用、转移、披露儿童个人信息；

2、若我们超出目的范围或者必要期限收集、存储、使用、转移、披露儿童个人信息；

3、若监护人撤回同意；

4、若监护人或儿童通过注销等方式终止使用产品或者服务的。

但请注意，若监护人和儿童要求我们删除特定儿童个人信息，可能导致该儿童用户无法继续使用我们的产品和服务或产品和服务中的某些具体业务功能。 如监护人发现在未事先征得监护人同意的情况下收集了儿童的个人信息，请及时联系我们，我们会采取措施尽快删除相关数据。


六、本声明的适用

请您理解，如本声明未规定之处，参照适用《隐私政策》。本声明可能会适时发生变更。我们保留不时更新或修改本声明的权利。当本声明发生变更时，我们会通过本APP以推送通知、弹窗等相关合理方式通知您，以便您能及时了解本指引所做的任何变更。未经您明确同意，我们不会削减您孩子按照或本声明所应享有的权利。

在适用本声明的情况下，如本声明与《隐私政策》的条款规定存在不一致的，以本声明为准。


七、联系我们

当您对本声明有任何疑问或反馈，请发送邮件至${item.email}联系我们。`;

const getServiceAgreement = (item: Item) => `
${item.appName}付费会员服务协议

更新日期：2023年08月04日

重要提示

欢迎使用由${item.principalName}(以下简称“本公司”或“我们”)提供的${item.appName}付费会员(以下简称“付费会员”)服务。为了保障您(即“用户”)的权益，请在使用付费会员服务之前，详细阅读此服务协议(以下简称“本协议”)所有内容，特别是加粗部分。未成年人则应在法定监护人陪同下阅读。如您对本协议的内容有任何疑问，请联系本公司客服。

除非您已阅读并接受本协议所有条款，否则您无权使用付费会员服务。您对付费会员服务的购买和/或使用行为即视为您已阅读并同意接受本协议的约束。

特别提示：

您通过本公司指定渠道开通会员服务后，可能会由于您使用的软件版本、设备、操作系统等不同以及第三方原因导致您实际可使用的具体服务有差别，由此可能给您带来的不便，您表示理解，并不会因此向本公司提出任何主张或追究本公司任何责任。


第一条 服务协议的接受和修订

1.1本协议是本公司与您之间关于获取/使用${item.appName}付费会员服务的约定，为《${item.appName}用户协议》、《${item.appName}隐私政策》、《${item.appName}儿童隐私保护声明》的补充协议。如本协议与上述协议存在冲突的，以本协议约定为准。本公司已经发布的或将来可能发布/更新的各类付费会员相关的规则，包括会员活动规则（如有）、权益说明（如有）、公告（如有）等均为本协议不可分割的组成部分，上述内容一经正式发布即生效，对双方均具约束力。

1.2本协议及相关服务条款如由于业务发展需要进行修订的，本公司将在${item.appName}（或称“本APP”）平台公布。您可前往查阅最新版协议条款。在本公司修改上述条款后，如果您不接受修改后的条款，您可以选择终止使用付费会员服务。您继续使用本服务的，将被视为已接受了修改后的协议。更新后的协议自发布之日起生效。


第二条 付费会员服务内容

2.1${item.appName}付费会员服务，是指本公司在${item.appName}中为您提供的网络增值服务，包括“1个月会员”、“3个月会员”、“1年会员”和“终身会员”等现有以及未来新增/调整的会员服务类型(具体会员类型以用户购买页面展示为准)。

为避免歧义，“终身会员”是指在${item.appName}软件运营期间，会员可以不受次数限制地使用会员服务内容。若${item.appName}停止运营，则您不再享有会员服务，本公司亦无需因此对您承担任何责任（包括但不限于退费等）。

您在成为付费会员后可以依本协议以及页面展示的权益内容享有一定的特权，具体权益内容以本公司提供的为准。付费会员的所有权和运营权，以及付费会员制度和活动的制订权均归本公司所有。

2.2请您注意，各类会员服务的权益、单价、适用终端等服务内容可能存在差异，请在购买前仔细确认您所订购的会员服务。

2.3用户成功开通付费会员后可享受专属特权和服务。您在此理解并同意因参加活动或会员等级不同，付费会员可能享受不同的特权。由于您使用的设备终端的产品技术不同，以及受版权方限制（如有）等，付费内容和特权可能在不同终端有所差异，具体以实际提供的服务为准。

2.4请您理解，本公司有权根据法律法规、业务发展情况调整(包括取消、新增、减少等)付费会员的类型和会员权益类型，本公司将在相应服务页面或以其他合理方式公布和/或向您发送通知，我们建议您仔细阅读。本公司将尽力确保上述调整不会损害会员已有利益，如您对调整有异议，请您联系我们的客服。当您继续使用付费会员服务的，即表明您同意接受相应调整。如您不同意前述调整内容的，请您立即停止使用付费会员服务。

2.5如您订购的为自动续费类会员服务，请仔细阅读并同意《自动续费服务协议》,该协议为本协议的补充协议。

2.6请您知悉，本公司有权根据实际运营情况，向非付费会员或不同类型的付费会员，免费提供部分付费会员的权益，如免费试用会员等。

2.7请您知悉，如您在${item.appName}看到会员服务以外的其他付费商品或服务,并且想了解相关商品的，请您仔细阅读相关页面的规则或服务协议，并请关注商品及服务提供方；您支付的费用，将由对应服务提供方收取，后续对于该商品或服务有任何问题，请您联系服务提供方。


第三条 付费会员的获取与终止

3.1如您希望获取付费会员权益的，需申请开通相应的付费会员。如您选用其他第三方帐号登录本软件的，您应保证第三方帐号的稳定性、真实性以及可用性，如因第三方帐号原因(如第三方帐号被封号等)致使您无法登录本APP的，您应与第三方帐号的所属公司联系。您在使用付费会员服务时所绑定的设备ID是本公司确认您身份的唯一依据。您理解并知悉，付费会员服务仅限于订购帐号自行使用，且本APP会员权益仅在您开通付费会员的设备生效，以设备ID号作为唯一识别码，如您更换设备将无法继续享受本APP会员权益。

您申请开通付费会员前，需完善个人的身份资料，包含但不限于手机号、地址、邮箱、性别等信息并保证信息的真实、准确、完整、合法有效、如有变动、应及时更新。如因您个人资料的不合法、不真实、不准确、不详尽等原因造成法律风险或损失，相关责任及后果由用户自行承担。

3.2您可以在开通服务界面通过本公司认可的支付方式完成支付来开通会员服务。您在开通服务时，应仔细核对帐号名称、开通服务类型、付费类型与服务期等具体信息。如因您个人原因造成充错帐号、开通错服务或时长，本公司不予退还已收取的费用。

3.3付费会员中的服务有效期以月为单位的，单月会员服务期为自开通付费会员之日起31天。如您是通过营销活动、站外推广等非主动购买方式获得的会员资格，其服务期可能少于31天。

3.4您在此理解并同意，本公司可能根据实际情况，对不同身份或不同阶段订购/续费的付费会员给予不同的增值服务或资费，具体优惠政策以本公司在相关服务页面公示的信息为准。

3.5本公司可能会根据运营情况、采购成本变化等，对付费会员的价格(包括单价和收费标准)进行调整，并在相关服务页面或其他合理方式通知您。若您在订购和续费时，相关服务的价格发生了调整的，请以页面展示的现时有效的价格为准。

3.6特别提醒您，一切在非官方渠道获取的付费会员资格或相关权益，将无法得到本公司的保护，请您谨慎选择、辨别购买渠道。如有疑问，可以咨询本公司客服。

3.7您知悉并理解，会员服务是一项特殊服务，在已开通的付费会员服务有效期内，若您中途主动取消或终止会员资格的，将不会获得会员开通费用的退还，本公司存在过错的情况除外。

3.8付费会员资格取消/终止后，您不能再享有由本APP提供的各项特权服务及增值服务，即本公司不再为您提供相应的会员服务。


第四条 付费会员服务的使用规则

4.1您确认：您是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织，有能力对您使用付费会员服务的一切行为独立承担责任。若您不具备前述主体资格，本公司在依据法律规定或本协议约定要求您承担责任时，有权向您的监护人或其他责任方追偿。若您是自然人，应向本公司提供真实姓名、住址、电子邮箱、联系电话等信息；若您是法人或其他组织的，应提供名称、住址、联系人等信息。

4.2您应妥善保存有关帐号、密码，并对该帐号进行的所有活动和行为负责，禁止赠与、借用、租用、转让或售卖该帐号。您应自行负责妥善保管、使用、维护您在本APP申请取得的帐号、帐号信息及帐号密码。非本公司原因致使您帐号密码泄漏以及因您保管、使用、维护不当造成损失的，本公司无须承担与此有关的任何责任。

4.3您开通付费会员服务后，可能会由于您使用的软件版本、设备、操作系统等的不同以及其他第三方原因导致您实际可使用的具体服务有一定差别，由此可能给您带来的不便，您表示理解且不予追究或豁免本公司的相关责任。

4.4如您实施了下列行为之一，本公司有完全的权利在不通知您的情况下，终止提供付费会员服务，并有权限制、冻结或终止与该服务相关联的本APP帐号使用。本公司无须给予任何补偿和退费，由此产生的责任由您自行独立承担。因此给本公司或第三方造成损失的，您应负责全额赔偿：

(1)以营利为目的为自己或他人获得付费会员服务；

(2)将会员帐号以出租、出借、出售等任何形式提供给第三方使用；

(3)将通过付费会员服务获得的任何内容用于个人学习、研究或欣赏之外的用途；

(4)通过非本公司指定的方式为自己或他人开通本服务

(5)以任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件或其它非正规方式获得付费会员服务或参与任何会员活动；

(6)通过不正当手段或以违反诚实信用原则的行为获得付费会员服务或参与会员活动；

(7)通过侵犯本公司或他人合法权益的方式为自己或他人开通付费会员服务；

(8)通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通付费会员服务；

(9)以恶意破解等非法手段规避续费而使用本服务。

4.5如发生下列任何一种情形，本公司有权根据实际情况，在不通知您的情况下中断或终止向您提供的一项或多项或全部服务，由此产生的损失由您承担，本公司无需给与任何补偿和退费。若因此给本公司或第三方造成损失的，您应负责全额赔偿：

(1)您提供的个人资料不真实或与注册时信息不一致又未能提供合理证明；

(2)经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本公司根据自身的判断，认为您的行为涉嫌违反《${item.appName}用户协议》、《${item.appName}隐私政策》、《${item.appName}儿童隐私保护声明》、本协议内容或本公司不时公布的使用规则等内容，或涉嫌违反法律法规的规定的；

(3)您的行为干扰了本APP任何部分或功能的正常运行；

(4)您未经本公司允许，利用本APP开展未经本公司同意的行为，包括但不限于对通过本APP获得的信息进行商业化活动，如附加广告、商业内容或链接等；

(5)您的个人信息、发布内容等违反国家法律法规规定，有悖社会道德伦理、公序良俗、侵犯他人合法权益、政治色彩强烈，引起任何争议，或违反本协议、本APP公示的要求的；

(6)您利用本APP进行任何违法行为的，包括但不限于刷播、刷下载量等。


第五条责任声明

5.1您知悉您使用本APP看到的所有广告均为第三方商户提供，如果您行使本协议规定的权利而购买/接受本公司以外的第三方商户提供的商品或服务，如因此发生纠纷的，您应向销售/提供该商品或服务的第三方商户主张权利，与本公司无关。

5.2您须对您自身及您所邀请的用户在参加本APP组织的活动（如有）或使用由本APP提供的各项优惠及增值服务时的实施的一切行为承担全部法律责任。

5.3本公司不对您因第三方的行为或不作为造成的损失、不可抗力原因造成的损失承担任何责任，包括但不限于支付服务、网络接入服务、电信部门的通讯线路故障、通讯技术问题、网络、电脑故障、系统不稳定性、任意第三方的侵权行为等。

5.4您理解并同意，在使用付费会员服务的过程中，可能会遇到不可抗力等风险因素，使该服务发生中断。如出现上述情况，本公司承诺将尽快与相关单位配合进行修复，但不承担由此对您造成的任何损失且不退还会员费用。


第六条未成年人用户的注意事项

6.1根据我国法律规定，若您为未满18周岁的未成年人，您应在监护人的陪同和指导下阅读本协议。

6.2若您的监护人同意您订购付费会员服务，则应当以监护人的名义完成交易。您使用付费会员服务，以及行使和履行本协议项下的权利和义务即视为已获得了监护人的认可。

6.3请未成年人用户注意保护个人信息，合理安排使用网络的时间，避免沉迷于网络，影响日常的学习生活。


第七条其他约定

7.1服务中止、中断及终止：本公司根据自身商业决策、政府行为、不可抗力等原因可能会选择更改、中止、中断及终止全部或部分付费会员服务。如有此等情形发生，本公司会通知您，但不承担由此对您造成的任何损失。除法律法规另有明确规定的情形外，本公司有权不经您申请，直接向您退还未履行的付费会员服务对应的费用。

7.2本公司对于发送给您所有的通知均可通过站内消息、您预留的电子邮件、手机短信以及信件等方式进行，该等通知于发送之日视为已送达用户。请您务必对本公司发送的通知保持关注。

7.3本协议的解释及争议解决均应适用中华人民共和国法律，并且排除一切冲突法规定的适用。如就本协议的签订、履行等发生任何争议的，双方应尽量友好协商解决；协商不成时，任何一方均可向被告住所地享有管辖权的人民法院提起诉讼。

7.4本公司不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响本公司在将来行使该权利。

7.5如果您对本条款内容有任何疑问，请发送邮件至我们的客服邮箱：${item.email}



${item.appName}自动续费服务协议

更新时间：2023年08月04日

重要提示

欢迎您使用由${item.principalName}(以下简称“本公司”或“我们”)提供的自动续费服务(以下简称“自动续费服务”或“本服务”)。为了保障用户(以下称“您”)的权益，请在使用本服务之前，详细阅读此服务协议(以下简称“本协议”)所有内容，特别是加粗部分。

除非您已阅读并同意本协议所有内容，否则您无权使用本服务。如您购买或使用本服务，即表示已经与本公司达成协议，并自愿接受本协议的所有内容。

如果您未满18周岁，请在法定监护人陪同下或经过法定监护人同意后再使用本服务；未成年人行使和履行本协议项下的权利和义务视为已获得法定监护人的认可，本协议对您及您的法定监护人产生法律约束力。


第一条 服务协议的接受和修订

1.1本协议内容包括协议正文、《${item.appName}付费会员服务协议》、《${item.appName}用户协议》以及本公司已经发布的或将来可能发布/更新的各类规则。所有规则均为本协议不可分割的组成部分，与协议正文具有同等法律效力，本协议正文与前述规则存在冲突的，以本协议正文为准。除另行明确声明外，您使用自动续费服务均受本协议约束。

1.2由于互联网的行业特性，本协议及相关服务规则如由于业务发展需要进行修订的，本公司公司将在${item.appName}（或称“本APP”）软件平台公示。您可前往查阅最新版协议条款。在本公司修改上述条款后，如果您不接受修改后的条款，您可以选择终止使用自动续费服务。您继续使用本服务，将被视为已接受了修改后的协议。


第二条 服务说明

2.1本服务是在您开通${item.appName} 会员服务等现有及未来新增/调整付费服务的前提下，基于您对自动续费的需求，避免因您未及时续费而中断服务而推出的服务。如您开通本服务，则视为您授权本公司在您会员自动续费服务期限到期前24小时和到期后，委托支付渠道在不验证会员账户密码、支付密码、短信校验码等信息的情况下从您的自有充值账户、与会员账号绑定的第三方支付账户、银行卡、与苹果商店账户绑定的支付账户等(以下统称"账户")中代扣下一个计费周期的费用。具体自动续费计费周期包括：7天、14天、月度、季度、年度等((具体以用户购买页面展示为准),您可自行选择。

2.2如您通过苹果公司(本协议中“苹果公司”指Apple Inc.及其关联公司)Apple ID开通本服务，且在下一个订阅服务到期前24小时前未主动取消本自动续费服务的，则苹果公司将在每个订阅期即将到期前24小时，从您开通本自动续费服务时绑定的Apple ID账户(以下统称“账户”)余额中自动代扣下一个订阅期服务费，从而延长该订阅期对应的服务有效期。

2.3如您通过安卓(Android)产品开通本服务，且在订阅服务期内未主动取消本自动续费服务，则第三方支付渠道将自付费服务到期前一天开始，从您开通本自动续费服务时绑定的第三方支付账户(包括但不限于支付宝账户、微信钱包账户)等账户(以下统称“账户”)余额中自动代扣下一个订阅服务期费用，从而延长该订阅期对应的付费服务有效期。

2.4您理解并同意，因部分渠道由运营商或者支付渠道根据实际情况自行决定扣费周期，前述自动续费服务的扣款时间以各渠道实际扣款时间为准。

2.5请您关注上述各类账户及可扣款余额状况，如因账户问题或余额不足导致续费失败而引发的风险或导致的损失将由您自行承担(如相应权益终止、无法参与活动、会员身份/成长值受到影响等)。如您未主动明确选择取消本服务，将视为您同意本公司在订阅服务期满后的一定期限内进行不时的扣款尝试(具体以各支付渠道的扣款规则为准)，我们继续为您提供自动续费服务，且在您余额不足的情况下，本公司有权进行多次扣款直至足额扣款。在未足额扣款前，本公司保留继续为您提供付费会员权益的权利，即本公司有权自行决定暂停为您提供付费会员服务或继续为您提供付费会员服务。

2.6您知悉并同意，您使用第三方支付渠道支付费用的，您还将受到该第三方服务条款、使用规则的约束。


第三条 自动续费使用规则

3.1根据相关法律规定，为便于您知悉自动续费情况，本公司在下一个订阅期扣款前5日以站内信等方式通知您，第三方支付渠道也可能向您发送扣款前的提醒通知，请您予以关注。

3.2请您特别注意，基于自动续费服务的特点，自动代扣将按照本协议2.2、2.3、2.4条约定方式和时间完成。如果您未在代扣之前明确取消自动续费服务，本公司将根据您的委托向相关主体发出下一个订阅期的代扣指令，原则上对基于该指令扣除的费用将不予退还。

3.3如在扣费过程出现差错，本公司和您应密切配合查明原因，各自承担己方过错造成的损失；若因双方各自存在不均等过错造成的损失，由双方按过错的程度承担相应责任；双方共负责任的，由双方均摊责任。

3.4本公司对您开通自动续费服务暂不收取任何额外费用，但本公司有权根据业务发展需要决定是否对自动续费服务进行额外收费，并在相关页面向您进行公示。

3.5本公司向您提供的本服务仅限于您在本APP平台使用，任何以恶意破解等非法手段规避续费而使用付费服务的，均构成对本协议的违反。由此引起的一切法律后果由行为人负责，本公司将依法追究行为人的法律责任。


第四条服务中止、中断及终止

4.1除非本公司另有通知、公告，本服务将长期有效。本协议自您选择接受或使用本服务后生效，直至您终止本服务或注销付费服务资格时终止。

4.2出现下列情况之一的，本公司有权立即终止向您提供服务，且无须为此向您或任何第三方承担责任：

(1)经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本公司根据自身的判断，认为您的行为涉嫌违反本协议内容或本APP平台不时公布的使用规则等内容，或涉嫌违反法律法规的规定的；

(2)您的行为干扰了本APP任何部分或功能的正常运行；

(3)本公司认为向您提供本服务存在重大风险的。

4.3本公司根据自身商业决策等原因可能会选择中止、中断及中止本服务。如有此等情形发生，本公司会采取公告的形式通知您。

4.4如您希望取消自动续费，您可以在下一个订阅期结束前的24小时通过以下方式取消自动续费：

(1)Apple ID购买

liOS12及以上系统：打开苹果iOS设备“App Store”-->点击右上角苹果账户头像-->进入“账户”-->点击“订阅”-->选择${item.appName}，取消订阅即可；

liOS12以下系统：打开苹果手机“设置”-->进入“iTunes Store与App Store”-->点击“Apple ID”,选择"查看Apple ID",进入"账户设置"页面，点击“订阅”,选择${item.appName} ，取消订阅即可。

(2)安卓端购买

打开“支付宝”-->点击“我的”-->点击右上角设置按钮-->选择“支付设置”-->点击“免密支付/自动扣款”后找到${item.appName}，选择关闭服务取消订阅自动续费即可。

4.5本服务取消成功后，不影响您已成功扣费且生效的付费服务，已生效的付费服务期满后不再自动续费。您在选择终止本服务前已经委托本公司自动续费扣款的指令仍然有效，本公司对于基于该指令扣除的费用不予退还，由您自行承担相关责任。特别情况下，经本公司同意，本公司有权在支持退费的情况下扣除已使用周期的费用，退还费用计算公式为：支付费用金额*（订阅期限-实际使用会员服务期间）/订阅期限。

实际使用会员服务期限以月为单位计算的，自订单生效之日起记为1个月，订单生效之日往后第31日开始记为2个月，以此类推。


第五条其他约定

5.1本协议的解释及争议解决均应适用中华人民共和国法律，并且排除一切冲突法规定的适用。如就本协议的签订、履行等发生任何争议的，双方应尽量友好协商解决；协商不成时，任何一方均可向被告住所地享有管辖权的人民法院提起诉讼。

5.2本公司不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响本公司在将来行使该权利。

5.3如果用户对本条款内容有任何疑问，请发送邮件至我们的客服邮箱：${item.email}`;

export const getSkitAgreementConfig = (type: number, pid: number) => {
  let title = '';
  let content = '';
  const select = list.find((item) => item.pid === pid);
  if (select) {
    switch (type) {
      case 1:
        title = `${select.appName}自动续费服务协议`;
        content = getAutomaticRenewalServiceAgreement(select);
        break;
      case 2:
        title = `付费会员协议`;
        content = getPaidMemberServiceAgreement(select);
        break;
      case 3:
        title = `儿童声明 `;
        content = getChildrenPrivacyStatement(select);
        break;
      case 4:
        title = `付费会员协议&&自动订阅续费协议`;
        content = getServiceAgreement(select);
        break;
      default:
    }
  }
  return { title, content };
};