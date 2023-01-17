/* eslint-disable max-len */
export const newSteps = [
  {
    id: 'intro',
    attachTo: { element: '.first-element', on: 'bottom' },
    beforeShowPromise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: 'Welcome to PokeTori!',
    text: ['PokeTori is a word association game based around the world of Pokemon.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'step1',
    attachTo: { element: '.first-element', on: 'bottom' },
    beforeShowPromise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: 'How to Play [1]',
    text: ['Enter a Pokemon name and hit enter.  If it\'s a valid name (spelled correctly), it will appear in the text prompt above and in the used word box below.'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'step2',
    attachTo: { element: '.first-element', on: 'bottom' },
    beforeShowPromise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: 'How to Play [2]',
    text: ['Enter another Pokemon name, but it must start with the last letter of the previous name ( pikach[u] => [u]rsaring ). Watch the timer!'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
  {
    id: 'final',
    attachTo: { element: '.first-element', on: 'bottom' },
    beforeShowPromise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: 'shepherd-button-secondary',
        text: 'Exit',
        type: 'cancel'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Back',
        type: 'back'
      },
      {
        classes: 'shepherd-button-primary',
        text: 'Next',
        type: 'next'
      }
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: 'Have Fun!',
    text: ['Try and list as many as you can!  The timer will reset on every successful name, so think fast!'],
    when: {
      show: () => {
        console.log('show step');
      },
      hide: () => {
        console.log('hide step');
      }
    }
  },
];
