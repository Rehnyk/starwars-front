<script>
  export let number = "";
  export let title = "";
</script>

<div
  class="section-label position-absolute d-flex flex-column align-items-start"
>
  <span class="label-number text-muted small">{number}</span>
  <h2 class="label-title text-uppercase fs-5">{title}</h2>
</div>

<style>
  .section-label {
    top: 5rem;
    left: 10vw;
    z-index: 100;
  }
</style>
