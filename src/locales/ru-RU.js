import localeAntd from 'antd/es/locale/ru_RU'

const messages = {
  'topBar.issuesHistory': 'История заданий',
  'topBar.projectManagement': 'Управление проектом',
  'topBar.typeToSearch': 'Поиск...',
  'topBar.findPages': 'Поиск страниц...',
  'topBar.actions': 'Действия',
  'topBar.status': 'Статус',
  'topBar.profileMenu.hello': 'Привет',
  'topBar.profileMenu.billingPlan': 'Тарифный план',
  'topBar.profileMenu.role': 'Роль',
  'topBar.profileMenu.email': 'Емайл',
  'topBar.profileMenu.phone': 'Телефон',
  'topBar.profileMenu.editProfile': 'Редактировать профиль',
  'topBar.profileMenu.logout': 'Выйти',
  'author.profile.info.totalArticles': 'Всего статей',
  'author.profile.info.totalContribution': 'Общий вклад',
  'author.profile.info.followers': 'Подписчики',
  'author.profile.info.upload': 'Загрузить',
  'author.profile.info.editProfile': 'Редактировать профиль',
  'author.profile.form.title': 'Обновите информацию',
  'author.profile.form.name': 'Имя',
  'author.profile.form.nameError': 'Укажите свое имя',
  'author.profile.form.surname': 'Фамилия',
  'author.profile.form.surnameError': 'Укажите свою фамилию',
  'author.profile.form.bio': 'Добавьте свою биографию',
  'author.profile.form.save': 'Сохранить',
  'author.profile.articles.loadMore': 'Загрузить больше',
  'author.profile.articles.latestPublications': 'Последние публикации',
  'author.drafts.index.yourDrafts': 'Ваши черновики',
  'author.drafts.index.writeStory': 'Напишите историю',
  'author.drafts.index.drafts': 'Черновики',
  'author.drafts.index.published': 'Опубликовано',
  'author.drafts.list.empty': 'Пустой',
  'author.drafts.list.edit': 'Редактировать',
  'author.drafts.list.delete': 'Удалить',
  'author.drafts.list.actions': 'Действия',
  'article.details.comments.leaveComment': 'Оставить комментарий',
  'article.details.comments.commentMessage': 'Введите свой комментарий ..',
  'article.details.comments.commentMessageError': 'Пожалуйста, оставьте свой комментарий',
  'article.details.comments.comment': 'Комментарий',
  'article.details.comments.comments': 'Комментарии',
  'article.details.comments.loadMore': 'Загрузить еще',
  'article.details.comments.editComment': 'Редактировать комментарий',
  'article.details.comments.deleteComment': 'Удалить комментарий',
  'article.details.comments.deleteTitle': 'Вы действительно хотите удалить?',
  'article.details.comments.cancel': 'Отмена',
  'article.details.comments.delete': 'Удалить',
  'article.details.comments.edit': 'Редактировать',
  'article.details.comments.reply': 'Ответить',
  'article.details.comments.replyMessage': 'Введите свой ответ ...',
  'article.details.comments.replyMessageError': 'Пожалуйста, предоставьте свой ответ',
  'article.details.comments.editReply': 'Изменить ответ',
  'article.details.comments.deleteReply': 'Удалить ответ',
  'service.about.index.aboutBilerman': 'О Билерман',
  'service.about.contact.contactBilerman': 'Связаться с командой Билерман',
  'service.about.contact.message': 'Пожалуйста, свяжитесь с нами, если у вас есть какие-нибудь вопросы.',
  'service.privacyPolicy.index.privacyPolicy': 'Правило конфиденциальности Билерман',
  'service.privacyPolicy.index.date': 'Действующий: Март 15, 2021!',
  'service.privacyPolicy.index.message1': 'Билерман колдонгонуңуз үчүн рахмат. Биздин милдет -' +
    ' адамдардын дүйнө жөнүндө түшүнүгүн тереңдетүү жана маанилүү идеяларды жайылтуу',
  'service.privacyPolicy.index.message2':'This Privacy Policy explains how A Bilerman Corporation (“Bilerman,” “we,” or “us”)\n' +
    '            collects, uses, and discloses information about you. This Privacy Policy applies when\n' +
    '            you use our websites, mobile applications, and other online products and services that\n' +
    '            link to this Privacy Policy (collectively, our “Services”), contact our customer service\n' +
    '            team, engage with us on social media, or otherwise interact with us.',
  'service.privacyPolicy.index.message3': 'We may change this Privacy Policy from time to time. If we make changes, we will notify\n' +
    '            you by revising the date at the top of this policy and, in some cases, we may provide\n' +
    '            you with additional notice (such as adding a statement to our website or providing you\n' +
    '            with a notification). We encourage you to review this Privacy Policy regularly to stay\n' +
    '            informed about our information practices and the choices available to you.',
  'service.terms.index.termsOfService': 'Условия использования Билерман',
  'service.terms.index.message1': 'These Terms of Service (“Terms”) apply to your access to and use of the websites, mobile\n' +
    '            applications and other online products and services (collectively, the “Services”)\n' +
    '            provided by A Bilerman Corporation (“Bilerman” or “we”). By clicking your consent (e.g.\n' +
    '            “Continue,” “Sign-in,” or “Sign-up,”) or by using our Services, you agree to these\n' +
    '            Terms, including the mandatory arbitration provision and class action waiver in the\n' +
    '            Resolving Disputes; Binding Arbitration Section.',
  'service.terms.index.message2': 'Our Privacy Policy explains how we collect and use your information while our Rules\n' +
    '            outline your responsibilities when using our Services. By using our Services, you’re\n' +
    '            agreeing to be bound by these Terms and our Rules. Please see our Privacy Policy for\n' +
    '            information about how we collect, use, share and otherwise process information about\n' +
    '            you.',
  'service.terms.index.message3': 'If you have any questions about these Terms or our Services, please contact us at\n' +
    '            bilermaninc@gmail.com.',
  'auth.404.index.404': 'Страница не найдена',
  'auth.404.index.description': 'Эта страница устарела, удалена или вообще не существует',
  'auth.404.index.goBack': 'Вернуться  назад',
  'auth.500.index.serverError': 'Ошибка сервера',
  'auth.confirm.index.hello': 'Привет',
  'auth.confirm.index.thanks': 'Спасибо за регистрацию в Билерман!',
  'auth.confirm.index.emailVerified': 'Ваша учетная запись электронной почты подтверждена.',
  'auth.confirm.index.signInContinue': 'Пожалуйста, войдите, чтобы продолжить.',
  'auth.confirm.index.signIn': 'Войти',
  'auth.confirm.index.oops': 'Ой!',
  'auth.confirm.index.emailNotVerified': 'Электронный адрес не подтвержден.!',
  'auth.confirm.index.message': 'Пожалуйста, просмотрите сообщение ниже, чтобы узнать, что пошло не так.!',
  'auth.confirm.index.signUp': 'зарегистрируйтесь',
  'auth.confirm.index.toContinue': 'чтобы продолжить.',
  'auth.login.index.welcome': 'Добро пожаловать в',
  'auth.login.index.signIn': 'Войдите в свой аккаунт',
  'auth.login.index.email': 'Электронное письмо',
  'auth.login.index.password': 'Пароль',
  'auth.login.index.forgotPassword': 'Забыл пароль?',
  'auth.login.index.dontHaveAccount': 'Нет учетной записи?',
  'auth.login.index.signUp': 'Зарегистрироваться',
  'auth.login.index.inputEmail': 'Пожалуйста, введите свой адрес электронной почты',
  'auth.login.index.inputPassword': 'Пожалуйста, введите свой пароль',
  'auth.register.feedback.thankYou': 'Спасибо за регистрацию в Билерман!',
  'auth.register.feedback.checkYourEmail': 'Проверьте свою электронную почту и следуйте инструкциям по активации учетной записи.',
  'auth.register.feedback.resend': 'Повторно отправьте письмо с подтверждением, если вы его не получили.',
  'auth.register.feedback.resendButton': 'Повторно отправить',
  'auth.register.feedback.confirm': 'Уже подтверждено?',
  'auth.register.form.info': 'И начните уделять больше времени своим проектам.',
  'auth.register.form.createAccount': 'Создать учетную запись',
  'auth.register.form.firstName': 'Имя',
  'auth.register.form.lastName': 'Фамилия',
  'auth.register.form.email': 'Электронная почта',
  'auth.register.form.password': 'Пароль',
  'auth.register.form.passwordConfirm': 'Подтверждение пароля',
  'auth.register.form.signUp': 'Зарегистрироваться',
  'auth.register.form.haveAccount': 'Уже есть аккаунт?',
  'auth.register.form.inputFirstName': 'Напишите свое имя',
  'auth.register.form.inputLastName': 'Напишите свою фамилию',
  'auth.register.form.inputEmail': 'Напишите свой адрес электронной почты',
  'auth.register.form.createPassword': 'Пожалуйста, придумайте пароль',
  'auth.register.form.confirmPassword': 'Подтвердите пароль',
  'auth.password.forgot.feedback.thankYou': 'Спасибо!',
  'auth.password.forgot.feedback.instruction': 'Инструкции по обновлению пароля были отправлены на вашу электронную почту.',
  'auth.password.forgot.feedback.instructionFollow': 'Пожалуйста, следуйте инструкциям, чтобы обновить свой пароль.',
  'auth.password.forgot.feedback.toContinue': 'чтобы продолжить.',
  'auth.password.forgot.feedback.resetPassword': 'Обновить пароль',
  'auth.password.forgot.feedback.resetMyPassword': 'Обновить мой пароль',
  'auth.password.forgot.feedback.goToSignIn': 'Перейти к Войти',
  'article.details.relatedArticles.relatedPosts': 'Похожие Посты',
  'article.details.profile.follow': 'Подписаться',
  'article.editor.form.publishDraft': 'Опубликуйте свой черновик',
  'article.editor.form.preview': 'Предварительный просмотр вашей статьи',
  'article.editor.form.image': 'Выберите изображение для просмотра',
  'article.editor.form.imageQuality': 'Используйте высококачественное изображение в своей истории, чтобы сделать ее более привлекательной для читателей.',
  'article.editor.form.note': 'Примечание:',
  'article.editor.form.noteMessage': 'Изменения здесь повлияют на то, как ваша история будет отображаться в общественных местах, таких как домашняя страница Билермана, но не на саму историю.',
  'article.editor.form.language': 'Язык содержания',
  'article.editor.form.tag': 'Теги',
  'article.editor.form.tagContent': 'Добавьте или измените теги (до 5), чтобы читатели знали, о чем ваша история',
  'article.editor.form.publish': 'Публиковать',
  'article.editor.form.addTag': 'Добавить тег',
  'article.editor.form.title': 'Заголовок',
  'article.editor.form.subtitle': 'Подзаголовок',
  'article.editor.form.inputTitle': 'Пожалуйста, напишите название вашей статьи',
  'article.editor.form.inputSubtitle': 'Пожалуйста, напишите свой подзаголовок',
  'article.editor.form.selectLanguage': 'Пожалуйста, выберите язык статьи',
  'article.editor.index.yourTitle': 'Ваш заголовок ..',
}

export default {
  code: 'ru',
  locale: 'ru-RU',
  localeAntd,
  messages,
}
