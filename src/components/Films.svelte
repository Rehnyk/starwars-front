<script>
  import SectionLabel from "./SectionLabel.svelte";
  export let label = {};
  export let filmsData = [];
</script>

<section id="films" class="films-section position-relative w-75 mx-auto">
  <SectionLabel number={label.number} title={label.title} />

  <div class="films-container">
    <table class="table table-borderless">
      <tbody>
        {#each filmsData as film, index}
          <tr>
            <td>{index + 1}.</td>
            <td class="film-name-col">{film.name}</td>
            <td>{film.director}</td>
            <td class="text-end">{film.date}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<style>
  .films-section {
    padding-top: 10rem;
  }

  .films-container {
    width: 80%;
    margin: 0 auto;
  }

  .table td {
    padding: 0.2rem 0;
  }

  .film-name-col {
    max-width: 120px;
  }

  @media (max-width: 900px) {
    .films-container {
      width: 100%;
      padding: 1rem;
    }

    td {
      padding: 0.8rem 0.6rem 0.8rem 0;
    }
  }
</style>
