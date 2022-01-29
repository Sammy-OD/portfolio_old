window.onload = () => {
  window.onscroll = () => {
    if (window.scrollY > 20) {
      document.querySelector('.navbar').classList.add('sticky');
    } else {
      document.querySelector('.navbar').classList.remove('sticky');
    }

    if (window.scrollY > 20) {
      document.querySelector('.scroll-up-button').classList.add('show');
    } else {
      document.querySelector('.scroll-up-button').classList.remove('show');
    }
  }

  //slide-up script
  document.querySelector('.scroll-up-button').addEventListener('click', () => {
    window.scrollTo(0, 0)
  });

  //toggle menu-btn
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar .menu').classList.toggle('active');
    document.querySelector('.menu-btn i').classList.toggle('active');
  });

  if (window.innerWidth <= 947 || screen.width <= 947) {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.navbar .menu').classList.toggle('active');
        document.querySelector('.menu-btn i').classList.toggle('active');
      });
    });
  }

  //typing script
  const contents = ['Web Developer', 'Programmer', 'Graphic Designer'];
  let content = 0;
  let contentIndex = 0;
  let interval;
  const typing = document.querySelector('.typing');

  function Type () {
    let text = contents[content].substring(0, contentIndex);
    typing.innerHTML = text;

    if (text === contents[content]) {
      clearInterval(interval);
      setTimeout(() => {
        interval = setInterval(Delete, 50);
      }, 1200);
    }

    contentIndex++;
  }

  function Delete () {
    let text = contents[content].substring(0, contentIndex - 1);
    typing.innerHTML = text;


    if (text === '') {
      clearInterval(interval);

      if (content === contents.length - 1) {
        content = 0;
      } else {
        content ++;
      }

      contentIndex = 0;

      setTimeout(() => {
        interval = setInterval(Type, 100);
      }, 200);
    }

    contentIndex--;
  }

  interval = setInterval(Type, 100);

  //Tab script
  function openProject (event, proj) {
    event.preventDefault();
    const tabContent = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab-link');

    tabContent.forEach(tab => {
      tab.style.display = "none";
    });

    tabLinks.forEach(link => {
      link.classList.remove('active');
    });

    document.getElementById(proj).style.display = "flex";
    event.target.classList.add('active');
  }

  const tab = ['web', 'graphics'];

  const tabLinks = document.querySelectorAll('.tab-link');
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', () => {
      openProject(event, tab[i]);
    });
  }

  document.getElementById('default').click();
}