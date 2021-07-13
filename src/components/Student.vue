<template>
  <div>
    <Row>
      <Col span="1">
        <Button type="primary" @click="isShowAddStudentModel = true"
          >添加学生</Button
        >
      </Col>
    </Row>
    <div class="ivu-table">
      <Table border :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="action">
          <Button
            type="primary"
            size="small"
            style="margin-right: 5px"
            @click="showEditStudentModel(index)"
            >修改</Button
          >
          <Button type="error" size="small" @click="removeStudent(index)"
            >删除</Button
          >
        </template>
      </Table>
    </div>

    <!-- 添加用户对话框 -->
    <div>
      <Modal
        v-model="isShowAddStudentModel"
        title="添加学生"
        @on-ok="addStudent"
        @on-cancel="isShowAddStudentModel = false"
      >
        <student-form v-model="addStudentForm"></student-form>
      </Modal>
    </div>
    <!-- 修改用户信息对话框 -->
    <div>
      <Modal
        v-model="isShowEditStudentModel"
        title="修改学生信息"
        @on-ok="editStudent"
        @on-cancel="isShowEditStudentModel = false"
      >
         <student-form v-model="editStudentForm"></student-form>
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Students } from '@/libs/Students'
import StudentForm from '@/components/StudentForm.vue'

@Component({
  name: 'student',
  components: { StudentForm }
})
export default class Student extends Vue {
  isShowAddStudentModel = false;
  isShowEditStudentModel = false;
  editIndex!:number
  // 列定义
  dataColumns = [
    {
      title: '学院',
      key: 'academy'
    },
    {
      title: '班级',
      key: 'class'
    },
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age'
    },
    {
      title: '性别',
      key: 'gender'
    },
    {
      title: '操作',
      slot: 'action',
      width: 300,
      align: 'center'
    }
  ];

  // 取得列定义
  get columns () {
    return this.dataColumns
  }

  /// 表格数据
  data: Array<Students> = [
    {
      id: 1,
      academy: '计算机学院',
      class: 'A班',
      name: '张三',
      age: 22,
      gender: '男'
    }
  ];

  /// 添加学生表单对象
  addStudentForm:Students={
    academy: undefined,
    class: undefined,
    name: undefined,
    age: undefined,
    gender: undefined
  }

  /// 修改学生表单对象
  editStudentForm:Students={
    academy: undefined,
    class: undefined,
    name: undefined,
    age: undefined,
    gender: undefined
  }

  /**
  *添加学生
  */
  addStudent (): void {
    const Form:Students = JSON.parse(JSON.stringify(this.addStudentForm))
    this.data.push(Form)
  }

  /**
   * 修改学生信息
   */
  editStudent ():void{
    const Form:Students = JSON.parse(JSON.stringify(this.editStudentForm))
    this.data.splice(this.editIndex, 1, Form)
  }

  showEditStudentModel (index:number): void {
    this.editIndex = index
    this.isShowEditStudentModel = true
    this.editStudentForm = JSON.parse(JSON.stringify(this.data[index]))
  }

  /**
   * 删除学生
   */
  removeStudent (index: number): void {
    this.data.splice(index, 1)
  }
}
</script>

<style lang="less" scoped>
.ivu-table {
  margin-top: 20px;
}
</style>
