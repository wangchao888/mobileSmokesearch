import Mock from 'mockjs'
var Random = Mock.Random
const category = Mock.mock({
    'aside|14':[{
      'title':'@cname',
      'id':'@id',
      'list|60':[{
        'title':'@last',
        'name':'@cname',
        'price|99-1000':100,
        'imgPath':Random.image('2000x2000','#5169b4','#FFF','png',''),

      }]
    }]
  });    
export {category}