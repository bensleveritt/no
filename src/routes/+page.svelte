<script>
	import reasons from '$lib/reasons.json';
	let reason = $state('');

	function pickRandomReason() {
		reason = reasons[Math.floor(Math.random() * reasons.length)];
	}

	$effect(() => {
		pickRandomReason();
	});
</script>

<svelte:head>
	<title>no</title>
	<link
		rel="icon"
		type="image/svg+xml"
		href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='white'/%3E%3Ctext x='50%' y='50%' text-anchor='middle' dominant-baseline='central' font-family='sans-serif' font-size='32' fill='black'%3Eno%3C/text%3E%3C/svg%3E"
	/>
</svelte:head>

<main>
	<button class="reason-btn" onclick={pickRandomReason} aria-label="Show another reason">
		<span class="reason-text">{reason}</span>
	</button>
</main>

<a
	class="credit-link"
	href="https://github.com/hotheadhacker/no-as-a-service"
	target="_blank"
	rel="noopener noreferrer"
>
	Lazily built with no-as-a-service
</a>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fafbfc;
		height: 100vh;
		width: 100vw;
		border: 2rem solid white;
		box-sizing: border-box;
	}

	.reason-btn {
		display: flex;
		flex: 1;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		outline: none;
	}
	.reason-btn:focus-visible {
		outline: 2px solid #222;
		outline-offset: 4px;
	}

	.reason-text {
		font-size: clamp(2rem, 5vw, 4rem);
		font-weight: 500;
		text-align: center;
		max-width: 900px;
		color: #222;
		line-height: 1.2;
		word-break: break-word;
		padding: 0 2rem;
	}

	.credit-link {
		position: fixed;
		bottom: 0.5rem;
		left: 0;
		right: 0;
		text-align: center;
		color: #888;
		font-size: 0.875rem;
		text-decoration: none;
		opacity: 0.7;
		transition: opacity 0.2s;
		z-index: 10;
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}
	.credit-link:hover {
		opacity: 1;
		color: #222;
		text-decoration: underline;
	}
</style>
