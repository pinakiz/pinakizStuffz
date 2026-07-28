/* ================================================================
   ARTICLES DATA
   One entry per article. This powers the sidebar list and the
   "From the blog" / "Paperself" cards on the home page across every
   page of the site (they all load this same file).

   Adding a new article takes two steps:
     1. Copy article-template.html, fill it in, save it as its own
        file (e.g. blog-my-new-post.html). That file IS its URL.
     2. Add one object to the array below, with "url" pointing at
        the file you just made. It will then show up automatically
        in the sidebar and on the home page.

   Fields:
     id       – unique short id (not used in the URL, just internal)
     url      – the actual filename people will visit
     section  – 'blog' or 'paper'
     title    – shown in the nav and on cards
     tag      – small label on the card (e.g. "Journal", "Draft")
     excerpt  – one line shown under the title on the home card
   ================================================================ */
const ARTICLES = [
  {
    id: 'blog-1', url: 'blog-on-slow-mornings.html', section: 'blog',
    title: 'On Slow Mornings', tag: 'Journal',
    excerpt: 'A small ritual, and why I\'ve stopped rushing it'
  }

  /* --- Add new articles below this line --- 
  {
    id: 'blog-4', url: 'blog-your-new-post.html', section: 'blog',
    title: 'Your New Post Title', tag: 'Journal',
    excerpt: 'One line summary shown on the home card'
  },
  */
];
