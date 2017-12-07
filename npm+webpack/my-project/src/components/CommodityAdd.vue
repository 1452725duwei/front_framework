<template>
	<el-row :gutter="20">
		<el-col :span="10">
			<el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
				<el-form-item prop="email" label="商品名称" :rules="[
				      { required: true, message: '请输入商品名称', trigger: 'blur' }
				    ]">
					<el-input v-model="dynamicValidateForm.email"></el-input>
				</el-form-item>
				<el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :label="'属性' + index" :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
				      required: true, message: '属性不能为空', trigger: 'blur'
				    }">
					<el-input v-model="domain.value"></el-input>
					<el-button @click.prevent="removeDomain(domain)">删除</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
					<el-button @click="addDomain">新增属性</el-button>
					<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				dynamicValidateForm: {
					domains: [{
						value: ''
					}],
					email: ''
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						this.$message({
							type: 'success',
							message: '提交成功！'
						});
						this.$router.push('/commodity')
					} else {
						this.$message({
							type: 'info',
							message: '提交失败！'
						});
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			removeDomain(item) {
				var index = this.dynamicValidateForm.domains.indexOf(item)
				if(index !== -1) {
					this.dynamicValidateForm.domains.splice(index, 1)
				}
			},
			addDomain() {
				this.dynamicValidateForm.domains.push({
					value: '',
					key: Date.now()
				});
			}
		}
	}
</script>

<style>

</style>