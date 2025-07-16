<script>
    import { onMount } from "svelte";
    let isVisible = false;

    const handleScroll = () => {
        isVisible = window.scrollY > 2000;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "auto" });
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

{#if isVisible}
    <button
        class="scroll-to-top btn btn-light rounded-circle position-fixed color-muted bottom-0 end-0 m-4 shadow"
        on:click={scrollToTop}
        aria-label="Scroll to top"
    >
        <i class="fa-solid fa-arrow-up"></i>
    </button>
{/if}

<style>
    .scroll-to-top {
        color: #777777;
        border: solid 1px #e3e3e3;
        width: 3rem;
        height: 3rem;
        font-size: 1.5rem;
        z-index: 999;
    }
    .scroll-to-top:hover {
        background-color: #e7e7e7;
    }

</style>
