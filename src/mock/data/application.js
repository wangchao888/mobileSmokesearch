import Mock from 'mockjs'
var Random = Mock.Random
const application = Mock.mock({
    'list|20':[{
        'title':'@first',
        'imgPath':Random.image('400x400', '#e2f630', '#333', 'png',''),
        'price|99-1000':100,
        'intro': Random.paragraph(),
        'id':'@id'
      }],
  });    
export {application}