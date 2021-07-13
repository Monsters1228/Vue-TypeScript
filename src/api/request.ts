import axios from 'axios'
const service = axios.create({
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    delete: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  },
  timeout: 3000
})
export default service
