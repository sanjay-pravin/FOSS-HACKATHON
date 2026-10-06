/* NAVIGATION */
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open', !isOpen);
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('open');
    });
  });
}

/* SECTION REVEALS */
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

/* STORY BOOK: all chapter content lives here */
const stories = [
  {
    chapter: 'CHAPTER 01', title: 'TWO FRIENDS',
    paragraph1: 'Arun and Karthik grew up on the same street, sharing mangoes, games, and dreams beneath the same old tree.',
    paragraph2: 'They had the same opportunities before them—but they would learn to measure success in very different ways.',
    background: 'sunrise', scene: 'friends', caption: 'Two friends, one small village, and a future yet unwritten.',
    props: ['tree', 'house'], overlay: 'THE SAME BEGINNING'
  },
  {
    chapter: 'CHAPTER 02', title: 'TWO DREAMS',
    paragraph1: 'As they grew older, Arun dreamed of a grand house, fine clothes, and shelves filled with things that proved he had succeeded.',
    paragraph2: 'Karthik dreamed of understanding the world. He believed that every new thing learned could take him somewhere he had never been.',
    background: 'green', scene: 'dreams', caption: 'One counted what he could collect. The other wondered what he could discover.',
    props: ['coins', 'book'], overlay: 'WHAT MAKES A LIFE RICH?'
  },
  {
    chapter: 'CHAPTER 03', title: 'THE FIRST BOOK',
    paragraph1: 'One quiet evening, Karthik found an old book in his grandfather’s room. A small lamp lit the pages as he read late into the night.',
    paragraph2: 'The words opened doors in his mind. He began to ask questions, practise new skills, and see learning as a companion—not a chore.',
    background: 'study', scene: 'study', caption: 'Under a little lamp, a bigger world began to open.',
    props: ['desk', 'lamp', 'stack'], overlay: 'A BOOK. A LAMP. A NEW WORLD.'
  },
  {
    chapter: 'CHAPTER 04', title: 'DIFFERENT CHOICES',
    paragraph1: 'Arun worked hard to buy more things. Each new possession made him proud, and he believed he was moving closer to success.',
    paragraph2: 'Karthik spent his free hours reading, learning, and practising. His progress was quieter, but the things he learned travelled with him.',
    background: 'brown', scene: 'choices', caption: 'Their days filled up with different kinds of wealth.',
    props: ['coins', 'box', 'book', 'stack'], overlay: 'COLLECTING OR LEARNING?'
  },
  {
    chapter: 'CHAPTER 05', title: 'THE TEST OF TIME',
    paragraph1: 'Then a fierce storm swept through the village. Rain filled the streets, water entered homes, and Arun watched his belongings become damaged.',
    paragraph2: 'The things he had worked so hard to gather could not protect themselves from the rising water. For the first time, his confidence gave way to fear.',
    background: 'storm', scene: 'storm', caption: 'The storm did not ask how much a person owned.',
    props: ['house', 'box', 'rain'], overlay: 'THE STORM ARRIVED'
  },
  {
    chapter: 'CHAPTER 06', title: 'WHAT REMAINED?',
    paragraph1: 'When the rain passed, Arun stood among the damaged remains of his possessions. What had once made him feel secure now lay broken or washed away.',
    paragraph2: 'Karthik sat beside him and listened. He had lost little, because his greatest investment was the knowledge he carried in his mind.',
    background: 'cool', scene: 'flood', caption: 'When the water settled, the question remained.',
    props: ['box', 'book', 'light'], overlay: 'WHAT CAN NEVER BE SWEPT AWAY?'
  },
  {
    chapter: 'CHAPTER 07', title: 'KNOWLEDGE OPENS A DOOR',
    paragraph1: 'Karthik used what he had learned to help neighbours organise supplies, repair simple tools, and find practical ways to solve the problems around them.',
    paragraph2: 'People began to trust his calm thinking. His knowledge did not make the storm disappear—but it helped the community take its next steps.',
    background: 'green', scene: 'opportunity', caption: 'Knowledge became useful when it was put to work.',
    props: ['book', 'sign', 'light'], overlay: 'LEARNING BECAME ACTION'
  },
  {
    chapter: 'CHAPTER 08', title: 'A NEW BEGINNING',
    paragraph1: 'Karthik used his skills to find meaningful work and help rebuild what the storm had damaged. Each problem taught him something new.',
    paragraph2: 'His books had become more than pages on a shelf. They had helped him think, create, work with others, and recognise possibilities where others saw only loss.',
    background: 'golden', scene: 'work', caption: 'What he had learned helped him build what came next.',
    props: ['desk', 'laptop', 'book', 'lamp'], overlay: 'KNOWLEDGE CREATED POSSIBILITY'
  },
  {
    chapter: 'CHAPTER 09', title: 'THE CHANGED LIFE',
    paragraph1: 'One evening, Arun visited Karthik. This time he did not ask about possessions or money. He asked how he could begin learning too.',
    paragraph2: 'Karthik opened a book and made room beside him. Arun discovered that education was not a prize reserved for someone else—it was a path he could choose at any age.',
    background: 'warm', scene: 'teaching', caption: 'A new chapter began when Arun was ready to learn.',
    props: ['book', 'stack', 'light'], overlay: '“WILL YOU TEACH ME?”'
  },
  {
    chapter: 'CHAPTER 10', title: 'THE WEALTH THAT REMAINS',
    paragraph1: 'Years later, the friends remembered the storm—not only for what it took away, but for the lesson it revealed. Possessions could be lost; learning could be carried forward.',
    paragraph2: 'Arun had begun to understand the wisdom of Kural 400: education is an imperishable wealth. The most valuable thing a person can gain is something that becomes part of who they are.',
    background: 'gold', scene: 'final', caption: 'The greatest wealth is the wisdom that remains within.',
    props: ['glowbook', 'light'], overlay: 'கல்வி · KNOWLEDGE'
  }
];

const storyPage = document.getElementById('storyPage');
const chapterNumber = document.getElementById('chapterNumber');
const chapterTitle = document.getElementById('chapterTitle');
const chapterCounter = document.getElementById('chapterCounter');
const paragraphOne = document.getElementById('paragraphOne');
const paragraphTwo = document.getElementById('paragraphTwo');
const scene = document.getElementById('scene');
const sceneProps = document.getElementById('sceneProps');
const sceneCaption = document.getElementById('sceneCaption');
const sceneOverlayText = document.getElementById('sceneOverlayText');
const storyPageNumber = document.getElementById('storyPageNumber');
const previousButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
const storyDots = Array.from(document.querySelectorAll('.story-dot'));
let currentPage = 0;

function makeProp(type, index) {
  const element = document.createElement('span');
  element.className = `scene-object prop-${type}`;
  element.setAttribute('aria-hidden', 'true');
  if (type === 'house') element.innerHTML = '<span class="prop-door"></span>';
  if (type === 'rain') {
    element.className = 'scene-object rain-layer';
    for (let i = 0; i < 32; i += 1) {
      const drop = document.createElement('i');
      drop.className = 'prop-drop';
      drop.style.left = `${(i * 31 + 7) % 100}%`;
      drop.style.animationDelay = `${-((i * 13) % 70) / 100}s`;
      drop.style.animationDuration = `${0.55 + (i % 5) * 0.1}s`;
      element.appendChild(drop);
    }
  }
  if (type === 'light' || type === 'glowbook') {
    element.className = `scene-object prop-${type}`;
    if (type === 'glowbook') element.innerHTML = '<span class="glowing-book-symbol">கல்வி</span>';
  }
  return element;
}

function showPage(index) {
  currentPage = Math.max(0, Math.min(stories.length - 1, index));
  const story = stories[currentPage];
  chapterNumber.textContent = story.chapter;
  chapterTitle.textContent = story.title;
  chapterCounter.textContent = `${String(currentPage + 1).padStart(2, '0')} / ${String(stories.length).padStart(2, '0')}`;
  paragraphOne.textContent = story.paragraph1;
  paragraphTwo.textContent = story.paragraph2;
  sceneCaption.textContent = story.caption;
  sceneOverlayText.textContent = story.overlay;
  storyPageNumber.textContent = String(currentPage + 1);
  scene.dataset.scene = story.scene;
  scene.setAttribute('aria-label', `${story.title}: ${story.caption}`);
  sceneProps.replaceChildren();
  story.props.forEach((prop, i) => sceneProps.appendChild(makeProp(prop, i)));
  storyDots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentPage;
    dot.classList.toggle('active', active);
    if (active) dot.setAttribute('aria-current', 'step');
    else dot.removeAttribute('aria-current');
  });
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === stories.length - 1;
  storyPage.classList.remove('turning');
  // Restart the page transition without adding extra event listeners.
  void storyPage.offsetWidth;
  storyPage.classList.add('turning');
}

previousButton.addEventListener('click', () => showPage(currentPage - 1));
nextButton.addEventListener('click', () => showPage(currentPage + 1));
storyDots.forEach((dot, index) => dot.addEventListener('click', () => showPage(index)));

/* Keyboard navigation is active while the story is in view, and ignores typing controls. */
document.addEventListener('keydown', (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const target = event.target;
  if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
  const storySection = document.getElementById('story');
  const rect = storySection.getBoundingClientRect();
  const storyInView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!storyInView) return;
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showPage(currentPage - 1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    showPage(currentPage + 1);
  }
});

/* Touch swipe support for the storybook on phones and tablets. */
let touchStartX = 0;
let touchStartY = 0;
const storyBook = document.getElementById('storybook');
storyBook.addEventListener('touchstart', (event) => {
  if (!event.changedTouches.length) return;
  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });
storyBook.addEventListener('touchend', (event) => {
  if (!event.changedTouches.length) return;
  const dx = event.changedTouches[0].clientX - touchStartX;
  const dy = event.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
  showPage(currentPage + (dx < 0 ? 1 : -1));
}, { passive: true });

/* Start the story on its first page. */
showPage(0);
