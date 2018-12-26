import Mock from 'mockjs'
var Random = Mock.Random
const contrast = Mock.mock({
    'list|20':[{
        'title':'@last',
        'start':Random.time('HH:mm'),
        // 在end数组里随机取一个
        'imgPath':Random.image('320x200', '#f5f2a5', '#333', 'png', ''),
        'id':'@id',
        'price|99-1000':100,
        'end|1':['2017/09/23 02:00:00','2017/09/23 11:00:00','2017/09/23 14:00:00','2017/09/23 13:00:00'],
    }],
  });    
export {contrast}