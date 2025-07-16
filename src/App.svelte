
<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import siteData from './data/siteData.json';
  import Navbar from './components/Navbar.svelte';
  import Cover from './components/Cover.svelte';
  import About from './components/About.svelte';
  import Films from './components/Films.svelte';
  import Comments from './components/CommentSection.svelte';
  import ContactForm from './components/ContactForm.svelte';
  import Map from './components/Map.svelte';
  import Footer from './components/Footer.svelte';
  import ScrollToTop from "./components/ScrollToTop.svelte";


  const { labels, about, films, comments } = siteData;
</script>

<main>
  <Navbar />
  <Cover />
  <About label={labels.about} aboutData={about} />
  <Films label={labels.films} filmsData={films} />
  <Comments label={labels.comments} commentsData={comments} />
  <ContactForm label={labels.contact} />
  <Map />
  <Footer />
  <ScrollToTop />
</main>

