<script>
	import star from '../../assets/images/star.svg';
	import clsx from 'clsx';
	export let blur = false;
</script>

<div>
	<img {...$$props} src={star} alt="star" class={clsx($$props.class, blur ? 'blur' : '')} />
</div>

<style>
	.blur {
		filter: blur(1.125px);
	}
</style>
