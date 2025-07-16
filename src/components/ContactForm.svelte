<script>
    import SectionLabel from "./SectionLabel.svelte";
    import { sendMessage } from "../services/contactService.js";

    export let label = {};
    let name = "";
    let email = "";
    let message = "";
    let errors = {};
    let submitted = false;
    let sending = false;

    function validate() {
        errors = {};
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.email = "Please enter a valid email";
        }
        if (message.trim().length < 10) {
            errors.message = "Message must be at least 10 characters";
        }
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit() {
        if (!validate()) return;

        sending = true;
        await sendMessage({ name, email, message });
        sending = false;
        submitted = true;

        name = "";
        email = "";
        message = "";

        setTimeout(() => {
            submitted = false;
        }, 2000);
    }
</script>

<section id="contact" class="contact-section position-relative w-75 mx-auto">
    <SectionLabel number={label.number} title={label.title} />
    <div class="contact-card container shadow p-5">
        {#if submitted}
            <div class="alert alert-light text-center rounded-0">
                Message has been sent successfully.
            </div>
        {/if}

        <form on:submit|preventDefault={handleSubmit}>
            <div class="form-floating mb-4">
                <input
                    id="name"
                    class="form-control border-0 border-bottom rounded-0"
                    placeholder="Name"
                    bind:value={name}
                />
                <label for="name">Name (optional)</label>
            </div>

            <div class="form-floating mb-1">
                <input
                    id="email"
                    type="email"
                    class="form-control border-0 border-bottom rounded-0"
                    placeholder="email"
                    bind:value={email}
                />
                <label for="email">Email</label>
            </div>
            {#if errors.email}
                <div class="text-danger small mb-3 ms-2">{errors.email}</div>
            {/if}

            <div class="form-floating mb-1 mt-2">
                <textarea
                    id="message"
                    class="form-control border-0 border-bottom rounded-0"
                    placeholder="message"
                    style="height: 8rem; resize: none"
                    bind:value={message}
                ></textarea>
                <label for="message">Message</label>
            </div>
            {#if errors.message}
                <div class="text-danger small mb-3 ms-2">{errors.message}</div>
            {/if}

            <div class="text-center mt-4">
                <button
                    class="btn btn-outline-secondary rounded-0 shadow-sm px-5"
                    disabled={sending}
                >
                    {sending ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    </div>
</section>

<style>
    .contact-section {
        padding-top: 10rem;
    }

    .form-control:focus {
        box-shadow: none;
    }

    @media (max-width: 650px) {
        .contact-section {
            width: 100% !important;
        }

        .contact-card {
            width: 95% !important;
        }
    }
</style>
