<template>
<span>
    <Form ref="formValidate" :model="formValidate" :label-width="80">
        <FormItem label="学院" prop="academy">
            <Input v-model="formValidate.academy" placeholder="Enter your academy"></Input>
        </FormItem>
        <FormItem label="班级" prop="class">
            <Input v-model="formValidate.class" placeholder="Enter your class"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>
        <FormItem label="年龄" prop="age">
            <Input v-model="formValidate.age" placeholder="Enter your age"></Input>
        </FormItem>
        <FormItem label="性别" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="男">男</Radio>
                <Radio label="女">女</Radio>
            </RadioGroup>
        </FormItem>
    </Form>
</span>
</template>

<script lang="ts">
import { Students } from '@/libs/Students'
import { Component, Vue, Model } from 'vue-property-decorator'

@Component({
  name: 'student-form'
})
export default class StudentForm extends Vue {
    @Model(
      'addStudent',
      {
        type: Object
      }
    )
    formValidate?:Students
}
</script>

<style lang="less" scoped>

</style>
