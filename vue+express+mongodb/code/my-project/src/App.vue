<template>
	<div>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
		<el-pagination small layout="prev, pager, next" :total="50" @current-change="change">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		methods: {
			change(e) {
				this.$http({
				params:{
					'pageNum':e-1,
					'pageSize':5,
				},
				method: 'GET',
				url: 'http://localhost:3000/users'
			}).then(function(response) {
				this.tableData = response.body;
				console.log(response);
			}, function(error) {
				console.log(error);
			});
			}
		},
		data() {
			return {
				tableData: [],
			}
		},
		mounted() {
			this.change(1);
		},
	}
</script>