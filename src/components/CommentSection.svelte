<script>
  import { onMount } from "svelte";
  import SectionLabel from "./SectionLabel.svelte";

  export let label = {};
  export let commentsData = [];

  let userComments = [];
  let commentText = "";
  let error = "";

  let showAll = false;
  const visibleCount = 2;

  $: comments = [...userComments, ...commentsData].sort(
    // @ts-ignore
    (a, b) => new Date(b.time) - new Date(a.time),
  );

  $: visibleComments = showAll ? comments : comments.slice(0, visibleCount);

  onMount(() => {
    const stored = localStorage.getItem("userComments");
    userComments = stored ? JSON.parse(stored) : [];
  });

  function addComment() {
    error = "";
    if (commentText.trim().length < 3) {
      error = "At least 3 characters required";
      return;
    }

    const newComment = {
      time: new Date().toISOString(),
      text: commentText.trim(),
    };

    userComments = [newComment, ...userComments];
    localStorage.setItem("userComments", JSON.stringify(userComments));
    commentText = "";
  }

  function formatDate(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  }
</script>

<section id="comments" class="comments-section position-relative w-75 mx-auto">
  <SectionLabel number={label.number} title={label.title} />

  <div class="container">
    <div class="card p-5 comment-input-card shadow rounded-0 border-0">
      <div class="d-flex align-items-center">
        {#if error}
          <small class="text-danger error-text position-absolute"
            >At least 3 characters required</small>
        {/if}
        <textarea
          name="write-comment"
          class="comment-textarea form-control border-0 border-bottom rounded-0 shadow-none mt-4"
          bind:value={commentText}
          placeholder="Write your comment here ..."
          on:input={() => (error = "")}
        ></textarea>
        <button
          class="btn comment-send-btn text-muted"
          on:click={addComment}
          aria-label="send comment"
        >
          <i class="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
    </div>

    <h3 class="text-uppercase fs-5 text-muted py-4 m-4">
      Comments: {comments.length}
    </h3>

    <div class="comments-list">
      {#each visibleComments as comment}
        <div class="comment-card p-4 mb-5 shadow">
          <small class="text-muted comment-date"
            >{formatDate(comment.time)}</small
          >
          <p class="mt-3 mb-0 comment-text">{comment.text}</p>
        </div>
      {/each}
    </div>

    {#if comments.length > visibleCount}
      <div class="text-center">
        <button
          class="btn btn-outline-secondary rounded-0 shadow-sm"
          on:click={() => (showAll = !showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    {/if}
  </div>
</section>

<style>
  .comments-section {
    padding-top: 10rem;
  }

  .comment-textarea {
    resize: none;
  }

  .comment-send-btn {
    margin-left: -3rem;
    font-size: 3rem;
  }

  .comment-send-btn:hover {
    color: #9e9e9e !important;
  }

  .error-text {
    top: 2.5rem;
    left: 3.5rem;
    font-size: 0.8rem;
  }
</style>
