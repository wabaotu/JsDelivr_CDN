
var dcys = {
	
	'advs': {
		'head': '本插件由『蓝猫资源网』提供 >>> 官方网站：<a href="//www.lmzy.cc/">www.lmzy.cc</a> >>> 广告投放 >> 咨询QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=188810296&site=qq&menu=yes" class="layui-badge layui-bg-red">188810296</a> >>>',
		'tips': '',
		'rows': [{
			'name': '<font color="red">蓝猫解析系统</font>',
			'rema': '<font color="blue">官方解析</font>',
			'urls': 'https://vip.julong.pub/',
			'tips': '<span class="layui-badge layui-bg-red">吐血推荐</span>',
			'tip1': '<font color="blue">蓝猫官方采集</font>',
			'url1': '//www.lmzy.cc',
			'tip2': '广告位招租',
			'url2': 'http://www.lmzy.cc',
			'tip3': '广告位招租',
			'url3': 'http://www.lmzy.cc',
			'tip4': '广告位招租',
			'url4': 'https://www.aliyun.com/minisite/goods?userCode=99999'
		}, {
			'name': '采集常见问题',
			'rema': '无法播放等问题',
			'urls': 'http://www.lmzy.cc/cjwt/',
			'tips': '<span class="layui-badge layui-bg-green">常见问题</span>',
			'tip1': '<font color="red">采集无法绑定分类的解决办法</font>',
			'url1': 'http://www.lmzy.cc/cjwt/5.html',
			'tip2': '<font color="red">V10定时任务自动采集教程</font>',
			'url2': 'http://www.lmzy.cc/cjwt/4.html',
			'tip3': '采集后没有播放数据的解决办法',
			'url3': 'http://www.lmzy.cc/cjwt/6.html',
			'tip4': '采集后无法播放的解决办法',
			'url4': 'http://www.lmzy.cc/cjwt/8.html'
		}]
	},
	
	
	
	
	
    
     'bizh': {
        'head': '官方直链',
        'tips': '<font color="red">采集全部资源请先把独立资源播放器配置了</font>',
        'rows': [ {
            'name': '全部资源',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/?ac=list',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            
        }]
    },
	    'bigs': {
        'head': '独立资源',
        'tips': '请先点播放配置',
        'rows': [{
            'flag': 'qq',
            'name': '腾讯视频',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/qq/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '腾讯视频,qq,999999,1'
        }, {
            'flag': 'youku',
            'name': '优酷视频',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/youku/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '优酷视频,youku,99998,1'
        }, {
            'flag': 'qiyi',
            'name': '奇艺视频',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/qiyi/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '奇艺视频,qiyi,99997,1'
        }, {
            'flag': 'mgtv',
            'name': '芒果视频',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/mgtv/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '芒果视频,mgtv,99996,1'
        }, {
            'flag': 'bilibili',
            'name': '哔哩哔哩',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/bilibili/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '哔哩哔哩,bilibili,99996,1'
        }, { 
            'flag': 'sohu',
            'name': '搜狐视频',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/sohu/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '搜狐视频,sohu,99996,1'
        }, {
            'flag': 'letv',
            'name': '乐视视频',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/letv/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': '乐视视频,letv,99996,1'
        }, {
            'flag': 'pptv',
            'name': 'PPTV',
            'rema': '官链',
            'apis': 'http://cms.lmzy.cc/api.php/provide/vod/from/pptv/',
            'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
            'coll': 'PPTV,pptv,99996,1'
        }
		
		]
    },
    'm3u8': {
        'head': '切片资源专区',
        'tips': '<span style="font-size:6px;"><font color="red" class="dplayer">推荐采集本专区，全部m3u8直链地址，自建播放器可避免第三方解析接口加载广告或者流量劫持</font></span>',
        'rows': [
         {
            'flag': 'bajie',
            'name': '八戒资源',
            'rema': 'M3U8',
            'apis': 'http://cj.bajiecaiji.com/inc/seabjm3u8.php',
            'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
            'coll': '八戒云播,bjm3u8,99995,1'
        },{
            'flag': 'kuaibo',
            'name': '快播资源',
            'rema': 'M3U8',
            'apis': 'http://www.kuaibozy.com/api.php/provide/vod/from/kbm3u8/at/xml/',
            'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
            'coll': '快播,kbm3u8,99995,1'
        },{
            'flag': 'baidu',
            'name': '百度资源',
            'rema': 'M3U8',
            'apis': 'https://m3u8.apibdzy.com/api.php/provide/vod/from/kbm3u8/at/xml/',
            'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
            'coll': '百度云播,dbm3u8,99994,1'
        }
		,{
            'flag': 'leduo',
            'name': '乐播资源',
            'rema': 'M3U8',
            'apis': 'https://api.leduozy.com/inc/api.php',
            'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
            'coll': '乐播云播,leduo,99993,1'
        },{
            'flag': 'tkm3u8',
            'name': '天空资源',
            'rema': 'M3U8',
            'apis': 'https://m3u8.tiankongapi.com/api.php/provide/vod/at/xml/',
            'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
            'coll': '天空云播,tkm3u8,99993,1'
        },{
            'flag': 'juhem3u8',
            'name': '聚合资源',
            'rema': 'M3U8',
            'apis': 'https://cj.cbi88.com/inc/api_juhem3u8.php',
            'tips': '<span class="layui-badge layui-bg-green">正常采集</span>',
            'coll': '聚合云播,juhem3u8,99993,1'
        }]
    },
//   'news': {
//        'head': '影视资讯专区',
//        'tips': '影视新闻、明星八卦、文章等资讯',
//        'rows': [{
 //           'flag': '7K',
//            'name': '7K资源网',
//            'rema': '影视资讯',
//            'apis': 'https://zy.7kjx.com/zx.json',
 //           'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
 //           'coll': '最新资源采集插件,mkm3u8,99991,1'
  //      }]
 //   },
 // 'star': {
//        'head': '明星资源专区',
 ///       'tips': '<font color="red">采集前，先在系统，采集参数配置，演员采集设置，数据状态设置为“已审”</font>',
 //       'rows': [{
 //           'flag': '7k',
  //          'name': '7K资源',
 //           'rema': '明星资料库',
   //         'apis': 'https://zy.7kjx.com/mx.json',
  //          'tips': '<span class="layui-badge layui-bg-green">国内节点</span>',
  //          'coll': '最新资源采集插件,mkm3u8,99990,1'
  //      }]
  //  },
};
document.write('<script type="text/javascript" src="//"></script>');
