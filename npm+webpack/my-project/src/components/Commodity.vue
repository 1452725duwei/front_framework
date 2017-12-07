<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="24">

				<div style="margin:20px 10px 40px 10px;">
					<el-carousel :interval="4000" type="card">
						<el-carousel-item :key="item">
							<!--<img src="../assets/bg1.jpg" class="image" height="2000px" width="1333px">-->
						</el-carousel-item>
						<el-carousel-item :key="item">
							<!--<img src="../assets/bg1.jpg" class="image" height="2000px" width="1333px">-->
						</el-carousel-item>
						<el-carousel-item :key="item">
							<!--<img src="../assets/bg1.jpg" class="image" height="2000px" width="1333px">-->
						</el-carousel-item>
						<el-carousel-item :key="item">
							<!--<img src="../assets/bg1.jpg" class="image" height="2000px" width="1333px">-->
						</el-carousel-item>
					</el-carousel>
				</div>
			</el-col>
			<el-col :span="20" :offset="2">
				<el-table :data="tableData" style="width: 100%">
					<el-table-column type="expand">
						<template slot-scope="props">
							<el-form label-position="left" inline class="demo-table-expand">
								<el-form-item label="商品名称">
									<span>{{ props.row.name }}</span>
								</el-form-item>
								<el-form-item label="所属店铺">
									<span>{{ props.row.shop }}</span>
								</el-form-item>
								<el-form-item label="商品 ID">
									<span>{{ props.row.id }}</span>
								</el-form-item>
								<el-form-item label="店铺 ID">
									<span>{{ props.row.shopId }}</span>
								</el-form-item>
								<el-form-item label="商品分类">
									<span>{{ props.row.category }}</span>
								</el-form-item>
								<el-form-item label="店铺地址">
									<span>{{ props.row.address }}</span>
								</el-form-item>
								<el-form-item label="商品描述">
									<span>{{ props.row.desc }}</span>
								</el-form-item>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column label="商品 ID" prop="id">
					</el-table-column>
					<el-table-column label="商品名称" prop="name">
					</el-table-column>
					<el-table-column label="描述" prop="desc">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="120">
						<template slot-scope="scope">
							<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
								移除
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>
<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	
	.demo-table-expand {
		font-size: 0;
	}
	
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>
<script>
	export default {
		name: 'Commodity',
		methods: {
			deleteRow(index, rows) {
					this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					rows.splice(index, 1);
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}
		},
		data() {
			return {
				tableData: [{
					id: '12987122',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市杨浦区四平路',
					shop: 'Angle的店',
					shopId: '10333'
				}, {
					id: '12987123',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市杨浦区四平路',
					shop: 'Angle的店',
					shopId: '10333'
				}, {
					id: '12987125',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市杨浦区四平路',
					shop: 'Angle的店',
					shopId: '10333'
				}, {
					id: '12987126',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市杨浦区四平路',
					shop: 'Angle的店',
					shopId: '10333'
				}]
			}
		}
	}
</script>