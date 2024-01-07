import './index.less';
import { useCameraConfig } from '@/hooks';
const AutoRenewAgreement = () => {
  const { company, appName } = useCameraConfig();

  return (
    <div className="p-16">
      <div className="font-24 text-center">
        <b>{appName}-隐私协议</b>
      </div>
      <div className="text-left my-8">发布时间：【 2020年1月8日 】</div>
      <div className="text-left my-8">更新时间：【 2023年11月6日 】</div>
      <div className="lh_tow">
        <div className="font-bold text-center font-24 my-8">隐私政策</div>
        欢迎您使用{appName}！本产品由{company}
        提供产品和服务。为了向您提供服务、升级产品和提高服务质量，我们可能会收集、使用、存储和共享个人信息
        。 我们非常重视用户的个人信息和隐私保护， 因此在您使用我们的产品和服务前，
        <b className="text-underline">
          请您仔细阅读并全面了解本《隐私政策》（下称“本政策”），并请特别注意本政策标粗或 下划线处 ，
        </b>
        您可以根据本政策所述管理您的个人信息以及相关授权。
        <br />
        <b className="text-underline">
          如果您是未成年人，您的监护人需要仔细阅读本政策并同意您依照本政策使用我们的产品及服务 。
          本隐私协议向您展示以下内容：
        </b>
        <br />
        <br />
        <div className="font-bold">
          一、引言
          <br />
          二、 我们如何收集和使用个人信息 <br />
          三、 对于共享、转让、公开披露个人信息的处理方式 <br />
          四、 我们如何使用合作厂商SDK 、 Cookie和同类技术 <br />
          五、 我们如何保存您的个人信息 <br />
          六、 我们如何保护您的个人信息 <br />
          七、 您如何管理自己的个人信息 <br />
          八、 未成年人信息条款 <br />
          九、 政策变更的处理 <br />
          十、联系我们
        </div>
        <br />
        <b> 一、引言</b>
        <br />
        个人信息：
        如信息无法单独或结合其他信息识别到您的个人身份，其不属于法律意义上您的个人信息;当您的信息可以单独或结合其他信息识别到您的个人身份时
        ， 或我们将无法与任何特定个人信息建立联系的数据 与其他您的
        个人信息结合使用时，这些信息在结合使用期间，将作为您的个人信息按照本 政策 处理与保护。
        <br /> 在您 本应用
        及服务的过程中，我们将根据合法、正当、必要的原则，我们会按照如下方式收集您在使用服务时主动提供的或因为使用服务而产生的信息
        ，用以 保障产品的正常运行 和功能、 改善产品和服务 以及保障 用户使用安全 。
        <br />
        <b> 二、我们如何收集和使用个人信息</b>
        <br />
        <h4>1. 我们收集的个人信息</h4>
        我们会按照如下方式收集您在使用服务时主动提供的，以及通过自动化手段收集您在使用功能或接受服务过程中产生的信息：
        <br />
        (1)产品安全保障功能 <br />
        为了保障软件与服务的正常运行，我们会收集您的{' '}
        <b>
          设备信息（制造商、型号、名称、传感器参数、手机电量、操作系统信息）、设备标识信息（IMEI/OAID/MAC/AndroidID/IDFA/
          OpenUDID/GUID/SIM卡IMSI/ICCID/IP/BSSID/SSID）、
          网络信息（WIFI信息、网络运营商信息、网络类型、网络状态）、粗略位置信息、操作日志信息以及您安装的应用信息或运行中的进程信息。
        </b>
        请您了解，这些信息是我们提供服务和保障产品正常运行所必须收集的基本信息。以上功能权限均为使用对应的产品功能、服务所必须的权限，如您不授予相应的权限，即无法使用相关功能，但不影响其他功能的使用，亦不影响您使用基本业务功能。如您同意提供您的个人敏感信息（*），即表示您同意我们按照本协议所描述目的和方式来处理您的个人敏感信息。
        <br />
        (2) 实名认证功能
        <br />
        首次运行app时,为了符合相关法律法规与政策要求，可能需要用户填写个人身份信息需进行实名认证。我们并不收集您的身份信息，仅用于实名认证。
        <br />
        (3) 本应用相关功能 <br />
        您在意见反馈拍照、使用工具等相关功能的地方，可能需要授权相机、相册等敏感权限，拒绝提供仅会使您无法使用该功能，但不影响您正常使用本应用的其他功能。
        <br />
        <h4>2. 为您提供本应用的相关服务</h4>
        当您在使用本应用相关功能服务时，我们可能会向您终端设备请求如下权限和数据：
        <br />
        【获取相机与相册权限】：本应用存在反馈拍照、使用工具、图片编辑等相关功能的地方，可能需要授权相机或相册权限，拒绝后会无法使用该功能，但不影响其他功能使用。
        <br />
        【获取存储权限】使用目的及业务场景，写入外部存储，用于将用户拍摄完毕的图片、视频保存到本地的文件保存功能。读取外部存储
        ，读取本地图片、视频。
        <br />
        【获取用户软件安装列表】：为提高您使用我们产品的安全性，保护您、其他用户或者公众的人身财产安全免遭侵害，更好地预防安全风险，我们会读取您的应用信息，总体安装使用情况来进行检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。
        <br />
        【获取位置信息】我们产品集成了高德定位SDK,需要采集位置信息以提供更精确的天气定位服务。
        <br />
        【收集设备序列号、Mac地址】我们的产品集成友盟+SDK、MSA移动安全联盟、字节跳动SDK、SensorsAnalytics,神策SDK、需要收集您的设备Mac地址、移动设备识别码（OAID/IMEI/MEID/Android
        ID/IDFA/OPENUDID/GUID、SIM 卡 IMSI/ICCID/BSSID/SSID
        信息）以提供统计分析服务，并通过地理位置校准报表数据准确性，提供基础反作弊能力。
        <br />
        【传感器数据】应用集成网易SDK,我们可能会收集加速度传感器、重力传感器、线性加速度传感器、陀螺仪传感器数据，用于提高应用安全性以及反作弊能力。
        <br />
        【读取手机状态和SD卡数据】在您使用本应用过程中，为了解本应用适配性和崩溃日志、向您提供更好的使用体验，本应用的第三方应用统计服务可能会收集您的唯一设备标识符，用于记录您的身份、分析您使用本应用的情况、标识您为本应用的用户。除此之外，可能会收集您的使用情况并存储为网络日志信息，包括：
        设备信息DEVICE_ID：本应用会根据您在软件安装及或使用中的具体操作，接收并记录您所使用的设备相关信息（包括设备型号、操作系统版本、登录IP地址、操作日志、地区分布、运营商等特征信息）。
        <br />
        【设备账户数据】本应用可能会获取用户设备账户数据，便于数据更新同步，进一步提高应用安全性以及反作弊能力。
        <br />
        请注意：收集的设备信息是无法识别特定自然人身份的信息。
        <br />
        除非取得您授权或法律法规另有规定，否则本应用收集设备信息将仅用于标识您为本应用用户。
        <br />
        APP不会收集个人使用习惯、浏览记录用户定向 和精准营销
        <br />
        【应用使用情况】用于获取app崩溃情况，便于迭代更新。
        <br />
        【查看网络/WiFi连接状态】用于访问网络/WiFi状态权限，使本软件获取当前网络/WiFi连接状态，使用需网络/WiFi连接的功能。
        <br />
        【允许安装未知来源的app】用于产品的更新升级。
        <br />
        【允许查询设备上的任何普通应用】用于使用过程中读取手机的其他应用状态，调整本应用的状态。
        <br />
        【基于网络的大概位置】用于操作软件时连接该位置的网络从而进行为所连接网络的类型自动设置适当的防火墙设置操作。
        <br />
        <h4>3. 个人信息的使用 </h4>
        (1) 用于实现产品功能所必需 <br />
        我们收集的信息遵循“合法、正当、必要”原则，将收集的信息用于实现前述各项业务功能或者服务。{' '}
        <br />
        (2) 个人信息的使用目的变更的处理 <br />
        如我们使用您的个人信息，超出了与收集时所声称的目的及具有直接或合理关联的范围，我们将在使用您的个人信息前，再次向您告知并征得您的明示同意。
        <br />
        特别提示您注意，如信息无法单独或结合其他信息识别到您的个人身份，其不属于法律意义上您的个人信息；当您的信息可以单独或结合其他信息识别到您的个人身份时或我们将无法与任何特定个人信息建立联系的数据与其他您的个人信息结合使用时，这些信息在结合使用期间，将作为您的个人信息按照本隐私声明处理与保护。
        <br />
        依法豁免征得同意收集和使用的个人信息
        <br />
        请您理解，在下列情形中，根据法律法规及相关国家标准，我们收集和使用您的个人信息无需征得您的授权同意：
        <br />
        (1) 与国家安全、国防安全直接相关的； <br />
        (2) 与公共安全、公共卫生、重大公共利益直接相关的； <br />
        (3) 与犯罪侦查、起诉、审判和判决执行等直接相关的； <br />
        (4) 出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的； <br />
        (5) 所收集的您的个人信息是您自行向社会公众公开的； <br />
        (6) 从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；{' '}
        <br />
        (7) 根据您的要求签订或履行合同所必需的；
        <br />
        (8)
        用于维护“本应用”软件及相关服务的安全稳定运行所必需的，例如发现、处置“本应用”软件及相关服务的故障；
        <br />
        (9) 为合法的新闻报道所必需的；
        <br /> (10)
        学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；
        <br />
        (11) 法律法规规定的其他情形。
        <br />
        <br />
        <b> 三、对于共享、转让、公开披露个人信息的处理方式</b>
        <br />
        <h3>1. 基本内容 </h3>
        (1) 除本 政策 规定的情形外，我们不会主动共享、提供或 转让您 的个人信息至第三方，如存在 其
        他共享、提供或 转让您 的个人信息或您需要我们将您的个人信息共享、提供或转让至第三方情形 的
        ，我们会直接或确认该第三方征得您对上述行为的明示同意。 <br />
        (2) 除本 政策 另有规定， 或 遵循国家法律法规规定或者获得您的同意 外，
        我们不会对外公开披露所收集的个人信息。如必须公开披露时，
        我们会采用符合行业内标准的安全保护措施 ，并
        我们会向您告知此次公开披露的目的、披露信息的类型及可能涉及的敏感信息，并征得您的明示同意。
        <br />
        (3) 我们不会 转让您 的个人信息给任何 其他第三 方，除非征得您的明确同意。 <br />
        <h3>2. 共享</h3>
        (1) 如
        向我们的关联方、第三方共享您的个人信息，需经过您的授权同意，除非共享的个人信息是去标识化处理后的信息，且共享第三方无法重新识别此类信息的自然人主体。如果关联方、第三方使用信息的目的超越原授权同意范围，他们需要重新征得您的同意。{' '}
        <br />
        (2) 我们 向关联方、第三方共享的数据 将 具有合法正当目的，且共享的数据以达成目的必要为限。{' '}
        <br />
        (3)
        我们将审慎评估关联方、第三方数据使用共享信息的目的，对这些合作方的安全保障能力进行综合评估，并要求其遵循合作法律协议。我们会对合作方获取信息的软件工具开发包(SDK)、应用程序接口(API)进行严格的安全监测，以保护数据安全。
        请您注意：第三方
        SDK会在您使用本应用的情况下收集您的部分信息，拒绝提供可能会导致您无法登录本应用或在使用本应用过程中受到相应限制。通过本应用为您提供服务的第三方SDK，会根据其自身隐私政策所述标准存储、使用、处理和保护您的个人信息，本隐私政策不能代替
        上述第三
        方的隐私政策。我们会审慎选择接入的第三方SDK并尽力要求第三方SDK为您的个人信息安全提供足够的保护，
        <b>同时强烈建议您在使用 上述第三 方SDK服务前先行阅读其相关隐私政策</b>
        （具体接入第三方SDK目录表详见 后文
        ），请您审慎了解、确认其隐私保护情况，做出您认为适当的选择， 并且您明确
        知晓，对于您的自由选择出现的任何后果由您本人自行承担，我们 不 对此承担任何责任。 <br />
        (4) 我们可能 会 与委托我们进行推广和广告投放的合作伙伴共享信息，
        <b>
          但我们不会共享用于 识别您 个人身份的信息(姓名、身份证号)，仅会向这些合作伙伴提供不能
          识别您 个人身份的 <span className="text-underline">去标识化或匿名化后</span> 的信息 。
        </b>
        <br />
        <b>
          3.
          根据相关法律法规及国家标准，以下情形中，我们可能会共享、转让、公开披露个人信息且无需事先征得您的授权同意：
        </b>
        (1) 与国家安全、国防安全直接相关的；
        <br />
        (2) 与公共安全、公共卫生、重大公共利益直接相关的；
        <br />
        (3) 与犯罪侦查、起诉、审判和判决执行等直接相关的；
        <br />
        (4) 出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
        <br />
        (5) 个人信息主体自行向社会公众公开个人信息的；
        <br />
        (6) 从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。
        <br />
        <b> 四、合作厂商SDK、Cookies技术条款</b>
        <br />
        <h3>1. 合作厂商SDK </h3>
        我们的产品中可能会包含 合作厂商
        SDK或其他类似的应用程序，如您在我们平台上使用这类由第三方提供的服务时，您同意将由其直接收集和处理您的信息（如嵌入代码、插件等形式）。{' '}
        <br />
        这些被嵌入的第三 方服务 ，应用在前台或后台都可能会收集您终端用户的个人信息（IMEI、 IP
        地址、AndroidID、oaid
        IDFA、OPENUDID、GUID、SIM卡IMSI、BSSID、SSID、安装软件列表、位置、硬件设备序列号等信息），并传输给第三方（具体见下方第三方合作厂商）
        且该等第三方服务
        均由相对应的第三方负责运营。前述服务商收集和处理信息等行为遵守其自身的隐私条款，而不是适用于本政策。为保障您的合法权益，如您发现这等SDK或其他类似的应用程序存在风险时，建议您立即终止相关操作并及时与我们取得联系。
        <br />
        具体的第三方合作厂商及其隐私政策链接：
        <br />
        收集信息内容请参考第三方隐私政策
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>第三方公司SDK</th>
              <th>收集目的</th>
              <th>第三方政策链接</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>腾讯Bugly SDK</th>
              <td>收集 APP 崩溃信息</td>
              <td>
                <a
                  href="https://static.bugly.qq.com/bugly-SDK-privacy-statement.pdf"
                  className="href-width"
                >
                  https://static.bugly.qq.com/bugly-SDK-privacy-statement.pdf
                </a>
              </td>
              <td rowSpan={48}>收集信息内容请参考第三方隐私政策</td>
            </tr>
            <tr>
              <th>腾讯浏览服务SDK</th>
              <td>提供浏览器服务</td>
              <td>
                <a href="https://x5.tencent.com/tbs/guide/develop.html" className="href-width">
                  https://x5.tencent.com/tbs/guide/develop.html
                </a>
              </td>
            </tr>
            <tr>
              <th>腾讯云Mars</th>
              <td>手机app崩溃日志,用于错误分析</td>
              <td>
                <a
                  href="https://cloud.tencent.com/document/product/301/11470"
                  className="href-width"
                >
                  https://cloud.tencent.com/document/product/301/11470
                </a>
              </td>
            </tr>
            <tr>
              <th>神策统计SDK</th>
              <td>提供统计分析服务</td>
              <td>
                <a
                  href="https://manual.sensorsdata.cn/sa/latest/tech_SDK_client_privacy_policy-22255999.html"
                  className="href-width"
                >
                  https://manual.sensorsdata.cn/sa/latest/tech_SDK_client_privacy_policy-22255999.html
                </a>
              </td>
            </tr>
            <tr>
              <th>岳鹰全景监控SDK</th>
              <td>提供浏览器服务</td>
              <td>
                <a href="https://yueying-docs.effirst.com/privacy.html" className="href-width">
                  https://yueying-docs.effirst.com/privacy.html
                </a>
              </td>
            </tr>
            <tr>
              <th>chromium SDK</th>
              <td>用于错误分析</td>
              <td>
                <a href="https://policies.google.com/privacy" className="href-width">
                  https://policies.google.com/privacy
                </a>
              </td>
            </tr>
            <tr>
              <th>阿里设备标识SDK</th>
              <td>用于阿里设备id生成</td>
              <td>
                <a href="https://www.umeng.com/page/policy" className="href-width">
                  https://www.umeng.com/page/policy
                </a>
              </td>
            </tr>
            <tr>
              <th>UC啄木鸟</th>
              <td>用于统计分析</td>
              <td>
                <a href="https://open-uc.uc.cn/agreement/secret" className="href-width">
                  https://open-uc.uc.cn/agreement/secret
                </a>
              </td>
            </tr>
            <tr>
              <th>数盟</th>
              <td>使用风控服务</td>
              <td>
                <a
                  href="https://docs.toponad.com/#/zh-cn/android/NetworkAccess/SDK_Policy/TopOn_SDK_Privacy_Policy_CN"
                  className="href-width"
                >
                  https://docs.toponad.com/#/zh-cn/android/NetworkAccess/SDK_Policy/TopOn_SDK_Privacy_Policy_CN
                </a>
              </td>
            </tr>
            <tr>
              <th>站长统计 SDK</th>
              <td>提供统计分析服务，收集 APP 的信息</td>
              <td>
                <a href="https://www.umeng.com/page/policy" className="href-width">
                  https://www.umeng.com/page/policy
                </a>
              </td>
            </tr>
            <tr>
              <th>华为广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://developer.huawei.com/consumer/cn/doc/distribution/monetize/yinsishengming-0000001085219712"
                  className="href-width"
                >
                  https://developer.huawei.com/consumer/cn/doc/distribution/monetize/yinsishengming-0000001085219712
                </a>
              </td>
            </tr>
            <tr>
              <th>百度广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://union.baidu.com/bqt#/policies" className="href-width">
                  https://union.baidu.com/bqt#/policies
                </a>
              </td>
            </tr>
            <tr>
              <th>快手广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://www.kuaishou.com/about/policy?tab=privacy" className="href-width">
                  https://www.kuaishou.com/about/policy?tab=privacy
                </a>
              </td>
            </tr>
            <tr>
              <th>穿山甲 广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://www.csjplatform.com/supportcenter/5374" className="href-width">
                  https://www.csjplatform.com/supportcenter/5374
                </a>
              </td>
            </tr>
            <tr>
              <th>oppo 广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://open.oppomobile.com/new/developmentDoc/info?id=11007"
                  className="href-width"
                >
                  https://open.oppomobile.com/new/developmentDoc/info?id=11007
                </a>
              </td>
            </tr>
            <tr>
              <th>vivo 广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="http://adnet.vivo.com.cn/home/faq" className="href-width">
                  http://adnet.vivo.com.cn/home/faq
                </a>
              </td>
            </tr>
            <tr>
              <th>4399 广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://web.4399.com/local/200810/22-1230.html" className="href-width">
                  https://web.4399.com/local/200810/22-1230.html
                </a>
              </td>
            </tr>
            <tr>
              <th>233广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://dev.233leyuan.com/#/doc/5001" className="href-width">
                  https://dev.233leyuan.com/#/doc/5001
                </a>
              </td>
            </tr>
            <tr>
              <th>小米广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://dev.mi.com/console/doc/detail?pId=326" className="href-width">
                  https://dev.mi.com/console/doc/detail?pId=326
                </a>
              </td>
            </tr>
            <tr>
              <th>Mintegral广告</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://www.mintegral.com/cn/privacy/#privacy-Services"
                  className="href-width"
                >
                  https://www.mintegral.com/cn/privacy/#privacy-Services
                </a>
              </td>
            </tr>
            <tr>
              <th>sigmob 广告 SDK</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://www.sigmob.com/policy.html" className="href-width">
                  https://www.sigmob.com/policy.html
                </a>
              </td>
            </tr>
            <tr>
              <th>ironsource广告</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://www.is.com/privacy-policy/" className="href-width">
                  https://www.is.com/privacy-policy/
                </a>
              </td>
            </tr>
            <tr>
              <th>优量汇 广告（广点通） SDK</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://e.qq.com/dev/help_detail.html?cid=2005&pid=5983"
                  className="href-width"
                >
                  https://e.qq.com/dev/help_detail.html?cid=2005&pid=5983
                </a>
              </td>
            </tr>
            <tr>
              <th>mobvista 广告</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://www.mintegral.com/cn/privacy/" className="href-width">
                  https://www.mintegral.com/cn/privacy/
                </a>
              </td>
            </tr>
            <tr>
              <th>Topon 广告</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://docs.toponad.com/#/zh-cn/android/NetworkAccess/SDK_Policy/SDK_policy_access"
                  className="href-width"
                >
                  https://docs.toponad.com/#/zh-cn/android/NetworkAccess/SDK_Policy/SDK_policy_access
                </a>
              </td>
            </tr>
            <tr>
              <th>抖音广告</th>
              <td>使用广告服务</td>
              <td>
                <a href="https://game.open.douyin.com/platform/doc/8823" className="href-width">
                  https://game.open.douyin.com/platform/doc/8823
                </a>
              </td>
            </tr>
            <tr>
              <th>4399 渠道 SDK</th>
              <td>接入防沉迷功能</td>
              <td>
                <a href="https://web.4399.com/local/200810/22-1230.html" className="href-width">
                  https://web.4399.com/local/200810/22-1230.html
                </a>
              </td>
            </tr>
            <tr>
              <th>233渠道SDK</th>
              <td>接入账号系统</td>
              <td>
                <a href="https://dev.233leyuan.com/#/doc/5001" className="href-width">
                  https://dev.233leyuan.com/#/doc/5001
                </a>
              </td>
            </tr>
            <tr>
              <th>小米渠道 SDK</th>
              <td>接入账号系统和使用支付功能</td>
              <td>
                <a href="https://dev.mi.com/distribute/doc/details?pId=1376" className="href-width">
                  https://dev.mi.com/distribute/doc/details?pId=1376
                </a>
              </td>
            </tr>
            <tr>
              <th>华为渠道 SDK</th>
              <td>接入账号系统和使用支付功能</td>
              <td>
                <a
                  href="https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/SDK-data-security-0000001050050911"
                  className="href-width"
                >
                  https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/SDK-data-security-0000001050050911
                </a>
              </td>
            </tr>
            <tr>
              <th>oppo 渠道 SDK</th>
              <td>接入账号系统和使用支付功能</td>
              <td>
                <a
                  href="https://open.oppomobile.com/new/developmentDoc/info?id=11007"
                  className="href-width"
                >
                  https://open.oppomobile.com/new/developmentDoc/info?id=11007
                </a>
              </td>
            </tr>
            <tr>
              <th>魅族渠道 SDK</th>
              <td>接入账号系统和使用支付功能</td>
              <td>
                <a href="https://www.meizu.com/legal.html" className="href-width">
                  https://www.meizu.com/legal.html
                </a>
              </td>
            </tr>
            <tr>
              <th>vivo 渠道 SDK</th>
              <td>接入账号系统和使用支付功能</td>
              <td>
                <a href="http://adnet.vivo.com.cn/home/faq" className="href-width">
                  http://adnet.vivo.com.cn/home/faq
                </a>
              </td>
            </tr>
            <tr>
              <th>应用宝 渠道 SDK</th>
              <td>接入账号系统和使用支付功能</td>
              <td>
                <a
                  href="https://developers.e.qq.com/developer_platform_advertiser_protocol"
                  className="href-width"
                >
                  https://developers.e.qq.com/developer_platform_advertiser_protocol
                </a>
              </td>
            </tr>
            <tr>
              <th>友盟统计SDK</th>
              <td>提供统计分析服务，收集app的崩溃信息</td>
              <td>
                <a href="https://www.umeng.com/page/policy" className="href-width">
                  https://www.umeng.com/page/policy
                </a>
              </td>
            </tr>
            <tr>
              <th>广点通 DMP行为数据统计</th>
              <td>统计用户激活等运营数据</td>
              <td>
                <a
                  href="https://developers.e.qq.com/docs/guide/user_actions/SDK"
                  className="href-width"
                >
                  https://developers.e.qq.com/docs/guide/user_actions/SDK
                </a>
              </td>
            </tr>
            <tr>
              <th>巨量引擎数据统计</th>
              <td>统计用户激活等运营数据</td>
              <td>
                <a
                  href="https://open.oceanengine.com/doc/index.html?key=ad&type=api&id=1708428054592516"
                  className="href-width"
                >
                  https://open.oceanengine.com/doc/index.html?key=ad&type=api&id=1708428054592516
                </a>
              </td>
            </tr>
            <tr>
              <th>快手数据统计</th>
              <td>统计用户激活等运营数据</td>
              <td>
                <a href="https://www.kuaishou.com/about/policy?tab=privacy" className="href-width">
                  https://www.kuaishou.com/about/policy?tab=privacy
                </a>
              </td>
            </tr>
            <tr>
              <th>热云数据统计</th>
              <td>
                统计用户激活等运营数据，反作弊识
                <br />
                别、优化广告投
                <br />
                放、设备行为统计
              </td>
              <td>
                <a href="https://www.trackingio.com/policy.html" className="href-width">
                  https://www.trackingio.com/policy.html
                </a>
              </td>
            </tr>
            <tr>
              <th>支付宝支付 SDK</th>
              <td>使用支付功能</td>
              <td>
                <a href="https://opendocs.alipay.com/open/204" className="href-width">
                  https://opendocs.alipay.com/open/204
                </a>
              </td>
            </tr>
            <tr>
              <th>支付宝H5支付 SDK</th>
              <td>使用支付功能</td>
              <td>
                <a href="http://myjsapi.alipay.com/jsapi/" className="href-width">
                  http://myjsapi.alipay.com/jsapi/
                </a>
              </td>
            </tr>
            <tr>
              <th>微信 SDK</th>
              <td>接入账号系统和使用支付功能，分享功能</td>
              <td>
                <a
                  href="https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pages/index.shtml"
                  className="href-width"
                >
                  https://pay.weixin.qq.com/wiki/doc/apiv3/wxpay/pages/index.shtml
                </a>
              </td>
            </tr>
            <tr>
              <th>友盟推送 SDK</th>
              <td>使用友盟推送</td>
              <td>
                <a href="https://www.umeng.com/page/policy" className="href-width">
                  https://www.umeng.com/page/policy
                </a>
              </td>
            </tr>
            <tr>
              <th>小米推送 SDK</th>
              <td>使用小米推送服务</td>
              <td>
                <a href="https://dev.mi.com/console/doc/detail?pId=100" className="href-width">
                  https://dev.mi.com/console/doc/detail?pId=100
                </a>
              </td>
            </tr>
            <tr>
              <th>oppo 推送 SDK</th>
              <td>使用oppo推送服务</td>
              <td>
                <a href="https://open.oppomobile.com/wiki/doc#id=10196" className="href-width">
                  https://open.oppomobile.com/wiki/doc#id=10196
                </a>
              </td>
            </tr>
            <tr>
              <th>vivo 推送 SDK</th>
              <td>使用vivo推送服务</td>
              <td>
                <a href="https://dev.vivo.com.cn/documentCenter/doc/359" className="href-width">
                  https://dev.vivo.com.cn/documentCenter/doc/359
                </a>
              </td>
            </tr>
            <tr>
              <th>字节增长营销SDK</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://open.oceanengine.com/labels/7/docs/1708428054592516"
                  className="href-width"
                >
                  https://open.oceanengine.com/labels/7/docs/1708428054592516
                </a>
              </td>
            </tr>
            <tr>
              <th>优量汇SDK</th>
              <td>使用广告服务</td>
              <td>
                <a
                  href="https://imgcache.qq.com/qzone/biz/gdt/dmp/user-action/privacy_agreement.pdf"
                  className="href-width"
                >
                  https://imgcache.qq.com/qzone/biz/gdt/dmp/user-action/privacy_agreement.pdf
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>2. Cookies技术及同类技术 </h3>
        为提高您的使用体验，我们会使用 Cookies或类似技术（例如：webbeacons,logfiles,scripts,eTags ）
        (以下统称“Cookies”技术)。Cookies技术将在您的设备中生成小文件，以便我们提供特定功能。当您选择关闭Cookies技术后，您可能无法体验我们应用服务的部分功能。
        <br />
        <b>五、信息的储存</b>
        1.
        我们依照法律法规的规定，将在境内运营过程中收集和产生的您的个人信息存储于中华人民共和国境内。
        <b className="text-underline">
          如果我们向境外传输，我们将会遵循相关国家规定或者征求您的同意。{' '}
        </b>
        <br />
        2. 我们会通过安全的方式 存储您
        的信息，包括本地存储（例如利用APP进行数据缓存）、数据库和服务器日志。 <br />
        3. 在您使用公司服务期间，我们会持续 保存您 的个人信息。如您对账号进行注销或者公司产品停服
        ，我们将从注销或停服之日起保存网络日志【1】年。
        对于其他数据的保存期限，我们承诺是为了实现提供服务所必须的最短期限，在超出上述期限后，我们会对您的相关信息进行删除或匿名化处理。
        <br />
        <b>六、信息的保护</b>
        1.
        我们努力为用户的信息安全提供保障，以防止信息的泄露、丢失、不当使用、未经授权访问和披露等。我们使用多方位的安全保护措施，以确保用户的个人信息保护处于合理的安全水平，包括身份鉴别、数据加密、访问控制、恶意代码防范、安全审计
        、 技术保护手段、管理制度控制、安全体系保障等诸多方面。
        <br /> 2. 尽管 我们
        采取上述合理有效措施，并遵守相关法律规定要求的标准，但请您理解，由于技术的限制 、
        可能存在的各种恶意手段 、我们 可控范 围外 的系统和通讯网络等 方面的 问题，我们难以
        始终保证信息百分之百的安全， 但 我们将尽力确保您提供给我们的个人信息的安全性 ， 我们 也
        建议您在使用产品和服务时充分注意对个人信息的保护 ， 建议 您采取
        积极措施保护个人信息的安全，包括但不限于使用复杂密码、定期修改密码、不将自己的账号密码及相关个人信息透露给他人。
        <br />
        3.
        若发生个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大。安全事件发生后，我们会以公告、推送通知或邮件等形式告知
        您安全
        事件的基本情况、我们即将或已经采取的处置措施和补救措施，以及我们对您的应对建议。如果难以实现逐一告知，我们将通过公告等方式发布警示{' '}
        <br />
        4.
        <b className="text-underline">
          若 您一旦离开 本应用
          及相关服务，浏览或使用其他网站、服务及内容资源，无论您登录、浏览或使用上述软件、网站是否基于本应用的链接或引导
          ， 我们将没有能力和义务保护您 对该等 软件、网站提交的任何个人信息 。
        </b>{' '}
        <br />
        <b>七、您的权利</b>
        <br />
        在您使用 本应用和 服务期间，我们可能会视应用产品具体情况为您提供相
        应的操作设置，以便您可以查询、删除、更正或撤回您的相关个人信息 、注销您
        的账户及撤回您已同意的授权 ，您可参考 本 应用的具体指引进行操作。此外，我们还设置了投诉
        、请求及 举报渠道，您的意见将会得到及 时的处理。 具体操作方式为： <br /> 1. 查询/删除功能
        ：在 【 我】-【反馈】 中获取联系邮箱， 向我们 发送邮件进行查询 和删除 ；<br /> 2.
        改变授权范围：通过 手机系统权限设置， 进行授权范围改变 ，若有任何需要帮助的， 可
        随时通过邮箱联系我们进行处理 ；<br /> 3. 投诉、举报：在 【 我】-【反馈】 中获取联系邮箱，
        向我们 发送邮件 对相关行为进行投诉和举报 ；
        <br />
        <b>八、未成年人条款</b> <br />
        <b className="text-underline">
          1. 若您是未满
          18周岁的未成年人，在使用本应用及相关服务前，应在您的父母或其他监护人监护、指导下共同阅读并同意本政策。{' '}
          <br />
          2.
          我们根据国家相关法律法规的规定保护未成年人的个人信息，只会在法律允许、父母或其他监护人明确同意或保护未成年人所必要的情况下收集、使用、储存、共享、转让或披露未成年人的个人信息
          ;如果我们发现在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，会设法尽快删除相关信息。{' '}
          <br />
          3.
          若您是未成年人的法定监护人，请您关注您所监护的未成年人是否是在取得您的授权同意之后使用本应用的服务或提供其个人信息。如果您对您所监护的未成年人的个人信息有疑问，请通过本政策中的联系方式与我们联系。{' '}
          <br />
          4. 对于可能涉及的不满
          14周岁的儿童个人信息，我们除遵守本政策关于用户个人信息的约定外，还会严格遵循《儿童个人信息网络保护规定》等法律法规的要求进行存储、使用、披露。
          如需了解更多儿童信息保护的内容，详见{' '}
          <a href="https://h.vigame.cn/pro/ChildrenPrivacyPolicy.html?t=">《儿童隐私政策》</a>。
        </b>
        <b>九、政策变更</b>
        <br />
        1.
        我们会适时对本政策进行修订、补充或变更，这些修订、补充或变更构成本政策的一部分并具有等同于本政策的效力。未经
        您明确 同意，我们不会 削减您依据 当前生效的本政策所应享受的权利。 <br /> 2. 本政策更新前，
        我们会通过应用页面显著位置提示或向您发送电子邮件等适当方式通知您
        ，以便您及时了解本政策的最新版本。再次征得您的明示同意后，我们将按照更新后的隐私政策收集、处理或使用您的个人信息。{' '}
        <br />
        <b>十、联系我们</b>
        <br />
        如果您对个人信息保护问题有投诉、建议、疑问，您可以将问题发送至{' '}
        <b>
          【邮箱号：
          <a href="mailto:wtxjkf@vigamemedia.com">wtxjkf@vigamemedia.com</a> 】
        </b>
        ，我们将尽快审核所涉问题，并在 验证您 的用户身份后的十五 个工作日 内予以回复。
      </div>
    </div>
  );
};
export default AutoRenewAgreement;
