<script>
  import MainButton from "./MainButton.svelte";
</script>

<section
  class="cover-section position-relative text-white text-center d-flex justify-content-center align-items-center"
>
  <div class="cover-content position-relative text-uppercase">
    <h1>Star Wars</h1>
    <p class="fs-6 text-end me-1">By Renata Hnyková</p>
    <MainButton label="About Us" link="#about" />
  </div>
</section>

<style>
  .cover-section {
    background: var(--cover-img) no-repeat center center / cover;
    min-height: 30rem;
  }

  .cover-content h1 {
    font-size: 4.5rem;
    margin: 0;
  }

  .cover-content p {
    margin-top: -0.7rem;
  }

  .cover-section::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 5rem;
    background: #ffffff;
    clip-path: polygon(0 0, 35% 95%, 100% 0, 100% 100%, 0% 100%);
  }
</style>
