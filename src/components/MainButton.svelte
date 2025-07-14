<script>
  export let label = "";
  export let link = "#";
</script>

<a
  href={link}
  class="btn d-inline-flex align-items-center text-uppercase text-white fw-medium p-3 shadow gap-5 main-btn rounded-0"
>
  {label}
  <span class="arrow ms-5"></span>
</a>

<style>
  .main-btn {
    background-color: var(--main-btn-color);
  }

  .main-btn:hover {
    background-color: var(--main-btn-color-hover);
  }

  .main-btn .arrow {
    width: 0;
    height: 0;
    border-left: 6px solid #ffffff;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }
</style>
