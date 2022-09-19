import { describe, expect, it } from 'vitest'

import {
  regASCII,
  regAmount,
  regAmountEasy,
  regBankCardNo,
  regBase64,
  regChineseAndNumber,
  regChineseCharacterAndPoint,
  regChineseCharacters,
  regChineseName,
  regChineseProvince,
  regCreditCode,
  regCreditCodeEasy,
  regDate,
  regDateEasy,
  regDateMoment,
  regDecimal,
  regDomain,
  regEd2kEasy,
  regEmail,
  regEmailEasy,
  regEnglishName,
  regExamScore,
  regFloat,
  regFloatEasy,
  regHHmmss,
  regHexadecimalColor,
  regHtmlComments,
  regHtmlTags,
  regIMEI,
  regIPV4,
  regIPV6,
  regIdentityCard,
  regIdentityCardHK,
  regIdentityCardMO,
  regIdentityCardTWN,
  regIdentityCardV1,
  regIdentityCardV2,
  regImageUri,
  regInteger,
  regIntegerNegative,
  regIntegerPositive,
  regJAVAPackageName,
  regLetterAndNumber,
  regLetterOrNumber,
  regLetters,
  regLettersLower,
  regLettersUpper,
  regLicensePlateAll,
  regLicensePlateLegacy,
  regLicensePlateNE,
  regLinuxFilePath,
  regLinuxFolderPath,
  regLinuxHideFilePath,
  regMD5,
  regMacAddr,
  regMagnetEasy,
  regMobile,
  regMobileEasiest,
  regMobileEasy,
  regNotLetter,
  regOnlyNumber,
  regPassport,
  regPasswordV1,
  regPasswordV2,
  regPostalCode,
  regQQ,
  regRepeat,
  regSemVer,
  regStockCodeA,
  regSubnetMask,
  regTelephone,
  regThunderEasy,
  regTrainNumber,
  regUUID,
  regUri,
  regUriAndPort,
  regValidAccountV1,
  regValidAccountV2,
  regVideoUri,
  regWechatID,
  regWindowsFilePath,
  regWindowsFolderPath,
  reghhmmss,
} from '../src/regexp'

/* 计算机相关 */

describe.each([''])('describe rule of 必须带端口号的网址(或ip)', () => {
  describe.each(['https://www.qq.com:8080', '127.0.0.1:5050', 'baidu.com:8001', 'http://192.168.1.1:9090'])('examples', (item) => {
    it(`Test rules regUriAndPort of '${item}'`, () => {
      expect(item).toMatch(regUriAndPort)
    })
  })
  describe.each(['192.168.1.1', 'https://www.jd.com'])('counterExamples', (item) => {
    it(`Test rules regUriAndPort of '${item}'`, () => {
      expect(item).not.toMatch(regUriAndPort)
    })
  })
})

describe.each([''])('describe rule of 网址(URL)', () => {
  describe.each(['www.qq.com', 'https://vuejs.org/v2/api/#v-model', 'www.qq.99', '//www.qq.com', 'www.腾讯.cs', 'ftp://baidu.qq', 'http://baidu.com', 'https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15', '360.com:8080/vue/#/a=1&b=2'])('examples', (item) => {
    it(`Test rules regUri of '${item}'`, () => {
      expect(item).toMatch(regUri)
    })
  })
  describe.each(['....'])('counterExamples', (item) => {
    it(`Test rules regUri of '${item}'`, () => {
      expect(item).not.toMatch(regUri)
    })
  })
})

describe.each([''])('describe rule of 域名(非网址, 不包含协议)', () => {
  describe.each(['www.baidu.com', 'baidu.com', 'baidu.com.cn', 'api.baidu.com'])('examples', (item) => {
    it(`Test rules regDomain of '${item}'`, () => {
      expect(item).toMatch(regDomain)
    })
  })
  describe.each(['http://baidu.com', 'https://baidu.com', 'www.百度.com'])('counterExamples', (item) => {
    it(`Test rules regUriAndPort of '${item}'`, () => {
      expect(item).not.toMatch(regUriAndPort)
    })
  })
})

describe.each(['172.16.0.0', '172.16.0.0:8080', '127.0.0.0', '127.0.0.0:998'])('describe rule of ip-v4[:端口]', (item) => {
  it(`Test rules regIPV4 of '${item}'`, () => {
    expect(item).toMatch(regIPV4)
  })
})

describe.each(['2031:0000:130f:0000:0000:09c0:876a:130b', '[2031:0000:130f:0000:0000:09c0:876a:130b]:8080'])('describe rule of ip-v6[:端口]', (item) => {
  it(`Test rules regIPV6 of '${item}'`, () => {
    expect(item).toMatch(regIPV6)
  })
})

describe.each(['com.bbb.name'])('describe rule of java包名', (item) => {
  it(`Test rules regJAVAPackageName of '${item}'`, () => {
    expect(item).toMatch(regJAVAPackageName)
  })
})

describe.each(['38:f9:d3:4b:f5:51', '00-0C-29-CA-E4-66'])('describe rule of mac地址', (item) => {
  it(`Test rules regMacAddr of '${item}'`, () => {
    expect(item).toMatch(regMacAddr)
  })
})

describe.each(
  ['thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo='],
)('describe rule of 迅雷链接(宽松匹配)', (item) => {
  it(`Test rules regThunderEasy of '${item}'`, () => {
    expect(item).toMatch(regThunderEasy)
  })
})

describe.each(
  ['ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/'],
)('describe rule of ed2k链接(宽松匹配)', (item) => {
  it(`Test rules regEd2kEasy of '${item}'`, () => {
    expect(item).toMatch(regEd2kEasy)
  })
})

describe.each(['magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC'])('describe rule of 磁力链接(宽松匹配)', (item) => {
  it(`Test rules regMagnetEasy of '${item}'`, () => {
    expect(item).toMatch(regMagnetEasy)
  })
})

describe.each(['255.255.255.0', '255.255.255.255', '255.240.0.0'])('describe rule of 子网掩码(不包含 0.0.0.0)', (item) => {
  it(`Test rules regSubnetMask of '${item}'`, () => {
    expect(item).toMatch(regSubnetMask)
  })
})

describe.each(['/usr/ad/.dd', '/root/.gitignore', '/.gitignore'])('describe rule of linux"隐藏文件"路径', (item) => {
  it(`Test rules regLinuxHideFilePath of '${item}'`, () => {
    expect(item).toMatch(regLinuxHideFilePath)
  })
})

describe.each(['/root/b.ts', '/root/abc'])('describe rule of linux文件路径', (item) => {
  it(`Test rules regLinuxFilePath of '${item}'`, () => {
    expect(item).toMatch(regLinuxFilePath)
  })
})

describe.each(['/usr/ad/dd/', '/', '/root/', '/ a a / a / a a /'])('describe rule of linux文件夹路径', (item) => {
  it(`Test rules regLinuxFolderPath of '${item}'`, () => {
    expect(item).toMatch(regLinuxFolderPath)
  })
})

describe.each(['C:\\Users\\Administrator\\Desktop\\qq.link', 'e:\\m\\vscode.exe'])('describe rule of window下"文件"路径', (item) => {
  it(`Test rules regWindowsFilePath of '${item}'`, () => {
    expect(item).toMatch(regWindowsFilePath)
  })
})

describe.each(['C:\\Users\\Administrator\\Desktop', 'e:\\m\\'])('describe rule of window"文件夹"路径', (item) => {
  it(`Test rules regWindowsFolderPath of '${item}'`, () => {
    expect(item).toMatch(regWindowsFolderPath)
  })
})

/* 编码相关 */

describe.each(['#f00', '#F90', '#000', '#fe9de8'])('describe rule of 16进制颜色', (item) => {
  it(`Test rules regHexadecimalColor of '${item}'`, () => {
    expect(item).toMatch(regHexadecimalColor)
  })
})

describe.each(['<!--<div class="_bubble"></div>--><div>chen gu zhe 87</div><div class="_bubble"></div>-->'])('describe rule of html注释', (item) => {
  it(`Test rules regHtmlComments of '${item}'`, () => {
    expect(item).toMatch(regHtmlComments)
  })
})

describe.each(['<div id="app"> 2333 </div>', '<input type="text">', '<br>'])('describe rule of html标签(宽松匹配)', (item) => {
  it(`Test rules regHtmlTags of '${item}'`, () => {
    expect(item).toMatch(regHtmlTags)
  })
})

describe.each(['21fe181c5bfc16306a6828c1f7b762e8'])('describe rule of md5格式(32位)', (item) => {
  it(`Test rules regMD5 of '${item}'`, () => {
    expect(item).toMatch(regMD5)
  })
})

describe.each(['e155518c-ca1b-443c-9be9-fe90fdab7345', '41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D', '00000000-0000-0000-0000-000000000000'])('describe rule of GUID/UUID', (item) => {
  it(`Test rules regUUID of '${item}'`, () => {
    expect(item).toMatch(regUUID)
  })
})

describe.each(['16.3.10'])('describe rule of 版本号(version)格式必须为X.Y.Z', (item) => {
  it(`Test rules regSemVer of '${item}'`, () => {
    expect(item).toMatch(regSemVer)
  })
})

describe.each(['http://www.abc.com/video/wc.avi'])('describe rule of 视频(video)链接地址', (item) => {
  it(`Test rules regVideoUri of '${item}'`, () => {
    expect(item).toMatch(regVideoUri)
  })
})

describe.each(['https://www.abc.com/logo.png', 'http://www.abc.com/logo.png'])('describe rule of 图片(image)链接地址', (item) => {
  it(`Test rules regImageUri of '${item}'`, () => {
    expect(item).toMatch(regImageUri)
  })
})

describe.each(['data:image/gif;base64,xxxx=='])('describe rule of base64格式', (item) => {
  it(`Test rules regBase64 of '${item}'`, () => {
    expect(item).toMatch(regBase64)
  })
})

describe.each(['23:34:55'])('describe rule of 24小时制时间（HH:mm:ss）', (item) => {
  it(`Test rules regHHmmss of '${item}'`, () => {
    expect(item).toMatch(regHHmmss)
  })
})

describe.each(['11:34:55'])('describe rule of 12小时制时间（hh:mm:ss）', (item) => {
  it(`Test rules reghhmmss of '${item}'`, () => {
    expect(item).toMatch(reghhmmss)
  })
})

describe.each([''])('describe rule of 日期(宽松)', () => {
  describe.each(['1990-12-12', '1-1-1', '0000-1-1'])('examples', (item) => {
    it(`Test rules regDateEasy of '${item}'`, () => {
      expect(item).toMatch(regDateEasy)
    })
  })
  describe.each(['2020-00-01'])('counterExamples', (item) => {
    it(`Test rules regDateEasy of '${item}'`, () => {
      expect(item).not.toMatch(regDateEasy)
    })
  })
})

describe.each([''])('describe rule of 日期(严谨, 支持闰年判断)', () => {
  describe.each(['1990-12-12', '2000-02-29'])('examples', (item) => {
    it(`Test rules regDate of '${item}'`, () => {
      expect(item).toMatch(regDate)
    })
  })
  // 反例: 闰年判断
  describe.each(['2021-02-29'])('counterExamples', (item) => {
    it(`Test rules regDate of '${item}'`, () => {
      expect(item).not.toMatch(regDate)
    })
  })
})

describe.each([''])('describe rule of 可以被moment转化成功的时间格式', () => {
  describe.each(['2020/01/01 23:59:59', '2020-01-01 00:00:00', '20200101 11:11:11'])('examples', (item) => {
    it(`Test rules regDateMoment of '${item}'`, () => {
      expect(item).toMatch(regDateMoment)
    })
  })
  describe.each(['2020/00/01 23:59:59', '2020-01/01 23:59:59', '2020-01-01 23:59:61', '2020-01-0100:00:00'])('counterExamples', (item) => {
    it(`Test rules regDateMoment of '${item}'`, () => {
      expect(item).not.toMatch(regDateMoment)
    })
  })
})

describe.each(['90203918@qq.com', 'nbilly@126.com', '汉字@qq.com'])('describe rule of email(邮箱)', (item) => {
  it(`Test rules regEmail of '${item}'`, () => {
    expect(item).toMatch(regEmail)
  })
})

describe.each(['90203918@qq.com', 'nbilly@126.com', '啦啦啦@126.com'])('describe rule of email(支持中文邮箱)', (item) => {
  it(`Test rules regEmailEasy of '${item}'`, () => {
    expect(item).toMatch(regEmailEasy)
  })
})

describe.each(['我我我', '112233', '11234'])('describe rule of 匹配连续重复的字符', (item) => {
  it(`Test rules regRepeat of '${item}'`, () => {
    expect(item).toMatch(regRepeat)
  })
})

describe.each(['[', '.', '^', '&3%'])('describe rule of ASCII码表中的全部的特殊字符', (item) => {
  it(`Test rules regASCII of '${item}'`, () => {
    expect(item).toMatch(regASCII)
  })
})

/* 字符相关 */

describe.each(['正则', '前端'])('describe rule of 中文/汉字', (item) => {
  it(`Test rules regChineseCharacters of '${item}'`, () => {
    expect(item).toMatch(regChineseCharacters)
  })
})

describe.each(
  ['匹配中文汉字以及中文标点符号 。 ？ ！ ， 、 ； ： “ ” ‘ \' （ ） 《 》 〈 〉 【 】 『 』 「 」 ﹃ ﹄ 〔 〕 … — ～ ﹏ ￥'],
)('describe rule of 匹配中文汉字和中文标点', (item) => {
  it(`Test rules regChineseCharacterAndPoint of '${item}'`, () => {
    expect(item).toMatch(regChineseCharacterAndPoint)
  })
})

describe.each(['哈哈哈', '你好6啊'])('describe rule of 中文和数字', (item) => {
  it(`Test rules regChineseAndNumber of '${item}'`, () => {
    expect(item).toMatch(regChineseAndNumber)
  })
})

describe.each(['我a我1我', 'a对1'])('describe rule of 数字和英文字母组成，并且同时含有数字和英文字母', (item) => {
  it(`Test rules regLetterAndNumber of '${item}'`, () => {
    expect(item).toMatch(regLetterAndNumber)
  })
})

describe.each(['james666', 'haha233hi', 'a', '1'])('describe rule of 数字和字母组成', (item) => {
  it(`Test rules regLetterOrNumber of '${item}'`, () => {
    expect(item).toMatch(regLetterOrNumber)
  })
})

describe.each([12345678])('describe rule of 只包含数字', (item) => {
  it(`Test rules regOnlyNumber of '${item}'`, () => {
    expect(item).toMatch(regOnlyNumber)
  })
})

describe.each(['Russel'])('describe rule of 英文字母', (item) => {
  it(`Test rules regLetters of '${item}'`, () => {
    expect(item).toMatch(regLetters)
  })
})

describe.each(['russel'])('describe rule of 小写英文字母组成', (item) => {
  it(`Test rules regLettersLower of '${item}'`, () => {
    expect(item).toMatch(regLettersLower)
  })
})

describe.each(['ABC'])('describe rule of 大写英文字母', (item) => {
  it(`Test rules regLettersUpper of '${item}'`, () => {
    expect(item).toMatch(regLettersUpper)
  })
})

describe.each(['你好6啊', '@¥()！'])('describe rule of 不能包含字母', (item) => {
  it(`Test rules regNotLetter of '${item}'`, () => {
    expect(item).toMatch(regNotLetter)
  })
})

describe.each(['0.0', '0.09'])('describe rule of 小数', (item) => {
  it(`Test rules regDecimal of '${item}'`, () => {
    expect(item).toMatch(regDecimal)
  })
})

describe.each([1231])('describe rule of 正整数，不包含0', (item) => {
  it(`Test rules regIntegerPositive of '${item}'`, () => {
    expect(item).toMatch(regIntegerPositive)
  })
})

describe.each([-1231])('describe rule of 负整数，不包含0', (item) => {
  it(`Test rules regIntegerNegative of '${item}'`, () => {
    expect(item).toMatch(regIntegerNegative)
  })
})

describe.each([-1231, 123, 0])('describe rule of 整数', (item) => {
  it(`Test rules regInteger of '${item}'`, () => {
    expect(item).toMatch(regInteger)
  })
})

describe.each(['1.23', '-1.01', '0.00'])('describe rule of 浮点数', (item) => {
  it(`Test rules regFloatEasy of '${item}'`, () => {
    expect(item).toMatch(regFloatEasy)
  })
})

describe.each(['1.23', '-1.01'])('describe rule of 浮点数(严格)', (item) => {
  it(`Test rules regFloat of '${item}'`, () => {
    expect(item).toMatch(regFloat)
  })
})

/* 社会相关 */

describe.each(['京AD92035', '甘G23459F', '京AA92035'])('describe rule of 车牌号(新能源)', (item) => {
  it(`Test rules regLicensePlateNE of '${item}'`, () => {
    expect(item).toMatch(regLicensePlateNE)
  })
})

describe.each(['京A00599', '黑D23908'])('describe rule of 车牌号(非新能源)', (item) => {
  it(`Test rules regLicensePlateLegacy of '${item}'`, () => {
    expect(item).toMatch(regLicensePlateLegacy)
  })
})

describe.each([''])('describe rule of 车牌号(新能源+非新能源)', () => {
  describe.each(['京A12345D', '京A00599', '京AD92035', '甘G23459F', '京AA92035'])('examples', (item) => {
    it(`Test rules regLicensePlateAll of '${item}'`, () => {
      expect(item).toMatch(regLicensePlateAll)
    })
  })
  describe.each(['宁AD1234555555', '浙苏H6F681'])('counterExamples', (item) => {
    it(`Test rules regLicensePlateAll of '${item}'`, () => {
      expect(item).not.toMatch(regLicensePlateAll)
    })
  })
})

describe.each(['123456991010193'])('describe rule of 身份证号(1代,15位数字)', (item) => {
  it(`Test rules regIdentityCardV1 of '${item}'`, () => {
    expect(item).toMatch(regIdentityCardV1)
  })
})

describe.each(['12345619991205131x'])('describe rule of 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X', (item) => {
  it(`Test rules regIdentityCardV2 of '${item}'`, () => {
    expect(item).toMatch(regIdentityCardV2)
  })
})

describe.each(['622223199912051311', '12345619991205131x', '123456991010193'])('describe rule of 身份证号, 支持1/2代(15位/18位数字)', (item) => {
  it(`Test rules regIdentityCard of '${item}'`, () => {
    expect(item).toMatch(regIdentityCard)
  })
})

describe.each(['K034169(1)'])('describe rule of 香港身份证', (item) => {
  it(`Test rules regIdentityCardHK of '${item}'`, () => {
    expect(item).toMatch(regIdentityCardHK)
  })
})

describe.each(['5686611(1)'])('describe rule of 澳门身份证', (item) => {
  it(`Test rules regIdentityCardMO of '${item}'`, () => {
    expect(item).toMatch(regIdentityCardMO)
  })
})

describe.each(['U193683453'])('describe rule of 台湾身份证', (item) => {
  it(`Test rules regIdentityCardTWN of '${item}'`, () => {
    expect(item).toMatch(regIdentityCardTWN)
  })
})

describe.each(['s28233515', '141234567', '159203084', 'MA1234567', 'K25345719'])('describe rule of 护照（包含香港、澳门）', (item) => {
  it(`Test rules regPassport of '${item}'`, () => {
    expect(item).toMatch(regPassport)
  })
})

describe.each([6234567890, '6222026006705354217'])('describe rule of 银行卡号', (item) => {
  it(`Test rules regBankCardNo of '${item}'`, () => {
    expect(item).toMatch(regBankCardNo)
  })
})

describe.each([''])('describe rule of 中国的所有省', () => {
  describe.each(['浙江', '台湾'])('examples', (item) => {
    it(`Test rules regChineseProvince of '${item}'`, () => {
      expect(item).toMatch(regChineseProvince)
    })
  })
  describe.each(['哈尔滨'])('counterExamples', (item) => {
    it(`Test rules regChineseProvince of '${item}'`, () => {
      expect(item).not.toMatch(regChineseProvince)
    })
  })
})

describe.each(['008618311006933', '+8617888829981', '19119255642'])('describe rule of 手机号 - 中国(严谨)', (item) => {
  it(`Test rules regMobile of '${item}'`, () => {
    expect(item).toMatch(regMobile)
  })
})

describe.each(['008618311006933', '+8617888829981', '19119255642'])('describe rule of 手机号 - 中国(宽松)', (item) => {
  it(`Test rules regMobileEasy of '${item}'`, () => {
    expect(item).toMatch(regMobileEasy)
  })
})

describe.each(['008618311006933', '+8617888829981', '19119255642'])('describe rule of 手机号 - 中国(最宽松)', (item) => {
  it(`Test rules regMobileEasiest of '${item}'`, () => {
    expect(item).toMatch(regMobileEasiest)
  })
})

describe.each(['0936-4211235', '89076543', '010-12345678-1234'])('describe rule of 座机电话(国内)', (item) => {
  it(`Test rules regTelephone of '${item}'`, () => {
    expect(item).toMatch(regTelephone)
  })
})

describe.each(['G1868', 'D102', 'D9', 'Z5', 'Z24', 'Z17'])('describe rule of 火车车次', (item) => {
  it(`Test rules regTrainNumber of '${item}'`, () => {
    expect(item).toMatch(regTrainNumber)
  })
})

describe.each(['sz000858', 'SZ002136', 'sz300675', 'SH600600', 'sh601155'])('describe rule of 股票代码(A股)', (item) => {
  it(`Test rules regStockCodeA of '${item}'`, () => {
    expect(item).toMatch(regStockCodeA)
  })
})

describe.each(
  ['123456789012345', '1234567890123456', '12345678901234567'],
)('describe rule of 手机机身码(IMEI)', (item) => {
  it(`Test rules regIMEI of '${item}'`, () => {
    expect(item).toMatch(regIMEI)
  })
})

describe.each(['91230184MA1BUFLT44', '92371000MA3MXH0E3W'])('describe rule of 统一社会信用代码', (item) => {
  it(`Test rules regCreditCode of '${item}'`, () => {
    expect(item).toMatch(regCreditCode)
  })
})

describe.each(['91110108772551611J', '911101085923662400'])('describe rule of 统一社会信用代码(宽松匹配)', (item) => {
  it(`Test rules regCreditCodeEasy of '${item}'`, () => {
    expect(item).toMatch(regCreditCodeEasy)
  })
})

describe.each(['734500', '100101'])('describe rule of 邮政编码(中国)', (item) => {
  it(`Test rules regPostalCode of '${item}'`, () => {
    expect(item).toMatch(regPostalCode)
  })
})

describe.each([100, -0.99, 3, 234.32, -1, 900, 235.09, '12,345,678.90'])('describe rule of 数字/货币金额（支持负数、千分位分隔符）', (item) => {
  it(`Test rules regAmount of '${item}'`, () => {
    expect(item).toMatch(regAmount)
  })
})

describe.each([0.99, 8.99, 666])('describe rule of 数字/货币金额 (只支持正数、不支持校验千分位分隔符)', (item) => {
  it(`Test rules regAmountEasy of '${item}'`, () => {
    expect(item).toMatch(regAmountEasy)
  })
})

describe.each([150, 100.5])('describe rule of 考卷分数', (item) => {
  it(`Test rules regExamScore of '${item}'`, () => {
    expect(item).toMatch(regExamScore)
  })
})

describe.each(['葛二蛋', '凯文·杜兰特', '德克·维尔纳·诺维茨基'])('describe rule of 中文姓名', (item) => {
  it(`Test rules regChineseName of '${item}'`, () => {
    expect(item).toMatch(regChineseName)
  })
})

describe.each(['James', 'Kevin Wayne Durant', 'Dirk Nowitzki'])('describe rule of 英文姓名', (item) => {
  it(`Test rules regEnglishName of '${item}'`, () => {
    expect(item).toMatch(regEnglishName)
  })
})

describe.each(['xiaohua_qq'])('describe rule of 用户名校验，4到16位（字母，数字，下划线，减号）', (item) => {
  it(`Test rules regValidAccountV1 of '${item}'`, () => {
    expect(item).toMatch(regValidAccountV1)
  })
})

describe.each(['justin', 'justin1989', 'justin_666'])('describe rule of 帐号是否合法', (item) => {
  it(`Test rules regValidAccountV2 of '${item}'`, () => {
    expect(item).toMatch(regValidAccountV2)
  })
})

describe.each([903013545, 9020304])('describe rule of qq号格式正确', (item) => {
  it(`Test rules regQQ of '${item}'`, () => {
    expect(item).toMatch(regQQ)
  })
})

describe.each(['github666', 'kd_-666'])('describe rule of 微信号', (item) => {
  it(`Test rules regWechatID of '${item}'`, () => {
    expect(item).toMatch(regWechatID)
  })
})

describe.each(['a1@', 'A1@', 'Aa@'])('describe rule of regPasswordV1', (item) => {
  it(`Test rules regPasswordV1 of '${item}'`, () => {
    expect(item).toMatch(regPasswordV1)
  })
})

describe.each(['Kd@curry666'])('describe rule of regPasswordV2', (item) => {
  it(`Test rules regPasswordV2 of '${item}'`, () => {
    expect(item).toMatch(regPasswordV2)
  })
})

