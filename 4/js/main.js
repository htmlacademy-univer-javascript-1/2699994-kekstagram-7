const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const getNumber = function() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
};

const getCount = getNumber();


//Комментарии
const commentsArray= ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const randomComment = function () {
  const count = randomInt(1, 2);
  const firstIndex = randomInt(0, commentsArray.length - 1);
  let result = commentsArray[firstIndex];

  if (count === 2) {
    let secondIndex = randomInt(0, commentsArray.length - 1);

    while (secondIndex === firstIndex) {
      secondIndex = randomInt(0, commentsArray.length - 1);
    }

    result = `${result  } ${  commentsArray[secondIndex]}`;
  }

  return result;
};

const getCommentId = (function () {
  let id = 1;
  return function () {
    id++;
    return id;
  };
})();

const NAMES = ['Артём', 'Кекс', 'Лена', 'Иван', 'Оля', 'Макс', 'Даша', 'Петя', 'Соня'];


const getRandomName = function () {
  return NAMES[randomInt(0, NAMES.length - 1)];
};

const getComments = function (count) {
  const comments = [];
  for (let i = 0; i < count; i++) {
    const newComment = {
      id: getCommentId(),
      avatar: `img/avatar-${  randomInt(1, 6)  }.svg`,
      message: randomComment(),
      name: getRandomName()
    };
    comments.push(newComment);
  }
  return comments;
};

const getPhotoData = function () {
  const currentId = getCount();

  return {
    id: currentId,
    url: `photos/${  currentId  }.jpg`,
    description: `Описание фото №${  currentId}`,
    likes: randomInt(15, 200),
    comments: getComments(randomInt(0, 30))
  };
};


const photos = [];

for (let i = 0; i < 25; i++) {
  photos.push(getPhotoData());
}
