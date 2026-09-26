# RCAI — Research Committee (AI & DS) · Research Venues Hub

A clean, fast, **static website** that shares information about AI & Data Science
**research venues** — conferences, journals and calls for papers — for students and faculty.
It is built for **GitHub Pages** and needs **no server, no database and no build step**.

> **Purpose:** information sharing only. RCAI does **not** accept or process paper
> submissions. All submissions are made on each venue's official website.

---

## What's inside

| File | What it is | Do you edit it? |
|------|------------|-----------------|
| `index.html` | The whole site (home + all sub-pages) | Rarely |
| `styles.css` | Colours, fonts, layout (FAST-NUCES palette) | Only to restyle |
| `app.js` | Search, filters, deadline countdowns, routing | No |
| **`data.js`** | **Conferences, journals, publications & blog** | **Yes — this is the one you edit** |
| `README.md` | This guide | — |

The site has a home page and these sub-pages, all reachable from the top menu:
**Conferences**, **Call for Papers**, **Sub-fields** (with a page per AI/DS area — each
sub-field page still lists its own conferences and journals),
**Faculty** (research directory — find a supervisor by area),
**Publications** (latest work by students & faculty), **Blog** (articles that open into
their own full page), **Downloads** (LaTeX/Overleaf templates for journals & conferences),
and **About**. Each venue card opens a detail view with the full
information (name, country, host university, publication venue, close date and the
official link). Everything can be filtered by region, sub-field and deadline status,
and searched by name/country/host.

---

## 1) Put it online with GitHub Pages (one time, ~3 minutes)

1. Create a new repository on GitHub, e.g. `rcai-venues`.
2. Upload **all the files in this folder** to the repository
   (drag-and-drop works: *Add file → Upload files*).
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
6. Wait ~1 minute. Your site is live at
   `https://<your-username>.github.io/<repository-name>/`.

That's it. Every time you edit `data.js` and commit, the live site updates
automatically within a minute or two.

> **Tip — custom name:** if you name the repository `<your-username>.github.io`,
> the site is served at the root `https://<your-username>.github.io/`.

---

## 2) Update the venue data (the important part)

**You only ever edit `data.js`.** You can do it right on GitHub — no software to install.

### Edit on GitHub (easiest)
1. Open the repository → click **`data.js`**.
2. Click the **pencil (Edit)** icon.
3. Make your change (see recipes below).
4. Scroll down → **Commit changes**. The website updates itself shortly after.

### Recipe A — Add a conference
Find the `const CONFERENCES = [` list. Copy one whole block `{ ... },`, paste it as a
new entry, and change the values:

```js
{
  id: "myconf27",                 // short, unique, no spaces
  name: "Full Conference Name",
  acronym: "SHORT 2027",
  scope: "international",          // "international" or "national"
  categories: ["ml", "nlp"],      // one or more IDs from the CATEGORIES list (top of file)
  country: "United States",
  city: "Boston, MA",
  host: "Host University / Organiser",
  venue: "IEEE Xplore",           // where papers get published/indexed
  rank: "CORE A*",                // optional (e.g. "HEC Recognised · IEEE")
  dates: "Jul 2027",              // when the event happens
  deadline: "2027-02-15",         // paper CLOSE date — format YYYY-MM-DD
  abstractDeadline: "2027-02-08", // optional
  link: "https://official-page-url/",
  notes: "One-line description (optional)."
},
```

### Recipe B — Add a journal
Find `const JOURNALS = [` and copy a block. Journals are usually year-round, so set
`deadline: null` (shown as **Rolling**). Give a `deadline` only for an open special issue.

```js
{
  id: "myjournal",
  name: "Journal Full Name",
  acronym: "SHORT NAME",
  scope: "international",
  categories: ["ml", "ts"],
  country: "Netherlands",         // publisher country
  publisher: "Elsevier",
  venue: "ScienceDirect",
  indexing: "JCR Q1 · Scopus · HEC W",
  rank: "Q1",
  deadline: null,                 // null = rolling; or "YYYY-MM-DD" for a special issue
  link: "https://journal-url/",
  notes: "One-line description (optional)."
},
```

### Recipe C — Add a stand-alone Call for Papers (e.g. a special issue)
Add to `const SPECIAL_CALLS = [`. These appear on the **Call for Papers** page. This list
already includes the open call-for-papers pages of many Elsevier (ScienceDirect) and Springer
Computer-Science journals; set `deadline: null` for an ongoing call (shown as "Open call") or a
`"YYYY-MM-DD"` date for a specific special issue. The Call for Papers page also has buttons to the
publishers' complete live listings, which update continually.

### Recipe C2 — Add a student/faculty publication
Find `const PUBLICATIONS = [` and copy a block. These appear on the **Publications** page,
newest first. `date` is the publication date (`YYYY-MM-DD`), `type` is `"conference"` or
`"journal"`, and `authors` is optional (delete the line to hide it).

```js
{
  id: "pub-mywork-2026",
  title: "Paper Title",
  authors: "A. Author, B. Author",   // optional
  type: "journal",                   // "journal" or "conference"
  venue: "IEEE Access",              // journal name or conference (e.g. "FIT 2025")
  date: "2026-03-01",
  abstract: "A few sentences summarising the paper.",
  link: "https://doi.org/..."        // publisher / DOI link
},
```

### Recipe C3 — Add a blog article
Find `const BLOG_POSTS = [` and copy a block. Each article opens on its own page.
The `body` is a list of lines: a line starting with `## ` becomes a heading, a line
starting with `- ` becomes a bullet, everything else is a paragraph. Reading time is
calculated automatically, and a coloured cover is drawn unless you supply an `image` URL.

```js
{
  id: "my-article",                 // short slug, no spaces (used in the link)
  title: "My Article Title",
  author: "RCAI Editorial",
  date: "2026-09-01",
  category: "Publishing Guide",     // shown as a tag
  icon: "pen",                      // cover icon keyword (see the icons list)
  excerpt: "One or two sentences shown in the blog list.",
  body: [
    "First paragraph of the article.",
    "## A Section Heading",
    "Another paragraph.",
    "- A bullet point",
    "- Another bullet point"
  ]
},
```

### Recipe D — Change a deadline
Just edit the `deadline:` value. The site **automatically** recalculates the countdown
and re-labels the card as **Open**, **Closing soon** (≤ 30 days) or **Closed**.

### Recipe E — Remove a venue
Delete its whole `{ ... },` block.

### Recipe F — Add a new sub-field
Add an entry to the `CATEGORIES` list at the top of `data.js` (give it an `id`, `name`,
`icon` emoji and one-line `blurb`), then reference that `id` in any venue's `categories`.

> **Golden rules:** keep every `id` unique; wrap text in `"quotes"`; end each field with a
> comma; use the `YYYY-MM-DD` date format. If the site ever looks blank after an edit, you
> most likely removed a comma or a quote — undo the last commit and try again.

---

## 3) Preview locally (optional)

Because the data is a plain `.js` file (not fetched JSON), you can just **double-click
`index.html`** to open it in any browser — no local server needed.

---

## Design notes

- **Colours** follow the FAST-NUCES identity: cerulean `#0091d5`, deep navy, ebony ink.
- **Fonts** (loaded from Google Fonts): *Bricolage Grotesque* (headings),
  *IBM Plex Sans* (body), *IBM Plex Mono* (dates & labels).
- **Dark mode** is automatic (follows the visitor's system) with a manual toggle in the header.
- Fully responsive; works on phones, tablets and desktops.

---

## Maintenance checklist (suggested, each term)

- [ ] Update deadlines for the new cycle of recurring venues.
- [ ] Remove venues whose deadlines have long passed (or leave them — they show as *Closed*).
- [ ] Add any new conferences/journals members recommend.
- [ ] Verify a few official links still work.

---

*Built for RCAI — Research Committee · AI & Data Science. Information-sharing purpose only.*
