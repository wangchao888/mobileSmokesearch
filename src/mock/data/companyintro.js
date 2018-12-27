import Mock from 'mockjs'
var Random = Mock.Random
const companyintro = Mock.mock({
    'list|5':[{
        'imgPath':Random.image('200x200', '#e2f630', '#333', 'png',''),
        'id':'@id'
      }],
  });    
export {companyintro}