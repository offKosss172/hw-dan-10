// присваивание класса Active кнопке - да не кнопка а ли - условно для себя назвал єто кнопкой, тут не менял разметку
ActiveBtn = document.querySelectorAll('.tabs-title');
TaskText = document.querySelector('.tasktext')




ActiveBtn.forEach(function(tab) {
  tab.addEventListener('click', function() {
    ActiveBtn.forEach(function(tab) {
      tab.classList.remove('active');
    });
    this.classList.add('active');
    showParagraph(); // это запуск функции которая скрывает/показывает текст которую написал ниже
  });
  
});

// выводим нужный текст (точнее показываем скрытый) в поле див в зависимости от того какая кнока (ли) активна

function showParagraph() {
    let activeTab = document.querySelector('.tabs-title.active');
    let activeParagraph = document.getElementById(activeTab.id + 'text');
    let tasktext = document.querySelector('.tasktext');
  
    tasktext.innerHTML = activeParagraph.innerHTML;
  }
  
  
      