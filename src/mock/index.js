import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { category } from './data/category'
import { search } from './data/search'
import { index } from './data/index'
import { detail } from './data/detail'
import { indexes } from './data/indexes'
import { contrast } from './data/contrast'
import { application } from './data/application'
import { brandlist } from './data/brandlist'

export default {
    init() {
    let mock = new MockAdapter(axios)
       mock.onPost('/category').reply(arg => { 
           let { currentPage, pageSize } = JSON.parse(arg.data)       
            return new Promise((resolve, reject) => {
               resolve([200, { code: 200, msg: '请求成功',data:category}])
            })
        }),
        mock.onPost('/search').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:search}])
             })
         }),
         mock.onPost('/index').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:index}])
             })
         })
         mock.onPost('/indexes').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:indexes}])
             })
         })
         mock.onPost('/detail').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:detail}])
             })
         })  
         mock.onPost('/contrast').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:contrast}])
             })
         })  
         mock.onPost('/application').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:application}])
             })
         }) 
         mock.onPost('/brandlist').reply(arg => { 
            let { currentPage, pageSize } = JSON.parse(arg.data)       
             return new Promise((resolve, reject) => {
                resolve([200, { code: 200, msg: '请求成功',data:brandlist}])
             })
         })  
    }
}