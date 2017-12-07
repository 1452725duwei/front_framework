<template>
	<div>
		<el-row>
			<el-col :span="6" v-for="(o, index) in 5" :key="o" style="margin:20px;">
				<el-card :body-style="{ padding: '0px' }">
					<img src="../assets/yuri5.jpg" class="image">
					<div style="padding: 14px;">
						<span>好吃的汉堡</span>
						<div class="bottom clearfix">
							<introduction class="introduction">introduction</introduction>
							<el-button type="text" class="button" @click="jump()">查看</el-button>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<style>
	.introduction {
		font-size: 13px;
		color: #999;
	}
	
	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}
	
	.button {
		padding: 0;
		float: right;
	}
	
	.image {
		width: 100%;
		display: block;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
</style>

<script>
	export default {
		name: 'Food',
		data() {
			return {
				currentDate: new Date()
			};
		},
		methods: {
		jump() {
			this.$router.push('/food_detail')
		}
	}
	}
</script>