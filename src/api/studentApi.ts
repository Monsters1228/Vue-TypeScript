import { Students } from '@/libs/Students'
import request from './request'

/**
 * 添加学生
 * @param data
 * @returns
 */
export const addStudent = (data:Students):any => {
  return request.post('/api/create', data)
}

/**
 * 修改学生信息
 * @param data
 * @returns
 */
export const editStudent = (data:Students):any => {
  return request.post('/api/edit', data)
}
