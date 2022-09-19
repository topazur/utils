/**
 * @title [any-rule](https://github.com/any86/any-rule)
 */

/* 计算机相关 */

/**
 * @title 必须带端口号的网址(或ip)
 */
export const regUriAndPort = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/

/**
 * @title 网址(URL)
 * @desc https://baike.baidu.com/item/%E9%A1%B6%E7%BA%A7%E5%9F%9F%E5%90%8D#4_1
 * @desc https://baike.baidu.com/item/%E9%A1%B6%E7%BA%A7%E5%9F%9F%E5%90%8D#7
 * @desc 也参考谷歌浏览器的地址栏, 如果输入非字母不会被识别为域名
 */
export const regUri = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/

/**
 * @title 域名(非网址, 不包含协议)
 */
export const regDomain = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/

/**
 * @title ip-v4[:端口]
 */
export const regIPV4 = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$/

/**
 * @title ip-v6[:端口]
 */
export const regIPV6 = /(^(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$)|(^\[(?:(?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$)/i

/**
 * @title java包名
 */
export const regJAVAPackageName = /^([a-zA-Z_]\w*)+([.][a-zA-Z_]\w*)+$/

/**
 * @title mac地址
 */
export const regMacAddr = /^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i

/**
 * @title 迅雷链接(宽松匹配)
 */
export const regThunderEasy = /^thunderx?:\/\/[a-zA-Z\d]+=$/

/**
 * @title ed2k链接(宽松匹配)
 */
export const regEd2kEasy = /^ed2k:\/\/\|file\|.+\|\/$/

/**
 * @title 磁力链接(宽松匹配)
 */
export const regMagnetEasy = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/

/**
 * @title 子网掩码(不包含 0.0.0.0)
 */
export const regSubnetMask = /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/

/**
 * @title linux"隐藏文件"路径
 */
export const regLinuxHideFilePath = /^\/(?:[^/]+\/)*\.[^/]*/

/**
 * @title linux文件路径
 */
export const regLinuxFilePath = /^\/(?:[^/]+\/)*[^/]+$/

/**
 * @title linux文件夹路径
 */
export const regLinuxFolderPath = /^\/(?:[^/]+\/)*$/

/**
 * @title window下"文件"路径
 */
export const regWindowsFilePath = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/

/**
 * @title window"文件夹"路径
 */
export const regWindowsFolderPath = /^[a-zA-Z]:\\(?:\w+\\?)*$/

/* 编码相关 */

/**
 * @title 16进制颜色
 */
export const regHexadecimalColor = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

/**
 * @title html注释
 */
export const regHtmlComments = /<!--[\s\S]*?-->/g

/**
 * @title html标签(宽松匹配)
 */
export const regHtmlTags = /<(\w+)[^>]*>(.*?<\/\1>)?/

/**
 * @title md5格式(32位)
 */
export const regMD5 = /^[a-fA-F0-9]{32}$/

/**
 * @title GUID/UUID
 */
export const regUUID = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i

/**
 * @title 版本号(version)格式必须为X.Y.Z
 * @desc https://semver.org/lang/zh-CN/
 */
export const regSemVer = /^\d+(?:\.\d+){2}$/

/**
 * @title 视频(video)链接地址（视频格式可按需增删）
 */
export const regVideoUri = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i

/**
 * @title 图片(image)链接地址（图片格式可按需增删）
 */
export const regImageUri = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i

/**
 * @title base64格式
 */
export const regBase64 = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i

/**
 * @title 24小时制时间（HH:mm:ss）
 */
export const regHHmmss = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/

/**
 * @title 12小时制时间（hh:mm:ss）
 */
export const reghhmmss = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/

/**
 * @title 日期(宽松)
 */
export const regDateEasy = /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/

/**
 * @title 日期(严谨, 支持闰年判断)
 */
export const regDate = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/

/**
 * @title 可以被moment转化成功的时间 YYYYMMDD HH:mm:ss
 */
export const regDateMoment = /^\d{4}([/:-\S])(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31) (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/

/**
 * @title email(邮箱)
 */
export const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * @title email(支持中文邮箱)
 */
export const regEmailEasy = /^[A-Za-z0-9\u4E00-\u9FA5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

/**
 * @title 匹配连续重复的字符
 */
export const regRepeat = /(.)\1+/

/**
 * @title ASCII码表中的全部的特殊字符
 */
export const regASCII = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/

/* 字符相关 */

/**
 * @title 中文/汉字
 * // rule: /^[\u4E00-\u9FA5]+$/
 */
export const regChineseCharacters = /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/

/**
 * @title 匹配中文汉字和中文标点
 */
export const regChineseCharacterAndPoint = /[\u4E00-\u9FA5|\u3002|\uFF1F|\uFF01|\uFF0C|\u3001|\uFF1B|\uFF1A|\u201C|\u201D|\u2018|\u2019|\uFF08|\uFF09|\u300A|\u300B|\u3008|\u3009|\u3010|\u3011|\u300E|\u300F|\u300C|\u300D|\uFE43|\uFE44|\u3014|\u3015|\u2026|\u2014|\uFF5E|\uFE4F|\uFFE5]/

/**
 * @title 中文和数字
 */
export const regChineseAndNumber = /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/

/**
 * @title 数字和英文字母组成，并且同时含有数字和英文字母
 */
export const regLetterAndNumber = /^(?=.*[a-zA-Z])(?=.*\d).+$/

/**
 * @title 数字和字母组成
 */
export const regLetterOrNumber = /^[A-Za-z0-9]+$/

/**
 * @title 只包含数字
 */
export const regOnlyNumber = /^\d+$/

/**
 * @title 英文字母
 */
export const regLetters = /^[a-zA-Z]+$/

/**
 * @title 小写英文字母组成
 */
export const regLettersLower = /^[a-z]+$/

/**
 * @title 大写英文字母
 */
export const regLettersUpper = /^[A-Z]+$/

/**
 * @title 不能包含字母
 */
export const regNotLetter = /^[^A-Za-z]*$/

/**
 * @title 小数
 */
export const regDecimal = /^\d+\.\d+$/

/**
 * @title 正整数，不包含0
 */
export const regIntegerPositive = /^\+?[1-9]\d*$/

/**
 * @title 负整数，不包含0
 */
export const regIntegerNegative = /^-[1-9]\d*$/

/**
 * @title 整数
 */
export const regInteger = /^(?:0|(?:-?[1-9]\d*))$/

/**
 * @title 浮点数
 * // allow "1.23", allow "-0.1", allow "0.00", ban "-0.00", ban "2.", allow "2.0"
 */
export const regFloatEasy = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9]\d*|0\.0+)$/

/**
 * @title 浮点数(严格)
 * // allow "1.23", allow "-0.1", ban "2.", ban "2.0"
 */
export const regFloat = /^(-?[1-9]\d*\.\d+|-?0\.\d*[1-9])$/

/* 社会相关 */

/**
 * @title 车牌号(新能源)
 */
export const regLicensePlateNE = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?:((\d{5}[A-HJK])|([A-HJK][A-HJ-NP-Z0-9][0-9]{4}))|[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])$/

/**
 * @title 车牌号(非新能源)
 */
export const regLicensePlateLegacy = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/

/**
 * @title 车牌号(新能源+非新能源)
 */
export const regLicensePlateAll = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/

/**
 * @title 身份证号(1代,15位数字)
 */
export const regIdentityCardV1 = /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[1-2][\d]|30|31)\d{3}$/

/**
 * @title 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 */
export const regIdentityCardV2 = /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

/**
 * @title 身份证号, 支持1/2代(15位/18位数字)
 */
export const regIdentityCard = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/

/**
 * @title 香港身份证
 */
export const regIdentityCardHK = /^[a-zA-Z]\d{6}\([\dA]\)$/

/**
 * @title 澳门身份证
 * @desc https://baike.baidu.com/item/%E6%BE%B3%E9%97%A8%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81/12509098?fr=aladdin#5
 */
export const regIdentityCardMO = /^[1|5|7]\d{6}\(\d\)$/

/**
 * @title 台湾身份证
 */
export const regIdentityCardTWN = /^[a-zA-Z][0-9]{9}$/

/**
 * @title 护照（包含香港、澳门）
 */
export const regPassport = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/

/**
 * @title 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 */
export const regBankCardNo = /^[1-9]\d{9,29}$/

/**
 * @title 中国的所有省
 */
export const regChineseProvince = /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/

/**
 * @title 手机号(mobile phone)中国(严谨), 根据工信部2019年最新公布的手机号段
 */
export const regMobile = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/

/**
 * @title 手机号(mobile phone)中国(宽松), 只要是13,14,15,16,17,18,19开头即可
 */
export const regMobileEasy = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

/**
 * @title 手机号(mobile phone)中国(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
 */
export const regMobileEasiest = /^(?:(?:\+|00)86)?1\d{10}$/

/**
 * @title 座机(tel phone)电话(国内),如: 0341-86091234
 */
export const regTelephone = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/

/**
 * @title 火车车次
 */
export const regTrainNumber = /^[GCDZTSPKXLY1-9]\d{1,4}$/

/**
 * @title 股票代码(A股)
 */
export const regStockCodeA = /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/

/**
 * @title 手机机身码(IMEI)
 */
export const regIMEI = /^\d{15,17}$/

/**
 * @title 统一社会信用代码
 */
export const regCreditCode = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/

/**
  * @title 统一社会信用代码(宽松匹配)(15位/18位/20位数字/字母)
  */
export const regCreditCodeEasy = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/

/**
 * @title 邮政编码(中国)
 */
export const regPostalCode = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/

/**
 * @title 数字/货币金额（支持负数、千分位分隔符）
 */
export const regAmount = /^-?\d+(,\d{3})*(\.\d{1,2})?$/

/**
 * @title 数字/货币金额 (只支持正数、不支持校验千分位分隔符)
 */
export const regAmountEasy = /(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0)$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/

/**
 * @title 大于等于0, 小于等于150, 支持小数位出现5, 如145.5, 用于判断考卷分数
 */
export const regExamScore = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/

/**
 * @title 中文姓名
 */
export const regChineseName = /^(?:[\u4E00-\u9FA5·]{2,16})$/

/**
 * @title 英文姓名
 */
export const regEnglishName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/

/**
 * @title 用户名校验，4到16位（字母，数字，下划线，减号）
 */
export const regValidAccountV1 = /^[a-zA-Z0-9_-]{4,16}$/

/**
 * @title 帐号是否合法 (字母开头，允许5-16字节，允许字母数字下划线组合)
 */
export const regValidAccountV2 = /^[a-zA-Z]\w{4,15}$/

/**
 * @title qq号格式正确
 */
export const regQQ = /^[1-9][0-9]{4,10}$/

/**
 * @title 微信号(wx)，6至20位，以字母开头，字母，数字，减号，下划线
 */
export const regWechatID = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/

/**
 * @title 大写字母，小写字母，数字，特殊符号 `@#$%^&*`~()-+=` 中任意3项密码
 */
export const regPasswordV1 = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/

/**
 * @title 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 */
export const regPasswordV2 = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
