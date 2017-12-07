<template>
	<el-container style="height: 100%; border: 1px solid #eee">
		<el-header style="text-align: right; font-size: 12px">
			<span>你好，Angle</span>
		</el-header>
		<el-container>
			<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
				<el-menu :default-openeds="['1', '2', '3']" router>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>列表</template>
						<el-menu-item-group>
							<el-menu-item index="user">用户列表</el-menu-item>
							<el-menu-item index="commodity">商品列表</el-menu-item>
							<el-menu-item index="food">食品列表</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>新建</template>
						<el-menu-item-group>
							<el-menu-item index="activity_add">新建活动</el-menu-item>
							<el-menu-item index="commodity_add">新建商品</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-menu"></i>详情</template>
						<el-menu-item-group>
							<el-menu-item index="food_detail">食品详情</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</el-container>
</template>
<style>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	
	.el-aside {
		color: #333;
	}
</style>

<script>
	export default {
		data() {
			
		}
	};
</script>