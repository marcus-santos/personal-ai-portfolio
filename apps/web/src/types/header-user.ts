interface headerUser {
  title: string;
  titleRef: string;
  chatRef: string;
  portfolioRef: string;
  aboutRef: string;
  transfer: string;
  githubRef: string;
  linkedInRef: string;
  instagramRef: string;
}

const marcus: headerUser = {
  title: 'marcus-santos',
  titleRef: '/marcus',
  chatRef: '/marcus/chat',
  portfolioRef: '/marcus/portfolio',
  aboutRef: '/marcus/about',
  transfer: '/lukas',
  githubRef: 'https://www.github.com/marcus-santos',
  linkedInRef: 'https://www.linkedin.com/in/marcus-vinicius-csantos',
  instagramRef: 'https://www.instagram.com/marcus.csantos/',
};

const lukas: headerUser = {
  title: 'lukascampos',
  titleRef: '/lukas',
  chatRef: '/lukas/chat',
  portfolioRef: '/lukas/portfolio',
  aboutRef:
    'https://drive.usercontent.google.com/download?id=1440eo0Mr_oz4KCzquBpwnyQHa7Cso2_V&export=download',
  transfer: '/marcus',
  githubRef: 'https://www.github.com/lukascampos',
  linkedInRef: 'https://www.linkedin.com/in/lukas-campos',
  instagramRef: 'https://www.instagram.com/lukasg_campos/',
};

export { marcus, lukas };
