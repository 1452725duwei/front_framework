<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="block" style="margin:20px 10px 40px 10px;">
					<el-carousel height="200px">
						<el-carousel-item v-for="item in 4" :key="item">
<!--						<img src="../assets/logo.png" class="image" width="200px" height="200px">-->
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
			<el-col :span="20" :offset="2">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column prop="date" label="日期" sortable width="180">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="180">
					</el-table-column>
					<el-table-column prop="address" label="地址" :formatter="formatter">
					</el-table-column>
					<el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" filter-placement="bottom-end">
						<template slot-scope="scope">
							<el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" @click="dialogFormVisible = true">编辑</el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, tableData)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="姓名" :label-width="formLabelWidth">
					<el-input v-model="form.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="地址" :label-width="formLabelWidth">
					<el-input v-model="form.address" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="标签" :label-width="formLabelWidth">
					<el-select v-model="form.region" placeholder="请选择标签">
						<el-option label="家" value="home"></el-option>
						<el-option label="公司" value="company"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		name: 'User',
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: 'angle',
					address: '上海市杨浦区四平路',
					tag: '家'
				}, {
					date: '2016-05-04',
					name: 'angle',
					address: '上海市杨浦区四平路',
					tag: '公司'
				}, {
					date: '2016-05-01',
					name: 'angle',
					address: '上海市杨浦区四平路',
					tag: '家'
				}, {
					date: '2016-05-03',
					name: 'angle',
					address: '上海市杨浦区四平路',
					tag: '公司'
				}],
				dialogTableVisible: false,
				dialogFormVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '120px'
			}
		},

		methods: {
			formatter(row, column) {
				return row.address;
			},
			filterTag(value, row) {
				return row.tag === value;
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, rows) {
				//		        rows.splice(index, 1);
				this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index, 1)
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		}
	}
</script>

<style>
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	
	.el-col {
		border-radius: 4px;
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>