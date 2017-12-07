<template>
<div>
	<p>
		asda
		asdas
	</p>
</div>
	
</template>
<script>
	export default {
		data() {
			return {
				formInline: {
					id: '12987122',
					name: '好滋好味鸡蛋仔',
					category: '江浙小吃、小吃零食',
					desc: '荷兰优质淡奶，奶香浓而不腻',
					address: '上海市杨浦区四平路',
					shop: 'Angle的店',
					shopId: '10333'
				}
			}
		},
		methods: {
			onSubmit(formInline) {
				console.log(formInline);
						this.$message({
						type: 'success',
						message: '提交成功！'
					});
						this.$router.push('/food')
			},
		}
	}
</script>

<!--
{
					
				}-->