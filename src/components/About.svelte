<script>
  import SectionLabel from "./SectionLabel.svelte";
  import MainButton from "./MainButton.svelte";

  export let aboutData = [];
  export let label = {};
  
</script>

<section id="about" class="about-section position-relative w-75 mx-auto">
  <SectionLabel number={label.number} title={label.title} />

  <div class="about-box container shadow p-5">
    <div class="row justify-content-between g-4">
      {#each aboutData as item}
        <div class="col-12 col-md-4 col-lg-3 text-start">
          <div class="text-center mb-3">
            <img src={item.image} alt={item.alt} class="about-img" />
          </div>
          <h3 class="h6 text-uppercase mb-2 min-heading-height text-center text-md-start">{item.heading}</h3>
          <p class="text-secondary">{item.text}</p>
        </div>
      {/each}
    </div>

    <div class="d-flex justify-content-center mt-4">
      <MainButton label="Contact Us" link="#contact" />
    </div>
  </div>
</section>

<style>
  .about-section {
    margin-top: 5rem;
    padding-top: 10rem; 
  }

  .about-img {
    height: 5rem;
    object-fit: contain;
  }

  .min-heading-height {
    min-height: 2.5rem;
  }

  @media (max-width: 650px) {
    .about-section {
      width: 100% !important;
    }

    .about-box {
      width: 95% !important;
    }
  }
</style>
