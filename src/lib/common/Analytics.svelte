<script>
    import { page } from "$app/stores";

    $: {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'G-C4ENDL4PL0', {
                page_title: document.title,
                page_path: $page.url.href
            })
        }
    }
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-C4ENDL4PL0"></script>
    <script> 
        window.dataLayer = window.dataLayer || []; 
        function gtag(){
            dataLayer.push(arguments)
        } 
        gtag('js', new Date());
        gtag('config', 'G-C4ENDL4PL0'); 
    </script>
</svelte:head>