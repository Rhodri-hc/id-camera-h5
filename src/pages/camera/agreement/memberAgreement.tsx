import { useCameraConfig } from '@/hooks';

const MemberAgreement = () => {
  const { config, company, appName } = useCameraConfig();
  return (
    <div className="p-16" style={{ lineHeight: 1.8 }}>
      <div>{appName}付费会员服务协议</div>
      <br />
      <div>更新日期：2023年08月04日</div>
      <br />
      <div>重要提示</div>
      <br />
      <div>
        欢迎使用由{company || config.company}
        (以下简称“本公司”或“我们”)提供的{appName}
        付费会员(以下简称“付费会员”)服务。为了保障您(即“用户”)的权益，请在使用付费会员服务之前，详细阅读此服务协议(以下简称“本协议”)所有内容，特别是加粗部分。未成年人则应在法定监护人陪同下阅读。如您对本协议的内容有任何疑问，请联系本公司客服。
      </div>
      <br />
      <div>
        除非您已阅读并接受本协议所有条款，否则您无权使用付费会员服务。您对付费会员服务的购买和/或使用行为即视为您已阅读并同意接受本协议的约束。
      </div>
      <br />
      <div>特别提示：</div>
      <br />
      <div>
        您通过本公司指定渠道开通会员服务后，可能会由于您使用的软件版本、设备、操作系统等不同以及第三方原因导致您实际可使用的具体服务有差别，由此可能给您带来的不便，您表示理解，并不会因此向本公司提出任何主张或追究本公司任何责任。
      </div>
      <br />
      <div>第一条 服务协议的接受和修订</div>
      <br />
      <div>
        1.1本协议是本公司与您之间关于获取/使用{appName}付费会员服务的约定，为《{appName}
        用户协议》、《{appName}
        隐私政策》的补充协议。如本协议与上述协议存在冲突的，以本协议约定为准。本公司已经发布的或将来可能发布/更新的各类付费会员相关的规则，包括会员活动规则（如有）、权益说明（如有）、公告（如有）等均为本协议不可分割的组成部分，上述内容一经正式发布即生效，对双方均具约束力。
      </div>
      <br />
      <div>
        1.2本协议及相关服务条款如由于业务发展需要进行修订的，本公司将在{appName}
        （或称“本APP”）平台公布。您可前往查阅最新版协议条款。在本公司修改上述条款后，如果您不接受修改后的条款，您可以选择终止使用付费会员服务。您继续使用本服务的，将被视为已接受了修改后的协议。更新后的协议自发布之日起生效。
      </div>
      <br />

      <div>第二条 付费会员服务内容</div>
      <br />
      <div>
        2.1{appName}付费会员服务，是指本公司在{appName}
        中为您提供的网络增值服务，包括“周会员”、“3个月会员”、“1年会员”和“终身会员”等现有以及未来新增/调整的会员服务类型(具体会员类型以用户购买页面展示为准)。{' '}
        <br />
        <br />
        为避免歧义，“终身会员”是指在{appName}
        软件运营期间，会员可以不受次数限制地使用会员服务内容。若{appName}
        停止运营，则您不再享有会员服务，本公司亦无需因此对您承担任何责任（包括但不限于退费等）。{' '}
        <br />
        <br />
        您在成为付费会员后可以依本协议以及页面展示的权益内容享有一定的特权，具体权益内容以本公司提供的为准。付费会员的所有权和运营权，以及付费会员制度和活动的制订权均归本公司所有。
        <br />
        <br />
        2.2请您注意，各类会员服务的权益、单价、适用终端等服务内容可能存在差异，请在购买前仔细确认您所订购的会员服务。
        <br />
        <br />
        2.3用户成功开通付费会员后可享受专属特权和服务。您在此理解并同意因参加活动或会员等级不同，付费会员可能享受不同的特权。由于您使用的设备终端的产品技术不同，以及受版权方限制（如有）等，付费内容和特权可能在不同终端有所差异，具体以实际提供的服务为准。
        <br />
        <br />
        2.4请您理解，本公司有权根据法律法规、业务发展情况调整(包括取消、新增、减少等)付费会员的类型和会员权益类型，本公司将在相应服务页面或以其他合理方式公布和/或向您发送通知，我们建议您仔细阅读。本公司将尽力确保上述调整不会损害会员已有利益，如您对调整有异议，请您联系我们的客服。当您继续使用付费会员服务的，即表明您同意接受相应调整。如您不同意前述调整内容的，请您立即停止使用付费会员服务。
        <br />
        <br />
        2.5如您订购的为自动续费类会员服务，请仔细阅读并同意《自动续费服务协议》,该协议为本协议的补充协议。
        <br />
        <br />
        2.6请您知悉，本公司有权根据实际运营情况，向非付费会员或不同类型的付费会员，免费提供部分付费会员的权益，如免费试用会员等。
        <br />
        <br />
        2.7请您知悉，如您在{appName}
        看到会员服务以外的其他付费商品或服务,并且想了解相关商品的，请您仔细阅读相关页面的规则或服务协议，并请关注商品及服务提供方；您支付的费用，将由对应服务提供方收取，后续对于该商品或服务有任何问题，请您联系服务提供方。
        <br />
        <br />
      </div>
      <br />
      <div>第三条 付费会员的获取与终止</div>
      <br />
      <div>
        3.1如您希望获取付费会员权益的，需申请开通相应的付费会员。如您选用其他第三方帐号登录本软件的，您应保证第三方帐号的稳定性、真实性以及可用性，如因第三方帐号原因(如第三方帐号被封号等)致使您无法登录本APP的，您应与第三方帐号的所属公司联系。您在使用付费会员服务时所绑定的设备ID是本公司确认您身份的唯一依据。您理解并知悉，付费会员服务仅限于订购帐号自行使用，且本APP会员权益仅在您开通付费会员的设备生效，以设备ID号作为唯一识别码，如您更换设备将无法继续享受本APP会员权益。
        <br />
        <br />
        您申请开通付费会员前，需完善个人的身份资料，包含但不限于手机号、地址、邮箱、性别等信息并保证信息的真实、准确、完整、合法有效、如有变动、应及时更新。如因您个人资料的不合法、不真实、不准确、不详尽等原因造成法律风险或损失，相关责任及后果由用户自行承担。
        <br />
        <br />
        3.2您可以在开通服务界面通过本公司认可的支付方式完成支付来开通会员服务。您在开通服务时，应仔细核对帐号名称、开通服务类型、付费类型与服务期等具体信息。如因您个人原因造成充错帐号、开通错服务或时长，本公司不予退还已收取的费用。
        <br />
        <br />
        3.3付费会员中的服务有效期以月为单位的，单月会员服务期为自开通付费会员之日起31天。如您是通过营销活动、站外推广等非主动购买方式获得的会员资格，其服务期可能少于31天。
        <br />
        <br />
        3.4您在此理解并同意，本公司可能根据实际情况，对不同身份或不同阶段订购/续费的付费会员给予不同的增值服务或资费，具体优惠政策以本公司在相关服务页面公示的信息为准。
        <br />
        <br />
        3.5本公司可能会根据运营情况、采购成本变化等，对付费会员的价格(包括单价和收费标准)进行调整，并在相关服务页面或其他合理方式通知您。若您在订购和续费时，相关服务的价格发生了调整的，请以页面展示的现时有效的价格为准。
        <br />
        <br />
        3.6特别提醒您，一切在非官方渠道获取的付费会员资格或相关权益，将无法得到本公司的保护，请您谨慎选择、辨别购买渠道。如有疑问，可以咨询本公司客服。
        <br />
        <br />
        3.7您知悉并理解，会员服务是一项特殊服务，在已开通的付费会员服务有效期内，若您中途主动取消或终止会员资格的，将不会获得会员开通费用的退还，本公司存在过错的情况除外。
        <br />
        <br />
        3.8付费会员资格取消/终止后，您不能再享有由本APP提供的各项特权服务及增值服务，即本公司不再为您提供相应的会员服务。
        <br />
        <br />
      </div>
      <br />
      <div>第四条 付费会员服务的使用规则</div>
      <br />
      <div>
        4.1您确认：您是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织，有能力对您使用付费会员服务的一切行为独立承担责任。若您不具备前述主体资格，本公司在依据法律规定或本协议约定要求您承担责任时，有权向您的监护人或其他责任方追偿。若您是自然人，应向本公司提供真实姓名、住址、电子邮箱、联系电话等信息；若您是法人或其他组织的，应提供名称、住址、联系人等信息。
        <br />
        <br />
        4.2您应妥善保存有关帐号、密码，并对该帐号进行的所有活动和行为负责，禁止赠与、借用、租用、转让或售卖该帐号。您应自行负责妥善保管、使用、维护您在本APP申请取得的帐号、帐号信息及帐号密码。非本公司原因致使您帐号密码泄漏以及因您保管、使用、维护不当造成损失的，本公司无须承担与此有关的任何责任。
        <br />
        <br />
        4.3您开通付费会员服务后，可能会由于您使用的软件版本、设备、操作系统等的不同以及其他第三方原因导致您实际可使用的具体服务有一定差别，由此可能给您带来的不便，您表示理解且不予追究或豁免本公司的相关责任。
        <br />
        <br />
        4.4如您实施了下列行为之一，本公司有完全的权利在不通知您的情况下，终止提供付费会员服务，并有权限制、冻结或终止与该服务相关联的本APP帐号使用。本公司无须给予任何补偿和退费，由此产生的责任由您自行独立承担。因此给本公司或第三方造成损失的，您应负责全额赔偿：
        <br />
        <br />
        (1)以营利为目的为自己或他人获得付费会员服务；
        <br />
        <br />
        (2)将会员帐号以出租、出借、出售等任何形式提供给第三方使用；
        <br />
        <br />
        (3)将通过付费会员服务获得的任何内容用于个人学习、研究或欣赏之外的用途；
        <br />
        <br />
        (4)通过非本公司指定的方式为自己或他人开通本服务
        <br />
        <br />
        (5)以任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件或其它非正规方式获得付费会员服务或参与任何会员活动；
        <br />
        <br />
        (6)通过不正当手段或以违反诚实信用原则的行为获得付费会员服务或参与会员活动；
        <br />
        <br />
        (7)通过侵犯本公司或他人合法权益的方式为自己或他人开通付费会员服务；
        <br />
        <br />
        (8)通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通付费会员服务；
        <br />
        <br />
        (9)以恶意破解等非法手段规避续费而使用本服务。
        <br />
        <br />
        4.5如发生下列任何一种情形，本公司有权根据实际情况，在不通知您的情况下中断或终止向您提供的一项或多项或全部服务，由此产生的损失由您承担，本公司无需给与任何补偿和退费。若因此给本公司或第三方造成损失的，您应负责全额赔偿：
        <br />
        <br />
        (1)您提供的个人资料不真实或与注册时信息不一致又未能提供合理证明；
        <br />
        <br />
        (2)经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者本公司根据自身的判断，认为您的行为涉嫌违反《
        {appName}用户协议》、《{appName}隐私政策》、《{appName}
        儿童隐私保护声明》、本协议内容或本公司不时公布的使用规则等内容，或涉嫌违反法律法规的规定的；
        <br />
        <br />
        (3)您的行为干扰了本APP任何部分或功能的正常运行；
        <br />
        <br />
        (4)您未经本公司允许，利用本APP开展未经本公司同意的行为，包括但不限于对通过本APP获得的信息进行商业化活动，如附加广告、商业内容或链接等；
        <br />
        <br />
        (5)您的个人信息、发布内容等违反国家法律法规规定，有悖社会道德伦理、公序良俗、侵犯他人合法权益、政治色彩强烈，引起任何争议，或违反本协议、本APP公示的要求的；
        <br />
        <br />
        (6)您利用本APP进行任何违法行为的，包括但不限于刷播、刷下载量等。
        <br />
        <br />
      </div>
      <br />
      <div>第五条责任声明</div>
      <br />
      <div>
        5.1您知悉您使用本APP看到的所有广告均为第三方商户提供，如果您行使本协议规定的权利而购买/接受本公司以外的第三方商户提供的商品或服务，如因此发生纠纷的，您应向销售/提供该商品或服务的第三方商户主张权利，与本公司无关。
        <br />
        <br />
        5.2您须对您自身及您所邀请的用户在参加本APP组织的活动（如有）或使用由本APP提供的各项优惠及增值服务时的实施的一切行为承担全部法律责任。
        <br />
        <br />
        5.3本公司不对您因第三方的行为或不作为造成的损失、不可抗力原因造成的损失承担任何责任，包括但不限于支付服务、网络接入服务、电信部门的通讯线路故障、通讯技术问题、网络、电脑故障、系统不稳定性、任意第三方的侵权行为等。
        <br />
        <br />
        5.4您理解并同意，在使用付费会员服务的过程中，可能会遇到不可抗力等风险因素，使该服务发生中断。如出现上述情况，本公司承诺将尽快与相关单位配合进行修复，但不承担由此对您造成的任何损失且不退还会员费用。
        <br />
        <br />
      </div>
      <br />
      <div>第六条未成年人用户的注意事项</div>
      <br />
      <div>
        6.1根据我国法律规定，若您为未满18周岁的未成年人，您应在监护人的陪同和指导下阅读本协议。{' '}
        <br />
        <br />
        6.2若您的监护人同意您订购付费会员服务，则应当以监护人的名义完成交易。您使用付费会员服务，以及行使和履行本协议项下的权利和义务即视为已获得了监护人的认可。{' '}
        <br />
        <br />
        6.3请未成年人用户注意保护个人信息，合理安排使用网络的时间，避免沉迷于网络，影响日常的学习生活。{' '}
        <br />
        <br />
      </div>
      <br />
      <div>第七条其他约定</div>
      <br />
      <div>
        7.1服务中止、中断及终止：本公司根据自身商业决策、政府行为、不可抗力等原因可能会选择更改、中止、中断及终止全部或部分付费会员服务。如有此等情形发生，本公司会通知您，但不承担由此对您造成的任何损失。除法律法规另有明确规定的情形外，本公司有权不经您申请，直接向您退还未履行的付费会员服务对应的费用。
        <br />
        <br />
        7.2本公司对于发送给您所有的通知均可通过站内消息、您预留的电子邮件、手机短信以及信件等方式进行，该等通知于发送之日视为已送达用户。请您务必对本公司发送的通知保持关注。
        <br />
        <br />
        7.3本协议的解释及争议解决均应适用中华人民共和国法律，并且排除一切冲突法规定的适用。如就本协议的签订、履行等发生任何争议的，双方应尽量友好协商解决；协商不成时，任何一方均可向被告住所地享有管辖权的人民法院提起诉讼。
        <br />
        <br />
        7.4本公司不行使、未能及时行使或者未充分行使本协议或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响本公司在将来行使该权利。
        <br />
        <br />
        7.5如果您对本条款内容有任何疑问，请发送邮件至我们的客服邮箱：
        <a href="wtxjkf@vigamemedia.com">wtxjkf@vigamemedia.com</a>
        <br />
        <br />
      </div>
      <br />
    </div>
  );
};
export default MemberAgreement;
